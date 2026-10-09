// Kerning Party Quest (KPQ) walkthrough data.
//
// UPDATED 2026-09-23: KPQ maps ARE in the CoT 2 datamine after all -
// map IDs 80000000 through 80000600 covering all 5 stages, the Bonus
// Room, and the Exit map. Earlier assumption that they were instanced-
// only was wrong. Mob rosters and boss drops below are now grounded
// in those map records, not just player experience.
//
// Every mob and NPC referenced here is grounded against
// src/data/db/*.json. See scripts/audit-vi-references.mjs style
// resolver - if a name here stops matching a real dossier, the page
// will render an italic "unknown" stub.
//
// This is CLASSIC KPQ - the GMS v83-era loop most players remember,
// with a few notable Classic World twists documented in KPQ_META.notableChanges.

export interface KpqStage {
	slug: string;              // used as anchor id (#stage-1-etc)
	number: number | "bonus" | "boss";
	title: string;
	subtitle: string;          // one-line "what you do" summary
	timeLimit?: string;        // e.g. "6 minutes"
	mobs?: string[];           // grounded mob names from mobs.json
	items?: string[];          // grounded item names from items.json
	objective: string;         // 1-2 sentence goal
	strategy: string[];        // ordered bullet points
	gotchas: string[];         // common mistakes / fail conditions
	partyRoleTip?: string;     // e.g. "leader triggers portal" - null if same for everyone
}

// The full reward payout from `Proof of Companionship` (quest 10311)
// grounded against quests.json - kept here as-is for callers who
// don't want to reach into quest dossiers directly.
//
// UPDATED 2026-10-08: EXP + mesos re-synced from the latest Founder's
// Access datamine (1870 EXP / 687 mesos vs the earlier CoT2 snapshot's
// 2193 / 614). Scroll chance also corrected from the misleading '1%'
// to the actual 25%-each weighted random (each scroll has prop=1 in
// the datamine, so one of the four is picked at ~25% rate on completion).
export const KPQ_REWARDS = {
	exp: 1870,
	mesos: 687,
	itemChance: [
		{ name: "Earring STR Scroll: Intermediate", id: 2040301, chance: "~25%" },
		{ name: "Earring DEX Scroll: Intermediate", id: 2040305, chance: "~25%" },
		{ name: "Earring INT Scroll: Intermediate", id: 2040309, chance: "~25%" },
		{ name: "Earring LUK Scroll: Intermediate", id: 2040313, chance: "~25%" },
	],
	// Additional per-stage EXP (rough Classic-era ballpark).
	// Classic World reportedly reduced overall KPQ EXP payout;
	// per-stage precise EXP values are not currently datamined.
	stageExp: "~200-400 EXP per stage cleared (Classic World: reduced vs v83)",
	// Boss drops - FA DATAMINE-VERIFIED from mob dossier 800003.
	// Only two items in King Slime's drop table this build:
	bossDrops: [
		{
			itemId: 1072128,
			name: "Squishy Shoes",
			score: 7,
			note: "L28 All-class shoes. +1 STR / +1 DEX / +1 INT / +1 LUK, +18 PDD, 5 slots. Renamed from 'Slime Shoes' in Classic World; stats are the iconic all-stat blessing. The reason to run KPQ.",
		},
		{
			itemId: 4001001,
			name: "Coupon",
			score: 1,
			note: "Quest ETC used in Kerning City quest chains. Not a market item.",
		},
	],
} as const;

