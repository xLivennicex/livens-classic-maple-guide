#!/usr/bin/env node
/**
 * build-database.mjs
 *
 * Cross-references the CoT 2 client datamine into unified "dossier"
 * JSON files that power /database/ pages.
 *
 * Input (fetched from osmsdataexplorer.com):
 *   items.json      - item catalog (1,703 items + 208 scrolls)
 *   quests.json     - quest catalog (rewards + requirements)
 *   crafting.json   - profession recipes
 *   lookups.json    - item/npc/mob/map name lookups
 *   maps.json       - map + region + npc_lookup
 *
 * Output (written to src/data/db/):
 *   items.json      - array of item dossiers
 *   mobs.json       - array of mob dossiers
 *   index.json      - light index for client-side search
 *   generated-at    - build timestamp for cache invalidation
 *
 * Zen of Python: flat is better than nested. One dossier per item,
 * one dossier per mob. No deep tree traversal at query time.
 */

import { writeFile, mkdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const BASE = "https://osmsdataexplorer.com/data/current";
const MEOWDB_API = "https://meowdb.com/msclassic/api";
const OUT_DIR = "src/data/db";
// Concurrency cap for MeowDB drop scraping. 10 in parallel keeps
// the total scrape ~5-10s without hammering the free API.
const MEOWDB_CONCURRENCY = 10;

const ENDPOINTS = [
	"items.json",
	"quests.json",
	"crafting.json",
	"lookups.json",
	"maps.json",
];

// ---------- fetch ----------

async function fetchJson(name) {
	const url = `${BASE}/${name}`;
	process.stdout.write(`  fetching ${name} ... `);
	const res = await fetch(url);
	if (!res.ok) throw new Error(`fetch ${name}: HTTP ${res.status}`);
	const text = await res.text();
	console.log(`${(text.length / 1024).toFixed(1)}KB`);
	return JSON.parse(text);
}

/**
 * Resolve every NPC's maplestory.io WZ ID via the search endpoint,
 * with disk caching. Our internal NPC IDs (1 for Heena) are NOT the
 * WZ IDs (2101 for Heena) that maplestory.io serves sprites at, so
 * we need a name-based mapping.
 *
 * Coverage: 216/266 exact/fuzzy matches (81.2%). Misses are mostly
 * crafting stations (Anvil, Sewing Machine, etc - not real NPCs, no
 * v83 sprite) plus a handful of post-v83 CoT additions (Whitney,
 * Lyn, Zelya). Missing sprites degrade gracefully via `onerror`.
 *
 * Cache: `src/data/db/npc-wz-cache.json` is git-tracked. Blows away
 * with `rm src/data/db/npc-wz-cache.json && npm run db` when NPC
 * roster changes materially (extremely rare).
 */
async function resolveNpcWzIds(npcs) {
	const cachePath = join(OUT_DIR, "npc-wz-cache.json");
	if (existsSync(cachePath)) {
		const cache = JSON.parse(await readFile(cachePath, "utf8"));
		process.stdout.write(`  npc WZ mapping: cache hit (${Object.keys(cache).length} entries)\n`);
		return cache;
	}

	console.log(`  npc WZ mapping: no cache - scraping maplestory.io (this takes ~2-3 min, one-time cost)`);
	const mapping = {};   // ourId -> wzId | null
	const queue = [...npcs];
	let done = 0;
	const CONCURRENCY = 10;

	const worker = async () => {
		while (queue.length > 0) {
			const npc = queue.pop();
			try {
				const r = await fetch(
					`https://maplestory.io/api/GMS/83/npc?searchFor=${encodeURIComponent(npc.name)}`,
				);
				if (r.ok) {
					const j = await r.json();
					const exact = j.filter((n) => n.name === npc.name);
					// Prefer exact-name match; fall back to first fuzzy hit.
					mapping[npc.id] = exact[0]?.id ?? j[0]?.id ?? null;
				} else {
					mapping[npc.id] = null;
				}
			} catch {
				mapping[npc.id] = null;
			}
			done++;
			if (done % 25 === 0) process.stdout.write(`${done} `);
		}
	};
	await Promise.all(Array(CONCURRENCY).fill(0).map(worker));
	if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });
	await writeFile(cachePath, JSON.stringify(mapping, null, 2));
	const resolved = Object.values(mapping).filter(Boolean).length;
	console.log(`\n  npc WZ mapping: resolved ${resolved}/${npcs.length}, cached to ${cachePath}`);
	return mapping;
}

/**
 * Resolve every mob's maplestory.io WZ ID via the search endpoint,
 * with disk caching. Mirror of resolveNpcWzIds; documented separately
 * because the ID scheme mismatch is different:
 *
 * Our internal mob IDs (from osmsdataexplorer's lookups.mob_names)
 * are small integers (1, 2, 3, ...). maplestory.io serves the actual
 * Mob.wz payload at WZ IDs (100100 for Snail, 100101 for Blue Snail,
 * etc). We can't reverse the mapping without a name-based lookup.
 *
 * Cache: `src/data/db/mob-wz-cache.json` is git-tracked. Rebuild by
 * deleting the file and running `npm run db` again.
 *
 * Exact-name match preferred; falls back to first fuzzy hit. Never
 * hallucinates - unresolved mobs get null and simply won't render
 * stats (the disclaimer covers that gracefully).
 */
async function resolveMobWzIds(mobs) {
	const cachePath = join(OUT_DIR, "mob-wz-cache.json");
	if (existsSync(cachePath)) {
		const cache = JSON.parse(await readFile(cachePath, "utf8"));
		process.stdout.write(`  mob WZ mapping: cache hit (${Object.keys(cache).length} entries)\n`);
		return cache;
	}

	console.log(`  mob WZ mapping: no cache - scraping maplestory.io (~1-2 min, one-time cost)`);
	const mapping = {};   // ourId -> wzId | null
	const queue = [...mobs];
	let done = 0;
	const CONCURRENCY = 10;

	const worker = async () => {
		while (queue.length > 0) {
			const mob = queue.pop();
			try {
				const r = await fetch(
					`https://maplestory.io/api/GMS/83/mob?searchFor=${encodeURIComponent(mob.name)}`,
				);
				if (r.ok) {
					const j = await r.json();
					const exact = j.filter((m) => m.name === mob.name);
					// Prefer exact-name match; fall back to first fuzzy hit.
					mapping[mob.id] = exact[0]?.id ?? j[0]?.id ?? null;
				} else {
					mapping[mob.id] = null;
				}
			} catch {
				mapping[mob.id] = null;
			}
			done++;
			if (done % 25 === 0) process.stdout.write(`${done} `);
		}
	};
	await Promise.all(Array(CONCURRENCY).fill(0).map(worker));
	if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });
	await writeFile(cachePath, JSON.stringify(mapping, null, 2));
	const resolved = Object.values(mapping).filter(Boolean).length;
	console.log(`\n  mob WZ mapping: resolved ${resolved}/${mobs.length}, cached to ${cachePath}`);
	return mapping;
}

