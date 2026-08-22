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
	{
		question: "What is the exact launch opening time?",
		category: "Timing",
		detail:
			"October 21 is confirmed as the official launch date, but the time of day servers open has not been announced.",
		expectedFrom: "Nexon pre-launch announcement",
	},
	{
		question: "What are the Founder's Package tiers, pricing, and contents?",
		category: "Founder's Access",
		detail:
			"The Ossyria Exploration Report confirmed Founder's Packages exist and go on sale September 2, but did not list tiers, prices, or included items.",
		expectedFrom: "Nexon Founder's Package reveal",
	},
	{
		question: "Does Founder's Access progression carry into official launch?",
		category: "Founder's Access",
		detail:
			"Whether characters, items, and progression from Founder's Access (October 6-20) persist through the October 21 official launch has not been explicitly stated.",
		expectedFrom: "Nexon Founder's Access FAQ",
	},
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
			"Closed-test builds often differ from launch builds. No changelog comparing Closed Online Test 2 to the launch build has been published.",
		expectedFrom: "Nexon patch notes at or before Founder's Access",
	},
];
