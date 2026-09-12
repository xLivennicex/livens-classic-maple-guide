/**
 * audit-sprites.mjs
 *
 * Probe sprite availability across every entity type in the datamine.
 * Reports coverage for both:
 *   - PRIMARY only (what we'd render without the <Sprite> fallback)
 *   - PRIMARY + FALLBACK (what actually renders in the browser)
 *
 * Sample-based for items (100/4302) since a full scan is 15+ min
 * and item coverage was validated at 100% on prior sweeps.
 *
 * Run via: `npm run audit:sprites`
 *
 * Environment overrides for CI or ad-hoc deep scans:
 *   SAMPLE=500 npm run audit:sprites       # bigger item sample
 *   CONCURRENCY=20 npm run audit:sprites   # be less nice to CDNs
 */

import { readFileSync } from "node:fs";

const MEOWDB_ROOT = "https://meowdb.com/msclassic";
const CDN_ROOT = "https://maplestory.io/api";
const VERSION = "GMS/83";
const SAMPLE = Number(process.env.SAMPLE ?? 100);
const CONCURRENCY = Number(process.env.CONCURRENCY ?? 10);

function readJson(path) {
	return JSON.parse(readFileSync(path, "utf8"));
}

async function head(url) {
	try {
		const r = await fetch(url, { method: "HEAD", redirect: "follow" });
		return r.status;
	} catch (e) {
		return -1;
	}
}

// Probe an ordered URL chain. Returns:
//   { chainIdx: 0..N-1, url }  when some URL 200s (0 = primary hit)
//   null                        when every URL failed
async function probeChain(urls) {
	for (let i = 0; i < urls.length; i++) {
		const status = await head(urls[i]);
		if (status === 200) return { chainIdx: i, url: urls[i] };
	}
	return null;
}

async function probeAll(items, buildChain) {
	const stats = {
		total: items.length,
		primary: 0,      // hit on urls[0]
		fallback: 0,     // hit on urls[1..]
		missing: 0,      // every URL failed
		missingSamples: [],
	};
	let idx = 0;
	async function worker() {
		while (idx < items.length) {
			const item = items[idx++];
			const chain = buildChain(item);
			if (chain.length === 0) {
				stats.missing++;
				if (stats.missingSamples.length < 6) stats.missingSamples.push({ item, reason: "no url" });
				continue;
			}
			const hit = await probeChain(chain);
			if (!hit) {
				stats.missing++;
				if (stats.missingSamples.length < 6) stats.missingSamples.push({ item, reason: "all urls failed" });
			} else if (hit.chainIdx === 0) stats.primary++;
			else stats.fallback++;
		}
	}
	await Promise.all(Array.from({ length: CONCURRENCY }, worker));
	return stats;
}

function pct(n, total) {
	return total === 0 ? "n/a" : `${((n / total) * 100).toFixed(1)}%`;
}

function report(name, stats) {
	const covered = stats.primary + stats.fallback;
	console.log(`\n${name} (${stats.total})`);
	console.log(`  primary:  ${stats.primary}   (${pct(stats.primary, stats.total)})`);
	console.log(`  fallback: ${stats.fallback}   (${pct(stats.fallback, stats.total)})`);
	console.log(`  covered:  ${covered}   (${pct(covered, stats.total)})   <- what browser renders`);
	console.log(`  missing:  ${stats.missing}   (${pct(stats.missing, stats.total)})`);
	if (stats.missingSamples.length > 0) {
		console.log(`  missing sample:`);
		for (const { item, reason } of stats.missingSamples) {
			const label = item.name ?? item.id;
			console.log(`    id ${item.id}  wz ${item.wzId ?? "-"}  ${label}  [${reason}]`);
		}
	}
}

function sample(arr, n) {
	if (arr.length <= n) return arr;
	return Array.from({ length: n }, (_, i) => arr[Math.floor(i * arr.length / n)]);
}

async function main() {
	const items = readJson("src/data/db/items.json");
	const mobs = readJson("src/data/db/mobs.json");
	const npcs = readJson("src/data/db/npcs.json");
	const maps = readJson("src/data/db/maps.json");

	console.log(`=== SPRITE AUDIT (item sample=${SAMPLE}, concurrency=${CONCURRENCY}) ===`);

	report(
		"ITEMS",
		await probeAll(sample(items, SAMPLE), (i) => [`${MEOWDB_ROOT}/api/assets/icons/${i.id}`]),
	);
	report(
		"MOBS",
		await probeAll(mobs, (m) => {
			const chain = [`${MEOWDB_ROOT}/monsters/sprites/mob_${m.id}.png`];
			if (m.wzId) chain.push(`${CDN_ROOT}/${VERSION}/mob/${m.wzId}/render/stand`);
			return chain;
		}),
	);
	report(
		"NPCS",
		await probeAll(npcs, (n) => {
			// Mirror npcSpriteSrcs() in src/lib/maplestory-cdn.ts:
			// MeowDB name-slug first (covers Forgotten Hollow + all
			// post-v83 additions), maplestory.io wzId as fallback.
			const chain = [];
			if (n.name) {
				const slug = n.name.toLowerCase()
					.replace(/['\u2019]/g, "")
					.replace(/[^a-z0-9]+/g, "-")
					.replace(/^-+|-+$/g, "");
				if (slug) chain.push(`${MEOWDB_ROOT}/npcs/${slug}.webp`);
			}
			if (n.wzId) chain.push(`${CDN_ROOT}/${VERSION}/npc/${n.wzId}/render/stand`);
			return chain;
		}),
	);
	report(
		"MAPS",
		await probeAll(maps, (m) => {
			// Mirror mapThumbnailSrcs() in src/lib/maplestory-cdn.ts:
			// MeowDB minimap (covers all 87 CoT2-exclusive Forgotten
			// Hollow maps that maplestory.io lacks), then maplestory.io
			// minimap + render as fallbacks. Sprint 61 map CDN hunt
			// pushed coverage 79.6% -> ~98%.
			const chain = [];
			if (m.id != null && m.id >= 0) {
				const padded = String(m.id).padStart(9, "0");
				chain.push(`${MEOWDB_ROOT}/maps/minimaps/${padded}.png`);
			}
			if (m.wzId) {
				chain.push(`${CDN_ROOT}/${VERSION}/map/${m.wzId}/minimap`);
				chain.push(`${CDN_ROOT}/${VERSION}/map/${m.wzId}/render`);
			}
			return chain;
		}),
	);
}

main().catch((e) => { console.error(e); process.exit(1); });
