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
