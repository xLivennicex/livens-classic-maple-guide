// Victoria Island editorial data - one entry per major town / region
// on the mainland (plus Maple Island tutorial + Sleepywood).
//
// This is CURATED content that supplements the auto-generated data:
// level ranges, class-tags, signature NPCs/quests, hand-picked
// hunting recommendations. The /world/victoria-island page joins
// this against live map/npc/quest dossiers so counts stay accurate
// even as the datamine grows.
//
// All NPC / quest / map / mob names below have been VERIFIED against
// src/data/db/*.json - name-drift will show up as "unknown" italic
// entries on the page, easy to spot in QA. Rerun the resolve script
// (docs/dev-notes/vi-resolve-check.md, if we write one) after any
// datamine rebuild.

// Theme slugs match src/styles/themes/*.css. Typed as a string
// literal union rather than importing SiteTheme (which lives in an
// .astro file and doesn't re-export cleanly to .ts modules).
export type VictoriaTheme =
	| "henesys"
	| "kerning"
	| "perion"
	| "ellinia"
	| "lith"
	| "sleepywood"
	| "forgotten-hollow"; // Sprint 97.3: CoT2 test-client addition

export interface VictoriaTown {
	slug: string;                     // used as page anchor
	name: string;                     // display name
	mapId: number;                    // dossier id in maps.json
	theme: VictoriaTheme;             // matches src/styles/themes/*.css
	// Level range players tend to spend in this town's overworld.
	// Doesn't cover leveling-past visits (everyone runs back for buffs).
	levelRange: [number, number];
	// One-word class tag if this is a class-town (Bowman Henesys, etc).
	// null for hubs like Lith Harbor, Southperry, Sleepywood-town.
	classTag: "Warrior" | "Magician" | "Bowman" | "Thief" | null;
	tagline: string;                  // one-line elevator pitch
	blurb: string;                    // 2-3 sentence flavor text
	// Names looked up against npcs.json at render time. Verified real.
	signatureNpcs: string[];
	// Quest names verified against quests.json - exact match required.
	signatureQuests: string[];
	// Mob names verified against mobs.json.
	notableMobs: string[];
	// Map dossier names verified against maps.json.
	huntingMaps: { name: string; note: string }[];
	// Named landmarks in the town proper (buildings, party stations).
	// Free text - no cross-referencing.
	landmarks: string[];
	// Optional prominent CTA to a walkthrough / feature elsewhere on
	// the site. Shows at the top of the town subpage. Skip if a town
	// has nothing special (Southperry, Amherst) - it just won't render.
	featuredContent?: {
		label: string;      // eyebrow, e.g. "Party quest"
		title: string;      // main headline
		blurb: string;      // 1-2 sentence pitch
		href: string;       // where to send them
		cta: string;        // button text, e.g. "Read walkthrough"
	};
	// Sprint 69: optional lore + curated activities. Both fields
	// exist to make the town pages feel like DESTINATIONS instead of
	// data indexes.
	//
	// - `lore`: 2-4 paragraphs of in-world flavor/history. Written
	//   from the perspective of "a Maple World citizen would tell
	//   you about this place" - grounded in game canon (v83-era +
	//   CoT2 additions where documented) but takes editorial liberty
	//   where the game itself is silent.
	// - `activities`: a curated list of "things to do" that aren't
	//   captured by the quest/hunt data auto-lookup. Cultural,
	//   social, or exploration prompts. Category tag drives the
	//   card color in the render.
	lore?: string[];
	activities?: TownActivity[];
}

export type ActivityCategory =
	| "quest"        // hand-picked from the town's quest chains
	| "combat"       // hunting / grinding recommendation
	| "social"       // PQ, party assembly, community interaction
	| "exploration"  // maps to visit, hidden nooks
	| "trade"        // shops, NPCs, market destinations
	| "lore";        // narrative / worldbuilding hooks

export interface TownActivity {
	title: string;                // short imperative phrasing
	description: string;          // 1-2 sentences why it matters
	category: ActivityCategory;
}

