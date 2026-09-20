#!/usr/bin/env node
/**
 * audit-guide-coverage.mjs
 *
 * Cross-references our guide content against the current datamine
 * and MeowDB drop tables. Answers 3 recurring questions after any
 * `npm run db` rebuild:
 *
 *   1. STABILITY: Are the drop scores our guides quote still
 *      accurate? MeowDB scores drift as the community votes.
 *   2. COVERAGE: What high-value drops exist that our guides
 *      don't mention?
 *   3. CROSS-LINKS: Are editorial items missing quest-source
 *      or mob-source references that we could add?
 *
 * Not a build-time gate - purely informational. Run manually with
 *   `node scripts/audit-guide-coverage.mjs`
 * after a datamine refresh, act on any red flags, ignore the rest.
 */

import { readFile } from "node:fs/promises";

const items = JSON.parse(await readFile("src/data/db/items.json", "utf8"));
const mobs = JSON.parse(await readFile("src/data/db/mobs.json", "utf8"));
const quests = JSON.parse(await readFile("src/data/db/quests.json", "utf8"));
const stamp = JSON.parse(
	await readFile("src/data/db/generated-at.json", "utf8"),
);

// Index: wzId -> best drop score across all mobs
const bestScoreFor = new Map();
const sourcesFor = new Map();
for (const m of mobs) {
	for (const d of m.drops ?? []) {
		const cur = bestScoreFor.get(d.itemId) ?? -Infinity;
		if ((d.score ?? 0) > cur) bestScoreFor.set(d.itemId, d.score ?? 0);
		if (!sourcesFor.has(d.itemId)) sourcesFor.set(d.itemId, []);
		sourcesFor.get(d.itemId).push({
			mob: m.name,
			mobLevel: m.stats?.level,
			score: d.score ?? 0,
		});
	}
}

console.log(`\ndatamine timestamp: ${stamp.timestamp}`);
console.log(
	`corpus: ${items.length} items, ${mobs.length} mobs, ${quests.length} quests\n`,
);

// -------------------------------------------------------------------
// SECTION 1: Guide claim stability
// -------------------------------------------------------------------
console.log("=".repeat(72));
console.log("1. GUIDE CLAIM STABILITY - /guides/gearing-up-to-30");
console.log("=".repeat(72));
console.log(
	"Each guide row asserts a MeowDB score. Compare to current data:",
);
console.log(
	"  OK     = exact match, KEEP   = still above threshold (>=3),",
);
console.log(
	"  BUMP   = score improved (guide understates)",
);
console.log(
	"  DEMOTE = score dropped below threshold (guide overstates)\n",
);

// Guide-referenced items with correct wzIds and asserted scores.
// Keep this list in sync with the ITEMS map in gearing-up-to-30.astro.
const guideClaims = [
	{ name: "Pan Lid", wzId: 1092002, guide: 14 },
	{ name: "Work Gloves", wzId: 1082000, guide: 4 },
	{ name: "Weighted Earrings", wzId: 1032002, guide: 4 },
	{ name: "Fireman's Axe", wzId: 1312005, guide: 4 },
	{ name: "Eagle Crow", wzId: 1462004, guide: 4 },
	{ name: "Fish Spear", wzId: 1432002, guide: 9 },
	{ name: "Triple-Tipped Zamadar", wzId: 1332004, guide: 6 },
	{ name: "Steel Fingerless Gloves", wzId: 1082002, guide: 5 },
	{ name: "Emerald Staff", wzId: 1382002, guide: 3 },
	{ name: "White Chaos Robe", wzId: 1050022, guide: 8 },
	{ name: "Green Woodsman Boots", wzId: 1072018, guide: 4 },
	{ name: "Long Sword", wzId: 1302001, guide: 4 },
	{ name: "Battle Axe", wzId: 1312002, guide: 3 },
	{ name: "Black Dragon Robe", wzId: 1050011, guide: 4 },
	{ name: "Iron Dagger", wzId: 1332007, guide: 2 },
	{ name: "Wizard Staff", wzId: 1382004, guide: 2 },
	{ name: "Ryden", wzId: 1452004, guide: 2 },
	{ name: "Lemona", wzId: 1082003, guide: 3 },
];

