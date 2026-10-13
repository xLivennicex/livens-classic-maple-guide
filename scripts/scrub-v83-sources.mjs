// scripts/scrub-v83-sources.mjs
//
// One-shot cleanup to remove v83 source-slug references from all
// content markdown frontmatters. Part of the Oct 12 FA-source-of-
// truth migration. Run once, commit, delete.
//
// Deletes any line matching:
//   - ayumilove-v83-warrior
//   - ayumilove-v83-magician
//   - ayumilove-v83-bowman
//   - ayumilove-v83-thief
//   - hiddenstreet-v83-database
//
// Preserves other sourceSlugs entries.

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

function walkDir(dir, filterFn) {
	const results = [];
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		const st = statSync(full);
		if (st.isDirectory()) results.push(...walkDir(full, filterFn));
		else if (filterFn(full)) results.push(full);
	}
	return results;
}

const V83_SLUGS = [
	"ayumilove-v83-warrior",
	"ayumilove-v83-magician",
	"ayumilove-v83-bowman",
	"ayumilove-v83-thief",
	"hiddenstreet-v83-database",
];

const files = walkDir("src/content", (f) => f.endsWith(".md"));
let touched = 0;

for (const file of files) {
	let content = readFileSync(file, "utf8");
	const original = content;

	// Strip any line whose trimmed form matches "- <slug>"
	const lines = content.split("\n");
	const filtered = lines.filter((line) => {
		const trimmed = line.trim();
		for (const slug of V83_SLUGS) {
			if (trimmed === `- ${slug}` || trimmed === `- "${slug}"`) {
				return false;
			}
		}
		return true;
	});
	content = filtered.join("\n");

	// If sourceSlugs is now empty (nothing follows it until blank or new key),
	// convert to empty array literal so Zod schema validates.
	content = content.replace(
		/^sourceSlugs:\s*$(?=\s*\n\s*(?:#|\w|---))/gm,
		"sourceSlugs: []"
	);

	if (content !== original) {
		writeFileSync(file, content, "utf8");
		touched++;
		console.log(`scrubbed: ${file}`);
	}
}

console.log(`\ntotal files touched: ${touched}`);
