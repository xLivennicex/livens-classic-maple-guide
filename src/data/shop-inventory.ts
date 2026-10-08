/**
 * Hand-authored shop inventory data for Victoria Island vendors.
 *
 * WHY HAND-AUTHORED (and not from the datamine):
 *
 * None of our data sources expose shop/vendor inventories or
 * NPC-to-item mappings:
 *   - osmsdataexplorer.com (Founder's Access client dump) ships
 *     items.json, quests.json, crafting.json, lookups.json, maps.json.
 *     No shops.json, no npcs.json, no commodity data.
 *   - maplestory.io returns 404 on /shop and /npc/{id}/shop.
 *   - meowdb.com covers mob drops only.
 *
 * The in-game shop UI is driven by Commodity.img in the client WZ
 * files, which neither public datamine has parsed. We've asked the
 * osmsdataexplorer maintainer about adding it; until then this file
 * is the source of truth for "which NPC sells what, for how much."
 *
 * WHAT WE KNOW FOR SURE (datamine-verified):
 *   - The 14 shop MAPS and their NPC rosters, from maps.json.
 *   - The exact BUY-from-vendor price for every priced item in
 *     items.json. The field is named `npcSellPrice` in our DB for
 *     historical reasons but it is actually the vendor BUY price
 *     (what you pay the NPC). Evidence: red-potion.md's long-standing
 *     claim "5 mesos to buy from any starter town's potion shop"
 *     matches `stats.price=5` exactly, and the whole FA economy
 *     scales ~10x cheaper than pre-Big-Bang classic MapleStory.
 *
 * WHAT WE INFER (editorial, needs playtime verification):
 *   - Which SPECIFIC items each Department Store NPC stocks. Classic
 *     MapleStory convention is that every town Department Store
 *     carries the same core consumable lineup (potions, food, Return
 *     Scrolls, buff potions). We propagate the lineup accordingly.
 *   - The Kerning City Self-Defence Item Store is a Thief-specific
 *     vendor; we attribute throwing stars to it based on both the
 *     "Self-Defence" branding and classic MapleStory precedent.
 *
 * NOT YET MODELED:
 *   - Weapon Stores (Henesys/Perion/Ellinia/Lith/Amherst): the
 *     per-store weapon inventory varies by town and we need per-town
 *     Founder's Access playtime to verify before claiming anything.
 *   - Armor Stores (Southperry/Lith Harbor).
 *   - Kerning City Repair Shop (service, no inventory).
 *   - Henesys Market crafting stations (Vicious/Doofus): already
 *     covered by the crafting system.
 *
 * To correct or extend, PR github.com/xLivennicex/livens-classic-maple-guide.
 */

export interface ShopItem {
	itemId: number;
	price: number; // mesos the player PAYS to buy from vendor
	note?: string;
}

export type StoreType =
	| "department"
	| "weapon"
	| "armor"
	| "self-defence"
	| "repair"
	| "crafting";

export interface Shop {
	/** URL-safe slug for /shops/[slug] routes. */
	slug: string;
	/** NPC names standing in the shop map (from maps.json). */
	npcNames: string[];
	/** Public-facing shop name (map name from maps.json). */
	storeName: string;
	/** Our internal map id (joinable to maps.json). */
	mapId: number;
	/** Town the shop is in (editorial grouping). */
	town: string;
	storeType: StoreType;
	/** Items the shop stocks. Empty = inventory not yet modeled. */
	items: ShopItem[];
	/** Honest flag: how confident we are about this shop's inventory. */
	inventoryStatus: "verified" | "inferred" | "schema-only";
	notes?: string;
}

/**
 * Standard Department Store consumable lineup. Every Victoria Island
 * Department Store that we've modeled carries this same list, which
 * matches classic MapleStory convention. Prices come straight from
 * items.json (`stats.price`).
 *
 * If any individual store deviates in-game (e.g. Amherst missing high-
 * tier scrolls because it's a beginner town), split off a store-
 * specific inventory and reference it from that shop only.
 */
