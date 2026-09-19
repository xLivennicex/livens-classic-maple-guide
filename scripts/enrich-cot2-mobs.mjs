#!/usr/bin/env node
/**
 * Enrich CoT2-original mob dossiers from MeowDB.
 *
 * The primary ingestion pipeline (build-database.mjs) resolves mob
 * WZ IDs against maplestory.io/api/GMS/83. Any mob added in the CoT2
 * client patch that maplestory.io hasn't ingested yet (Raffle,
 * Aqumander, Echopus, Rafflesia, Duskmander, Myewood, Sporewood,
 * Glowshroom, Golden Stirge, Rotten Mushroom variant 62, Rotten
 * Mushmom 700003) resolves to null and ships as a "stub" with no
 * stats or sprite.
 *
 * MeowDB (meowdb.com/msclassic) has been keeping up with the CoT2
 * test client and exposes:
 *   - full mob detail pages at /msclassic/monsters/{id} with
 *     schema.org JSON-LD blocks containing every stat we need
 *     (level, HP, MP, EXP, physical/magic damage & defense,
 *     accuracy, speed, knockback...)
 *   - sprite PNGs at /msclassic/monsters/sprites/mob_{id}.png
 *   - a meta description with a short flavor line per mob
 *
 * This script:
 *   1. Reads src/data/db/mobs.json
 *   2. Finds stub mobs (null wzId AND null stats)
 *   3. For each, fetches the meowdb detail page and downloads
 *      the sprite to public/images/mobs/cot2/mob_{id}.png
 *   4. Parses JSON-LD -> stats block matching the existing
 *      mob.stats shape
 *   5. Writes enriched entries back to mobs.json AND updates
 *      generated-at.json
 *
 * Safe to re-run: idempotent, only touches stub mobs. If MeowDB
 * ever adds a stub back to a resolved state (e.g. maplestory.io
 * catches up), delete src/data/db/mobs.json entries by hand and
 * re-run the main pipeline; this script only ENRICHES stubs,
 * never overwrites resolved mobs.
 *
 * Run: node scripts/enrich-cot2-mobs.mjs
 */

import { get } from "node:https";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";

const MOBS_PATH = "src/data/db/mobs.json";
const SPRITE_DIR = "public/images/mobs/cot2";
const MEOWDB_BASE = "https://meowdb.com/msclassic";

// ================================================================
// HTTP helpers - keep them tiny, no dependencies.
// ================================================================

function fetchText(url) {
	return new Promise((resolve, reject) => {
		get(url, (r) => {
			if (r.statusCode !== 200) {
				reject(new Error(`${r.statusCode} for ${url}`));
				return;
			}
			let d = "";
			r.on("data", (c) => (d += c));
			r.on("end", () => resolve(d));
			r.on("error", reject);
		}).on("error", reject);
	});
}

function fetchBuffer(url) {
	return new Promise((resolve, reject) => {
		get(url, (r) => {
			if (r.statusCode !== 200) {
				reject(new Error(`${r.statusCode} for ${url}`));
				return;
			}
			const chunks = [];
			r.on("data", (c) => chunks.push(c));
			r.on("end", () => resolve(Buffer.concat(chunks)));
			r.on("error", reject);
		}).on("error", reject);
	});
}

// ================================================================
// Parsers - both operate on the raw HTML we just fetched.
// ================================================================

/**
 * Extract structured stats from the schema.org JSON-LD block.
 * MeowDB embeds monster properties as an array of
 * `{"@type":"PropertyValue","name":"...","value":...}` entries.
 * Returns a Map<name, value>.
 */
function parseJsonLdStats(html) {
	const stats = new Map();
	// Find all JSON-LD script blocks and try parsing each. The
	// monster stats live in the "Product" or similar block; other
	// blocks (BreadcrumbList) are noise.
	const re =
		/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
	let m;
	while ((m = re.exec(html)) !== null) {
		try {
			const j = JSON.parse(m[1]);
			// The stats block has additionalProperty as an array
			// of PropertyValue entries.
			const props = j.additionalProperty ?? [];
			for (const p of props) {
				if (p?.["@type"] === "PropertyValue" && p.name) {
					stats.set(p.name, p.value);
				}
			}
		} catch {
			// non-JSON-LD or wrong block - skip.
		}
	}
	return stats;
}

/**
 * Grab flavor text from og:description / meta description.
 * Format is consistent: "A <adjective> creature exclusive to
 * MapleStory Classic. Level X, Y EXP per kill."
 */
