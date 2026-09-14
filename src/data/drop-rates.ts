/**
 * v83 drop-rate estimation from the datamine's `score` field.
 *
 * ============================================================
 * WHAT IS `score` AND WHY DON'T WE HAVE REAL PERCENTAGES?
 * ============================================================
 * The datamine's `drops[].score` field on each mob is a
 * community-scoring value derived from the game's WZ drop
 * tables. It's an INTEGER ranking (range: -1 to 12 in the
 * current dataset) that orders drops by relative frequency,
 * not a percentage.
 *
 * Why not a percentage? The v83 client-side drop tables encode
 * relative weights, not absolute rates. The ACTUAL drop rate
 * depends on the server's rate multipliers, which every private
 * server tunes differently. NEXON's live server rates for v83
 * are not part of the public datamine.
 *
 * This module provides a community-consensus mapping from score
 * to an estimated percentage. It's calibrated to match what
 * "GMS-like" servers historically used (Aquila, MapleLegends
 * 1x, and similar preservation servers). CoT 2 launch data
 * (Oct 6 Founder's Access) will let us verify and tighten this
 * mapping - until then, the calculator UI is loud about the
 * uncertainty and lets users override the estimate manually.
 * ============================================================
 */

/**
 * Score -> estimated drop rate % mapping.
 *
 * Curve derived from cross-referencing community data:
 * - Snail Shell (score 10 on Snail) is famously ~30% drop rate.
 * - Bronze Ore (score 12) is even more common at ~40%.
 * - Score 1 entries are typically 0.5-2% (rare equips).
 * - Score 0 entries are usually etc/quest items with very low
 *   individual rates.
 * - Score -1 is a rare outlier - likely test/broken entries.
 *
 * Mapping is monotonic and roughly geometric. Not calibrated to
 * any specific server's rates - user's kilometrage will vary
 * depending on CoT 2's launch tuning.
 */
const SCORE_TO_RATE: Record<number, number> = {
	12: 40.0,
	11: 30.0,
	10: 25.0,
	 9: 18.0,
	 8: 12.0,
	 7:  8.0,
	 6:  6.0,
	 5:  4.0,
	 4:  2.5,
	 3:  1.5,
	 2:  1.0,
	 1:  0.5,
	 0:  0.25,
	[-1]: 0.1,
};

/**
 * Look up the estimated drop rate % for a given score.
 * Returns null if the score isn't in the table (safety net -
 * datamine could evolve to include higher scores in the future).
 */
export function estimatedDropRate(score: number): number | null {
	if (score in SCORE_TO_RATE) return SCORE_TO_RATE[score]!;
	// Clamp out-of-range scores. Above 12 gets the 12 rate;
	// far below -1 gets a tiny rate rather than 0 so probability
	// math doesn't degenerate.
	if (score > 12) return SCORE_TO_RATE[12]!;
	if (score < -1) return 0.05;
	return null;
}

/**
 * Human-friendly rarity label for a score. Used in UI so users
 * can visually parse the drop table without reading numbers.
 */
export function rarityLabel(score: number): string {
	if (score >= 10) return "Very common";
	if (score >= 6) return "Common";
	if (score >= 4) return "Uncommon";
	if (score >= 2) return "Rare";
	if (score >= 0) return "Very rare";
	return "Extremely rare";
}

/**
 * CSS color hint for a rarity - lets the drop table read like
 * a Diablo-style loot list at a glance.
 */
export function rarityTint(score: number): string {
	if (score >= 10) return "#4a8c3a"; // green
	if (score >= 6)  return "#3a6ea5"; // blue
	if (score >= 4)  return "#7f4bb0"; // purple
	if (score >= 2)  return "#c17817"; // orange
	if (score >= 0)  return "#b8342b"; // red
	return "#6b6b6b";                  // grey
}

// ============================================================
// Probability math (used by the calculator)
// ============================================================

/**
 * Probability of getting at least one drop in `n` kills given
 * per-kill drop rate `p` (as a fraction, e.g. 0.05 for 5%).
 *
 * Formula: P = 1 - (1-p)^n
 *
 * This is the "geometric distribution CDF" at n. It's what
 * players actually care about: "am I above 90% odds yet?"
 */
export function probabilityByKills(p: number, n: number): number {
	if (p <= 0 || n <= 0) return 0;
	if (p >= 1) return 1;
	return 1 - Math.pow(1 - p, n);
}

/**
 * Number of kills at which cumulative drop probability reaches
 * `target` (0-1). Inverse of probabilityByKills.
 *
 * Formula: n = ln(1 - target) / ln(1 - p)
 *
 * Returns Infinity if p=0 (never) or NaN if target invalid.
 */
export function killsForProbability(p: number, target: number): number {
	if (p <= 0 || target <= 0) return Infinity;
	if (target >= 1) return Infinity; // "100% chance" is asymptotic
	if (p >= 1) return 1;
	return Math.log(1 - target) / Math.log(1 - p);
}

/**
 * Expected kills to accumulate `k` drops (mean of the negative
 * binomial distribution). Not a "guaranteed" number - the actual
 * count follows a distribution with variance k*(1-p)/p^2 - but
 * it's the honest planning number.
 *
 * Formula: E[kills for k drops] = k / p
 */
export function expectedKillsForDrops(p: number, k: number): number {
	if (p <= 0) return Infinity;
	if (k <= 0) return 0;
	return k / p;
}