const STANDARD_DEPARTMENT_INVENTORY: ShopItem[] = [
	// --- Potions (HP/MP) ---
	{ itemId: 2000000, price: 5 }, // Red Potion
	{ itemId: 2000001, price: 15 }, // Orange Potion
	{ itemId: 2000002, price: 35 }, // White Potion
	{ itemId: 2000003, price: 22 }, // Blue Potion
	{ itemId: 2000004, price: 500 }, // Elixir
	{ itemId: 2000005, price: 2500 }, // Power Elixir
	{ itemId: 2000006, price: 1000 }, // Mana Elixir

	// --- Buff Potions (temporary stat boosts) ---
	{ itemId: 2002000, price: 250 }, // Warrior Potion
	{ itemId: 2002001, price: 250 }, // Magic Potion
	{ itemId: 2002002, price: 250 }, // Sniper Potion
	{ itemId: 2002003, price: 250 }, // Dexterity Potion

	// --- Food (HP restore, cheap) ---
	{ itemId: 2010001, price: 2 }, // Apple
	{ itemId: 2010002, price: 3 }, // Egg
	{ itemId: 2010003, price: 8 }, // Meat
	{ itemId: 2010004, price: 5 }, // Orange
	{ itemId: 2010005, price: 15 }, // Lemon

	// --- Cooked / specialty food ---
	{ itemId: 2020000, price: 22 }, // Salad
	{ itemId: 2020001, price: 6 }, // Fried Chicken
	{ itemId: 2020002, price: 15 }, // Cake
	{ itemId: 2020003, price: 25 }, // Pizza
	{ itemId: 2022000, price: 112 }, // Pure Water (MP)
	{ itemId: 2022003, price: 100 }, // Unagi

	// --- Return Scrolls (standard set every Dept Store stocks) ---
	{ itemId: 2030000, price: 200 }, // Return Scroll - Nearest Town
	{ itemId: 2030001, price: 250 }, // Return Scroll to Lith Harbor
	{ itemId: 2030002, price: 250 }, // Return Scroll to Ellinia
	{ itemId: 2030003, price: 250 }, // Return Scroll to Perion
	{ itemId: 2030004, price: 250 }, // Return Scroll to Henesys
	{ itemId: 2030005, price: 250 }, // Return Scroll to Kerning City
	{ itemId: 2030006, price: 300 }, // Return Scroll to Sleepywood
];

/**
 * Kerning City Self-Defence Item Store inventory.
 *
 * Thieves don't have a traditional weapon shop in Kerning - they buy
 * their throwing stars (and the Self-Defence Store's branding
 * specifically implies ranged/concealed thief weapons) here. Prices
 * are straight from items.json for the full Subi -> Hwabi ladder.
 * Steely Throwing Knives are included because knives historically
 * share the Self-Defence inventory with stars.
 *
 * NOT included (left to the Thief Job Advancement shops in later
 * zones): Ilbi (2070006, 20k) and Hwabi (2070007, 25k). These are
 * typically Thief 2nd-job era and may not actually be in the L10
 * Kerning store. Flagged for FA verification.
 */
const THIEF_SELF_DEFENCE_INVENTORY: ShopItem[] = [
	{ itemId: 2070000, price: 250 }, // Subi Throwing Stars
	{ itemId: 2070001, price: 500 }, // Wolbi Throwing Stars
	{ itemId: 2070002, price: 1000 }, // Mokbi Throwing Stars
	{ itemId: 2070003, price: 1500 }, // Kumbi Throwing Stars
	{ itemId: 2070004, price: 2500 }, // Tobi Throwing Stars
	{
		itemId: 2070005,
		price: 10000,
		note: "Steely Throwing Knives - 10k each, premium ammo for Thieves.",
	},
];

/**
 * All modeled Victoria Island shops. Order mirrors the natural player
 * journey: Southperry -> Amherst -> Lith -> Henesys -> Ellinia ->
 * Perion -> Kerning City.
 */