/**
 * Fetch per-mob combat stats (level, HP, MP, EXP, attack, defense,
 * accuracy, evasion, elemental flags) from maplestory.io using
 * the resolved WZ IDs.
 *
 * Cached at `src/data/db/mob-stats-cache.json` keyed by WZ ID so
 * cache survives mob-WZ remapping. Fail-quiet per mob: any HTTP
 * or JSON error yields null stats and the UI degrades gracefully.
 *
 * Returns Map<wzId, stats | null>.
 */
async function fetchMobStats(wzIds) {
	const cachePath = join(OUT_DIR, "mob-stats-cache.json");
	let cache = {};
	if (existsSync(cachePath)) {
		cache = JSON.parse(await readFile(cachePath, "utf8"));
	}
	const missing = wzIds.filter((id) => id != null && !(id in cache));
	if (missing.length === 0) {
		process.stdout.write(`  mob stats: cache hit (${Object.keys(cache).length} entries)\n`);
		return new Map(Object.entries(cache).map(([k, v]) => [Number(k), v]));
	}

	console.log(`  mob stats: fetching ${missing.length} new (${Object.keys(cache).length} cached) from maplestory.io`);
	const queue = [...missing];
	let done = 0;
	const CONCURRENCY = 10;

	const worker = async () => {
		while (queue.length > 0) {
			const wzId = queue.pop();
			try {
				const r = await fetch(`https://maplestory.io/api/GMS/83/mob/${wzId}`);
				if (r.ok) {
					const j = await r.json();
					const m = j.meta ?? {};
					cache[wzId] = {
						level: m.level ?? null,
						maxHP: m.maxHP ?? null,
						maxMP: m.maxMP ?? null,
						exp: m.exp ?? null,
						physicalDamage: m.physicalDamage ?? null,
						physicalDefense: m.physicalDefense ?? null,
						magicDamage: m.magicDamage ?? null,
						magicDefense: m.magicDefense ?? null,
						accuracy: m.accuracy ?? null,
						evasion: m.evasion ?? null,
						speed: m.speed ?? null,
						isBodyAttack: m.isBodyAttack ?? null,
						isUndead: m.isUndead ?? null,
						isBoss: m.isBoss ?? null,
					};
				} else {
					cache[wzId] = null;
				}
			} catch {
				cache[wzId] = null;
			}
			done++;
			if (done % 25 === 0) process.stdout.write(`${done} `);
		}
	};
	await Promise.all(Array(CONCURRENCY).fill(0).map(worker));
	if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });
	await writeFile(cachePath, JSON.stringify(cache, null, 2));
	const resolved = Object.values(cache).filter(Boolean).length;
	console.log(`\n  mob stats: ${resolved}/${Object.keys(cache).length} have data, cached to ${cachePath}`);
	return new Map(Object.entries(cache).map(([k, v]) => [Number(k), v]));
}

/**
 * Resolve every dossier map's maplestory.io WZ ID via the search
 * endpoint. Same pattern as resolveNpcWzIds / resolveMobWzIds -
 * osmsdataexplorer's internal IDs (1, 10, 20 ... for Maple Island;
 * bigger numbers elsewhere) don't overlap with WZ IDs (10000 for
 * Mushroom Town, 100000000 for Henesys) so we name-search each one.
 *
 * Disambiguation: multiple maps can share a name ("Mushroom Town
 * Townstreet" appears twice). We prefer exact match on (name +
 * streetName); fall back to first name-only match; then first
 * fuzzy hit. Null when nothing resolves - the pin/backlink
 * degrades gracefully.
 *
 * Cache: `src/data/db/map-wz-cache.json`. ~1-2 min first build,
 * instant every subsequent build.
 */
async function resolveMapWzIds(dossierMaps) {
	const cachePath = join(OUT_DIR, "map-wz-cache.json");
	if (existsSync(cachePath)) {
		const cache = JSON.parse(await readFile(cachePath, "utf8"));
		process.stdout.write(`  map WZ mapping: cache hit (${Object.keys(cache).length} entries)\n`);
		return cache;
	}

	console.log(`  map WZ mapping: no cache - scraping maplestory.io (~1-2 min, one-time cost)`);
	const mapping = {};
	const queue = [...dossierMaps];
	let done = 0;
	const CONCURRENCY = 10;

	const worker = async () => {
		while (queue.length > 0) {
			const m = queue.pop();
			try {
				const r = await fetch(
					`https://maplestory.io/api/GMS/83/map?searchFor=${encodeURIComponent(m.name)}`,
				);
				if (r.ok) {
					const j = await r.json();
					const exact = j.filter(
						(x) => x.name === m.name && x.streetName === m.streetName,
					);
					const nameOnly = j.filter((x) => x.name === m.name);
					// Only accept matches where NAME agrees. The old
					// `?? j[0]?.id` fallback was the source of the
					// "Victoria Road" world-map pin pointing at Yellow
					// Mushroom House: dossier 88000000 has name="Victoria
					// Road" which never matches any WZ map's `name`
					// (Victoria Road is always a streetName in WZ), so it
					// fell through to the first search hit - Henesys
					// (WZ 100000000) - and clobbered real Henesys in the
					// reverse map. Null means "we don't know", which is
					// correct here.
					mapping[m.id] = exact[0]?.id ?? nameOnly[0]?.id ?? null;
				} else {
					mapping[m.id] = null;
				}
			} catch {
				mapping[m.id] = null;
			}
			done++;
			if (done % 50 === 0) process.stdout.write(`${done} `);
		}
	};
	await Promise.all(Array(CONCURRENCY).fill(0).map(worker));
	if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });
	await writeFile(cachePath, JSON.stringify(mapping, null, 2));
	const resolved = Object.values(mapping).filter(Boolean).length;
	console.log(`\n  map WZ mapping: resolved ${resolved}/${dossierMaps.length}, cached to ${cachePath}`);
	return mapping;
}

