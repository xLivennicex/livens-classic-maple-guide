// Curated roster of legendary MapleStory event items - the community's
// hall of fame + collective wishlist for what should return in Classic
// World. Each entry cites the event/year it came from and estimates
// the chance of a Classic World reappearance.
//
// EDIT freely: add, reorder, retier. WZ IDs are v83 canonical (from
// maplestory.io search); the <Sprite> component in HallOfFameCard
// gracefully falls back to a themed placeholder if a specific ID
// isn't served. Community submissions welcome (open a PR).

export type WishlistTier =
	| "confirmed"    // Already in the Classic World datamine or a Founder's tier
	| "expected"     // Recurring seasonal event item - very likely to return
	| "hoped"        // Would love to see it but uncertain
	| "dreamed";     // Long shot / crossover material

export type LegacyCategory =
	| "weapon"
	| "hat"
	| "outfit"
	| "consumable"
	| "chair"
	| "effect";

export interface LegacyItem {
	slug: string;
	name: string;
	category: LegacyCategory;
	// v83 canonical WZ ID. Sprite renders via maplestory.io/api/GMS/83/item/{wzId}/icon.
	// Leave null if we can't find one; a themed placeholder renders instead.
	wzId: number | null;
	// Event of origin + years it was distributed. If it recurs annually,
	// use a range ("2005-2011") or "recurring".
	event: string;
	years: string;
	// Which servers ever had it. Most GMS-only, some global.
	server: "GMS" | "MSEA" | "KMS" | "Global";
	// Why this item earns hall-of-fame status.
	blurb: string;
	// The wishlist tier + optional context note.
	tier: WishlistTier;
	tierNote?: string;
	// Optional Victoria Island connection - surfaces on the VI focus
	// filter and helps deep-dive readers spot local flavor.
	victoriaIslandTie?: string;
}

