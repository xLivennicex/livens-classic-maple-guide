// Archived source index. Every published claim on the site should be
// traceable back to one of these entries. Keep the array append-only in
// spirit: when a source is replaced, mark it superseded and add the
// new one, so the history remains browsable.

export type SourceType =
	| "official-announcement"
	| "closed-test-info"
	| "launch-verified"
	| "community-reported"
	| "awaiting-confirmation";

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

	// Placeholder entry - kept in place to model closed-test-info labeling.
	// Populate originalUrl once the release notes link is confirmed, then
	// fill in publishedOn and confirmedFacts.
	{
		slug: "nexon-cot2-release-notes",
		title: "Closed Online Test 2 Release Notes",
		publisher: "NEXON",
		publishedOn: "URL pending",
		sourceType: "closed-test-info",
		topics: ["Skills", "Systems", "Balance", "Testing"],
		originalUrl: null,
		checkedOn: "2026-08-22",
		status: "current",
		summary:
			"Official patch notes from Classic World's second Closed Online Test. Describes the state of systems during testing; specific values may still change before Founder's Access.",
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
