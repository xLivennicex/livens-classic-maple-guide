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

// =========================================================
// WEAPON INVENTORIES - by town, following classic MapleStory
// job-class convention.
//
// Scope: priced Equipment items (weaponType set, npcSellPrice > 0,
// reqLevel <= 50) from items.json, grouped by job alignment:
//   - Warrior gear (swords/axes/blunts/spears/polearms + Warrior
//     shields) -> Perion Weapon Store (Warrior town).
//   - Bowman gear (bows + crossbows + arrows) -> Henesys (Bowman town).
//   - Mage gear (wands + staffs + Mage shields) -> Ellinia.
//   - Thief gear (daggers + claws + thief wristguards) -> Kerning
//     City Self-Defence Item Store (merged with throwing stars +
//     consumables).
//   - Multi-job starter weapons (Lv5-15 'All' or 'Warrior/Bowman/Thief'
//     tagged) -> Lith Harbor Weapon Shop as a general outfitter.
//   - Lv5-8 novice weapons -> also stocked at Amherst Weapon Store.
//
// Excluded: Lv0 'novelty' items with price=1 (Pumpkin Basket, Blue
// Flowery Tube, Wizet Secret Agent Suitcase, Red/Purple/Black Tubes,
// Old Gladius - which is actually a quest item). These are event
// cosmetics or quest-reward specifics, not vendor stock.
// =========================================================

/** Lith Harbor Weapon Shop (Silver): basic Lv5-10 generic weapons. */
const LITH_HARBOR_GENERIC_WEAPONS: ShopItem[] = [
	{ itemId: 1332000, price: 250 }, // Lv5 Razor (Dagger)
	{ itemId: 1332001, price: 750 }, // Lv8 Fruit Knife (Dagger)
	{ itemId: 1402000, price: 2500 }, // Lv10 Wooden Sword (2H Sword)
	{ itemId: 1412000, price: 2500 }, // Lv10 Metal Axe (2H Axe)
	{ itemId: 1422000, price: 2500 }, // Lv10 Wooden Mallet (2H Blunt)
	{ itemId: 1432000, price: 2500 }, // Lv10 Spear
	{ itemId: 1442000, price: 2500 }, // Lv10 Pole Arm
];

/** Lith Harbor Armor Shop (Natasha): shields for all classes. */
const LITH_HARBOR_SHIELDS: ShopItem[] = [
	{ itemId: 1092000, price: 1000 }, // Lv5 Stolen Fence (All)
	{ itemId: 1092002, price: 2000 }, // Lv10 Pan Lid (All)
];

/** Amherst Weapon Store (Sid): minimal starter dagger lineup. */
const AMHERST_STARTER_WEAPONS: ShopItem[] = [
	{ itemId: 1332000, price: 250 }, // Lv5 Razor
	{ itemId: 1332001, price: 750 }, // Lv8 Fruit Knife
];

/** Henesys Weapon Store (Karl / Sam): bows, crossbows, and arrows. */
const HENESYS_BOWMAN_WEAPONS: ShopItem[] = [
	// Arrows
	{ itemId: 2060001, price: 1 }, // Bronze Arrows for Bows
	{ itemId: 2060002, price: 2 }, // Iron Arrows for Bows
	{ itemId: 2060003, price: 3 }, // Adamantium Arrows for Bows
	{ itemId: 2061001, price: 1 }, // Bronze Arrows for Crossbows
	{ itemId: 2061002, price: 2 }, // Iron Arrows for Crossbows
	{ itemId: 2061003, price: 3 }, // Mithril Arrows for Crossbows
	// Bows
	{ itemId: 1452000, price: 2500 }, // Lv10 War Bow
	{ itemId: 1452001, price: 3500 }, // Lv15 Composite Bow
	{ itemId: 1452002, price: 4500 }, // Lv20 Hunter's Bow
	{ itemId: 1452003, price: 5500 }, // Lv25 Battle Bow
	{ itemId: 1452004, price: 6500 }, // Lv30 Ryden
	{ itemId: 1452005, price: 9000 }, // Lv35 Red Viper
	{ itemId: 1452006, price: 11500 }, // Lv40 Vaulter 2000
	{ itemId: 1452007, price: 16500 }, // Lv50 Olympus
	// Crossbows
	{ itemId: 1462000, price: 2500 }, // Lv10 Crossbow
	{ itemId: 1462001, price: 3500 }, // Lv15 Battle Crossbow
	{ itemId: 1462002, price: 4500 }, // Lv20 Balanche
	{ itemId: 1462003, price: 5500 }, // Lv25 Mountain Crossbow
	{ itemId: 1462004, price: 6500 }, // Lv30 Eagle Crow
	{ itemId: 1462005, price: 11500 }, // Lv40 Heckler
	{ itemId: 1462006, price: 14000 }, // Lv45 Silver Crow
	{ itemId: 1462007, price: 16500 }, // Lv50 Rower
];

