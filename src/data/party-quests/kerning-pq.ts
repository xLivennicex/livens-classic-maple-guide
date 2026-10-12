// Kerning Party Quest (KPQ) walkthrough data for MapleStory Classic
// World, Founder's Access (Oct 6-20, 2026).
//
// MAJOR REWRITE 2026-10-12 after user-flagged mechanic corrections +
// cross-referenced with 5 post-launch CW community sources
// (MapleClassic Wiki, MeowDB, MMOJUGG, MapleStory Quest, Henesys.gg;
// all dated Oct 8-9, 2026). The previous version was heavily
// v83-contaminated and described a KPQ that doesn't exist in CW.
//
// What changed vs the previous version:
//   - REMOVED the "waiting room" stage - CW drops you straight into Stage 1
//   - REMOVED all Wraith / Jr. Wraith references - no wraiths in CW KPQ
//   - REWROTE Stage 1 as Cloto's question-and-coupon mechanic
//   - REWROTE Stage 2 as the 4-rope puzzle (3 of 4 occupied)
//   - REWROTE Stage 3 as the cats-on-logs platform puzzle (5 platforms,
//     3 occupied, 10 combinations)
//   - REWROTE Stage 4 as the barrel combination (6 barrels, 3 occupied,
//     20 combinations) - this is where barrels live in CW, not Stage 3
//   - UPDATED boss stage with King Slime's 50% HP slime-summon behavior
//     and 11-slime post-death split
//   - UPDATED rewards with the Companion's Magic Box (item 2430000)
//     that goes to every member every run, PLUS the first-run-only
//     Proof of Companionship earring-scroll chain
//
// On the "Bonus Stage is 4 platforms per party member" claim: the
// datamine (map 80000500) AND all 5 CW community sources agree the
// bonus stage is still the Horny/Green mushroom hunt. We're keeping
// the mushroom documentation here; if someone can produce a CW
// screenshot showing 4-platform bonus mechanic, we'll re-check.
//
// Boss stats: datamine shows King Slime at Lv 40 / 8000 HP, but
// MapleClassic Wiki (Oct 9) says Lv 32 / 16,820 HP. The wiki is more
// recent than the pre-launch datamine snapshot, so we trust the wiki
// for the live FA state. Documented both for transparency.
//
// LFG shorthand convention is a NEW addition in this version - see
// KPQ_LFG_SHORTHAND. The J> prefix means "Joining >" (looking to
// join), S> means "Selling >". Spotted the first time in the user's
// Oct 12 correction, confirmed as common Nexon-era convention.

export interface KpqStage {
	slug: string;              // used as anchor id (#stage-1-etc)
	number: number | "boss" | "bonus";
	title: string;
	subtitle: string;          // one-line "what you do" summary
	timeLimit?: string;        // CW time limits not datamined
	mobs?: string[];           // grounded mob names from mobs.json
	objective: string;         // 1-2 sentence goal
	strategy: string[];        // ordered bullet points
	gotchas: string[];         // common mistakes / fail conditions
	partyRoleTip?: string;     // e.g. "leader triggers portal"
	mapId?: number;            // datamine map id for cross-linking
}

/**
 * Stage 1 question pool.
 *
 * Cloto (NPC 800001) sits in Stage 1 and gives each party member
 * EXCEPT the leader a trivia question whose answer is a number.
 * The member hunts the 22 Ligators spawned in the stage, collects
 * EXACTLY that many Coupons, drops any extras to the floor, and
 * turns them in to Cloto to receive a Pass. The leader hands all
 * Passes to Cloto when everyone's done to open the portal.
 *
 * Confidence levels:
 *   - "confirmed": listed in MapleClassic Wiki (Oct 9, 2026) + at
 *     least one independent CW source
 *   - "contested": appears in some CW sources but conflicts with
 *     others. Likely still a real question, but verify in-game
 *     before relying on it.
 */
