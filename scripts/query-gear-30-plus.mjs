// query-gear-30-plus.mjs — generate reference tables for the
// `/content/guides/gearing-30-plus.md` guide, printed to stdout.
//
// Scope: enumerate the top gear picks (weapons + armor) per level
// bracket (30-40 / 40-50 / 50-60 / 60-70 / 70-100) grouped by
// class/weapon type. "Best" is a simple heuristic: within each
// (class, weaponType, bracket) group, pick the piece with the
// highest attack stat (incPAD for physical, incMAD for magic),
// tiebreak by lowest reqLevel (easier to reach), then alphabetical.
//
// Output format: markdown-ready blocks the guide author can copy.
// Also surfaces mob drop sources and quest rewards so we know the
// obtain route for each pick.
//
// Why a script, not inline in the guide: 114 weapons + 500 armor
// pieces to sift. Picking the top 2-3 per bucket by hand is
// error-prone. Script is reproducible on every db rebuild.

import fs from "node:fs";

const items = JSON.parse(fs.readFileSync("src/data/db/items.json", "utf8"));
const mobs = JSON.parse(fs.readFileSync("src/data/db/mobs.json", "utf8"));

const mobsById = new Map(mobs.map((m) => [m.id, m]));

const BRACKETS = [
	{ min: 30, max: 39, label: "L30-40" },
	{ min: 40, max: 49, label: "L40-50" },
	{ min: 50, max: 59, label: "L50-60" },
	{ min: 60, max: 69, label: "L60-70" },
	{ min: 70, max: 100, label: "L70-100" },
];

const JOBS = ["Warrior", "Magician", "Bowman", "Thief"];

function attackStat(item) {
	return (item.stats?.incPAD || 0) + (item.stats?.incMAD || 0);
}

function obtainHints(item) {
	const hints = [];
	for (const dropper of item.droppedBy || []) {
		const mob = mobsById.get(dropper.mobId);
		if (mob) {
			hints.push(`drop: ${mob.name} (Lv ${mob.stats?.level ?? "?"})`);
		}
	}
	for (const quest of item.givenByQuests || []) {
		hints.push(`quest: ${quest.questName} (Lv ${quest.level})`);
	}
	if (hints.length === 0 && item.npcSellPrice) {
		hints.push(`NPC-sellable (${item.npcSellPrice.toLocaleString()} mesos)`);
	}
	return hints.slice(0, 3).join("; ") || "obtain route unknown";
}

function pickTopN(pool, n) {
	return pool
		.slice()
		.sort((a, b) => {
			const atkDiff = attackStat(b) - attackStat(a);
			if (atkDiff !== 0) return atkDiff;
			return (a.stats?.reqLevel ?? 999) - (b.stats?.reqLevel ?? 999);
		})
		.slice(0, n);
}

console.log("# Gearing 30+ : auto-generated reference tables\n");
console.log(`Generated from items.json (${items.length} items). Pick heuristic:`);
console.log("highest ATK within (class, weaponType, bracket), tiebreak lowest reqLevel.\n");

// ---------- WEAPONS by class × weaponType × bracket ----------
console.log("## Weapons by class × bracket\n");

for (const job of JOBS) {
	console.log(`### ${job}\n`);
	const classWeapons = items.filter(
		(i) =>
			i.subCategory === "Weapon" &&
			i.reqJobLabel === job &&
			i.stats?.reqLevel >= 30 &&
			i.stats?.reqLevel <= 100,
	);

	// Group by weaponType
	const byType = new Map();
	for (const w of classWeapons) {
		const t = w.weaponType ?? "Unknown";
		if (!byType.has(t)) byType.set(t, []);
		byType.get(t).push(w);
	}

	for (const [weaponType, pool] of byType) {
		console.log(`#### ${weaponType}\n`);
		console.log("| Bracket | Best pick (ATK) | How to get |");
		console.log("| --- | --- | --- |");
		for (const br of BRACKETS) {
			const inBracket = pool.filter(
				(w) => w.stats.reqLevel >= br.min && w.stats.reqLevel <= br.max,
			);
			if (inBracket.length === 0) {
				console.log(`| ${br.label} | _(nothing at this bracket)_ | — |`);
				continue;
			}
			const top = pickTopN(inBracket, 1)[0];
			const atk = attackStat(top);
			const speed = top.attackSpeedLabel ? ` · ${top.attackSpeedLabel}` : "";
			console.log(
				`| ${br.label} | [${top.name}](/items/${top.id}) Lv ${top.stats.reqLevel} · ATK ${atk}${speed} | ${obtainHints(top)} |`,
			);
		}
		console.log();
	}
}