/**
 * Fetch every WorldMap.img entry from maplestory.io and materialize
 * it into a clean pin-graph plus PNG assets on disk.
 *
 * maplestory.io exposes 21 world maps: one top-level "WorldMap"
 * (the continent selector), plus per-continent variants like
 * WorldMap000 (Maple Island), WorldMap010 (Victoria Island),
 * WorldMap020 (Ossyria), etc. Each entry has:
 *   - baseImage: the pixel-art background as base64 PNG
 *   - links[]: overlay images that navigate to a sub-world map
 *   - maps[]: pin spots with coord + array of map IDs the pin
 *             represents (usually the "town" first, then all
 *             training maps in that street)
 *
 * We decode PNGs to `public/images/worldmaps/*.png` so the UI can
 * just `<img src="/images/worldmaps/WorldMap000.png">` without a
 * runtime base64 decode. Metadata is written to
 * `src/data/db/worldmaps.json` (keyed by world map name).
 *
 * Cache: the presence of `worldmaps.json` gates the whole stage.
 * Rebuild with `rm src/data/db/worldmaps.json && npm run db`.
 */
async function fetchWorldMaps() {
	const metaPath = join(OUT_DIR, "worldmaps.json");
	if (existsSync(metaPath)) {
		const meta = JSON.parse(await readFile(metaPath, "utf8"));
		process.stdout.write(`  world maps: cache hit (${Object.keys(meta).length} maps)\n`);
		return meta;
	}

	console.log(`  world maps: no cache - fetching from maplestory.io (~5-10s)`);

	const imgDir = "public/images/worldmaps";
	if (!existsSync(imgDir)) await mkdir(imgDir, { recursive: true });

	// Parse PNG width/height from raw bytes without a heavy image
	// dep. PNG header layout: 8-byte signature + 4-byte IHDR length +
	// 4-byte "IHDR" tag + width (uint32 BE) + height (uint32 BE).
	// So width lives at bytes 16..20, height at bytes 20..24.
	const pngDims = (buf) => ({
		width: buf.readUInt32BE(16),
		height: buf.readUInt32BE(20),
	});

	const list = await (await fetch(`https://maplestory.io/api/GMS/83/map/worldmap`)).json();
	const meta = {};

	for (const name of list) {
		const detail = await (
			await fetch(`https://maplestory.io/api/GMS/83/map/worldmap/${name}`)
		).json();

		// Base image can be an array (multi-layer) or single object;
		// we take the first layer since MapleStory world maps ship
		// one background image per WorldMap entry.
		const base = Array.isArray(detail.baseImage) ? detail.baseImage[0] : detail.baseImage;
		if (!base?.image) continue;

		const baseBuf = Buffer.from(base.image, "base64");
		const baseFile = `${name}.png`;
		await writeFile(join(imgDir, baseFile), baseBuf);
		const baseDims = pngDims(baseBuf);

		// Links (subregion navigation overlays). Each has its own tiny
		// PNG - usually a stylized region label like "MAPLE ISLAND".
		const links = [];
		for (let i = 0; i < (detail.links ?? []).length; i++) {
			const link = detail.links[i];
			if (!link.linkImage?.image) continue;
			const linkBuf = Buffer.from(link.linkImage.image, "base64");
			const linkFile = `${name}-link-${i}.png`;
			await writeFile(join(imgDir, linkFile), linkBuf);
			const linkDims = pngDims(linkBuf);
			links.push({
				toolTip: link.toolTip ?? null,
				linksTo: link.linksTo,
				image: `/images/worldmaps/${linkFile}`,
				width: linkDims.width,
				height: linkDims.height,
				originX: link.linkImage.origin?.x ?? 0,
				originY: link.linkImage.origin?.y ?? 0,
			});
		}

		// Pin spots. Each pin has an array of `mapNumbers` - the
		// "canonical" map for the pin is the first entry (usually
		// the town/hub); the rest are streets branching off it.
		const maps = (detail.maps ?? [])
			.filter((m) => m.mapNumbers?.length > 0)
			.map((m) => ({
				title: m.title ?? null,
				description: m.description ?? null,
				spotX: m.spot?.x ?? 0,
				spotY: m.spot?.y ?? 0,
				type: m.type ?? null,
				mapNumbers: m.mapNumbers,
				firstMapId: m.mapNumbers[0],
			}));

		meta[name] = {
			name,
			image: `/images/worldmaps/${baseFile}`,
			width: baseDims.width,
			height: baseDims.height,
			originX: base.origin?.x ?? 0,
			originY: base.origin?.y ?? 0,
			links,
			maps,
		};

		process.stdout.write(".");
	}

	await writeFile(metaPath, JSON.stringify(meta, null, 2));
	console.log(`\n  world maps: fetched ${Object.keys(meta).length} entries -> ${imgDir}/`);
	return meta;
}

/**
 * Fetch the crowdsourced drop table for one mob from MeowDB.
 *
 * MeowDB uses the SAME mob ID scheme as osmsdataexplorer (small
 * numeric IDs like 3 for Blue Snail), NOT the WZ ID scheme that
 * maplestory.io uses (100101 for Blue Snail). Verified across a
 * 50-mob sample.
 *
 * The `itemIconKey` field on each drop is a stringified WZ ID that
 * matches our items.json IDs directly. `itemId` is a MeowDB
 * internal ID we discard.
 *
 * Returns [{ itemId, itemName, itemType, itemSubtype, score }]
 * or [] on any error (empty drops, 404, network hiccup, JSON
 * parse fail). Fail-quiet: one flaky mob shouldn't tank the whole
 * build.
 */
async function fetchMeowdbDrops(mobId) {
	try {
		const res = await fetch(`${MEOWDB_API}/drops?monsterId=${mobId}`);
		if (!res.ok) return [];
		const json = await res.json();
		return (json.drops ?? [])
			.filter((d) => d.itemIconKey && d.itemName)
			.map((d) => ({
				itemId: Number(d.itemIconKey),  // our WZ ID space
				itemName: d.itemName,
				itemType: d.itemType ?? null,
				itemSubtype: d.itemSubtype ?? null,
				reqJob: d.reqJob ?? null,
				reqLevel: d.itemLevelReq || null,
				// Confidence score = upvotes - downvotes. Community
				// consensus proxy; higher = more people have seen it drop.
				score: d.score ?? 0,
			}));
	} catch {
		return [];
	}
}

/**
 * Fetch drops for many mobs with bounded concurrency. Prints a
 * progress line every 25 mobs so the user knows the scrape is
 * making progress on longer runs.
 */