/** Ellinia Weapon Store (Flora / Serabi): wands, staffs, Mage shields. */
const ELLINIA_MAGE_WEAPONS: ShopItem[] = [
	// Wands
	{ itemId: 1372000, price: 1500 }, // Lv10 Wooden Wand
	{ itemId: 1372001, price: 2500 }, // Lv15 Hardwood Wand
	{ itemId: 1372002, price: 3500 }, // Lv20 Metal Wand
	{ itemId: 1372003, price: 4500 }, // Lv25 Ice Wand
	{ itemId: 1372004, price: 5500 }, // Lv30 Mithril Wand
	{ itemId: 1372005, price: 7500 }, // Lv35 Wizard Wand
	{ itemId: 1372006, price: 9500 }, // Lv40 Fairy Wand
	{ itemId: 1372007, price: 13500 }, // Lv50 Cromi
	// Staffs
	{ itemId: 1382000, price: 1500 }, // Lv10 Wooden Staff
	{ itemId: 1382001, price: 2500 }, // Lv15 Sapphire Staff
	{ itemId: 1382002, price: 2500 }, // Lv15 Emerald Staff
	{ itemId: 1382003, price: 3500 }, // Lv20 Old Wooden Staff
	{ itemId: 1382004, price: 4500 }, // Lv25 Wizard Staff
	{ itemId: 1382005, price: 11500 }, // Lv45 Arc Staff
	// Mage shields
	{ itemId: 1092005, price: 4400 }, // Lv22 Mystic Shield
	{ itemId: 1092011, price: 10000 }, // Lv35 Esther Shield
];

/**
 * Perion Weapon Store (River / Harry): the complete Warrior arsenal.
 * 1H and 2H swords/axes/blunts, plus Spear and Polearm specialty
 * weapons, plus Warrior shields.
 */
