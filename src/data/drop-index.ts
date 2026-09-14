/**
 * Drop-index projections for the /calculators/drops page.
 *
 * Ships two slim projections to the client:
 *   1. mobDropCatalog: every mob's drop table (id -> [{itemId, name, score}])
 *   2. itemDropSources: reverse index (itemId -> [{mobId, mobName, mobLevel, score}])
 *
 * The reverse index is precomputed at build time to keep the
 * "hunt for X, who drops it best?" flow fast. Without pre-baking,
 * every item-search would walk all 4300+ mob drop tables.
 *
 * Total client footprint: ~150-250 KB gzipped. Everything else
 * the calculator needs (rarity math, probability math) lives in
 * drop-rates.ts and doesn't need to ship as JSON.
 */

import mobs from "./db/mobs.json";

interface RawDrop {
	itemId: number;
	itemName: string;
	itemType: string;
	itemSubtype: string | null;
	reqJob: number | null;
	reqLevel: number | null;
	score: number | null;
}

interface RawMob {
	id: number;
	name: string;
	stats: {
		level: number;
		isBoss: boolean | null;
	} | null;
	drops: RawDrop[] | null;
}

export interface MobDrop {
	itemId: number;
	itemName: string;
	itemType: string;
	score: number;
}

export interface MobCatalogEntry {
	id: number;
	name: string;
	level: number;
	isBoss: boolean;
	drops: MobDrop[];
}

export interface DropSource {
	mobId: number;
	mobName: string;
	mobLevel: number;
	isBoss: boolean;
	score: number;
}

export interface ItemDropSource {
	itemId: number;
	itemName: string;
	itemType: string;
	sources: DropSource[];   // sorted highest-score first (best drop rate first)
}

// ============================================================
// Build both projections in one pass over mobs.json
// ============================================================

const _mobCatalog: MobCatalogEntry[] = [];
const _itemSourcesById = new Map<number, ItemDropSource>();

for (const m of mobs as RawMob[]) {
	if (!m.stats || !m.drops || m.drops.length === 0) continue;
	const drops: MobDrop[] = [];
	for (const d of m.drops) {
		// Guard against nulls in the datamine. Score can be null
		// for very old entries; treat as 0 (very rare) rather
		// than dropping the entry - user might still care.
		const score = d.score ?? 0;
		drops.push({
			itemId: d.itemId,
			itemName: d.itemName,
			itemType: d.itemType,
			score,
		});

		// Populate reverse index simultaneously.
		let entry = _itemSourcesById.get(d.itemId);
		if (!entry) {
			entry = {
				itemId: d.itemId,
				itemName: d.itemName,
				itemType: d.itemType,
				sources: [],
			};
			_itemSourcesById.set(d.itemId, entry);
		}
		entry.sources.push({
			mobId: m.id,
			mobName: m.name,
			mobLevel: m.stats.level,
			isBoss: !!m.stats.isBoss,
			score,
		});
	}
	if (drops.length === 0) continue;
	// Sort each mob's drops by score descending so the UI can
	// present "best drops first" without client-side sorting.
	drops.sort((a, b) => b.score - a.score);
	_mobCatalog.push({
		id: m.id,
		name: m.name,
		level: m.stats.level,
		isBoss: !!m.stats.isBoss,
		drops,
	});
}

// Sort reverse-index sources per item so the calculator can
// pick the best mob to farm without walking every source.
for (const entry of _itemSourcesById.values()) {
	entry.sources.sort((a, b) => {
		// Higher score = better drop rate. Break ties on lower
		// mob level (easier to farm for the same drop rate).
		if (b.score !== a.score) return b.score - a.score;
		return a.mobLevel - b.mobLevel;
	});
}

// Sort mob catalog by level for easier UI browsing.
_mobCatalog.sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));

export const MOB_DROP_CATALOG: readonly MobCatalogEntry[] = _mobCatalog;
export const ITEM_DROP_SOURCES: readonly ItemDropSource[] =
	Array.from(_itemSourcesById.values()).sort((a, b) => a.itemName.localeCompare(b.itemName));

/**
 * Summary counts for the calculator's honesty banner.
 * Live counts (not hardcoded) so the numbers stay accurate as
 * the datamine evolves.
 */
export const DROP_INDEX_STATS = {
	mobsWithDrops: MOB_DROP_CATALOG.length,
	uniqueItems: ITEM_DROP_SOURCES.length,
	totalDropEntries: MOB_DROP_CATALOG.reduce((s, m) => s + m.drops.length, 0),
};