export const KPQ_STAGE1_QUESTIONS = [
	{
		question: "Required Level to become a Warrior / Magician / Bowman / Thief",
		answer: 10,
		confidence: "confirmed",
		notes: "All 1st-job advancements unified at Lv 10 in Classic World. Pre-Big-Bang Magician was Lv 8; do not use the old answer.",
	},
	{
		question: "Required EXP to reach Level 2",
		answer: 15,
		confidence: "confirmed",
	},
	{
		question: "Required Level to enter this Party Quest",
		answer: 21,
		confidence: "confirmed",
	},
	{
		question: "Total AP gained from leveling up from Level 1 to Level 6",
		answer: 25,
		confidence: "confirmed",
	},
	{
		question: "Required Level to complete 2nd Job Advancement",
		answer: 30,
		confidence: "confirmed",
		notes: "The example the player quoted in the Oct 12 correction - 'same amount of tickets as the level for 2nd job advancement'.",
	},
	{
		question: "INT a Magician needs",
		answer: 20,
		confidence: "contested",
		notes: "Appears in MeowDB community-reported list but MapleClassic Wiki and Henesys.gg specifically warn 'no 1st job has a stat requirement in Classic World'. Possibly asking about pre-BB historical values. Verify in-game.",
	},
	{
		question: "DEX a Bowman or Thief needs",
		answer: 25,
		confidence: "contested",
		notes: "Same source conflict as the INT question.",
	},
	{
		question: "STR a Warrior needs",
		answer: 35,
		confidence: "contested",
		notes: "MeowDB mentions a 'if someone draws the 35-coupon question, swap leader to dodge it' trick, which implies this question is still live even where it isn't listed in the wiki.",
	},
] as const;

/**
 * LFG shorthand convention used in Kerning City (and the server at
 * large) for finding party members. The prefix tells readers what
 * you're after.
 *
 * Spotted first in the user's Oct 12 correction; documented here so
 * guide readers don't type S>KPQ ("Selling KPQ") when they mean
 * J>KPQ ("Joining a KPQ party").
 */
export const KPQ_LFG_SHORTHAND = {
	joining: {
		prefix: "J>",
		meaning: "Joining > (looking to join)",
		examples: [
			{ shout: "J>KPQ", meaning: "Looking to join a Kerning Party Quest group." },
			{ shout: "J>PQ", meaning: "Looking to join any Party Quest group." },
			{ shout: "J>Party", meaning: "Looking to join any party (grinding, bossing, PQ, anything)." },
			{ shout: "J>KPQ 25+", meaning: "Looking to join a KPQ group that is Lv 25 or higher." },
		],
	},
	selling: {
		prefix: "S>",
		meaning: "Selling > (offering for sale)",
		examples: [
			{ shout: "S>Steely 1b", meaning: "Selling a Steely item for 1 billion mesos." },
			{ shout: "S>Pan Lid 500k", meaning: "Selling a Pan Lid for 500,000 mesos." },
		],
	},
	note:
		"If you type S>KPQ, people will assume you're selling a KPQ carry service, not looking for a group. J>KPQ is what you want when you're trying to join.",
} as const;

/**
 * KPQ rewards. The old-build "Proof of Companionship" quest is a
 * ONE-TIME first-completion reward chain (handed in to Lakelis in
 * Kerning City). Every subsequent run gives every party member a
 * Companion's Magic Box (item 2430000, Consume > Consume category,
 * datamine-verified).
 */
export const KPQ_REWARDS = {
	// Per-run reward (every member, every clear).
	magicBox: {
		itemId: 2430000,
		name: "Companion's Magic Box",
		category: "Consumable",
		obtainedFrom: "Talk to Cloto after King Slime dies, before entering the Bonus Room.",
		note: "Each party member receives one box per clear. Open after the run for a weighted-random pull from the item pool documented below.",
	},
	// First-completion quest - one-time earring scroll + mesos + fame.
	firstRunQuest: {
		questId: "10311",
		name: "Proof of Companionship",
		turnInNpc: "Lakelis",
		turnInMap: "Kerning City (10003000)",
		exp: 1870,
		mesos: 687,
		fame: 1,
		itemChance: [
			{ name: "Earring STR Scroll: Intermediate", id: 2040301, chance: "~25%" },
			{ name: "Earring DEX Scroll: Intermediate", id: 2040305, chance: "~25%" },
			{ name: "Earring INT Scroll: Intermediate", id: 2040309, chance: "~25%" },
			{ name: "Earring LUK Scroll: Intermediate", id: 2040313, chance: "~25%" },
		],
		note: "The 25% each weighting is from quests.json prop values. First completion only - all subsequent runs give only the Companion's Magic Box.",
	},
	// Boss drop (chance from King Slime).
	bossDrops: [
		{
			itemId: 1072128,
			name: "Squishy Shoes",
			scoreNote: "Score 10 in datamine (common for a boss drop)",
			note: "L28 All-class shoes. +1 STR / +1 DEX / +1 INT / +1 LUK, +18 WDEF, 5 upgrade slots, tradeable. The iconic KPQ chase drop. Datamine shows this as King Slime's only equip drop.",
		},
		{
			itemId: 4001001,
			name: "Coupon",
			scoreNote: "Score 1",
			note: "Not a reward - the Coupons are the Stage 1 trivia-answer tickets. The datamine lists them as a King Slime drop because the final boss also drops Passes which share the Coupon item type.",
		},
	],
	// Per-stage EXP during the run - not published in any CW source.
	stageExp: "Not currently published in CW community sources. In-game verification needed.",
} as const;

