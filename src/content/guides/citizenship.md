---
# ---------- Core metadata ----------
title: "Citizenship Guide"
description: "A complete guide to the new Classic World Citizenship system introduced in Closed Online Test 2. Covers Henesys and Kerning City progression, contribution, rewards, and progression traps."
lastUpdated: "2026-08-23"
tags:
  - citizenship
  - systems
  - contribution
  - henesys
  - kerning-city
sourceBuild: "Closed Online Test 2"
status: "COT2 - Provisional"

# ---------- Layout ----------
theme: "lith"
decorations: false
eyebrow: "Systems Guide"
heading: "Citizenship"
tagline: "A new Classic World system: pledge to Henesys or Kerning City at level 12, earn contribution, climb ten grades, and unlock town-specific gear and buffs."

# ---------- Verification ----------
verificationStatus: "closed-test-info"
verificationNote: "All numeric details were recorded from Closed Online Test 2 via Nexon's official release notes and community observations, with system data (grade thresholds, contribution mechanics) cross-verified against the CoT 2 client datamine at osmsdataexplorer.com. Values may change before or during launch. Housing rules, exact contribution reset behavior, and some town-transfer fees were not fully confirmed in COT2."
sourceSlugs:
  - nexon-cot2-release-notes
  - niameowdb-citizenship
  - osmsdataexplorer

# ---------- TOC ----------
toc:
  - { href: "#citizenship-at-a-glance", label: "At a glance" }
  - { href: "#how-to-unlock-citizenship", label: "Unlock" }
  - { href: "#choosing-henesys-or-kerning-city", label: "Choose your town" }
  - { href: "#how-contribution-works", label: "Contribution" }
  - { href: "#all-ten-citizenship-grades", label: "All 10 grades" }
  - { href: "#citizenship-shop-progression", label: "Shops" }
  - { href: "#citizenship-story-quests", label: "Story quests" }
  - { href: "#switching-towns", label: "Switching towns" }
  - { href: "#confirmed-town-benefits", label: "Confirmed rewards" }
  - { href: "#frequently-asked-questions", label: "FAQ" }

# ---------- Confirmed rewards (rendered by BenefitGrid.astro) ----------
benefits:
  - heading: "Citizen of Honor earrings"
    subtitle: "Town-specific equipment (Grade 10)"
    icon: "earring"
    items:
      - town: "henesys"
        name: "Henesys Earrings"
        description: "Required level 57. 42 Magic Defense, +2% Critical Damage, +2 Avoidability. Five upgrade slots. Untradeable."
      - town: "kerning"
        name: "Kerning City Earrings"
        description: "Required level 57. 42 Magic Defense, +2% Critical Damage, +2 Avoidability. Five upgrade slots. Untradeable."
  - heading: "Resident chairs"
    subtitle: "Town-specific setup items (Grade 2)"
    icon: "chair"
    items:
      - town: "henesys"
        name: "Henesys Resident's Chair"
        description: "Restores 20 HP and 5 MP every 10 seconds while seated. 10,000 mesos. Untradeable. One per town."
      - town: "kerning"
        name: "Kerning City Resident's Chair"
        description: "Restores 20 HP and 5 MP every 10 seconds while seated. 10,000 mesos. Untradeable. One per town."
---

Citizenship is a new town-membership system created for MapleStory Classic World. Beginning at level 12, you can pledge yourself to either **Henesys** or **Kerning City**, help local residents through the community board, earn contribution, and advance through ten citizenship grades.

As your grade increases, you gain better town discounts, access to additional shop inventory, special story quests, resident furniture, VIP assignments, and an end-of-progression earring.

> **COT2 information:** Citizenship was officially introduced as a level-12 system during Closed Online Test 2. The detailed values in this guide were recorded from that test build and may change before the system's live release. Housing rules, contribution limits, promotion behavior, and some town-transfer fees were not fully confirmed.

## Citizenship at a Glance

| Feature | COT2 implementation |
| --- | --- |
| Unlock level | Level 12 |
| Available towns | Henesys and Kerning City |
| Active memberships | One town at a time |
| Citizenship grades | 10 |
| Main progression currency | Contribution |
| Main activities | One-time greetings, repeatable dailies, weekly donations, story quests, and VIP dailies |
| Shop/service discount | 5% at Grade 1, increasing to 25% at Grade 10 |
| Storage discount | 5% at Grade 1, increasing to 50% at Grade 10 |
| Early signature reward | Town Resident's Chair at Grade 2 |
| Final recorded reward | Town earrings at Grade 10 |

