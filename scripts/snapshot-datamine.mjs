#!/usr/bin/env node
/**
 * snapshot-datamine.mjs
 *
 * Capture a point-in-time copy of the Founder's Access client datamine
 * from osmsdataexplorer.com. Writes to snapshots/fa-YYYY-MM-DD/ with
 * a manifest.json containing timestamps, file sizes, and SHA256
 * hashes for every endpoint.
 *
 * WHY: Grand Launch (2026-10-21) is expected to clobber the current
 * FA data on osmsdataexplorer.com. Once that happens we lose the
 * ability to re-derive our dossiers from upstream if we ever need
 * to re-run build-database.mjs. This script freezes a known-good
 * copy so build-database.mjs can be pointed at ./snapshots/fa-X/
 * instead of the live URL in a pinch.
 *
 * Usage:
 *   npm run snapshot              # snapshot to snapshots/fa-YYYY-MM-DD/
 *   node scripts/snapshot-datamine.mjs --dir=my-label  # custom label
 *
 * To rebuild from a snapshot:
 *   # edit scripts/build-database.mjs:
 *   #   const BASE = "./snapshots/fa-2026-10-08";
 *   # (fetch() does not accept relative file: URLs - a minimal shim
 *   #  in build-database.mjs would be needed. See the FUTURE WORK
 *   #  comment at the bottom of this file.)
 */

import { writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join } from "node:path";

const BASE = "https://osmsdataexplorer.com/data/current";
const ENDPOINTS = [
	"items.json",
	"quests.json",
	"crafting.json",
	"lookups.json",
	"maps.json",
];

/**
 * Parse CLI flags. Supports --dir=label to override the snapshot
 * folder name (defaults to fa-{today's ISO date}).
 */
function parseArgs(argv) {
	const args = { dir: null };
	for (const a of argv.slice(2)) {
		const m = a.match(/^--dir=(.+)$/);
		if (m) args.dir = m[1];
	}
	return args;
}

/** YYYY-MM-DD in UTC - stable across time zones. */
function todayIsoDate() {
	return new Date().toISOString().slice(0, 10);
}

async function fetchAndHash(endpoint) {
	const url = `${BASE}/${endpoint}`;
	process.stdout.write(`  fetching ${endpoint} ... `);
	const res = await fetch(url);
	if (!res.ok) throw new Error(`fetch ${endpoint}: HTTP ${res.status}`);
	const text = await res.text();
	const sha256 = createHash("sha256").update(text).digest("hex");
	console.log(
		`${(text.length / 1024).toFixed(1)}KB  sha256=${sha256.slice(0, 12)}...`,
	);
	return { endpoint, text, bytes: text.length, sha256 };
}

async function main() {
	const args = parseArgs(process.argv);
	const label = args.dir || `fa-${todayIsoDate()}`;
	const outDir = join("snapshots", label);
	await mkdir(outDir, { recursive: true });

	console.log(`Snapshotting ${BASE} -> ${outDir}`);
	const results = [];
	for (const endpoint of ENDPOINTS) {
		const result = await fetchAndHash(endpoint);
		await writeFile(join(outDir, endpoint), result.text, "utf8");
		results.push(result);
	}

	const manifest = {
		label,
		capturedAt: new Date().toISOString(),
		source: BASE,
		totalBytes: results.reduce((n, r) => n + r.bytes, 0),
		files: results.map((r) => ({
			name: r.endpoint,
			bytes: r.bytes,
			sha256: r.sha256,
		})),
		notes: [
			"Captured before 2026-10-21 Grand Launch which may rebalance or",
			"clobber the Founder's Access datamine. If upstream drifts, you",
			"can rebuild from this snapshot by pointing build-database.mjs's",
			"BASE constant at the local snapshot folder (requires a minor",
			"fetch -> readFile shim; see FUTURE WORK in snapshot-datamine.mjs).",
		],
	};

	await writeFile(
		join(outDir, "manifest.json"),
		JSON.stringify(manifest, null, 2),
		"utf8",
	);

	const totalMB = (manifest.totalBytes / 1024 / 1024).toFixed(2);
	console.log(`\nSnapshot complete: ${outDir}`);
	console.log(`  ${results.length} files, ${totalMB} MB total`);
	console.log(`  manifest: ${join(outDir, "manifest.json")}`);
}

main().catch((err) => {
	console.error("\nERROR:", err.message);
	process.exit(1);
});

// -----------------------------------------------------------------
// FUTURE WORK: local-snapshot rebuild
//
// To make build-database.mjs rebuildable from a local snapshot:
//
//   async function fetchJson(name) {
//     if (BASE.startsWith("http")) {
//       const res = await fetch(`${BASE}/${name}`);
//       if (!res.ok) throw new Error(...);
//       return JSON.parse(await res.text());
//     }
//     // Local snapshot path
//     const path = join(BASE, name);
//     const text = await readFile(path, "utf8");
//     return JSON.parse(text);
//   }
//
// Then: `BASE=./snapshots/fa-2026-10-08 npm run db` works.
// Not shipped today because YAGNI - we don't need it until upstream
// actually drifts. One-line change when the day comes.
// -----------------------------------------------------------------
