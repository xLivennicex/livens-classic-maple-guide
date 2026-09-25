/**
 * The canonical drop table for a mob.
 *
 * Why this exists: the CoT 2 datamine splits some mobs across two
 * dossier IDs (see mob-dedup.ts). The rich dossier carries the real
 * loot table; the shadow dossier exists to carry exactly one extra
 * row - a quest item. Zombie Mushroom is the clearest case:
 *
 *   dossier 21     -> 17 drops, 2 spawn maps, 3 quest refs
 *   dossier 800011 -> 1 drop: Dark Marble (Bowman)
 *
 * We only publish `/mobs/21`, so read dossier 21 naively and the
 * site silently claims Zombie Mushroom doesn't drop the Bowman
 * job-advancement marble. It does. This module folds the shadow's
 * rows into the canonical mob so every consumer sees one complete
 * table.
 *
 * Consumers: `/mobs/[id]` (detail page) and `data/drop-index.ts`
 * (the /calculators/drops projection). Both used to walk mobs.json
 * themselves; now neither knows shadow dossiers exist.
 */

import mobDossiers from "../data/db/mobs.json";
import { canonicalMobId } from "./mob-dedup";

/** The datamine's own label for quest-gated etc items. */
const QUEST_ITEM_SUBTYPE = "Quest Item";

export interface MobDropRow {
	itemId: number;
	itemName: string;
	itemType: string;
	itemSubtype: string | null;
	reqJob: number | null;
	reqLevel: number | null;
	/** MeowDB rarity score. Null in the feed is normalised to 0. */
	score: number;
	/**
	 * True when the datamine types this as a Quest Item.
	 *
	 * Derived from `itemSubtype`, NOT from "it came out of a shadow
	 * dossier" - the subtype is a fact in the feed, the provenance
	 * would only be our inference. 24 rows site-wide carry it.
	 */
	isQuestItem: boolean;
}

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
	drops: RawDrop[] | null;
}

function toRow(d: RawDrop): MobDropRow {
	return {
		itemId: d.itemId,
		itemName: d.itemName,
		itemType: d.itemType,
		itemSubtype: d.itemSubtype,
		reqJob: d.reqJob,
		reqLevel: d.reqLevel,
		// Score can be null for very old entries; treat as 0 (very
		// rare) rather than dropping the row - players still care.
		score: d.score ?? 0,
		isQuestItem: d.itemSubtype === QUEST_ITEM_SUBTYPE,
	};
}

function buildDropTables(): Map<number, MobDropRow[]> {
	// itemId-keyed inner map so a row listed by both dossiers
	// collapses instead of rendering twice.
	const staging = new Map<number, Map<number, MobDropRow>>();

	for (const m of mobDossiers as RawMob[]) {
		if (!m.drops?.length) continue;
		const id = canonicalMobId(m.id);
		let rows = staging.get(id);
		if (!rows) staging.set(id, (rows = new Map()));

		for (const d of m.drops) {
			const row = toRow(d);
			const existing = rows.get(row.itemId);
			// Same item from both dossiers: keep the better score.
			if (existing && existing.score >= row.score) continue;
			rows.set(row.itemId, row);
		}
	}

	// Sort each table best-drop-first so no consumer has to.
	const out = new Map<number, MobDropRow[]>();
	for (const [id, rows] of staging) {
		out.set(id, [...rows.values()].sort((a, b) => b.score - a.score));
	}
	return out;
}

const tables = buildDropTables();

const EMPTY: readonly MobDropRow[] = Object.freeze([]);

/**
 * Folded drop table for a mob, best drops first.
 *
 * Accepts a shadow dossier ID too - it resolves to the canonical
 * mob rather than returning the shadow's one-row fragment.
 */
export function dropsForMob(mobId: number): readonly MobDropRow[] {
	return tables.get(canonicalMobId(mobId)) ?? EMPTY;
}

/** Canonical mob IDs that have at least one drop. */
export const mobIdsWithDrops: readonly number[] = [...tables.keys()];
