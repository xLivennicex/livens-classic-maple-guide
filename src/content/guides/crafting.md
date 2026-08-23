---
# ---------- Core metadata ----------
title: "Crafting Guide"
description: "A complete guide to professions, mastery, materials, recipes, catalysts, weekly crafting kits, and efficient progression in MapleStory Classic World."
lastUpdated: "2026-08-23"
tags:
  - crafting
  - professions
  - equipment
  - materials
  - catalysts
sourceBuild: "Closed Online Test 2"
status: "COT2 - Provisional"

# ---------- Layout ----------
theme: "perion"
decorations: false
eyebrow: "Systems Guide"
heading: "Crafting"
tagline: "Six disciplines, 348 recipes, and one economy in the making. Learn where to farm, how to level Mastery, when to burn a Catalyst, and which crafts actually pay."

# ---------- Verification ----------
verificationStatus: "closed-test-info"
verificationNote: "All numeric details in this guide were recorded from Closed Online Test 2. Recipe counts, Mastery requirements, meso costs, and catalyst behavior may change before or during launch. The 348-recipe figure and per-discipline breakdowns come from the COT2 client snapshot on NiaMeowDB."
sourceSlugs:
  - nexon-cot1-release-notes
  - niameowdb-crafting

# ---------- TOC ----------
toc:
  - { href: "#crafting-at-a-glance", label: "At a glance" }
  - { href: "#the-six-crafting-disciplines", label: "Six disciplines" }
  - { href: "#how-to-learn-a-crafting-discipline", label: "How to learn" }
  - { href: "#the-crafting-workflow", label: "Workflow" }
  - { href: "#crafting-mastery-and-character-level-gates", label: "Mastery & gates" }
  - { href: "#profession-kits-your-weekly-mastery-boost", label: "Weekly Kits" }
  - { href: "#the-four-crafting-catalysts", label: "Catalysts" }
  - { href: "#which-discipline-should-you-level-first", label: "Which first?" }
  - { href: "#crafting-efficiently", label: "Efficiency" }
  - { href: "#frequently-asked-questions", label: "FAQ" }
---

Crafting is one of the largest original systems added to MapleStory Classic World. Instead of relying entirely on monster drops and NPC equipment shops, players can collect ordinary monster materials, process them into refined components, and combine those components with mesos to create weapons, armor, arrows, chairs, scrolls, and other useful items.

