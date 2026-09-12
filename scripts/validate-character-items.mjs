// Validate every item in items.json against GMS/83's actual asset
// library on maplestory.io. Produces a pruned whitelist consumed by
// the /character customizer, so the picker only shows items that
// actually render on the composited character sprite.
//
// Why this is necessary: the datamine dump (items.json) contains
// item IDs from mixed regions/versions. When you equip an item that
// GMS/83 doesn't know, the character render endpoint silently drops
// it - the URL contains the ID but the sprite shows nothing. See
// Sprint 47 in ROADMAP.md for the QA-kitten diagnostic.
//
// Two-pass validation:
//   Pass 1 (fast): HEAD /api/GMS/83/item/{id}/icon. If 200, the
//                  asset library definitively has it. Keep.
//   Pass 2 (slow): For items that failed pass 1, byte-compare
//                  /character/2000/{id}/stand1/0 against the bare-
//                  character baseline. If different, the render
//                  layer applied the item. Keep. If identical, the
//                  item was silently dropped. Prune.
//
// Runs concurrently in batches. Cache is written incrementally so
// interrupts don't lose progress. Re-runs use the cache; delete
// scripts/.item-validation-cache.json to force full re-probe.
//
// Usage: npm run validate:character-items

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

// Prefer the maplestory.io-sourced catalog (has cash items,
// descriptions, categories). Fall back to the CoT items.json
// only if the fetch has never run.
const CATALOG_SRC = resolve("src/data/character-catalog-source.json");
const FALLBACK_SRC = resolve("src/data/db/items.json");
const OUT_JSON = resolve("src/data/character-item-whitelist.json");
const CACHE_JSON = resolve("scripts/.item-validation-cache.json");

const CONCURRENCY = 24;         // maplestory.io tolerates this well
const REQUEST_TIMEOUT_MS = 10000;

// Slot classification duplicated from src/lib/character-slots.ts.
// Keep in sync (or extract to shared JSON in a future sprint).
function slotForItem(id) {
	if (id >= 1000000 && id < 1010000) return "hat";
	if (id >= 1010000 && id < 1020000) return "faceacc";
	if (id >= 1020000 && id < 1030000) return "eyeacc";
	if (id >= 1030000 && id < 1040000) return "earring";
	if (id >= 1040000 && id < 1050000) return "top";
	if (id >= 1050000 && id < 1060000) return "overall";
	if (id >= 1060000 && id < 1070000) return "bottom";
	if (id >= 1070000 && id < 1080000) return "shoes";
	if (id >= 1080000 && id < 1090000) return "gloves";
	if (id >= 1100000 && id < 1110000) return "cape";
	if (id >= 1300000 && id < 1800000) return "weapon";
	if (id >= 20000 && id < 30000) return "face";
	if (id >= 30000 && id < 40000) return "hair";
	return null;
}

// ------------- probes -------------

async function probeHead(url) {
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), REQUEST_TIMEOUT_MS);
	try {
		const res = await fetch(url, { method: "HEAD", signal: ctrl.signal });
		return res.status;
	} catch {
		return 0;
	} finally {
		clearTimeout(t);
	}
}

async function fetchBuffer(url) {
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), REQUEST_TIMEOUT_MS);
	try {
		const res = await fetch(url, { signal: ctrl.signal });
		if (!res.ok) return null;
		const buf = new Uint8Array(await res.arrayBuffer());
		return buf;
	} catch {
		return null;
	} finally {
		clearTimeout(t);
	}
}

// FNV-1a hash - fast, no crypto import needed for cache keys.
function hashBytes(buf) {
	let h = 0x811c9dc5;
	for (let i = 0; i < buf.length; i++) {
		h ^= buf[i];
		h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
	}
	return h.toString(16);
}

// ------------- main -------------