## How to Unlock Citizenship

Citizenship becomes available when your character reaches **level 12**.

1. Travel to **Henesys** and speak with **Arthur**.
2. Listen to the introductions for Henesys and Kerning City before making your decision.
3. Choose the town you want to represent.
4. Complete the appropriate introductory quest:
    - **To Henesys, the Prairie Town** for Henesys
    - **To the Gray City, Kerning City** for Kerning City
5. Speak with **Arthur** in Henesys or **Roxy** in Kerning City to activate your membership.
6. Visit your town's **Community Board** to begin earning contribution.

Both introductory quests awarded 321 EXP, 351 mesos, five Red Potions, and five Blue Potions in COT2. Those rewards are useful at level 12, but the important reward is access to the citizenship progression system.

## Choosing Henesys or Kerning City

Neither town is universally better. Both share the same grades, contribution structure, storage discounts, core food progression, resident-chair stats, and final earring stats. Your decision mainly changes your grade-gated shop selection, local discounts, story quests, VIP contacts, and cosmetic flavor. Some base civic-store items can be purchased without citizenship.

| | Henesys | Kerning City |
| --- | --- | --- |
| Registration NPC | Arthur | Roxy |
| Civic building | Henesys Town Hall | Kerning City Civic Center |
| Combat identity | Accuracy and critical chance | Evasion and critical damage |
| Town-store buff | Supreme Sniper Potion: +7 Accuracy for 15 minutes | Supreme Dexterity Potion: +7 Evasion for 15 minutes |
| Grade 3 buff | Sharpness Potion: +3% critical chance for 15 minutes | Destructive Potion: +3% critical damage for 15 minutes |
| Stat scroll focus | Overall Armor STR and DEX | Overall Armor LUK and INT |
| Special lesser earring scroll | Critical Damage | Evasion |
| Notable general-store item | Bronze arrows for bows and crossbows | Wolbi Throwing Stars |
| Story content | Two arcs at levels 17 and 27 | One arc at level 17 |
| Grade 5 VIP contacts | Chief Stan and Athena Pierce | Chun Ji and the Dark Lord |
| Town-daydream item | Orange Mushroom Daydream | Ribbon Pig Daydream |

### Who Should Choose Henesys?

Henesys is the most natural first choice for players who value accuracy, STR/DEX equipment support, or critical-chance buffs.

It is especially attractive to:

- Warriors who need accuracy while leveling
- Bowmen who want arrow access and DEX-oriented scrolls
- Physical characters interested in STR/DEX scroll progression
- Players who want both Henesys citizenship story arcs

The **Sharpness Potion** is broadly useful because critical chance can help any offensive class. Henesys also recorded an **Elixir** at Citizen of Honor, while the COT2 Kerning general-store list did not show the same item.

### Who Should Choose Kerning City?

Kerning City leans toward evasion, critical damage, LUK/INT scrolls, and Thief-friendly supplies.

It is especially attractive to:

- Thieves seeking LUK scrolls and Wolbi Throwing Stars
- Magicians interested in Overall Armor INT scrolls
- Characters who already have reliable critical chance and want critical damage
- Players who prefer Kerning City's darker urban atmosphere and NPC storyline

Kerning is not exclusively a Thief town. Its INT scroll makes it a legitimate Magician option, while its critical-damage potion can benefit any build capable of producing critical hits consistently.

> **Simple recommendation:** If you are unsure, choose the town whose exclusive scrolls best match your main stat. Pick Henesys for STR or DEX and Kerning City for LUK or INT. Do not switch solely for a low-grade consumable; rebuilding the other town's contribution is a larger commitment.

## How Contribution Works

Contribution is the progress value used to advance your citizenship grade. You earn it primarily through the Community Board.

### First Greeting Quests

The first time the board sends you to meet a particular resident, you receive a **First Greeting** quest. These are one-time introductions and generally provide better rewards than the repeatable version.

In COT2, an ordinary First Greeting recorded:

- 321 EXP
- 351 mesos
- Five Oranges

Complete these introductions early. In addition to their immediate rewards, they familiarize you with the residents who may appear in later assignments and story quests.

### Asking After Dailies

After meeting a resident, the board can offer an **Asking After** assignment involving that NPC. These are the repeatable daily form of the resident quests.

The recorded contribution reward began at **100 contribution at Grade 1** and increased by **50 contribution per grade**.

