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
	// Kept as comments for archaeology; delete when this file gets big.
	{
		question: "What are the exact Mark of Beta requirements and rewards?",
		category: "Mark of Beta",
		detail:
			"The quest is confirmed to run through late November as a limited-time event, but the specific tasks, reward chain, and eligibility rules have not been detailed publicly.",
		expectedFrom: "Nexon quest details or in-game data at Founder's Access launch",
	},
	{
		question: "Which systems will change between COT2 and launch?",
		category: "Systems",
		detail:
			"Closed-test builds often differ from launch builds. Inkwell confirmed on Oct 2 that Grand Launch will include 'another completely new piece of content' beyond Forgotten Hollow and the Citizenship system, but no changelog comparing COT2 to the launch build has been published.",
		expectedFrom: "Nexon patch notes at or before Founder's Access",
	},
	{
		question: "What is the full post-launch content roadmap?",
		category: "Systems",
		detail:
			"Inkwell confirmed on Oct 2 that a new boss is in development and that 3rd Job plus some regions will release sequentially (though NOT in original historical order). A detailed post-launch roadmap will be shared at MapleStory Fest in October 2026.",
		expectedFrom: "MapleStory Fest, October 2026",
	},
];
