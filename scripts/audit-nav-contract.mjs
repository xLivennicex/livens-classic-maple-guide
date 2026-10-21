// Navigation contract audit for the six DB sections, run against dist/.
//
//   1. Pager contract: for every row on an index page (/items, /mobs,
//      /npcs, /maps, /quests, /bosses), that row's detail page links
//      "Prev" to the preceding row and "Next" to the following row -
//      and the first/last rows have no Prev/Next respectively.
//   2. Strip contract: each <DatabaseStrip> chip count equals the
//      number of rows its index page actually lists.
//
// Both contracts encode "the list is the source of truth". They broke
// silently before (pagers re-sorting by a different key than the index
// displayed; hard-coded chip counts drifting from the data), and a
// passing build plus a visual QA pass did not catch it.
//
// Usage: npx astro build && npm run audit:nav

import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const DIST = resolve("dist");
if (!existsSync(DIST)) {
	console.error("dist/ not found - run `npx astro build` first");
	process.exit(1);
}

const SECTIONS = [
	["/items", /^\/items\/\d+$/],
	["/mobs", /^\/mobs\/\d+$/],
	["/npcs", /^\/npcs\/\d+$/],
	["/maps", /^\/maps\/\d+$/],
	["/quests", /^\/quests\/[^/#?]+$/],
	["/bosses", /^\/bosses\/[^/#?]+$/],
];

function readPage(url) {
	const file = join(DIST, url, "index.html");
	return existsSync(file) ? readFileSync(file, "utf8") : null;
}

// Trailing slashes are equivalent routes (/bosses/mano/ == /bosses/mano).
const normalize = (href) => (href.length > 1 ? href.replace(/\/$/, "") : href);

/** Ordered, de-duplicated detail links inside an index page's <main>. */
function indexOrder(indexUrl, pattern) {
	const html = readPage(indexUrl);
	const main = html.slice(html.indexOf("<main"), html.lastIndexOf("</main>"));
	const seen = new Set();
	const order = [];
	for (const [, raw] of main.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
		const href = normalize(raw);
		if (pattern.test(href) && !seen.has(href)) {
			seen.add(href);
			order.push(href);
		}
	}
	return order;
}

function pagerHref(html, direction) {
	const tag = html.match(new RegExp(`<a\\b[^>]*prev-next-pager__link--${direction}[^>]*>`));
	return tag ? normalize(tag[0].match(/href="([^"]+)"/)[1]) : null;
}

// Must mirror fmtCount() in src/components/DatabaseStrip.astro.
const fmtCount = (n) => (n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n));

function stripChips() {
	const strip = readPage("/items").match(/<ul class="db-strip__list[\s\S]*?<\/ul>/)?.[0];
	if (!strip) throw new Error("DatabaseStrip not found on /items");
	const chips = {};
	for (const [, href, count] of strip.matchAll(/href="([^"]+)"[\s\S]*?db-strip__count[^>]*>\s*([^<\s]+)/g)) {
		chips[normalize(href)] = count;
	}
	return chips;
}

const chips = stripChips();
let failures = 0;

for (const [indexUrl, pattern] of SECTIONS) {
	const order = indexOrder(indexUrl, pattern);
	const problems = [];

	if (chips[indexUrl] !== fmtCount(order.length)) {
		problems.push(`strip chip says ${chips[indexUrl]}, index lists ${order.length}`);
	}

	order.forEach((href, i) => {
		const html = readPage(href);
		if (!html) {
			problems.push(`${href}: listed on ${indexUrl} but page not built`);
			return;
		}
		const want = { prev: order[i - 1] ?? null, next: order[i + 1] ?? null };
		const got = { prev: pagerHref(html, "prev"), next: pagerHref(html, "next") };
		if (got.prev !== want.prev || got.next !== want.next) {
			problems.push(
				`${href}: prev ${got.prev} (want ${want.prev}), next ${got.next} (want ${want.next})`,
			);
		}
	});

	failures += problems.length;
	console.log(`${indexUrl}: ${order.length} rows, ${problems.length} problem(s)`);
	for (const p of problems.slice(0, 10)) console.log(`   ${p}`);
	if (problems.length > 10) console.log(`   ... and ${problems.length - 10} more`);
}

if (failures > 0) {
	console.error(`\nNAV CONTRACT BROKEN: ${failures} problem(s)`);
	process.exit(1);
}
console.log("\nNav contract holds.");