async function fetchAllDrops(mobIds) {
	const results = new Map();
	let done = 0;
	const workers = Array(MEOWDB_CONCURRENCY).fill(0).map(async () => {
		while (mobIds.length > 0) {
			const id = mobIds.pop();
			const drops = await fetchMeowdbDrops(id);
			results.set(id, drops);
			done++;
			if (done % 25 === 0) process.stdout.write(`${done} `);
		}
	});
	await Promise.all(workers);
	return results;
}

// ---------- cross-referencing ----------

/**
 * Build per-item and per-mob cross-reference indexes from quests.
 * Returns three maps:
 *   itemGivenBy[itemId]    -> [{ questId, questName, count, guaranteed, level }]
 *   itemRequiredBy[itemId] -> [{ questId, questName, count, level }]
 *   mobRequiredBy[mobId]   -> [{ questId, questName, count, level }]
 */
function indexQuests(quests) {
	const itemGivenBy = new Map();
	const itemRequiredBy = new Map();
	const mobRequiredBy = new Map();

	const push = (map, key, value) => {
		if (!map.has(key)) map.set(key, []);
		map.get(key).push(value);
	};

	for (const q of quests) {
		const qMeta = {
			questId: q.id,
			questName: q.name,
			level: q.level_min,
			region: q.region,
		};

		// Item rewards
		for (const r of q.rewards ?? []) {
			if (r.type !== "item" || !r.id) continue;
			push(itemGivenBy, r.id, {
				...qMeta,
				count: r.count,
				guaranteed: r.guaranteed === true,
			});
		}

		// Requirements (item collection OR mob kill)
		for (const req of q.requirements_list ?? []) {
			if (!req.id) continue;
			if (req.type === "item") {
				push(itemRequiredBy, req.id, { ...qMeta, count: req.count });
			} else if (req.type === "mob") {
				push(mobRequiredBy, req.id, { ...qMeta, count: req.count });
			}
		}
	}

	return { itemGivenBy, itemRequiredBy, mobRequiredBy };
}

/**
 * Build a name -> ID lookup by inverting lookups.item_names.
 * Case-insensitive. When multiple IDs share a name (rare), keeps
 * the lowest ID for determinism.
 */
function buildNameToId(itemNames) {
	const m = new Map();
	for (const [id, name] of Object.entries(itemNames ?? {})) {
		const key = name.toLowerCase();
		const n = Number(id);
		if (!m.has(key) || m.get(key) > n) m.set(key, n);
	}
	return m;
}

/**
 * Index crafting recipes. Schema:
 *   disciplines[].discipline (name)
 *     .output_types[].output_type
 *       .levels[].level
 *         .recipes[] = { output_id, result_item_name, result_count,
 *                        req_level, craft_exp, meso_cost,
 *                        ingredients: [{item_name, count}] }
 *
 * Ingredients reference items BY NAME only. We look up IDs via
 * the nameToId map (built from lookups.item_names).
 *
 * Returns:
 *   itemAsMaterial[itemId] -> [{ discipline, outputId, outputName, count }]
 *   itemAsOutput[itemId]   -> [{ discipline, outputType, level, mesoCost,
 *                                craftExp, ingredients: [{id,name,count}] }]
 */
function indexCrafting(disciplines, nameToId) {
	const itemAsMaterial = new Map();
	const itemAsOutput = new Map();

	const push = (map, key, value) => {
		if (!map.has(key)) map.set(key, []);
		map.get(key).push(value);
	};

	for (const discipline of disciplines ?? []) {
		const dName = discipline.discipline ?? "Unknown";
		for (const outputType of discipline.output_types ?? []) {
			const oType = outputType.output_type;
			for (const levelBlock of outputType.levels ?? []) {
				const reqLevel = levelBlock.level;
				for (const recipe of levelBlock.recipes ?? []) {
					const outId = recipe.output_id;
					const outName = recipe.result_item_name;
					if (!outId) continue;

					const ingredients = (recipe.ingredients ?? []).map((ing) => ({
						id: nameToId.get(ing.item_name?.toLowerCase() ?? "") ?? null,
						name: ing.item_name,
						count: ing.count,
					}));

					push(itemAsOutput, outId, {
						discipline: dName,
						outputType: oType,
						reqLevel,
						mesoCost: recipe.meso_cost,
						craftExp: recipe.craft_exp,
						resultCount: recipe.result_count,
						ingredients,
					});

					for (const ing of ingredients) {
						if (!ing.id) continue;
						push(itemAsMaterial, ing.id, {
							discipline: dName,
							outputId: outId,
							outputName: outName,
							reqLevel,
							count: ing.count,
						});
					}
				}
			}
		}
	}

	return { itemAsMaterial, itemAsOutput };
}

// ---------- editorial cross-link ----------

/**
 * Return a map: wzId -> editorial slug, if any editorial page
 * exists in src/content/items/ for this WZ ID.
 * Read cheaply by scanning frontmatter.
 */
async function findEditorialItems() {
	const { readdir, readFile } = await import("node:fs/promises");
	const dir = "src/content/items";
	if (!existsSync(dir)) return new Map();

	const files = await readdir(dir);
	const editorial = new Map();

	for (const file of files) {
		if (!file.endsWith(".md")) continue;
		const content = await readFile(join(dir, file), "utf8");
		const match = content.match(/^wzId:\s*(\d+)/m);
		if (match) {
			editorial.set(Number(match[1]), file.replace(/\.md$/, ""));
		}
	}

	return editorial;
}

// ---------- dossier builders ----------

/**
 * v83-era MapleStory equipment stat variance formula:
 *   min = base - floor(base / 10)
 *   max = base + floor(base / 10)
 * Applied to weapon PAD/MAD primarily. Documented so we can revisit
 * if CoT 2 exposes actual variance ranges in the datamine later.
 */
function statRange(base) {
	if (!base || typeof base !== "number") return null;
	const delta = Math.floor(base / 10);
	return { min: base - delta, max: base + delta, base };
}

