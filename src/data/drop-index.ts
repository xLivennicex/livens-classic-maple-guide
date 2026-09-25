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
import { canonicalMobId } from "../lib/mob-dedup";
import { dropsForMob } from "../lib/mob-drops";

interface RawMob {
	id: number;
	name: string;
	stats: {
		level: number;
		isBoss: boolean | null;
	} | null;
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
// Build both projections from the canonical drop tables
// ============================================================
//
// mob-drops.ts owns the shadow-dossier fold, so we only walk
// dossiers that are canonical and let it hand us the complete
// table. Identity (name/level/isBoss) therefore always comes from
// the dossier we actually publish a page for.

const _mobCatalog: MobCatalogEntry[] = [];
const _itemSourcesById = new Map<number, ItemDropSource>();

for (const m of mobs as RawMob[]) {
	if (!m.stats) continue;
	if (m.id !== canonicalMobId(m.id)) continue;
	const drops = dropsForMob(m.id);      // already sorted, best first
	if (drops.length === 0) continue;

	const level = m.stats.level;
	const isBoss = !!m.stats.isBoss;

	_mobCatalog.push({
		id: m.id,
		name: m.name,
		level,
		isBoss,
		// Project down to the four fields the calculator renders -
		// the req/quest fields on MobDropRow would just be dead
		// weight in the client payload.
		drops: drops.map((d) => ({
			itemId: d.itemId,
			itemName: d.itemName,
			itemType: d.itemType,
			score: d.score,
		})),
	});

	for (const d of drops) {
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
			mobLevel: level,
			isBoss,
			score: d.score,
		});
	}
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