export const victoriaTowns: VictoriaTown[] = [
	// -------------------------------------------------------------
	{
		slug: "amherst",
		name: "Amherst",
		mapId: 1010,
		theme: "henesys",
		levelRange: [1, 8],
		classTag: null,
		tagline: "Where every adventure begins.",
		blurb: "The starter town on Maple Island. Rain runs the tutorial quiz chain (three quests to teach the basics), Lucas and Pio handle first-purchase gear. Snails and shrooms outside, safety inside. Every character on the mainland once passed through here.",
		signatureNpcs: ["Rain", "Lucas", "Pio"],
		signatureQuests: [
			"Rain's Maple Quiz 1",
			"Rain's Maple Quiz 2",
			"Rain's Maple Quiz 3",
		],
		notableMobs: ["Snail", "Blue Snail", "Red Snail", "Shroom", "Orange Mushroom"],
		huntingMaps: [
			{ name: "The Field West of Amherst", note: "First non-town map most Maple Islanders see. Shroom + Orange Mushroom mix." },
			{ name: "In a Small Forest", note: "Denser mixed spawns for the level 4-7 push." },
			{ name: "Snail Field of Flowers", note: "Pure snail spawns - safest low-level XP on the island." },
		],
		landmarks: ["Amherst Weapon Store", "Amherst Department Store"],
		lore: [
			"Amherst isn't on any Victoria Island map because Maple Island isn't technically part of Victoria Island - the two are separate landmasses connected only by Shanks' ferry line, and once you leave, you can't come back. Every character on the mainland once ran around this town swinging a wooden sword at snails. It's the collective childhood of Maple World.",
			"The town runs on a peaceful loop: children shout in the plaza, Rain runs the quiz school out of habit rather than necessity, and Lucas and Pio operate the general store like every day is a first day. Nothing threatening lives inside town limits. The mobs outside are gentle by design - snails don't even fight back until you hit them.",
			"There's a running joke among veteran players that Amherst is the only place in Maple World that hasn't changed a pixel across every version. Nexon has redesigned every mainland town at least twice. Amherst is exactly the same as it was in 2003, which is either lazy or reverent depending on how you feel about it.",
		],
		activities: [
			{
				title: "Complete Rain's Maple Quiz trilogy",
				description: "Three quiz-based quests that teach the basics: item pickup, mob targeting, and inventory management. Yields a small EXP bump and unlocks the Southperry road.",
				category: "quest",
			},
			{
				title: "Shop for your first real weapon",
				description: "Lucas and Pio's Department Store sells the wooden weapons that carry you through the entire Maple Island tutorial. Save enough for something better than the starter fist.",
				category: "trade",
			},
			{
				title: "Photograph the Snail Field at sunrise",
				description: "The Snail Field of Flowers has an in-game sunrise animation that most players never sit still long enough to see. It's the first genuinely pretty landscape shot in the game.",
				category: "exploration",
			},
			{
				title: "Talk to every named child in town",
				description: "The kids in Amherst plaza have hidden dialogue that changes based on your level and class. Most players never bother - the flavor text alone is worth 30 seconds.",
				category: "lore",
			},
		],
	},
	// -------------------------------------------------------------
	{
		slug: "southperry",
		name: "Southperry",
		mapId: 60,
		theme: "henesys",
		levelRange: [8, 10],
		classTag: null,
		tagline: "The port that ships you to the mainland.",
		blurb: "The southern port of Maple Island. Shanks stands by the ship; talk to him after level 10 to sail to Lith Harbor. Point of no return - your Maple Island career ends here. Biggs, Yoona, and Bari cover last-minute shopping.",
		signatureNpcs: ["Shanks", "Biggs"],
		signatureQuests: [],
		notableMobs: ["Snail", "Blue Snail", "Red Snail", "Orange Mushroom"],
		huntingMaps: [
			{ name: "Snail Hunting Ground I", note: "Pure snails. Where you finish Rain's Quiz 1 kill counter." },
			{ name: "Snail Hunting Ground II", note: "Blue Snails mixed in. Push level 5-7 here." },
			{ name: "Snail Hunting Ground III", note: "Red Snails added. Final snail farm before you board the ship." },
			{ name: "A Split Road", note: "Branching path with Blue Snails, Red Snails, and Shrooms." },
			{ name: "East Entrance to Mushroom Town", note: "Tutorial Jr. Sentinel spawns for late-tutorial quest steps." },
		],
		landmarks: ["Shanks' ferry dock"],
		lore: [
			"Southperry is a one-story wooden village clinging to Maple Island's southern coast. Its entire economy is the ferry. Shanks - the perpetually windblown captain - has been running the same route to Lith Harbor for as long as anyone remembers. Nobody knows if the ship is actually seaworthy or just held together by narrative convenience.",
			"The village exists in a strange limbo: too small to matter, too important to skip. Every Mapler in history has walked its plaza, and every Mapler leaves it exactly once. There's no return ticket. The moment Shanks lowers the gangplank behind you, Maple Island is closed forever.",
			"Local legend claims the last person to ever walk BACK from Lith Harbor was a low-level Warrior who tried to bribe Shanks with mesos in 2005. Shanks laughed, took the mesos, and left him on the dock. Whether the story is true or not, nobody's tried since.",
		],
		activities: [
			{
				title: "Finish the Snail Hunting Ground grind",
				description: "Snail Fields I, II, and III form a natural difficulty curve from Lv 4 to Lv 10. Push through all three before boarding - Lith Harbor's mobs bite harder.",
				category: "combat",
			},
			{
				title: "Take the point-of-no-return ferry",
				description: "Talk to Shanks after Level 10 to sail to Lith Harbor. This is a one-way trip - once you disembark on the mainland, Maple Island is closed to you forever.",
				category: "exploration",
			},
			{
				title: "Buy last-minute Maple Island souvenirs",
				description: "Biggs, Yoona, and Bari stock final-tier tutorial gear. If you're a Warrior or Archer, this is your last chance to buy Snowshoes at Maple Island prices.",
				category: "trade",
			},
			{
				title: "Take a final walk along the dock",
				description: "The southern edge of Southperry map has a lookout point most players zoom past on their way to the ferry. Stand there for a second before you leave.",
				category: "lore",
			},
		],
	},
	// -------------------------------------------------------------
	{
		slug: "lith-harbor",
		name: "Lith Harbor",
		mapId: 10000000,
		theme: "lith",
		levelRange: [10, 15],
		classTag: null,
		tagline: "Every mainlander's first footprint.",
		blurb: "The port town on Victoria Island's west coast. You arrive here from Southperry with 150 mesos to your name and no direction. Teo hands out beginner deliveries, Jane runs the Mushroom questline, John waits later at Lv45 with a Deep-Forest chain. Mr. Goldstein, Mr. Kim, Chef, Olaf, and Pason fill out the shops.",
		signatureNpcs: ["Teo", "Jane", "John", "Mr. Goldstein", "Olaf"],
		signatureQuests: [
			"Teo's Weird Hobby",
			"Teo's Even Weirder Hobby",
			"Jane and the Mushroom",
			"Finding Sophia",
		],
		notableMobs: ["Blue Snail", "Red Snail", "Orange Mushroom", "Slime", "Pig"],
		huntingMaps: [
			{ name: "L Forest I", note: "First mainland field north of Lith - Orange Mushroom + Green Mushroom + Pig." },
			{ name: "L Forest II", note: "Slimes appear here - watch the aggro." },
			{ name: "L Forest III", note: "Ribbon Pigs + Slimes for the level 15-18 push." },
		],
		landmarks: ["Lith Harbor Ferry Terminal", "General Store", "Bowman Instructional School (north)"],
		lore: [
			"Lith Harbor is where Maple World actually begins. It's a real coastal city - stone streets, a proper harbor with multiple ships, an actual mayor (Mai) who does mayor things. The Maple Island tutorial deposits every new player onto Shanks' arrival dock, and from there the map opens up into Victoria Island in every direction.",
			"The town's identity is defined by its role as a hub. Nobody trains here for long - the free carriage service to Henesys, Ellinia, Perion, and Kerning City means Lith Harbor is mostly a transit point. But every returning Mapler has fond memories of Pig Beach right outside, where you learn what a real fight feels like after months of snails.",
			"In CoT 2, Lith Harbor gained the Physical Fitness Test (a NEW mainland-wide challenge tied to Citizenship) and the Chief Stan quest chain that introduces the CoT 2 Citizenship system. If you're arriving from Maple Island for the first time, this is where the modern game diverges from v83.",
		],
		activities: [
			{
				title: "Take the free carriage to any Victoria Island town",
				description: "The Cab station on the east side of Lith Harbor offers free rides to Henesys, Ellinia, Perion, and Kerning City. First-time Maplers should do a lap just to see the geography.",
				category: "trade",
			},
			{
				title: "Grind Pigs at Pig Beach",
				description: "The classic 'first real fight' training ground west of town. Pigs hit back, unlike snails. Push from Lv 10 to Lv 15 here before deciding on a class town.",
				category: "combat",
			},
			{
				title: "Meet Chief Stan and take the Physical Fitness Test",
				description: "CoT 2 addition. The PFT is a repeatable challenge tied to Citizenship progression. If you're a returning v83 player, this is the first zone-level change you'll notice.",
				category: "quest",
			},
			{
				title: "Register your Citizenship",
				description: "Another CoT 2 addition. Citizenship unlocks account-wide perks and progression that didn't exist in v83. Do it early - you'll want the buffs.",
				category: "quest",
			},
			{
				title: "Walk the eastern cliffs",
				description: "The far-east coast maps of Lith Harbor overlook the sea. Rarely-visited, and there's a hidden Nautilus reference that only shows up in the map's background art.",
				category: "exploration",
			},
			{
				title: "Get your Citizen ID photo taken",
				description: "One of the CoT 2 Citizenship quests involves an in-game photo at a specific NPC. The photo appears on your character's ID card - it's cosmetic but memorable.",
				category: "lore",
			},
		],
	},
	// -------------------------------------------------------------
	{
		slug: "henesys",
		name: "Henesys",
		mapId: 10001000,
		theme: "henesys",
		levelRange: [15, 30],
		classTag: "Bowman",
		tagline: "Bowman Town. Cherry blossoms and rice paddies.",
		blurb: "The Bowman town on Victoria Road. Athena Pierce is the 2nd-job instructor - her Bowman Instructional School sits just north. Chief Stan runs the Mushroom Kingdom questline, Mrs. Ming Ming gives daily worries, Bruce cares deeply about mushrooms. The Community Board here mirrors 71 shared quests across the mainland.",
		signatureNpcs: ["Athena Pierce", "Chief Stan", "Mrs. Ming Ming", "Bruce", "Rina", "Camila"],
		signatureQuests: [
			"Chief Stan's Reply",
			"Talking to Stan",
			"Mother's Gold Watch",
			"Mrs. Ming Ming's First Worry",
			"Bruce's Dilemma",
			"The Reason Behind the Mushroom Studies",
		],
		notableMobs: ["Green Mushroom", "Horny Mushroom", "Pig", "Ribbon Pig", "Stump", "Blue Mushroom"],
		huntingMaps: [
			{ name: "Forest West of Henesys", note: "Snails-and-mushrooms mix - the classic 15-20 warm-up spot." },
			{ name: "The Forest East of Henesys", note: "Same tier, opposite direction. Both feed into Bruce's mushroom kills." },
			{ name: "Henesys Dungeon Entrance", note: "Blue + Green Mushrooms + Slime - transition into 20+ grinding." },
		],
		landmarks: ["Bowman Instructional School (north)", "Henesys Park", "Community Board", "Free Market Entrance (north)"],
		lore: [
			"Henesys is farmland country. Rolling green hills, pink watermelons growing in every corner of every map, orange skies at sunset. The town runs on agriculture and archery in equal measure - which sounds contradictory until you remember that hunting boars and shooting bunnies is how you feed a farm town in Maple World.",
			"Athena Pierce is Henesys's most famous resident. She's the Bowman instructor, the archery guild leader, and (in some retellings) a member of the original Legendary Heroes who sealed the Black Mage. She grants Bowman first-job advancement to anyone who can prove they've killed enough Green Mushrooms - a suspiciously humble requirement for someone with her rumored history.",
			"For most players, Henesys is not just the Bowman town - it's the DEFAULT town. The Henesys Free Market entrance is where economy happens for the entire mainland. The Community Board (added in later versions) hosts party recruitment. And Henesys Park (north end) is the Lv 21+ meetup point for Kerning PQ recruitment - even though KPQ is technically in Kerning City. The economy runs on hills.",
		],
		activities: [
			{
				title: "Talk to Athena Pierce for Bowman advancement",
				description: "Level 10+ Bowman advancement quest chain. Athena tests your resolve with a Green Mushroom kill quota - trivial but ritualized. Non-Bowmen: just say hi.",
				category: "quest",
			},
			{
				title: "Grind Henesys Hunting Ground",
				description: "The northern hunting maps are a Bowman rite of passage. Green Mushrooms + Horny Mushrooms mixed with Ribbon Pigs. Push Lv 15-25 here before branching.",
				category: "combat",
			},
			{
				title: "Recruit for Kerning PQ from Henesys Park",
				description: "Despite the name, KPQ recruitment happens in Henesys Park more than in Kerning itself. Traffic is higher. Ping the shout-out channel around Lv 21.",
				category: "social",
			},
			{
				title: "Visit the Free Market",
				description: "The main FM entrance is on Henesys's northern edge. It's the busiest trading zone on Victoria Island. Learn its rooms early - you'll be there constantly.",
				category: "trade",
			},
			{
				title: "Watch the sunset over the hills",
				description: "Henesys has an in-game day/night cycle that dramatically shifts the color palette. The southern fields at sunset are the most photographed screenshot in classic MapleStory.",
				category: "exploration",
			},
			{
				title: "Feed a Pig",
				description: "There's a mostly-forgotten quest chain in Henesys where you can feed the ornamental Pigs at the town entrance. The Pigs don't do anything visible, but the quest text is charming.",
				category: "lore",
			},
		],
	},
	// -------------------------------------------------------------
	{
		slug: "ellinia",
		name: "Ellinia",
		mapId: 10002000,
		theme: "ellinia",
		levelRange: [15, 30],
		classTag: "Magician",
		tagline: "Magician Town. A city grown out of the treetops.",
		blurb: "The Magician town, built into the canopy of an ancient tree. Grendel the Really Old teaches every Magician's 2nd job. The Fairy trio - Arwen, Rowen, and Wing - drive the town's questlines from tutorial to Lv46. Betty and Francois run the workshops; Shane keeps the woodworking station humming.",
		signatureNpcs: ["Grendel the Really Old", "Arwen the Fairy", "Rowen the Fairy", "Wing the Fairy", "Francois", "Betty"],
		signatureQuests: [
			"Arwen and the Glass Shoe",
			"Cold Milk",
			"Satisfied Ronnie",
			"Collecting 50 Cursed Dolls",
			"I Need Help on My Homework!",
			"The Ingredients for the Flying Medicine",
		],
		notableMobs: ["Green Mushroom", "Slime", "Zombie Mushroom", "Wild Boar", "Ribbon Pig", "Stump"],
		huntingMaps: [
			{ name: "The Road to the Dungeon", note: "Sits between Ellinia and the Henesys Dungeon - mixed spawns for 12-18." },
			{ name: "Deep Valley I", note: "Dark Stump + Axe Stump zone. Push 20+ here for the Ellinia forest ascent." },
			{ name: "Deep Valley II", note: "Fire Boar + Wild Boar - iconic 25+ hunting." },
			{ name: "Deep Valley III", note: "Dark Axe Stump + Dark Stump zone for the mid-30s." },
		],
		landmarks: ["Magic Library (Grendel's tower)", "Arcane Station", "Woodworking Station", "Sewing Machine", "Path to Orbis (ship)"],
		lore: [
			"Ellinia is a town built INSIDE a forest. Every shop, every house, every training station is carved into or grown around the massive trees that dominate the region. The elves who live here don't build DOWN - they build UP, floor by floor, with wooden branch elevators connecting the levels. It's the most vertical town on Victoria Island by a wide margin.",
			"Grendel the Really Old is the Magician instructor. His actual age is unspecified in canon, but he's older than every other class instructor and looks like he predates the concept of tenure. He runs the Magic Library at the top of the tallest tree and grants Magician first-job advancement to anyone willing to climb the stairs. Half the training is the climb itself.",
			"Ellinia is also the launching point for the Orbis ferry - the ship that takes players from Victoria Island to Ossyria (Orbis, El Nath, Ludibrium, and beyond). Standing on Ellinia's western dock and watching the ferry depart is the closest thing MapleStory has to a coming-of-age moment. You're leaving the starter continent behind.",
		],
		activities: [
			{
				title: "Talk to Grendel the Really Old for Magician advancement",
				description: "Climb to the top of Ellinia's tallest tree. Grendel's tower is at the peak. The advancement quest is short but the climb takes minutes - respect the journey.",
				category: "quest",
			},
			{
				title: "Grind the Ellinia swamp maps",
				description: "Wet Booger + Slime + Green Mushroom mixed spawns south and west of town. The swamp maps are a Magician staple from Lv 15 through 2nd job.",
				category: "combat",
			},
			{
				title: "Ride the branch elevators",
				description: "Ellinia's vertical layout is navigated via wooden platforms that scroll up and down. Some players never use them - always use the stairs. Try one; the animation is worth the click.",
				category: "exploration",
			},
			{
				title: "Board the Orbis ferry",
				description: "The western dock's ship sails to Orbis on a 15-minute cycle. If you're strong enough (Lv 30+ recommended), booking passage is the classic 'graduation from Victoria Island' moment.",
				category: "exploration",
			},
			{
				title: "Buy your first wand or staff",
				description: "The Magic Library's shop has Lv 15-25 wands that carry Magicians through the early game. Fresh Magicians should budget for a wand upgrade the moment they hit Lv 15.",
				category: "trade",
			},
			{
				title: "Watch the tree canopy at dawn",
				description: "Ellinia's day/night cycle bathes the whole town in a green-gold glow at dawn. The parallax layers make it look like the trees are breathing. Best screenshot on Victoria Island.",
				category: "lore",
			},
		],
	},
	// -------------------------------------------------------------
	{
		slug: "perion",
		name: "Perion",
		mapId: 10004000,
		theme: "perion",
		levelRange: [20, 35],
		classTag: "Warrior",
		tagline: "Warrior Town. Forge, mountain, war drums.",
		blurb: "The Warrior town on the northern mountain. Dances with Balrog runs 2nd job advancement (yes, that's really his name). Manji sells the classic swords and gives you Arcon's Blood, Ayan runs the Stump chain, Silas Irons apprentices weaponcrafters. The Burnt Land runs southeast and gives the classic Fire Boar / Dark Axe Stump grind.",
		signatureNpcs: ["Dances with Balrog", "Manji", "Ayan", "Silas Irons", "Blackbull", "Mr. Thunder"],
		signatureQuests: [
			"Arcon's Blood?",
			"Getting Arcon's Blood",
			"Old Gladius",
			"The Stump Horror Story",
			"Silas Irons in Need of an Apprentice",
			"A Blacksmith in My Own Right!",
		],
		notableMobs: ["Stump", "Axe Stump", "Dark Axe Stump", "Dark Stump", "Fire Boar", "Wild Boar", "Ligator"],
		huntingMaps: [
			{ name: "Deep Valley II", note: "Fire Boar spawn zone - the classic 25-30 warrior grind." },
			{ name: "Deep Valley III", note: "Dark Axe Stump + Dark Stump for 30+ push." },
			{ name: "The Swamp of Despair I", note: "Ligator + Horny Mushroom mix for 30-40." },
		],
		landmarks: ["Warrior Sanctuary (Dances with Balrog's dojo)", "Weaponcrafting Station", "Anvil", "Path to Sleepywood"],
		lore: [
			"Perion is the desert town. Red-orange stone cliffs, wooden watchtowers, drums beating in the distance from the tribal encampment. It's Victoria Island's harshest environment by design - if Henesys is farmland and Ellinia is forest, Perion is where you learn to survive on grit. The residents dress in furs and hides and treat everyone else on the island as slightly soft.",
			"Dances with Balrog is the Warrior instructor. His name is a reference to the ancient boss Balrog that terrorizes Sleepywood Dungeon - Dances is a retired veteran who fought (and survived, if not defeated) Balrog in his prime. He grants Warrior first-job advancement in his dojo, which is a fenced-off wooden ring at the town's center. Fights break out routinely.",
			"Perion's proudest feature is the Excavation Site to the west, where Stone Golems roam the cliff faces. This is where Warriors from every server have historically trained through the 15-30 window - the Golem grind is a rite of passage. If you meet another player who describes their character as 'from Perion,' they're proud of it in the way people are proud of hometowns.",
		],
		activities: [
			{
				title: "Talk to Dances with Balrog for Warrior advancement",
				description: "Enter the Warrior Sanctuary at the center of Perion. Dances tests your Str stat and gives the first-job quest. Non-Warriors: he's still worth talking to for the flavor text.",
				category: "quest",
			},
			{
				title: "Grind Stone Golems at the Excavation Site",
				description: "The classic Warrior training ground. Stone Golems + Mixed Golems from Lv 25 through 2nd job. Bring HP potions - Golems hit hard.",
				category: "combat",
			},
			{
				title: "Watch the sunset from the Excavation Site cliffs",
				description: "Perion's western cliffs are the highest elevation on Victoria Island's mainland. At sunset the whole desert lights up orange. Best geological screenshot in the game.",
				category: "exploration",
			},
			{
				title: "Buy your first Sword, Axe, or Spear",
				description: "Perion's weapon shop stocks the entry-tier Warrior weapons. Fresh 1st-job Warriors should budget immediately - a Lv 20 sword from here carries you through Sleepywood.",
				category: "trade",
			},
			{
				title: "Complete Dark Lord's supply chain quests",
				description: "Perion has cross-town quest hooks - specifically, several Kerning City quests send you to Perion vendors for materials. Watch for the exchange questlines starting at Lv 15.",
				category: "quest",
			},
			{
				title: "Listen to the drums",
				description: "Perion's background audio has a distinct tribal drum loop that never plays anywhere else in the game. Sit in town for 30 seconds without moving - the drums fade in and out.",
				category: "lore",
			},
		],
	},
	// -------------------------------------------------------------
	{
		slug: "kerning-city",
		name: "Kerning City",
		mapId: 10003000,
		theme: "kerning",
		levelRange: [20, 35],
		classTag: "Thief",
		tagline: "Thief Town. Neon, subways, back-alley dealings.",
		blurb: "The Thief town on Victoria Island's east side. Dark Lord runs 2nd job advancement out of a dojo above the club. JM From tha Streetz teaches leatherworking. Nella dispatches the classic 'somebody wants something' delivery quests, Icarus runs the hang glider chain, Mong from Kong handles the medicine questline. The subway south of town spawns Wraiths - Kerning City's signature XP.",
		signatureNpcs: ["Dark Lord", "JM From tha Streetz", "Nella", "Icarus", "Mong from Kong", "Alex", "Shumi"],
		signatureQuests: [
			"JM From tha Streetz Looking for a Partner",
			"A Leatherworker in My Own Right!",
			"Don Hwang's Request",
			"Icarus's Hang Glider",
			"Making the Medicine",
		],
		notableMobs: ["Wraith", "Jr. Wraith", "Stirge", "Jr. Necki", "Bubbling", "Super Stirge"],
		huntingMaps: [
			{ name: "Line 1 <Area 1>", note: "Bubbling spawns - great single-mob grind for mid-20s thieves." },
			{ name: "Line 1 <Area 2>", note: "Jr. Wraith + Stirge - fast XP with room to solo." },
			{ name: "Line 1 <Area 3>", note: "Wraith + Jr. Wraith + Stirge mix. The 25-30 push zone." },
			{ name: "Line 2 <Area 2>", note: "Wraith + Jr. Necki - deeper subway spawns." },
			{ name: "B3 <Subway Depot>", note: "Line 3 Construction Site - Wraith + Jr. Boogie 1/2 for 30+." },
		],
		landmarks: ["Thief Sanctuary (Dark Lord's dojo)", "Kerning City Subway", "Leatherworking Station", "Community Board", "Path to Kerning Party Quest"],
		lore: [
			"Kerning City is Victoria Island's urban underbelly. Neon signs flicker over narrow alleys, the subway system rumbles under the streets, and every second building is either a bar, a Chinese restaurant, or a suspiciously-labeled 'club.' The town's aesthetic borrows heavily from 90s Hong Kong crime movies. Nobody who lives here would use the word 'nice.'",
			"Dark Lord is the Thief instructor. He runs his operation from what publicly appears to be a Chinese restaurant, but which is very clearly a Thief guild front. His job advancement quest tests your speed and stealth rather than your combat skill. If you're going Thief, this is where your moral compass gets bent slightly out of shape.",
			"Kerning City is best known outside of the class-town circuit as the home of KPQ - the Kerning Party Quest, running Level 21-30. KPQ was the single most important social feature of classic MapleStory. Entire friend groups formed around KPQ recruitment. Kerning's population at peak hours was 90% party-quest-lobby traffic. If you played classic Maple in any era, you know exactly what a 'Ludi taxi' or 'KPQ bus' means, and you know it started here.",
		],
		activities: [
			{
				title: "Talk to Dark Lord for Thief advancement",
				description: "Enter the Thief Sanctuary - the Chinese restaurant across from the subway. Dark Lord's first-job quest is a stealth check. Yes, the restaurant is a front. Roll with it.",
				category: "quest",
			},
			{
				title: "Run Kerning PQ (Lv 21-30)",
				description: "The signature party quest of classic MapleStory. Six-player parties clear a series of coordinated mini-challenges for huge EXP. This is where you make MMO friends. See the KPQ walkthrough.",
				category: "social",
			},
			{
				title: "Grind Subway Line 1 Wraiths",
				description: "The subway system under Kerning City is a Cleric heaven (Wraiths are Undead - Heal shreds them). Also a solid Lv 30-40 grinding spot for any class. The trains DO run - watch for the platform hazard.",
				category: "combat",
			},
			{
				title: "Buy your first Claw or Dagger",
				description: "Kerning's weapon shop stocks the Assassin and Bandit starter kits. Assassins should also budget for a stack of Steely Throwing Knives - stars are ammo.",
				category: "trade",
			},
			{
				title: "Descend into Kerning Underground",
				description: "Below the subway is a rarely-visited zone with elite Wraith spawns and hidden treasure boxes. High risk for the level bracket, but a great screenshot destination.",
				category: "exploration",
			},
			{
				title: "Read the flickering neon signs",
				description: "Kerning City's neon signs have a rotating cast of flavor text - some in English, some in mock-Cantonese, some in gibberish. Slow down and read a few. The town has more atmospheric detail than any other on the island.",
				category: "lore",
			},
		],
		featuredContent: {
			label: "Party quest walkthrough",
			title: "Kerning Party Quest (KPQ)",
			blurb: "The iconic Lv 21-30 party quest. Six characters, one waiting room, one King Slime boss. Full stage-by-stage walkthrough with LFG shouts and progress tracker.",
			href: "/party-quests/kerning-pq",
			cta: "Read the KPQ walkthrough",
		},
	},
	// -------------------------------------------------------------
	{
		slug: "sleepywood",
		name: "Sleepywood",
		mapId: 10005000,
		theme: "sleepywood",
		levelRange: [40, 70],
		classTag: null,
		tagline: "Deep-forest end-game hub. Ant Tunnels below.",
		blurb: "The deep-woods dungeon town at the southeast corner of Victoria Island. This is where mid-game and late-game meet. Sabitrama and Chrishrama run the alchemy questlines; Eurek the Alchemist stocks the potions; the Mysterious Statue guards the deeper paths. Below the town, the Sleepy Dungeon system leads to the Cave of Evil Eye and beyond.",
		signatureNpcs: ["Sabitrama", "Chrishrama", "Eurek the Alchemist", "Mr. Oh"],
		signatureQuests: [
			"Chrishrama in Need of an Apprentice",
			"Chrishrama in Need of Help",
			"An Arcforger in My Own Right!",
			"[Forest of Patience] Sabitrama and the Diet Medicine",
			"[Forest of Patience] Sabitrama's Anti-Aging Medicine",
		],
		notableMobs: ["Horny Mushroom", "Zombie Mushroom", "Jr. Necki", "Curse Eye", "Green Mushroom", "Slime", "Dark Stone Golem", "Octopus"],
		huntingMaps: [
			{ name: "Hunting Ground in the Deep Forest I", note: "Deep Forest entry hunt - Octopus + Slime + Snail mix." },
			{ name: "Deep Forest", note: "Sleepywood's ambient hunt map - Slime + Stump + Snail." },
			{ name: "Sleepy Dungeon I", note: "Horny Mushroom + Green Mushroom + Slime entry dungeon." },
			{ name: "Sleepy Dungeon II", note: "Deeper Sleepy Dungeon - same mix, more density." },
			{ name: "Sleepy Dungeon V", note: "Curse Eye + Dark Stone Golem for 50+ push." },
			{ name: "Swampy Land in a Deep Forest", note: "Green Mushroom + Octopus + Horny Mushroom - transitional 40s zone." },
		],
		landmarks: ["Sleepywood Hotel", "Path to Sleepy Dungeon", "Mysterious Statue"],
		lore: [
			"Sleepywood is the border town between the safe part of Victoria Island and the dangerous part. It's a single-street settlement built at the mouth of Sleepy Dungeon - the ant tunnel system that connects downward to some of the deadliest boss fights on the mainland. The town's economy exists to serve adventurers going IN or coming OUT of the dungeon. Nobody stays here for long.",
			"The Sleepywood Hotel is Maple World's only fully-functional inn. Renting a room heals you to full and gives a specific quest reward. It's also the only building in the entire game with an interior stairwell you can actually climb - a detail that impressed players in 2003 and, honestly, still impresses now. The hotel owner has been sleeping behind the desk for two decades of MapleStory patches.",
			"Sleepywood is the launching point for the Balrog fight - the ancient boss lurking at the bottom of the dungeon. Balrog is the boss Dances with Balrog is named for. He was Victoria Island's endgame content for years before Ossyria opened up. Even now, taking down Balrog with a full party is a rite of passage that most players remember more clearly than their 3rd-job advancement.",
		],
		activities: [
			{
				title: "Rest at Sleepywood Hotel",
				description: "The hotel owner has a small quest chain that rewards a rare item for completing the 'rest cycle.' Also: the interior stairs are the only climbable indoor stairs in the game.",
				category: "quest",
			},
			{
				title: "Grind Zombie Mushrooms + Wild Boars",
				description: "Sleepywood's outer maps are the classic Lv 30-45 grinding ring. Zombie Mushrooms give great EXP-per-HP; Wild Boars round out the mix. Priests love it here.",
				category: "combat",
			},
			{
				title: "Descend into the Ant Tunnel",
				description: "The Sleepy Dungeon entrance leads downward through a series of ant-tunnel maps. Copper Drakes, Cursed Eyes, and eventually the Balrog fight. Party up - it's genuinely dangerous.",
				category: "exploration",
			},
			{
				title: "Fight Balrog",
				description: "The ancient boss at the bottom of Sleepy Dungeon. Level 50+ party recommended. Balrog was Victoria Island's endgame for years and remains a top-3 boss fight in classic Maple.",
				category: "combat",
			},
			{
				title: "Get your 2nd-job branch decision at Lv 30",
				description: "All four 2nd-job instructors accept advancement quests from Sleepywood's town map. If you're Lv 30 and haven't picked your branch, this is your one-stop shop. See our 2nd-job guides.",
				category: "quest",
			},
			{
				title: "Photograph the Mysterious Statue",
				description: "There's an unlabeled statue in Sleepywood town whose actual lore has never been formally confirmed. Community theories range from 'it's a Legendary Hero' to 'it's the previous hotel owner.' It stays mysterious.",
				category: "lore",
			},
		],
	},
	// -------------------------------------------------------------
	// Sprint 97.3: Forgotten Hollow. Added to Victoria Island in the
	// CoT2 test client (Nexon's newer canonical build). Doesn't
	// appear on maplestory.io's world-map API (still GMS/83), so
	// upstream tooling misses it - but our maps.json / quests.json
	// pipeline dumps directly from the client and DID pull it in.
	// This entry is what surfaces it on /world/victoria-island; the
	// /hollow page is the themed front door.
	{
		slug: "forgotten-hollow",
		name: "Forgotten Hollow",
		mapId: 10006000,
		theme: "forgotten-hollow",
		levelRange: [39, 50],
		classTag: null,
		tagline: "The bioluminescent grotto tucked behind Ellinia.",
		blurb: "A cave-fairy town reached through Ellinia's back roads. Zelya greets returning explorers with the Return Scroll, Nyroth runs the emotional-support arc of the questline, and the Bluebell Buds keep the spore-lanterns lit. Level 39-50 content bridging into the deeper Cave Fairy Sanctuary and Primeval Forest.",
		signatureNpcs: ["Zelya", "Nyroth", "Myra", "Grendel the Really Old"],
		signatureQuests: [
			"Welcome to the Hollow",
			"Zelya's Map",
			"Nyroth's Fragile Hope",
			"Matters of the Heart",
			"The Sage's Burden",
		],
		// Sprint 97.4: full mob roster from the datamine cross-reference.
		// 20 unique mobs across the 27-map region. Listed here are the
		// CoT2-original spawns (upstream maplestory.io/GMS/83 has no
		// stats for these yet - they show as stubs on the mob pages).
		// Reused classics (Zombie Mushroom, Curse Eye, Evil Eye, Lupin,
		// Zombie Lupin, Fairy 2/3/4, Rotten Mushroom) round out the
		// spawn tables but aren't listed here since they're not what
		// makes the region distinctive.
		notableMobs: [
			"Raffle",
			"Aqumander",
			"Echopus",
			"Rafflesia",
			"Duskmander",
			"Myewood",
			"Sporewood",
			"Glowshroom",
			"Golden Stirge",
			"Rotten Mushmom",
		],
		huntingMaps: [
			{ name: "Primeval Forest I", note: "First hunt map east of the Hollow. Aqumander + Glowshroom + Echopus starter mix." },
			{ name: "Primeval Forest II", note: "Progression - Golden Stirge added to the spawn table." },
			{ name: "Collision of Ice and Fire", note: "Themed pocket map with Rafflesia + Aqumander + Glowshroom." },
			{ name: "The Valley of Death", note: "Grim mid-region hunt - Zombie Mushroom + Zombie Lupin + Rafflesia." },
			{ name: "The End of Fleeting Light", note: "Level 45+ questline hub. Duskmander + Aqumander + Rafflesia." },
			{ name: "Decayed Tunnel III", note: "Late-region tunnel with Rafflesia + Myewood + Golden Stirge." },
			{ name: "Precipice of Darkness", note: "Boss-adjacent map - Duskmander + Rotten Mushroom + Zombie Lupin + Zombie Mushroom." },
			{ name: "Someone Else's Grave", note: "Rotten Mushmom (region mini-boss) + Rotten Mushroom + Fairy 3 + Zombie Mushroom. Marquee target for the mid-level party." },
			{ name: "Dilapidated Tomb", note: "Sporewood + Rotten Mushroom + Fairy 2 spawn. Late-region tomb approach." },
		],
		landmarks: ["Cave Fairy Sanctuary", "Cave Fairy Department Store", "Arcane Station"],
		featuredContent: {
			label: "Themed region page",
			title: "Enter the Hollow",
			blurb: "The themed front door - fairy-grotto backdrop, drifting maple leaves, and the full quest / NPC / connected-map roster pulled straight from the CoT2 datamine.",
			href: "/hollow",
			cta: "Open /hollow",
		},
		lore: [
			"Forgotten Hollow doesn't appear on the old Victoria Island world map because it wasn't there yet - Nexon's CoT2 test client added the region as a mid-game bridge between Ellinia's magician-heavy questlines and the deeper Cave Fairy content. Grendel the Really Old, of all people, is the onboarding NPC: he hands you 'Welcome to the Hollow' back in his Ellinia library, then the Hollow's own residents (Zelya, Nyroth, Myra) take over the story.",
			"The town proper is a single map called Shallow Passage. Water drips constantly and the ambient light comes from luminous fungi rather than any real sun. Bluebell Buds and Fully Bloomed Bluebells stand near the entrance as living lanterns; the Arcane Station in the middle of the map is a lore breadcrumb toward the Arcane River content that Classic World is unlikely to formally reach.",
			"The narrative core of the region is a small ensemble drama: Nyroth's Fragile Hope, Matters of the Heart, and Old Friends form a chain about grief, memory, and coming home. It's the most emotionally-loaded stretch of the Victoria Island level range - a deliberate breath before the KPQ era hits.",
		],
		activities: [
			{
				title: "Follow Zelya's Map",
				description: "Level 39 opener from Zelya. Introduces the Bluebell mob line and unlocks the sub-map graph. The Return Scroll to Forgotten Hollow becomes buyable in the Cave Fairy Department Store after this.",
				category: "quest",
			},
			{
				title: "Complete the Nyroth arc",
				description: "Fragile Hope, Matters of the Heart, and (with Myra) Old Friends form the emotional spine of the region. Level 45-49. Best done in order for the prose to land.",
				category: "quest",
			},
			{
				title: "Grind the cave-fairy roster",
				description: "10 CoT2-original mobs (Raffle, Aqumander, Echopus, Rafflesia, Duskmander, Myewood, Sporewood, Glowshroom, Golden Stirge, Rotten Mushmom) plus reused classics (Zombie Mushroom, Curse Eye, Lupin) spawn across 27 sub-maps. Level 24-40 spread. Less competition than Sleepywood.",
				category: "combat",
			},
			{
				title: "Chase Rotten Mushmom in Someone Else's Grave",
				description: "The region's own mini-boss - spawns in Someone Else's Grave (map 10006121) alongside Rotten Mushroom, Fairy 3, and Zombie Mushroom. CoT2-original with no upstream stats yet, but it's the region's marquee target for the mid-level party.",
				category: "combat",
			},
			{
				title: "Photograph the Arcane Station",
				description: "The one visible hint of the Arcane River that Classic World won't officially reach. The station is dark and inert here, but the model is intact - lore breadcrumbs for the observant.",
				category: "lore",
			},
			{
				title: "Shop the Cave Fairy Department Store",
				description: "Sells the Return Scroll to Forgotten Hollow (item 2030007) plus a small stock of cave-fairy-themed consumables. Cheap teleport home after the questline concludes.",
				category: "trade",
			},
		],
	},
];