function parseFlavor(html) {
	const m =
		html.match(/property="og:description"\s+content="([^"]+)"/i) ||
		html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
	return m ? m[1].trim() : null;
}

// ================================================================
// Map MeowDB's PropertyValue names to our mob.stats shape.
// ================================================================

function statsFromJsonLd(propMap) {
	// Coerce string numbers to actual numbers; MeowDB sometimes
	// emits values as strings, sometimes as ints.
	const num = (v) => {
		if (v == null) return null;
		if (typeof v === "number") return v;
		const parsed = Number(String(v).replace(/,/g, ""));
		return Number.isFinite(parsed) ? parsed : null;
	};

	return {
		level: num(propMap.get("Level")),
		maxHP: num(propMap.get("HP")),
		maxMP: num(propMap.get("MP")),
		exp: num(propMap.get("EXP")),
		physicalDamage: num(propMap.get("Physical Damage")),
		physicalDefense: num(propMap.get("Physical Defense")),
		magicDamage: num(propMap.get("Magic Damage")),
		magicDefense: num(propMap.get("Magic Defense")),
		accuracy: num(propMap.get("Accuracy")),
		evasion: num(propMap.get("Avoidability")) ?? num(propMap.get("Evasion")),
		speed: num(propMap.get("Speed")),
		isBodyAttack: null, // MeowDB doesn't expose this
		isUndead: null,
		isBoss: null,
	};
}

// ================================================================
// Main.
// ================================================================

async function main() {
	console.log("enrich-cot2-mobs.mjs - filling in stubs from MeowDB\n");
	const mobs = JSON.parse(await readFile(MOBS_PATH, "utf8"));
	if (!existsSync(SPRITE_DIR)) await mkdir(SPRITE_DIR, { recursive: true });

	// A mob is a "stub" if it has no wzId AND no level. These are
	// the CoT2-only mobs upstream doesn't know about yet.
	const stubs = mobs.filter(
		(m) => !m.wzId && (!m.stats || m.stats.level == null),
	);
	console.log(`found ${stubs.length} stub mobs to enrich:`);
	for (const s of stubs) console.log(`  id=${s.id} ${s.name}`);
	console.log("");

	let enriched = 0;
	let spritesDownloaded = 0;
	for (const mob of stubs) {
		try {
			const url = `${MEOWDB_BASE}/monsters/${mob.id}`;
			const html = await fetchText(url);
			const propMap = parseJsonLdStats(html);
			const flavor = parseFlavor(html);

			if (propMap.size === 0) {
				console.log(`  x id=${mob.id} ${mob.name} - no JSON-LD stats`);
				continue;
			}

			mob.stats = statsFromJsonLd(propMap);
			// Preserve flavor text for the mob detail page. New
			// field on the dossier - existing mobs simply don't
			// have it (undefined), which is fine.
			if (flavor) mob.flavor = flavor;
			// Mark data provenance so the UI can show a "data
			// from meowdb" attribution instead of "verified via
			// maplestory.io".
			mob.dataSource = "meowdb";

			// Download sprite. Save locally so we don't hotlink
			// meowdb and we get Cloudflare Pages CDN caching.
			const spriteUrl = `${MEOWDB_BASE}/monsters/sprites/mob_${mob.id}.png`;
			const spritePath = join(SPRITE_DIR, `mob_${mob.id}.png`);
			try {
				const buf = await fetchBuffer(spriteUrl);
				await writeFile(spritePath, buf);
				mob.spriteLocal = `/images/mobs/cot2/mob_${mob.id}.png`;
				spritesDownloaded++;
			} catch (e) {
				console.log(
					`  ! id=${mob.id} ${mob.name} - sprite fetch failed: ${e.message}`,
				);
			}

			enriched++;
			console.log(
				`  ok id=${mob.id.toString().padEnd(7)} Lv${mob.stats.level
					?.toString()
					.padEnd(3)} HP${mob.stats.maxHP
					?.toString()
					.padEnd(6)} EXP${mob.stats.exp?.toString().padEnd(4)} ${mob.name}`,
			);
		} catch (e) {
			console.log(`  x id=${mob.id} ${mob.name} - ${e.message}`);
		}
	}

	console.log(
		`\nenriched ${enriched}/${stubs.length} mobs, downloaded ${spritesDownloaded} sprites`,
	);
	await writeFile(MOBS_PATH, JSON.stringify(mobs, null, 2));
	console.log(`wrote ${MOBS_PATH}`);
}

await main();
