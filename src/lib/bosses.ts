/**
 * Boss compendium helper.
 *
 * Cross-references mobs.json (the CoT-derived mob dossiers) with
 * boss-manifest.json (our hand-written editorial + slug + level-band
 * overrides) into a single normalized list the /bosses/ pages
 * consume. Key design choices:
 *
 *   - WZ ID is the canonical join key. The CoT feed sometimes
 *     mirrors the same mob under two dossier IDs (700xxx AND
 *     800xxx). Keying by wzId dedupes without hand-maintained ID
 *     lists.
 *   - When there are duplicate dossier IDs for one wzId we pick
 *     whichever entry has more spawn/drop data. Both entries share
 *     stats but the 700xxx ones tend to be richer.
 *   - Bosses missing from stats.isBoss=true are still surfaced if
 *     boss-manifest.json includes them (e.g. King Slime, whose
 *     KPQ-boss flag is absent in the CoT feed). This lets us patch
 *     data errors without touching the pipeline.
 *   - Editorial fields (tldr/access/strategy/threat) live only in
 *     the manifest. If someone adds a mob to the manifest without
 *     an editorial block, the page still renders - the empty
 *     sections just get skipped by the template.
 */

import mobDossiers from "../data/db/mobs.json";
import bossManifest from "../data/boss-manifest.json";
import { compareCanonicalMob } from "./mob-dedup";
import type { SiteTheme } from "../layouts/BaseLayout.astro";

type ThreatLevel = "low" | "moderate" | "high" | "extreme";

interface BossNarrative {
	tldr?: string;
	access?: string;
	strategy?: string;
	threat?: ThreatLevel;
}

interface BossManifestEntry {
	slug: string;
	role: string;
	recommendedLevelMin: number;
	recommendedLevelMax: number;
	theme?: SiteTheme; // optional override when spawn-based auto-detection is wrong or missing
	// On Nexon's live boss roster: the Founder's Access five (Oct 3 notes)
	// plus King Slime (Kerning PQ finale) - all kept at Grand Launch (Oct
	// 20 notes). false = catalogued but on neither roster (e.g. Crimson
	// Balrog). undefined = not yet classified (treat as uncertain).
	liveRoster?: boolean;
	narrative?: BossNarrative;
}

export interface BossDossier {
	slug: string;
	role: string;
	recommendedLevelMin: number;
	recommendedLevelMax: number;
	themeOverride?: SiteTheme;
	liveRoster?: boolean;
	narrative: BossNarrative;
	mob: (typeof mobDossiers)[number]; // full mob dossier passthrough
}

const manifestBosses = (bossManifest as { bosses: Record<string, BossManifestEntry> }).bosses;

/**
 * Build the full boss list once at module load. Astro's static
 * build calls getStaticPaths + component render across all pages,
 * so caching this into a module-level const keeps repeat lookups
 * cheap.
 */
function buildBossList(): BossDossier[] {
	// Group mob dossiers by wzId to enable dedup.
	const byWzId = new Map<number, typeof mobDossiers>();
	for (const m of mobDossiers) {
		if (m.wzId == null) continue;
		const arr = byWzId.get(m.wzId) ?? [];
		arr.push(m);
		byWzId.set(m.wzId, arr as typeof mobDossiers);
	}

	const bosses: BossDossier[] = [];
	for (const [wzIdStr, entry] of Object.entries(manifestBosses)) {
		const wzId = Number(wzIdStr);
		const candidates = byWzId.get(wzId);
		if (!candidates || candidates.length === 0) {
			// Manifest lists a boss we don't have in mobs.json. Log
			// and skip - probably a typo or missing datamine entry.
			// eslint-disable-next-line no-console
			console.warn(`[bosses] manifest wzId ${wzId} (${entry.slug}) not in mobs.json - skipping`);
			continue;
		}
		// Same ordering as the /mobs dedup, so a boss page and its mob
		// page always show the same dossier (and the same stats).
		const best = candidates.slice().sort(compareCanonicalMob)[0]!;
		bosses.push({
			slug: entry.slug,
			role: entry.role,
			recommendedLevelMin: entry.recommendedLevelMin,
			recommendedLevelMax: entry.recommendedLevelMax,
			themeOverride: entry.theme,
			liveRoster: entry.liveRoster,
			narrative: entry.narrative ?? {},
			mob: best,
		});
	}

	// Sort by monster level so index page reads as a progression
	// ladder. Fall back to recommendedLevelMin when stats.level is
	// missing (shouldn't happen with current data but future-proofs).
	bosses.sort((a, b) => {
		const la = a.mob.stats?.level ?? a.recommendedLevelMin;
		const lb = b.mob.stats?.level ?? b.recommendedLevelMin;
		return la - lb;
	});

	return bosses;
}

export const allBosses: BossDossier[] = buildBossList();

export function getBossBySlug(slug: string): BossDossier | undefined {
	return allBosses.find((b) => b.slug === slug);
}

/**
 * Bosses on Nexon's live roster (Founder's Access, kept at Grand Launch),
 * sorted by mob level so the list reads as a progression ladder.
 */
export const liveRosterBosses: BossDossier[] = allBosses.filter(
	(b) => b.liveRoster === true,
);

/** Catalogued bosses on neither the Founder's Access nor the Grand Launch roster. */
export const offRosterBosses: BossDossier[] = allBosses.filter(
	(b) => b.liveRoster !== true,
);

/**
 * Bosses Nexon has confirmed live that our datamine doesn't contain yet,
 * so they can't have a stats-backed dossier page. Rendered as plain
 * "confirmed, data pending" cards. Move an entry into boss-manifest.json
 * (and delete it here) once its mob lands in mobs.json.
 */
export interface PendingDataBoss {
	name: string;
	note: string;
	sourceSlug: string;
}

// Empty since 2026-10-22: Stumpy landed in the datamine and moved to
// boss-manifest.json. Kept for the next boss Nexon announces ahead of data.
export const pendingDataBosses: PendingDataBoss[] = [];

/**
 * Human-readable threat label + a CSS class suffix for styling.
 * Kept here (not inline in the .astro) so the boss index and boss
 * detail pages agree on labels/colors without repeating a switch.
 */
export function threatMeta(level: ThreatLevel | undefined): { label: string; cls: string } {
	switch (level) {
		case "low":
			return { label: "Low threat", cls: "threat--low" };
		case "moderate":
			return { label: "Moderate threat", cls: "threat--moderate" };
		case "high":
			return { label: "High threat", cls: "threat--high" };
		case "extreme":
			return { label: "Extreme threat", cls: "threat--extreme" };
		default:
			return { label: "Threat unknown", cls: "threat--unknown" };
	}
}
