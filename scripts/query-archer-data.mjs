// query-archer-data.mjs — pre-mine datamine for the Archer deep-dive
// (Hunter + Crossbowman combined). Pulls:
//   - Bow progression L10-70 (reqLevel, ATK, speed, source)
//   - Crossbow progression L10-70
//   - Arrows (physical ammo) + arrow-for-crossbow lists
//   - Bowman-flagged armor L10-70 by slot
//   - Boss drops relevant to Archer progression

import fs from "node:fs";

const items = JSON.parse(fs.readFileSync("src/data/db/items.json", "utf8"));
const mobs = JSON.parse(fs.readFileSync("src/data/db/mobs.json", "utf8"));

function speedLabel(s) {
	if (s == null) return "?";
	if (s <= 3) return "Faster";
	if (s <= 5) return "Fast";
	if (s === 6) return "Normal";
	if (s === 7) return "Slow";
	return "Slower";
}

function dropSource(item) {
	const by = item.droppedBy || [];
	if (by.length === 0) return "NPC / shop";
	const mob = mobs.find((m) => m.id === by[0].mobId);
	return mob ? `drop: ${mob.name} (Lv ${mob.stats?.level ?? "?"})` : "drop";
}

const WEAPON_CATEGORIES = {
	"Bow": 145,
	"Crossbow": 146,
};

function listArcherWeapons(prefix) {
	return items
		.filter(
			(i) =>
				i.subCategory === "Weapon" &&
				i.reqJobLabel === "Bowman" &&
				i.stats?.reqLevel >= 10 &&
				i.stats?.reqLevel <= 70 &&
				Math.floor(i.id / 10000) === prefix,
		)
		.sort((a, b) => a.stats.reqLevel - b.stats.reqLevel);
}

for (const [label, prefix] of Object.entries(WEAPON_CATEGORIES)) {
	console.log(`\n## ${label} (prefix ${prefix})\n`);
	const list = listArcherWeapons(prefix);
	if (list.length === 0) {
		console.log("_(no Bowman-flagged entries in prefix range)_\n");
		continue;
	}
	console.log("| Lv | Name | ATK | Speed | Source |");
	console.log("| --- | --- | --- | --- | --- |");
	for (const w of list) {
		const atk = w.stats?.incPAD ?? "?";
		const spd = speedLabel(w.stats?.attackSpeed);
		console.log(
			`| ${w.stats?.reqLevel} | [${w.name}](/items/${w.id}) | ${atk} | ${spd} | ${dropSource(w)} |`,
		);
	}
}

// Arrows (bow + crossbow ammo)
console.log(`\n## Arrows for Bows (prefix 2060)\n`);
const bowArrows = items
	.filter((i) => i.id >= 2060000 && i.id <= 2060999)
	.sort((a, b) => a.id - b.id);
console.log("| Name | ATK bonus | Where |");
console.log("| --- | --- | --- |");
for (const a of bowArrows) {
	const atk = a.stats?.incPAD ?? 0;
	console.log(`| [${a.name}](/items/${a.id}) | +${atk} | ${dropSource(a)} |`);
}

console.log(`\n## Arrows for Crossbows (prefix 2061)\n`);
const xbowArrows = items
	.filter((i) => i.id >= 2061000 && i.id <= 2061999)
	.sort((a, b) => a.id - b.id);
console.log("| Name | ATK bonus | Where |");
console.log("| --- | --- | --- |");
for (const a of xbowArrows) {
	const atk = a.stats?.incPAD ?? 0;
	console.log(`| [${a.name}](/items/${a.id}) | +${atk} | ${dropSource(a)} |`);
}

// Bowman armor by slot L10-70
console.log(`\n## Bowman armor by slot L10-70 (optimized for DEX+DEF)\n`);
const BOWMAN_SLOTS = ["Hat", "Top", "Bottom", "Overall", "Shoes", "Glove", "Cape"];
for (const slot of BOWMAN_SLOTS) {
	console.log(`\n### ${slot}\n`);
	const picks = items
		.filter(
			(i) =>
				i.category === "Equipment" &&
				i.subCategory === slot &&
				i.stats?.reqLevel >= 10 &&
				i.stats?.reqLevel <= 70 &&
				(i.reqJobLabel === "Bowman" || i.reqJobLabel == null),
		)
		.filter((i) => (i.stats?.incDEX ?? 0) + (i.stats?.incPDD ?? 0) > 0)
		.sort((a, b) => {
			if (a.stats.reqLevel !== b.stats.reqLevel) return a.stats.reqLevel - b.stats.reqLevel;
			const scoreA = (a.stats.incDEX ?? 0) * 3 + (a.stats.incPDD ?? 0);
			const scoreB = (b.stats.incDEX ?? 0) * 3 + (b.stats.incPDD ?? 0);
			return scoreB - scoreA;
		});

	const buckets = new Map();
	for (const p of picks) {
		const bucket = Math.floor(p.stats.reqLevel / 5) * 5;
		if (!buckets.has(bucket)) buckets.set(bucket, p);
	}
	console.log("| Lv | Pick | DEX | DEF | Slots | Source |");
	console.log("| --- | --- | --- | --- | --- | --- |");
	for (const bucket of [...buckets.keys()].sort((a, b) => a - b)) {
		const p = buckets.get(bucket);
		const def = p.stats.incPDD ?? "?";
		const dex = p.stats.incDEX ?? 0;
		const slots = p.stats.tuc ?? "?";
		console.log(
			`| L${bucket} | [${p.name}](/items/${p.id}) L${p.stats.reqLevel} | +${dex} | ${def} | ${slots} | ${dropSource(p)} |`,
		);
	}
}
