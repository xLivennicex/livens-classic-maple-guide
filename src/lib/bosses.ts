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
	narrative?: BossNarrative;
}

export interface BossDossier {
	slug: string;
	role: string;
	recommendedLevelMin: number;
	recommendedLevelMax: number;
	themeOverride?: SiteTheme;
	narrative: BossNarrative;
	mob: (typeof mobDossiers)[number]; // full mob dossier passthrough
}

const manifestBosses = (bossManifest as { bosses: Record<string, BossManifestEntry> }).bosses;

/**
 * Score a mob dossier by how much cross-ref data it carries. Used
 * to pick the "best" of two dossiers that share a wzId - more
 * spawns + drops + quest requirements means the dossier ID we
 * link to has the richest downstream content.
 */
function dossierRichness(m: (typeof mobDossiers)[number]): number {
	return (
		(m.mapsSpawnedOn?.length ?? 0) * 3 +
		(m.drops?.length ?? 0) * 2 +
		(m.requiredByQuests?.length ?? 0)
	);
}

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
		const best = candidates.slice().sort((a, b) => dossierRichness(b) - dossierRichness(a))[0]!;
		bosses.push({
			slug: entry.slug,
			role: entry.role,
			recommendedLevelMin: entry.recommendedLevelMin,
			recommendedLevelMax: entry.recommendedLevelMax,
			themeOverride: entry.theme,
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
