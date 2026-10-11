// query-gear-per-class.mjs — per-job armor picks + boss drops for
// gearing-30-plus guide. Scoped output: armor BiS per (job, slot,
// bracket) + boss-drop gear so the guide has real sources.
//
// Why a second script: query-gear-30-plus.mjs picks GLOBAL best-DEF
// which skews warrior for every slot. This one picks per-JOB best
// so Mage/Bowman/Thief get their actual class picks.

import fs from "node:fs";

const items = JSON.parse(fs.readFileSync("src/data/db/items.json", "utf8"));
const mobs = JSON.parse(fs.readFileSync("src/data/db/mobs.json", "utf8"));
const mobsById = new Map(mobs.map((m) => [m.id, m]));

const JOBS = ["All", "Warrior", "Mage", "Bowman", "Thief"];
const SLOTS = ["Hat", "Top", "Bottom", "Overall", "Shoes", "Glove", "Cape"];
const BRACKETS = [
	{ min: 30, max: 39, label: "L30-40" },
	{ min: 40, max: 49, label: "L40-50" },
	{ min: 50, max: 59, label: "L50-60" },
	{ min: 60, max: 69, label: "L60-70" },
	{ min: 70, max: 100, label: "L70+" },
];

function stats(item) {
	const s = item.stats || {};
	return {
		atk: s.incPAD || 0,
		matk: s.incMAD || 0,
		str: s.incSTR || 0,
		dex: s.incDEX || 0,
		int: s.incINT || 0,
		luk: s.incLUK || 0,
		pdd: s.incPDD || 0,
		mdd: s.incMDD || 0,
		hp: s.incMHP || 0,
		mp: s.incMMP || 0,
		slots: s.tuc || 0,
	};
}

function obtainHints(item) {
	const hints = [];
	for (const d of item.droppedBy || []) {
		const m = mobsById.get(d.mobId);
		if (m) hints.push(`drop: ${m.name} (Lv ${m.stats?.level ?? "?"})`);
	}
	for (const q of item.givenByQuests || []) {
		hints.push(`quest: ${q.questName}`);
	}
	if (hints.length === 0 && item.npcSellPrice) {
		hints.push(`NPC (${item.npcSellPrice.toLocaleString()}m)`);
	}
	return hints.slice(0, 2).join("; ") || "unknown source";
}

// Prefer items with gear-up stat bonuses over pure DEF items.
// Scoring: (primary stat × 10) + (ATK/MATK × 15) + (DEF).
function statScore(item, primaryStat) {
	const s = stats(item);
	let primary = 0;
	if (primaryStat === "STR") primary = s.str;
	else if (primaryStat === "DEX") primary = s.dex;
	else if (primaryStat === "INT") primary = s.int;
	else if (primaryStat === "LUK") primary = s.luk;
	return primary * 10 + s.atk * 15 + s.matk * 15 + s.pdd + s.mdd;
}

const JOB_PRIMARY = {
	Warrior: "STR",
	Mage: "INT",
	Bowman: "DEX",
	Thief: "LUK",
	All: null,
};

console.log("# Per-job armor picks (L30-100)\n");

for (const job of JOBS) {
	console.log(`## ${job}\n`);
	const primary = JOB_PRIMARY[job];
	for (const slot of SLOTS) {
		console.log(`### ${slot}\n`);
		const pool = items.filter(
			(i) =>
				i.subCategory === slot &&
				i.stats?.reqLevel >= 30 &&
				i.stats?.reqLevel <= 100 &&
				(i.reqJobLabel === job || i.reqJobLabel === "All"),
		);
		if (pool.length === 0) {
			console.log("_(no items)_\n");
			continue;
		}
		console.log("| Bracket | Pick | Stats | Source |");
		console.log("| --- | --- | --- | --- |");
		for (const br of BRACKETS) {
			const inBr = pool.filter(
				(i) => i.stats.reqLevel >= br.min && i.stats.reqLevel <= br.max,
			);
			if (inBr.length === 0) {
				console.log(`| ${br.label} | — | — | — |`);
				continue;
			}
			const top = inBr
				.slice()
				.sort((a, b) => statScore(b, primary) - statScore(a, primary))[0];
			const s = stats(top);
			const bits = [];
			if (s.str) bits.push(`STR+${s.str}`);
			if (s.dex) bits.push(`DEX+${s.dex}`);
			if (s.int) bits.push(`INT+${s.int}`);
			if (s.luk) bits.push(`LUK+${s.luk}`);
			if (s.pdd) bits.push(`DEF+${s.pdd}`);
			if (s.atk) bits.push(`ATK+${s.atk}`);
			if (s.matk) bits.push(`MATK+${s.matk}`);
			if (s.slots) bits.push(`${s.slots}slot`);
			console.log(
				`| ${br.label} | [${top.name}](/items/${top.id}) L${top.stats.reqLevel} | ${bits.join(" ") || "DEF only"} | ${obtainHints(top)} |`,
			);
		}
		console.log();
	}
}

// ---------- Boss drop gear ----------
console.log("\n# Boss-dropped gear (FA roster bosses)\n");
const FA_BOSS_WZ = [9300184, 9300003, 5090000, 6400008, 6130101, 6300005];
for (const wzId of FA_BOSS_WZ) {
	const boss = mobs.find((m) => m.wzId === wzId && m.drops?.length > 0);
	if (!boss) {
		console.log(`\n## wzId=${wzId}: no drops in DB\n`);
		continue;
	}
	console.log(`\n## ${boss.name} (Lv ${boss.stats?.level}, ${boss.drops.length} drops)\n`);
	const equipDrops = boss.drops.filter((d) => {
		const it = items.find((i) => i.id === d.itemId);
		return it?.category === "Equipment";
	});
	if (equipDrops.length === 0) {
		console.log("_(no equipment drops)_\n");
		continue;
	}
	console.log("| Item | Lv | Slot | Rarity score |");
	console.log("| --- | --- | --- | --- |");
	for (const d of equipDrops) {
		const it = items.find((i) => i.id === d.itemId);
		console.log(
			`| [${it.name}](/items/${it.id}) | ${it.stats?.reqLevel || "?"} | ${it.subCategory} | ${d.score} |`,
		);
	}
}