/**
 * Bonus Room drops.
 *
 * Confirmed by datamine (map 80000500) AND by every post-launch CW
 * community source: 24 Horny Mushrooms (Lv22) + 12 Green Mushrooms
 * (Lv14) spawn in one wave. 60-second timer. Exit via Nella (NPC
 * 800002 or 406 - both appear in dossiers).
 *
 * The user's Oct 12 correction suggested the bonus is "4 platforms,
 * one per party member" - but this is contradicted by every CW
 * source we have. We're keeping the mushroom-room documentation
 * here; if a reader confirms a different mechanic in-game with a
 * screenshot, we'll update.
 */
export const KPQ_BONUS_ROOM_DROPS = {
	greenMushroom: {
		mobId: 13,
		mobName: "Green Mushroom",
		spawnCount: 12,
		note: "The Pan Lid and Claw Attack Scroll: Intermediate farm target.",
		drops: [
			{ itemId: 1092002, name: "Pan Lid", score: 25, kind: "Equip", note: "Lv10 all-class shield." },
			{ itemId: 4000063, name: "Fragment of Magic", score: 14, kind: "Etc" },
			{ itemId: 4000013, name: "Green Mushroom Cap", score: 11, kind: "Etc" },
			{ itemId: 1002043, name: "Green Feather Hat", score: 10, kind: "Equip" },
			{ itemId: 1072018, name: "Green Woodsman Boots", score: 8, kind: "Equip" },
			{ itemId: 4010004, name: "Silver Ore", score: 7, kind: "Etc" },
			{ itemId: 1322003, name: "Mace", score: 7, kind: "Equip", note: "Lv15 Warrior/Mage 1H blunt weapon." },
			{ itemId: 1382002, name: "Emerald Staff", score: 6, kind: "Equip", note: "Lv15 Mage staff." },
			{ itemId: 1040033, name: "Green Bennis Chainmail", score: 4, kind: "Equip" },
			{ itemId: 4020003, name: "Emerald Ore", score: 4, kind: "Etc" },
			{ itemId: 2044701, name: "Claw Attack Scroll: Intermediate", score: 3, kind: "Use", note: "60% +2 wATT on claws. Rare and valuable." },
			{ itemId: 2000003, name: "Blue Potion", score: 3, kind: "Use" },
			{ itemId: 2048000, name: "Pet Equip Speed Scroll: Lesser", score: 3, kind: "Use" },
			{ itemId: 2043102, name: "One-Handed Axe Attack Scroll: Greater", score: 2, kind: "Use", note: "30% +3 wATT on 1H axes." },
			{ itemId: 2000000, name: "Red Potion", score: 2, kind: "Use" },
			{ itemId: 4031068, name: "Animal Fossil", score: 2, kind: "Etc", note: "Fossil Research chain material." },
			{ itemId: 2061000, name: "Arrows for Crossbows", score: 2, kind: "Use" },
			{ itemId: 4010005, name: "Orihalcon Ore", score: 2, kind: "Etc" },
			{ itemId: 1040008, name: "Green Archer Top", score: 1, kind: "Equip" },
			{ itemId: 1061030, name: "Blue Qi Pao Pants", score: 1, kind: "Equip" },
			{ itemId: 1062002, name: "Sandblasted Jeans", score: 1, kind: "Equip" },
		],
	},
	hornyMushroom: {
		mobId: 19,
		mobName: "Horny Mushroom",
		spawnCount: 24,
		note: "Volume play - 24 reactors with Magic Potions, crafting ores, and a Two-Handed Blunt Attack Scroll: Greater at the tail.",
		drops: [
			{ itemId: 2000001, name: "Orange Potion", score: 12, kind: "Use" },
			{ itemId: 4000019, name: "Horny Mushroom Cap", score: 7, kind: "Etc" },
			{ itemId: 2002001, name: "Magic Potion", score: 7, kind: "Use", note: "Buff potion - the useful consumable here." },
			{ itemId: 2000003, name: "Blue Potion", score: 7, kind: "Use" },
			{ itemId: 4010000, name: "Bronze Ore", score: 7, kind: "Etc" },
			{ itemId: 4020006, name: "Topaz Ore", score: 7, kind: "Etc" },
			{ itemId: 1041037, name: "Blue Shark", score: 7, kind: "Equip", note: "Lv25 Warrior top." },
			{ itemId: 1082002, name: "Steel Fingerless Gloves", score: 5, kind: "Equip" },
			{ itemId: 1302010, name: "Cutlus", score: 5, kind: "Equip", note: "Lv35 Warrior 1H sword - sellable at vendor for 7,500 mesos." },
			{ itemId: 1002106, name: "Brown Jester", score: 5, kind: "Equip" },
			{ itemId: 1332007, name: "Iron Dagger", score: 4, kind: "Equip", note: "Lv25 Thief dagger." },
			{ itemId: 2060000, name: "Arrows for Bows", score: 3, kind: "Use" },
			{ itemId: 1442004, name: "Mithril Pole Arm", score: 3, kind: "Equip", note: "Lv30 Warrior polearm." },
			{ itemId: 1002117, name: "Blue Guise", score: 3, kind: "Equip" },
			{ itemId: 1061039, name: "Sky Sneak Pants", score: 2, kind: "Equip" },
			{ itemId: 1060028, name: "Black Sneak Pants", score: 2, kind: "Equip" },
			{ itemId: 1002126, name: "Blue Pole-Feather Hat", score: 2, kind: "Equip" },
			{ itemId: 1002113, name: "Blue Hawkeye", score: 1, kind: "Equip" },
			{ itemId: 4020005, name: "Sapphire Ore", score: 1, kind: "Etc" },
			{ itemId: 2044202, name: "Two-handed Blunt Weapon Attack Scroll: Greater", score: 1, kind: "Use", note: "30% +3 wATT on 2H blunts." },
			{ itemId: 1092003, name: "Steel Shield", score: 1, kind: "Equip", note: "Lv15 Warrior shield." },
		],
	},
} as const;

