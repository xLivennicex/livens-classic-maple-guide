/**
 * Hunting-map recommendation data + scoring.
 *
 * Given a level and class, we want to suggest 5 good maps to farm.
 * "Good" is a moving target:
 *   - Level match: mobs shouldn't be too far above/below you.
 *   - EXP density: sum of (exp x spawn count) matters more than
 *     any one mob's raw EXP.
 *   - Class fit: mages want low magic-def mobs, physical classes
 *     want low physical-def mobs.
 *   - Bosses excluded from the default view (they're not farm maps).
 *
 * This module builds a slim projection at build time - each map
 * gets reduced from ~20 fields down to just what the recommender
 * needs. Ships as ~40-80 KB of JSON, way smaller than shipping
 * the full 426-map + 4300-mob dataset.
 */

import mapsRaw from "./db/maps.json";
import mobsRaw from "./db/mobs.json";

// ============================================================
// Types
// ============================================================

export type CharacterClass = "beginner" | "warrior" | "magician" | "bowman" | "thief";

interface MobStatsInline {
	level: number;
	exp: number;
	physicalDefense: number;
	magicDefense: number;
	isBoss: boolean;
}

export interface HuntMob {
	id: number;
	name: string;
	count: number;   // spawn count on this map
	stats: MobStatsInline;
}

export interface HuntMap {
	id: number;
	name: string;
	region: string;
	minLvl: number;
	maxLvl: number;
	mobs: HuntMob[];
	// Pre-computed sums that keep the client cheap on every input change.
	totalMobs: number;
	totalRawExp: number;   // sum of (mob.exp * mob.count) - not class-adjusted
	// Sprint 72.1: level of the highest-EXP-contributing non-boss mob.
	// Anchors the "is this map appropriate for the character" check,
	// which was previously based on min/max mobLevelRange - that gave
	// false positives on maps where a low-level entry mob co-exists
	// with high-level trash (Sleepy Dungeon V has Lv 6 to Lv 58 spawns,
	// but the farming-primary mob is Lv 47). Ranking on primary mob
	// level makes the recommender surface maps where the primary target
	// is actually within reach of the character.
	primaryMobLvl: number;
}

interface RawMob {
	id: number;
	name: string;
	stats: {
		level: number;
		exp: number;
		physicalDefense: number;
		magicDefense: number;
		isBoss: boolean | null;
	} | null;
}

interface RawMap {
	id: number;
	name: string;
	region: string | null;
	mobLevelRange: { min: number; max: number } | null;
	mobs: Array<{ id: number; name: string; count: number }> | null;
}

// ============================================================
// Build-time projection
// ============================================================

const mobStatsById = new Map<number, MobStatsInline>();
for (const m of mobsRaw as RawMob[]) {
	if (!m.stats || m.stats.exp <= 0) continue;
	mobStatsById.set(m.id, {
		level: m.stats.level ?? 0,
		exp: m.stats.exp,
		physicalDefense: m.stats.physicalDefense ?? 0,
		magicDefense: m.stats.magicDefense ?? 0,
		isBoss: !!m.stats.isBoss,
	});
}

/**
 * Full recommender dataset: every map that has at least one
 * EXP-granting non-boss mob spawn. Bosses ARE included in each
 * map's mob list (so a party quest can appear if it has trash),
 * but boss-only maps get filtered out.
 */
