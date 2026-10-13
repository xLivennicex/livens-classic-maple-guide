// scripts/scrub-v83-prose.mjs
//
// Phase 2 of the FA-source-of-truth cleanup. Bulk-rewrites prose
// references to "v83" into traditional-MapleStory language.
//
// Rules (applied in order per file - earlier replacements win):
//   "v83 GMS" -> "traditional MapleStory"
//   "v83 base" -> "traditional MapleStory baseline"
//   "v83 baseline" -> "traditional MapleStory baseline"
//   "v83 canonical" -> "traditional MapleStory canon"
//   "v83-era" -> "earlier-era MapleStory"
//   "v83 convention" -> "traditional MapleStory convention"
//   "classic v83" -> "traditional MapleStory"
//   "in v83" -> "traditionally"
//   "In v83" -> "Traditionally"
//   "than v83" -> "than in traditional MapleStory"
//   "v83's" -> "traditional MapleStory's"
//   "the v83" -> "the traditional MapleStory"
//   "to v83" -> "to traditional MapleStory"
//   "from v83" -> "from traditional MapleStory"
//   "v83 default" -> "traditional MapleStory default"
//   bare "v83" -> "traditional MapleStory" (catch-all)
//
// Skips: schema comments / CSS internal comments where context
// requires preserving "v83" as a technical term. Those are
// handled by surgical edits outside this script.

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const SUBS = [
	[/\bv83 GMS\b/g, "traditional MapleStory"],
	[/\bv83 base\b/g, "traditional MapleStory baseline"],
	[/\bv83 baseline\b/g, "traditional MapleStory baseline"],
	[/\bv83 canonical\b/g, "traditional MapleStory canon"],
	[/\bv83-era\b/g, "earlier-era MapleStory"],
	[/\bv83 convention\b/g, "traditional MapleStory convention"],
	[/\bv83 default\b/g, "traditional MapleStory default"],
	[/\bv83 community\b/g, "traditional MapleStory community"],
	[/\bclassic v83\b/g, "traditional MapleStory"],
	[/\bin v83\b/g, "traditionally"],
	[/\bIn v83\b/g, "Traditionally"],
	[/\bthan v83\b/g, "than in traditional MapleStory"],
	[/\bv83's\b/g, "traditional MapleStory's"],
	[/\bthe v83\b/g, "the traditional MapleStory"],
	[/\bto v83\b/g, "to traditional MapleStory"],
	[/\bfrom v83\b/g, "from traditional MapleStory"],
	[/\bv83 and\b/g, "traditional MapleStory and"],
	[/\bv83\b/g, "traditional MapleStory"],
];

const EXTS = [".md", ".ts", ".astro"];
const EXCLUDE_FILES = [
	// internal comments where v83 is a technical term - handle manually
	"src\\content.config.ts",
	"src\\styles\\themes\\kerning.css",
	"src\\data\\sources.ts", // already surgically cleaned
];

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

const files = walkDir("src", (f) => {
	if (!EXTS.some((e) => f.endsWith(e))) return false;
	if (EXCLUDE_FILES.some((ex) => f.endsWith(ex) || f === ex)) return false;
	return true;
});

let touched = 0;
for (const file of files) {
	let content = readFileSync(file, "utf8");
	const original = content;

	for (const [pattern, replacement] of SUBS) {
		content = content.replace(pattern, replacement);
	}

	if (content !== original) {
		writeFileSync(file, content, "utf8");
		touched++;
		console.log(`scrubbed: ${file}`);
	}
}

console.log(`\ntotal files touched: ${touched}`);