/**
 * Possible Companion's Magic Box contents, community-reported from
 * MapleClassic Wiki + MeowDB (both Oct 9, 2026). CW sources did NOT
 * expose numeric item IDs or drop weights, so this is a shopping
 * list rather than a weighted drop table.
 *
 * If you see a Magic Box contain something not in this list, it's
 * probably a new community pull - we'll add it in a future update.
 */
export const KPQ_MAGIC_BOX_POOL = {
	equipment: [
		"Blue / Brown / Green Bamboo Hat",
		"Yellow Square",
		"Red Cross Earrings",
		"Gold Earrings",
		"Star Earrings",
		"Emerald Earrings",
		"Sapphire Earrings",
	],
	scrolls: [
		"Earring LUK Scroll: Intermediate",
		"Earring Crit. Damage Scroll: Intermediate",
		"Overall Armor STR Scroll: Greater",
		"Overall Armor LUK Scroll: Greater",
		"Overall Armor INT Scroll: Greater",
		"Overall Armor DEX Scroll: Greater",
		"Overall Armor DEF Scroll: Greater",
		"Hat Accuracy Scroll: Greater",
		"Shoes Speed Scroll: Greater",
		"Bottomwear DEF Scroll: Greater",
	],
	potions: [
		"Red Potion x5",
		"Orange Potion x10",
		"Blue Potion x10 or x15",
		"White Potion x15",
		"Pure Water x10",
		"Unagi x10",
		"Speed Potion x5",
		"Elixir x3",
	],
	materials: [
		"Fragment of Magic x1",
		"Screw x10",
		"Bronze Ore x5",
		"Gold Ore x5",
		"Iron Ore x8",
		"Mithril Ore x8",
		"Silver Ore x8",
		"Orihalcon Ore x8",
		"Adamantium Ore x8",
		"Amethyst Ore x8",
		"Opal Ore x8",
		"Topaz Ore x8",
		"Aquamarine Ore x8",
		"Garnet Ore x8",
		"Sapphire Ore x8",
		"Emerald Ore x8",
		"Black Crystal Ore x3",
		"Diamond Ore x3",
	],
	note:
		"Pools above are community-reported and may be incomplete. The box opens as a weighted-random single pick. CW sources did not expose per-item drop weights.",
} as const;

