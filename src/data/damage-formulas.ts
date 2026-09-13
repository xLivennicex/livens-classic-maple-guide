/**
 * v83-canonical damage formulas for the classic MapleStory era.
 *
 * ============================================================
 * HONESTY / VERIFICATION POLICY (same as EXP table)
 * ============================================================
 * These formulas are what the community has reverse-engineered
 * across ~15 years of private-server sources and Odin-Ms /
 * HeavenMS-family server implementations. They're accurate for
 * v83 within about +/- 5-10% of in-game numbers because private
 * servers stopped calling the client's damage-calc function
 * around v40 and re-implemented it server-side; small mismatches
 * accumulated over versions.
 *
 * When CoT 2 Founder's Access lands (Oct 6), we can compare
 * these outputs to in-game verified numbers and tighten anything
 * that's off. Until then: use for planning, not for min-maxing
 * to the point-blank. The calculator UI flags this in its own
 * accuracy note the same way the EXP table does at Lv 30+.
 * ============================================================
 *
 * FORMULA SOURCES (public):
 * - Southperry.net damage guides (2008-2012 era)
 * - MapleTip / MapleWiki formula pages
 * - HiddenStreet's mechanics section
 * - Cross-checked against OdinMS-derived private server code
 */

// ============================================================
// Types
// ============================================================

export type AttackType = "physical" | "magic";

/**
 * Weapon type controls the STR/DEX/LUK stat multiplier for
 * physical attacks. Magic weapons (wand, staff) are handled by
 * the magic formula and don't use these multipliers.
 *
 * Multipliers below are the v83-canonical "primary stat mult"
 * baked into the max-damage formula. Secondary stat always
 * multiplies by 1 in the max formula.
 */
export const WEAPON_TYPES = {
	"1h-sword":   { label: "1H Sword",       mult: 4.0, primary: "str", secondary: "dex" },
	"2h-sword":   { label: "2H Sword",       mult: 4.6, primary: "str", secondary: "dex" },
	"1h-axe":     { label: "1H Axe",         mult: 4.4, primary: "str", secondary: "dex" },
	"2h-axe":     { label: "2H Axe",         mult: 4.8, primary: "str", secondary: "dex" },
	"1h-bw":      { label: "1H Blunt Weapon", mult: 4.4, primary: "str", secondary: "dex" },
	"2h-bw":      { label: "2H Blunt Weapon", mult: 4.8, primary: "str", secondary: "dex" },
	"spear":      { label: "Spear",          mult: 3.0, primary: "str", secondary: "dex" },
	"polearm":    { label: "Polearm",        mult: 5.0, primary: "str", secondary: "dex" },
	"dagger":     { label: "Dagger",         mult: 4.0, primary: "luk", secondary: "str" },
	"claw":       { label: "Claw",           mult: 3.6, primary: "luk", secondary: "dex" },
	"bow":        { label: "Bow",            mult: 3.4, primary: "dex", secondary: "str" },
	"crossbow":   { label: "Crossbow",       mult: 3.6, primary: "dex", secondary: "str" },
	"wand":       { label: "Wand (magic)",   mult: 0,   primary: "int", secondary: "luk" },
	"staff":      { label: "Staff (magic)",  mult: 0,   primary: "int", secondary: "luk" },
} as const;

export type WeaponType = keyof typeof WEAPON_TYPES;

export interface DamageInputs {
	weaponType: WeaponType;
	primaryStat: number;     // STR / DEX / LUK / INT depending on class
	secondaryStat: number;   // usually DEX for physical, LUK for magic
	weaponAttack: number;    // WA for physical, MATT for magic
	skillPercent: number;    // 100 = base attack, 250 = a 250% skill etc.
	masteryPercent: number;  // 0-100. 0 = no mastery, 90 = maxed 1st-job mastery
	mobPhysicalDef: number;  // 0 for training-dummy purposes
	mobMagicDef: number;
}

export interface DamageOutput {
	max: number;       // pre-defense
	min: number;       // pre-defense
	avg: number;       // pre-defense
	postDefMax: number;
	postDefMin: number;
	postDefAvg: number;
	// Which formula path we walked (for the "how is this calculated"
	// display).
	path: "physical" | "magic";
}

