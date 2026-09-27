#!/usr/bin/env node
// Generates the 17 tier-5 Cursed Doll hat variant stub editorials.
//
// The flagship (Steel Nordic Helm, id 1002139) at
// src/content/items/steel-nordic-helm.md documents the full 18-variant
// family in one place. This script emits lightweight sibling stubs
// that establish slug URLs, add these variants to Pagefind's search
// index by name, and cross-link back to the flagship.
//
// Design principle: DRY. Prose the flagship already handles isn't
// repeated here. Each stub says just enough to be useful when hit
// directly (e.g. someone shares /items/red-guiltian in a screenshot
// with no context, and lands there wanting to know what it is).
//
// Regenerate: node scripts/generate-cursed-doll-stubs.mjs
// Idempotent: overwrites existing stubs, safe to re-run.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = join(__dirname, "..");
const ITEMS_JSON = join(REPO, "src/data/db/items.json");
const OUT_DIR = join(REPO, "src/content/items");

const items = JSON.parse(readFileSync(ITEMS_JSON, "utf8"));

// The 17 variant IDs and their family metadata. Steel Nordic Helm
// (1002139) is the flagship - not a stub, not in this list.
const FAMILIES = {
	nordic: {
		theme: "perion",
		jobLine: "Warrior",
		familyBlurb:
			"the Nordic Helm family (Steel / Mithril / Gold) - Warrior-oriented, defense-focused. Steel is the flagship documented in detail; Mithril and Gold are cosmetic upgrade tiers with the same core L40 stat profile.",
		ids: [1002140, 1002141],
	},
	guiltian: {
		theme: "ellinia",
		jobLine: "Magician",
		familyBlurb:
			"the Guiltian family - Magician-oriented, adds LUK and magic defense. Five colors (White / Red / Dark / Blue / Brown) all sharing the same L40 stat profile. Pick the color you like; mechanically they're identical.",
		ids: [1002142, 1002143, 1002144, 1002145, 1002146],
	},
	distinction: {
		theme: "henesys",
		jobLine: "Bowman",
		familyBlurb:
			"the Distinction family - Bowman-oriented, adds DEX. Five colors (Green / Brown / Red / Blue / Dark) all sharing the same L40 stat profile. Pick the color you like; mechanically they're identical.",
		ids: [1002147, 1002148, 1002149, 1002150, 1002151],
	},
	pilfer: {
		theme: "kerning",
		jobLine: "Thief",
		familyBlurb:
			"the Pilfer family - Thief-oriented, rogue aesthetic. Five colors (Red / Blue / Green / Brown / Dark) all sharing the same L40 stat profile. Pick the color you like; mechanically they're identical.",
		ids: [1002152, 1002153, 1002154, 1002155, 1002156],
	},
};

// Convert item name to slug: lowercase, spaces to hyphens.
function slugify(name) {
	return name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

// Turn a stat block into a short line for the stub tagline.
function statLine(stats) {
	const parts = [];
	if (stats.incSTR) parts.push(`+${stats.incSTR} STR`);
	if (stats.incDEX) parts.push(`+${stats.incDEX} DEX`);
	if (stats.incINT) parts.push(`+${stats.incINT} INT`);
	if (stats.incLUK) parts.push(`+${stats.incLUK} LUK`);
	if (stats.incPDD) parts.push(`+${stats.incPDD} PDD`);
	if (stats.incMDD) parts.push(`+${stats.incMDD} MDD`);
	if (stats.incACC) parts.push(`+${stats.incACC} ACC`);
	return parts.join(", ");
}

function buildStub(item, family) {
	const slug = slugify(item.name);
	const stats = item.stats || {};
	const tagline = `L${stats.reqLevel} ${family.jobLine} hat, part of ${family.familyBlurb.split(" - ")[0]} - one of the random tier-5 rewards from the Cursed Doll chain. ${statLine(stats)}, ${stats.tuc} upgrade slots.`;

	return `---
name: "${item.name}"
wzId: ${item.id}
category: "armor"
subcategory: "Hat"
tagline: "${tagline}"

levelReq: ${stats.reqLevel}
jobReq: "${family.jobLine}"

editorial: |
  <p>${item.name} is one of the possible payoff hats from
  <a href="/quests/cursed-doll-chain">Rowen's Cursed Doll chain</a>
  tier 5 (200 dolls). It belongs to
  ${family.familyBlurb}</p>

  <p><strong>See the full tier-5 pool breakdown</strong> on the
  <a href="/items/steel-nordic-helm">Steel Nordic Helm</a> flagship
  editorial - it documents all 18 hats from the chain in one place,
  including which families target which classes and how the RNG
  distribution actually works.</p>

callout: |
  <strong>Same family, different color.</strong> Every hat in
  the ${family.jobLine === "Warrior" ? "Nordic" : family.jobLine === "Magician" ? "Guiltian" : family.jobLine === "Bowman" ? "Distinction" : "Pilfer"}
  family shares this L${stats.reqLevel} stat profile.
  Free Market color-swap trades are common among players who
  rolled a color they don't want to wear.

relatedGuides:
  - "/items/steel-nordic-helm"
  - "/quests/cursed-doll-chain"

verificationStatus: "closed-test-info"
verificationNote: "Item ID (${item.id}), name, level requirement (${stats.reqLevel}), category (Hat), and stat profile all pulled from the CoT 2 client datamine at osmsdataexplorer.com. Family classification (${family.jobLine === "Warrior" ? "Nordic" : family.jobLine === "Magician" ? "Guiltian" : family.jobLine === "Bowman" ? "Distinction" : "Pilfer"}) and Cursed Doll chain tier-5 linkage cross-referenced against Steel Nordic Helm (1002139) flagship editorial."
sourceSlugs:
  - "osmsdataexplorer"

theme: "${family.theme}"
lastUpdated: "2026-09-26"
---
`;
}

let written = 0;
let skipped = 0;
for (const [familyKey, family] of Object.entries(FAMILIES)) {
	for (const id of family.ids) {
		const item = items.find((it) => it.id === id);
		if (!item) {
			console.warn(`  ! item ${id} not found in items.json`);
			continue;
		}
		const slug = slugify(item.name);
		const outPath = join(OUT_DIR, `${slug}.md`);
		writeFileSync(outPath, buildStub(item, family), "utf8");
		console.log(`  wrote ${slug}.md  (${item.name}, family: ${familyKey})`);
		written++;
	}
}

console.log(`\ndone: ${written} stub(s) written to ${OUT_DIR}`);
