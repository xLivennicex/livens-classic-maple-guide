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
// Pass 1: fold every dossier into its CANONICAL mob
// ============================================================
//
// The datamine splits some mobs across two dossier IDs: the rich
// one, plus a shadow that exists only to carry a quest-context
// drop (the four job-advancement Dark Marbles, the KPQ Coupon).
// Keyed naively by dossier ID we'd emit a duplicate "Zombie
// Mushroom" row AND link at a dossier that has no page. Fold the
// shadow's drops into the real mob instead - nothing is lost and
// the quest drop finally shows up where players look for it.

interface MergedMob {
	id: number;
	name: string;
	level: number;
	isBoss: boolean;
	/** keyed by itemId so a drop listed by both dossiers collapses */
	drops: Map<number, MobDrop>;
}

const _merged = new Map<number, MergedMob>();

for (const m of mobs as RawMob[]) {
	if (!m.stats || !m.drops || m.drops.length === 0) continue;
	const id = canonicalMobId(m.id);
	let mob = _merged.get(id);
	if (!mob) {
		mob = {
			id,
			name: m.name,
			level: m.stats.level,
			isBoss: !!m.stats.isBoss,
			drops: new Map(),
		};
		_merged.set(id, mob);
	} else if (m.id === id) {
		// The canonical dossier is the authority on identity even
		// if a shadow happened to be visited first.
		mob.name = m.name;
		mob.level = m.stats.level;
		mob.isBoss = !!m.stats.isBoss;
	}

	for (const d of m.drops) {
		// Guard against nulls in the datamine. Score can be null
		// for very old entries; treat as 0 (very rare) rather
		// than dropping the entry - user might still care.
		const score = d.score ?? 0;
		const existing = mob.drops.get(d.itemId);
		// Same item from both dossiers: keep the better score.
		if (existing && existing.score >= score) continue;
		mob.drops.set(d.itemId, {
			itemId: d.itemId,
			itemName: d.itemName,
			itemType: d.itemType,
			score,
		});
	}
}

// ============================================================
// Pass 2: derive both projections from the merged truth
// ============================================================

const _mobCatalog: MobCatalogEntry[] = [];
const _itemSourcesById = new Map<number, ItemDropSource>();

for (const mob of _merged.values()) {
	// Sort each mob's drops by score descending so the UI can
	// present "best drops first" without client-side sorting.
	const drops = [...mob.drops.values()].sort((a, b) => b.score - a.score);
	_mobCatalog.push({
		id: mob.id,
		name: mob.name,
		level: mob.level,
		isBoss: mob.isBoss,
		drops,
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
			mobId: mob.id,
			mobName: mob.name,
			mobLevel: mob.level,
			isBoss: mob.isBoss,
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
