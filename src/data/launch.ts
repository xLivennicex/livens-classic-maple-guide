// Launch milestones. Keep dates here so the announcement bar, hero card,
// countdown timers, and any future widget all read from the same list.

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

// Precise countdown targets. Time is estimated at 11 AM Eastern Time.
// October 6 and October 21 both fall inside US Daylight Saving Time
// (which ends the first Sunday of November), so the offset is -04:00,
// not -05:00. If Nexon announces a different opening time, change these
// two constants and everything downstream updates.
export interface CountdownTarget {
	label: string;
	iso: string;
	sublabel: string;
}

export const countdownTargets: {
	foundersAccess: CountdownTarget;
	officialLaunch: CountdownTarget;
} = {
	foundersAccess: {
		label: "Founder's Access",
		iso: "2026-10-06T11:00:00-04:00",
		sublabel: "Estimated 11:00 AM Eastern - October 6",
	},
	officialLaunch: {
		label: "Official Launch",
		iso: "2026-10-21T11:00:00-04:00",
		sublabel: "Estimated 11:00 AM Eastern - October 21",
	},
};
