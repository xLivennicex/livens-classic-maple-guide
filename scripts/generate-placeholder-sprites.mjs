/**
 * generate-placeholder-sprites.mjs
 *
 * One-time (or re-run when themes change) generator that writes
 * six per-region placeholder SVGs to /public/images/placeholders/.
 * These act as the FINAL fallback in the <Sprite> component chain
 * when both the primary CDN and its fallback URL fail.
 *
 * Design: soft-rounded square, theme accent color background,
 * subtle maple-leaf silhouette in a translucent overlay. Communicates
 * "sprite unavailable" without shouting BROKEN, and keeps the visual
 * language on-brand per region.
 *
 * Size: 96x96, ~600 bytes each. Cheap enough to cache aggressively
 * (they're versioned by filename hash-free content, so cache-bust by
 * regenerating).
 */

import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

// Theme accent colors, mirrored from src/styles/themes/*.css so this
// script is self-contained. Update BOTH when adding a new theme.
const THEMES = {
	henesys:    { bg: "#e8f0d8", fg: "#46784b" },   // grass green
	kerning:    { bg: "#2e1a4a", fg: "#c084fc" },   // neon lavender on dark plum
	perion:     { bg: "#f2e0c8", fg: "#b8460e" },   // forge red on sandstone
	ellinia:    { bg: "#daebc8", fg: "#3a7050" },   // forest green on leaf
	lith:       { bg: "#d0e0e8", fg: "#2a7595" },   // harbor blue on cloud
	sleepywood: { bg: "#e0dcc8", fg: "#7a9070" },   // moss on parchment
};

// Simplified maple-leaf path (7 lobes, ~60px tall). Center it in a
// 96x96 viewport with 10% padding. Path lifted from a public-domain
// maple-leaf silhouette and simplified to a single M...Z contour.
const LEAF_PATH = "M48 8 L54 22 L66 18 L60 32 L74 34 L62 42 L72 54 L58 52 L60 66 L48 58 L36 66 L38 52 L24 54 L34 42 L22 34 L36 32 L30 18 L42 22 Z";

// Question-mark glyph, layered atop the leaf for extra "no data"
// affordance without being an obvious text character. Small.
const QUESTION_PATH = "M42 68 L54 68 L54 74 L42 74 Z M40 46 Q40 36 48 36 Q56 36 56 44 Q56 50 50 54 L50 62 L44 62 L44 52 Q50 48 50 44 Q50 42 48 42 Q46 42 46 46 Z";

function makeSvg(bg, fg) {
	// Notes on the SVG:
	// - viewBox 0 0 96 96 -> callers can size via width/height attrs.
	// - <rect> rounded to 12 (~12.5% radius) for a soft "card" feel.
	// - Leaf at 25% opacity so it reads as watermark, not primary.
	// - No <text>, no <style> -> maximally portable, no font issues.
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96"><rect width="96" height="96" rx="12" fill="${bg}"/><path d="${LEAF_PATH}" fill="${fg}" opacity="0.28"/><path d="${QUESTION_PATH}" fill="${fg}" opacity="0.7"/></svg>`;
}

async function main() {
	const outDir = join("public", "images", "placeholders");
	if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

	for (const [theme, { bg, fg }] of Object.entries(THEMES)) {
		const svg = makeSvg(bg, fg);
		const path = join(outDir, `${theme}.svg`);
		await writeFile(path, svg);
		console.log(`  wrote ${path}  (${svg.length}B, bg=${bg} fg=${fg})`);
	}
	console.log(`\ngenerated ${Object.keys(THEMES).length} themed placeholder sprites`);
}

main().catch((e) => { console.error(e); process.exit(1); });