An ordinary COT2 Asking After quest recorded 224 EXP, 245 mesos, and five Lemons. Exact rewards may depend on the NPC and grade, so your database should store individual quest records rather than assuming one universal reward.

### Weekly Donation

The weekly community assignment asks for **100 copies of a selected monster ETC drop**. The requested material changes with the quest or grade.

The weekly began at **500 contribution at Grade 1** and increased by **250 contribution per grade**. It also provided better EXP, mesos, and potion rewards than a standard daily.

The weekly should usually be your highest-priority citizenship task:

1. Check the Community Board before selling common ETC drops.
2. Note the requested item and the character-level requirement.
3. Farm or purchase the full stack of 100.
4. Turn it in before the weekly reset.

Do not permanently hoard every ETC item based solely on the COT2 list. The rotation and quantities may be adjusted for launch.

### Grade 5 VIP Dailies

Reaching **Town Resident**, the fifth grade, unlocks VIP dailies from important town figures:

- **Henesys:** Chief Stan and Athena Pierce
- **Kerning City:** Chun Ji and the Dark Lord

The captured COT2 records showed 3,487 EXP for a VIP First Greeting compared with 321 EXP for an ordinary one. Their repeatable Asking After versions recorded 2,440 EXP. These were meaningful early-game rewards in the test, but should remain tagged as COT2 values.

## All Ten Citizenship Grades

You must meet both the character-level requirement and the contribution requirement before promotion. COT2 did not conclusively establish whether contribution resets after every promotion, so avoid building a progression calculator around a reset assumption until the live system can be tested.

| Grade | Title | Required level | Recorded contribution | Eligible service discount | Storage discount | Storage fee per item |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Traveler | 12 | Introductory quest | 5% | 5% | 95 mesos |
| 2 | Visitor | 17 | 1,000 | 7% | 10% | 90 mesos |
| 3 | Helpful Stranger | 22 | 2,000 | 9% | 15% | 85 mesos |
| 4 | Recognized Guest | 27 | 3,000 | 11% | 20% | 80 mesos |
| 5 | Town Resident | 32 | 4,000 | 13% | 25% | 75 mesos |
| 6 | Trusted Neighbor | 37 | 5,000 | 15% | 30% | 70 mesos |
| 7 | Distinguished Citizen | 42 | 6,000 | 17% | 35% | 65 mesos |
| 8 | Town Patron | 47 | 7,000 | 19% | 40% | 60 mesos |
| 9 | Guardian of the Village | 52 | 8,000 | 21% | 45% | 55 mesos |
| 10 | Citizen of Honor | 57 | 10,000 | 25% | 50% | 50 mesos |

Shop, taxi, and service discounts apply only to eligible prices in your **active citizenship town**. Storage follows its own five-percentage-point-per-grade schedule and begins from a base fee of 100 mesos per stored item.

## Important Grade Unlocks

### Grade 2: Visitor

At Visitor, you can purchase your town's resident chair for **10,000 mesos**.

Both chairs:

- Are blocked from trading
- Restore 20 HP and 5 MP every 10 seconds while seated
- Are limited to one version per town

The chairs are primarily collectible identity rewards; their recovery rate is modest.

### Grade 3: Helpful Stranger

This is the first major combat-shopping milestone.

Henesys unlocks:

- Bronze Arrows for Bows and Crossbows
- Sharpness Potion
- Lesser Earring Critical Damage Scroll

Kerning City unlocks:

- Destructive Potion
- Wolbi Throwing Stars
- Lesser Earring Evasion Scroll

### Grade 5: Town Resident

Town Resident unlocks the VIP daily pool. Both towns also recorded Hamburger access and Lesser Topwear/Bottomwear DEF Scrolls at this grade.

### Grade 7: Distinguished Citizen

The town's main-stat scroll identity becomes available:

- Henesys: Lesser Overall Armor STR and DEX Scrolls
- Kerning City: Lesser Overall Armor LUK and INT Scrolls

### Grade 9: Guardian of the Village

Both towns unlock Lesser Gloves Attack and Lesser Gloves Magic Attack Scrolls. These are among the most broadly useful citizenship shop rewards recorded in COT2.

### Grade 10: Citizen of Honor

Citizen of Honor grants the maximum recorded discounts and awards the appropriate town earring.

Both Henesys and Kerning City earrings recorded:

- Required level: 57
- 42 Magic Defense
- +2% Critical Damage
- +2 Avoidability
- Five upgrade slots
- Untradeable

The two earrings had matching captured stats; their town identity and appearance were the distinguishing features.

