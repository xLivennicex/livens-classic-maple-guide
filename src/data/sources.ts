// Archived source index. Every published claim on the site should be
// traceable back to one of these entries. Keep the array append-only in
// spirit: when a source is replaced, mark it superseded and add the
// new one, so the history remains browsable.

export type SourceType =
	| "official-announcement"
	| "closed-test-info"
	| "launch-verified"
	| "community-reported"
	| "awaiting-confirmation"
	| "historical-archive"; /* v83-era wikis, fan sites, forum archives */

export type SourceStatus = "current" | "superseded";

export interface ArchivedSource {
	// Stable identifier used for cross-references (e.g. supersededBy).
	slug: string;
	title: string;
	publisher: string;
	publishedOn: string;
	sourceType: SourceType;
	topics: string[];
	// originalUrl is nullable so we can register a source we plan to cite
	// before the URL is in hand (e.g. a testing changelog we've reviewed
	// but haven't relinked yet). UI renders "URL pending" in that case.
	originalUrl: string | null;
	archiveUrl?: string;
	// The date a human last reviewed the source against the site copy.
	checkedOn: string;
	status: SourceStatus;
	// slug of the source that replaced this one, if any
	supersededBy?: string;
	// Short editorial description; do NOT mirror the article body.
	summary: string;
	// Bullet-form claims taken from this source that appear on the site.
	confirmedFacts: string[];
}

