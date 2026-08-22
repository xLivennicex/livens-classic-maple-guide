// Launch milestones. Keep dates here so the announcement bar, hero card,
// and any future countdown widget all read from the same list.

export interface LaunchMilestone {
	date: string;
	event: string;
}

export const launchDates: LaunchMilestone[] = [
	{ date: "September 2", event: "Founder's Packages on sale" },
	{ date: "October 6", event: "Founder's Access launch" },
	{ date: "October 21", event: "Official launch" },
];

// Used by the top announcement bar. Keep it short.
export const nextMilestoneHeadline = "Founder's Access begins October 6";