## Citizenship Shop Progression

The following lists focus on the grade-locked inventory rather than ordinary supplies that anyone can purchase. Prices are the COT2 base prices shown in the civic stores; eligible active-citizen discounts may lower the amount actually paid.

### Henesys Town Hall

| Grade | Notable unlocks |
| --- | --- |
| Base inventory | Supreme Sniper Potion — 600 mesos, +7 Accuracy for 15 minutes |
| Visitor | Salad — 220 mesos; Henesys Resident's Chair — 10,000 mesos |
| Helpful Stranger | Bronze Bow/Crossbow Arrows — 2 mesos each; Sharpness Potion — 750; Lesser Earring Critical Damage Scroll — 50,000 |
| Recognized Guest | Pizza — 252 mesos |
| Town Resident | Hamburger — 350; Lesser Topwear and Bottomwear DEF Scrolls — 25,000 each |
| Trusted Neighbor | Mrs. Ming Ming's Stew — 480; Orange Juice — 540 |
| Distinguished Citizen | Fat Sausage — 800; Lesser Overall Armor DEX and STR Scrolls — 35,000 each |
| Town Patron | Unagi — 1,000 mesos |
| Guardian of the Village | Grape Juice — 1,260; Lesser Gloves Attack and Magic Attack Scrolls — 50,000 each |
| Citizen of Honor | Orange Mushroom Daydream — 500; Elixir — 3,000; Henesys Earrings |

### Kerning City Civic Center

| Grade | Notable unlocks |
| --- | --- |
| Base inventory | Supreme Dexterity Potion — 600 mesos, +7 Evasion for 15 minutes |
| Visitor | Salad — 220 mesos; Kerning City Resident's Chair — 10,000 mesos |
| Helpful Stranger | Destructive Potion — 750; Wolbi Throwing Stars — 1,000; Lesser Earring Evasion Scroll — 25,000 |
| Recognized Guest | Pizza — 252 mesos |
| Town Resident | Hamburger — 350; Lesser Topwear and Bottomwear DEF Scrolls — 25,000 each |
| Trusted Neighbor | Andre's Seafood Soup — 480; Orange Juice — 540 |
| Distinguished Citizen | Fat Sausage — 800; Lesser Overall Armor LUK and INT Scrolls — 35,000 each |
| Town Patron | Unagi — 1,000 mesos |
| Guardian of the Village | Grape Juice — 1,260; Lesser Gloves Attack and Magic Attack Scrolls — 50,000 each |
| Citizen of Honor | Ribbon Pig Daydream — 500; Kerning City Earrings |

All recorded civic scrolls had a 100% success rate. Their "Lesser" designation reflects their smaller bonuses, not a reduced success chance.

## Citizenship Story Quests

Citizenship also adds character-driven quests that expand the identity of each town.

### Henesys

**A Family Reunited — Level 17**

This chain follows Bruce, Mrs. Ming Ming, and Ayan. Its COT2 quest records include Bruce's Dilemma, Mrs. Ming Ming's Advice, Bruce's Cooking Ingredients, A Father's Love for His Daughter, and The Best Dad.

**After the Festival Ends — Level 27**

This chain explores Mrs. Ming Ming and Chief Stan's past. Its records include Mrs. Ming Ming's Concern, Chief Stan's Past, Chief Stan's Hammer, Memories of Youth, and Regained Vitality.

### Kerning City

**Jake's Trauma — Level 17**

This chain begins with Jake's fear of Stirges and sends the player through a search for a cure. Its records include Stirge Phobia, Making the Medicine, The Final Ingredient for the Cure, Grandfather's Vitamin Gummy, and It's All in the Mind.

These story quests are separate from the ordinary greeting, daily, and weekly contribution loops. Complete them when they appear so they do not become buried beneath repeatable board assignments.

## Switching Towns

You can represent only one town at a time, but switching does not appear to erase previous progress.

The COT2 behavior was:

1. Your original town's grade and contribution are banked.
2. The new town begins with its own independent progression.
3. The first move to the other town is free.
4. Returning to a previously represented town reactivates its saved progress.

A captured Grade 1 return required **50,000 mesos**. Reactivation costs at other grades were not confirmed. Because the towns maintain separate progress, switching is not an efficient shortcut for collecting both shop inventories.

Before changing towns, consider:

- Whether you have purchased the current town's important grade unlocks
- Whether you are close to the next promotion
- Whether you need the other town's stat scrolls immediately
- Whether the possible reactivation fee is worth paying
- Whether a post-COT2 update has changed the transfer rules