export const sources: ArchivedSource[] = [
	{
		slug: "nexon-founders-packages-on-sale",
		title: "Classic World Founder's Packages Now On Sale!",
		publisher: "NEXON",
		publishedOn: "September 2026",
		sourceType: "official-announcement",
		topics: ["Founder's Packages", "Launch", "Pricing"],
		originalUrl:
			"https://www.nexon.com/maplestory/news/sale/44134/classic-world-founder-s-packages-now-on-sale",
		archiveUrl:
			"https://web.archive.org/web/2026*/https://www.nexon.com/maplestory/news/sale/44134/classic-world-founder-s-packages-now-on-sale",
		checkedOn: "2026-09-05",
		status: "current",
		summary:
			"Sale-opening announcement for the three Founder's Package tiers (Snail, Orange Mushroom, Zakum). Details pricing, tier contents, purchase window, and platform availability.",
		confirmedFacts: [
			"Founder's Packages went on sale September 2, 2026",
			"Sale ends 11:59 PM PDT on October 14, 2026",
			"Snail tier: $29.99 - cosmetics only, no Founder's Access",
			"Orange Mushroom tier: $59.99 - includes Founder's Access starting October 6",
			"Zakum tier: $79.99 - full contents, only tier available on Steam",
			"All package items are cosmetic (no stats, any gender/job)",
			"Progression made during Founder's Access carries into Grand Launch",
		],
	},
	{
		slug: "nexon-founders-package-purchase-guide",
		title: "Founder's Package Purchase Guide",
		publisher: "NEXON",
		publishedOn: "September 2026",
		sourceType: "official-announcement",
		topics: ["Founder's Packages", "Steam", "Purchase Guide"],
		originalUrl:
			"https://www.nexon.com/maplestory/news/general/44883/founder-s-package-purchase-guide",
		archiveUrl:
			"https://web.archive.org/web/2026*/https://www.nexon.com/maplestory/news/general/44883/founder-s-package-purchase-guide",
		checkedOn: "2026-09-05",
		status: "current",
		summary:
			"Nexon's official guide covering the Nexon-web vs. Steam purchase paths, upgrade pricing between tiers (Nexon web only), the one-per-account/platform limit, and payment methods.",
		confirmedFacts: [
			"Purchase limit is one per account per platform",
			"Steam only offers the Zakum tier",
			"Upgrade paths exist on Nexon web: Snail->OM $30, Snail->Zakum $50, OM->Zakum $20",
			"Upgrades close 11:59 PM PDT on October 14, 2026",
			"Package items arrive in the in-game mailbox on first login",
			"Player must leave Maple Island before opening the package box",
		],
	},
	{
		slug: "nexon-ossyria-exploration-report",
		title: "Ossyria Exploration Report",
		publisher: "NEXON",
		publishedOn: "August 2026",
		sourceType: "official-announcement",
		topics: ["Launch", "Founder's Access", "Mark of Beta", "Timeline"],
		originalUrl:
			"https://www.nexon.com/maplestory/news/general/44359/ossyria-exploration-report",
		archiveUrl:
			"https://web.archive.org/web/20260821205944/https://www.nexon.com/maplestory/news/general/44359/ossyria-exploration-report",
		checkedOn: "2026-08-22",
		status: "current",
		summary:
			"Nexon's public announcement of the Classic World launch schedule, the Founder's Access period, and the limited-time Mark of Beta quest.",
		confirmedFacts: [
			"Founder's Packages go on sale September 2",
			"Founder's Access begins October 6",
			"Official launch is October 21",
			"A limited-time Mark of Beta quest will be available during launch",
		],
	},

	// Official COT2 release notes - the authoritative source for what
	// was tested during Closed Online Test 2, including the Citizenship
	// system introduction. Values from COT2 are labeled provisional until
	// verified against the live Classic World build.
	{
		slug: "nexon-cot2-release-notes",
		title: "Closed Online Test 2 Release Notes",
		publisher: "NEXON",
		publishedOn: "COT2 test window (2026)",
		sourceType: "closed-test-info",
		topics: ["Citizenship", "Skills", "Systems", "Balance", "Testing"],
		originalUrl:
			"https://www.nexon.com/maplestory/news/general/43432/closed-online-test-2-release-notes",
		checkedOn: "2026-08-22",
		status: "current",
		summary:
			"Official patch notes from Classic World's second Closed Online Test. Confirms the Citizenship system unlocks at level 12, describes town selection and progression, and lists other systems under test. Specific numeric values may still change before Founder's Access.",
		confirmedFacts: [
			"Citizenship system was introduced during COT2 and unlocks at level 12",
			"Players choose between Henesys and Kerning City for citizenship",
			"Only one active citizenship at a time",
		],
	},

	// Nexon COT1 release notes - the earlier test window that first
	// introduced Crafting as a Classic World system. Distinct from the
	// COT2 release notes; some systems (like Crafting Catalysts) got
	// their names/mechanics changed between the two tests.
	{
		slug: "nexon-cot1-release-notes",
		title: "Closed Online Test 1 Release Notes",
		publisher: "NEXON",
		publishedOn: "COT1 test window (2025-2026)",
		sourceType: "closed-test-info",
		topics: ["Crafting", "Systems", "Testing"],
		originalUrl:
			"https://www.nexon.com/maplestory/news/general/39217/closed-online-test-release-notes",
		checkedOn: "2026-08-22",
		status: "current",
		summary:
			"Official patch notes from Classic World's first Closed Online Test. Introduces the Crafting system across six disciplines. Some COT1 names and behaviors changed by COT2 (e.g. Equipment/Scroll Crafting Stimulator became distinct Catalyst items).",
		confirmedFacts: [
			"Crafting introduced as a Classic World system in COT1",
			"Six crafting disciplines exist (Smithing, Weaponcrafting, Tailoring, Woodcrafting, Leatherworking, Arcforge)",
		],
	},

	// NiaMeowDB Crafting hub - covers the recipe database, mastery/EXP
	// table, efficiency analysis, and COT1->COT2 changelog. One aggregate
	// entry rather than four near-duplicates; individual URLs cited inline
	// in the guide text.
	{
		slug: "niameowdb-crafting",
		title: "NiaMeowDB - Crafting System Database",
		publisher: "NiaMeowDB",
		publishedOn: "COT2 recording (2026)",
		sourceType: "closed-test-info",
		topics: [
			"Crafting",
			"Recipes",
			"Mastery",
			"Catalysts",
			"Materials",
			"Efficiency",
		],
		originalUrl: "https://meowdb.com/msclassic/crafting",
		checkedOn: "2026-08-22",
		status: "current",
		summary:
			"Community-maintained database of Classic World COT2 crafting data. Covers the full 348-recipe index, per-discipline recipe listings, the Mastery (crafting EXP) requirement table, NPC-value efficiency analysis, and the COT1-to-COT2 client changelog. Individual sub-pages (recipes, mastery table, efficiency analysis, changelog) are cited inline throughout the guide.",
		confirmedFacts: [
			"348 recipes recorded across 6 disciplines in COT2",
			"Recipe counts per discipline: Smithing 68, Weaponcrafting 45, Tailoring 59, Woodcrafting 43, Leatherworking 89, Arcforge 44 (COT2)",
			"Crafting capped at Level 10 in COT2 observations",
			"Mastery is gated by character level thresholds at each crafting rank (COT2)",
		],
	},

	// NiaMeowDB - community database that captured detailed COT2 data
	// including per-grade shop inventories, quest records, and contribution
	// values. Data reflects the test build and needs relaunch verification.
	{
		slug: "niameowdb-citizenship",
		title: "NiaMeowDB - Citizenship System Database",
		publisher: "NiaMeowDB",
		publishedOn: "COT2 recording (2026)",
		sourceType: "closed-test-info",
		topics: ["Citizenship", "Henesys", "Kerning City", "Shops", "Quests"],
		originalUrl: "https://meowdb.com/msclassic/citizenship",
		checkedOn: "2026-08-22",
		status: "current",
		summary:
			"Community-maintained database of Classic World COT2 data. Captured per-grade contribution requirements, shop inventories for both towns, story quest chains, and reward values. All figures should be treated as provisional until re-verified at launch.",
		confirmedFacts: [
			"Ten citizenship grades from Traveler (Grade 1) to Citizen of Honor (Grade 10) (COT2)",
			"Grade unlocks combine character level AND contribution requirements (COT2)",
			"Both towns have separate independent citizenship progression (COT2)",
		],
	},

	// v83-era historical archives. Used as the baseline research layer
	// for job guides, quests, and item data - EVERY claim traced back
	// here must be cross-checked at launch and labeled accordingly.
	{
		slug: "ayumilove-v83-warrior",
		title: "Ayumilove MapleStory Warrior Guide (v83 era)",
		publisher: "Ayumilove",
		publishedOn: "v83 era (approximate)",
		sourceType: "historical-archive",
		topics: ["Warrior", "Builds", "Skills", "AP allocation"],
		originalUrl: "https://ayumilove.net/maplestory/",
		checkedOn: "2026-08-22",
		status: "current",
		summary:
			"Long-running fan reference from the v83 era. Used as the baseline for Warrior playstyle and skill-order recommendations pending Classic World verification.",
		confirmedFacts: [
			"Warriors use STR as their primary damage stat (v83 baseline)",
			"First job advancement requires level 10 and 35 STR (v83 baseline)",
			"First job trainer is Dances with Balrog in Perion (v83 baseline)",
			"Second job branches are Fighter, Page, and Spearman (v83 baseline)",
		],
	},

	{
		slug: "ayumilove-v83-magician",
		title: "Ayumilove MapleStory Magician Guide (v83 era)",
		publisher: "Ayumilove",
		publishedOn: "v83 era (approximate)",
		sourceType: "historical-archive",
		topics: ["Magician", "Builds", "Skills", "AP allocation", "Magic Guard"],
		originalUrl: "https://ayumilove.net/maplestory/",
		checkedOn: "2026-08-22",
		status: "current",
		summary:
			"Long-running fan reference from the v83 era. Used as the baseline for Magician playstyle, Magic Guard priority, and second-job branch guidance pending Classic World verification.",
		confirmedFacts: [
			"Magicians use INT as their primary damage stat (v83 baseline)",
			"First job advancement requires level 8 and 20 INT (v83 baseline)",
			"First job trainer is Grendel the Really Old in Ellinia (v83 baseline)",
			"Second job branches are F/P Wizard, I/L Wizard, and Cleric (v83 baseline)",
			"Magic Guard converts a portion of damage taken into MP loss (v83 baseline)",
		],
	},

	{
		slug: "ayumilove-v83-bowman",
		title: "Ayumilove MapleStory Bowman Guide (v83 era)",
		publisher: "Ayumilove",
		publishedOn: "v83 era (approximate)",
		sourceType: "historical-archive",
		topics: ["Bowman", "Builds", "Skills", "AP allocation", "Bow", "Crossbow"],
		originalUrl: "https://ayumilove.net/maplestory/",
		checkedOn: "2026-08-22",
		status: "current",
		summary:
			"Long-running fan reference from the v83 era. Used as the baseline for Bowman playstyle, DEX allocation, and the Hunter/Crossbowman weapon-choice question at second job pending Classic World verification.",
		confirmedFacts: [
			"Bowmen use DEX as their primary damage stat (v83 baseline)",
			"First job advancement requires level 10 and 25 DEX (v83 baseline)",
			"First job trainer is Athena Pierce in Henesys (v83 baseline)",
			"Second job branches are Hunter (bow) and Crossbowman (crossbow) - only two branches, not three (v83 baseline)",
			"Weapon choice at 2nd job is permanent - a Bow-user cannot switch to Crossbow later (v83 baseline)",
		],
	},

	{
		slug: "ayumilove-v83-thief",
		title: "Ayumilove MapleStory Thief Guide (v83 era)",
		publisher: "Ayumilove",
		publishedOn: "v83 era (approximate)",
		sourceType: "historical-archive",
		topics: ["Thief", "Builds", "Skills", "AP allocation", "Assassin", "Bandit", "Lucky Seven"],
		originalUrl: "https://ayumilove.net/maplestory/",
		checkedOn: "2026-08-22",
		status: "current",
		summary:
			"Long-running fan reference from the v83 era. Used as the baseline for Thief playstyle, the DEX-for-advancement-but-LUK-for-damage stat quirk, and the Assassin/Bandit branch split at second job pending Classic World verification.",
		confirmedFacts: [
			"Thieves use LUK as their primary damage stat (v83 baseline)",
			"First job advancement requires level 10 and 25 DEX - DEX gates advancement even though LUK does damage (v83 baseline)",
			"First job trainer is The Dark Lord in Kerning City (v83 baseline)",
			"Second job branches are Assassin (throwing stars/claws) and Bandit (daggers) - only two branches, not three (v83 baseline)",
			"Lucky Seven damage scales purely off LUK, not weapon Attack - unique in the game (v83 baseline)",
			"Bandits gain Steal at 2nd job which forces additional drops from mobs (v83 baseline)",
		],
	},

	{
		slug: "hiddenstreet-v83-database",
		title: "HiddenStreet.net Database (v83 era)",
		publisher: "HiddenStreet",
		publishedOn: "v83 era (approximate)",
		sourceType: "historical-archive",
		topics: ["Items", "Monsters", "Maps", "Quests", "Drops"],
		originalUrl: "https://www.hidden-street.net/",
		checkedOn: "2026-08-22",
		status: "current",
		summary:
			"Comprehensive v83-era item, monster, and map database. Used as the baseline for reference data pending Classic World verification.",
		confirmedFacts: [],
	},

	// ohmi69's Classic World CoT 2 datamine dashboard. Publishes raw
	// JSON + PNG assets extracted directly from the CoT 2 client - so
	// this is closed-test data (subject to launch-day changes) but
	// it's ground-truth ripped from the client rather than curated
	// through Nexon's release-note filter. Perfect for reconciling
	// v83 historical assumptions against what CoT 2 actually shipped.
	{
		slug: "osmsdataexplorer",
		title: "OSMS Data Explorer - Classic World CoT 2 datamine",
		publisher: "ohmi69 (community datamine)",
		publishedOn: "Aug 11 2026 (CoT 2 patch 321d2f36)",
		sourceType: "closed-test-info",
		topics: [
			"Skills", "Items", "Equipment", "Monsters",
			"Crafting", "Quests", "Maps", "Cash Shop",
		],
		originalUrl: "https://osmsdataexplorer.com/",
		archiveUrl: "https://github.com/ohmi69/osms_datamine_dashboard",
		checkedOn: "2026-08-23",
		status: "current",
		summary:
			"Community-maintained data dashboard extracted directly from the Classic World CoT 2 client. Provides 163 skills with per-level stats + PNG icons, 712 items + 1,199 equipment with icons, 187 monsters with animated sprites, 348 crafting recipes with ingredients and meso costs, 322 quests with chains and rewards, and full patch notes. GitHub-mirrored so the dataset survives even if the live dashboard goes down.",
		confirmedFacts: [
			"CoT 2 contains 163 skills across 25 classes (datamined Aug 11 2026)",
			"CoT 2 contains 348 crafting recipes across 6 disciplines",
			"CoT 2 contains 322 quests organized into chains by region",
			"CoT 2 contains 712 non-equipment items and 1,199 equipment items",
			"Warrior 1st job in CoT 2 has 6 skills including new 'Precise Strikes'",
			"Archer 1st job in CoT 2 dropped 'Blessing of Amazon' and added 'Power Knockback'",
		],
	},
];

// Convenience accessor so pages can reference sources by slug without
// remembering array order. Callers get a clear runtime error if the slug
// is wrong, which is what we want.
export function getSource(slug: string): ArchivedSource {
	const found = sources.find((s) => s.slug === slug);
	if (!found) {
		throw new Error(`Unknown source slug: ${slug}`);
	}
	return found;
}
