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
			"Partially answered. The Oct 3 release notes confirmed Mark of Beta begins at Grand Launch (October 21), not during Founder's Access, and runs through late November. Specific quest tasks, reward chain, and per-character-vs-per-account eligibility rules are still unpublished.",
		expectedFrom: "Nexon follow-up patch notes before Grand Launch",
	},
	{
		question: "When does the Lv. 100 cap raise, and will Grand Launch keep the same cap?",
		category: "Systems",
		detail:
			"The Oct 3 release notes confirmed a hard Lv. 100 cap during Founder's Access, with no documented soft-cap or XP-curve throttling. Nexon has NOT published whether this cap persists at Grand Launch (Oct 21), whether it raises for Ossyria-region content, or on what cadence. Inkwell's Oct 2 interview framed 3rd Job as 'sequential, not at launch.'",
		expectedFrom: "Nexon patch notes closer to Grand Launch or MapleStory Fest October roadmap reveal",
	},
	{
		question: "When will Forgotten Hollow become available?",
		category: "Systems",
		detail:
			"The Oct 3 release notes explicitly withheld Forgotten Hollow from Founder's Access ('the path leading there hasn't been discovered yet! We plan to add this at a later date'). Inkwell on Oct 2 teased 'another completely new piece of content' at Grand Launch - whether Forgotten Hollow IS that content, or is scheduled separately, has not been clarified.",
		expectedFrom: "Nexon patch notes between Founder's Access and Grand Launch",
	},
	{
		question: "What is the full post-launch content roadmap?",
		category: "Systems",
		detail:
			"Inkwell confirmed on Oct 2 that a new boss is in development and that 3rd Job plus some regions will release sequentially (though NOT in original historical order). A detailed post-launch roadmap will be shared at MapleStory Fest in October 2026.",
		expectedFrom: "MapleStory Fest, October 2026",
	},
];
