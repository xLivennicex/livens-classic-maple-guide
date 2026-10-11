// query-meso-farming.mjs — identify the best meso-farming targets
// in the CoT 2 DB by level bracket. Scored by: estimated meso-per-kill
// (level * 1.5 base), density signal (via drop count), accessibility
// (region = Victoria/Sleepywood/Forgotten Hollow).
//
// Also surfaces high-value NPC-sellable drops that are easy to pick up
// during normal grinding (so the guide can tell players which Etc
// drops to NOT auto-sort out of inventory).

import fs from "node:fs";

const items = JSON.parse(fs.readFileSync("src/data/db/items.json", "utf8"));
const mobs = JSON.parse(fs.readFileSync("src/data/db/mobs.json", "utf8"));

const BRACKETS = [
	{ min: 30, max: 39, label: "L30-40" },
	{ min: 40, max: 49, label: "L40-50" },
	{ min: 50, max: 59, label: "L50-60" },
	{ min: 60, max: 69, label: "L60-70" },
	{ min: 70, max: 100, label: "L70+" },
];

function mesoPerKill(level) {
	// v83 convention: non-boss mobs drop mesos ~65% of kills,
	// average per-kill (when it drops) scales roughly with level
	// at level * 1.5 coefficient. Multiplied by drop rate for net.
	return Math.round(level * 1.5 * 0.65);
}

console.log("# Meso farming by bracket\n");

for (const br of BRACKETS) {
	console.log(`## ${br.label}\n`);
	const inBr = mobs
		.filter(
			(m) =>
				m.stats &&
				!m.stats.isBoss &&
				m.stats.exp > 0 &&
				m.stats.level >= br.min &&
				m.stats.level <= br.max,
		)
		.map((m) => ({
			...m,
			mesoEst: mesoPerKill(m.stats.level),
			dropCount: m.drops?.length || 0,
			mapsCount: m.mapsSpawnedOn?.length || 0,
		}))
		.sort((a, b) => {
			// Prefer high meso + known maps (grindable).
			const scoreA = a.mesoEst + a.mapsCount * 2 + a.dropCount;
			const scoreB = b.mesoEst + b.mapsCount * 2 + b.dropCount;
			return scoreB - scoreA;
		})
		.slice(0, 8);

	console.log("| Mob | Lv | Est. mesos/kill | Maps | Drop count |");
	console.log("| --- | --- | --- | --- | --- |");
	for (const m of inBr) {
		const mapsStr = m.mapsSpawnedOn?.slice(0, 2).map((mp) => mp.mapName).join(", ") || "no map data";
		console.log(
			`| [${m.name}](/mobs/${m.id}) | ${m.stats.level} | ~${m.mesoEst}m | ${mapsStr} | ${m.dropCount} |`,
		);
	}
	console.log();
}

// ---------- High NPC-sell etc drops ----------
console.log("\n# High NPC-sell Etc drops (keep, don't sort out)\n");

const npcSellableEtc = items
	.filter(
		(i) =>
			i.category === "Etc" &&
			i.npcSellPrice &&
			i.npcSellPrice >= 100 &&
			(i.droppedBy || []).length > 0,
	)
	.sort((a, b) => b.npcSellPrice - a.npcSellPrice)
	.slice(0, 25);

console.log("| Item | NPC sell | Dropped by (sample) |");
console.log("| --- | --- | --- |");
for (const it of npcSellableEtc) {
	const dropper = it.droppedBy[0];
	const dropName = dropper ? mobs.find((m) => m.id === dropper.mobId)?.name : "?";
	const dropLvl = dropper ? mobs.find((m) => m.id === dropper.mobId)?.stats?.level : "?";
	console.log(
		`| [${it.name}](/items/${it.id}) | ${it.npcSellPrice.toLocaleString()}m | ${dropName} (Lv ${dropLvl}) |`,
	);
}
console.log();

// ---------- Highest meso-potential maps ----------
console.log("\n# Highest meso-potential maps (density + level)\n");

const maps = JSON.parse(fs.readFileSync("src/data/db/maps.json", "utf8"));
const scoredMaps = maps
	.filter((m) => m.mobSpawns && m.mobSpawns.length > 0 && m.levelBracket?.max >= 30)
	.map((m) => {
		const totalSpawns = m.mobSpawns.reduce((s, sp) => s + (sp.count || 1), 0);
		const avgLvl =
			m.mobSpawns.reduce((s, sp) => s + (sp.level || 0) * (sp.count || 1), 0) /
			Math.max(totalSpawns, 1);
		return {
			id: m.id,
			name: m.name,
			region: m.region,
			kind: m.kind,
			spawns: totalSpawns,
			avgLvl: Math.round(avgLvl),
			mesoEst: Math.round(mesoPerKill(avgLvl) * totalSpawns * 0.5),
		};
	})
	.filter((m) => m.avgLvl >= 30)
	.sort((a, b) => b.mesoEst - a.mesoEst)
	.slice(0, 15);

console.log("| Map | Region | Avg Lv | Spawns | Est. mesos/full-clear |");
console.log("| --- | --- | --- | --- | --- |");
for (const m of scoredMaps) {
	console.log(
		`| [${m.name}](/maps/${m.id}) | ${m.region} | ${m.avgLvl} | ${m.spawns} | ~${m.mesoEst.toLocaleString()}m |`,
	);
}
