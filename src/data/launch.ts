// Launch milestones. Keep dates here so the announcement bar, hero card,
// countdown timers, and any future widget all read from the same list.

export interface LaunchMilestone {
	date: string;
	event: string;
}

export const launchDates: LaunchMilestone[] = [
	{ date: "September 2", event: "Founder's Packages on sale" },
	{ date: "October 6", event: "Founder's Access launch" },
	{ date: "October 14", event: "Founder's Package sale ends" },
	{ date: "October 21", event: "Official launch" },
];

// Used by the top announcement bar. Keep it short.
export const nextMilestoneHeadline = "Founder's Packages on sale - ends October 14";

// Precise countdown targets. Time is estimated at 11 AM Eastern Time
// unless we have a hard deadline (like the sale-end at PDT midnight).
// October 6 and October 21 both fall inside US Daylight Saving Time
// (which ends the first Sunday of November), so the offset is -04:00,
// not -05:00. Sale end is a Nexon-published hard deadline in PDT.
// If Nexon announces a different opening time, change these
// constants and everything downstream updates.
export interface CountdownTarget {
	label: string;
	iso: string;
	sublabel: string;
}

export const countdownTargets: {
	foundersAccess: CountdownTarget;
	officialLaunch: CountdownTarget;
	packageSaleEnds: CountdownTarget;
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
	packageSaleEnds: {
		label: "Founder's Package sale ends",
		iso: "2026-10-15T06:59:00Z",  // 11:59 PM PDT Oct 14 = 06:59 UTC Oct 15
		sublabel: "Ends 11:59 PM Pacific - October 14",
	},
};

// ==================== Founder's Packages (Nexon official) ====================
//
// Source: https://www.nexon.com/mscw/pre-launch-sales
// Verified via nexon.com/maplestory/news posts 44134 (sale opening)
// and 44883 (purchase guide), both dated 2026-09-02.
//
// Contents are cosmetic-only per Nexon: no stats, usable by any
// gender/job, no weapon restrictions. Purchase limit is one per
// account per platform (once on Nexon web, once on Steam - Steam
// only offers Zakum). Not giftable. Package items delivered to
// in-game mailbox on first Classic World login; player must leave
// Maple Island before opening the package box.

export interface FoundersPackageTier {
	slug: string;
	name: string;
	priceUSD: number;
	priceEUR: number;
	priceGBP: number;
	tagline: string;
	foundersAccess: boolean;
	steamAvailable: boolean;
	badge?: "best-value" | "starter";
	includes: string[];  // headline items (not the full 15-line list)
	newInTier: string[]; // items UNIQUE to this tier vs. the lower one
}

export const foundersPackages: FoundersPackageTier[] = [
	{
		slug: "snail",
		name: "Snail",
		priceUSD: 29.99, priceEUR: 29.99, priceGBP: 25.99,
		tagline: "The essentials. Play at Grand Launch (October 21).",
		foundersAccess: false,
		steamAvailable: false,
		badge: "starter",
		includes: [
			"Mark of the Founder (Tan) hat",
			"Glimmer of the Founder effect",
			"Jr. Balrog Invasion x50 (90-day consumable)",
			"Well-Loved Outfit Set - 6 pieces",
		],
		newInTier: [
			"Mark of the Founder (Tan) hat",
			"Glimmer of the Founder effect",
			"Jr. Balrog Invasion x50",
			"Well-Loved Outfit Set (Frozen Tuna, Brown Bamboo Hat, Pan Lid, White & Blue Sandals, Blue Sauna Robe, Work Gloves)",
		],
	},
	{
		slug: "orange-mushroom",
		name: "Orange Mushroom",
		priceUSD: 59.99, priceEUR: 59.99, priceGBP: 51.99,
		tagline: "Everything in Snail + Founder's Access on October 6.",
		foundersAccess: true,
		steamAvailable: false,
		includes: [
			"Everything in the Snail tier",
			"Founder's Access (October 6)",
			"Mark of the Founder (Brown) hat",
			"Glow of the Founder effect",
			"Founder's Thief Outfit Set",
		],
		newInTier: [
			"Founder's Access (start playing October 6)",
			"Mark of the Founder (Brown) hat",
			"Glow of the Founder effect",
			"Founder's Thief Outfit Set (Hat, Outfit, Boots, Dagger, Face, Gloves)",
		],
	},
	{
		slug: "zakum",
		name: "Zakum",
		priceUSD: 79.99, priceEUR: 79.99, priceGBP: 69.99,
		tagline: "The full haul. Only tier available on Steam.",
		foundersAccess: true,
		steamAvailable: true,
		badge: "best-value",
		includes: [
			"Everything in the Orange Mushroom tier",
			"Mark of the Founder (Black) hat",
			"Radiance of the Founder effect",
			"Manji's Outfit Set - 5 pieces",
			"Founder's Chat Ring + Founder's Label Ring",
		],
		newInTier: [
			"Mark of the Founder (Black) hat",
			"Radiance of the Founder effect",
			"Manji's Outfit Set (Bamboo Hat, Clothes, Reticent Steps boots, Manji's Blade, Silent Sea of Clouds cape)",
			"Founder's Chat Ring",
			"Founder's Label Ring",
		],
	},
];

// Upgrade path pricing (Nexon webstore only, before Oct 14 deadline).
// Not available on Steam. From nexon.com/maplestory/news/general/44883.
export const upgradePrices = {
	"snail->orange-mushroom": 30.0,
	"snail->zakum": 50.0,
	"orange-mushroom->zakum": 20.0,
} as const;

// Canonical purchase link. Old maplestory.nexon.net redirects here.
export const foundersPackageBuyUrl = "https://www.nexon.com/mscw/pre-launch-sales";

// Nexon news posts we cite. Slugs match src/data/sources.ts entries
// we'll add for citation trails on the /launch page.
export const foundersPackageSources = [
	"nexon-founders-packages-on-sale",
	"nexon-founders-package-purchase-guide",
] as const;