/**
 * Bonus Room drops: FA datamine shows the Bonus Room (map 80000500)
 * is populated with 12 Green Mushrooms (Lv15) and 24 Horny Mushrooms
 * (Lv22) rather than the v83-era passive wooden boxes. These are the
 * 'chest rewards' - party members whack mushrooms during the 60-sec
 * timer and vacuum up whatever they drop.
 *
 * Scores are the raw drop-weight values from mobs.json. Higher score
 * = more common drop. Treat as weighted probability within the mob's
 * table (NOT an absolute percentage).
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
		note: "The main chest-reward volume - 24 reactors with Magic Potions, crafting ores, and a Two-Handed Blunt Attack Scroll: Greater at the tail.",
		drops: [
			{ itemId: 2000001, name: "Orange Potion", score: 12, kind: "Use" },
			{ itemId: 4000019, name: "Horny Mushroom Cap", score: 7, kind: "Etc" },
			{ itemId: 2002001, name: "Magic Potion", score: 7, kind: "Use", note: "Buff potion - the useful consumable here." },
			{ itemId: 2000003, name: "Blue Potion", score: 7, kind: "Use" },
			{ itemId: 4010000, name: "Bronze Ore", score: 7, kind: "Etc" },
			{ itemId: 4020006, name: "Topaz Ore", score: 7, kind: "Etc" },
			{ itemId: 1041037, name: "Blue Shark", score: 7, kind: "Equip", note: "Lv25 Warrior top." },
			{ itemId: 1082002, name: "Steel Fingerless Gloves", score: 5, kind: "Equip" },
			{ itemId: 1302010, name: "Cutlus", score: 5, kind: "Equip", note: "Lv35 Warrior 1H sword - sellable at vendor for 7500 mesos." },
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
 * Entry requirements for KPQ, grounded against the Founder's Access
 * datamine (quests.json id 10311 + items.json requiredByQuests scan).
 *
 * NOTABLY: KPQ needs NO ticket item. We verified this against items.json
 * by scanning for any item with `requiredByQuests[].questId === "10311"` -
 * zero hits. This is unlike LPQ (Ludibrium) which requires Tickets to
 * Construction Site B1/B2/B3 at four distinct Ludibrium NPCs. KPQ's
 * barrier is purely social (round up 4 players at Lv21+) not economic.
 *
 * ALSO NOTE: no prerequisite quest, no entry fee, no gate items. The
 * `prerequisiteQuest`, `prerequisiteItems`, and `cost` fields on quest
 * 10311 are all undefined in the datamine - the ONLY hard gate is
 * `levelMin: 21`.
 *
 * The classic '4-6 party size' convention and 'max level 30' cap are
 * NOT in the datamine - those are KPQ convention from v83 and need
 * Founder's Access playtime to confirm the exact enforced ranges.
 */
export const KPQ_ENTRY_REQUIREMENTS = {
	levelMin: 21,
	levelMax: 30,
	levelMaxVerified: false, // v83 convention; FA may differ
	partySizeMin: 4,
	partySizeMax: 6,
	partySizeVerified: false, // v83 convention; FA may enforce exactly 6
	items: [] as Array<{ id: number; name: string; count: number }>, // zero - datamine-verified
	entryFeeMesos: 0,
	prerequisiteQuest: null as string | null,
	prerequisiteQuestName: null as string | null,
	cooldownMinutes: 0, // no cooldown - run as many times as you want
	entryNpc: "Lakelis",
	entryNpcWzId: 9020000,
	entryMapId: 10003000,
	entryMapName: "Kerning City",
	notes: [
		"NO ticket item required to enter. Unlike LPQ (Ludibrium Party Quest) which requires Tickets to Construction Site B1/B2/B3 at the entry NPCs, KPQ has zero item gatekeeping - datamine-verified against items.json by scanning for items with requiredByQuests[].questId === '10311' (zero hits).",
		"NO prerequisite quest chain. You can run KPQ as a brand-new Lv21 character the moment you hit the level requirement.",
		"NO entry fee. Lakelis takes you in free; the only cost is the time investment per run.",
		"NO cooldown between runs. Once your party clears King Slime and takes the Lakelis turn-in, you can immediately re-queue for another run.",
		"The party-size minimum of 4 is v83 convention - the datamine doesn't expose the party-size gate. Classic World may enforce exactly 6, in which case solo-at-21 and duo plans don't work. Verify at Founder's Access.",
		"The level-30 upper cap is also v83 convention. Lv31+ characters may still enter in FA, which would make 'carry' runs for underleveled friends feasible. Verify at Founder's Access.",
	],
} as const;

export const KPQ_META = {
	name: "Kerning Party Quest",
	shortName: "KPQ",
	region: "Victoria Island",
	town: "Kerning City",
	townSlug: "kerning-city",
	entryNpc: "Lakelis",
	// Grounded IDs from the datamine so page can auto-link.
	entryNpcId: 800000,
	entryMapId: 10003000,
	questId: "10311",
	questName: "Proof of Companionship",
	levelMin: 21,
	levelMax: 30,           // hard cap on entry
	partySize: 6,           // exact - the party wont start without 6
	partySizeMin: 4,        // some Classic servers allow 4-6; document both
	estimatedRunTime: "12-20 minutes",
	iconicMobs: ["Curse Eye", "Ligator", "Wraith", "Jr. Wraith", "Bubbling", "King Slime"],
	tagline: "Six characters, one waiting room, one boss room. Classic Maple's rite of passage.",
	// Classic World changes vs v83 GMS KPQ, based on the CoT 2 datamine
	// + closed-online tester reports (see Eleveny's training video).
	notableChanges: [
		"EXP payout substantially reduced vs v83 - KPQ is now primarily a Squishy Shoes / Bonus Room farm, not an EXP grind",
		"Slime Shoes renamed to 'Squishy Shoes' but retain the iconic +1 all-stat identity (verified: item 1072128, L28, All-class, +1/+1/+1/+1, 18 PDD, 5 slots)",
		"Boss room mob composition now datamine-confirmed: Curse Eye x3, Jr. Necki x6, King Slime x1 (vs v83's varied 'summoned Slime horde' behavior)",
		"Bonus Room datamined at map 80000500 with Horny Mushroom x24 + Green Mushroom x12 - Green Mushrooms are the Pan Lid / Claw Scroll target",
	],
} as const;

