/**
 * region-theme.ts
 *
 * Single source of truth for "which visual theme does this dossier
 * page use?" All 4 dossier routes (mob / map / npc / quest) call
 * `themeForLocation()` so a mob that spawns in Perion, a map in
 * Perion, an NPC in Perion, and a quest starting in Perion all
 * render with the same warm red-clay palette + Perion background
 * on their social share preview.
 *
 * Signal priority:
 *   1. returnMapName / townName substring match (highest fidelity —
 *      most maps' "return map" IS the nearest town)
 *   2. map name substring match (catches "Henesys Field", etc.)
 *   3. region name coarse match ("Victoria Island" -> henesys hub,
 *      "Ossyria" -> sleepywood, etc.)
 *   4. henesys default (site-wide palette)
 *
 * Regions field in the datamine only has 5 buckets (Victoria Island,
 * Ossyria, Maple Island, Other, Event) so it's too coarse to drive
 * theming alone. Town-string matching gives us the 6 real themes we
 * have backgrounds for.
 */

import type { SiteTheme } from "../layouts/BaseLayout.astro";

// Ordered list of town-substring -> theme. Order matters when strings
// overlap: check "Kerning City" before "Kerning" would be pointless
// (both hit kerning), but "El Nath" must be checked before "Nath" or
// "Ell" collisions. Substrings are lowercased once at load-time.
const TOWN_RULES: Array<[string, SiteTheme]> = [
	// Ossyria (Sleepywood theme covers all of Ossyria for now)
	["sleepywood", "sleepywood"],
	["forgotten hollow", "sleepywood"],
	["orbis", "sleepywood"],
	["el nath", "sleepywood"],
	["aqua", "sleepywood"],  // Aqua Road, if it appears
	["ludus", "sleepywood"], // Ludibrium future-proofing
	// Victoria Island towns
	["kerning", "kerning"],
	["perion", "perion"],
	["ellinia", "ellinia"],
	["henesys", "henesys"],
	["lith harbor", "lith"],
	["florina", "lith"],  // Florina Beach reads as coastal/harbor
	// Maple Island - coastal/tutorial vibe, closest to Lith Harbor
	["amherst", "lith"],
	["southperry", "lith"],
	["mushroom town", "lith"],
	["maple island", "lith"],
];

// Coarse region-name fallback when no town match hits. Keeps at least
// SOMETHING better than always-henesys for maps deep in a region but
// far from a named town.
const REGION_FALLBACK: Record<string, SiteTheme> = {
	"maple island": "lith",
	"ossyria": "sleepywood",
	"victoria island": "henesys",  // central hub
};

function pickByStrings(candidates: Array<string | null | undefined>): SiteTheme | null {
	// Frequency vote: count how many candidate strings hit each rule
	// and return the theme with the most hits. Beats first-match
	// ordering: a mob spawning on 4 Ellinia maps + 1 Kerning map
	// correctly lands on ellinia instead of whichever rule was
	// listed first. Ties broken by TOWN_RULES declaration order.
	const scores = new Map<SiteTheme, number>();
	for (const raw of candidates) {
		if (!raw) continue;
		const s = String(raw).toLowerCase();
		for (const [needle, theme] of TOWN_RULES) {
			if (s.includes(needle)) {
				scores.set(theme, (scores.get(theme) ?? 0) + 1);
				break;  // one hit per candidate string, not per rule
			}
		}
	}
	if (scores.size === 0) return null;
	let best: SiteTheme | null = null;
	let bestScore = -1;
	for (const [, theme] of TOWN_RULES) {
		const score = scores.get(theme) ?? 0;
		if (score > bestScore) { bestScore = score; best = theme; }
	}
	return best;
}

/**
 * Resolve a theme from any combination of location signals. Pass
 * whatever you have — undefined/null values are ignored.
 *
 * @param signals    Ordered strongest-first. Any string field that
 *                   might contain a town name: returnMapName, map
 *                   name, npcLocation, quest chain name, etc.
 * @param region     The coarse region bucket. Used only when no
 *                   town-string match found.
 */
export function themeForLocation(
	signals: Array<string | null | undefined>,
	region?: string | null,
): SiteTheme {
	const byString = pickByStrings(signals);
	if (byString) return byString;
	if (region) {
		const fallback = REGION_FALLBACK[region.toLowerCase()];
		if (fallback) return fallback;
	}
	return "henesys";
}
