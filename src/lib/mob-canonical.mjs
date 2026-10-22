// Canonical-dossier ranking for duplicate mob dossiers (same wzId).
//
// Plain JS on purpose: imported by src/lib/mob-dedup.ts (site build) AND
// scripts/generate-mob-redirects.mjs (plain Node, can't import .ts). One
// definition means the /mobs pages, /bosses pages, and the 301 redirects
// can never disagree about which dossier is "the" mob.

/**
 * How much cross-reference data a dossier carries.
 *   spawn maps x3 (strongest: unique spawn locations)
 *   drops      x2
 *   quests     x1
 * @param {{ mapsSpawnedOn?: unknown[], drops?: unknown[], requiredByQuests?: unknown[] }} m
 */
export function mobDossierRichness(m) {
	return (
		(m.mapsSpawnedOn?.length ?? 0) * 3 +
		(m.drops?.length ?? 0) * 2 +
		(m.requiredByQuests?.length ?? 0)
	);
}

/**
 * Sort comparator, best (canonical) first:
 *   1. has Classic World client stats - the client export only contains
 *      live entities; shadow dossiers fall back to GMS v83 stats, which
 *      Classic World restatted (Jr. Balrog 30,000 vs 325,400 HP)
 *   2. richness
 *   3. lower id (stable tiebreak)
 * @param {{ id: number, statsSource?: string | null }} a
 * @param {{ id: number, statsSource?: string | null }} b
 */
export function compareCanonicalMob(a, b) {
	const client = (m) => (m.statsSource === "classic-world-client" ? 1 : 0);
	return client(b) - client(a) || mobDossierRichness(b) - mobDossierRichness(a) || a.id - b.id;
}
