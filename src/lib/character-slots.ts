/**
 * Character equipment slot definitions.
 *
 * Each equippable item in items.json belongs to exactly one slot,
 * determined by its ID prefix (WZ classification scheme). The
 * customizer renders one tab per slot; the render helper composes
 * the equipped items into a maplestory.io URL.
 *
 * IDs verified against the /api/GMS/83/item/category endpoint on
 * maplestory.io (see docs/community-plan.md dev notes for the
 * source-of-truth swagger).
 */

export interface CharacterSlot {
	key: string;         // stable key used in URL params + build state
	label: string;       // shown on the tab
	icon: string;        // emoji-free unicode symbol for the tab
	// Predicate for item categorization. Given a raw item id, return
	// true if it belongs in this slot. Order in CHARACTER_SLOTS matters
	// only when a slot could match two ranges (none currently do).
	matches: (id: number) => boolean;
	// Whether the slot is required in the render URL (skin is; the
	// rest are optional overlays).
	required?: boolean;
}

// Ordering: put visual-identity slots first (skin/face/hair), then
// equipment top-to-bottom (hat, tops, bottoms, shoes), then accessories,
// then weapon last so it caps the mental scan like the paper doll.
export const CHARACTER_SLOTS: CharacterSlot[] = [
	{ key: "skin",     label: "Skin",     icon: "\u25CF", matches: (id) => id >= 2000 && id < 3000, required: true },
	{ key: "face",     label: "Face",     icon: "\u263A", matches: (id) => id >= 20000 && id < 30000 },
	{ key: "hair",     label: "Hair",     icon: "\u2740", matches: (id) => id >= 30000 && id < 40000 },
	{ key: "hat",      label: "Hat",      icon: "\u25B2", matches: (id) => Math.floor(id / 10000) === 100 },
	// Face acc (101xxxx) and Eye acc (102xxxx) removed - GMS/83's
	// render endpoint silently drops every ID in both ranges. The
	// asset library doesn't have them; leaving the tabs visible
	// would just let users equip invisible items. See Sprint 47
	// validation script results.
	{ key: "earring",  label: "Earring",  icon: "\u2734", matches: (id) => Math.floor(id / 10000) === 103 },
	// WZ ranges: 104xxxx = Coat (Top), 105xxxx = Longcoat (Overall).
	// Order in this array matters only for tab display; slotForItem
	// short-circuits on first match, so the ranges must not overlap.
	{ key: "top",      label: "Top",      icon: "\u25A1", matches: (id) => Math.floor(id / 10000) === 104 },
	{ key: "overall",  label: "Overall",  icon: "\u25A2", matches: (id) => Math.floor(id / 10000) === 105 },
	{ key: "bottom",   label: "Bottom",   icon: "\u25AF", matches: (id) => Math.floor(id / 10000) === 106 },
	{ key: "shoes",    label: "Shoes",    icon: "\u25BC", matches: (id) => Math.floor(id / 10000) === 107 },
	{ key: "gloves",   label: "Gloves",   icon: "\u2726", matches: (id) => Math.floor(id / 10000) === 108 },
	{ key: "cape",     label: "Cape",     icon: "\u25BE", matches: (id) => Math.floor(id / 10000) === 110 },
	{ key: "weapon",   label: "Weapon",   icon: "\u2694", matches: (id) => id >= 1300000 && id < 1500000 },
];

// Cheap lookup used by the frontmatter categorizer.
export const SLOT_KEYS = CHARACTER_SLOTS.map((s) => s.key);
export type SlotKey = typeof SLOT_KEYS[number];

/**
 * Returns the slot key an item belongs to, or null if it's not
 * equippable (etc/use/consumable items get filtered out).
 */
export function slotForItem(id: number): SlotKey | null {
	for (const s of CHARACTER_SLOTS) {
		if (s.matches(id)) return s.key;
	}
	return null;
}

/**
 * Default starting build. Chosen so a fresh visitor sees a
 * recognizable Beginner-style character, not a naked skin.
 */
export const DEFAULT_BUILD: Record<SlotKey, number | null> = {
	skin: 2000,          // pale default
	face: 20000,         // Defiant Face
	hair: 30030,         // Black Buzz
	hat: null,
	earring: null,
	overall: null,
	top: 1040036,        // classic starter top
	bottom: 1060026,     // classic starter bottom
	shoes: 1072005,      // classic starter shoes
	gloves: null,
	cape: null,
	weapon: null,
};

/**
 * Build the maplestory.io character render URL from a build state.
 * Skin is separate (it's the URL body-slot); every other equipped
 * item becomes a comma-separated overlay in the items path segment.
 *
 * The endpoint auto-fills a default face (12000) if none is given -
 * we always send at least face + hair so we never trip that.
 *
 * Cold-cache requests can 502/524 from Cloudflare per the API's own
 * docs; front-end retries via <img onerror> ->retry with cache-bust.
 */
export function buildCharacterUrl(
	build: Record<string, number | null>,
	options: { stance?: string; frame?: number } = {},
): string {
	const stance = options.stance ?? "stand1";
	const frame = options.frame ?? 0;
	const skin = build.skin ?? DEFAULT_BUILD.skin!;
	const items = SLOT_KEYS
		.filter((k) => k !== "skin")
		.map((k) => build[k])
		.filter((id): id is number => typeof id === "number" && id > 0);
	// Always include at least ONE item to avoid the 400. If build is
	// bare skin only, fall back to Default Face.
	if (items.length === 0) items.push(DEFAULT_BUILD.face!);
	return `https://maplestory.io/api/GMS/83/character/${skin}/${items.join(",")}/${stance}/${frame}`;
}