export const kpqStages: KpqStage[] = [
	{
		slug: "waiting-room",
		number: 1,
		title: "Waiting Room",
		subtitle: "Lakelis assembles the party.",
		objective: "Wait for all party members to load in and click the portal at the top-right when Lakelis gives the signal.",
		timeLimit: "None - but party disbands if it takes too long.",
		strategy: [
			"Party leader talks to Lakelis in Kerning City with a full party of 4-6 (Classic World may require 6).",
			"All members are transported to the Waiting Room simultaneously.",
			"Once everyone confirms readiness, leader clicks the portal to Stage 1.",
		],
		gotchas: [
			"If a member is over level 30, the party quest wont start.",
			"Disconnects in the waiting room dont refund entry - re-form and try again.",
		],
		partyRoleTip: "Only the party leader can talk to Lakelis to initiate entry.",
	},
	{
		slug: "stage-1-platforms",
		number: 1,
		title: "Stage 1: Platform Jump + Ligator Kill",
		subtitle: "FA map 80000000 spawns 22 Ligators. Classic v83 adds a 6-rope platform puzzle.",
		mobs: ["Ligator"],
		objective: "FA datamine shows 22 Lv32 Ligators static-spawned on map 80000000. Classic v83 KPQ convention adds a 6-rope platform puzzle at the top of the room - unclear whether FA preserved it. Clear the Ligators AND (if the puzzle exists) have each party member touch a rope at the top.",
		timeLimit: "6 minutes (v83 convention; FA time limit not datamined).",
		strategy: [
			"Priority 1: AOE down the 22 Ligators (datamine-confirmed static spawn). They're Lv32 with modest HP - any party can clear them in a minute or two.",
			"Priority 2 (v83 pattern, needs FA verification): the top of the room has 6 platforms at ascending heights with a rope on each. Each party member climbs ONE rope and touches the top. All 6 ropes touched = portal opens.",
			"Platform assignment convention: Bowmen and Mages take the highest ropes (they have range for weirder angles), Warriors take mid, Thieves and Beginners take ground-level.",
			"Portal spawn: top-right of the stage. One party member touches it to teleport everyone to Stage 2.",
		],
		gotchas: [
			"Falling off a rope mid-climb drops you back to the ground - just climb again.",
			"If the time limit expires, the party is kicked back to Lakelis with no reward and no earring scroll.",
			"The datamine captures 22 Ligators as a STATIC spawn - we don't know if the room restocks when killed. Play as if it's one wave.",
		],
		partyRoleTip: "Clerics should hold Heal until the Ligator pile is cleared, then save MP for Stage 4 and the boss.",
	},
	{
		slug: "stage-2-cards",
		number: 2,
		title: "Stage 2: Match Cards (the puzzle stage)",
		subtitle: "Kill mobs for numbered cards, carry one each, stand on your matching pressure plate.",
		mobs: ["Curse Eye", "Ligator"],
		objective: "Mobs drop numbered cards (1-6). Each party member picks up ONE card. The bottom of the stage has 6 pressure plates in a row. Each member stands on the plate matching their card number. When all plates are correctly occupied simultaneously, the portal opens.",
		timeLimit: "6 minutes (v83 convention; FA time limit not datamined).",
		strategy: [
			"MOBS: Curse Eye (Lv35) and Ligator (Lv32) spawn repeatedly. Datamine shows this map (80000100) has no static mobs - the spawns are script-driven when the party enters.",
			"CARDS: killing mobs drops numbered cards. Each card has a visible number 1-6. Only ONE card per party member - do NOT hoard, or others will go hungry.",
			"PLATES: six pressure plates at the bottom of the room, left-to-right. Each plate is labeled 1-6. Stand on the plate matching your card.",
			"PATTERN: when all 6 plates are occupied by members holding the matching card, the portal opens. If anyone has the wrong card or stands on the wrong plate, the pattern is INVALID and the portal stays closed.",
			"CURSE EYE focus: Curse Eye has a self-heal skill. Burst them in 1-2 hits before the heal ticks or they'll waste your time.",
		],
		gotchas: [
			"Holding 2+ cards at once blocks other members from picking up their card. Drop extras immediately.",
			"If a card is dropped on the floor and nobody picks it up, the pattern can't complete. Someone has to grab it.",
			"If the pattern looks right but the portal won't open, one member steps off a plate, waits a beat, then steps back - this re-fires the plate check.",
			"Classic 4-member parties can shortcut: only 4 plates need to be occupied in some v83 variants. Confirm which plates are 'active' on your first run.",
		],
		partyRoleTip: "Party leader should call out plate assignments by card number as cards drop: '1 to me, 2 for Alex, 3 for Bri...'",
	},
	{
		slug: "stage-3-barrels",
		number: 3,
		title: "Stage 3: Barrel Jump Sequence",
		subtitle: "A row of hidden-number barrels. Jump on them in the correct order.",
		objective: "A platform row of 6 barrels, each hiding a secret number (1-6). The barrels must be jumped on in numeric order 1 -> 2 -> 3 -> 4 -> 5 -> 6. Jumping out of order resets progress. Portal opens when barrel 6 is correctly hit.",
		timeLimit: "6 minutes (v83 convention; FA time limit not datamined).",
		strategy: [
			"The numbers on the barrels are hidden until a player jumps up and reveals one. Then everyone can see which barrel is which.",
			"Standard v83 flow: one 'scout' member jumps on each barrel in sequence to reveal the numbers. The rest of the party watches and memorizes.",
			"Once numbers are revealed, barrels must be touched 1 through 6 in order. Any party member can touch, but you can't skip.",
			"Jumping on an out-of-order barrel RESETS the sequence back to 1. Don't rush.",
			"Barrel positions are randomized each run - the barrel in slot 1 isn't always numbered '1'. Scout first, then execute.",
		],
		gotchas: [
			"Beginners have the shortest jump height - they struggle to reach barrels on higher platforms. Assign them the ground-level barrel reveals.",
			"If two members jump on different barrels simultaneously, you can corrupt the sequence tracker. Go one at a time.",
			"The datamine does not expose barrel reactors (no reactor data in maps.json for 80000200). All barrel mechanics are inferred from v83 KPQ - FA may have reworked the puzzle entirely.",
		],
		partyRoleTip: "Assign one 'scout' to reveal barrels and one 'executor' to touch them in order. Rest of party stays off the barrels.",
	},
	{
		slug: "stage-4-coins",
		number: 4,
		title: "Stage 4: Get Coin, Insert Coin",
		subtitle: "Kill mobs for coins, drop one coin into each of 6 numbered slots.",
		mobs: ["Wraith", "Jr. Wraith", "Bubbling"],
		objective: "Mobs drop coins when killed. Each party member picks up ONE coin, walks to a numbered insertion slot, and drops the coin in. All 6 slots must be fed before the portal to the Bonus Room opens.",
		timeLimit: "6 minutes (v83 convention; FA time limit not datamined).",
		strategy: [
			"MOBS (v83 pattern): Wraith (ghost-type, hits hard), Jr. Wraith (smaller faster version), Bubbling (slime-type, ranged attack). FA datamine shows 0 static spawns on map 80000300 - spawns are script-driven.",
			"COINS: killing a mob has a chance to drop one coin. One coin per party member needed - 6 coins total for a 6-party.",
			"SLOTS: there are 6 numbered insertion slots arranged in the stage. Walk to a slot, interact with it, drop a coin in.",
			"PORTAL: once all 6 slots have a coin, the portal to the Bonus Room opens.",
			"4-member variant: in some v83 configurations, only 4 coins are needed for a 4-party. Confirm on first run.",
		],
		gotchas: [
			"Wraiths are aggressive and hit hard at Lv21-25. Clerics should keep Heal up throughout.",
			"Jr. Wraiths are faster but weaker - don't waste Magic Claw / Lucky Seven on them if a full Wraith is also in range.",
			"Bubblings are ranged and can hit through platforms - watch for them in the back of the room.",
			"If someone picks up a 2nd coin by accident, DROP it immediately. Hoarding coins blocks other members from feeding their slot.",
			"Mob roster conflict: existing docs list Wraith / Jr. Wraith / Bubbling but FA's map 80000300 is empty of static mobs. Treat the mob list as v83 convention until FA playtime verifies.",
		],
		partyRoleTip: "Leader assigns a slot to each member before mobs spawn: 'Alex gets slot 1, Bri slot 2...'",
	},
	{
		slug: "bonus-room",
		number: "bonus",
		title: "Bonus Room (mushroom pinata)",
		subtitle: "60 seconds. 36 mushroom reactors. Loot everything.",
		mobs: ["Green Mushroom", "Horny Mushroom"],
		objective: "FA datamine (map 80000500) shows 12 Green Mushrooms (Lv15) and 24 Horny Mushrooms (Lv22) as passive reactors. Whack them, grab the drops. Full drop tables in KPQ_BONUS_ROOM_DROPS.",
		timeLimit: "60 seconds.",
		strategy: [
			"Spread out immediately - 36 mushrooms and 4-6 players means each member gets ~6-9 kills if everyone splits.",
			"Horny Mushrooms (24 spawn) are the volume play - potions, Magic Potions, crafting ores, and the Two-Handed Blunt Attack Scroll: Greater all live here.",
			"Green Mushrooms (12 spawn) are rarer but front-loaded with Pan Lid (common), Fragment of Magic (quest etc), and the Claw Attack Scroll: Intermediate as the chase item.",
			"Pick up loot AS YOU GO - the timer is unforgiving. 60 seconds disappears fast if you're hoarding.",
			"When the timer expires or all mushrooms die, the party moves to the boss room.",
		],
		gotchas: [
			"Mushrooms are passive but still mobs - no XP (they're low-level filler) but a slow Lv21 Beginner might still take 2-3 hits per mushroom. Factor that into your coverage plan.",
			"Loot on the ground disappears when the stage ends. Pick up as you drop.",
			"The datamine captures 36 static mushroom spawns - whether they respawn mid-timer isn't exposed. Treat as a one-shot pinata until FA playtime verifies.",
		],
	},
	{
		slug: "boss-king-slime",
		number: "boss",
		title: "Boss: King Slime",
		subtitle: "The final showdown. Party DPS check.",
		mobs: ["King Slime", "Curse Eye", "Jr. Necki"],
		objective: "Kill King Slime while dodging his summoned Curse Eyes and Jr. Neckis. Datamined room composition (map 80000400): King Slime x1, Curse Eye x3, Jr. Necki x6.",
		timeLimit: "8 minutes.",
		strategy: [
			"King Slime is a Level 40 boss with 8,000 HP and 800 EXP (CoT 2 datamine). Whole party needs to DPS - Level 21-30 characters won't solo him.",
			"He deals MORE magic damage than physical (165 magic vs 130 physical) - Magicians take more damage than Warriors do, unusual for a v83-era boss. Cleric MDD buffs help disproportionately.",
			"Curse Eyes and Jr. Neckis in the room need active management - one player should sweep them so ranged DPS on King Slime isn't interrupted.",
			"Warriors tank the front; Bowmen/Mages ranged from platforms; Thieves flank.",
			"Beginners: throw whatever you have - every hit counts.",
			"When King Slime dies, the map clears and Lakelis gives the completion prompt.",
		],
		gotchas: [
			"King Slime hits hard and is slow (Speed -20) - kite him with ranged, don't stand under.",
			"Curse Eye has a self-heal - burst them fast, don't let them tick HP back up.",
			"Party members who die still get the reward if the boss dies before timer expires.",
		],
	},
];

// Party composition suggestions - based on Classic-era experience.
// Not enforced by the game; documented as advice.
export const partyCompositions = [
	{
		name: "The Classic Mix",
		classes: ["1 Warrior", "1 Magician", "1 Bowman", "1 Thief", "2 Any"],
		strengths: "Balanced DPS, self-heal Cleric option, safe on Wraith stage.",
		weaknesses: "Slower Stage 2 than pure ranged parties.",
	},
	{
		name: "Ranged Rush",
		classes: ["3 Bowman", "2 Magician", "1 Cleric"],
		strengths: "Melts Curse Eyes and Wraiths from safety, fast clears.",
		weaknesses: "Squishy at boss if Cleric goes down early.",
	},
	{
		name: "Cleric Carry",
		classes: ["1 Cleric", "5 Any"],
		strengths: "Cleric heals through everything; Beginners and Thieves welcome.",
		weaknesses: "Slow if Cleric is under-leveled.",
	},
];
