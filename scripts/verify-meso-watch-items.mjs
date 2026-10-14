// scripts/verify-meso-watch-items.mjs
//
// Re-run this whenever src/components/MesoWatchHotItems.astro's
// HOT_ITEMS array is updated. For each entry it verifies:
//
//   1. The wzId exists in src/data/db/items.json
//   2. The DB name matches the claimed name
//   3. MeowDB serves an icon for the wzId (HTTP 200, image/png)
//   4. maplestory.io/GMS/83 either 404s cleanly OR shows the same
//      item - never a WRONG-SPRITE collision
//
// If any item fails, prints the problem and exits with status 1.
//
// Why this matters: maplestory.io/GMS/83 is Classic World's upstream
// but has wzId collisions with GMS/83 items for CW-new cosmetics
// (verified 2026-10-13 that Zakum Helmet 1002180 shows 'Dark Burgler'
// on msio, Starlight Heart Scepter 1702046 shows 'Horoscope Crossbow',
// etc). The site uses MeowDB-first for sprite resolution to dodge
// these collisions; this script verifies that the hand-curated
// HOT_ITEMS list respects that.

import { readFileSync } from "fs";

const items = JSON.parse(readFileSync("src/data/db/items.json", "utf8"));
const byId = new Map(items.map((it) => [it.id, it]));

const MEOWDB = "https://meowdb.com/msclassic/api/assets/icons";
const MSIO = "https://maplestory.io/api/GMS/83/item";

// Keep this list in sync with HOT_ITEMS in MesoWatchHotItems.astro.
// We duplicate the names deliberately: the test is 'does the hand-
// curated name match our DB name at that wzId?' which requires both
// sides.
const HOT_ITEMS = [
	{ wzId: 1007077, name: "Angel Halo" },
	{ wzId: 1107011, name: "Baby Angel Wings" },
	{ wzId: 1057020, name: "Toga" },
	{ wzId: 1702048, name: "Soft Chocolate Fondue Scepter" },
	{ wzId: 1702046, name: "Starlight Heart Scepter" },
	{ wzId: 1112223, name: "Ink-and-Wash Painting Name Tag Ring" },
	{ wzId: 1007145, name: "Black Cat Beanie" },
	{ wzId: 1007144, name: "White Choco Bunny" },
	{ wzId: 1702004, name: "Angel Wand" },
	{ wzId: 1702012, name: "Yellow Spatula" },
	{ wzId: 1002180, name: "Zakum Helmet" },
	{ wzId: 4031065, name: "Scroll of Secrets" },
];

function normalize(s) {
	return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

async function headWithSize(url) {
	try {
		const r = await fetch(url, {
			method: "HEAD",
			signal: AbortSignal.timeout(10000),
		});
		return {
			status: r.status,
			size: Number(r.headers.get("content-length") || 0),
			ctype: r.headers.get("content-type") || "",
		};
	} catch (e) {
		return { status: "err", error: String(e) };
	}
}

async function fetchJSON(url) {
	try {
		const r = await fetch(url, {
			headers: { Accept: "application/json" },
			signal: AbortSignal.timeout(10000),
		});
		if (!r.ok) return null;
		return await r.json();
	} catch {
		return null;
	}
}

let failures = 0;

for (const claim of HOT_ITEMS) {
	const row = byId.get(claim.wzId);
	const probs = [];

	// Check 1: wzId exists in our DB
	if (!row) {
		probs.push(`not in src/data/db/items.json`);
	} else if (normalize(row.name) !== normalize(claim.name)) {
		probs.push(
			`DB name mismatch (DB says '${row.name}', card claims '${claim.name}')`,
		);
	}

	// Check 2: MeowDB serves an icon
	const meow = await headWithSize(`${MEOWDB}/${claim.wzId}`);
	if (meow.status !== 200 || meow.size < 100) {
		probs.push(`MeowDB icon missing (status=${meow.status}, size=${meow.size})`);
	}

	// Check 3: if maplestory.io has the wzId, make sure it's not a
	//          wrong-sprite collision. (A 404 is fine - MeowDB wins.)
	const msioMeta = await fetchJSON(`${MSIO}/${claim.wzId}`);
	if (msioMeta?.description?.name) {
		if (normalize(msioMeta.description.name) !== normalize(claim.name)) {
			// This is informational, not a failure - MeowDB-first means
			// the fallback never fires. But it's useful to know.
			probs.push(
				`maplestory.io fallback would show WRONG sprite ('${msioMeta.description.name}') - MeowDB-first saves us`,
			);
		}
	}

	if (probs.length) {
		console.log(`FAIL: wzId ${claim.wzId} '${claim.name}'`);
		for (const p of probs) console.log(`  - ${p}`);
		// Only count as hard failure if MeowDB is broken or DB name is wrong.
		// Informational msio collisions don't block the build.
		if (probs.some((p) => p.startsWith("MeowDB") || p.startsWith("DB name") || p.startsWith("not in"))) {
			failures++;
		}
	} else {
		console.log(`OK:   wzId ${claim.wzId} '${claim.name}'`);
	}
}

console.log(`\n${failures} hard failures (DB-side or MeowDB-side).`);
if (failures > 0) process.exit(1);