let issues = 0;
for (const c of guideClaims) {
	const actual = bestScoreFor.get(c.wzId) ?? 0;
	const delta = actual - c.guide;
	let verdict, mark;
	if (delta === 0) [verdict, mark] = ["OK    ", " "];
	else if (delta > 0) [verdict, mark] = ["BUMP  ", " "];
	else if (actual >= 3) [verdict, mark] = ["KEEP  ", " "];
	else {
		[verdict, mark] = ["DEMOTE", "!"];
		issues++;
	}
	console.log(
		`  ${mark} ${verdict}  ${c.name.padEnd(24)} guide=${c.guide.toString().padStart(2)}  actual=${actual.toString().padStart(2)}  delta=${delta >= 0 ? "+" : ""}${delta}`,
	);
}
console.log(
	`\n  ${issues} DEMOTE flag(s) - drops that fell below the score>=3 threshold`,
);

// -------------------------------------------------------------------
// SECTION 2: Coverage gaps - pre-Lv30 gear the guide doesn't mention
// -------------------------------------------------------------------
console.log("\n" + "=".repeat(72));
console.log("2. COVERAGE GAPS - high-value pre-Lv30 gear NOT in the guide");
console.log("=".repeat(72));

// Load the guide source, extract every wzId it references.
const guideSrc = await readFile(
	"src/pages/guides/gearing-up-to-30.astro",
	"utf8",
);
const linkedIds = new Set(
	[...guideSrc.matchAll(/\/items\/(\d+)/g)].map((m) => Number(m[1])),
);
// Also treat editorial-slug-linked items as "covered" via slug lookup.
const slugToWzId = new Map();
for (const i of items) if (i.editorialSlug) slugToWzId.set(i.editorialSlug, i.id);
for (const m of guideSrc.matchAll(/\/items\/([a-z0-9-]+)/g)) {
	const wzId = slugToWzId.get(m[1]);
	if (wzId) linkedIds.add(wzId);
}
console.log(`Guide currently links ${linkedIds.size} items.`);

const gaps = [];
for (const item of items) {
	if (item.category !== "Equipment") continue;
	if (linkedIds.has(item.id)) continue;
	const level = item.stats?.reqLevel ?? 0;
	if (level < 1 || level > 30) continue;
	const score = bestScoreFor.get(item.id) ?? 0;
	if (score < 4) continue; // Focus on score>=4 (kitten-worthy, not noise)
	gaps.push({
		id: item.id,
		name: item.name,
		reqLevel: level,
		subCategory: item.subCategory,
		score,
		topSource: (sourcesFor.get(item.id) ?? []).sort(
			(a, b) => b.score - a.score,
		)[0],
	});
}
gaps.sort((a, b) => b.score - a.score || a.reqLevel - b.reqLevel);

// Group by slot so we can spot missing sections at a glance
const bySlot = new Map();
for (const g of gaps) {
	if (!bySlot.has(g.subCategory)) bySlot.set(g.subCategory, []);
	bySlot.get(g.subCategory).push(g);
}
console.log(`\n${gaps.length} score>=4 pre-Lv30 gear items not linked, by slot:`);
for (const [slot, list] of [...bySlot.entries()].sort(
	(a, b) => b[1].length - a[1].length,
)) {
	console.log(`\n  ${slot} (${list.length}):`);
	for (const g of list.slice(0, 5)) {
		console.log(
			`    sc${g.score.toString().padStart(2)}  Lv${g.reqLevel.toString().padStart(2)}  ${g.name.padEnd(28)} <- ${g.topSource?.mob ?? "?"} L${g.topSource?.mobLevel ?? "?"}`,
		);
	}
	if (list.length > 5) console.log(`    ... +${list.length - 5} more`);
}

// -------------------------------------------------------------------
// SECTION 3: Editorial items with quest sources ready for cross-linking
// -------------------------------------------------------------------
console.log("\n" + "=".repeat(72));
console.log("3. CROSS-LINK CANDIDATES - editorial items with quest sources");
console.log("=".repeat(72));

const editorialWithQuest = items.filter(
	(i) => i.editorialSlug && (i.givenByQuests ?? []).length > 0,
);
console.log(
	`${editorialWithQuest.length} editorial items receive quest rewards.`,
);
console.log("Sample (first 10 gear items - potentials for /items page callouts):");
let gearQuestCount = 0;
for (const i of editorialWithQuest) {
	if (i.category !== "Equipment") continue;
	if (gearQuestCount++ >= 10) break;
	console.log(
		`  ${i.name.padEnd(25)} /items/${i.editorialSlug.padEnd(24)}  <- ${i.givenByQuests
			.slice(0, 2)
			.map((q) => q.questName)
			.join(", ")}${i.givenByQuests.length > 2 ? ` +${i.givenByQuests.length - 2}` : ""}`,
	);
}

console.log("\n(Run again after any `npm run db` to spot fresh drift.)");
