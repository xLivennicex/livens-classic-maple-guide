// query-mage-data.mjs — pre-mine datamine for both Cleric and Wizard
// deep-dive guides. Pulls:
//   - Wand progression L10-70 (reqLevel, MAD, speed, source)
//   - Staff progression L10-70
//   - Magician-flagged armor L10-70 by slot (optimized for INT)
//   - Shields (Wizard+Cleric usable mage shields)

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

function listMageWeapons(prefix) {
	// Magician weapons are reqJobLabel="All" but gated by reqINT.
	// Filter on item-id prefix (137xxxx wand, 138xxxx staff) + incMAD > 0.
	return items
		.filter(
			(i) =>
				i.subCategory === "Weapon" &&
				(i.stats?.incMAD ?? 0) > 0 &&
				i.stats?.reqLevel >= 10 &&
				i.stats?.reqLevel <= 70 &&
				Math.floor(i.id / 10000) === prefix,
		)
		.sort((a, b) => a.stats.reqLevel - b.stats.reqLevel);
}

for (const [label, prefix] of Object.entries({ Wand: 137, Staff: 138 })) {
	console.log(`\n## ${label} (prefix ${prefix})\n`);
	const list = listMageWeapons(prefix);
	if (list.length === 0) {
		console.log("_(no Magician-flagged entries in prefix range)_\n");
		continue;
	}
	console.log("| Lv | Name | MAD | ATK | INT | LUK | Speed | Source |");
	console.log("| --- | --- | --- | --- | --- | --- | --- | --- |");
	for (const w of list) {
		const mad = w.stats?.incMAD ?? "?";
		const atk = w.stats?.incPAD ?? 0;
		const inc = w.stats?.incINT ?? 0;
		const luk = w.stats?.incLUK ?? 0;
		const spd = speedLabel(w.stats?.attackSpeed);
		console.log(
			`| ${w.stats.reqLevel} | [${w.name}](/items/${w.id}) | ${mad} | ${atk} | +${inc} | +${luk} | ${spd} | ${dropSource(w)} |`,
		);
	}
}

// Magician armor by slot L10-70
console.log(`\n## Magician armor by slot L10-70 (optimized for INT+MDEF)\n`);
const MAGE_SLOTS = ["Hat", "Top", "Bottom", "Overall", "Shoes", "Glove", "Cape"];
for (const slot of MAGE_SLOTS) {
	console.log(`\n### ${slot}\n`);
	const picks = items
		.filter(
			(i) =>
				i.category === "Equipment" &&
				i.subCategory === slot &&
				i.stats?.reqLevel >= 10 &&
				i.stats?.reqLevel <= 70 &&
				(i.reqJobLabel === "Mage" || i.reqJobLabel === "All" || i.reqJobLabel == null),
		)
		.filter((i) => (i.stats?.incINT ?? 0) > 0 || (i.stats?.incLUK ?? 0) > 0)
		.sort((a, b) => {
			if (a.stats.reqLevel !== b.stats.reqLevel) return a.stats.reqLevel - b.stats.reqLevel;
			const scoreA = (a.stats.incINT ?? 0) * 3 + (a.stats.incMDD ?? 0);
			const scoreB = (b.stats.incINT ?? 0) * 3 + (b.stats.incMDD ?? 0);
			return scoreB - scoreA;
		});

	const buckets = new Map();
	for (const p of picks) {
		const bucket = Math.floor(p.stats.reqLevel / 5) * 5;
		if (!buckets.has(bucket)) buckets.set(bucket, p);
	}
	console.log("| Lv | Pick | INT | MDEF | Slots | Source |");
	console.log("| --- | --- | --- | --- | --- | --- |");
	for (const bucket of [...buckets.keys()].sort((a, b) => a - b)) {
		const p = buckets.get(bucket);
		const mdef = p.stats.incMDD ?? "?";
		const int = p.stats.incINT ?? 0;
		const slots = p.stats.tuc ?? "?";
		console.log(
			`| L${bucket} | [${p.name}](/items/${p.id}) L${p.stats.reqLevel} | +${int} | ${mdef} | ${slots} | ${dropSource(p)} |`,
		);
	}
}