export const shops: Shop[] = [
	{
		slug: "amherst-department-store",
		npcNames: ["Lucy"],
		storeName: "Amherst Department Store",
		mapId: 1013,
		town: "Amherst",
		storeType: "department",
		items: STANDARD_DEPARTMENT_INVENTORY,
		inventoryStatus: "inferred",
		notes: "Starter-island store. In pre-Big-Bang MapleStory the Amherst store carried a reduced subset (no high-tier Elixirs). FA may follow suit - verify before claiming the full standard lineup.",
	},
	{
		slug: "lith-harbor-department-store",
		npcNames: ["Mina"],
		storeName: "Lith Harbor Department Store",
		mapId: 10000002,
		town: "Lith Harbor",
		storeType: "department",
		items: STANDARD_DEPARTMENT_INVENTORY,
		inventoryStatus: "inferred",
	},
	{
		slug: "henesys-department-store",
		npcNames: ["Luna"],
		storeName: "Henesys Department Store",
		mapId: 10001042,
		town: "Henesys",
		storeType: "department",
		items: STANDARD_DEPARTMENT_INVENTORY,
		inventoryStatus: "inferred",
	},
	{
		slug: "ellinia-department-store",
		npcNames: ["Len the Fairy"],
		storeName: "Ellinia Department Store",
		mapId: 10002002,
		town: "Ellinia",
		storeType: "department",
		items: STANDARD_DEPARTMENT_INVENTORY,
		inventoryStatus: "inferred",
	},
	{
		slug: "perion-department-store",
		npcNames: ["Arturo", "Sophia"],
		storeName: "Perion Department Store",
		mapId: 10004002,
		town: "Perion",
		storeType: "department",
		items: STANDARD_DEPARTMENT_INVENTORY,
		inventoryStatus: "inferred",
		notes: "Two-NPC store. Arturo historically handled potions/food, Sophia handled Return Scrolls - but both NPCs are shown as shop keepers in maps.json. Treat items as available from either.",
	},
	{
		slug: "kerning-city-self-defence",
		npcNames: ["Cutthroat Manny", "Don Hwang"],
		storeName: "Kerning City Self-Defence Item Store",
		mapId: 10003001,
		town: "Kerning City",
		storeType: "self-defence",
		items: [...STANDARD_DEPARTMENT_INVENTORY, ...THIEF_SELF_DEFENCE_INVENTORY],
		inventoryStatus: "inferred",
		notes: "Kerning City has NO conventional Department Store - thieves get their potions + throwing stars from this store. Carries the standard consumable lineup PLUS the Thief throwing-star ladder.",
	},

	// ---- Weapon / Armor stores: schema-only until FA verification ----
	{
		slug: "southperry-armor-store",
		npcNames: ["Pan"],
		storeName: "Southperry Armor Store",
		mapId: 61,
		town: "Southperry",
		storeType: "armor",
		items: [],
		inventoryStatus: "schema-only",
		notes: "Maple Island beginner armor shop. Inventory not yet modeled - likely basic L1-5 beginner armor (Shoes, Pants, Overalls).",
	},
	{
		slug: "amherst-weapon-store",
		npcNames: ["Sid"],
		storeName: "Amherst Weapon Store",
		mapId: 1011,
		town: "Amherst",
		storeType: "weapon",
		items: [],
		inventoryStatus: "schema-only",
	},
	{
		slug: "lith-harbor-weapon-shop",
		npcNames: ["Silver"],
		storeName: "Lith Harbor Weapon Shop",
		mapId: 10000003,
		town: "Lith Harbor",
		storeType: "weapon",
		items: [],
		inventoryStatus: "schema-only",
	},
	{
		slug: "lith-harbor-armor-shop",
		npcNames: ["Natasha"],
		storeName: "Lith Harbor Armor Shop",
		mapId: 10000001,
		town: "Lith Harbor",
		storeType: "armor",
		items: [],
		inventoryStatus: "schema-only",
	},
	{
		slug: "henesys-weapon-store",
		npcNames: ["Karl", "Sam"],
		storeName: "Henesys Weapon Store",
		mapId: 10001041,
		town: "Henesys",
		storeType: "weapon",
		items: [],
		inventoryStatus: "schema-only",
		notes: "Bowman-town weapon shop. Likely stocks bows, crossbows, and all arrow types.",
	},
	{
		slug: "ellinia-weapon-store",
		npcNames: ["Flora the Fairy", "Serabi the Fairy"],
		storeName: "Ellinia Weapon Store",
		mapId: 10002001,
		town: "Ellinia",
		storeType: "weapon",
		items: [],
		inventoryStatus: "schema-only",
		notes: "Magician-town weapon shop. Likely stocks wands and staffs.",
	},
	{
		slug: "perion-weapon-store",
		npcNames: ["River", "Harry"],
		storeName: "Perion Weapon Store",
		mapId: 10004001,
		town: "Perion",
		storeType: "weapon",
		items: [],
		inventoryStatus: "schema-only",
		notes: "Warrior-town weapon shop. Likely stocks swords, axes, blunt weapons, and spears.",
	},
	{
		slug: "kerning-city-repair",
		npcNames: ["Chris"],
		storeName: "Kerning City Repair Shop",
		mapId: 10003006,
		town: "Kerning City",
		storeType: "repair",
		items: [],
		inventoryStatus: "schema-only",
		notes: "Service only - repairs damaged equipment. No inventory to list.",
	},
];

// ---------- helpers ----------

/**
 * Find every shop that sells a given item. Used by item detail pages
 * to render the "Sold by" section.
 *
 * Returns [] when the item has no modeled vendor source (which is
 * MOST items, since we've only modeled consumables so far).
 */
export function getShopsSellingItem(
	itemId: number,
): Array<{ shop: Shop; price: number; note?: string }> {
	const results: Array<{ shop: Shop; price: number; note?: string }> = [];
	for (const shop of shops) {
		const entry = shop.items.find((x) => x.itemId === itemId);
		if (entry) {
			results.push({ shop, price: entry.price, note: entry.note });
		}
	}
	// Sort by price ascending so the cheapest option bubbles up.
	// Ties broken by town name alphabetically for determinism.
	results.sort(
		(a, b) =>
			a.price - b.price || a.shop.town.localeCompare(b.shop.town),
	);
	return results;
}

/** Lookup a shop by its slug. Returns undefined for unknown slugs. */
export function getShopBySlug(slug: string): Shop | undefined {
	return shops.find((s) => s.slug === slug);
}

/**
 * Compute the complete "universe of items sold anywhere" set. Handy
 * for build-time audits (`npm run audit:links` catches dangling
 * references via the item page itself).
 */
export function getAllVendorItemIds(): Set<number> {
	const ids = new Set<number>();
	for (const shop of shops) {
		for (const it of shop.items) ids.add(it.itemId);
	}
	return ids;
}