function buildItemDossier(item, indexes, editorial, lookups) {
	const id = item.id;
	const stats = item.stats ?? {};

	// Consumable price lives at stats.price; equipment price lives at
	// top-level item.price. Normalize into a single field.
	const npcSellPrice = item.price ?? stats.price ?? null;

	// Stat ranges - only compute for PAD/MAD (weapons) since those are
	// the stats players scroll/upgrade. Base stats (STR/DEX/INT/LUK,
	// PDD/MDD, HP/MP) don't roll variance on the base equip.
	const ranges = {};
	if (stats.incPAD) ranges.incPAD = statRange(stats.incPAD);
	if (stats.incMAD) ranges.incMAD = statRange(stats.incMAD);

	return {
		id,
		name: item.name ?? lookups.item_names?.[id] ?? `Item ${id}`,
		category: item.category ?? "Unknown",
		subCategory: item.sub_category ?? null,
		stats,
		statRanges: Object.keys(ranges).length > 0 ? ranges : null,
		reqJobLabel: item.req_job_label ?? null,
		weaponType: item.weapon_type ?? null,
		attackSpeedLabel: item.attack_speed_label ?? null,
		npcSellPrice,
		spec: item.spec ?? null,   // consumable effects (hp/mp restore)
		description: item.description ?? null,
		// Scroll-specific fields (present only on entries from items.scrolls)
		equipSlot: item.equip_slot ?? null,
		statType: item.stat_type ?? null,
		tier: item.tier ?? null,
		givenByQuests: indexes.itemGivenBy.get(id) ?? [],
		requiredByQuests: indexes.itemRequiredBy.get(id) ?? [],
		usedAsMaterial: indexes.itemAsMaterial.get(id) ?? [],
		craftableFrom: indexes.itemAsOutput.get(id) ?? [],
		editorialSlug: editorial.get(id) ?? null,
	};
}

function buildMobDossier(mobId, mobName, indexes, wzId = null, stats = null) {
	return {
		id: Number(mobId),
		name: mobName,
		// maplestory.io WZ ID - unlocks per-mob combat stats + sprite
		// URLs at a stable path. null when name lookup didn't resolve
		// (rare; usually post-v83 CoT additions or renamed mobs).
		wzId,
		// Combat stats sourced from maplestory.io's Mob.wz mirror.
		// null when wzId didn't resolve. Individual fields can also
		// be null even when stats is present (dev-only mobs, etc).
		stats,
		requiredByQuests: indexes.mobRequiredBy.get(Number(mobId)) ?? [],
	};
}

/**
 * Classify a map into one of five kinds using cheap heuristics on
 * the datamine fields. Boss maps are NOT auto-classified in MVP -
 * that needs a mob-is-boss flag we don't have yet. Editorial
 * overlay could tag specific maps as bosses later.
 */
function classifyMap(m) {
	if (m.region === "Dev") return "dev";
	if (m.map_mark === "Event") return "event";
	if (m.street_name === "Hidden Street") return "hidden";
	// Prefer the datamine's explicit is_town flag (available on 115
	// maps) over the 'no mob positions = town' heuristic.
	if (m.is_town === true) return "town";
	if (!m.mob_positions || m.mob_positions.length === 0) return "town";
	return "training";
}

/**
 * Build a per-map dossier merging the datamine record with
 * cross-referenced quest / mob / NPC data.
 *
 * The `questsHere` cross-ref resolves each quest's `npc_name` string
 * through `npcNameToId` to find quests originating from an NPC on
 * this map. Best-effort: some npc_names won't resolve (unusual
 * spellings, missing lookups) and those quests simply won't appear
 * in `questsHere`. Documented so future maintainers understand the
 * incompleteness.
 */
function buildMapDossier(m, quests, mobNames, npcNames, npcNameToId, wzId = null) {
	const npcIds = [...new Set(m.npcs ?? [])];
	const npcIdSet = new Set(npcIds);

	// De-duped mob IDs from mob_positions with lookup names.
	const mobIds = [...new Set((m.mob_positions ?? []).map((p) => p.id))];
	const mobs = mobIds.map((id) => ({
		id,
		name: mobNames?.[id] ?? `Mob ${id}`,
		count: (m.mob_positions ?? []).filter((p) => p.id === id).length,
	}));

	// NPC list with names from lookups.npc_names.
	const npcs = npcIds.map((id) => ({
		id,
		name: npcNames?.[id] ?? `NPC ${id}`,
	}));

	// Cross-ref: quests whose giver NPC lives on this map.
	const questsHere = [];
	for (const q of quests) {
		if (!q.npc_name) continue;
		const npcId = npcNameToId.get(q.npc_name.toLowerCase());
		if (npcId !== undefined && npcIdSet.has(npcId)) {
			questsHere.push({
				questId: q.id,
				questName: q.name,
				level: q.level_min ?? null,
				npcName: q.npc_name,
			});
		}
	}

	// Portal / exit list. The upstream `exit_names` is already a
	// parallel array of `{id, name}` objects (not strings, as an
	// earlier version of this code assumed). We normalize to a
	// flat {toMapId, toMapName} shape so downstream UI never has
	// to reach into a nested object. Not every map has portals
	// (event / dev / terminal maps often don't).
	const exits = (m.exits ?? []).map((toId, i) => {
		const named = m.exit_names?.[i];
		// Support both shapes defensively: string (legacy) OR
		// {id, name} (current upstream schema).
		const name = typeof named === "string"
			? named
			: named?.name ?? `Map ${toId}`;
		return { toMapId: toId, toMapName: name };
	});

	return {
		id: m.id,
		// maplestory.io WZ ID - null when name lookup didn't
		// resolve. Powers sprite/render URLs plus world-map cross-
		// links (world map pins use WZ IDs, ours use internal IDs).
		wzId,
		name: m.name,
		streetName: m.street_name ?? null,
		region: m.region,
		minimap: m.minimap ?? null,
		bgm: m.bgm ?? null,
		mapMark: m.map_mark ?? null,
		kind: classifyMap(m),
		isTown: m.is_town ?? null,
		mobRate: m.mob_rate ?? null,
		returnMapId: m.return_map_id ?? null,
		returnMapName: m.return_map_name ?? null,
		mobs,
		npcs,
		questsHere,
		exits,
		// Full coord-mapped positions for schematic layout overlay.
		// Preserved verbatim from the datamine; the UI computes a
		// bounding box + normalized coords at render time.
		npcPositions: m.npc_positions ?? [],
		mobPositions: m.mob_positions ?? [],
		mobPositionCount: (m.mob_positions ?? []).length,
		npcPositionCount: (m.npc_positions ?? []).length,
	};
}

// ---------- main ----------

