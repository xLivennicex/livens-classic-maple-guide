// Crawl every generated HTML page in dist/ and check every internal
// link resolves to an actual page, and every #fragment link to an
// element id that exists on its target page. A broken /maps/12345
// link surfaces here as a 404; a renamed heading as a dead anchor.
// Exits 1 if anything is broken.

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

// ---------- #fragment links ----------
// Same-page ("#x") and cross-page ("/page#x") anchors must hit a real
// id. Ids are read lazily per target page and cached.
const idsByPage = new Map();
function idsOf(urlPath) {
	if (!idsByPage.has(urlPath)) {
		const file = join(DIST, urlPath, "index.html");
		idsByPage.set(
			urlPath,
			existsSync(file)
				? new Set([...readFileSync(file, "utf8").matchAll(/\sid="([^"]+)"/g)].map((x) => x[1]))
				: null,
		);
	}
	return idsByPage.get(urlPath);
}
const badFragments = new Map(); // Map<"/page#id", Set<page>>
const fragRe = /href="((?:\/[^"#?]*)?)#([^"]+)"/g;
for (const page of pages) {
	const relPage = page.slice(DIST.length).replace(/\\/g, "/");
	if (!relPage.endsWith("/index.html")) continue;
	const selfPath = relPage.slice(0, -"/index.html".length) || "/";
	const html = readFileSync(page, "utf8");
	for (const [, target, frag] of html.matchAll(fragRe)) {
		const targetPath = (target || selfPath).replace(/\/$/, "") || "/";
		const ids = idsOf(targetPath);
		if (!ids) continue; // missing page: already reported above
		if (ids.has(decodeURIComponent(frag))) continue;
		const key = `${targetPath}#${frag}`;
		if (!badFragments.has(key)) badFragments.set(key, new Set());
		badFragments.get(key).add(relPage);
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

console.log(`\nfound ${badFragments.size} unique broken #fragment links:\n`);
for (const [key, pagesSet] of [...badFragments.entries()].slice(0, 30)) {
	console.log(`  ${key}  (${pagesSet.size} referrer${pagesSet.size === 1 ? "" : "s"})`);
	for (const p of [...pagesSet].slice(0, 3)) console.log(`    ← ${p}`);
}

if (badLinks.size > 0 || badFragments.size > 0) process.exit(1);