export const hallOfFameItems: LegacyItem[] = [
	{
		slug: "frozen-tuna",
		name: "Frozen Tuna",
		category: "weapon",
		wzId: 1442018,
		event: "April Fools",
		years: "recurring",
		server: "Global",
		blurb: "The two-handed sword that looks like a giant frozen fish. Introduced as an April Fools joke and instantly became one of the most beloved cosmetic weapons in MapleStory history.",
		tier: "confirmed",
		tierNote: "Bundled in the Snail Founder's Package - the Well-Loved Outfit Set includes it.",
	},
	{
		slug: "maple-flag",
		name: "Maple Flag",
		category: "weapon",
		wzId: 1302033,
		event: "Global Launch commemorative",
		years: "2005-2007",
		server: "GMS",
		blurb: "The one-handed sword shaped like a fluttering red maple flag. Handed out during the earliest GMS event promotions - THE souvenir weapon of the game's first year.",
		tier: "hoped",
		tierNote: "Perfect thematic fit for a 'Classic World' launch giveaway.",
		victoriaIslandTie: "Widely equipped by first-time visitors arriving at Lith Harbor in 2005.",
	},
	{
		slug: "stars-and-stripes",
		name: "The Stars and Stripes",
		category: "weapon",
		wzId: 1302057,
		event: "4th of July",
		years: "2006-2012",
		server: "GMS",
		blurb: "American flag polearm handed out during GMS Independence Day events. US-region flavor at its purest.",
		tier: "dreamed",
		tierNote: "Regional cosmetic events like this are unlikely in a global-first Classic World, but a fan can dream.",
	},
	{
		slug: "pumpkin-basket",
		name: "Pumpkin Basket",
		category: "weapon",
		wzId: 1302034,
		event: "Halloween Trick-or-Treat",
		years: "2005-recurring",
		server: "Global",
		blurb: "One-handed 'weapon' shaped like a jack-o-lantern candy pail. Given out during the annual Halloween trick-or-treat NPC event where you'd whack ghosts for candy.",
		tier: "expected",
		tierNote: "Halloween is the most reliable seasonal event window - if Classic World lasts through October 2026 (it will), this basket is near-guaranteed.",
	},
	{
		slug: "halloween-pumpkin-hat",
		name: "Halloween Pumpkin Hat",
		category: "hat",
		wzId: 1002699,
		event: "Halloween",
		years: "recurring",
		server: "Global",
		blurb: "The classic carved-jack-o-lantern hat. Wearing it turned your character into a walking pumpkin from the neck up.",
		tier: "expected",
	},
	{
		slug: "zombie-mushroom-hat",
		name: "Zombie Mushroom Hat",
		category: "hat",
		wzId: 1002314,
		event: "GM Event Drop",
		years: "2005-2007",
		server: "GMS",
		blurb: "Awarded via GM-hosted in-game events (jump quests, boss hosts, GM-thrown-at-mob spawns). Vanishingly rare on the aftermarket - a true collector's badge of honor.",
		tier: "hoped",
		tierNote: "Depends on whether Classic World revives the GM-hosted event tradition. Fingers crossed.",
		victoriaIslandTie: "Most GM events staged in Kerning City subway, Henesys Hunting Ground, or Ellinia's tree canopy.",
	},
	{
		slug: "christmas-tree-hat",
		name: "Christmas Tree Hat",
		category: "hat",
		wzId: 1002714,
		event: "Christmas / Winter",
		years: "recurring",
		server: "Global",
		blurb: "A miniature decorated pine tree perched on your head, complete with tiny star topper. Runs every December.",
		tier: "expected",
	},
	{
		slug: "christmas-tree-weapon",
		name: "Christmas Tree (Dagger)",
		category: "weapon",
		wzId: 1332032,
		event: "Christmas",
		years: "recurring",
		server: "Global",
		blurb: "A dagger that's literally a full-sized decorated Christmas tree. Absurd, iconic, deeply festive.",
		tier: "expected",
	},
	{
		slug: "party-firecracker",
		name: "Party Firecracker",
		category: "consumable",
		wzId: 4032299,
		event: "Anniversary / New Year",
		years: "recurring",
		server: "Global",
		blurb: "Popper you set off for a burst of celebratory particles. Anniversary event staple - everyone spammed these on the Free Market entrance stairs on server-birthday day.",
		tier: "expected",
	},
	{
		slug: "piece-of-birthday-cake",
		name: "Piece of Birthday Cake",
		category: "consumable",
		wzId: 4001167,
		event: "Anniversary",
		years: "recurring",
		server: "Global",
		blurb: "The etc-item that dropped from a giant cake mob during Nexon's game-birthday events. Trade it in for stat scrolls or the cake weapon.",
		tier: "expected",
		victoriaIslandTie: "Cake mobs typically spawned in Henesys Market for the summer anniversary window.",
	},
	{
		slug: "pumpkin-headgear",
		name: "Pumpkin Headgear",
		category: "hat",
		wzId: 1002544,
		event: "Halloween",
		years: "2006-2010",
		server: "Global",
		blurb: "Darker sibling of the Pumpkin Hat - a full pumpkin shell with a menacing carved face. The Halloween 'edgelord' hat.",
		tier: "hoped",
	},
	{
		slug: "pumpkin-hat",
		name: "Pumpkin Hat",
		category: "hat",
		wzId: 1002839,
		event: "Halloween",
		years: "recurring",
		server: "Global",
		blurb: "The friendlier Halloween pumpkin hat - smaller, cuter, more of a beanie shape.",
		tier: "expected",
	},
];

// Wishlist tier presentation metadata. Used by HallOfFameCard for
// colored pills + counts.
export const WISHLIST_META: Record<WishlistTier, { label: string; description: string; accent: string; icon: string }> = {
	confirmed: {
		label: "Confirmed",
		description: "Already datamined in Classic World or included in a Founder's tier.",
		accent: "#2e5d31",
		icon: "",
	},
	expected: {
		label: "Expected",
		description: "Recurring seasonal event item — very likely to return.",
		accent: "#b8460e",
		icon: "",
	},
	hoped: {
		label: "Hoped",
		description: "Would love to see it back but no confirmation yet.",
		accent: "#8b5a2b",
		icon: "",
	},
	dreamed: {
		label: "Dreamed",
		description: "Long shot — regional exclusives, deep-cut retro items.",
		accent: "#5a5088",
		icon: "",
	},
};

// Filter helpers used by the /hall-of-fame page.
export function itemsByTier(tier: WishlistTier): LegacyItem[] {
	return hallOfFameItems.filter((i) => i.tier === tier);
}

export function victoriaIslandLegacyItems(): LegacyItem[] {
	return hallOfFameItems.filter((i) => i.victoriaIslandTie);
}
