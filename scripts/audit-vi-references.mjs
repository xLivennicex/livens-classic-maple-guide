/**
 * audit-vi-references.mjs
 *
 * Cross-check every curated name in src/data/victoria-island.ts
 * against the actual dossier data (npcs, mobs, quests, maps). Prints
 * exactly which curated names DON'T resolve to a real dossier so we
 * can fix or drop them.
 *
 * Editorial content on /world/victoria-island renders italic
 * "unknown" stubs for any unresolved name - functional but ugly.
 * Keep this at 100% resolve rate to keep the page clean.
 *
 * Run via: `npm run audit:vi`
 *
 * Extend to other editorial data files by adding another block in
 * main() - same set/lookup pattern.
 */

import { readFileSync } from "node:fs";

const src = readFileSync("src/data/victoria-island.ts", "utf8");

// Extract all `keyName: [...]` array literals of quoted strings. Not a
// real TS parser - crude regex - but the data file is disciplined so
// this stays accurate. If it ever breaks, `npx tsx` the .ts directly.
function extractArrayOfStrings(source, key) {
	const re = new RegExp(`${key}:\\s*\\[([\\s\\S]*?)\\]`, "g");
	const out = [];
	let m;
	while ((m = re.exec(source))) {
		const items = m[1].match(/"([^"]+)"/g) ?? [];
		out.push(...items.map((x) => x.slice(1, -1)));
	}
	return out;
}

// Hunting maps are objects `{ name: "...", note: "..." }` - pluck just
// the `name` string. Same disciplined-source assumption.
function extractHuntingMapNames(source) {
	const re = /\{\s*name:\s*"([^"]+)"/g;
	const out = [];
	let m;
	while ((m = re.exec(source))) out.push(m[1]);
	return out;
}

function toNameSet(arr) {
	return new Set(arr.map((x) => x.name?.toLowerCase()).filter(Boolean));
}

function report(label, curated, known) {
	const missing = curated.filter((n) => !known.has(n.toLowerCase()));
	const ok = curated.length - missing.length;
	const rate = curated.length === 0 ? "n/a" : `${((ok / curated.length) * 100).toFixed(1)}%`;
	console.log(`\n${label}: ${ok}/${curated.length} resolve (${rate})`);
	for (const m of missing) console.log(`  MISS: ${m}`);
	return missing.length;
}

function main() {
	const npcs = JSON.parse(readFileSync("src/data/db/npcs.json", "utf8"));
	const mobs = JSON.parse(readFileSync("src/data/db/mobs.json", "utf8"));
	const quests = JSON.parse(readFileSync("src/data/db/quests.json", "utf8"));
	const maps = JSON.parse(readFileSync("src/data/db/maps.json", "utf8"));

	console.log("=== Victoria Island editorial reference audit ===");

	const misses =
		report("NPCs", extractArrayOfStrings(src, "signatureNpcs"), toNameSet(npcs)) +
		report("Mobs", extractArrayOfStrings(src, "notableMobs"), toNameSet(mobs)) +
		report("Quests", extractArrayOfStrings(src, "signatureQuests"), toNameSet(quests)) +
		report("Hunting maps", extractHuntingMapNames(src), toNameSet(maps));

	if (misses === 0) {
		console.log("\nall editorial names resolve. ship it.");
		process.exit(0);
	}
	console.log(`\n${misses} unresolved entries - fix names in src/data/victoria-island.ts or drop them.`);
	process.exit(1);
}

main();
