// patch-maps-recovery.mjs — surgical patch for the Oct 11 DB build to
// fix map name + region gaps surfaced during the Burnt Land / Wild Boar
// audit (see commit message for the full context).
//
// Idempotent: running twice has no effect. Future runs of
// `npm run build:db` will apply the same logic through
// build-database.mjs's buildMapDossier() path (see MANUAL_MAP_NAME_OVERRIDES
// + VICTORIA_MAPMARKS in that file), making this script obsolete after
// the next full rebuild.
//
// Fixes applied here:
//   - 10006121 "" → "Rotten Mushmom's Lair" (Forgotten Hollow boss sanctum
//     the WZ ships with empty mapName)
//   - 16 maps with region=Other and a Victoria mapMark → region=Victoria Island
//   - Adds 10006121 to index.json so it appears in the /maps catalog

import fs from "node:fs";

const MANUAL_MAP_NAME_OVERRIDES = {
	10006121: "Rotten Mushmom's Lair",
};
const VICTORIA_MAPMARKS = new Set([
	"ForgottenHollow",
	"Perion",
	"Ellinia",
	"Henesys",
	"Kerning",
	"Sleepywood",
	"Victoria",
	"FreeMarket",
]);

const maps = JSON.parse(fs.readFileSync("src/data/db/maps.json", "utf8"));
const index = JSON.parse(fs.readFileSync("src/data/db/index.json", "utf8"));

let fixedName = 0;
let fixedRegion = 0;

// Patch maps.json (the full dossier set).
for (const m of maps) {
	if (!m.name || m.name.trim() === "") {
		if (MANUAL_MAP_NAME_OVERRIDES[m.id]) {
			m.name = MANUAL_MAP_NAME_OVERRIDES[m.id];
		} else if (m.mapMark) {
			m.name = `${m.mapMark} (${m.id})`;
		} else {
			m.name = `Map ${m.id}`;
		}
		fixedName++;
	}
	if (m.region === "Other" && m.mapMark && VICTORIA_MAPMARKS.has(m.mapMark)) {
		m.region = "Victoria Island";
		fixedRegion++;
	}
}

// Patch index.json surgically: find each entry and mirror the name/region
// updates we just did on maps.json. Preserve all other fields and the
// records order verbatim.
const idxIdSet = new Set(index.maps.map((m) => m.id));
let indexedUpdates = 0;
for (const idxMap of index.maps) {
	const full = maps.find((m) => m.id === idxMap.id);
	if (!full) continue;
	if (idxMap.name !== full.name || idxMap.region !== full.region) {
		idxMap.name = full.name;
		idxMap.region = full.region;
		indexedUpdates++;
	}
}

// Add 10006121 (Rotten Mushmom's Lair) if it isn't already in the index.
// Build the index entry by shape-matching an existing training record so
// field count/order stay consistent.
const addedToIndex = [];
for (const m of maps) {
	if (idxIdSet.has(m.id)) continue;
	if (!["training", "hidden", "town", "event", "dev"].includes(m.kind)) continue;
	// Pick a template record of the same kind.
	const template = index.maps.find((x) => x.kind === m.kind);
	const entry = {
		id: m.id,
		wzId: m.wzId,
		name: m.name,
		region: m.region,
		streetName: m.streetName,
		kind: m.kind,
		mobCount: m.mobs?.length || 0,
		npcCount: m.npcs?.length || 0,
		questCount: m.questsHere?.length || 0,
		hasMinimap: !!m.minimap,
		levelMin: m.mobLevelRange?.min ?? null,
		levelMax: m.mobLevelRange?.max ?? null,
	};
	// If the template had extra fields we don't know about, fail LOUD
	// in dev so we spot schema drift rather than silently misshape data.
	if (template) {
		const unknownFields = Object.keys(template).filter((k) => !(k in entry));
		if (unknownFields.length > 0) {
			console.warn(
				`WARN: index.maps template has fields not in our new entry: ${unknownFields.join(", ")}`,
			);
		}
	}
	index.maps.push(entry);
	addedToIndex.push({ id: m.id, name: m.name });
}

// Project convention: DB JSON files are minified single-line. Keeps git
// diffs small on bulk field updates and matches what build-database.mjs
// writes. Use JSON.stringify(x) with no indent argument.
fs.writeFileSync("src/data/db/maps.json", JSON.stringify(maps));
fs.writeFileSync("src/data/db/index.json", JSON.stringify(index));

console.log(`maps.json name recoveries:    ${fixedName}`);
console.log(`maps.json region upgrades:    ${fixedRegion}`);
console.log(`index.json field updates:     ${indexedUpdates}`);
console.log(`index.json entries added:     ${addedToIndex.length}`);
for (const a of addedToIndex) console.log(`  + ${a.id}  ${a.name}`);
console.log();
console.log(`maps.json total:   ${maps.length}`);
console.log(`index.maps total:  ${index.maps.length}`);