async function main() {
	console.log("build-database.mjs - cross-referencing CoT 2 datamine\n");

	// Fetch all endpoints in parallel
	const [items, quests, crafting, lookups, maps] = await Promise.all(
		ENDPOINTS.map((e) => fetchJson(e)),
	);

	console.log("\nindexing...");
	const questIndexes = indexQuests(quests.quests ?? []);
	console.log(`  quest cross-refs: ${questIndexes.itemGivenBy.size} items given, ${questIndexes.itemRequiredBy.size} items required, ${questIndexes.mobRequiredBy.size} mobs required`);

	const nameToId = buildNameToId(lookups.item_names);
	const craftIndexes = indexCrafting(crafting.disciplines ?? [], nameToId);
	console.log(`  crafting cross-refs: ${craftIndexes.itemAsMaterial.size} items as material, ${craftIndexes.itemAsOutput.size} items as output`);

	const editorial = await findEditorialItems();
	console.log(`  editorial items: ${editorial.size} pages`);

	// Merge quest+craft indexes for dossier construction
	const indexes = {
		itemGivenBy: questIndexes.itemGivenBy,
		itemRequiredBy: questIndexes.itemRequiredBy,
		mobRequiredBy: questIndexes.mobRequiredBy,
		itemAsMaterial: craftIndexes.itemAsMaterial,
		itemAsOutput: craftIndexes.itemAsOutput,
	};

	// Build item dossiers
	const allItems = [...(items.items ?? []), ...(items.scrolls ?? [])];
	const itemDossiers = allItems.map((it) => buildItemDossier(it, indexes, editorial, lookups));

	// Also include lookup-only items (in lookups.item_names but not in items.json)
	// These are typically etc/consumable items with minimal metadata
	const knownIds = new Set(itemDossiers.map((d) => d.id));
	for (const [idStr, name] of Object.entries(lookups.item_names ?? {})) {
		const id = Number(idStr);
		if (knownIds.has(id)) continue;
		itemDossiers.push(buildItemDossier({ id, name, category: "Etc" }, indexes, editorial, lookups));
	}

	console.log(`  built ${itemDossiers.length} item dossiers`);

	// Build mob dossiers from lookups.mob_names
	const mobSeed = Object.entries(lookups.mob_names ?? {}).map(([id, name]) => ({
		id: Number(id),
		name,
	}));
	// Also include mobs referenced by quests but missing from lookups
	const seededIds = new Set(mobSeed.map((m) => m.id));
	for (const mobId of indexes.mobRequiredBy.keys()) {
		if (seededIds.has(Number(mobId))) continue;
		mobSeed.push({ id: Number(mobId), name: `Mob ${mobId}` });
	}

	// Resolve maplestory.io WZ IDs by name, then fetch combat stats
	// (HP/MP/EXP/level/attack/defense/etc). Two-stage so the two
	// caches (wz-id map, stats-by-wz-id) can evolve independently.
	const mobWzMap = await resolveMobWzIds(mobSeed);
	const statsByWz = await fetchMobStats(
		[...new Set(Object.values(mobWzMap).filter((id) => id != null))],
	);

	const mobDossiers = mobSeed.map(({ id, name }) => {
		const wzId = mobWzMap[id] ?? null;
		const stats = wzId != null ? (statsByWz.get(wzId) ?? null) : null;
		return buildMobDossier(id, name, indexes, wzId, stats);
	});
	console.log(`  built ${mobDossiers.length} mob dossiers`);

	// Scrape crowdsourced drop tables from MeowDB. 195 mobs, 10
	// parallel workers = ~5-10s in practice. Fail-quiet per-mob
	// so a flaky network hiccup won't tank the whole build.
	process.stdout.write(`  scraping meowdb drops: `);
	const dropsByMob = await fetchAllDrops(mobDossiers.map((m) => m.id));
	console.log(`done`);

	// Attach drops to each mob dossier + build reverse index for
	// item -> mob linking. Sort each mob's drops by community score
	// desc so the most-confirmed drops lead the list.
	const itemDroppedBy = new Map();
	const mobById = new Map(mobDossiers.map((m) => [m.id, m]));
	let totalDropRows = 0;
	let mobsWithDrops = 0;
	for (const [mobId, drops] of dropsByMob.entries()) {
		const mob = mobById.get(mobId);
		if (!mob) continue;
		mob.drops = drops.sort((a, b) => b.score - a.score);
		totalDropRows += drops.length;
		if (drops.length > 0) mobsWithDrops++;
		for (const drop of drops) {
			if (!itemDroppedBy.has(drop.itemId)) itemDroppedBy.set(drop.itemId, []);
			itemDroppedBy.get(drop.itemId).push({
				mobId,
				mobName: mob.name,
				score: drop.score,
			});
		}
	}
	console.log(`  drop cross-refs: ${mobsWithDrops}/${mobDossiers.length} mobs have drops, ${totalDropRows} total rows, ${itemDroppedBy.size} unique items dropped`);

	// Attach droppedBy to each item dossier - sort by score desc so
	// the most reliable drop-source mob leads. An item that drops
	// from 5 different mobs shows all 5 (letting readers pick their
	// favorite grind spot).
	for (const item of itemDossiers) {
		const sources = itemDroppedBy.get(item.id) ?? [];
		item.droppedBy = sources.sort((a, b) => b.score - a.score);
	}

	// Resolve every dossier map's maplestory.io WZ ID by name.
	// Necessary because osmsdataexplorer's internal map IDs (1, 10,
	// 20 ... for Maple Island) don't overlap with the WZ IDs (10000,
	// 100000000 ...) that WorldMap.img references. Resolution enables
	// the world-map hotspots to actually navigate to our dossier
	// pages, plus sprite/minimap lookups keyed on WZ ID.
	const allMapsRaw = (maps.regions ?? []).flatMap((r) => r.maps ?? []);
	const mapWzMap = await resolveMapWzIds(
		allMapsRaw.map((m) => ({ id: m.id, name: m.name, streetName: m.street_name })),
	);

	// Fetch WorldMap.img data + PNGs from maplestory.io. This
	// unlocks the /world clickable-hotspot pages. Cached on disk
	// so subsequent builds skip the ~5s fetch cost entirely.
	const worldMaps = await fetchWorldMaps();

	// Invert the WZ mapping so world-map pins (which speak WZ IDs)
	// can find our dossier IDs (which speak internal IDs).
	const wzToDossierId = new Map();
	for (const [dossierId, wzId] of Object.entries(mapWzMap)) {
		if (wzId != null) wzToDossierId.set(wzId, Number(dossierId));
	}

	// For each world-map pin, walk its mapNumbers list to find the
	// FIRST WZ ID that maps back to a dossier we can render. That
	// becomes the pin's click target. Also build a reverse index
	// keyed by dossier ID so /maps/[id] pages can show a "view on
	// world map" backlink.
	const dossierIdToWorldMap = new Map();  // dossierId -> [{worldMapName, pinIndex}]
	for (const [wmName, wm] of Object.entries(worldMaps)) {
		for (let i = 0; i < wm.maps.length; i++) {
			const pin = wm.maps[i];
			const firstResolvable = pin.mapNumbers.find((wzId) => wzToDossierId.has(wzId));
			pin.dossierMapId = firstResolvable != null ? wzToDossierId.get(firstResolvable) : null;
			if (pin.dossierMapId != null) {
				if (!dossierIdToWorldMap.has(pin.dossierMapId)) {
					dossierIdToWorldMap.set(pin.dossierMapId, []);
				}
				dossierIdToWorldMap.get(pin.dossierMapId).push({ worldMapName: wmName, pinIndex: i });
			}
		}
	}
	await writeFile(join(OUT_DIR, "worldmaps.json"), JSON.stringify(worldMaps, null, 2));
	const resolvedPins = [...Object.values(worldMaps)]
		.reduce((sum, wm) => sum + wm.maps.filter((p) => p.dossierMapId != null).length, 0);
	const totalPins = [...Object.values(worldMaps)]
		.reduce((sum, wm) => sum + wm.maps.length, 0);
	console.log(`  world maps: ${resolvedPins}/${totalPins} pins linked to a dossier map, ${dossierIdToWorldMap.size} dossier maps reverse-indexed`);

	// Build map dossiers. maps.json contains { regions: [{region, count,
	// maps: [...]}], total, npc_lookup }. We flatten to a single list.
	const npcNameToId = buildNameToId(lookups.npc_names);
	const mapDossiers = allMapsRaw.map((m) =>
		buildMapDossier(m, quests.quests ?? [], lookups.mob_names, lookups.npc_names, npcNameToId, mapWzMap[m.id] ?? null),
	);
	const mapKindCounts = mapDossiers.reduce((acc, m) => {
		acc[m.kind] = (acc[m.kind] ?? 0) + 1;
		return acc;
	}, {});
	console.log(`  built ${mapDossiers.length} map dossiers - ${JSON.stringify(mapKindCounts)}`);

	// Reverse indexes derived from map dossiers.
	// Enables 'where does X spawn / live?' cross-references on
	// mob pages, quest pages, and NPC pages.
	const mobToMaps = new Map();     // mob_id -> [{mapId, mapName, region, kind, count}]
	const npcToMaps = new Map();     // npc_id -> [{mapId, mapName, region, kind}]
	const questToMaps = new Map();   // quest_id -> [{mapId, mapName, region, npcName}]
	const pushRef = (m, k, v) => {
		if (!m.has(k)) m.set(k, []);
		m.get(k).push(v);
	};
	for (const map of mapDossiers) {
		if (map.kind === "dev" || map.kind === "event") continue;
		const meta = { mapId: map.id, mapName: map.name, region: map.region, kind: map.kind };
		for (const mob of map.mobs) {
			pushRef(mobToMaps, mob.id, { ...meta, count: mob.count });
		}
		for (const npc of map.npcs) {
			pushRef(npcToMaps, npc.id, meta);
		}
		for (const q of map.questsHere) {
			pushRef(questToMaps, q.questId, { ...meta, npcName: q.npcName });
		}
	}
	console.log(`  reverse indexes: ${mobToMaps.size} mobs->maps, ${npcToMaps.size} npcs->maps, ${questToMaps.size} quests->maps`);

	// Extend map dossiers with worldMapRefs - answers 'which world
	// map(s) point at this map?' Usually 0 or 1 world map;
	// occasionally 2 (a training map that's referenced from both
	// its town pin AND a "regional overview" world map).
	for (const map of mapDossiers) {
		map.worldMapRefs = dossierIdToWorldMap.get(map.id) ?? [];
	}

	// Extend mob dossiers with mapsSpawnedOn - answers 'where does
	// Blue Snail spawn?' Sorted by spawn density desc so the biggest
	// spawn location leads.
	for (const mob of mobDossiers) {
		const spawns = mobToMaps.get(mob.id) ?? [];
		mob.mapsSpawnedOn = spawns.sort((a, b) => (b.count ?? 0) - (a.count ?? 0));
	}

	// Extend map dossiers with mobLevelRange - answers 'what level
	// bracket is this map good for training?' Computed by looking up
	// the level of each mob that spawns here (via mob.stats.level,
	// available on the ~157 mobs with WZ-resolved stats). Maps with
	// no leveled mobs get null (no data to show), which the UI
	// treats as "no training info" gracefully. Cheap: O(maps * avg
	// mobs per map) with an O(1) mob-level lookup.
	const mobIdToLevel = new Map(
		mobDossiers
			.filter((m) => m.stats?.level != null)
			.map((m) => [m.id, m.stats.level]),
	);
	console.log(`  mob level lookup: ${mobIdToLevel.size} mobs have level data`);
	let mapsWithRange = 0;
	for (const map of mapDossiers) {
		const levels = (map.mobs ?? [])
			.map((mob) => mobIdToLevel.get(mob.id))
			.filter((lv) => lv != null);
		map.mobLevelRange = levels.length > 0
			? { min: Math.min(...levels), max: Math.max(...levels) }
			: null;
		if (map.mobLevelRange) mapsWithRange++;
	}
	console.log(`  map level ranges: ${mapsWithRange}/${mapDossiers.length} maps have level bracket data`);

	// Build NPC dossiers. lookups.npc_names has 266 NPCs;
	// cross-ref with which maps they inhabit + which quests they give.
	// Pre-group quests by giver npc_name (lowercased) for O(1) lookup
	// instead of scanning all quests once per NPC (266 * 736 = 195K ops).
	const questsByGiver = new Map();
	for (const q of quests.quests ?? []) {
		if (!q.npc_name) continue;
		const k = q.npc_name.toLowerCase();
		if (!questsByGiver.has(k)) questsByGiver.set(k, []);
		questsByGiver.get(k).push(q);
	}
	const npcSeed = Object.entries(lookups.npc_names ?? {}).map(([idStr, name]) => ({
		id: Number(idStr),
		name,
	}));
	const npcWzMap = await resolveNpcWzIds(npcSeed);
	const npcDossiers = npcSeed.map(({ id, name }) => {
		const given = (questsByGiver.get(name.toLowerCase()) ?? [])
			.map((q) => ({
				questId: q.id,
				questName: q.name,
				level: q.level_min ?? null,
				region: q.region ?? null,
			}))
			.sort((a, b) => (a.level ?? 0) - (b.level ?? 0));
		return {
			id,
			name,
			// maplestory.io WZ ID for sprite rendering. null when the NPC
			// couldn't be resolved (crafting stations, post-v83 additions).
			wzId: npcWzMap[id] ?? null,
			mapsInhabited: npcToMaps.get(id) ?? [],
			questsGiven: given,
		};
	});
	console.log(`  built ${npcDossiers.length} npc dossiers`);

	// Sort for stable output
	itemDossiers.sort((a, b) => a.id - b.id);
	mobDossiers.sort((a, b) => a.id - b.id);
	mapDossiers.sort((a, b) => a.id - b.id);
	npcDossiers.sort((a, b) => a.id - b.id);

	// Light index for client-side search. Includes just enough to power
	// the filterable table (name/category/level/job/sources).
	const index = {
		items: itemDossiers.map((d) => ({
			id: d.id,
			name: d.name,
			category: d.category,
			sub: d.subCategory,
			// weapon_type surfaced separately so the catalog UI can
			// offer a weapon-type sub-filter (1H Sword / Bow / Wand /
			// etc) when a class is active.
			weaponType: d.weaponType,
			reqLevel: d.stats?.reqLevel ?? null,
			reqJob: d.reqJobLabel,
			price: d.npcSellPrice,
			hasEditorial: d.editorialSlug !== null,
			editorialSlug: d.editorialSlug,
			// acquisitionCount includes quest rewards, craftable recipes,
			// AND mob drops - a reader can immediately tell 'this item has
			// 3 ways to obtain it' vs 'this item has zero known sources'.
			acquisitionCount:
				d.givenByQuests.length + d.craftableFrom.length + (d.droppedBy?.length ?? 0),
			dropCount: d.droppedBy?.length ?? 0,
		})),
		mobs: mobDossiers.map((d) => ({
			id: d.id,
			name: d.name,
			wzId: d.wzId,
			// Denormalize the three fields readers most likely filter/sort by
			// (level, HP, EXP) into the index so /mobs directory doesn't need
			// to load the 2MB dossier bundle just to render a table row.
			level: d.stats?.level ?? null,
			maxHP: d.stats?.maxHP ?? null,
			exp: d.stats?.exp ?? null,
			questCount: d.requiredByQuests.length,
			dropCount: d.drops?.length ?? 0,
		})),
		// Six junk WZ records in the 80003xxx range have wzId=0 AND
		// empty name - almost certainly reserved slots for unshipped
		// event maps. Filter them out of the catalog so they don't
		// clutter the grid with unnamed cards.
		maps: mapDossiers.filter((d) => d.name && d.name.trim() !== "").map((d) => ({
			id: d.id,
			wzId: d.wzId,  // maplestory.io lookup key - required for minimap URLs
			name: d.name,
			region: d.region,
			streetName: d.streetName,
			kind: d.kind,
			mobCount: d.mobs.length,
			npcCount: d.npcs.length,
			questCount: d.questsHere.length,
			hasMinimap: d.minimap !== null && !!d.wzId,
			// Denormalized level range so the /maps directory can
			// render a "Lv" column without hydrating full dossiers.
			levelMin: d.mobLevelRange?.min ?? null,
			levelMax: d.mobLevelRange?.max ?? null,
		})),
		npcs: npcDossiers.map((d) => ({
			id: d.id,
			name: d.name,
			wzId: d.wzId,
			mapCount: d.mapsInhabited.length,
			questCount: d.questsGiven.length,
		})),
	};

	// Quest cross-refs live in a separate file so the QuestLayout
	// (which renders from content collections, not dossiers) can
	// look them up by ID without pulling the whole dossier bundle.
	const questRefs = {};
	for (const [qId, refs] of questToMaps.entries()) {
		questRefs[qId] = { maps: refs };
	}

	// Build quest dossiers - one per datamine quest, mirroring the
	// items/mobs/maps/npcs pattern. Enables /quests/{id} auto-generated
	// pages for all 322 quests. Editorial .md quest pages (90 of
	// them) continue to live at their kebab-case slugs; the dossier
	// page cross-links to the editorial slug when we spot a matching
	// quest ID in a content-collection frontmatter (that check happens
	// at page-render time, not here).
	const npcByName = new Map(npcDossiers.map((n) => [n.name.toLowerCase(), n]));
	const questDossiers = (quests.quests ?? []).map((q) => {
		const giverNpc = q.npc_name ? npcByName.get(q.npc_name.toLowerCase()) : null;
		return {
			id: String(q.id),                          // string to match content-collection format
			name: q.name,
			area: q.area ?? null,
			region: q.region ?? null,
			description: q.description ?? null,
			npcName: q.npc_name ?? null,
			npcId: giverNpc?.id ?? null,
			npcWzId: giverNpc?.wzId ?? null,
			levelMin: q.level_min ?? null,
			rewards: q.rewards ?? [],
			parent: q.parent ?? null,
			nextQuestId: q.next_quest ?? null,
			nextQuestName: q.next_quest_name ?? null,
			chainLength: q.chain_length ?? null,
			chainLevelMin: q.chain_level_min ?? null,
			startingMaps: questRefs[String(q.id)]?.maps ?? [],
		};
	});
	questDossiers.sort((a, b) => Number(a.id) - Number(b.id));
	console.log(`  built ${questDossiers.length} quest dossiers`);

	// Write output
	if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

	await writeFile(join(OUT_DIR, "items.json"), JSON.stringify(itemDossiers));
	await writeFile(join(OUT_DIR, "mobs.json"), JSON.stringify(mobDossiers));
	await writeFile(join(OUT_DIR, "maps.json"), JSON.stringify(mapDossiers));
	await writeFile(join(OUT_DIR, "npcs.json"), JSON.stringify(npcDossiers));
	await writeFile(join(OUT_DIR, "quest-refs.json"), JSON.stringify(questRefs));
	await writeFile(join(OUT_DIR, "quests.json"), JSON.stringify(questDossiers));
	await writeFile(join(OUT_DIR, "index.json"), JSON.stringify(index));
	await writeFile(
		join(OUT_DIR, "generated-at.json"),
		JSON.stringify({
			timestamp: new Date().toISOString(),
			itemCount: itemDossiers.length,
			mobCount: mobDossiers.length,
			mapCount: mapDossiers.length,
			npcCount: npcDossiers.length,
			questCount: questDossiers.length,
			// Powers the "Reference database" homepage tiles - lets
			// them show live counts without importing full dossier
			// bundles just to call .length on them.
			source: BASE,
		}, null, 2),
	);

	console.log(`\nwrote ${OUT_DIR}/`);
	console.log(`  items.json      ${itemDossiers.length} dossiers`);
	console.log(`  mobs.json       ${mobDossiers.length} dossiers`);
	console.log(`  index.json      compact search index`);
	console.log(`  generated-at.json`);
	console.log("\ndone.");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
