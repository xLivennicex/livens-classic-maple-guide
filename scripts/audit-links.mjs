// Crawl every generated HTML page in dist/ and check every internal
// link resolves to an actual page or fragment. Best-effort dead-link
// detector - a broken /maps/12345 link surfaces here as a 404.

import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";

const DIST = resolve("dist");
if (!existsSync(DIST)) {
	console.error("dist/ not found - run `npx astro build` first");
	process.exit(1);
}

// Recursively find all HTML files under dist/.
function* walkHtml(dir) {
	for (const entry of readdirSync(dir)) {
		const p = join(dir, entry);
		const s = statSync(p);
		if (s.isDirectory()) yield* walkHtml(p);
		else if (entry.endsWith(".html")) yield p;
	}
}

const pages = [...walkHtml(DIST)];
console.log(`crawling ${pages.length} HTML pages...`);

// Build a set of "valid" URL paths from dist structure. Every
// {dir}/index.html means the URL {dir}/ (and {dir}, and {dir}.html)
// is valid.
const validPaths = new Set();
validPaths.add("/");
for (const p of pages) {
	const rel = p.slice(DIST.length).replace(/\\/g, "/");
	if (rel.endsWith("/index.html")) {
		const url = rel.slice(0, -"index.html".length);
		validPaths.add(url);            // "/maps/42/"
		validPaths.add(url.slice(0, -1)); // "/maps/42"
	} else {
		validPaths.add(rel);              // "/foo.html"
		validPaths.add(rel.slice(0, -".html".length)); // "/foo"
	}
}

// Scan each page for internal href="/xxx" links. Skip anchors,
// pagefind assets, images, and any known-external prefixes.
const badLinks = new Map(); // Map<url, Set<page>>
const linkRe = /href="(\/[^"#?]*)/g;
for (const page of pages) {
	const html = readFileSync(page, "utf8");
	let m;
	while ((m = linkRe.exec(html)) !== null) {
		let url = m[1];
		if (!url || url === "/") continue;
		// Skip static asset dirs - they're not in validPaths but are
		// really there. Add /pagefind (pagefind CDN), /images,
		// /assets, /_astro, /fonts, /sound, .webp, .png, .jpg, .svg,
		// .css, .js, .xml (sitemap), .txt (robots), .ico.
		if (
			url.startsWith("/pagefind") ||
			url.startsWith("/images") ||
			url.startsWith("/assets") ||
			url.startsWith("/_astro") ||
			url.startsWith("/fonts") ||
			url.startsWith("/sound") ||
			/\.(webp|png|jpg|jpeg|svg|css|js|xml|txt|ico|mp3|ogg|wav)$/i.test(url)
		) {
			continue;
		}
		// Normalize: strip trailing hash/query if regex missed it.
		if (validPaths.has(url) || validPaths.has(url + "/")) continue;
		if (!badLinks.has(url)) badLinks.set(url, new Set());
		const relPage = page.slice(DIST.length).replace(/\\/g, "/");
		badLinks.get(url).add(relPage);
	}
}

console.log(`\nfound ${badLinks.size} unique broken internal links:\n`);
const sorted = [...badLinks.entries()].sort((a, b) => b[1].size - a[1].size);
for (const [url, pagesSet] of sorted.slice(0, 30)) {
	const from = [...pagesSet].slice(0, 3);
	console.log(`  ${url}  (${pagesSet.size} referrer${pagesSet.size === 1 ? "" : "s"})`);
	for (const p of from) console.log(`    ← ${p}`);
	if (pagesSet.size > 3) console.log(`    ← ... and ${pagesSet.size - 3} more`);
}
if (sorted.length > 30) console.log(`\n(showing top 30 of ${sorted.length})`);