const PERION_WARRIOR_WEAPONS: ShopItem[] = [
	// --- 1H Sword ---
	{ itemId: 1302001, price: 1500 }, // Lv10 Long Sword (All)
	{ itemId: 1302002, price: 2500 }, // Lv15 Sabre
	{ itemId: 1302003, price: 2500 }, // Lv15 Saw
	{ itemId: 1302004, price: 3500 }, // Lv20 Viking Sword
	{ itemId: 1302005, price: 3500 }, // Lv20 Machete
	{ itemId: 1302006, price: 4500 }, // Lv25 Eloon
	{ itemId: 1302007, price: 4900 }, // Lv27 Sky Blue Umbrella
	{ itemId: 1302008, price: 5500 }, // Lv30 Gladius
	{ itemId: 1302010, price: 7500 }, // Lv35 Cutlus
	{ itemId: 1302011, price: 7500 }, // Lv35 Red Whip
	{ itemId: 1302012, price: 9500 }, // Lv40 Traus
	{ itemId: 1302013, price: 9500 }, // Lv40 Yellow Umbrella
	{ itemId: 1302014, price: 11500 }, // Lv45 Hero's Gladius
	{ itemId: 1302015, price: 13500 }, // Lv50 Jeweled Katar
	// --- 2H Sword ---
	{ itemId: 1402001, price: 3500 }, // Lv15 Wooden Baseball Bat
	{ itemId: 1402002, price: 4500 }, // Lv20 Two-Handed Sword
	{ itemId: 1402003, price: 5500 }, // Lv25 Broadsword
	{ itemId: 1402004, price: 6500 }, // Lv30 Aluminum Baseball Bat
	{ itemId: 1402005, price: 6500 }, // Lv30 Scimitar
	{ itemId: 1402006, price: 9000 }, // Lv35 Lionheart
	{ itemId: 1402007, price: 11500 }, // Lv40 Zard
	{ itemId: 1402008, price: 16500 }, // Lv50 Lion's Fang
	// --- 1H Axe ---
	{ itemId: 1312001, price: 1500 }, // Lv10 Double Axe (All)
	{ itemId: 1312002, price: 2500 }, // Lv15 Battle Axe
	{ itemId: 1312003, price: 2500 }, // Lv15 Scythe
	{ itemId: 1312004, price: 4500 }, // Lv25 Mithril Axe
	{ itemId: 1312005, price: 5500 }, // Lv30 Fireman's Axe
	{ itemId: 1312006, price: 7500 }, // Lv35 Dankke
	{ itemId: 1312007, price: 9500 }, // Lv40 Blue Counter
	{ itemId: 1312008, price: 13500 }, // Lv50 Buck
	// --- 2H Axe ---
	{ itemId: 1412001, price: 4500 }, // Lv20 Iron Axe
	{ itemId: 1412002, price: 4500 }, // Lv20 Pickaxe
	{ itemId: 1412003, price: 5500 }, // Lv25 Two-Handed Axe
	{ itemId: 1412004, price: 6500 }, // Lv30 Blue Axe
	{ itemId: 1412005, price: 9000 }, // Lv35 Niam
	{ itemId: 1412006, price: 11500 }, // Lv40 Sabretooth
	{ itemId: 1412007, price: 16500 }, // Lv50 The Rising
	// --- 1H Blunt Weapon ---
	{ itemId: 1322001, price: 1500 }, // Lv10 Steel Pipe (All)
	{ itemId: 1322002, price: 1900 }, // Lv12 Leather Purse (All)
	{ itemId: 1322003, price: 2500 }, // Lv15 Mace
	{ itemId: 1322004, price: 2500 }, // Lv15 Red Brick (All)
	{ itemId: 1322005, price: 2900 }, // Lv17 Hammer (All)
	{ itemId: 1322006, price: 3100 }, // Lv17 Square Shovel
	{ itemId: 1322007, price: 3500 }, // Lv20 Hard Briefcase (All)
	{ itemId: 1322008, price: 3500 }, // Lv20 Iron Mace
	{ itemId: 1322009, price: 3900 }, // Lv22 Pointed Shovel
	{ itemId: 1322010, price: 4500 }, // Lv25 Plunger (All)
	{ itemId: 1322011, price: 4500 }, // Lv25 Fusion Mace
	{ itemId: 1322014, price: 5500 }, // Lv25 Pig Illustrated (All)
	{ itemId: 1322012, price: 5500 }, // Lv30 Lollipop (All)
	{ itemId: 1322013, price: 5500 }, // Lv30 War Hammer
	{ itemId: 1322015, price: 7500 }, // Lv35 Heavy Hammer
	{ itemId: 1322016, price: 9500 }, // Lv40 Jacker
	{ itemId: 1322017, price: 13500 }, // Lv50 Knuckle Mace
	// --- 2H Blunt Weapon ---
	{ itemId: 1422001, price: 3500 }, // Lv15 Heavy Mace
	{ itemId: 1422002, price: 4500 }, // Lv20 Square Hammer
	{ itemId: 1422003, price: 5500 }, // Lv25 Monkey Wrench
	{ itemId: 1422004, price: 6500 }, // Lv30 Mithril Maul
	{ itemId: 1422005, price: 9000 }, // Lv35 Sledgehammer
	{ itemId: 1422006, price: 11500 }, // Lv40 Titan
	{ itemId: 1422007, price: 16500 }, // Lv50 Golden Mole
	// --- Spear ---
	{ itemId: 1432001, price: 3500 }, // Lv15 Fork on a Stick
	{ itemId: 1432002, price: 4500 }, // Lv20 Fish Spear (All)
	{ itemId: 1432003, price: 6500 }, // Lv30 Forked Spear
	{ itemId: 1432004, price: 9000 }, // Lv35 Nakamaki
	{ itemId: 1432005, price: 11500 }, // Lv40 Zeco
	{ itemId: 1432006, price: 16500 }, // Lv50 Serpent's Tongue
	// --- Polearm ---
	{ itemId: 1442001, price: 3500 }, // Lv15 Iron Ball
	{ itemId: 1442002, price: 4500 }, // Lv20 Studded Polearm
	{ itemId: 1442003, price: 5500 }, // Lv25 Janitor's Mop
	{ itemId: 1442004, price: 6500 }, // Lv30 Mithril Pole Arm
	{ itemId: 1442005, price: 9000 }, // Lv35 Axe Pole Arm
	{ itemId: 1442006, price: 11500 }, // Lv40 Crescent Polearm
	{ itemId: 1442007, price: 16500 }, // Lv50 The Nine Dragons
	// --- Warrior Shields ---
	{ itemId: 1092001, price: 2000 }, // Lv10 Wooden Buckler
	{ itemId: 1092003, price: 3000 }, // Lv15 Steel Shield
	{ itemId: 1092004, price: 4000 }, // Lv20 Mithril Buckler
	{ itemId: 1092009, price: 5000 }, // Lv25 Red Triangular Shield
	{ itemId: 1092010, price: 6000 }, // Lv30 Red Cross Shield
	{ itemId: 1092012, price: 10000 }, // Lv35 Battle Shield
	{ itemId: 1092013, price: 14000 }, // Lv40 Steel Tower Shield
	{ itemId: 1092014, price: 14000 }, // Lv40 Mithril Tower Shield
	{ itemId: 1092015, price: 14000 }, // Lv40 Adamantium Tower Shield
	{ itemId: 1092016, price: 22000 }, // Lv50 Skull Shield
];

