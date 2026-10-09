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
		title: "Stage 1: Platform Jump",
		subtitle: "Rope up to the top, hit the ropes to open the portal.",
		objective: "Every party member climbs to their designated platform and touches the rope. All 6 ropes must be touched to open the portal to Stage 2.",
		timeLimit: "6 minutes.",
		strategy: [
			"Six platforms at different heights, each with a rope on top.",
			"Assign one platform to each member - Bowmen and Mages take the highest, Warriors take mid, Thieves and Beginners take low.",
			"Everyone climbs simultaneously and touches their rope.",
			"Portal at the top-right opens when the 6th rope is touched.",
		],
		gotchas: [
			"Falling off a rope resets you to the ground - climb again.",
			"If time runs out, the party is kicked back to Lakelis (no reward).",
		],
	},
	{
		slug: "stage-2-cards",
		number: 2,
		title: "Stage 2: Match Cards",
		subtitle: "Kill Curse Eyes and Ligators for numbered plates.",
		mobs: ["Curse Eye", "Ligator"],
		objective: "Kill mobs to drop 4-6 numbered cards. Party members take one card each and stand on the matching pressure plate at the bottom. When the plates form a valid pattern, the portal opens.",
		timeLimit: "6 minutes.",
		strategy: [
			"Curse Eyes and Ligators spawn continuously - kill them and pick up the numbered cards they drop.",
			"Each member takes ONE card (dont hoard - each member needs one).",
			"Six pressure plates at the bottom, each expecting a specific number.",
			"Stand on the plate matching your card number.",
			"When all plates are correctly occupied, the portal opens.",
		],
		gotchas: [
			"Multiple cards in one inventory can cause 'stuck' pattern - drop the extras.",
			"Curse Eye has a heal skill - focus fire to burst them down.",
			"If the pattern is stuck, one member should step off and reshuffle.",
		],
	},
	{
		slug: "stage-3-barrels",
		number: 3,
		title: "Stage 3: The Barrels",
		subtitle: "Jump barrel-to-barrel in the right order.",
		objective: "A row of numbered barrels. One member at a time jumps onto their assigned barrel; the portal opens once all 6 barrels have been correctly stood on.",
		timeLimit: "6 minutes.",
		strategy: [
			"Barrels have hidden numbers - the leader assigns each member a barrel by position.",
			"One member at a time jumps up - if you go out of order, the sequence resets.",
			"Once all 6 correct barrels are hit in order, the portal opens.",
		],
		gotchas: [
			"Jumping on the wrong barrel resets progress - communicate order first.",
			"Beginners have the weakest jumps - assign them the ground-level barrels.",
		],
	},
	{
		slug: "stage-4-coins",
		number: 4,
		title: "Stage 4: Get Coin, Insert Coin",
		subtitle: "Kill Wraiths and Bubblings for coins, feed the slots.",
		mobs: ["Wraith", "Jr. Wraith", "Bubbling"],
		objective: "Kill mobs to collect coins. Each party member inserts their coin into a numbered slot. Portal opens when all 6 slots are fed.",
		timeLimit: "6 minutes.",
		strategy: [
			"Wraiths spawn constantly - they drop the coins.",
			"Each member picks up ONE coin then walks to a slot.",
			"Insert the coin at the slot - youll get a chat confirmation.",
			"Once all 6 slots are fed, the portal to the Bonus Room opens.",
		],
		gotchas: [
			"Wraiths are aggressive and hit hard - keep HP topped up.",
			"Jr. Wraith is faster/weaker - dont waste MP on Wraiths if Jr. Wraiths spawn near you.",
			"Bubblings are ranged and can hit through walls - watch for them behind platforms.",
		],
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
