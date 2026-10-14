// audit-db-health.mjs — report on DB consistency gaps that could
// hide content from the catalog/discovery UIs.
//
// Checks:
//   1. Maps with empty/missing name
//   2. Maps classified as training but with 0 mob positions (likely wrong kind)
//   3. Mobs referenced by map.mobs that don't exist in mobs.json
//   4. Items referenced by mob.drops that don't exist in items.json
//   5. Maps with region=Other that look like they belong to Victoria/Ossyria
//   6. Mob dossier spawn maps that reference map IDs not in maps.json

import fs from "node:fs";

const maps = JSON.parse(fs.readFileSync("src/data/db/maps.json"));
const mobs = JSON.parse(fs.readFileSync("src/data/db/mobs.json"));
const items = JSON.parse(fs.readFileSync("src/data/db/items.json"));
const index = JSON.parse(fs.readFileSync("src/data/db/index.json"));

const mapIds = new Set(maps.map((m) => m.id));
const mobIds = new Set(mobs.map((m) => m.id));
const itemIds = new Set(items.map((i) => i.id));
const idxMapIds = new Set(index.maps.map((m) => m.id));

console.log("# DB health audit\n");

// 1. Empty-named maps
const emptyName = maps.filter((m) => !m.name || m.name.trim() === "");
console.log(`## 1. Maps with empty/missing name: ${emptyName.length}`);
for (const m of emptyName) {
	const bossMob = m.mobs?.find((mob) => {
		const full = mobs.find((x) => x.id === mob.id);
		return full?.stats?.isBoss === true;
	});
	const label = bossMob
		? `likely "${bossMob.name}" lair`
		: m.mobs?.length
			? `generic (mobs: ${m.mobs.map((x) => x.name).join(", ")})`
			: "no mobs";
	console.log(`  - id=${m.id}  mapMark=${m.mapMark || "?"}  region=${m.region}  kind=${m.kind}  mobPositions=${m.mobPositionCount}  (${label})`);
}
console.log();

// 2. training-kind maps with zero mob positions
const emptyTraining = maps.filter(
	(m) => m.kind === "training" && m.mobPositionCount === 0 && m.name && m.name.trim() !== "",
);
console.log(`## 2. "training" maps with 0 mob positions: ${emptyTraining.length}`);
for (const m of emptyTraining.slice(0, 10)) {
	console.log(`  - id=${m.id}  name=${m.name}  region=${m.region}`);
}
if (emptyTraining.length > 10) console.log(`  ... and ${emptyTraining.length - 10} more`);
console.log();

// 3. Orphan mob references in map.mobs
const orphanMapMobRefs = [];
for (const m of maps) {
	for (const mob of m.mobs || []) {
		if (!mobIds.has(mob.id)) orphanMapMobRefs.push({ mapId: m.id, mobId: mob.id, mobName: mob.name });
	}
}
console.log(`## 3. map.mobs referencing missing mobIds: ${orphanMapMobRefs.length}`);
for (const o of orphanMapMobRefs.slice(0, 10)) {
	console.log(`  - map ${o.mapId} refs missing mob ${o.mobId} (${o.mobName})`);
}
if (orphanMapMobRefs.length > 10) console.log(`  ... and ${orphanMapMobRefs.length - 10} more`);
console.log();

// 4. Orphan item references in mob.drops
// NOTE: drop entries use { itemId, itemName } keys, NOT { id, name }.
// Earlier version of this script read drop.id and drop.name, which was
// always undefined - producing a false-positive count of 0 orphans.
const orphanDrops = [];
for (const mob of mobs) {
	for (const drop of mob.drops || []) {
		if (!itemIds.has(drop.itemId)) {
			orphanDrops.push({
				mobId: mob.id,
				itemId: drop.itemId,
				name: drop.itemName,
			});
		}
	}
}
console.log(`## 4. mob.drops referencing missing itemIds: ${orphanDrops.length}`);
for (const o of orphanDrops.slice(0, 10)) {
	console.log(`  - mob ${o.mobId} drops missing item ${o.itemId} (${o.name})`);
}
console.log();

// 5. Maps with region=Other but mapMark matches a Victoria/Ossyria subzone
const otherWithHints = maps.filter(
	(m) =>
		m.region === "Other" &&
		m.mapMark &&
		["ForgottenHollow", "Perion", "Ellinia", "Henesys", "Kerning", "Sleepywood", "Victoria"].includes(m.mapMark),
);
console.log(`## 5. region=Other maps with Victoria-adjacent mapMark hints: ${otherWithHints.length}`);
for (const m of otherWithHints) {
	console.log(`  - id=${m.id}  name="${m.name || "<empty>"}"  mapMark=${m.mapMark}  mobs=${m.mobs?.length || 0}`);
}
console.log();

// 6. Mob.mapsSpawnedOn referencing missing maps
const orphanSpawns = [];
for (const mob of mobs) {
	for (const spawn of mob.mapsSpawnedOn || []) {
		if (!mapIds.has(spawn.mapId)) orphanSpawns.push({ mobId: mob.id, mobName: mob.name, mapId: spawn.mapId });
	}
}
console.log(`## 6. mob.mapsSpawnedOn referencing missing mapIds: ${orphanSpawns.length}`);
for (const o of orphanSpawns.slice(0, 10)) {
	console.log(`  - mob ${o.mobId} (${o.mobName}) spawns on missing map ${o.mapId}`);
}
console.log();

// Summary
console.log("## Summary");
console.log(`  maps:            ${maps.length} full · ${index.maps.length} indexed · delta ${maps.length - index.maps.length}`);
console.log(`  mobs:            ${mobs.length}`);
console.log(`  items:           ${items.length}`);
console.log(`  empty-name maps: ${emptyName.length}`);
console.log(`  empty-training:  ${emptyTraining.length}`);
console.log(`  orphan refs:     ${orphanMapMobRefs.length + orphanDrops.length + orphanSpawns.length} total`);