/**
 * Kerning City Self-Defence (Cutthroat Manny / Don Hwang) Thief
 * weapon section. Appended to the throwing-star list and the
 * standard consumable lineup for the full inventory.
 */
const KERNING_THIEF_WEAPONS: ShopItem[] = [
	// --- Daggers (Thief-use) ---
	{ itemId: 1332002, price: 1500 }, // Lv10 Triangular Zamadar
	{ itemId: 1332003, price: 2500 }, // Lv15 Field Dagger
	{ itemId: 1332004, price: 2900 }, // Lv17 Triple-Tipped Zamadar
	{ itemId: 1332005, price: 3500 }, // Lv20 Coconut Knife
	{ itemId: 1332006, price: 3900 }, // Lv22 Stinger
	{ itemId: 1332007, price: 4500 }, // Lv25 Iron Dagger
	{ itemId: 1332008, price: 4900 }, // Lv27 Forked Dagger
	{ itemId: 1332009, price: 5500 }, // Lv30 Cass
	{ itemId: 1332010, price: 5500 }, // Lv30 Reef Claw
	{ itemId: 1332011, price: 7500 }, // Lv35 Halfmoon Zamadar
	{ itemId: 1332012, price: 9500 }, // Lv40 Gephart
	{ itemId: 1332013, price: 9500 }, // Lv40 Korean Fan (All)
	{ itemId: 1332014, price: 11500 }, // Lv45 Bazlud
	{ itemId: 1332015, price: 13500 }, // Lv50 Shinkita
	{ itemId: 1332016, price: 13500 }, // Lv50 Sai
	// --- Claws (Assassin-exclusive) ---
	{ itemId: 1472000, price: 2500 }, // Lv10 Garnier
	{ itemId: 1472001, price: 3500 }, // Lv15 Steel Titans
	{ itemId: 1472002, price: 3700 }, // Lv15 Mithril Titans
	{ itemId: 1472003, price: 3900 }, // Lv15 Gold Titans
	{ itemId: 1472004, price: 4500 }, // Lv20 Bronze Igor
	{ itemId: 1472005, price: 4700 }, // Lv20 Steel Igor
	{ itemId: 1472006, price: 4900 }, // Lv20 Adamantium Igor
	{ itemId: 1472007, price: 5500 }, // Lv25 Meba
	{ itemId: 1472008, price: 6500 }, // Lv30 Steel Guards
	{ itemId: 1472009, price: 6700 }, // Lv30 Mithril Guards
	{ itemId: 1472010, price: 6900 }, // Lv30 Adamantium Guards
	{ itemId: 1472011, price: 9000 }, // Lv35 Bronze Guardian
	{ itemId: 1472012, price: 9500 }, // Lv35 Silver Guardian
	{ itemId: 1472013, price: 10000 }, // Lv35 Dark Guardian
	{ itemId: 1472014, price: 11500 }, // Lv40 Steel Avarice
	{ itemId: 1472015, price: 12000 }, // Lv40 Blood Avarice
	{ itemId: 1472016, price: 12000 }, // Lv40 Adamantium Avarice
	{ itemId: 1472017, price: 12500 }, // Lv40 Dark Avarice
	{ itemId: 1472018, price: 16500 }, // Lv50 Steel Slain
	{ itemId: 1472019, price: 17000 }, // Lv50 Blood Slain
	{ itemId: 1472020, price: 17000 }, // Lv50 Sapphire Slain
	{ itemId: 1472021, price: 17500 }, // Lv50 Dark Slain
	// --- Thief wristguards (Shield slot) ---
	{ itemId: 1092006, price: 4400 }, // Lv22 Seclusion Wristguard
	{ itemId: 1092007, price: 4400 }, // Lv22 Nimble Wristguard
	{ itemId: 1092008, price: 4400 }, // Lv22 Jurgen Wristguard
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
		items: [
			...STANDARD_DEPARTMENT_INVENTORY,
			...THIEF_SELF_DEFENCE_INVENTORY,
			...KERNING_THIEF_WEAPONS,
		],
		inventoryStatus: "inferred",
		notes: "Kerning City has NO conventional Department Store - thieves get everything here: potions, throwing stars, daggers, claws, and wristguards. The one-stop Thief outfitter.",
	},

	// ---- Weapon / Armor stores ----
	{
		slug: "southperry-armor-store",
		npcNames: ["Pan"],
		storeName: "Southperry Armor Store",
		mapId: 61,
		town: "Southperry",
		storeType: "armor",
		items: [],
		inventoryStatus: "schema-only",
		notes: "Maple Island beginner armor shop. Inventory not modeled - we found no priced starter armor pieces in items.json for Lv1-5, so the specific SKUs that Pan stocks remain unknown. Needs FA playtime verification.",
	},
	{
		slug: "amherst-weapon-store",
		npcNames: ["Sid"],
		storeName: "Amherst Weapon Store",
		mapId: 1011,
		town: "Amherst",
		storeType: "weapon",
		items: AMHERST_STARTER_WEAPONS,
		inventoryStatus: "inferred",
		notes: "Beginner-island weapon shop. Likely stocks the same Lv5-8 novice daggers you'd find at Lith Harbor; Amherst was historically a Magician-only island so a Wooden Wand (1372000) may be stocked too.",
	},
	{
		slug: "lith-harbor-weapon-shop",
		npcNames: ["Silver"],
		storeName: "Lith Harbor Weapon Shop",
		mapId: 10000003,
		town: "Lith Harbor",
		storeType: "weapon",
		items: LITH_HARBOR_GENERIC_WEAPONS,
		inventoryStatus: "inferred",
		notes: "General outfitter. Lv5-10 weapons across the board: Razor, Fruit Knife, Wooden Sword, Metal Axe, Wooden Mallet, Spear, Pole Arm. Most of these are tagged job='All' or 'Warrior/Bowman/Thief' - multi-class starter inventory.",
	},
	{
		slug: "lith-harbor-armor-shop",
		npcNames: ["Natasha"],
		storeName: "Lith Harbor Armor Shop",
		mapId: 10000001,
		town: "Lith Harbor",
		storeType: "armor",
		items: LITH_HARBOR_SHIELDS,
		inventoryStatus: "inferred",
		notes: "Shields stocked here - we have NOT modeled armor pieces (Hats, Tops, Pants, Overalls, Gloves, Shoes) because each tier spans 3-5 color variants per job class, making the real NPC inventory ambiguous without FA playtime.",
	},
	{
		slug: "henesys-weapon-store",
		npcNames: ["Karl", "Sam"],
		storeName: "Henesys Weapon Store",
		mapId: 10001041,
		town: "Henesys",
		storeType: "weapon",
		items: HENESYS_BOWMAN_WEAPONS,
		inventoryStatus: "inferred",
		notes: "Bowman-town specialty shop. Stocks the full Lv10-50 bow + crossbow ladder (16 weapons) plus 6 arrow types for both bow and crossbow users.",
	},
	{
		slug: "ellinia-weapon-store",
		npcNames: ["Flora the Fairy", "Serabi the Fairy"],
		storeName: "Ellinia Weapon Store",
		mapId: 10002001,
		town: "Ellinia",
		storeType: "weapon",
		items: ELLINIA_MAGE_WEAPONS,
		inventoryStatus: "inferred",
		notes: "Magician-town specialty shop. Full wand and staff ladder (14 weapons Lv10-50) plus the two Mage-specific shields: Mystic Shield (Lv22) and Esther Shield (Lv35).",
	},
	{
		slug: "perion-weapon-store",
		npcNames: ["River", "Harry"],
		storeName: "Perion Weapon Store",
		mapId: 10004001,
		town: "Perion",
		storeType: "weapon",
		items: PERION_WARRIOR_WEAPONS,
		inventoryStatus: "inferred",
		notes: "The complete Warrior arsenal: 1H+2H swords, 1H+2H axes, 1H+2H blunt weapons, spears, polearms, and the full Warrior shield ladder (Wooden Buckler through Skull Shield). 82 weapons total - the biggest shop in Victoria Island.",
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