The system contains six crafting disciplines, each with its own master, recipes, level, and Mastery bar. The current COT2 database contains **348 recipes** spread across Smithing, Weaponcrafting, Tailoring, Woodcrafting, Leatherworking, and Arcforge. [Browse the complete COT2 recipe index](https://meowdb.com/msclassic/crafting).

> **COT2 information:** Nexon officially introduced Crafting as a new Classic World system during the first Closed Online Test. The detailed recipe counts, Mastery requirements, costs, ingredient quantities, quest rewards, and catalyst behavior in this guide come from the COT2 client snapshot and player observations. They should remain labeled provisional until the live version is verified. [Official Closed Online Test release notes](https://www.nexon.com/maplestory/news/general/39217/closed-online-test-release-notes)

## Crafting at a Glance

| Feature | COT2 implementation |
| --- | --- |
| Number of disciplines | 6 |
| Observed crafting levels | 1â€“10 |
| Current recipe count | 348 |
| Profession unlock quests | Available from level 10 |
| Weekly helper quests | Available from level 15 after learning the discipline |
| Master-recognition quests | Available from level 25 after reaching the required crafting progress |
| Progression value | Mastery, functionally crafting EXP |
| Main material source | Monster drops, quests, and other crafted components |
| Crafting cost | Ingredients plus a recipe-specific meso fee |
| Mastery boost | Profession Kit: +10% crafting Mastery for 15 minutes |
| Special output system | Equipment and Scroll Crafting Catalysts |
| Current maximum | Crafting Level 10 in the observed build |

## How Classic World Crafting Differs from Modern MapleStory

Classic World Crafting should be treated as its own system. Do not copy modern MapleStory profession guides into a Classic World database.

The COT2 implementation did **not** establish the following modern systems:

- Ardentmill as a central profession hub
- Mining and Herbalism as separate gathering professions
- Daily crafting Fatigue
- Craftsman or Meister ranks above Level 10
- Mastery decay
- Equipment extraction and modern item crystals
- Modern recipe scrolls or learned-recipe expiration

Instead, each discipline is taught by a master located on Victoria Island. Ore, wood, cloth, leather, monster parts, and magical fragments come primarily from ordinary gameplay. Crafters process those drops at profession stations and use the resulting materials in higher-level recipes.

No normal recipe-failure percentage has been reliably documented for COT2. The known risk comes from **variable catalyst results**, not a confirmed universal chance for every craft to fail. Do not add modern profession failure rules unless the live client demonstrates them.

## The Six Crafting Disciplines

| Discipline | Master | Location | COT2 recipes | Main focus | Master catalyst |
| --- | --- | --- | ---: | --- | --- |
| Smithing | Silas Irons | Perion | 68 | Ingots, helmets, and metal armor | Armor Crafting Catalyst |
| Weaponcrafting | Mr. Thunder | Perion | 45 | Metal weapons, tools, claws, and weapon components | One-Handed Weapon Crafting Catalyst |
| Tailoring | Francois | Ellinia | 59 | Cloth, thread, dyes, robes, hats, shoes, and capes | Armor Crafting Catalyst |
| Woodcrafting | Vicious | Henesys | 43 | Wood, bows, crossbows, wands, staves, arrows, and chairs | Two-Handed Weapon Crafting Catalyst |
| Leatherworking | JM From tha Streetz | Kerning City | 89 | Leather, hide armor, gloves, shoes, and chairs | Armor Crafting Catalyst |
| Arcforge | Chrishrama | Sleepywood | 44 | Gems, magical materials, magical equipment, and scrolls | Scroll Crafting Catalyst |

COT2 player reports indicated that a single character could learn and train all six disciplines. Their Mastery bars remain separate, so leveling one discipline does not raise the others.

### Smithing

Smithing contains **68 recipes**: 61 equipment recipes and seven material recipes.

Its foundational role is turning ore into metal ingots. Those ingots are required not only by Smithing equipment but also by weapons, leather equipment, tailored gear, wooden weapons, and Arcforge recipes. Because of those cross-discipline dependencies, Smithing is one of the most useful supporting professions even for a character who does not intend to wear metal armor.

Level 10 signature recipes in the COT2 index include:

- Silver Crusader Helm
- Mithril Crusader Helm
- Steel Brist

Smithing's master-recognition quest rewards an **Armor Crafting Catalyst**. Silas Irons requires the player to defeat Dark Axe Stumps and Zombie Mushrooms and present an Orihalcon Ingot and Gold Ingot. [A Blacksmith in My Own Right](https://meowdb.com/msclassic/quest-tracker/80009)

### Weaponcrafting

Weaponcrafting contains **45 recipes**: 43 equipment recipes and two material recipes.

It produces many melee weapons, claws, tools, and metal weapon components. The discipline makes heavy use of ingots from Smithing, Screws, monster materials, and occasionally gems or processed leather from other disciplines.

Level 10 signature recipes include:

- Sai
- The Rising
- Golden Mole

Mr. Thunder's master-recognition quest asks for a crafted Monkey Wrench and 30 Iron Hog defeats. It rewards a **One-Handed Weapon Crafting Catalyst**. [A Weaponcrafter in My Own Right](https://meowdb.com/msclassic/quest-tracker/80012)

### Tailoring

Tailoring contains **59 recipes**: 54 equipment recipes and five material recipes.

It processes cloth, thread, and dyes into robes, hats, shoes, capes, and other lightweight equipment. It frequently uses common ETC items such as Pig's Ribbons, Leaves, Animal Fur Bundles, Tablecloths, Squishy Liquid, and color dyes.

Level 10 signature recipes include:

- Red Penance
- Blue Penance
- Dark Penance

Francois's master-recognition quest asks for a Red Starry Bandana and 30 Wild Boar defeats. It rewards an **Armor Crafting Catalyst**. [A Tailor in My Own Right](https://meowdb.com/msclassic/quest-tracker/80015)

### Woodcrafting

Woodcrafting contains **43 recipes**:

- 23 equipment recipes
- 16 consumable recipes
- Two material recipes
- Two other recipes

Woodcrafting is the most varied discipline. It processes branches and firewood, creates bows, crossbows, wands, staves, chairs, and large batches of arrows. Its arrow recipes are especially important because COT2 changed them to produce full stacks.

Level 10 signature recipes include:

- Adamantium Arrows for Bows
- Mithril Arrows for Crossbows
- Olympus

Vicious's master-recognition quest asks for The Red Relaxer and 30 Dark Axe Stump defeats. It rewards a **Two-Handed Weapon Crafting Catalyst**. [A Carpenter in My Own Right](https://meowdb.com/msclassic/quest-tracker/80018)

### Leatherworking

Leatherworking is the largest discipline with **89 recipes**: 84 equipment recipes, four material recipes, and one other recipe.

It turns Leather and monster hides into processed leather, armor, gloves, shoes, and chairs. The discipline overlaps heavily with Tailoring and supplies processed materials to several weapon and armor recipes.

Level 10 signature recipes include:

- Red Willow
- Blue Willow
- Dark Willow

JM From tha Streetz's master-recognition quest asks for a Red Chair and 30 Wild Boar defeats. It rewards an **Armor Crafting Catalyst**. [A Leatherworker in My Own Right](https://meowdb.com/msclassic/quest-tracker/80021)

### Arcforge

Arcforge contains **44 recipes**:

- 24 consumable recipes
- Ten material recipes
- Ten equipment recipes

Arcforge refines ores into gems, processes magical materials, makes magical equipment, and produces Lesser scrolls. It is the primary crafting discipline for players interested in the scroll economy.

Level 10 signature recipes include:

- Cromi
- Cape STR Scroll: Lesser
- Cape DEX Scroll: Lesser

Chrishrama's master-recognition quest asks for a Topaz and 30 Horny Mushroom defeats. It rewards a **Scroll Crafting Catalyst**. [An Arcforger in My Own Right](https://meowdb.com/msclassic/quest-tracker/80024)

## How to Learn a Crafting Discipline

Each discipline begins with an apprenticeship quest from its master at approximately character level 10.

| Discipline | Apprenticeship quest |
| --- | --- |
| Smithing | Silas Irons in Need of an Apprentice |
| Weaponcrafting | Mr. Thunder in Need of an Apprentice |
| Tailoring | Francois in Need of an Apprentice |
| Woodcrafting | Vicious in Need of an Apprentice |
| Leatherworking | JM From tha Streetz Looking for a Partner |
| Arcforge | Chrishrama in Need of an Apprentice |

The normal flow is:

1. Reach level 10.
2. Visit the appropriate master.
3. Complete the apprenticeship test.
4. Learn that discipline and unlock its Mastery bar.
5. Use the corresponding crafting station to process materials and create items.
6. Return at level 15 for the repeatable helper quest.
7. Continue crafting while observing the character-level gates.
8. Complete the level-25 master-recognition quest after building sufficient crafting skill.

You do not need to choose a discipline based on your combat class. A Warrior can learn Tailoring or Arcforge, and a Magician can learn Smithing. Equipment class and stat requirements still determine who can use the finished item.

## The Crafting Workflow

Most recipes follow a multi-stage production chain.

### 1. Gather Raw Materials

Common material families include:

- Metal and gem ores
- Tree Branches, Firewood, and wooden monster drops
- Leather, Jr. Necki Skin, Ligator Skin, and Croco Skin
- Pig's Ribbons, Leaves, Tablecloths, feathers, and fur
- Monster liquids, powders, spores, skulls, horns, and shells
- Fragment of Magic and other magical drops
- Dyes and special quest materials

Unlike a conventional gathering-profession system, most of these materials enter the economy while players level and hunt monsters. A common ETC drop may have little NPC value but substantial crafting demand.

### 2. Process Intermediate Materials

Raw drops are converted into materials such as:

- Ingots
- Refined gems
- Processed Wood
- Processed Cloth
- Processed Leather
- Spool of Thread
- Screws
- Processed Parchment

Intermediate recipes provide Mastery and often produce batches. Batch sizes matter: if a recipe makes ten Screws and the final item needs 21, you must complete three Screw crafts and will have nine left over.

### 3. Combine Multiple Disciplines

Higher recipes frequently depend on more than one crafting tree.

For example, the COT2 recipe for **Niam** uses:

- Iron Ingots from Smithing
- Emeralds from Arcforge
- Screws from Weaponcrafting
- A Two-Handed Weapon Crafting Catalyst
- The final Weaponcrafting action

The database therefore records three disciplines and multiple precursor crafts before the final weapon. [Niam recipe and full material chain](https://meowdb.com/msclassic/item-db/622)

This creates two viable playstyles:

- **Self-sufficient crafter:** Train several professions and complete the entire chain yourself.
- **Specialist:** Focus on one or two disciplines and buy intermediate materials from other players.

Self-sufficiency saves market purchases but consumes far more time and inventory space. Specialization is usually more practical if an active player market exists.

### 4. Pay the Crafting Fee

Most recipes require a fixed meso fee in addition to their ingredients. The displayed fee is not the complete economic cost; materials could have been sold to an NPC or another player.

Calculate the real cost as:

```text
Crafting fee
+ market value of raw materials
+ value of required catalysts
+ cost of intermediate crafts
- expected value of leftovers
= true production cost
```

### 5. Receive the Item and Mastery

Each completed recipe grants a fixed amount of profession Mastery. The game labels the progress bar **Mastery**, although community databases often call it crafting EXP for clarity.

## Crafting Mastery and Character-Level Gates

Crafting Mastery is not completely independent from character level. Even if you possess enough materials, your profession cannot advance past certain levels until your character reaches the appropriate threshold.

| Current crafting level | Mastery to fill current level | Cumulative after filling | Recorded character-level gate |
| ---: | ---: | ---: | ---: |
| 1 | 50 | 50 | Apprenticeship begins around character level 10 |
| 2 | 115 | 165 | 10 |
| 3 | 199 | 364 | 15 |
| 4 | 308 | 672 | 20 |
| 5 | 450 | 1,122 | 25 |
| 6 | 635 | 1,757 | 30 |
| 7 | 875 | 2,632 | 35 |
| 8 | 1,187 | 3,819 | 40 |
| 9 | 1,593 | 5,412 | 45 |
| 10 | 2,120 | 7,532 | 50 |

The COT2 system capped professions at Level 10. Levels 11 and above have not been confirmed; projected tables for those levels are theoretical and should not be added to a factual database. [COT2 Crafting Mastery table](https://meowdb.com/msclassic/crafting/exp-table)

### Avoid Wasting Mastery

Observed COT2 behavior included an important progression trap:

- If your Mastery bar reaches 100% before your character meets the next level gate, the bar stops.
- Additional Mastery is discarded rather than banked.
- Reaching the required character level does not automatically promote the profession.
- You must craft one more item after reaching the character-level threshold to trigger the next crafting level.

Before starting a large batch, check both your profession bar and character level. Stop crafting when the bar reaches 100% if your character is still below the next gate.

## Profession Kits: Your Weekly Mastery Boost

At level 15, each master offers a repeatable weekly helper quest after you have learned the corresponding discipline.

| Discipline | Weekly reward |
| --- | --- |
| Smithing | Smithing Kit |
| Weaponcrafting | Weaponcrafting Kit |
| Tailoring | Tailoring Kit |
| Woodcrafting | Woodcrafting Kit |
| Leatherworking | Leatherworking Kit |
| Arcforge | Arcforge Kit |

Each Kit recorded the same core effect:

- +10% Mastery earned in its matching discipline
- 15-minute duration
- Tradeable during COT2
- One-use consumable

The weekly quests generally combine monster defeats with gathering or crafting a small batch of relevant materials. For example, Mr. Thunder asks for 25 Axe Stump defeats and ten Screws, while Francois asks for 25 Green Mushroom defeats and ten Spools of Thread.

### Best Way to Use a Kit

1. Gather every raw and intermediate material first.
2. Stand at the correct station with enough mesos.
3. Check that the next character-level gate will not stop you.
4. Use the Kit.
5. Craft the highest-Mastery items you planned during the 15-minute window.
6. Stop if the Mastery bar reaches a gated 100%.

Do not spend the Kit while traveling between masters, farming ingredients, reorganizing storage, or buying missing materials.

## Crafting Kits and Catalysts Are Different

These items serve completely different purposes:

| Item type | Purpose |
| --- | --- |
| Profession Kit | Temporarily increases Mastery earned by 10% |
| Crafting Catalyst | Alters the possible output of an equipment or scroll recipe |

A Kit helps level the profession. A Catalyst affects the crafted item.

## The Four Crafting Catalysts

### One-Handed Weapon Crafting Catalyst

Used with one-handed weapon recipes. It gives the resulting weapon a chance to receive different bonus stats. The result may be better or worse than the ordinary clean value.

In COT1 this record was named **Equipment Crafting Stimulator**. COT2 renamed and narrowed it to one-handed weapons. Its recorded NPC sell-back value fell from 10,000 to 1,000 mesos. [One-Handed Weapon Crafting Catalyst](https://meowdb.com/msclassic/item-db/520)

### Two-Handed Weapon Crafting Catalyst

Used with two-handed weapon recipes. It similarly changes the possible bonus-stat result.

This same underlying record was called **Scroll Crafting Stimulator** in COT1 before becoming the Two-Handed Weapon Crafting Catalyst in COT2. Its sell-back value changed from 5,000 to 1,000 mesos. [Two-Handed Weapon Crafting Catalyst](https://meowdb.com/msclassic/item-db/521)

### Armor Crafting Catalyst

Used by armor recipes across Smithing, Tailoring, and Leatherworking. It introduces variance into the armor's bonus stats. The mastery quests for all three armor disciplines can award one. [Armor Crafting Catalyst](https://meowdb.com/msclassic/item-db/2722)

### Scroll Crafting Catalyst

Used when Arcforging scrolls. It creates a chance for the result to become an **Intermediate, Greater, or Chaos** scroll in the same category instead of remaining Lesser.

The stronger scroll tiers trade power against application chance:

- Lesser: 100% success
- Intermediate: 60% success
- Greater: 10% success
- Chaos: 10% success with a possible destruction penalty when the scroll fails

The catalyst affects the tier of the crafted scroll. It does not guarantee a stronger tier. [Scroll Crafting Catalyst](https://meowdb.com/msclassic/item-db/2723)

### Catalyst Cautions

- Treat catalysts as valuable consumable materials.
- Do not use one merely to gain ordinary Mastery if a cheaper recipe is available.
- Equipment catalysts can create disappointing rolls as well as exceptional ones.
- A high-tier scroll is not automatically more profitable; demand, application chance, and item-destruction risk matter.
- Exact catalyst result probabilities were not publicly confirmed in the COT2 data reviewed for this guide.

## Which Discipline Should You Level First?

Because COT2 allowed broad profession access, the question is less "Which single profession must I choose?" and more "Where should I invest my first limited materials and mesos?"

### Choose Smithing First If...

- You want a dependable supply of ingots.
- You intend to level several other disciplines later.
- You expect demand for processed metals at launch.
- You want metal helmets and armor.

### Choose Weaponcrafting First If...

- You want to craft melee weapons, claws, or specialty tools.
- You are willing to purchase ingots and processed materials.
- You want to gamble on valuable weapon rolls through catalysts.

### Choose Tailoring First If...

- You want robes, hats, capes, and cloth-based equipment.
- You collect large quantities of common cloth and dye materials.
- You are preparing equipment for Magicians or other light-armor users.

### Choose Woodcrafting First If...

- You play Bowman or Magician and want bows, crossbows, wands, or staves.
- You want to make arrows or chairs.
- You want several of the most meso-efficient early Mastery recipes.
- You are interested in supplying consumables to other players.

### Choose Leatherworking First If...

- You want the largest equipment recipe selection.
- You collect animal hides and skins while leveling.
- You want gloves, boots, leather armor, or chairs.
- You plan to supply processed leather to other crafters.

### Choose Arcforge First If...

- You want to refine gems and magical materials.
- You want early access to craftable scrolls.
- You understand that scroll crafting can carry high material and catalyst costs.
- You want to participate in the upgrade economy rather than only equipment production.

## Crafting Efficiently

Crafting is not automatically cheaper than purchasing equipment. The COT2 recipe index shows that most crafts consume more NPC-floor value than the output returns, and real player-market prices can make the difference much larger.

The current efficiency analysis counts:

- 348 total recipes
- Only 11 recipes that are positive against NPC sell-back values
- Nine of those in Woodcrafting
- One in Smithing
- One in Arcforge

This does **not** mean only 11 recipes can make money. NPC sell-back is only a price floor. A rare crafted item may sell for far more to another player, while a supposedly profitable recipe may consume a material with an even higher player-market value. [Crafting Efficiency Guide](https://meowdb.com/msclassic/crafting/efficiency)

### Recorded Profit-Positive Examples

Against NPC values, the leading COT2 examples were:

| Recipe | Discipline | Mastery | Recorded NPC-value result |
| --- | --- | ---: | ---: |
| Iron Knuckle | Smithing Level 8 | 160 | +1,576 mesos |
| Mithril Arrows for Crossbows Ã—500 | Woodcrafting Level 10 | 30 | +1,170 mesos |
| Adamantium Arrows for Bows Ã—500 | Woodcrafting Level 10 | 30 | +1,070 mesos |
| Iron Arrows for Bows Ã—500 | Woodcrafting Level 7 | 21 | +880 mesos |
| Iron Arrows for Crossbows Ã—500 | Woodcrafting Level 7 | 21 | +880 mesos |

These calculations assume farmed materials valued at their NPC sell-back amounts. They are not a launch-market profit guarantee.

### Cheap Mastery Examples

The best recorded Mastery per meso lost included:

| Recipe | Discipline level | Mastery | Recorded loss |
| --- | ---: | ---: | ---: |
| Wooden Baseball Bat | Woodcrafting 3 | 60 | 50 mesos |
| Balanche | Woodcrafting 4 | 80 | 72 mesos |
| Battle Crossbow | Woodcrafting 3 | 60 | 59 mesos |
| Wooden Sword | Woodcrafting 2 | 40 | 40 mesos |
| Wooden Wand | Woodcrafting 2 | 40 | 40 mesos |

Use these as examples of the calculation method, not a permanent leveling route. Launch material prices may make an entirely different recipe more efficient.

## Recommended Crafting Progression

### Character Levels 10â€“14

- Complete the apprenticeship quests for the disciplines you intend to use.
- Do not attempt to level every discipline aggressively at once.
- Keep common ore, branches, leather, cloth materials, and magical fragments.
- Learn which intermediate materials appear across multiple recipes.
- Favor low-cost processing crafts over expensive equipment you do not need.

### Character Levels 15â€“24

- Complete each learned profession's weekly helper quest.
- Save the 10% Kit until you have a prepared crafting batch.
- Watch the character-level gates to avoid discarded Mastery.
- Consider selling scarce raw materials rather than consuming everything yourself.
- Level supporting disciplines only when their intermediates reduce your total cost.

### Character Levels 25â€“39

- Complete the master-recognition quests once eligible.
- Treat the first catalyst as a demonstration item, not a reason to gamble immediately.
- Compare crafted gear with NPC and monster-drop alternatives.
- Begin specializing in recipes with actual player demand.
- Track leftover batches of Screws, Thread, ingots, gems, and processed materials.

### Character Levels 40â€“50+

- Push important disciplines toward Levels 8â€“10.
- Reserve rare catalysts and gems for desirable final products.
- Use market prices rather than NPC values when evaluating profit.
- Coordinate with other crafters to reduce cross-profession overhead.
- Recheck every recipe after launch because COT2 values may change.

## Materials Worth Treating Carefully

Avoid automatically selling the following categories until you have checked both quests and recipes:

- Ore and refined metals
- Gem ore and refined gems
- Screws
- Stiff Feathers
- Processed Cloth, Wood, Leather, and Parchment
- Spools of Thread
- Fragment of Magic
- Dyes
- Animal skins, fur, and Tablecloths
- Monster ETC drops used as alternate processing ingredients
- All four Crafting Catalysts
- All six profession Kits

Some material sell-back prices were sharply reduced in COT2. For example:

- Screw: 20 mesos to 1
- Stiff Feather: 25 mesos to 10
- Processed Cloth: 20 mesos to 10
- Garnet: 1,000 mesos to 200
- One-Handed Weapon Crafting Catalyst: 10,000 mesos to 1,000
- Two-Handed Weapon Crafting Catalyst: 5,000 mesos to 1,000

These reductions make NPC vending less attractive and encourage player-to-player use, but they do not prove that every material will be valuable on the live market.

## COT1 to COT2 Crafting Changes

The raw client comparison reports **15 changed recipes**, describing the changes as cleanup rather than a major rebalance. [COT2 client changelog](https://meowdb.com/msclassic/changelog)

The main recipe updates were:

- Bow and crossbow arrow output names were pluralized.
- Arrow recipes were updated to produce a full stack.
- "Magicshoes" became "Magic Shoes."
- "Windshoes" became "Wind Shoes."
- Several ingredient names received matching cleanup.

The larger system-level change was the catalyst split:

- Equipment Crafting Stimulator became One-Handed Weapon Crafting Catalyst.
- Scroll Crafting Stimulator became Two-Handed Weapon Crafting Catalyst.
- Armor Crafting Catalyst received its own role.
- Scroll Crafting Catalyst received its own role.

Because some quest reward fields still display the former Stimulator names while the COT2 quest dialogue uses the new Catalyst names, a database should join by stable item record rather than visible name.

## Common Crafting Mistakes

### Selling Every ETC Drop

Many ordinary monster drops are now crafting inputs. Check an item's recipe usage before vending a large stack.

### Leveling All Six Disciplines Immediately

Learning every discipline is useful; trying to power-level all six during the early game is extremely expensive. Prioritize one output profession and the supporting materials it actually needs.

### Ignoring the Meso Fee

"I farmed the materials myself" does not make the craft free. Recipes charge mesos, and farmed ingredients still have market value.

### Crafting at a Locked 100% Bar

Mastery earned while waiting for the next character-level threshold was discarded in COT2. Stop the batch when gated.

### Using a Kit Before Preparation

The bonus lasts only 15 minutes. Gather, refine, travel, and organize before activating it.

### Confusing Kits with Catalysts

Kits improve Mastery gain. Catalysts modify output. A catalyst is not a profession-leveling buff.

### Assuming a Catalyst Guarantees an Upgrade

Equipment rolls can be disappointing, and scroll-tier results are not guaranteed. Use catalysts only when the possible upside justifies their value.

### Trusting NPC Profit Calculations as Market Prices

NPC sell-back values are merely a floor. A recipe with a positive NPC calculation can still be a poor trade if its ingredients are scarce and valuable to players.

### Importing Modern MapleStory Rules

Classic World Crafting has different professions, masters, materials, level gates, and catalysts. Do not add Fatigue, Meister decay, mining veins, or Ardentmill mechanics without evidence from the Classic World client.

## Frequently Asked Questions

### How many crafting professions are there?

Six: Smithing, Weaponcrafting, Tailoring, Woodcrafting, Leatherworking, and Arcforge.

### Can one character learn every profession?

COT2 player reports indicated that one character could learn all six, with a separate Mastery bar for each. Confirm this again at live release before presenting it as permanent.

### What is the maximum crafting level?

Level 10 in the observed COT2 build. Higher levels have not been officially confirmed.

### What is Mastery?

Mastery is crafting EXP. Completing recipes raises the Mastery bar for that recipe's discipline.

### How do I increase crafting Mastery faster?

Complete the level-15 weekly helper quest for the matching profession Kit, prepare a full ingredient batch, then use the Kit for a 10% Mastery bonus lasting 15 minutes.

### Does crafting require a separate gathering profession?

No separate Mining or Herbalism profession was established in COT2. Most raw materials come from monsters, quests, or other crafted components.

### Can crafting fail?

A universal normal-recipe failure rate was not confirmed in the sources reviewed. Catalysts can produce weaker or stronger equipment rolls, and Scroll Catalysts can produce riskier scroll tiers, but those mechanics should not be described as a proven generic craft-failure system.

### Are crafted items always better than NPC equipment?

No. Many early crafted items cost more than their NPC alternatives. The potential advantages are availability, special recipes, supplying the player economy, and catalyst-generated stat rolls.

### Which profession is best for making mesos?

There is no permanent answer before the live economy exists. Woodcrafting contained most of the recipes that were positive against COT2 NPC sell-back values, but player prices can completely change the result.

### What does Arcforge make?

Arcforge processes gems and magical materials and creates magical equipment and scrolls. Its Scroll Crafting Catalyst can turn a Lesser-scroll craft into a chance at an Intermediate, Greater, or Chaos version of the same category.

### Should I keep all monster ETC items?

No, but check whether an item appears in crafting or quests before selling it. Keep scarce, heavily reused materials and sell low-demand excess once storage becomes a problem.

## Final Recommendation

Learn Crafting early, but do not try to master everything immediately. Choose one discipline based on the items you want to make, identify the supporting materials it requires, and level only the connected professions that save you meaningful time or mesos.

Keep common crafting drops until you understand their demand, complete the weekly Kit quests, watch the character-level gates, and treat catalysts as valuable risk-and-reward materials rather than ordinary recipe components. Most importantly, compare the full cost of a craft against both NPC equipment and the player market before committing scarce materials.

Crafting is likely to become one of Classic World's defining economic systems. The best crafters will not simply be the players with the highest Mastery â€” they will be the players who understand material chains, batch sizes, market demand, and when an expensive recipe is not worth making.