// Cross-region highlights - things that don't belong to one town but
// deserve top-billing on the deep-dive page.
export const victoriaIslandHighlights = [
	{
		title: "Florina Beach",
		blurb: "The tropical eastern beach zone. Home to Lorang and Clang (early-game crab mobs), plus the Tortie beach maps. Accessed from Lith Harbor via ferry.",
	},
	{
		title: "The Shrine of Cave Fairies",
		blurb: "Hidden-street shrine complex tucked behind Ellinia. Cave Fairy Sanctuary is the entry point; the Bluebell / Bluebell Bud spawns here are unique to CoT2.",
	},
	{
		title: "Kerning Party Quest",
		blurb: "The iconic 21-30 party quest. Six characters, one waiting room, one boss room, and a lot of pushing coins into slots. Formative Classic Maple experience.",
	},
	{
		title: "Free Market Entrance (Henesys)",
		blurb: "The Free Market portal north of Henesys - THE trading hub of the entire mainland. Whether trading is enabled on Classic World launch remains one of the biggest open questions.",
	},
];

// Leveling arc narrative - the recommended path through VI for a
// player who's never left the island. Referenced by the page as
// a top-level story panel.
export const levelingArc = [
	{ band: "1-8",   town: "Amherst",       activity: "Snails and shrooms on Maple Island. Finish Rain's Maple Quiz chain, get to level 8." },
	{ band: "8-10",  town: "Southperry",    activity: "Snail Hunting Ground I->III. Ferry to Lith Harbor with Shanks." },
	{ band: "10-15", town: "Lith Harbor",   activity: "Mainland arrival. L Forest I->III for mixed Mushroom/Slime/Pig kills. Do Teo's Weird Hobby chain for early mesos." },
	{ band: "15-25", town: "Henesys / Ellinia", activity: "Pick your class town. Forest West/East of Henesys for Bowmen; Deep Valley I for Mages. Chief Stan's Reply + Mrs. Ming Ming for Henesys XP; Arwen chains for Ellinia." },
	{ band: "25-35", town: "Kerning / Perion",  activity: "Kerning Subway Line 1 Area 1-3 (Wraith XP) or Perion Deep Valley II/III (Fire Boar / Dark Axe Stump). Kerning PQ opens up here." },
	{ band: "30-50", town: "Sleepywood (Sleepy Dungeon)", activity: "Sleepy Dungeon I -> II. Horny Mushrooms then Curse Eyes as you push to 50." },
	{ band: "50-70+", town: "Sleepywood (deeper)",   activity: "Sleepy Dungeon V and the Cave of Evil Eye. Dark Stone Golems. Then off to Orbis via Ellinia." },
];
