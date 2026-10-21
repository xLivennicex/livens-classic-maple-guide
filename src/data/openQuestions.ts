// Explicit list of things we do NOT yet know. Being transparent about
// unknowns is one of the site's core differentiators - guessing here
// undermines the whole accuracy pitch.
//
// When Nexon publishes an answer, move the entry OUT of this list and
// record the new source in src/data/sources.ts.

export type QuestionCategory =
	| "Timing"
	| "Founder's Access"
	| "Mark of Beta"
	| "Rewards"
	| "Systems";

export interface OpenQuestion {
	question: string;
	category: QuestionCategory;
	detail?: string;
	// Where we expect the answer to come from, so readers know what to
	// watch for.
	expectedFrom?: string;
}

export const openQuestions: OpenQuestion[] = [
	// RESOLVED 2026-09-02 - tier / pricing / contents revealed in
	// "Founder's Packages Now On Sale" (nexon-founders-packages-on-sale).
	// RESOLVED 2026-09-02 - Nexon explicitly confirmed progression
	// carryover in the same announcement.
	// RESOLVED 2026-09-29 - exact launch opening time revealed in the
	// Nexon Classic World FAQ (both Founder's Access and Grand Launch
	// open at 11:00 AM PDT; see nexon-classic-world-faq source).
	// RESOLVED 2026-10-20 - Mark of Beta requirements: the Grand Launch
	// release notes name the quest ('[Event] The Marks We Leave Behind'),
	// giver (Jay, Henesys), level (25+), and window (Oct 21 - Nov 18).
	// RESOLVED 2026-10-20 - Grand Launch keeps the Lv. 100 cap (same
	// source). The raise schedule is still open - see below.
	// Source for both: nexon-grand-launch-release-notes.
	// Kept as comments for archaeology; delete when this file gets big.
	{
		question: "When does the Lv. 100 cap raise, and when does 3rd Job arrive?",
		category: "Systems",
		detail:
			"The Grand Launch release notes keep the maximum level at Lv. 100 and document only the Lv. 10 and Lv. 30 job advancements - 3rd Job is not part of Grand Launch. Inkwell's Oct 2 interview said 3rd Job and some regions will release sequentially after launch, not in original historical order. No date or cadence has been published.",
		expectedFrom: "MapleStory Fest October roadmap reveal, or a future patch's release notes",
	},
	{
		question: "What date in November does Forgotten Hollow open?",
		category: "Timing",
		detail:
			"Partially answered. The Grand Launch release notes say Forgotten Hollow won't be open at Grand Launch and opens in November. No exact date has been given.",
		expectedFrom: "November patch notes",
	},
	{
		question: "Is the Mark of the Beta per character or per account?",
		category: "Mark of Beta",
		detail:
			"The Grand Launch release notes describe how to earn the Mark of the Beta (Lv. 25+, start with Jay in Henesys, Oct 21 - Nov 18) but not whether each character can earn one or whether it is account-bound or tradable.",
		expectedFrom: "In-game verification after launch",
	},
	{
		question: "What is the full post-launch content roadmap?",
		category: "Systems",
		detail:
			"Inkwell confirmed on Oct 2 that a new boss is in development and that 3rd Job plus some regions will release sequentially (though NOT in original historical order). A detailed post-launch roadmap will be shared at MapleStory Fest in October 2026.",
		expectedFrom: "MapleStory Fest, October 2026",
	},
];
