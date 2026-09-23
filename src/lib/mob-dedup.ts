/**
 * Mob-dossier deduplication helper.
 *
 * The CoT 2 datamine feed sometimes exposes the same underlying WZ
 * entity under two dossier IDs. Examples:
 *   - King Slime (wzId 9300003): dossier 800003 has drops + spawn maps
 *     while the twin dossier 800019 is empty
 *   - Jr. Balrog (wzId 6400008): dossier 700001 is authoritative,
 *     800023 is a hollow shadow entry
 *   - 15 more classic bosses / PQ mobs follow the same pattern
 *
 * If we naively render one `/mobs/{id}` page per dossier we get
 * dead-looking pages with empty drop tables and no spawn maps. This
 * module gives us a single source of truth so:
 *
 *   - `/bosses/[slug]` (via bosses.ts) picks the richest dossier
 *   - `/mobs/[id]` skips loser dossiers entirely at build time
 *   - `/mobs/` index page filters losers out of the browse table
 *   - `scripts/generate-mob-redirects.mjs` writes 301s from loser
 *     paths to winner paths into `public/_redirects`
 *
 * "Richest" is defined structurally, not by hand-maintaining winner
 * lists - so when the datamine changes, the dedup follows.
 */

import mobDossiers from "../data/db/mobs.json";

type MobDossier = (typeof mobDossiers)[number];

/**
 * Score a mob dossier by how much cross-reference data it carries.
 * Higher = richer = the dossier ID we prefer as canonical.
 *
 * Weights (empirically tuned to consistently pick the "real" dossier
 * for every known duplicate pair as of 2026-09-23):
 *   - spawn maps × 3  (strongest signal: unique spawn locations)
 *   - drops     × 2  (next: dropped items)
 *   - quests    × 1  (weakest: quest cross-refs)
 */
export function mobDossierRichness(m: MobDossier): number {
	return (
		(m.mapsSpawnedOn?.length ?? 0) * 3 +
		(m.drops?.length ?? 0) * 2 +
		(m.requiredByQuests?.length ?? 0)
	);
}

interface DedupTables {
	/** Set of dossier IDs that are the canonical winner for their wzId. */
	winnerIds: Set<number>;
	/**
	 * Set of dossier IDs that are duplicates (losers) - should not
	 * generate their own /mobs/{id} page and should redirect to
	 * their winner.
	 */
	loserIds: Set<number>;
	/**
	 * Map from loser dossier ID → winner dossier ID. Used to emit
	 * `_redirects` file entries.
	 */
	loserToWinnerId: Map<number, number>;
	/** For display / logging: how many groups had duplicates. */
	duplicateGroupCount: number;
}

/**
 * Build the dedup tables once. Called at module load - the result
 * is memoized in a module-level constant so downstream consumers
 * don't re-scan the mobs list.
 */
function buildDedupTables(): DedupTables {
	// Group all dossiers with a wzId together. Dossiers without a
	// wzId can't dupe so they're always winners by definition.
	const byWzId = new Map<number, MobDossier[]>();
	for (const m of mobDossiers) {
		if (m.wzId == null) continue;
		const arr = byWzId.get(m.wzId) ?? [];
		arr.push(m);
		byWzId.set(m.wzId, arr);
	}

	const winnerIds = new Set<number>();
	const loserIds = new Set<number>();
	const loserToWinnerId = new Map<number, number>();
	let duplicateGroupCount = 0;

	for (const [, group] of byWzId) {
		if (group.length === 1) {
			winnerIds.add(group[0]!.id);
			continue;
		}
		duplicateGroupCount++;
		// Sort by richness descending, tiebreak by lower ID (stable
		// picks for otherwise-identical dossiers).
		const sorted = [...group].sort((a, b) => {
			const dr = mobDossierRichness(b) - mobDossierRichness(a);
			return dr !== 0 ? dr : a.id - b.id;
		});
		const winner = sorted[0]!;
		winnerIds.add(winner.id);
		for (let i = 1; i < sorted.length; i++) {
			loserIds.add(sorted[i]!.id);
			loserToWinnerId.set(sorted[i]!.id, winner.id);
		}
	}

	// Also add every wzId-less mob to winners (they can't dupe).
	for (const m of mobDossiers) {
		if (m.wzId == null) winnerIds.add(m.id);
	}

	return { winnerIds, loserIds, loserToWinnerId, duplicateGroupCount };
}

const tables = buildDedupTables();

export const winnerMobIds: Set<number> = tables.winnerIds;
export const loserMobIds: Set<number> = tables.loserIds;
export const loserToWinnerMobId: Map<number, number> = tables.loserToWinnerId;
export const mobDedupGroupCount: number = tables.duplicateGroupCount;

/** Convenience predicate for filter callbacks. */
export function isCanonicalMobDossier(m: MobDossier): boolean {
	return winnerMobIds.has(m.id);
}

/** Convenience predicate for filter callbacks. */
export function isDuplicateMobDossier(m: MobDossier): boolean {
	return loserMobIds.has(m.id);
}