async function main() {
	// Load whichever source is present. character-catalog-source
	// is the richer maplestory.io feed with isCash/desc/category;
	// items.json is the fallback CoT feed (no cash items).
	let candidates;
	let sourceLabel;
	if (existsSync(CATALOG_SRC)) {
		const catalog = JSON.parse(readFileSync(CATALOG_SRC, "utf8"));
		// Already slot-classified by fetch-maple-catalog.mjs
		candidates = catalog.map((it) => ({
			id: it.id, name: it.name, slot: it.slot,
			isCash: it.isCash, desc: it.desc,
			category: it.category, subCategory: it.subCategory,
		}));
		sourceLabel = `character-catalog-source.json (maplestory.io feed, includes cash)`;
	} else {
		const items = JSON.parse(readFileSync(FALLBACK_SRC, "utf8"));
		candidates = items
			.filter((it) => it.name && it.name.trim() !== "")
			.map((it) => ({ id: it.id, name: it.name, slot: slotForItem(it.id) }))
			.filter((it) => it.slot);
		sourceLabel = `items.json (CoT fallback, no cash items - run npm run fetch:maple-catalog)`;
	}

	console.log(`Source: ${sourceLabel}`);
	console.log(`${candidates.length} slot-mapped candidates to validate\n`);

	// Warm the cache from disk if it exists.
	const cache = existsSync(CACHE_JSON)
		? JSON.parse(readFileSync(CACHE_JSON, "utf8"))
		: { verdicts: {}, baselineSize: null };

	// Fetch the bare-character baseline once for pass 2 diff. The
	// character-render endpoint 400s without at least one item ID,
	// so "bare" = skin body 2000 explicitly passed as the only item.
	//
	// The render endpoint returns a "close to baseline" PNG (~71 bytes
	// larger, likely metadata jitter) when it silently drops an
	// unknown item. Real renders differ by 300+ bytes. Empirically:
	//   - baseline body 2000:         1872 bytes
	//   - body + real Toben hair:     2193 bytes  (+321)
	//   - body + broken hair 30381:   1943 bytes  (+71  = silently dropped)
	//   - body + working hat 1002169: 3097 bytes  (+1225)
	// So we treat "size <= baseline + SIZE_DROP_THRESHOLD" as dropped.
	const SIZE_DROP_THRESHOLD = 150;
	if (!cache.baselineSize) {
		process.stdout.write("Fetching bare-character baseline... ");
		const baseline = await fetchBuffer(
			"https://maplestory.io/api/GMS/83/character/2000/2000/stand1/0"
		);
		if (!baseline) {
			console.error("FAILED - can't probe pass 2 without baseline");
			process.exit(1);
		}
		cache.baselineSize = baseline.length;
		console.log(`ok (${baseline.length} bytes)`);
		writeFileSync(CACHE_JSON, JSON.stringify(cache));
	}

	// -------- Pass 1: icon HEAD probes --------
	const p1Needed = candidates.filter((it) => cache.verdicts[it.id] == null);
	console.log(`Pass 1 (icon HEAD): ${p1Needed.length} items to probe ` +
		`(${candidates.length - p1Needed.length} cached)`);

	let done = 0;
	let saveCounter = 0;
	async function p1Worker(items) {
		for (const it of items) {
			const status = await probeHead(
				`https://maplestory.io/api/GMS/83/item/${it.id}/icon`
			);
			cache.verdicts[it.id] = status === 200
				? { keep: true, reason: "icon-200" }
				: { keep: null, reason: "icon-" + status }; // null = needs pass 2
			done++;
			if (++saveCounter >= 100) {
				writeFileSync(CACHE_JSON, JSON.stringify(cache));
				saveCounter = 0;
				process.stdout.write(`\r  ${done}/${p1Needed.length}...`);
			}
		}
	}
	// Split work across CONCURRENCY workers
	const chunks = Array.from({ length: CONCURRENCY }, () => []);
	p1Needed.forEach((it, i) => chunks[i % CONCURRENCY].push(it));
	await Promise.all(chunks.map(p1Worker));
	writeFileSync(CACHE_JSON, JSON.stringify(cache));
	console.log(`\r  ${done}/${p1Needed.length} done`);

	// -------- Pass 2: character-render diff for items that failed pass 1 --------
	const p2Needed = candidates.filter(
		(it) => cache.verdicts[it.id] && cache.verdicts[it.id].keep === null
	);
	console.log(`\nPass 2 (character-render diff): ${p2Needed.length} items`);

	done = 0; saveCounter = 0;
	async function p2Worker(items) {
		for (const it of items) {
			const buf = await fetchBuffer(
				`https://maplestory.io/api/GMS/83/character/2000/2000,${it.id}/stand1/0`
			);
			if (!buf) {
				cache.verdicts[it.id] = { keep: false, reason: "render-fetch-fail" };
			} else {
				const delta = buf.length - cache.baselineSize;
				const applied = delta > SIZE_DROP_THRESHOLD;
				cache.verdicts[it.id] = applied
					? { keep: true, reason: `render-+${delta}b` }
					: { keep: false, reason: `render-+${delta}b-dropped` };
			}
			done++;
			if (++saveCounter >= 25) {
				writeFileSync(CACHE_JSON, JSON.stringify(cache));
				saveCounter = 0;
				process.stdout.write(`\r  ${done}/${p2Needed.length}...`);
			}
		}
	}
	const p2chunks = Array.from({ length: CONCURRENCY }, () => []);
	p2Needed.forEach((it, i) => p2chunks[i % CONCURRENCY].push(it));
	await Promise.all(p2chunks.map(p2Worker));
	writeFileSync(CACHE_JSON, JSON.stringify(cache));
	console.log(`\r  ${done}/${p2Needed.length} done\n`);

	// -------- Emit whitelist --------
	// Preserve the enriched fields (isCash/desc/category/subCategory)
	// when the source was the maplestory.io feed. The picker uses
	// these for badges, tooltips, and cash-only filtering.
	const kept = candidates
		.filter((it) => cache.verdicts[it.id].keep === true)
		.map((it) => {
			const base = { id: it.id, name: it.name, slot: it.slot };
			if (it.isCash != null) base.isCash = it.isCash;
			if (it.desc) base.desc = it.desc;
			if (it.category) base.category = it.category;
			if (it.subCategory) base.subCategory = it.subCategory;
			return base;
		});
	const dropped = candidates.length - kept.length;

	// Per-slot summary
	const bySlot = {};
	for (const it of kept) bySlot[it.slot] = (bySlot[it.slot] || 0) + 1;
	const droppedBySlot = {};
	for (const it of candidates) {
		if (!cache.verdicts[it.id].keep) {
			droppedBySlot[it.slot] = (droppedBySlot[it.slot] || 0) + 1;
		}
	}

	console.log("Whitelist summary (slot: kept / dropped):");
	for (const slot of Object.keys(bySlot).sort()) {
		const k = bySlot[slot] || 0;
		const d = droppedBySlot[slot] || 0;
		const pct = ((d / (k + d)) * 100).toFixed(0);
		console.log(`  ${slot.padEnd(10)}  ${String(k).padStart(4)}  ` +
			`(dropped ${String(d).padStart(3)}, ${pct}%)`);
	}
	console.log(`\nTotal: kept ${kept.length}, dropped ${dropped}`);

	writeFileSync(OUT_JSON, JSON.stringify(kept));
	console.log(`\nWrote ${OUT_JSON}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