/**
 * Entry requirements for KPQ. The only hard gate is Lv 21.
 *
 * NO ticket item required (unlike LPQ which gates on three
 * Construction Site tickets). NO prerequisite quest. NO entry fee.
 * NO cooldown between runs.
 *
 * Level cap and party-size minimum are confirmed per CW community
 * sources - the game won't start the quest unless the party has
 * at least 3 members (party of 2 or solo = Cloto refuses).
 */
export const KPQ_ENTRY_REQUIREMENTS = {
	levelMin: 21,
	levelMax: 30,
	partySizeMin: 3,
	partySizeMax: 6,
	items: [] as Array<{ id: number; name: string; count: number }>, // zero - datamine-verified
	entryFeeMesos: 0,
	prerequisiteQuest: null as string | null,
	prerequisiteQuestName: null as string | null,
	cooldownMinutes: 0, // no cooldown
	entryNpc: "Lakelis",
	entryNpcWzId: 9020000,
	entryMapId: 10003000,
	entryMapName: "Kerning City",
	notes: [
		"NO ticket item required - datamine-verified by scanning items.json for requiredByQuests[].questId === '10311' (zero hits).",
		"NO prerequisite quest chain. Brand-new Lv 21 characters can queue immediately.",
		"NO entry fee. Lakelis takes you in free.",
		"NO cooldown between runs. Clear and re-queue immediately.",
		"NO waiting room in Classic World. You go from Lakelis straight to Stage 1 - this changed from the v83 version.",
		"Level 30 upper cap is enforced - Lv 31+ characters cannot enter.",
		"Party size 3-6 confirmed by community sources. The game won't start with 2 members or solo.",
	],
} as const;

export const KPQ_META = {
	name: "Kerning Party Quest",
	shortName: "KPQ",
	region: "Victoria Island",
	town: "Kerning City",
	townSlug: "kerning-city",
	entryNpc: "Lakelis",
	entryNpcId: 800000,
	entryMapId: 10003000,
	insidePqNpc: "Cloto",
	insidePqNpcId: 800001,
	exitNpc: "Nella",
	exitNpcId: 800002,
	questId: "10311",
	questName: "Proof of Companionship",
	levelMin: 21,
	levelMax: 30,
	partySize: 6,
	partySizeMin: 3,
	estimatedRunTime: "12-20 minutes",
	iconicMobs: ["Ligator", "Curse Eye", "Jr. Necki", "King Slime"],
	tagline:
		"Six-player trivia + puzzle gauntlet. Classic Maple's rite of passage, reworked in Classic World.",
	notableChanges: [
		"NO waiting room - party goes from Lakelis straight to Stage 1 (vs v83's lobby map).",
		"NO Wraith / Jr. Wraith anywhere - the v83 ghost mobs don't appear in CW KPQ.",
		"Stage 1 is a trivia-and-coupon mechanic - Cloto gives each non-leader member a question with a numeric answer, you hunt 22 Ligators for Coupons and turn in the exact count. Previously (v83) this was a platform-rope puzzle.",
		"Stage 2 is a 4-rope puzzle (3 of 4 occupied, 4 combinations). Previously (v83) this was mob killing.",
		"Stage 3 is cats-on-logs platform puzzle (5 platforms with 1-5 cats, 3 occupied, 10 combinations). Previously (v83) this was the barrel puzzle.",
		"Stage 4 is barrels (6 numbered 1-6, 3 occupied, 20 combinations). Previously (v83) this was coin-insertion.",
		"King Slime: Lv 32, 16,820 HP per MapleClassic Wiki (community source). Summons regular Slimes at 50% HP. On death splits into 11 regular Slimes (optional kill). Datamine shows Lv 40 / 8,000 HP but the wiki is more recent.",
		"Rewards: every member gets a Companion's Magic Box (item 2430000) per clear. First-ever clear also triggers Proof of Companionship for an Intermediate Earring scroll turn-in to Lakelis.",
		"Squishy Shoes (item 1072128, L28 all-stat +1/+1/+1/+1, 5 slots) is King Slime's chance drop - the iconic KPQ chase item.",
	],
} as const;