// ---------- ARMOR by subCategory × bracket (universal) ----------
console.log("\n## Universal armor progression\n");
const ARMOR_SLOTS = ["Hat", "Top", "Bottom", "Overall", "Shoes", "Glove", "Cape"];
for (const slot of ARMOR_SLOTS) {
	console.log(`### ${slot}\n`);
	const pool = items.filter(
		(i) => i.subCategory === slot && i.stats?.reqLevel >= 30 && i.stats?.reqLevel <= 100,
	);
	// Rank by total defense (incPDD + incMDD) within bracket.
	const scored = pool.map((i) => ({
		...i,
		defScore: (i.stats?.incPDD || 0) + (i.stats?.incMDD || 0),
	}));
	console.log("| Bracket | Top pick (DEF) | Job | How to get |");
	console.log("| --- | --- | --- | --- |");
	for (const br of BRACKETS) {
		const inBr = scored.filter(
			(i) => i.stats.reqLevel >= br.min && i.stats.reqLevel <= br.max,
		);
		if (inBr.length === 0) {
			console.log(`| ${br.label} | _(nothing)_ | — | — |`);
			continue;
		}
		const top = inBr.slice().sort((a, b) => b.defScore - a.defScore)[0];
		console.log(
			`| ${br.label} | [${top.name}](/items/${top.id}) Lv ${top.stats.reqLevel} · DEF ${top.defScore} | ${top.reqJobLabel || "All"} | ${obtainHints(top)} |`,
		);
	}
	console.log();
}

// ---------- Accessories ----------
console.log("\n## Accessories\n");
for (const slot of ["Earring", "Ring", "Pendant", "Face Accessory", "Eye Decoration", "Belt"]) {
	const pool = items.filter(
		(i) => i.subCategory === slot && i.stats?.reqLevel >= 30 && i.stats?.reqLevel <= 100,
	);
	if (pool.length === 0) continue;
	console.log(`### ${slot} (${pool.length} items L30-100)\n`);
	const topFive = pool
		.slice()
		.sort((a, b) => (b.stats?.incLUK || 0) + (b.stats?.incINT || 0) + (b.stats?.incDEX || 0) + (b.stats?.incSTR || 0) - ((a.stats?.incLUK || 0) + (a.stats?.incINT || 0) + (a.stats?.incDEX || 0) + (a.stats?.incSTR || 0)))
		.slice(0, 8);
	console.log("| Item | Lv | Primary stat | Job | How to get |");
	console.log("| --- | --- | --- | --- | --- |");
	for (const t of topFive) {
		const stats = [];
		if (t.stats?.incSTR) stats.push(`STR+${t.stats.incSTR}`);
		if (t.stats?.incDEX) stats.push(`DEX+${t.stats.incDEX}`);
		if (t.stats?.incINT) stats.push(`INT+${t.stats.incINT}`);
		if (t.stats?.incLUK) stats.push(`LUK+${t.stats.incLUK}`);
		if (t.stats?.incPAD) stats.push(`ATK+${t.stats.incPAD}`);
		if (t.stats?.incMAD) stats.push(`MATK+${t.stats.incMAD}`);
		console.log(
			`| [${t.name}](/items/${t.id}) | ${t.stats.reqLevel} | ${stats.join(" ") || "—"} | ${t.reqJobLabel || "All"} | ${obtainHints(t)} |`,
		);
	}
	console.log();
}
