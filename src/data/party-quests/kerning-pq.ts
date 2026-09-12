// Kerning Party Quest (KPQ) walkthrough data.
//
// The KPQ maps themselves aren't in our client-file datamine (party
// quest maps are instanced and generated per-run), but every mob and
// NPC referenced here is grounded against src/data/db/*.json. See
// scripts/audit-vi-references.mjs style resolver - if a name here
// stops matching a real dossier, the page will render an italic
// "unknown" stub.
//
// This is CLASSIC KPQ - the GMS v83-era loop most players remember.
// If Classic World tweaks stages/rewards at launch, revisit stage
// scripts + reward payouts here.

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
export const KPQ_REWARDS = {
	exp: 2193,
	mesos: 614,
	itemChance: [
		{ name: "Earring STR Scroll: Intermediate", id: 2040301, chance: "1%" },
		{ name: "Earring DEX Scroll: Intermediate", id: 2040305, chance: "1%" },
		{ name: "Earring INT Scroll: Intermediate", id: 2040309, chance: "1%" },
		{ name: "Earring LUK Scroll: Intermediate", id: 2040313, chance: "1%" },
	],
	// Additional per-stage EXP (rough Classic-era ballpark):
	stageExp: "~200-400 EXP per stage cleared + boss bonus",
	// Boss drops on top of the quest turn-in reward. Rough Classic values.
	bossDrops: [
		"Silver Deputy Star (throwing star, low chance)",
		"Various low-tier scrolls (helm/overall/glove ATT)",
		"Random consumables (potions, arrows)",
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
		title: "Bonus Room",
		subtitle: "60 seconds. Grab everything.",
		objective: "Break the boxes on the ground for free items. Nothing to fight - pure loot.",
		timeLimit: "60 seconds.",
		strategy: [
			"Every member should spread out and hit boxes as fast as possible.",
			"Boxes drop scrolls, consumables, small equipment, and sometimes mesos.",
			"Pick up loot as you go - the timer is unforgiving.",
			"When the timer expires, the portal to the boss room opens.",
		],
		gotchas: [
			"Loot on the ground disappears if not picked up - be greedy.",
			"Dropping the loot to distribute it later works, but risks running out of time.",
		],
	},
	{
		slug: "boss-king-slime",
		number: "boss",
		title: "Boss: King Slime",
		subtitle: "The final showdown. Party DPS check.",
		mobs: ["King Slime"],
		objective: "Kill King Slime. He spawns a horde of smaller Slimes throughout the fight - kill them for XP and to keep the room clean.",
		timeLimit: "8 minutes.",
		strategy: [
			"King Slime has a lot of HP for a 21-30 boss - the whole party needs to DPS.",
			"He periodically summons ~8 regular Slimes; they die fast but distract.",
			"Warriors tank the front; Bowmen/Mages ranged from platforms; Thieves flank.",
			"Beginners: throw whatever you have - every hit counts.",
			"When King Slime dies, the map clears and Lakelis gives the completion prompt.",
		],
		gotchas: [
			"King Slime hits hard - Beginners without armor die quick if he lands on them.",
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
