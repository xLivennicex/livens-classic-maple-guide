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
export const nextMilestoneHeadline = "Nexon published the launch FAQ - Founder's Access opens October 6";

// Precise countdown targets. Times confirmed by Nexon's Sep 29 2026
// launch FAQ (URL in launchFaqUrl below). Both Founder's Access and
// Grand Launch open at 11:00 AM PACIFIC time (PDT = UTC-7 during DST
// - DST ends first Sunday of November so both dates fall inside it).
//
// Sprint 100 correction: previous values used -04:00 (Eastern) with a
// stale "Estimated 11 AM Eastern" sublabel. That was a pre-FAQ guess
// and would have fired the countdown 3 hours EARLY. Nexon's FAQ
// explicitly lists 11 AM PDT (2 PM EDT / 8 PM CEST / 4 AM AEST Oct 7
// / Oct 22) so we now use the authoritative -07:00.
//
// Sale-end was already correct (11:59 PM PDT = 06:59 UTC next day).
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
		iso: "2026-10-06T11:00:00-07:00",
		sublabel: "11:00 AM Pacific - October 6 (2 PM Eastern, 8 PM CEST)",
	},
	officialLaunch: {
		label: "Grand Launch",
		iso: "2026-10-21T11:00:00-07:00",
		sublabel: "11:00 AM Pacific - October 21 (2 PM Eastern, 8 PM CEST)",
	},
	packageSaleEnds: {
		label: "Founder's Package sale ends",
		iso: "2026-10-15T06:59:00Z",  // 11:59 PM PDT Oct 14 = 06:59 UTC Oct 15
		sublabel: "Ends 11:59 PM Pacific - October 14",
	},
};

// Nexon's official launch FAQ. Published Sep 29 2026. Cited from the
// homepage announcement callout and from /launch's Official Sources.
// If Nexon publishes a follow-up FAQ with a new URL, update this one
// constant and both cite-sites re-render.
export const launchFaqUrl =
	"https://www.nexon.com/maplestory/news/general/45385/maple-story-classic-world-faq";
export const launchFaqPublishedISO = "2026-09-29";

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