export const kpqStages: KpqStage[] = [
	{
		slug: "stage-1-coupons",
		number: 1,
		title: "Stage 1: Cloto's Trivia + 22 Ligators",
		subtitle: "Each member gets a question. Kill Ligators, collect EXACTLY the answer in coupons, turn in to Cloto.",
		mobs: ["Ligator"],
		objective:
			"Cloto gives each party member (except the leader) a trivia question. The answer is a number. Hunt the 22 Lv 32 Ligators for Coupons, pick up EXACTLY that many, drop any extras, and turn them in to Cloto for a Pass. Leader hands all Passes to Cloto to open the portal.",
		timeLimit: "Not datamined - CW stages have no explicit timer shown in client data.",
		mapId: 80000000,
		strategy: [
			"Party leader does NOT get a question. Everyone else does. The leader's job is to keep the Ligator pile cleared so coupons keep dropping.",
			"Everyone talks to Cloto to receive their question. Note your answer (the number) - this is how many coupons you must hold when turning in.",
			"Hunt Ligators. Each kill has a chance to drop a Coupon. Pick up ONLY the number you need.",
			"If you overcollect, DROP the extras on the floor. Holding too many coupons blocks your turn-in.",
			"When you have EXACTLY the right number, talk to Cloto - he exchanges your coupons for a Pass.",
			"Once everyone has a Pass, the leader talks to Cloto and the portal to Stage 2 opens.",
			"If someone draws the 35-coupon question and you want to dodge it, swap party leader - the leader never gets asked. Old leader drops to member, talks to Cloto, draws a fresh question.",
		],
		gotchas: [
			"Picking up more coupons than you need forces you to drop extras BEFORE Cloto will accept the turn-in. Don't vacuum the floor.",
			"If a party member goes AFK before taking their question, Cloto won't give them one. Check that everyone has a question before the Ligator pile is cleared.",
			"The datamine captures 22 Ligators as a static spawn. If you run out of mobs before everyone has their coupons, Cloto re-spawns Ligators when the previous wave is cleared (per community sources). Don't panic if a count seems tight.",
		],
		partyRoleTip: "Party leader cannot get a question. Rotate the leader role if someone draws a question they can't answer.",
	},
	{
		slug: "stage-2-ropes",
		number: 2,
		title: "Stage 2: 4-Rope Puzzle",
		subtitle: "Four ropes (2 top + 2 bottom). Three party members climb three correct ropes while leader checks with Cloto.",
		objective:
			"Four ropes/vines in the stage: two on the top branch, two on the bottom branches. Only 3 of the 4 ropes are 'correct' per attempt. Three party members hang on three ropes while the leader talks to Cloto. If the combination is right, portal opens. If wrong, swap one person to the empty rope and try again.",
		timeLimit: "Not datamined.",
		mapId: 80000100,
		strategy: [
			"Label the ropes A/B (top) and C/D (bottom). Four possible combinations: ABC, ABD, ACD, BCD.",
			"Pick any starting combination (e.g. ABC). Three members climb and hold.",
			"Leader talks to Cloto. If right, portal opens.",
			"If wrong, move ONE person to the empty rope - this rotates to the next combination. Example: ABC -> ABD by moving the C person to D.",
			"Worst case 4 tries to find the right combination.",
		],
		gotchas: [
			"If a member falls off mid-check, the leader's Cloto conversation sees an incomplete set and fails. Everyone hold the rope until Cloto responds.",
			"Only 3 of the 6 party members climb - the other 3 (plus the leader) stand aside and wait. Don't have everyone try to climb.",
			"NO mobs on this stage. If you see mobs, you're on the wrong map.",
		],
		partyRoleTip: "Leader stays near Cloto to re-trigger the check between combinations. Rope climbers never leave their rope until told.",
	},
	{
		slug: "stage-3-cats",
		number: 3,
		title: "Stage 3: Cats-on-Logs Platform Puzzle",
		subtitle: "Five platforms with 1-5 cats on logs each. Three party members stand on three correct platforms while leader checks.",
		objective:
			"Five platforms arranged at different heights, each with a visible number of cats sitting on logs (1 cat / 2 cats / 3 cats / 4 cats / 5 cats). Only 3 of 5 platforms are 'correct' per attempt. Three party members stand on three platforms while the leader talks to Cloto. 10 total combinations - C(5,3) = 10 - so worst case 10 tries.",
		timeLimit: "Not datamined.",
		mapId: 80000200,
		strategy: [
			"The 5 platforms are visually distinguished by cat count: platform-1 has 1 cat, platform-2 has 2 cats, etc. Spot them from a distance.",
			"Pick a starting combination, e.g. platforms 1-2-3. Three members take platforms 1, 2, and 3.",
			"Leader talks to Cloto. If right, portal opens.",
			"If wrong, rotate ONE person to the next unused platform. Example: 1-2-3 -> 1-2-4 by moving the person on 3 to 4.",
			"10 combinations: 123, 124, 125, 134, 135, 145, 234, 235, 245, 345. Many parties keep a text file open with these so they don't lose their place.",
		],
		gotchas: [
			"Beginners have the shortest jump height - they struggle to reach the higher-numbered platforms. Assign them platforms 1 or 2.",
			"If someone leaves their platform mid-check, the leader's Cloto result is invalid. Everyone holds position.",
			"The 'cats on logs' is one unit - don't try to count individual cats and logs separately. 'Platform with 3 cat-logs' = platform #3.",
		],
		partyRoleTip: "Leader stays near Cloto and re-tries systematically. Platform-standers do not jump off between tries.",
	},
	{
		slug: "stage-4-barrels",
		number: 4,
		title: "Stage 4: 6-Barrel Combination",
		subtitle: "Six barrels numbered 1-6 (stacked). Three party members stand on three correct barrels while leader checks.",
		objective:
			"Six numbered barrels (1-6) arranged in a stacked pattern: 1 at the top, 2 and 3 in the middle row, 4-5-6 in the bottom row. Only 3 of 6 are 'correct' per attempt. Three members stand on three barrels, leader talks to Cloto. 20 combinations total - C(6,3) = 20 - so worst case 20 tries, but typically found faster.",
		timeLimit: "Not datamined.",
		mapId: 80000300,
		strategy: [
			"Visual layout:",
			"           [1]           (top)",
			"         [2] [3]         (middle)",
			"       [4] [5] [6]       (bottom)",
			"Pick a starting combination (common opener: 1-2-3 or 4-5-6).",
			"Leader talks to Cloto. If right, portal opens.",
			"If wrong, rotate systematically. 20 combinations is a lot but you don't need to track all - just try different triples.",
			"Common finding: in the moment the puzzle is being re-randomized per clear, so there's no 'always right' answer. Just work through combinations fast.",
		],
		gotchas: [
			"Standing on a barrel means standing ON TOP of it (not next to it). Jump up.",
			"The visual stacking means barrels 4-5-6 are easiest to reach, barrel 1 requires a jump chain. Taller classes (Warriors) take the top; Beginners take the bottom.",
			"If the solution evades you for 15+ tries, the party may want to leave and re-enter - the puzzle re-randomizes each entry.",
		],
		partyRoleTip: "Assign one barrel per person at the start and don't swap positions until after Cloto's reply. Chaotic swapping = lost combinations tracking.",
	},
	{
		slug: "boss-king-slime",
		number: "boss",
		title: "Boss: King Slime (+ summoned adds)",
		subtitle:
			"King Slime at Lv 32 with ~16,820 HP. Summons regular Slimes at 50% HP. Spawns 11 Slimes on death.",
		mobs: ["Curse Eye", "Jr. Necki", "King Slime"],
		objective:
			"Final boss room. 1 King Slime at the bottom plus 6 Jr. Necki + 3 Curse Eye distributed around the room. Kill everything - each of the 10 mobs drops 1 Pass. Leader hands all 10 Passes to Cloto to clear the stage. Chance drop: Squishy Shoes from King Slime.",
		timeLimit: "~8 minutes per community sources (not datamined).",
		mapId: 80000400,
		strategy: [
			"King Slime stats (per MapleClassic Wiki Oct 9): Lv 32, HP ~16,820, EXP 2,400. The datamine shows Lv 40 / 8,000 HP but the wiki is more recent and reflects the live FA tuning.",
			"King Slime hits HARDER with magic damage (288 M.ATK) than physical. Magicians eat more damage than Warriors in this fight.",
			"At 50% HP, King Slime summons a wave of regular Slimes. Expect ~5-8 new Slimes to appear mid-fight.",
			"On death, King Slime splits into 11 regular Slimes. These are optional kills - the stage completes when the Pass count is right. You can leave them alive if the timer is tight.",
			"Curse Eyes have a self-heal skill. Burst them in 1-2 hits before the heal ticks.",
			"Jr. Necki are the easiest kills - send Beginners / Thieves to clean these up while Warriors / Mages focus King Slime.",
			"Passes drop from each mob kill. 10 mobs total = 10 Passes needed. Leader turns them in to Cloto.",
			"Rare drop: Squishy Shoes (item 1072128). L28 All-class shoes, +1 all-stat, 18 WDEF, 5 upgrade slots, tradeable. The iconic KPQ chase item.",
		],
		gotchas: [
			"If the party focuses only King Slime and ignores Curse Eyes / Jr. Necki, you won't have enough Passes. ALL 10 mobs must die.",
			"King Slime's at-50% summon can overwhelm a party that's not actively AOE'ing. Mage AOE spells shine here.",
			"The 11 post-death Slimes count toward map clear but NOT toward Pass count. Don't waste time killing them unless you want the EXP.",
			"Dying is survivable - party members who die still get the reward if the boss dies in time. Resurrect spells (Cleric) are a plus but not required.",
		],
		partyRoleTip: "Warriors tank King Slime front. Clerics stay in the middle for Bless + Heal reach. Ranged DPS stays on platforms.",
	},
	{
		slug: "bonus-room",
		number: "bonus",
		title: "Bonus Room (Mushroom hunt)",
		subtitle: "60-second mushroom pinata. 24 Horny + 12 Green mushrooms. Exit via Nella.",
		mobs: ["Green Mushroom", "Horny Mushroom"],
		objective:
			"Pop everyone into the Bonus Room map. 36 passive mushroom reactors spawn (24 Horny + 12 Green). 60 seconds to whack as many as you can. All drops are added to inventory immediately. Exit by talking to Nella when ready or when the timer expires.",
		timeLimit: "60 seconds.",
		mapId: 80000500,
		strategy: [
			"Spread immediately - 36 reactors across 4-6 players means 6-9 kills each if split evenly.",
			"Horny Mushrooms (24, Lv22) are the volume play - Magic Potions, crafting ores, and the Two-Handed Blunt Attack Scroll: Greater.",
			"Green Mushrooms (12, Lv14) are rarer but front-loaded with Pan Lid, Fragment of Magic, and the Claw Attack Scroll: Intermediate.",
			"Pick up loot AS YOU GO - the 60-second timer is unforgiving.",
			"Exit via Nella when done. If you miss the timer, you auto-exit anyway.",
		],
		gotchas: [
			"Mushrooms are passive but still mobs - a Lv 21 Beginner may take 2-3 hits per mushroom. Factor this into coverage.",
			"Loot on the ground disappears when the stage ends. Pick up as you drop.",
			"Datamine shows 36 static spawns. One wave only - no respawns mid-timer.",
			"REMINDER on the user's 'bonus is 4 platforms per party member' claim: this is contradicted by every CW source and by the datamine. If you see a 4-platform bonus, screenshot it and report - we'll re-check.",
		],
	},
];

