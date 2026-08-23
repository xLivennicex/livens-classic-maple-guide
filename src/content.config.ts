/**
 * Content collections config for Liven's Classic Maple Guide.
 *
 * The `guides` collection is the heart of Phase 3: every reference /
 * system guide lives as a single .md file with rich frontmatter. A
 * dynamic route (`src/pages/[slug].astro`) reads this collection and
 * renders each entry through `GuideLayout`, so adding a new guide is
 * a one-file drop-in with zero wrapper plumbing.
 *
 * Schema notes:
 * - `theme` maps to the six-town theme system. Only `henesys`, `perion`,
 *   and `lith` are polished with scenic backgrounds today; the others
 *   render as their palette stubs.
 * - `verificationStatus` mirrors the site's accuracy-label system. See
 *   `src/components/VerificationBadge.astro` for how each renders.
 * - `sourceSlugs` are string references to entries in `src/data/sources.ts`.
 *   Not enforced via `reference()` because sources aren't a collection
 *   yet - they live in a plain data file. If sources ever become their
 *   own collection, this becomes `z.array(reference("sources"))`.
 * - `benefits` is optional and models the "Confirmed rewards" visual
 *   grid (currently only used by Citizenship). Any guide can add one.
 * - `toc` is manual chip-nav data. Auto-generating from headings is
 *   possible but would ship every h2 - manual TOC lets us curate the
 *   important sections.
 */

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One entry in the sticky chip navigation at the top of a guide.
const tocEntry = z.object({
	href: z.string(),
	label: z.string(),
});

// One town-specific reward within a benefit category card.
const benefitItem = z.object({
	town: z.enum(["henesys", "kerning"]),
	name: z.string(),
	description: z.string(),
});

// One benefit category (e.g. "Citizen of Honor earrings") that
// groups related town-specific rewards under a shared icon.
const benefitCategory = z.object({
	heading: z.string(),
	subtitle: z.string(),
	icon: z.enum(["earring", "chair"]),
	items: z.array(benefitItem),
});

const guides = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
	schema: z.object({
		// ------ Core metadata (all guides need these) ------
		title: z.string(),
		description: z.string(),
		lastUpdated: z.string(), // free-form date string; not parsed
		tags: z.array(z.string()).default([]),

		// ------ Legacy display fields (kept for backwards compat with
		// the earlier wrapper .astro pattern; not used by renderer). ------
		status: z.string().optional(),
		sourceBuild: z.string().optional(),

		// ------ Layout / display config (previously per-page in the
		// wrapper .astro; now first-class frontmatter). ------
		theme: z
			.enum(["henesys", "perion", "lith", "kerning", "ellinia", "sleepywood"])
			.default("henesys"),
		decorations: z.boolean().default(false),
		eyebrow: z.string().default("Systems Guide"),
		heading: z.string(),
		tagline: z.string(),

		// ------ Verification (accuracy-label system) ------
		// These enum values MUST match `SourceType` in src/data/sources.ts.
		// The GuideLayout renders this via <SourceBadge type={...} />, which
		// only knows about SourceType's exact strings. If you add a value
		// here, add it to SourceType too (and to SourceBadge's META map).
		verificationStatus: z.enum([
			"official-announcement",
			"closed-test-info",
			"launch-verified",
			"community-reported",
			"awaiting-confirmation",
			"historical-archive",
		]),
		verificationNote: z.string().optional(),
		sourceSlugs: z.array(z.string()).default([]),

		// ------ Navigation ------
		toc: z.array(tocEntry).default([]),

		// ------ Optional custom sections ------
		benefits: z.array(benefitCategory).optional(),
	}),
});

export const collections = { guides };
