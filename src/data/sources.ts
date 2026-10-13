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
	| "historical-archive"; /* archived wikis / fan sites from older MapleStory versions - NOT used as source-of-truth for CW claims */

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
		slug: "nexon-classic-world-faq",
		title: "MapleStory Classic World FAQ",
		publisher: "NEXON",
		publishedOn: "September 29, 2026",
		sourceType: "official-announcement",
		topics: [
			"Launch",
			"Pre-Download",
			"Account Linking",
			"macOS",
			"Controllers",
			"Cash Shop",
		],
		originalUrl:
			"https://www.nexon.com/maplestory/news/general/45385/maple-story-classic-world-faq",
		archiveUrl:
			"https://web.archive.org/web/2026*/https://www.nexon.com/maplestory/news/general/45385/maple-story-classic-world-faq",
		checkedOn: "2026-09-30",
		status: "current",
		summary:
			"Nexon's 23-question official FAQ covering everything from pre-download and macOS support to account linking, controllers, NX vs. Leaf Points, cross-game bans, and Signature Style transfers. Locks the exact launch times to 11:00 AM Pacific for both Founder's Access (Oct 6) and Grand Launch (Oct 21) - which corrected an earlier assumption on this site.",
		confirmedFacts: [
			"Founder's Access opens Tuesday, October 6, 2026 at 11:00 AM PDT",
			"Grand Launch opens Wednesday, October 21, 2026 at 11:00 AM PDT",
			"Both dates fall inside US Daylight Saving so offset is -07:00",
			"IGNs are NOT shared between MapleStory and MapleStory Classic World",
			"NX balance IS shared between the two games; Maple Points are not",
			"Account bans apply across both worlds - one game service",
			"macOS is supported via Nexon Launcher or Steam",
			"Officially supported controllers: DualSense, DualShock, Xbox",
			"Officially supported languages: English (Spanish in beta)",
			"You cannot run MapleStory and MapleStory Classic World at the same time",
			"MVP status does not exist in MapleStory Classic World",
			"Cash Shop items can be gifted to friends using NX",
			"Challenger World does not transfer to MapleStory Classic World",
			"Founder's Package mailbox items expire November 30, 2026 at 11:59 PM UTC",
			"Leaf Points are the alternative in-game Cash currency for Classic World",
		],
	},
	{
		slug: "nexon-founders-access-release-notes",
		title: "Founder's Access Release Notes",
		publisher: "NEXON",
		publishedOn: "October 3, 2026",
		sourceType: "official-announcement",
		topics: [
			"Founder's Access",
			"Level Cap",
			"Mark of Beta",
			"Content Availability",
			"Patch Notes",
		],
		originalUrl:
			"https://www.nexon.com/maplestory/news/general/45621/founder-s-access-release-notes",
		archiveUrl:
			"https://web.archive.org/web/2026*/https://www.nexon.com/maplestory/news/general/45621/founder-s-access-release-notes",
		checkedOn: "2026-10-03",
		status: "current",
		summary:
			"The definitive Founder's Access content manifest. Confirms the Lv. 100 hard cap at launch, enumerates the five bosses available (Mano, Mushmom, Shade, Zombie Mushmom, Jr. Balrog), spells out Forgotten Hollow's delay, locks Mark of Beta to Grand Launch (not Founder's Access), and lists the full crafting NPC roster plus Citizenship/Party-Quest level gates. Also publishes the Oct 6 server-open time as 6:00 PM UTC (= 11 AM PDT, matching the FAQ).",
		confirmedFacts: [
			"The maximum character level at Founder's Access is Lv. 100",
			"Up to 3 characters can be created per account; deletion has a waiting period before removal",
			"Server opens October 6, 2026 at 6:00 PM UTC (= 11:00 AM PDT, matches the FAQ)",
			"Founder's Access window: October 6, 2026 6:00 PM UTC through October 20, 2026 11:59 PM UTC",
			"Founder's Package purchase cutoff: October 14, 2026 at 11:59 PM PDT (per the article; timezone mismatch is Nexon's own)",
			"Only 1st Job Advancement (Lv. 10) and 2nd Job Advancement (Lv. 30) are documented; 3rd Job is not mentioned anywhere on the page",
			"1st Job NPCs: Dances with Balrog (Warrior/Perion), Grendel the Really Old (Magician/Ellinia), Athena Pierce (Bowman/Henesys), Dark Lord (Thief/Kerning City)",
			"Warrior 2nd Job paths: Fighter, Page, Spearman",
			"Magician 2nd Job paths: Wizard (Fire/Poison), Wizard (Ice/Lightning), Cleric",
			"Bowman 2nd Job paths: Hunter, Crossbowman",
			"Thief 2nd Job paths: Assassin, Bandit",
			"Forgotten Hollow will NOT be available during Founder's Access and will be added at a later unspecified date",
			"Five bosses are available during Founder's Access: Mano, Mushmom, Shade, Zombie Mushmom, Jr. Balrog",
			"Crafting unlocks at Lv. 10",
			"Crafting NPC roster: Silas Irons (Smithing), Mr. Thunder (Weaponcrafting), Francois (Tailoring), Vicious (Woodcrafting), JM From tha Streetz (Leatherworking), Chrishrama (Arcforge)",
			"Citizenship unlocks at Lv. 12; Arthur grants Henesys citizenship, Roxy grants Kerning City citizenship",
			"Citizenship benefits: special shop access, cab discount, storage keeper discount, general store discount",
			"First Time Together (Kerning City Party Quest) requires Lv. 21",
			"Beauty Album is a new feature that saves character hairstyles, face styles, and skin colors for reuse",
			"The Mark of Beta event begins at Grand Launch on October 21, 2026 (NOT at Founder's Access start as earlier framing implied)",
			"COT1 and COT2 participants who completed the '[Event] A Strange and Familiar Wood' and '[Event] Beyond the Unknown' quests can claim the Classic Beginnings Label/Chat Ring at Grand Launch",
			"Default key binding supports two presets: Classic Style and Modern Style (Modern supports WASD movement)",
			"Controller support is OFF by default; must be toggled on in Game Options. Only Xbox and PlayStation controllers are officially supported",
			"Four GM-run events during Founder's Access: Physical Fitness Challenge (Oct 7, 14), Coconut Harvest (Oct 12), Up and Up (Oct 9, 19), Monster Invasion (Oct 11, 16, 20)",
			"GM event eligibility: cannot own a Scroll of Secrets AND cannot have participated in a GM event in the past 24 hours",
			"Founder's First Step is a daily check-in reward quest (Lv. 10+) running the full Founder's Access window",
			"Day 1 Founder's First Step rewards include a Leaf Points (5,000) Exchange Coupon, Megaphones, Super Megaphones, 30x Red Potion, 30x Blue Potion",
			"No level-cap-raise schedule, XP curve details, or soft-cap mechanics are documented on this page",
			"No Known Issues section exists on this release-notes page",
		],
	},
	{
		slug: "nexon-inkwell-future-of-classic-world",
		title: "Inkwell on the Future of Global MapleStory and Classic World",
		publisher: "NEXON",
		publishedOn: "October 2, 2026",
		sourceType: "official-announcement",
		topics: [
			"Developer Interview",
			"Classic World",
			"Monetization",
			"Roadmap",
			"Design Philosophy",
		],
		originalUrl:
			"https://www.nexon.com/maplestory/news/general/45681/inkwell-on-the-future-of-global-maple-story-and-classic-world",
		archiveUrl:
			"https://web.archive.org/web/2026*/https://www.nexon.com/maplestory/news/general/45681/inkwell-on-the-future-of-global-maple-story-and-classic-world",
		checkedOn: "2026-10-03",
		status: "current",
		summary:
			"19-question interview with CPO Hanbyeol Oh (\"Inkwell\"), head of Global MapleStory. Covers Classic World's design philosophy (\"the beauty of taking it slow\"), the monetization commitment (cosmetics + convenience only - no stat or growth items in the Cash Shop), the dedicated development team structure (Nemi, Dr. Lim, and other MapleStory veterans), and roadmap teasers including a new boss in development and a MapleStory Fest October roadmap reveal. The most editorially significant Classic World publication to date.",
		confirmedFacts: [
			"Classic World and Global MapleStory are explicitly designed as complementary, not competing products",
			"Classic World is NOT a 1:1 recreation of early MapleStory - some content is adapted, some is new",
			"3rd Job and some regions will release sequentially where it makes sense, but NOT in original historical order",
			"Grand Launch (October 21) will include 'another completely new piece of content' beyond Forgotten Hollow and the Citizenship system",
			"A new boss is in development for post-launch release (not at Grand Launch)",
			"A detailed post-launch roadmap will be shared at MapleStory Fest in October 2026",
			"Monetization pledge: no Cash Shop items that directly affect character stats or growth; cosmetics and 'appropriate convenience items' only",
			"Classic World has its own dedicated development team, built WITHOUT reducing Global MapleStory's team",
			"Original MapleStory veterans Nemi (game design) and Dr. Lim (art direction) are directly involved in Classic World",
			"Classic World update cadence is intentionally slower than Global MapleStory - 'the beauty of taking it slow'",
			"macOS support, controller support, and multilingual support are treated as foundational long-term investments, not short-term launch features",
			"The team's planning horizon is explicitly 3, 5, and 10 years out - not just the first few months after launch",
			"'Hyper-localization' is the broader Global MapleStory strategy framework; Classic World is one implementation of it",
			"Classic World is intended to be a new entry point into the MapleStory universe for both returning and new players, not a replacement for Global MapleStory",
			"Forgotten Hollow and the Citizenship system are confirmed as Classic-World-exclusive content (first introduced during Closed Online Test 2)",
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

	// Nexon Founder's Mystery Fashion Crate rates - the primary source
	// for per-item drop percentages. Nexon publishes the complete 50-row
	// weighted pool as a dedicated "RATES" post, separate from the sale
	// announcement. The outfit groupings on the sale page don't carry
	// percentages; those live here.
	{
		slug: "nexon-founders-fashion-crate-rates",
		title: "Founder's Mystery Fashion Crate Rates",
		publisher: "NEXON",
		publishedOn: "October 5, 2026",
		sourceType: "official-announcement",
		topics: [
			"Cash Shop",
			"Mystery Fashion Crate",
			"Drop Rates",
			"Founder's Access",
		],
		originalUrl:
			"https://www.nexon.com/maplestory/general-post/45538",
		archiveUrl:
			"https://web.archive.org/web/2026*/https://www.nexon.com/maplestory/general-post/45538",
		checkedOn: "2026-10-11",
		status: "current",
		summary:
			"The authoritative per-item drop-rate table for the Founder's Mystery Fashion Crate. All 50 items listed with their nominal percentages (16 at 1.00%, 4 at 2.00%, 28 at 2.50%, 2 at 3.00%). Nexon's rounding disclaimer notes that displayed values may not sum to exactly 100%.",
		confirmedFacts: [
			"The Founder's Mystery Fashion Crate reward pool contains 50 items",
			"Nexon's published rate histogram: 16 x 1.00%, 4 x 2.00%, 28 x 2.50%, 2 x 3.00%",
			"Nominal rate sum = 100.00%; Nexon disclaims rounding",
			"Patissier Hat and Patissier Uniform share the highest per-item rate at 3.00% each",
			"The 1.00% tier is the 'rare' bucket (16 items), containing Angel Halo, Toga, Baby Angel Wings, Angel Wand, Cherub's Bow, Orange Toy Hammer, Black Sunglasses, Dollish Pink, Bunny Ears, Bunny Earmuffs, Orange Mushroom Balloon, Slime T-Shirt, Slime Slippers, Slime Earrings, Yellow Spatula, White Label Ring",
			"Weapon-cover equips (any weapon): Angel Wand, Orange Toy Hammer, Yellow Spatula",
			"Weapon-cover equip (bows only): Cherub's Bow",
			"Nexon does NOT label items with common/rare/epic tiers; the pool is a flat weighted list",
		],
	},

	// Nexon Aurora Mystery Fashion Crate rates - sibling crate purchased
	// with Aurora Stamps (which are earned from duping Founder's crates).
	// Smaller pool (26 items) and flatter distribution than Founder's.
	// Note: Nexon's sale page has a broken link that routes to the
	// Dyeable Items list (45821) instead of this rates page.
	{
		slug: "nexon-aurora-fashion-crate-rates",
		title: "Aurora Mystery Fashion Crate Rates",
		publisher: "NEXON",
		publishedOn: "October 5, 2026",
		sourceType: "official-announcement",
		topics: [
			"Cash Shop",
			"Mystery Fashion Crate",
			"Drop Rates",
			"Aurora Stamps",
		],
		originalUrl:
			"https://www.nexon.com/maplestory/general-post/45659",
		archiveUrl:
			"https://web.archive.org/web/2026*/https://www.nexon.com/maplestory/general-post/45659",
		checkedOn: "2026-10-11",
		status: "current",
		summary:
			"The per-item drop-rate table for the Aurora Mystery Fashion Crate - purchased with Aurora Stamps rather than NX directly. 26-item pool with a markedly flatter distribution than Founder's (rarest 1.50%, commonest 5.75%). Includes the Ink-and-Wash rings, Starlight/Chocolate scepters, and Black Cat Beanie that meso.watch highlights as live Windia crate pulls.",
		confirmedFacts: [
			"The Aurora Mystery Fashion Crate reward pool contains 26 items",
			"Price: 20 Aurora Stamps for 1, 200 Aurora Stamps for 10",
			"Nexon's published rate histogram: 2 x 1.50%, 5 x 2.00%, 4 x 2.50%, 2 x 4.50%, 9 x 5.00%, 4 x 5.75%",
			"Nominal rate sum = 100.00%",
			"Four Ink-and-Wash and Chocolate ring variants share the highest rate at 5.75% each",
			"The 1.50% rarest tier: White Choco Bunny, Soft Chocolate Fondue Scepter",
			"Sale window: October 6, 2026 (EoM UTC) through January 13, 2027 at 7:59 AM UTC - matches the Aurora Stamp Shop Season 1 window",
			"Weapon-cover equips (any weapon): Soft Chocolate Fondue Scepter, Starlight Heart Scepter, Detective Glass",
		],
	},

	// Nexon cash-shop sale announcement for the Founder's Access window.
	// Houses the mechanics that aren't on the dedicated rate pages:
	// pricing (NX cost per crate and 11-pack), sale window, 7-day item
	// duration, the dupe -> Aurora Stamp conversion that creates the
	// crate economy loop, region blocks, and gifting restrictions.
	{
		slug: "nexon-founders-access-cash-shop-sale",
		title: "Founder's Access Cash Shop Sale",
		publisher: "NEXON",
		publishedOn: "October 5, 2026",
		sourceType: "official-announcement",
		topics: [
			"Cash Shop",
			"Mystery Fashion Crate",
			"Aurora Stamps",
			"Region Restrictions",
			"Founder's Access",
		],
		originalUrl:
			"https://www.nexon.com/maplestory/news/sale/45819",
		archiveUrl:
			"https://web.archive.org/web/2026*/https://www.nexon.com/maplestory/news/sale/45819",
		checkedOn: "2026-10-11",
		status: "current",
		summary:
			"The umbrella sale post covering the Founder's Access cash shop lineup. Documents the Founder's Mystery Fashion Crate pricing (3,500 NX for 1 / 35,000 NX for 11), 7-day duration on obtained equips, the dupe-to-Aurora-Stamp conversion mechanic, region-specific restrictions (BE/SK/BR cannot purchase; NL purchases are account-bound), gifting requirements (recipient must be Lv. 12+), and sale window.",
		confirmedFacts: [
			"Founder's Mystery Fashion Crate price: 3,500 NX for 1, 35,000 NX for 11 (buy-10-get-1-free)",
			"Founder's Mystery Fashion Crate sale window: October 6, 2026 (end of maintenance, UTC) through October 28, 2026 at 7:59 AM UTC",
			"Items pulled from the crate expire 7 days after being pulled",
			"Right-click an unwanted reward BEFORE equipping to convert it into 1 Aurora Stamp",
			"The dupe-to-Aurora-Stamp conversion is the only pity-equivalent mechanic; there is no 'guaranteed epic in N crates' system",
			"Aurora Stamp Shop Season 1 window: October 6, 2026 (EoM UTC) through January 13, 2027 at 7:59 AM UTC",
			"Belgium, Slovakia, and Brazil cannot purchase Mystery items at all",
			"Netherlands can purchase but Mystery items become account-bound",
			"Gifting any Cash Shop item requires the recipient to be Lv. 12+",
			"The crate is a direct NX cash-shop purchase; it is NOT bundled with any Founder's Pack tier",
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

	// ohmi69's Classic World CoT 2 datamine dashboard. Publishes raw
	// JSON + PNG assets extracted directly from the CoT 2 client -
	// this is Founder's-Access-era client data (CoT 2 build; the FA
	// Oct 6 live build is a direct descendant). Primary source of truth
	// for all item IDs, mob stats, map layouts, quest definitions.
	//
	// NOTE 2026-10-12: five historical-archive source blocks were
	// REMOVED as part of the FA-source-of-truth cleanup:
	//   - ayumilove-{warrior,magician,bowman,thief} (older-version guides)
	//   - hiddenstreet-database (older-version item DB)
	// Classic World diverges from pre-FA MapleStory versions in enough
	// places (unified 1st-job Lv 10, no HP wash, 1.25x elemental
	// multiplier, reworked KPQ mechanics) that treating those versions
	// as a baseline produces drift. All class-guide content now sources
	// from the datamine + post-Oct-6-2026 CW community sources
	// (MapleClassic Wiki, MeowDB, MMOJUGG, MapleStory Quest,
	// Henesys.gg) + Nexon's own release notes.
	//
	// If someone needs historical context from an older MapleStory
	// version for a one-off piece, pull it from Wayback snapshots at
	// the time of writing with explicit '(historical, not Classic World)'
	// labels. Do NOT re-add historical-archive sources to this registry
	// as if they were authoritative for CW claims.
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

	// Eleveny is a Classic World closed-online tester who published
	// an in-depth training-map tour after playing through CoT 2. The
	// video is our primary source for map-level layout commentary,
	// party-fit calls, and Classic-World-specific mob behavior notes
	// (accuracy leniency, KPQ EXP nerf, exp-to-HP falloff past L60).
	// Cross-verified against the CoT 2 datamine for mob rosters and
	// drop tables.
	{
		slug: "eleveny-training-guide",
		title: "Eleveny - Classic World Training Guide (YouTube)",
		publisher: "Eleveny (CoT 2 closed-online tester)",
		publishedOn: "CoT 2 test window (2026)",
		sourceType: "community-reported",
		topics: ["Maps", "Monsters", "Drops", "Training", "Party Play"],
		originalUrl: "https://www.youtube.com/watch?v=-WmSz0pQkUo",
		checkedOn: "2026-09-23",
		status: "current",
		summary:
			"22-minute video walking through every training map Eleveny considers strongest across Victoria Island, Sleepywood, and Forgotten Hollow from L10 to L70. Covers map layout, mob composition, party-size fit, and per-map key drops. Also documents Classic-World-specific rebalances Eleveny observed in play (reduced KPQ EXP, more forgiving accuracy checks at low levels, exp-to-HP falloff past L60).",
		confirmedFacts: [
			"KPQ EXP rewards in Classic World are substantially lower than traditional MapleStory values",
			"Accuracy requirements at low levels in Classic World are more forgiving than traditional MapleStory",
			"Monster EXP-to-HP ratios fall off sharply once players cross L60",
			"Level 10 weapons NPC-sell for MORE mesos in Classic World than their original client values",
		],
	},
	{
		slug: "reddit-xbucc-complete-builds",
		title: "Complete Builds for all Classes - 1st & 2nd Job",
		publisher: "u/xBucc on r/MSClassicWorld",
		publishedOn: "October 2, 2026",
		sourceType: "community-reported",
		topics: ["Builds", "Skill Allocation", "F2P"],
		originalUrl:
			"https://www.reddit.com/r/MSClassicWorld/comments/1wvx41t/complete_builds_for_all_classes_1st_2nd_job/",
		archiveUrl:
			"https://web.archive.org/web/2026*/https://www.reddit.com/r/MSClassicWorld/comments/1wvx41t/",
		checkedOn: "2026-10-03",
		status: "current",
		summary:
			"Community-authored 1-page SP build infographics for all classes (1st and 2nd job), aimed at F2P + bossing focus with no SP resets planned. Includes a linked Google Sheet with per-skill rationale. 540+ upvotes but contested in the top comments: OP acknowledged the Archer section is wrong, and the Magician, Thief, Warrior, and Page builds all drew substantive critiques from highly-upvoted replies. Linked from /guides/community-resources with an honest framing of what the resource is and isn't.",
		confirmedFacts: [
			"OP (u/xBucc) acknowledged the Archer builds are incorrect and amended them in the linked spreadsheet (NOT in the original Reddit images)",
			"Top-upvoted critique (66 pts): Magician builds max Magic Claw too early, causing mana-cost problems during leveling",
			"Top-upvoted critique (39 pts): Assassin builds do not max Dark Sight",
			"Top-upvoted critique (32 pts): Page builds skip HP recovery in favor of Precise Strikes; hybrid Page builds give up Final Attack",
			"Top-upvoted critique (28 pts): All Warrior builds max both weapon mastery and booster but skip Final Attack entirely",
			"Community debate: whether F2P should prioritize meso-efficient leveling (cheaper potions) over bossing-ready endgame SP",
			"The resource is one person's opinion, not datamine-verified; use it as a starting point for comparison, not as authority",
		],
	},
	{
		slug: "msclassic-wiki-elemental-125x",
		title: "Elemental Damage has been changed to 1.25x",
		publisher: "Lunitidal (msclassic.wiki moderator)",
		publishedOn: "January 27, 2026",
		sourceType: "community-reported",
		topics: ["Elemental damage", "Mage mechanics", "CoT 2 playtest"],
		originalUrl:
			"https://msclassic.wiki/forums/general-discussion/elemental-damage-has-been-changed-to-125x-tqhroi",
		checkedOn: "2026-10-11",
		status: "current",
		summary:
			"Playtest-math-verified confirmation from msclassic.wiki moderator Lunitidal that Classic World rebalanced the elemental damage multiplier down to 1.25x (from the traditional MapleStory 1.5x) during Closed Online Test 2. Observed via direct damage testing against fire-weak Ligators and ice-weak content. The reduction is the single most impactful mage-balance change in CoT 2: elemental weapon choice still matters but with ~17% less weight than the traditional multiplier would suggest.",
		confirmedFacts: [
			"Elemental damage multiplier in Classic World is 1.25x (traditional MapleStory used 1.5x)",
			"Change confirmed via direct playtest math against fire-weak Ligators",
			"Mage weapon picks shift toward 'high raw MATK' over 'match element at any cost'",
			"Change was present in Closed Online Test 2 (Jan 2026) and carried into Founder's Access",
		],
	},
	{
		slug: "msclassic-wiki-victoria-leveling",
		title: "Leveling routes with just Victoria",
		publisher: "msclassic.wiki community (Tsukino, Lunitidal, Xeta, Dyno)",
		publishedOn: "January 14 - February 4, 2026",
		sourceType: "community-reported",
		topics: ["Training routes", "Forgotten Hollow", "Party XP", "CoT 2 playtest"],
		originalUrl:
			"https://msclassic.wiki/forums/general-discussion/leveling-routes-with-just-victoria-z825hp",
		checkedOn: "2026-10-11",
		status: "current",
		summary:
			"Multi-user thread on msclassic.wiki laying out training routes for Classic World's Founder's Access when only Victoria Island + Forgotten Hollow are accessible. Confirmed observations: Forgotten Hollow fills the L30-50 content gap that traditional MapleStory Victoria-only runs famously struggle with (Curse Eye territory starts ~Lv 35, deeper golem maps ~Lv 50); Classic World's party XP buff ranges from +35% to +170% depending on composition. Thread participants include WIKI mod Lunitidal and tester Tsukino.",
		confirmedFacts: [
			"Forgotten Hollow starts around Lv 35 (Curse Eye maps) and extends to Lv 50 (deeper golem maps) in CoT 2",
			"Party XP buff in Classic World is +35% to +170% depending on composition",
			"Lv 1-50 took approximately 82.5 hours over 9 days in closed beta on I/L mage (chaomoonx, r/Maplestory)",
			"Henesys Hunting Ground 1-2 is traditional Lv 10-15 but becomes a 'war zone' at launch due to competition; interior Victoria maps are quieter alternatives",
			"Victoria-Island-only training works through Lv 50 thanks to Forgotten Hollow addition; the traditional MapleStory 30-50 gap is addressed",
		],
	},
	{
		slug: "reddit-everything-changed-cot2",
		title: "Everything that has changed for Classic World 2nd playtest",
		publisher: "r/Maplestory community",
		publishedOn: "October 2025",
		sourceType: "community-reported",
		topics: ["CoT 2 changes", "HP wash", "Earring crit damage", "Game mechanics"],
		originalUrl:
			"https://www.reddit.com/r/Maplestory/comments/1qhgi8x/",
		checkedOn: "2026-10-11",
		status: "current",
		summary:
			"r/Maplestory community compilation of changes between CoT 1 and CoT 2 for Classic World. The two mechanical changes with biggest gear-progression implications: HP washing was removed entirely (Bishops/Night Lords/Buccaneers can no longer trade MP into HP), and earrings gained a new crit-damage stat line (new to Classic World). Earring farming becomes a damage upgrade path rather than just a stat stick.",
		confirmedFacts: [
			"HP washing mechanic is removed from Classic World (confirmed in 2nd playtest)",
			"Earring items can now roll a crit-damage stat line (new in Classic World)",
			"Players should invest mesos into gear scrolling, not into AP wash potions",
			"Earring scrolling priority shifted upward due to new damage line",
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
