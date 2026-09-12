/**
 * Glossary of MapleStory Classic terminology - the single highest-SEO
 * page on the site. New players Google "what does X mean maplestory"
 * constantly; whoever owns this vocabulary page owns the top-of-funnel.
 *
 * Terms come from v83-era GMS + Classic-World community usage. Where
 * a term has a canonical in-game equivalent (Big Bang / post-Big Bang)
 * we call it out.
 *
 * Editorial rules:
 *   - Definitions are 1-3 sentences. Longer belongs in a dedicated
 *     guide page, not the glossary.
 *   - Aliases include ALL spelling variants players actually type,
 *     including abbreviations (WATK for Weapon Attack, HB for Hyper
 *     Body, etc.). Search inside the page matches on aliases too.
 *   - linkTo is optional; only set when we have a full page that
 *     goes deeper than the definition (e.g. KPQ links to
 *     /party-quests/kpq).
 *
 * Adding a term: append to TERMS. Alphabetical sort happens at build
 * time; letter-index nav is derived automatically.
 */

export type GlossaryCategory =
	| "stat"
	| "combat"
	| "skill"
	| "item"
	| "class"
	| "party-play"
	| "economy"
	| "boss"
	| "game-system"
	| "social";

export interface GlossaryTerm {
	term: string;
	aliases?: string[];
	category: GlossaryCategory;
	definition: string;
	linkTo?: string;
}

export const CATEGORY_META: Record<GlossaryCategory, { label: string; accent: string }> = {
	stat: { label: "Stats", accent: "#c94a4a" },
	combat: { label: "Combat", accent: "#e08c1f" },
	skill: { label: "Skills", accent: "#7a4bc7" },
	item: { label: "Items", accent: "#3ea86b" },
	class: { label: "Classes", accent: "#2f7dbf" },
	"party-play": { label: "Party Play", accent: "#c85fa8" },
	economy: { label: "Economy", accent: "#b8891a" },
	boss: { label: "Bosses", accent: "#8a3131" },
	"game-system": { label: "Game Systems", accent: "#4d6674" },
	social: { label: "Social", accent: "#5f7a30" },
};