// Party composition suggestions - the CW ecosystem is still forming,
// so these are convention from the first week of FA play.
export const partyCompositions = [
	{
		name: "The Classic Mix",
		classes: ["1 Warrior", "1 Magician", "1 Bowman", "1 Thief", "2 Any"],
		strengths: "Balanced DPS, self-heal Cleric option, safe at boss.",
		weaknesses: "Slower Stage 3-4 solve pace if Beginners can't reach high platforms.",
	},
	{
		name: "Ranged Rush",
		classes: ["3 Bowman", "2 Magician", "1 Cleric"],
		strengths:
			"Melts Ligators and King Slime from safety. Fast Stage 1 coupon farming.",
		weaknesses: "Vulnerable to the at-50% HP Slime summon wave if no Cleric Heal.",
	},
	{
		name: "Cleric Carry",
		classes: ["1 Cleric", "5 Any"],
		strengths:
			"Cleric Heals through everything; Beginners and Thieves welcome. Bless makes trivia-stage DPS less awful.",
		weaknesses: "Slow if Cleric is under-leveled.",
	},
	{
		name: "Beginner Squad",
		classes: ["4-6 Beginner"],
		strengths:
			"Pre-advancement party for Lv 21+ Beginners. Legitimate KPQ clear with no job skills.",
		weaknesses:
			"Low DPS. Stage 5 boss will be slow and attrition-heavy. Have a plan for the at-50% HP summon wave.",
	},
];