## Recommended Progression Strategy

### Levels 12–16

- Unlock Citizenship immediately at level 12.
- Choose a town based on your main stat and preferred buff.
- Complete every available First Greeting.
- Begin the repeatable board quests.
- Check the weekly request before selling ETC drops.

### Levels 17–21

- Reach Visitor as soon as your contribution allows.
- Purchase the resident chair if you want the collectible.
- Complete your town's level-17 story arc.
- Continue the weekly even if your level temporarily blocks the next grade.

### Levels 22–31

- Helpful Stranger provides the first meaningful town-exclusive combat purchases.
- Compare the cost of temporary buffs with the actual benefit to your class.
- Henesys citizens can begin using the critical-chance potion and specialty arrows.
- Kerning citizens can obtain the critical-damage potion and Wolbi stars.
- Henesys characters should complete the second story arc at level 27.

### Levels 32–46

- Town Resident unlocks VIP assignments; prioritize these when available.
- Continue weekly donations for the largest contribution gains.
- Reach Distinguished Citizen for the town-specific overall-armor stat scrolls.

### Levels 47–57+

- Maintain weeklies rather than switching towns late in the progression.
- Guardian of the Village unlocks both Gloves Attack and Magic Attack scrolls.
- Reach Citizen of Honor for maximum discounts and the town earring.

## Common Mistakes

### Choosing a Town Only for Its Appearance

Town flavor matters, but check the scroll inventory first. A STR-based Warrior may get more practical value from Henesys, while a LUK-based Thief may prefer Kerning City.

### Selling Every ETC Drop

The weekly requires a stack of 100 monster ETC items. Check the board before cleaning your inventory or selling accumulated drops.

### Expecting Contribution Alone to Promote You

Every grade also has a character-level gate. You can accumulate the required contribution and still have to level before advancing.

### Assuming Every Price Receives a Discount

Only eligible town prices are discounted. Do not apply the displayed percentage automatically to every civic-store item in a calculator.

### Switching to Collect Both Towns Immediately

The second town has separate progression, and returning may cost mesos. Citizenship is designed as a town commitment, not a free dual-reward system.

### Treating Housing as Finished Content

Estate agents and furnishing-related NPCs appeared, but playable housing rules were not available in COT2. Do not publish house prices, ownership limits, or release timing as confirmed facts.

## Frequently Asked Questions

### Can I join both Henesys and Kerning City?

You can build progress in both towns over time, but only one membership can be active at once. Each town maintains separate progress.

### Is switching towns free?

The first observed move was free. A captured Grade 1 return cost 50,000 mesos. Other reactivation fees remain unconfirmed.

### Does switching erase my old grade?

No. In COT2, the old town's progress was banked and restored when that citizenship was reactivated.

### What is the fastest source of contribution?

The weekly donation gives substantially more contribution than one normal daily. Complete the weekly, then keep up with the repeatable dailies and any VIP assignments available to you.

### Are the shops citizenship-exclusive?

The civic stores themselves can be opened by non-citizens, but citizenship grade controls access to additional inventory. Active citizens also receive eligible town discounts.

### Which town is best for Warriors?

Henesys is the clearest default because of its accuracy potion and STR scroll, although your equipment plan may make another choice reasonable.

### Which town is best for Bowmen?

Henesys naturally supports Bowmen with accuracy, DEX scrolls, and bronze arrows.

### Which town is best for Thieves?

Kerning City naturally supports Thieves with LUK scrolls, evasion, critical damage, and Wolbi Throwing Stars.

### Which town is best for Magicians?

Kerning City's INT scroll is attractive, but the best choice may depend on how critical chance and critical damage function for your build in the final version.

### Is Citizenship confirmed to be unchanged at launch?

No. The existence of the system and its level-12 COT2 introduction are official, but the detailed figures in this guide are test-build observations. Recheck contribution requirements, quest rewards, shop inventories, town switching, and housing when the live version becomes available.

## Final Recommendation

Unlock Citizenship at level 12 and begin contributing immediately. Choose Henesys or Kerning City based primarily on the scrolls and combat benefits that suit your character, complete the weekly donation before worrying about smaller optimizations, and avoid switching towns until you have collected the important rewards from your current progression tier.

Citizenship rewards consistency more than rushing. Treat it as a background progression path alongside leveling: check the board whenever you return to town, save the weekly ETC material, complete new story quests as they appear, and let your citizenship grade rise naturally with your character.