export const HUNT_MAPS: readonly HuntMap[] = (mapsRaw as RawMap[])
	.map((m) => {
		const mobs: HuntMob[] = [];
		for (const spawn of m.mobs ?? []) {
			const stats = mobStatsById.get(spawn.id);
			if (!stats) continue; // mob has no EXP - skip (probably NPC or event mob)
			mobs.push({
				id: spawn.id,
				name: spawn.name,
				count: spawn.count,
				stats,
			});
		}
		if (mobs.length === 0) return null;
		// Skip maps where every mob is a boss. Farming maps have
		// trash. A single-boss map like a PQ chamber isn't useful
		// for a grind recommendation.
		if (mobs.every((mb) => mb.stats.isBoss)) return null;
		const totalMobs = mobs.reduce((s, mb) => s + mb.count, 0);
		const totalRawExp = mobs.reduce((s, mb) => s + mb.stats.exp * mb.count, 0);
		// Primary mob = the highest raw-EXP contributor (exp * count).
		// Class-adjusted primary can differ per lookup, but for the
		// stable dataset we use raw contribution so pre-baked ordering
		// still holds up regardless of who's asking.
		let primaryLvl = 0;
		let primaryContribution = -1;
		for (const mb of mobs) {
			if (mb.stats.isBoss) continue;
			const contrib = mb.stats.exp * mb.count;
			if (contrib > primaryContribution) {
				primaryContribution = contrib;
				primaryLvl = mb.stats.level;
			}
		}
		return {
			id: m.id,
			name: m.name,
			region: m.region ?? "Unknown",
			minLvl: m.mobLevelRange?.min ?? 0,
			maxLvl: m.mobLevelRange?.max ?? 0,
			mobs,
			totalMobs,
			totalRawExp,
			primaryMobLvl: primaryLvl,
		};
	})
	.filter((m): m is HuntMap => m !== null);

// ============================================================
// Runtime scoring (also used from the browser via JSON handoff)
// ============================================================

/**
 * Score how good a mob is for a given class. Higher = better.
 * The multiplier trims raw EXP by defense penalty:
 *   - Physical classes: penalize physical defense
 *   - Magician: penalize magic defense
 *   - Beginner: no penalty (they're too early to care)
 *
 * The defense-to-penalty curve is deliberately gentle - a mob
 * with 200 def is still farmable, just less efficient than a
 * mob with 0 def. Cap the penalty at 50% so nothing scores 0.
 */
export function classMultiplier(mob: HuntMob, klass: CharacterClass): number {
	if (klass === "beginner") return 1;
	const def = klass === "magician" ? mob.stats.magicDefense : mob.stats.physicalDefense;
	// Sigmoid-ish: def=0 -> 1.0, def=100 -> ~0.7, def=300 -> ~0.5
	// Prevents extreme swings that hide otherwise-viable maps.
	const penalty = Math.min(0.5, def / 400);
	return 1 - penalty;
}

/**
 * Filter maps to those where the character's level overlaps the
 * mob level band. Window is asymmetric - a Lv 30 character can
 * farm Lv 25-35 comfortably, so we widen the upper bound more
 * than the lower.
 */
export function levelMatch(map: HuntMap, characterLevel: number): boolean {
	// Sprint 72.1: anchor on primary mob level, not map range. Maps
	// with wide spawn tables (Lv 6 trash + Lv 58 elites) previously
	// slipped through the range check for characters at both ends.
	// Anchoring on the primary mob keeps recommendations sensible.
	if (map.primaryMobLvl === 0) return false;
	const gap = map.primaryMobLvl - characterLevel;
	// Under-leveled by up to 4 is fine (easy kills); over-leveled by
	// up to 6 is workable but starts pushing damage/accuracy limits.
	return gap >= -6 && gap <= 4;
}

/**
 * Full per-map score for a (level, class) pair. Uses class-adjusted
 * EXP density and applies a mild penalty when the level match is
 * asymmetric (over-leveled players still see high-density maps but
 * ranked slightly below level-appropriate ones).
 */
export function scoreMap(map: HuntMap, characterLevel: number, klass: CharacterClass): number {
	let score = 0;
	for (const mob of map.mobs) {
		if (mob.stats.isBoss) continue; // Don't factor bosses into farming score
		score += mob.stats.exp * mob.count * classMultiplier(mob, klass);
	}
	// Level-mismatch soft penalty. A Lv 30 player farming a Lv 40
	// map takes twice as long per kill, halving effective EXP/hour.
	const mapAvgLvl = (map.minLvl + map.maxLvl) / 2;
	const gap = Math.abs(characterLevel - mapAvgLvl);
	const gapPenalty = Math.max(0.4, 1 - gap * 0.05);
	return score * gapPenalty;
}
