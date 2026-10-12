// query-fighter-data.mjs — pre-mine the datamine for the Fighter
// deep-dive guide. Pulls:
//   - 1H sword progression L10-70 (reqLevel, ATK, speed, source)
//   - 1H axe progression L10-70
//   - 2H sword progression L10-70
//   - 2H axe progression L10-70
//   - Shields that pair with 1H weapons
//   - Warrior-STR armor L10-70 (hat/overall/top/bottom/shoes/gloves/cape)
//   - Boss drops relevant to Fighter progression
//
// All data is datamine-only. Guide author adds editorial judgment
// (which pick wins, when to swap) on top.

import fs from "node:fs";

const items = JSON.parse(fs.readFileSync("src/data/db/items.json", "utf8"));
const mobs = JSON.parse(fs.readFileSync("src/data/db/mobs.json", "utf8"));

function isWarriorItem(i) {
	// reqJob is a bitmask or label depending on scrape, be defensive
	if (i.reqJobLabel) return i.reqJobLabel === "Warrior";
	return false;
}

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
	"1H Sword": 130,
	"1H Axe": 131,
	"2H Sword": 140,
	"2H Axe": 141,
	"2H Blunt Weapon": 142,
	"Spear": 143,
	"Polearm": 144,
};

function listWarriorWeapons(prefix) {
	return items
		.filter(
			(i) =>
				i.subCategory === "Weapon" &&
				i.reqJobLabel === "Warrior" &&
				i.stats?.reqLevel >= 10 &&
				i.stats?.reqLevel <= 70 &&
				Math.floor(i.id / 10000) === prefix,
		)
		.sort((a, b) => a.stats.reqLevel - b.stats.reqLevel);
}

for (const [label, prefix] of Object.entries(WEAPON_CATEGORIES)) {
	console.log(`\n## ${label} (prefix ${prefix})\n`);
	const list = listWarriorWeapons(prefix);
	if (list.length === 0) {
		console.log("_(no Warrior-flagged entries in prefix range)_\n");
		continue;
	}
	console.log("| Lv | Name | ATK | Speed | Source |");
	console.log("| --- | --- | --- | --- | --- |");
	for (const w of list) {
		const atk = w.stats?.incPAD ?? w.stats?.pAttackMax ?? w.stats?.watk ?? "?";
		const spd = speedLabel(w.stats?.attackSpeed);
		console.log(
			`| ${w.stats?.reqLevel} | [${w.name}](/items/${w.id}) | ${atk} | ${spd} | ${dropSource(w)} |`,
		);
	}
}

// Shields
console.log(`\n## Shields (Warrior-equippable)\n`);
const shields = items
	.filter(
		(i) =>
			i.subCategory === "Shield" &&
			(i.reqJobLabel === "Warrior" || i.reqJobLabel == null) &&
			i.stats?.reqLevel >= 10 &&
			i.stats?.reqLevel <= 70,
	)
	.sort((a, b) => a.stats.reqLevel - b.stats.reqLevel);
console.log("| Lv | Name | DEF | Source |");
console.log("| --- | --- | --- | --- |");
for (const s of shields) {
	const def = s.stats?.incPDD ?? s.stats?.pDefMax ?? s.stats?.pdd ?? "?";
	console.log(`| ${s.stats.reqLevel} | [${s.name}](/items/${s.id}) | ${def} | ${dropSource(s)} |`);
}

// Warrior armor
console.log(`\n## Warrior armor by slot L10-70 (optimized for STR+DEF)\n`);
const WARRIOR_SLOTS = ["Hat", "Top", "Bottom", "Overall", "Shoes", "Glove", "Cape"];
for (const slot of WARRIOR_SLOTS) {
	console.log(`\n### ${slot}\n`);
	const picks = items
		.filter(
			(i) =>
				i.category === "Equipment" &&
				i.subCategory === slot &&
				i.stats?.reqLevel >= 10 &&
				i.stats?.reqLevel <= 70 &&
				(i.reqJobLabel === "Warrior" || i.reqJobLabel == null),
		)
		.filter((i) => (i.stats?.incSTR ?? 0) + (i.stats?.incPDD ?? 0) > 0)
		.sort((a, b) => {
			if (a.stats.reqLevel !== b.stats.reqLevel) return a.stats.reqLevel - b.stats.reqLevel;
			const scoreA = (a.stats.incSTR ?? 0) * 3 + (a.stats.incPDD ?? 0);
			const scoreB = (b.stats.incSTR ?? 0) * 3 + (b.stats.incPDD ?? 0);
			return scoreB - scoreA;
		});

	// Pick top-STR item per level bucket (round down to nearest 5)
	const buckets = new Map();
	for (const p of picks) {
		const bucket = Math.floor(p.stats.reqLevel / 5) * 5;
		if (!buckets.has(bucket)) buckets.set(bucket, p);
	}
	console.log("| Lv | Pick | STR | DEF | Slots | Source |");
	console.log("| --- | --- | --- | --- | --- | --- |");
	for (const bucket of [...buckets.keys()].sort((a, b) => a - b)) {
		const p = buckets.get(bucket);
		const def = p.stats.incPDD ?? "?";
		const str = p.stats.incSTR ?? 0;
		const slots = p.stats.tuc ?? "?";
		console.log(
			`| L${bucket} | [${p.name}](/items/${p.id}) L${p.stats.reqLevel} | +${str} | ${def} | ${slots} | ${dropSource(p)} |`,
		);
	}
}