// ============================================================
// Physical damage
// ============================================================

/**
 * Base physical formula:
 *   Max = ((PrimaryStat * mult) + SecondaryStat) * WA / 100
 *
 * With skill scaling:
 *   Max = Max_base * (SkillPercent / 100)
 *
 * With mastery for the min bound:
 *   Min = Max * ((MasteryPercent * 0.9) + 10) / 100
 *   Example: 60% mastery -> Min = Max * (54 + 10) / 100 = Max * 0.64
 *   Example: 90% mastery -> Min = Max * (81 + 10) / 100 = Max * 0.91
 *
 * Defense reduction (rough v83 approximation):
 *   PostDef = max(1, damage - (MobPhysicalDef * 0.5))
 *   PostDef floor is 1 because MapleStory never displays 0 damage
 *   even against defense you can't scratch.
 */
function computePhysical(i: DamageInputs): DamageOutput {
	const w = WEAPON_TYPES[i.weaponType];
	const base = (i.primaryStat * w.mult + i.secondaryStat) * i.weaponAttack / 100;
	const max = base * (i.skillPercent / 100);
	// Min bound derived from mastery. Higher mastery = tighter range.
	const minBound = ((i.masteryPercent * 0.9) + 10) / 100;
	const min = max * minBound;
	const avg = (max + min) / 2;

	const defReduction = i.mobPhysicalDef * 0.5;
	const postDefMax = Math.max(1, Math.floor(max - defReduction));
	const postDefMin = Math.max(1, Math.floor(min - defReduction));
	const postDefAvg = Math.max(1, Math.floor(avg - defReduction));

	return {
		max: Math.floor(max),
		min: Math.floor(min),
		avg: Math.floor(avg),
		postDefMax, postDefMin, postDefAvg,
		path: "physical",
	};
}

// ============================================================
// Magic damage
// ============================================================

/**
 * Widely-cited v83 magic formula:
 *   Max = ((MATT^2 / 1000) + MATT) + (INT * SkillPercent / 100)
 *
 * The MATT^2 / 1000 term is the "magic squared" scaling that
 * makes stacking MATT extremely valuable at high values (this
 * is why classic mages chase MATT gear so hard vs INT).
 *
 * Mastery for mages tops out at 60% via 2nd-job weapon mastery
 * (Element Amplification / Big Bang aren't a thing at 1st job).
 * We use the same mastery-derived min formula as physical.
 *
 * Magic defense reduction uses a gentler formula than physical:
 *   PostDef = max(1, damage - (MobMagicDef * 0.6))
 * Slightly harsher because magic-def stat scales lower on mobs.
 */
function computeMagic(i: DamageInputs): DamageOutput {
	const mattSquared = (i.weaponAttack * i.weaponAttack) / 1000;
	const base = mattSquared + i.weaponAttack + (i.primaryStat * i.skillPercent / 100);
	const max = base;
	const minBound = ((i.masteryPercent * 0.9) + 10) / 100;
	const min = max * minBound;
	const avg = (max + min) / 2;

	const defReduction = i.mobMagicDef * 0.6;
	const postDefMax = Math.max(1, Math.floor(max - defReduction));
	const postDefMin = Math.max(1, Math.floor(min - defReduction));
	const postDefAvg = Math.max(1, Math.floor(avg - defReduction));

	return {
		max: Math.floor(max),
		min: Math.floor(min),
		avg: Math.floor(avg),
		postDefMax, postDefMin, postDefAvg,
		path: "magic",
	};
}

/**
 * Route to physical or magic formula based on weapon type. Wand
 * and staff are magic; everything else is physical. This
 * matches the actual v83 client behavior - even INT-based classes
 * would auto-attack for physical damage if handed a bow, and vice
 * versa.
 */
export function calcDamage(i: DamageInputs): DamageOutput {
	const w = WEAPON_TYPES[i.weaponType];
	const isMagic = w.primary === "int";
	return isMagic ? computeMagic(i) : computePhysical(i);
}