export const TERMS: GlossaryTerm[] = [
	// --- Stats ---
	{ term: "AP", aliases: ["Ability Points"], category: "stat", definition: "Ability Points - the 5 points you earn every level to distribute across STR, DEX, INT, LUK. Also 1 point automatically added to MAX HP/MP per level based on class." },
	{ term: "STR", aliases: ["Strength"], category: "stat", definition: "Strength. Primary damage stat for Warriors (and secondary for a few thief hybrids). 1 STR = flat additive damage inside physical attack formulas." },
	{ term: "DEX", aliases: ["Dexterity"], category: "stat", definition: "Dexterity. Primary damage stat for Bowmen and secondary/main for most Thieves. Also grants accuracy - 1 DEX = 0.8 accuracy roughly." },
	{ term: "INT", aliases: ["Intelligence"], category: "stat", definition: "Intelligence. Primary damage stat for Magicians. Also boosts MAX MP gain per level for INT-scaling classes." },
	{ term: "LUK", aliases: ["Luck"], category: "stat", definition: "Luck. Primary damage stat for Assassins/Bandits (Thieves). Also gates equipment for thieves and boosts accuracy/avoidability marginally." },
	{ term: "WATK", aliases: ["Weapon Attack", "W.ATK", "ATK"], category: "stat", definition: "Weapon Attack. Physical damage multiplier - the single most important damage stat for non-mage classes. Scrolls and buffs add to this." },
	{ term: "MATK", aliases: ["Magic Attack", "M.ATK", "MAG"], category: "stat", definition: "Magic Attack. Damage multiplier for mage spells. Wands, staves, and magic-scrolled overalls contribute MATK." },
	{ term: "WDEF", aliases: ["Weapon Defense", "W.DEF"], category: "stat", definition: "Weapon Defense. Reduces incoming physical damage. Every 10 WDEF reduces most mob physical hits by ~5 damage." },
	{ term: "MDEF", aliases: ["Magic Defense", "M.DEF"], category: "stat", definition: "Magic Defense. Reduces incoming magic damage. Critical against bosses like Zombie Mushmom that hit with a magic attack." },
	{ term: "ACC", aliases: ["Accuracy", "ACCU"], category: "stat", definition: "Accuracy. Determines your hit rate against a mob's Avoidability. If ACC is too low you'll see '1' damage misses constantly." },
	{ term: "AVOID", aliases: ["Avoidability", "AVD"], category: "stat", definition: "Avoidability. Chance mobs miss you entirely. Thieves get natural avoid from LUK; Bowmen/Mages rely on gear." },
	{ term: "HP", aliases: ["Health", "Hit Points", "MAX HP"], category: "stat", definition: "Hit Points. When it hits 0 you die and lose EXP. Warriors get the highest natural HP; mages the lowest. HP washing is the practice of trading MP for extra HP via AP resets." },
	{ term: "MP", aliases: ["Mana", "Mana Points", "MAX MP"], category: "stat", definition: "Mana Points. Every skill you cast costs MP. Mages regen MP with Meditation and consume more per cast than any other class." },
	{ term: "EXP", aliases: ["Experience", "XP"], category: "stat", definition: "Experience. Fills a bar per level; hit 100% to level up. Dying costs 10% of your current bar (5% with Wedding Ring). Party grinding shares EXP by damage contribution." },
	{ term: "Crit", aliases: ["Critical", "Critical Rate", "Critical Damage"], category: "combat", definition: "Critical hit chance and damage bonus. Bowmen and thieves get large passive crit boosts at 2nd job (Critical Shot, Critical Throw) - transforms their base attacks into major DPS." },

	// --- Combat ---
	{ term: "DPS", aliases: ["Damage Per Second"], category: "combat", definition: "Damage Per Second. The composite metric most people care about - product of attack speed, damage per hit, and skill cast rate. Booster skills are DPS multipliers." },
	{ term: "DoT", aliases: ["Damage over Time", "Poison", "Bleed"], category: "combat", definition: "Damage over Time. F.P. Mage's Poison Breath is the canonical example - a cloud that ticks damage on every mob inside its area for its full duration." },
	{ term: "AoE", aliases: ["Area of Effect"], category: "combat", definition: "Area of Effect. Any skill that hits multiple mobs at once. Warrior's Slash Blast, Magician's Thunderbolt, Bowman's Arrow Bomb - all AoE staples for grinder builds." },
	{ term: "Aggro", aliases: ["Threat", "Attention"], category: "combat", definition: "The mob's targeting priority. Whoever hits a mob first typically holds aggro; some skills (Warrior's Threaten) actively pull it." },
	{ term: "Kite", aliases: ["Kiting"], category: "combat", definition: "Attacking while retreating so the mob never catches up. Bowmen and mages kite constantly; warriors rarely need to." },
	{ term: "KS", aliases: ["Kill Steal", "Kill Stealing"], category: "social", definition: "Attacking a mob someone else is already fighting to steal the EXP/drop. Historically the single most reported behavior in v83; considered rude in the community." },
	{ term: "1-shot", aliases: ["1shot", "One shot", "1HKO"], category: "combat", definition: "Killing a mob in a single attack. The training-speed target for grinder maps - if you can't 1-shot the map's mobs, you're overleveled or underfunded for it." },

	// --- Skills ---
	{ term: "SP", aliases: ["Skill Points"], category: "skill", definition: "Skill Points. You earn 3 per level starting at Lv 11 (Magicians: Lv 9). Spent inside a class's skill window to level up individual skills." },
	{ term: "Mastery", aliases: ["Weapon Mastery"], category: "skill", definition: "A passive that raises your weapon's minimum damage roll. Every 2nd job class has a Mastery skill and every canonical build maxes it FIRST - it removes 1-damage misses on your main attack." },
	{ term: "Booster", aliases: ["Weapon Booster"], category: "skill", definition: "A short-duration buff that raises your weapon's attack speed by 2 tiers. Universally the second thing maxed after Mastery. Fires and forget every 60-200 seconds." },
	{ term: "Buff", aliases: [], category: "skill", definition: "Any positive temporary status effect - Rage (+WATK), Meditation (+MATK), Iron Will (+DEF), Haste (+move/jump), Bless (+ACC/AVOID/DEF). Buffs are class-defining for party support roles." },
	{ term: "Debuff", aliases: [], category: "skill", definition: "Any negative temporary status - Slow, Threaten (-WATK/-WDEF on mobs), Seal (blocks skill use). Debuff-heavy classes control fights instead of racing them." },
	{ term: "HB", aliases: ["Hyper Body"], category: "skill", definition: "Hyper Body - Spearman's flagship party buff. Multiplies MAX HP and MAX MP by 1.4-1.6x for the whole party. THE reason people want a Spearman/DK in group content." },
	{ term: "MG", aliases: ["Magic Guard"], category: "skill", definition: "Magic Guard - Magician 1st-job buff. Redirects damage from HP to MP so your massive mage MP pool becomes an effective HP pool. Mages max this FIRST." },
	{ term: "MW", aliases: ["Maple Warrior"], category: "skill", definition: "Maple Warrior - 4th job party buff that raises all base stats by 5-15%. Universal DPS multiplier for every class. If a 4th job character is in your party, always ask for it." },
	{ term: "SE", aliases: ["Sharp Eyes"], category: "skill", definition: "Sharp Eyes - Bowmaster/Marksman 4th job party buff. Grants party members guaranteed crit rate and boosts crit damage. Trivializes bossing." },
	{ term: "HS", aliases: ["Holy Symbol"], category: "skill", definition: "Holy Symbol - Priest/Bishop 4th job party buff. Increases EXP and drop rate for the whole party. THE most-invited-to-parties buff in v83." },
	{ term: "Booster Buff", aliases: ["Speed Buff"], category: "skill", definition: "Colloquial: any attack-speed buff (Warrior Booster, Claw Booster, etc). Sometimes conflated with Haste which is a MOVEMENT speed buff, not attack speed." },
	{ term: "Res", aliases: ["Resurrection", "Rez"], category: "skill", definition: "Bishop's revive skill. Restores a dead party member to full HP without EXP loss. Long cooldown but universally requested during boss runs." },

	// --- Classes ---
	{ term: "Beginner", aliases: ["Noob", "Baby", "Islander"], category: "class", definition: "The starting class before job advancement. Everyone begins as Beginner on Maple Island. Permanent Beginners (never advance) are a self-imposed challenge subculture." },
	{ term: "Warrior", aliases: ["Swordsman"], category: "class", definition: "Melee STR class. Advances to Fighter/Page/Spearman at Lv 10. High HP, high WDEF, physical DPS. Rage/Threaten/Hyper Body make Warriors strong party buffers.", linkTo: "/jobs/warrior" },
	{ term: "Magician", aliases: ["Mage"], category: "class", definition: "INT caster class. Advances to Cleric/F.P. Wizard/I.L. Wizard at Lv 8 (not 10!). Squishy but massive utility; Cleric heals, Wizards nuke.", linkTo: "/jobs/magician" },
	{ term: "Bowman", aliases: ["Archer"], category: "class", definition: "DEX ranged class. Advances to Hunter/Crossbowman at Lv 10. Consistent DPS, high crit, Sharp Eyes in endgame.", linkTo: "/jobs/bowman" },
	{ term: "Thief", aliases: ["Rogue"], category: "class", definition: "LUK melee/ranged hybrid. Advances to Assassin (throwing stars) or Bandit (daggers) at Lv 10. Fast attacks, high avoid, Meso Explosion at 3rd job.", linkTo: "/jobs/thief" },
	{ term: "Sin", aliases: ["Assassin"], category: "class", definition: "Thief throwing-star branch. Advances to Hermit at Lv 70. Uses claws + throwing stars. Lucky Seven + Critical Throw = crit-heavy DPS." },
	{ term: "DK", aliases: ["Dragon Knight", "Drk", "DrK"], category: "class", definition: "Spearman 3rd job advancement. Gets Dragon Roar (massive AoE) and improved Hyper Body. The party support meta pick." },
	{ term: "WK", aliases: ["White Knight"], category: "class", definition: "Page 3rd job advancement. Elemental Charges (fire/ice/thunder) let them stack element damage into their attacks - counters element-immune bosses." },
	{ term: "BM", aliases: ["Bowmaster"], category: "class", definition: "Hunter 4th job. Sharp Eyes + Hurricane. THE bossing party's DPS carry - all other bows retire when a Bowmaster shows up." },

	// --- Items ---
	{ term: "Overall", aliases: ["OA"], category: "item", definition: "A single armor piece covering both top and bottom slots. Common in mid-game because scrolling one overall is cheaper than scrolling separate top + bottom." },
	{ term: "Cape", aliases: [], category: "item", definition: "The back-slot accessory. Cape scrolls raise WATK/MATK - the most common way funded players push their damage past gear caps." },
	{ term: "Weapon", aliases: [], category: "item", definition: "Your main damage-dealer. WATK-scrolled weapons are the biggest single DPS investment - a Chaos-scrolled weapon can eclipse an entire set of gear." },
	{ term: "Scroll", aliases: ["30% scroll", "60% scroll", "100% scroll"], category: "item", definition: "A consumable that upgrades an equipment slot. Named by success chance (30% CS, 60% CS, 100% CS). 100% scrolls guarantee success but give smaller stat gains than 30%/60% variants." },
	{ term: "CS", aliases: ["Chaos Scroll", "Chaos"], category: "item", definition: "Chaos Scroll. Randomly rolls +/- on every stat on an item. High risk, high reward - can make an item godly or brick it entirely. Traded like currency in v83." },
	{ term: "Godly", aliases: ["Perfect", "Perfected"], category: "item", definition: "A piece of gear scrolled to its statistical maximum (or near-max). A 'godly' Zakum Helmet takes dozens of scrolls to produce and sells for 5+ billion mesos in v83." },
	{ term: "Clean", aliases: ["Unscrolled"], category: "item", definition: "An equipment item with no scrolls applied yet. Clean godly (max base stats, unscrolled) items are the raw material for scroll gambling." },
	{ term: "Slot", aliases: ["Upgrade Slot", "Slots Available"], category: "item", definition: "The number of times an item can still be scrolled. Every equipment starts with 7-8 slots; each scroll attempt consumes one whether it succeeds or not." },
	{ term: "ETC", aliases: ["Etcetera"], category: "item", definition: "The 'Etc' inventory tab. Holds quest items, mob-drop crafting materials, and cards. Almost every mob drops at least one ETC item." },
	{ term: "NX", aliases: ["Nexon Cash", "Cash"], category: "item", definition: "Nexon Cash. The premium currency purchased with real money. Buys Cash Shop items - hair/face changes, pets, mounts, and cosmetic equipment ('cash equips')." },
	{ term: "Cash Equip", aliases: ["NX equip"], category: "item", definition: "Cosmetic equipment purchased with NX. Overlays your regular gear visually without changing stats. The reason your character can look like a snail while wearing full Zakum gear." },
	{ term: "Star", aliases: ["Throwing Star", "Throwing Stars", "Stars"], category: "item", definition: "Assassin's ranged weapon. Stack size matters - a stack of 200 Steely Throwing-Stars lasts far longer than 100 Ilbis. Ilbi Throwing-Stars ('tobis') are the endgame star." },

	// --- Party Play ---
	{ term: "PQ", aliases: ["Party Quest"], category: "party-play", definition: "A structured multi-stage instance for a fixed-size party. Each PQ has a level range and unique rewards. The v83 leveling meta between Lv 21 and 51.", linkTo: "/party-quests" },
	{ term: "KPQ", aliases: ["Kerning Party Quest", "Kerning PQ"], category: "party-play", definition: "Kerning Party Quest. Lv 21-30 PQ in Kerning City. Requires party of 3-6, teaches teamwork, hands out Rock/Paper/Scissors gloves + gear. First PQ every new player runs.", linkTo: "/party-quests/kerning-pq" },
	{ term: "LPQ", aliases: ["Ludibrium PQ"], category: "party-play", definition: "Ludibrium Party Quest. Lv 35-50 PQ. Long multi-stage puzzle-based PQ; drops Broken Glasses + high-EXP rewards. THE 2nd-job leveling meta in v83." },
	{ term: "LMPQ", aliases: ["Ludibrium Maze PQ"], category: "party-play", definition: "Ludibrium Maze Party Quest. Lv 51-70 timed maze. Rewards etc items exchangeable for stat gear + notably fast EXP if run efficiently." },
	{ term: "Party", aliases: ["Group"], category: "party-play", definition: "A group of 2-6 players sharing EXP. Party members within a screen of a kill share EXP proportional to damage contribution + a small even-split bonus." },
	{ term: "Solo", aliases: [], category: "party-play", definition: "Playing without a party. Slower EXP but no split, no drama, no dependency. Some players run entire class ladders solo as a subculture challenge." },
	{ term: "LFP", aliases: ["Looking for Party", "LF>Party"], category: "party-play", definition: "Chat shorthand: 'Looking for Party'. Common in FM channel 1 and PQ maps. Reply with your class + level." },
	{ term: "Leech", aliases: ["Leeching"], category: "party-play", definition: "Being in a party but not contributing damage - the higher-level partner does the killing, the low-level 'leecher' gets EXP for existing. Priest party leech is a v83 economy." },

	// --- Economy ---
	{ term: "Meso", aliases: ["Mesos", "Meso"], category: "economy", definition: "The in-game currency. Mobs drop it, quests give it, players trade with it. Meso Explosion at Chief Bandit 3rd job actively converts meso into AoE damage." },
	{ term: "FM", aliases: ["Free Market", "Market"], category: "economy", definition: "The player trading hub. Set up a shop stall, browse rooms 1-22 for player prices, or spam channel 1 chat WTS/WTB. The whole player economy runs through FM." },
	{ term: "WTS", aliases: ["Want to Sell"], category: "economy", definition: "Chat shorthand: 'Want to Sell [item] [price]'. Standard FM channel 1 syntax." },
	{ term: "WTB", aliases: ["Want to Buy"], category: "economy", definition: "Chat shorthand: 'Want to Buy [item] [max price]'. Standard FM channel 1 syntax." },
	{ term: "WTT", aliases: ["Want to Trade"], category: "economy", definition: "Chat shorthand: 'Want to Trade [my item] for [your item]'. Barter without meso." },
	{ term: "Merch", aliases: ["Merching", "Merchant"], category: "economy", definition: "Buying items low from other players and reselling high. FM stalls exist primarily for merching. The v83 wealth-building path that doesn't involve grinding mobs." },
	{ term: "Mule", aliases: ["Storage Mule"], category: "economy", definition: "A secondary character created purely to hold items or receive item transfers. Trade a 100% CS to a mule via Cygnus Storage or same-account transfer." },
	{ term: "NX Merch", aliases: ["Cash merching"], category: "economy", definition: "Reselling NX-purchased items (Gachapon pulls, Cash Shop event items) for mesos. Legal grey area on some private servers." },

	// --- Bosses ---
	{ term: "Boss", aliases: [], category: "boss", definition: "A high-HP unique enemy with named identity. In-game 'isBoss' flag distinguishes them from field mobs. Classic-era bosses include Mano, King Slime, Mushmoms, Balrogs.", linkTo: "/bosses" },
	{ term: "Zakum", aliases: ["Zak"], category: "boss", definition: "The Lv 50+ El Nath boss. Multi-arm mechanic (arms respawn until body is exposed). Zakum Helmet drop is THE stat helm of Classic-era. Not in COT2 yet but expected at launch." },
	{ term: "HT", aliases: ["Horntail"], category: "boss", definition: "Horntail. The Leafre expedition boss. Multi-headed dragon with a phase-based fight. Endgame v83 content; drops Horntail Necklace for +5-6 all-stat." },
	{ term: "Mushmom", aliases: ["MM"], category: "boss", definition: "A field-spawn mini-boss that respawns every ~1 hour. Green (Lv 30, Mushroom Park), Zombie (Lv 60), and Blue variants. Camping Mushmom spawn points is a v83 pastime." },

	// --- Game Systems ---
	{ term: "Job Advancement", aliases: ["Job Change", "Advancing"], category: "game-system", definition: "Progressing to a new job at fixed level milestones - Lv 10 (or 8 for Magician), 30, 70, 120. Requires visiting the class instructor NPC in the appropriate city." },
	{ term: "AP Reset", aliases: ["AP Wash", "Reset"], category: "game-system", definition: "A Cash Shop item that removes 1 AP from one stat and adds it to another. The mechanic behind HP washing (draining MAX MP to fund extra MAX HP)." },
	{ term: "SP Reset", aliases: ["Skill Reset"], category: "game-system", definition: "A Cash Shop item that removes 1 SP from one skill. Lets you undo a build mistake without a full character remake. Rare and pricey." },
	{ term: "HP Wash", aliases: ["HP Washing"], category: "game-system", definition: "The practice of using AP Resets to drain MAX MP + adding those points to MAX HP. The only way non-warriors survive Zakum/Horntail 1-hit KO ranges. Requires massive NX investment." },
	{ term: "Cash Shop", aliases: ["CS"], category: "game-system", definition: "The in-game store for NX items. Note the terminology overlap: 'CS' can mean Cash Shop OR Chaos Scroll depending on context." },
	{ term: "Gachapon", aliases: ["Gach", "Gachapon Ticket"], category: "game-system", definition: "A NX-purchased loot box. Consumes a ticket + gives one random item from a town-specific pool. Historically the source of Ilbi Throwing-Stars and rare CS drops." },
	{ term: "Channel", aliases: ["CH"], category: "game-system", definition: "One of the parallel server instances. Same map, different players. Change channel to escape KSers or find boss spawns. Currently ~20 channels per server." },
	{ term: "Town", aliases: ["Village"], category: "game-system", definition: "A safe zone with NPCs, storage, and no mobs. Henesys, Ellinia, Perion, Kerning City are the 4 starter towns per class." },

	// --- Social ---
	{ term: "GM", aliases: ["Game Master", "Admin"], category: "social", definition: "A Game Master - official Nexon staff (or server admin on private servers) with in-game moderator powers. Wearing a GM-only outfit and using teleport commands." },
	{ term: "Guild", aliases: [], category: "social", definition: "A named organization of players with a shared chat channel and roster. Guilds unlock at Lv 10; require a Guild Contract from the Guild Master NPC + 1.5m meso creation fee." },
	{ term: "Buddy", aliases: ["Friend"], category: "social", definition: "Your personal friends list. Buddy list has a soft cap of ~20 slots expandable via NX. See buddy locations map-wide, whisper across channels." },
	{ term: "PM", aliases: ["Whisper", "/whisper"], category: "social", definition: "Private Message. Right-click a name → whisper, or type `/username message`. Works cross-channel same server." },
	{ term: "AFK", aliases: ["Away From Keyboard"], category: "social", definition: "'Away From Keyboard'. Historically abused in v83 as an excuse to occupy a rare mob spawn without contributing. Anti-AFK checks are a modern private-server feature." },
	{ term: "Ironman", aliases: ["Iron Man", "IM"], category: "social", definition: "Self-imposed challenge mode: no party, no trades, no scrolls, no NX. Community-tracked leaderboards on some servers. The purest form of v83 grind." },
];

// Sort terms alphabetically by primary term. Case-insensitive.
export const sortedTerms: GlossaryTerm[] = [...TERMS].sort((a, b) =>
	a.term.toLowerCase().localeCompare(b.term.toLowerCase()),
);

// Bucket terms by their first alphabetical letter (uppercase). Used for
// the letter-index nav at the top of the glossary page.
export const termsByLetter: Record<string, GlossaryTerm[]> = sortedTerms.reduce(
	(acc, t) => {
		const letter = t.term[0]!.toUpperCase();
		(acc[letter] ??= []).push(t);
		return acc;
	},
	{} as Record<string, GlossaryTerm[]>,
);

// Alphabet nav strip - only letters that actually have terms are rendered.
export const activeLetters: string[] = Object.keys(termsByLetter).sort();

// Slugify a term for anchor links. Handles apostrophes, spaces, and
// punctuation that sneak into terms like 'AP Reset' or 'F.P. Wizard'.
export function slugifyTerm(term: string): string {
	return term
		.toLowerCase()
		.replace(/[.']/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}
