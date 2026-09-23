---
# ---------- Core metadata ----------
title: "Assassin Build & Gearing Deep-Dive"
description: "A data-driven guide to building a Classic World Assassin. Covers AP allocation (pure LUK vs DEX-per-level), the full claw progression L10-70, Sauna Robe scroll math, and why Classic World's scroll-system rebalance kills the old dexless meta and replaces it with something even more LUK-focused."
lastUpdated: "2026-09-22"
tags:
  - assassin
  - thief
  - build
  - claws
  - scrolls
  - luk
  - dexless
sourceBuild: "Closed Online Test 2 datamine"
status: "COT2 datamine + v83 baseline"

# ---------- Layout ----------
theme: "kerning"
decorations: false
eyebrow: "Class Deep-Dive"
heading: "Assassin build & gearing"
tagline: "Pure LUK still wins. Actually, more than ever - Classic World rebalanced the scroll system in a way that puts overalls back on top of separate top+bottom for stat stacking. Here is the math."

# ---------- Verification ----------
verificationStatus: "closed-test-info"
verificationNote: "All numeric item data (claw stats, overall/top/bottom armor stats, scroll rates, req DEX/LUK) pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. AP-allocation advice extrapolates from that data and from the v83 baseline described in the Thief job guide. The 25-DEX job-advancement gate is v83 canonical but is NOT confirmed for Classic World from the datamine - the quest DB does not encode NPC stat gates. Actual hit-rate math and skill damage formulas at launch may vary from v83 baseline."
sourceSlugs:
  - osmsdataexplorer
  - ayumilove-v83-thief

# ---------- TOC ----------
toc:
  - { href: "#tldr", label: "TL;DR" }
  - { href: "#what-changed-in-classic-world", label: "What changed in CW" }
  - { href: "#the-25-dex-advancement-question", label: "The 25-DEX question" }
  - { href: "#ap-allocation-pure-luk-vs-balanced", label: "AP allocation" }
  - { href: "#claw-progression-l10-70", label: "Claw progression" }
  - { href: "#throwing-star-progression-and-the-boss-drop-grind", label: "Throwing star progression" }
  - { href: "#armor-progression-and-the-sauna-robe", label: "Armor progression" }
  - { href: "#scroll-math-deep-dive", label: "Scroll math" }
  - { href: "#the-final-verdict", label: "Verdict" }
  - { href: "#faq", label: "FAQ" }
---

## TL;DR

If you played 2005-era GMS Assassins you already know the shape of the classic **"dexless" build**: put the minimum DEX needed for job advancement (25) and dump every subsequent point into LUK. Everything - hit rate, damage, weapon requirements - gets balanced through equipment scrolling rather than base stats.

**Classic World kept the spirit of the meta but changed almost every number underneath it.** Four specific rebalances matter:

1. **Claws now have `reqDEX = reqLevel` exactly** (no "buffer" DEX needed above your character level - a huge quality-of-life win for LUK-focused builds).
2. **The L30 Sauna Robe gives +1 to every stat**, has 10 upgrade slots, and is available to any job - an obscenely good universal L30 overall that used to have no equivalent in classic v83.
3. **Topwear and Bottomwear stat scrolls no longer exist.** The only way to scroll LUK/DEX/STR/INT onto body armor is via **Overall Armor scrolls**. This alone tilts the entire gearing metagame back toward overalls and away from separate top+bottom pieces.
4. **Every throwing star is now Level 10 required** (v83 gated Ilbis at L64, Hwabi at L70). The stat/damage progression across the star roster is unchanged, but the *level gate* is gone - if you can farm the drop or borrow the mesos, you can equip endgame stars at first-job. Getting them is another story - most of the top-tier stars still only drop from world bosses. See [Throwing star progression](#throwing-star-progression-and-the-boss-drop-grind) for the full table plus the Mushmom-Ilbi grind reality check.

Add that up and the recommendation is louder than in v83: **wear a scrolled overall, use the low-DEX claws Classic World gave you, dump AP into LUK.** The rest of this guide is the receipts.

> **Verification note.** Every numeric value in the tables below comes from the CoT 2 client datamine at osmsdataexplorer.com. The one thing that is *not* verified is whether Classic World kept the 25-DEX job-advancement gate from v83 - the datamine doesn't encode NPC stat checks. Both cases are covered in the AP allocation section.

---

## What changed in Classic World

Three concrete, datamine-confirmed differences from v83 GMS that reshape the Assassin metagame.

### 1. Claw DEX requirements dropped to exactly your character level

In old-school GMS, claws demanded DEX **above** their level requirement (e.g., L15 Steel Titans wanted 20-25 DEX depending on tier). That created a permanent "DEX tax" - even the purest LUK build had to keep DEX ~5-10 points above what advancement demanded, just to equip weapons.

In Classic World, every claw's `reqDEX` matches its `reqLevel` exactly:

| Weapon level | reqDEX (CW) | reqDEX (v83 range, from memory) |
|---|---|---|
| L10 Garnier | **0** | ~15 |
| L15 Titans | **15** | ~20-25 |
| L20 Igor | **20** | ~25-30 |
| L25 Meba | **25** | ~30-35 |
| L30 Guards | **30** | ~35-40 |
| L50 Slain | **50** | ~55-65 |
| L70 Scarab | **70** | ~75-85 |

**Consequence:** if you AP-invest DEX at "1 per level" (which is the natural pace to hit both advancement gates and equipment requirements), you can equip *any* claw at your level without carrying dead points. The dexless build no longer costs you ~10 LUK across a character's life.

### 2. The Sauna Robe is stupidly good for a universal L30 overall

The **Blue Sauna Robe (males, 1050010)** / **Red Sauna Robe (females, 1051004)** are the reward from the [Sleepywood Sauna Robe Chain](/quests/sleepywood-sauna-robe-chain). Both have identical stats:

- **+1 STR, +1 DEX, +1 INT, +1 LUK**
- **+75 Weapon Defense**
- **+10 MaxHP, +10 MaxMP**
- **10 upgrade slots** (generous for a L30 overall)
- **Any job** can equip
- **1.5x HP/MP recovery** when worn inside the Sleepywood VIP Sauna map

In v83 GMS, universal-class L30 overalls that hit multiple stats were rare and mediocre. Classic World's Sauna Robe is a one-quest-away legendary. Every class benefits, but LUK-dependent classes benefit most because it's often their *only* L30-33 option that provides any LUK at all before their thief-locked overalls unlock at L35.

See the [Blue Sauna Robe item page](/items/blue-sauna-robe) for the full breakdown. **Bottom line for Assassins**: it's a five-level bridge from L30 to L35 that costs nothing but a fetch quest.

### 3. Topwear + Bottomwear stat scrolls DO NOT EXIST in Classic World

This is the one that changes everything. I pulled every scroll in the `2040xxx` range from the CoT 2 datamine and cross-referenced against the v83 baseline. Here's the actual shape:

| Scroll family | STR | DEX | INT | LUK | DEF | HP | MP | Accuracy | Other |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Overall Armor** | Yes | Yes | Yes | **Yes** | Yes | — | — | — | — |
| **Topwear** | **NO** | **NO** | **NO** | **NO** | Yes | Yes | Yes | — | — |
| **Bottomwear** | **NO** | **NO** | **NO** | **NO** | Yes | Yes | Yes | — | — |
| Hat | — | — | — | — | — | Yes | Yes | Yes | — |
| Earring | Yes | Yes | Yes | **Yes** | — | — | — | — | Crit Dmg, Evasion |
| Shoes | — | — | — | — | — | — | — | — | Jump, Speed, Evasion |
| Gloves | — | — | — | — | — | — | — | Yes | Attack, Magic Att, Crit Rate |
| Shield | — | — | — | — | Yes | — | — | Yes | — |

**In v83, you could stack LUK across top+bottom by scrolling each piece separately.** In Classic World, top/bottom scrolls only add DEF/HP/MP. The only slot you can scroll for LUK on body armor is an **Overall**.

> **Verification caveat — the "Nexon rebalanced this" framing needs an asterisk.** The datamine claim (zero Top/Bottom stat scrolls in Classic World's base itemdb) is fully verified — I scanned every scroll ID 2040000-2049999 and the sub-ranges `20404xx` (Topwear) and `20406xx` (Bottomwear) contain only DEF/HP/MP variants. However, in v83 GMS, the widely-used Top/Bottom stat scrolls (Top for LUK 30%, Bottom for LUK 30%, etc.) also weren't in the base itemdb — they came from Cash Shop / Reward Point / Gachapon systems layered on top of the base game. So the honest framing is: **Classic World's base scroll shop currently has zero Top/Bottom stat scrolls**, not "Nexon deliberately removed something v83 had." Whether Nexon adds them via cash shop / gacha / events at launch is genuinely unknown as of the CoT 2 snapshot. If they do ship, the top+bottom vs overall math in this guide gets rerun. The practical conclusion for now is unchanged: **the only shop-obtainable path to scrolled body-armor stats in CW is an Overall.**

This means: **if you care about scrolled LUK from body armor, you must wear an overall, full stop.** Separate top+bottom combos still exist and can have LUK as base stats, but that number is fixed at whatever the item's base roll gave you. No compounding through scrolling.

---

## The 25-DEX advancement question

This is the one open question in this guide. Your existing [Thief job guide](/jobs/thief) says advancement to Rogue at L10 requires **25 DEX** - that's the v83 canonical value, and Nexon's CoT 2 datamine (which encodes quests, items, mobs) does **not** encode the NPC stat gate on job advancement. So neither the datamine nor observation-so-far can confirm or deny whether Classic World kept it.

Here's how to plan around each case:

### Case A: 25 DEX gate still exists (v83 default)

Same as v83:

- Start with base 4 DEX and 4 LUK.
- From L1-9, every level-up gives 5 AP. That's 45 AP total for L2-L10.
- **Move 21 AP into DEX** across those nine level-ups (to reach 4 + 21 = 25).
- **Put the remaining 24 AP into LUK** (base 4 + 24 = 28 LUK by L10 - enough to equip the Garnier at 25 LUK).
- After L10 advancement, dump every point into LUK (or keep DEX at your character level for hit rate - see next section).

The DEX-gate cost: **21 permanently "wasted" AP** early on (they contribute to hit rate against level-appropriate mobs but not damage).

### Case B: no DEX gate (unconfirmed CW change)

If Classic World dropped the gate:

- Every AP into LUK from L1.
- By L10 you'd have base 4 DEX (unchanged) and 4 + 45 = 49 LUK.
- Equip the Garnier the moment you hit L10 (0 DEX required, 25 LUK required - you have 49).
- Advance to Rogue.
- Now you're **21 LUK richer permanently** vs Case A. That's approximately +21 damage per Lucky Seven star, forever.

**Practical recommendation until launch:** plan for Case A. If you find out at launch that DEX isn't gated, you get a happy surprise - shift the 21 unallocated AP from your DEX-per-level plan into LUK and you're back on track. If it *is* gated and you planned for Case B, you're stuck at L10 unable to advance until you either burn AP or wait for a stat reset.

**The safe path costs you 21 potential damage. The risky path can cost you a level of grinding to fix.** Case A wins on expected value until we have live data.

---

## AP allocation: pure LUK vs balanced

Once you're past the L10 advancement gate (or not, per above), the real question is: **do you dump every AP into LUK for damage, or keep DEX pace-matched to your character level for hit rate?**

### Option 1: Pure LUK ("LUK all day")

- After the 25-DEX gate (or 4 DEX if there is no gate), every AP into LUK.
- Maximum LUK = maximum Lucky Seven damage.
- **Hit rate suffers** against same-level and higher mobs unless you scroll DEX from gear (earrings, hats, gloves - Overall armor if you go that route).

### Option 2: DEX = character level

- Keep base DEX equal to your character level - so a L40 Sin has 40 DEX and everything else in LUK.
- Slightly lower damage; substantially more consistent hits.
- **Recommended for solo grinders** who can't afford to miss half their attacks.

### Option 3: Hybrid - DEX = character level -1, tapering off

- Follow the DEX-per-level rule through L30-40, then start pouring AP into LUK once your scrolled gear closes the hit-rate gap.
- Best of both worlds if you can afford scrolls.

### Which one to pick

**In Classic World, Pure LUK is stronger than it was in v83** for four compounding reasons:

1. **Claws matched DEX to level, so DEX-per-level pace is just enough to equip weapons** - the "buffer" DEX tax is gone.
2. **Overall Armor DEX scrolls exist**, so you can add scrolled DEX to your overall as a hit-rate cushion without touching base AP.
3. **Lucky Seven damage is LUK-only** - the weapon's base Attack is irrelevant to the formula (this is v83 canonical and appears unchanged in CW's datamined skill definitions).
4. **No Topwear/Bottomwear LUK scrolls means every LUK-related meso goes through overalls** - concentrating your scroll investment on one high-slot item where each success matters more.

**Verdict:** Pure LUK if you plan to scroll a Sauna Robe or Dark Avenger seriously. DEX-per-level if you're leveling casually with unscrolled gear.

---

## Claw progression L10-70

Every claw in Classic World's datamine, ranked by damage tier. **Best-in-slot (BiS) per tier is bolded** - usually the one with the +1 or +2 Critical Rate bonus, because a Sin's damage output leans hard on crits.

### The full table

| Level | Claw | Base PAD | PAD range | Crit Rate | Attack Speed | Slots | Sell price |
|---|---|:---:|:---:|:---:|:---:|:---:|---:|
| **L10** | Garnier / Beginner's Garnier | 10 | 9-11 | 0 | 5 (Fast) | 7 | 2,500 |
| L15 | Steel Titans | 13 | 12-14 | 0 | 4 (Fast) | 7 | 3,500 |
| L15 | Mithril Titans | 14 | 13-15 | 0 | 4 (Fast) | 7 | 3,700 |
| **L15** | **Gold Titans** | 14 | 13-15 | **+1** | 4 (Fast) | 7 | 3,900 |
| L20 | Bronze Igor | 16 | 15-17 | 0 | 4 (Fast) | 7 | 4,500 |
| L20 | Steel Igor | 17 | 16-18 | 0 | 4 (Fast) | 7 | 4,700 |
| **L20** | **Adamantium Igor** | 17 | 16-18 | **+1** | 4 (Fast) | 7 | 4,900 |
| **L25** | **Meba** | 19 | 18-20 | 0 | **3 (Faster)** | 7 | 5,500 |
| L30 | Steel Guards | 22 | 20-24 | 0 | 4 (Fast) | 7 | 6,500 |
| L30 | Mithril Guards | 23 | 21-25 | 0 | 4 (Fast) | 7 | 6,700 |
| **L30** | **Adamantium Guards** | 23 | 21-25 | **+1** | 4 (Fast) | 7 | 6,900 |
| L35 | Bronze Guardian | 25 | 23-27 | 0 | 4 (Fast) | 7 | 9,000 |
| L35 | Silver Guardian | 26 | 24-28 | 0 | 4 (Fast) | 7 | 9,500 |
| **L35** | **Dark Guardian** | 26 | 24-28 | **+1** | 4 (Fast) | 7 | 10,000 |
| L40 | Steel Avarice | 28 | 26-30 | 0 | 4 (Fast) | 7 | 11,500 |
| L40 | Blood Avarice | 29 | 27-31 | 0 | 4 (Fast) | 7 | 12,000 |
| L40 | Adamantium Avarice | 29 | 27-31 | 0 | 4 (Fast) | 7 | 12,000 |
| **L40** | **Dark Avarice** | 29 | 27-31 | **+1** | 4 (Fast) | 7 | 12,500 |
| L50 | Steel Slain | 34 | 31-37 | 0 | 4 (Fast) | 7 | 16,500 |
| L50 | Blood Slain | 34 | 31-37 | 0 | 4 (Fast) | 7 | 17,000 |
| **L50** | **Sapphire Slain** | 34 | 31-37 | **+1** | 4 (Fast) | 7 | 17,000 |
| L50 | Dark Slain | 34 | 31-37 | 0 | 4 (Fast) | 7 | 17,500 |
| L60 | Bronze Gigantic | 40 | 36-44 | 0 | 4 (Fast) | 7 | 21,500 |
| L60 | Blood Gigantic | 41 | 37-45 | 0 | 4 (Fast) | 7 | 21,500 |
| **L60** | **Sapphire Gigantic** | 41 | 37-45 | **+2** | 4 (Fast) | 7 | 21,500 |
| L60 | Dark Gigantic | 41 | 37-45 | 0 | 4 (Fast) | 7 | 21,500 |
| L70 | Brown Scarab | 46 | 42-50 | 0 | 4 (Fast) | 7 | 26,500 |
| L70 | Green Scarab | 47 | 43-51 | 0 | 4 (Fast) | 7 | 26,500 |
| **L70** | **Blue Scarab** | 47 | 43-51 | **+2** | 4 (Fast) | 7 | 26,500 |
| L70 | Black Scarab | 47 | 43-51 | 0 | 4 (Fast) | 7 | 26,500 |

### Callouts from the claw data

- **Every claw has exactly 7 upgrade slots.** So scroll investment scales with the claw's base attack, not its slot count.
- **Meba (L25) is the ONLY faster-speed claw in the game.** Attack speed 3 vs 4 for everything else. That's a real DPS bump for a single-tier weapon - hold onto it a level or two past L30 if your Guards claw hasn't dropped or you can't craft Adamantium.
- **Crit-rate claws (the "+1 CRD" variants) are your damage BiS at every tier.** Not the highest raw PAD - but the crit bump usually outweighs the ~1 base attack difference for Lucky Seven damage. Sapphire Gigantic and Blue Scarab at L60/L70 crank crit to +2 which is even better.
- **Gold Titans and Adamantium Guards are craftable via Weaponcrafting** from their base variants plus Gold/Adamantium Ingots. See the [Crafting Guide](/crafting) for the discipline breakdown. Craft-to-order beats hoping for RNG drops if you have a crafter in the party.

---

## Throwing star progression and the boss-drop grind

The claw progression above tells only half the damage story. **Lucky Seven uses the star's Weapon Attack value in its damage calculation, not the claw's** - so which throwing stars you feed your Sin matters as much as which claw you swing.

This section covers every throwing star in Classic World's datamine, ranked by Weapon Attack, cross-referenced against the mob drop tables (verified from CoT 2 + mobs.json), with honest grind-time footnotes on the ones you'll be farming for weeks.

### The full star roster (all 11 stars, sorted by damage tier)

| Star | Item ID | Req Lv | **WATK** | Stack size | Shop price | Drop sources (Level range) |
|---|:---:|:---:|:---:|:---:|:---:|---|
| **[Subi](/items/2070000)** | 2070000 | 10 | **+15** | 500 | 250 | [Jr. Sentinel](/mobs/1001) (L23), [Mano](/mobs/700004) (L20 mini-boss) |
| **[Wolbi](/items/2070001)** | 2070001 | 10 | **+17** | 500 | 500 | [Fire Boar](/mobs/30) (L32), Leatty (L32), Jr. Cellion (L33) |
| **[Snowball](/items/2070008)** | 2070008 | 10 | **+17** | 800 | 500 | [Fire Boar](/mobs/30) (L32), [Lupin](/mobs/35) (L37) |
| **[Mokbi](/items/2070002)** | 2070002 | 10 | **+19** | 700 | 1,000 | Jr. Wraith (L35), [Cold Eye](/mobs/37) (L40), [Stone Golem](/mobs/47) (L55), Jr. Pepe (L35) |
| **[Wooden Top](/items/2070009)** | 2070009 | 10 | **+19** | 800 | 500 | Axe Stump (L17), Dark Axe Stump (L22) |
| **[Kumbi](/items/2070003)** | 2070003 | 10 | **+21** | 700 | 1,500 | [Fire Boar](/mobs/30) (L32), [Lupin](/mobs/35) (L37), Drake (L50), [Stone Golem](/mobs/47) (L55), Jr. Grupin (L33) |
| **[Icicle](/items/2070010)** | 2070010 | 10 | **+21** | 800 | 500 | [Cold Eye](/mobs/37) (L40) |
| **[Tobi](/items/2070004)** | 2070004 | 10 | **+23** | 1,000 | 2,500 | [Stone Golem](/mobs/47) (L55), Dark Stone Golem (L58), Wild Kargo (L62), White Fang (L58) |
| **[Steely](/items/2070005)** | 2070005 | 10 | **+25** | 1,000 | 10,000 | Red Drake (L60), Tauromacis (L70) |
| **[Ilbi](/items/2070006)** ¹ | 2070006 | 10 | **+27** | 800 | 20,000 | **[Mushmom](/bosses/mushmom) (L60 boss)**, **[Zombie Mushmom](/bosses/zombie-mushmom) (L65 boss)**, Lycanthrope (L80) |
| **[Hwabi](/items/2070007)** ² | 2070007 | 10 | **+29** | 800 | 25,000 | **[Jr. Balrog](/bosses/jr-balrog) (L55 boss)**, **[Zombie Mushmom](/bosses/zombie-mushmom) (L65 boss)** |

*Data source: CoT 2 items.json (WATK + reqLevel parsed from item descriptions), mobs.json drop tables, cross-referenced 2026-09.*

### The huge Classic World change: level gates are gone

**In v83 GMS**, throwing stars gated hard on character level:

| Star | v83 Req Lv | CW Req Lv | Delta |
|---|:---:|:---:|---|
| Subi | 15 | **10** | -5 |
| Wolbi | 25 | **10** | -15 |
| Mokbi | 30 | **10** | -20 |
| Kumbi | 35 | **10** | -25 |
| Tobi | 43 | **10** | -33 |
| Steely | 50 | **10** | -40 |
| Ilbi | **64** | **10** | **-54** |
| Hwabi | 70 | **10** | -60 |

**In Classic World, every star is Level 10 required.** Confirmed via the CoT 2 client datamine: each star's `description` field explicitly states `"Level Required: 10, Weapon Attack +XX"` and there's no separate reqLevel field overriding it.

**What this means practically:**

- The moment you become an Assassin at L30, you can equip **any** star in the game - even Hwabis with their +29 WATK - if someone hands them to you or you can afford the 25k shop price for one bundle.
- The bottleneck is now **acquisition**, not level gating. Ilbis and Hwabis still drop only from world bosses (below), so most Sins will grind through the Wolbi→Kumbi→Tobi→Steely tiers via mob drops before they ever see an Ilbi.
- **This is a MASSIVE quality-of-life win for late-bloomer Sins.** In v83 you couldn't equip Ilbis until L64. In CW, if you find a rich friend with a Mushmom hunter alt, you're throwing Ilbis at L30 the moment you Rogue-advance.

### The novelty stars (Snowball, Wooden Top, Icicle)

Three "flavor" stars sit next to the main progression. All are +17 to +21 WATK - same tier as Wolbi/Mokbi/Kumbi - but drop from much lower-level mobs:

- **[Wooden Top](/items/2070009)** (+19 WATK) drops from **Axe Stump (L17)** and **Dark Axe Stump (L22)**. This is arguably the single most efficient star farm in the whole game for a fresh L30 Rogue - Axe Stumps are trivial to solo at L30-35, and +19 WATK matches Mokbi's damage tier without paying 1,000 mesos per bundle to a Kerning shop. Also called out in the [training routes guide](/training-routes).
- **[Snowball](/items/2070008)** (+17 WATK, matches Wolbi) drops from Fire Boar / Lupin at L32-37. Same tier as Wolbi so it's mostly a cosmetic swap, but it stacks to 800 vs Wolbi's 500 - fewer inventory refills on long grinds.
- **[Icicle](/items/2070010)** (+21 WATK, matches Kumbi) drops from Cold Eye (L40). Also stacks to 800. Cold Eye grinding at L40-45 is a classic Sin training route, so if you're already there for the EXP you'll auto-farm Icicles.

**Practical order for a self-farming Sin:**

1. **L10-30 (pre-Rogue):** Shop Subis. 250 mesos per bundle, easy.
2. **L30-40 (fresh Rogue → Assassin):** Farm Wooden Tops on Axe Stumps → +19 WATK for free.
3. **L40-50:** Farm Icicles on Cold Eyes (also efficient EXP) → +21 WATK.
4. **L50-60:** Farm Tobis on Stone Golems / White Fangs → +23 WATK, and Stone Golem also drops mesos + scrolls.
5. **L60+:** Grind Steely on Red Drakes, or start the world-boss farms below.

### The endgame grind: Ilbi and Hwabi

Here's where honesty matters. **The top two star tiers only drop from world bosses.** No shop sells them (Kerning caps at 25k Hwabi listings but stock is speculative), no mob under L55 has them in its table.

#### Ilbi Throwing Stars — the iconic +27 WATK

Drops from:

- **[Mushmom](/bosses/mushmom)** (L55, 20,000 HP, world boss) - once per real-world hour per channel, spawns in one of ~7 possible Henesys-area hidden streets, replacing a Green Mushroom mob. First-hit-wins culture in most classic servers.
- **[Zombie Mushmom](/bosses/zombie-mushmom)** (L60, 35,000 HP, world boss) - deep Sleepywood hidden street, same once-per-hour-per-channel spawn.
- **Lycanthrope** (L80, 27,000 HP, regular mob) - not yet mapped in the CoT 2 datamine's spawn table, but community reports place it in unnamed higher-level content.

**Grind reality footnote ¹ — Mushmom Ilbi is a multi-week commitment for most players.** Rough math:

- Mushmom's Ilbi drop rate is not exposed in the datamine but v83 community data pegs it at ~2-3%. Assume 3% for optimism.
- Mushmom spawns every 60 minutes per channel. Most servers have 10-20 channels. **In a well-populated server that means ~10-20 Mushmoms alive somewhere in the world per hour** - but most are already claimed by other hunters camping specific channels.
- Realistic solo effort: 1-3 Mushmoms killed per hour of active hunting (channel-hopping, KS races, waiting for spawns).
- At 3% drop rate: **~33 kills expected per Ilbi**. At 1-3 kills per hour of grinding: **11 to 33 hours of hunting per Ilbi bundle.**
- Compound with the fact that Ilbi bundles stack to 800 stars, and heavy grinders burn through 800 stars in a day - so even a lucky drop only feeds you for a week.

**Verdict:** Ilbis are a "grind-adjacent" endgame goal. Realistic approach: **hunt Mushmoms opportunistically while training in Henesys area content**, don't camp them dedicated. Every drop is a win; expect months to fill a 4-6 bundle inventory.

**Alternative approaches:**

- **Party splits.** Coordinate with a hunting circle - whoever gets the last hit on a Mushmom, the party splits the Ilbi drops via merchant channel. Cuts your active grind time dramatically.
- **Meso-for-Ilbi trades.** By late Classic World, established Sins will farm Ilbis to sell for 400-800k per bundle (early market speculation). If you're rich from Weaponcrafting or another income stream, buying Ilbis is faster than farming them.
- **Live with Steely.** +25 vs +27 WATK is a real damage gap but not build-breaking. Steely Throwing Knives from Red Drakes (L60, Sleepywood dungeon) are a *much* easier grind and let you skip the world-boss meta entirely.

#### Hwabi Throwing Stars — the theoretical BiS at +29 WATK

Drops from:

- **[Jr. Balrog](/bosses/jr-balrog)** (L55, 30,000 HP, world boss) - Deep Sleepywood dungeon, hourly respawn per channel.
- **[Zombie Mushmom](/bosses/zombie-mushmom)** (L60, 35,000 HP, world boss) - Same hunt as Ilbi, dual-drop boss.

**Grind reality footnote ² — Hwabi is arguably harder to farm than Ilbi.** Both drop sources are world bosses with hourly spawns and heavy competition, and neither is a soloable fight for a Sin below the mid-50s. Jr. Balrog specifically is a party fight - most Sins need a warrior tank or a full 3-6 party to reliably clear him.

**Community wisdom:** most classic-era Sins never bothered with Hwabi. **The +2 WATK over Ilbi (7% damage bump on Lucky Seven) is not worth the doubled grind time.** Ilbi is the practical BiS; Hwabi is the flex.

**The exception:** Zombie Mushmom drops BOTH Ilbi and Hwabi from the same table, so if you're already grinding her for Ilbis, every kill has a chance at either. That's the only place Hwabis are efficient to farm - as a side-drop on your Ilbi hunt.

### Recommended star per level bracket (the practical answer)

| Your level | Best available star | How you get it | Damage tier |
|---|---|---|:---:|
| 10-29 | Subi Throwing Stars | Kerning shop (250 meso) | +15 WATK |
| 30-39 | **Wooden Top** ⭐ | Farm Axe Stumps (L17-22) | +19 WATK |
| 40-49 | **Icicle** ⭐ | Farm Cold Eyes (L40) - dual purpose training | +21 WATK |
| 50-59 | **Tobi** ⭐ | Farm Stone Golems / White Fangs (L55-58) | +23 WATK |
| 60-69 | **Steely** ⭐ | Farm Red Drakes (Sleepywood dungeon, L60) | +25 WATK |
| 70+ | **Ilbi** (aspirational) | Mushmom / Zombie Mushmom farming, ~11-33h per bundle | +27 WATK |
| 70+ (whale) | **Hwabi** (flex) | Jr. Balrog / Zombie Mushmom party runs | +29 WATK |

**⭐ = self-farmable in normal training rotations without world-boss competition.** These are the "just play the game" stars that fall out of your natural leveling grind.

### Damage impact of the star tier gap

Rough Lucky Seven damage delta from swapping star tiers (assuming L50 Sin with 200 LUK, 1× multiplier from crit averaging):

| Swap | WATK delta | Approx L7 damage increase per hit |
|---|:---:|:---:|
| Subi → Wooden Top | +4 | ~15% |
| Wooden Top → Icicle | +2 | ~7% |
| Icicle → Tobi | +2 | ~7% |
| Tobi → Steely | +2 | ~7% |
| Steely → Ilbi | +2 | ~7% |
| Ilbi → Hwabi | +2 | ~7% |

The **single biggest jump** is Subi→Wooden Top (+4 WATK for zero mesos, farmable at L17). **Every subsequent tier is a +2 WATK / ~7% gain.** This is why the practical recommendation is to farm your way up the mainline tier rather than skipping straight to Ilbi via the Mushmom grind - the marginal gain per tier is modest, the grind cost between tiers scales exponentially at the top.

### Cross-reference: which mobs to hunt for which stars

If you already know your training map, use this reverse lookup:

| Mob | Level | Stars it drops |
|---|:---:|---|
| Axe Stump / Dark Axe Stump | 17-22 | Wooden Top |
| Jr. Sentinel | 23 | Subi (rare) |
| Fire Boar | 32 | Wolbi, Kumbi, Snowball |
| Leatty | 32 | Wolbi |
| Jr. Cellion | 33 | Wolbi |
| Jr. Grupin | 33 | Kumbi |
| Jr. Wraith / Jr. Pepe | 35 | Mokbi |
| Lupin | 37 | Kumbi, Snowball |
| Cold Eye | 40 | Mokbi, Icicle |
| Drake | 50 | Kumbi |
| Stone Golem | 55 | Mokbi, Kumbi, Tobi |
| Jr. Balrog | 55 (boss) | **Hwabi** |
| Dark Stone Golem | 58 | Tobi |
| White Fang | 58 | Tobi |
| Mushmom | 60 (boss) | **Ilbi** |
| Red Drake | 60 | Steely |
| Wild Kargo | 62 | Tobi |
| Zombie Mushmom | 65 (boss) | **Ilbi**, **Hwabi** |
| Tauromacis | 70 | Steely |
| Lycanthrope | 80 | **Ilbi** |

**Sleepywood dungeon (Stone Golem, Dark Stone Golem, Wild Kargo, Red Drake, Jr. Balrog) is the mainline late-game star farm.** Six of the top seven star tiers drop somewhere in Sleepywood. Building a Sin route through Sleepywood L50-70 is the single most efficient star-farming plan.

### Verification note

All star stats (WATK, level requirement, stack size, shop price) parsed from the CoT 2 client datamine's item descriptions - specifically the `description` field on item IDs 2070000-2070010. Drop-source tables cross-referenced against `mobs.json` drop entries, which pull from the community-maintained MeowDB layer on top of the CoT 2 mob dossiers. Drop-rate percentages are v83 community estimates, not confirmed CW values - Nexon does not publish drop rates. Grind-time projections use v83-baseline drop rates and standard MapleStory boss respawn intervals; live CW rates may differ. **If a drop rate feels dramatically off after launch, please [flag it via the site's Discord](/) and I'll rerun the projections.**

---

## Armor progression and the Sauna Robe

Here's the actual Assassin body-armor progression in Classic World. Because top/bottom stat scrolls don't exist, the question at each level bracket is: **which base-LUK piece gives me the best floor, and does it have upgrade slots I can convert into scrolled LUK?**

### L30-34: Sauna Robe

You have three real choices at L30:

| Option | Base LUK | Slots for LUK scrolls | Max PDD | Total defense value |
|---|:---:|:---:|:---:|---|
| **Sauna Robe (any job)** | **+1** | **10** | 75 | The universal option, one-quest bridge |
| Black Steal Top + Black Steal Pants (thief-locked) | +6 | 0 | 69 | Higher base LUK, zero scroll ceiling |
| Any random L30 overall | varies | 10 | varies | Rarely thief-friendly |

**The Sauna Robe wins the moment you scroll it.** Even with the most conservative 10× Lesser Overall LUK scrolls (100% success, +1 LUK each), a Sauna Robe hits **+11 LUK total** (+1 base + 10 scrolled) - that's already double the Steal combo's fixed +6, and it took zero risk to get there.

If you're willing to gamble with Intermediates (60% success, +2 LUK), expected value is **+13 LUK** on average. If you get lucky on Greaters (10% success, +3 LUK) the theoretical maximum is +31 LUK - but the odds of all 10 succeeding are ~1 in 10 billion. Full scroll math in the [next section](#scroll-math-deep-dive).

**Recommendation:** wear the Sauna Robe from L30-34. Scroll 5 Lesser LUK (guaranteed +5) and gamble the remaining 5 slots on Intermediates - expected +6 more, minimum +5 kept safe. That's a **+11 to +16 LUK item** for the cost of one quest chain and 10 cheap scrolls.

### L35-59: Dark Avenger (the plateau king)

At L35, thief-locked overalls finally unlock. The relevant option is:

**Dark Avenger** (1051016, thief-only): +6 LUK, +83 PDD, +5 HP, **10 upgrade slots**. Same slot count as Sauna Robe, five times the base LUK.

Fully-scrolled Dark Avenger math:

- Safe (10× Lesser, all 100%): **+16 LUK** (+6 base + 10 scrolled)
- Realistic (10× Intermediate, 60% each): **~+18 LUK expected**, +6 to +26 range
- Lucky (some Greaters land): +19 to +30 LUK

**Dark Avenger is the single most important armor purchase of your Assassin's life** because it holds for 25+ levels. Look at what tries to replace it:

| Level | Best thief top+bottom combo | Base LUK | Can add scrolled LUK? |
|---|---|:---:|:---:|
| L35 | Black Knucklevest top + pants | +6 |  (no top/bottom LUK scrolls) |
| L40 | Dark Shadow top + pants | +8 |  |
| L50 | Brown China top + Brown Moon pants | +10 |  |
| L60 | Dark Scorpio top + Umber Mantis pants | +12 |  |
| L70 | Purple Mystique top + Dark Studded pants | +14 |  |

**Even a barely-scrolled Dark Avenger (+16 LUK safe) beats every top+bottom combo through L60.** A well-scrolled one (+18 expected) beats them all the way through L70.

**When to switch to top+bottom:**

- If your Dark Avenger got destroyed or badly scrolled (base +6, only 1-2 scroll successes): switch at L60 when Dark Scorpio's +12 base beats your unlucky roll.
- If you got a well-scrolled Dark Avenger (+16 or better): keep wearing it until you replace it with a higher-tier overall (which for Assassins means... waiting for a Kismet-tier equivalent, which doesn't exist yet in the datamine's thief-locked range - the Assassin overall pipeline has a big gap L40-L70).

**Consequence of the overall gap:** most Assassins in Classic World will run Dark Avenger from L35 well into their 60s or 70s. That's why scrolling it well matters so much - it's not a bridge item, it's your endgame body armor for a very long time.

### The Assassin overall gap (L40-L70)

There is no thief-locked overall between L35 (Dark Avenger series) and L80+. The Bowman branch gets Kismet at L50 and Lineros at L70. Magicians get Calas/Calaf and Requiem. **Thieves get exactly one overall tier and then nothing.**

This is *probably* a datamine incompleteness (Kerning City tier gear may not have shipped in the CoT 2 build) rather than a permanent design choice, but planning around it is safer than hoping. The practical takeaway: **treat Dark Avenger as your body armor from L35 to at least L60**, and only consider switching to top+bottom if scrolling was catastrophically bad or if a higher-tier thief overall gets added post-launch.

### Where does Sauna Robe fit long-term?

Once you get Dark Avenger at L35, the Sauna Robe is retired - Dark Avenger has +5 more LUK base, +8 more PDD, and identical slot count. **Do not sell your Sauna Robe though** - it's the only universal-class overall in this bracket, and if you re-roll a mule character of another class it makes a lovely starter overall for them too.

---

## Scroll math deep dive

Understanding the four scroll tiers is the difference between a +16 LUK Dark Avenger and a +6 LUK brick you cried over.

### The four Overall Armor LUK scroll tiers

| Tier | Success rate | LUK per success | Item destroyed on fail? | Expected LUK per attempt |
|---|:---:|:---:|:---:|:---:|
| **Lesser** (2040516) | 100% | +1 | No | **+1.00** |
| **Intermediate** (2040517) | 60% | +2 | No | **+1.20** |
| **Greater** (2040518) | 10% | +3 | No | **+0.30** |
| **Chaos** (2040519) | 10% | +4 | **Yes (50%)** | +0.40 raw, but item risk |

### What this table tells you

- **Intermediate is the best expected-value tier** at +1.20 LUK per attempt. If you're scrolling for damage and can afford to burn some scrolls, always start here.
- **Greater is a lottery**, not a strategy. +0.30 expected LUK per scroll means on average you spend 3.3 scrolls to gain 1 LUK. Only worth if scrolls are dirt cheap.
- **Chaos is a rich-player toy.** +0.40 expected LUK per attempt sounds okay until you factor the 50% destroy-on-fail chance - one bad roll and your Dark Avenger is gone. Never Chaos-scroll an unreplaceable item.
- **Lesser is the reliability play.** 100% success + +1 LUK = zero risk. Perfect for the first 3-5 slots of a piece you can't afford to lose.

### Recommended scrolling flows

**Budget Dark Avenger (100% safe, +16 LUK guaranteed):**

- 10× Lesser Overall LUK Scrolls, one per slot.
- Cost: 10× (cheap Kerning meso shop or drops).
- Outcome: +6 base + 10 scrolled = **+16 LUK, no chance of failure.**

**Realistic Dark Avenger (+18 LUK expected):**

- 5× Lesser (locked-in +5) → 5× Intermediate (60% each, expected +6, min +0, max +10).
- Expected outcome: **+17 LUK average, +11 to +21 range.**
- Zero destroy risk. The Intermediates fail without breaking the item.

**Whale Dark Avenger (+22-26 LUK if lucky):**

- 3× Lesser (locked-in +3) → 7× Intermediate (expected +8.4, +0 to +14 range).
- Or 2× Lesser + 8× Intermediate (expected +9.6, higher variance).
- Expected outcome: **~+18 LUK average, +9 to +23 range.**
- Still no destroy risk. Just longer variance tail.

**Do NOT Chaos-scroll a Dark Avenger unless you have a second one in your inventory.** The math never justifies risking the whole item for +1 more LUK per scroll.

### The break-even calculation everyone asks about

At **50% expected scroll success** across 10 Intermediate attempts, you end up with a **+16 LUK Dark Avenger**. That number beats:

- Every top+bottom combo through L70 (+14 LUK max, Purple Mystique)
- Any unscrolled overall alternative
- Base-stat competitors that give up scroll potential

**Practical takeaway:** if you can execute the "5 Lesser + 5 Intermediate" flow, you have body armor that outclasses every alternative for the next 30 levels of gameplay.

---

## The final verdict

The old-school dexless Assassin build was born in a world of high-DEX-req claws and cheap top+bottom scrolls. Classic World inverted both variables and the meta pivoted with them:

**In v83:** DEX gates were painful (claws demanded buffer DEX), but top+bottom LUK scrolls compensated. You'd wear a top + pants combo and stack LUK across two pieces. Dexless was a workaround.

**In Classic World:** DEX gates are minimal (claws match your level exactly), and top+bottom LUK scrolls don't exist. You wear a scrolled overall or you accept a fixed LUK ceiling. Dexless is the intended path.

**The single-sentence summary:** wear the Sauna Robe L30-34, wear a well-scrolled Dark Avenger L35 through the mid-60s, dump every AP into LUK past the (probably still 25) advancement gate, use the crit-rate claw variant at every tier, and you have built the Classic World Assassin correctly.

**Balanced-stat builds still exist** and are valuable for specific cases:

- **Solo grinders with unscrolled gear** - DEX-per-level keeps your hit rate above the floor where mobs miss half your attacks.
- **Party dungeon runners** - a slightly lower personal DPS matters less when the party carries.
- **Meso-poor players** - if you can't afford to scroll gear, base DEX from AP is your hit-rate backup.

But the math for **damage per LUK point spent** clearly favors Pure LUK, and Classic World's changes clearly favor Pure LUK harder than v83 did.

---

## FAQ

### Should I even bother with the Sauna Robe if I'm rushing to L35 for Dark Avenger?

Yes. The Sauna Robe quest chain is short (roughly 20-40 minutes if you know the path), and the robe gives you +1 LUK and +75 PDD immediately - that's noticeably better than most L20-29 top+bottom combos you're grinding in. Wearing an unscrolled Sauna Robe L30-34 is better than wearing whatever L25 top/pants you had.

### What if I only have budget for one scroll type?

**Lesser Overall LUK Scrolls, ten of them.** Guaranteed +10 LUK on a slotted overall for zero risk. Every other choice adds variance without meaningful expected upside. You can always come back later with Intermediates when you're richer.

### Isn't the answer just "wait for Kismet-tier thief overalls to unlock at L50"?

Would be nice - they don't exist in the CoT 2 datamine. The Assassin overall pipeline stops at Dark Avenger L35 for now. This is why scrolling that one item well matters so much: it's not a stepping stone, it's your endgame body armor for a big chunk of your character's life.

### Does Lucky Seven really ignore weapon Attack?

Yes - Lucky Seven damage in v83 uses ONLY your LUK stat and **the throwing star's Weapon Attack value** (not the claw's Attack). The claw's Attack still matters for regular attacks and other skills, but Lucky Seven itself scales off LUK + star WATK. This is why crit-rate claws (Gold Titans, Adamantium Guards, Sapphire Gigantic, Blue Scarab) beat higher-PAD variants for Sin damage - crit is a Lucky-Seven multiplier, claw PAD isn't. And it's why **the star tier you're using matters as much as the claw** - see [Throwing star progression](#throwing-star-progression-and-the-boss-drop-grind) for the full L7 damage impact per tier. Whether Classic World preserves this exactly is one of the things worth verifying at launch, but the skill definitions in the datamine appear unchanged.

### Is farming Ilbis actually worth it?

Depends on your patience budget. Ilbis are +2 WATK over Steely Throwing Knives (Red Drake drops, Sleepywood dungeon), which translates to roughly +7% Lucky Seven damage per hit. Steely Throwing Knives are trivially farmable during normal Sleepywood grinding. Ilbis require dedicated world-boss hunting (Mushmom / Zombie Mushmom), roughly 11-33 hours of active hunt time per bundle at v83-baseline drop rates. **Most classic-era Sins ran Steely as their practical BiS and only bothered with Ilbis if they were rich enough to buy them from grinders.** Full grind math in the [Ilbi footnote](#throwing-star-progression-and-the-boss-drop-grind) above.

### What about the Bandit branch?

This guide covers Assassin specifically. Bandits use daggers, care about STR (yes, STR - Bandits are the game's other Thief branch and STR gates dagger requirements), and have a completely different damage curve based on Savage Blow rather than Lucky Seven. The Sauna Robe's +1 STR + +1 LUK "everything" statline is decent for a Bandit at L30, but the top+bottom analysis and scroll math doesn't cleanly transfer. Bandit-specific deep-dive is a separate future guide.

### Is the 25-DEX advancement gate really still there in Classic World?

Genuinely unconfirmed. The v83 baseline says yes, the CoT 2 datamine can't encode the NPC stat check either way, and no CoT tester has publicly reported a lower-DEX Rogue succeeding at advancement. Plan for 25 DEX, celebrate if it turns out to be lower. Full details in [The 25-DEX advancement question](#the-25-dex-advancement-question) above.

### Should I scroll the claw too, or just armor?

Scroll gloves for Attack (via Gloves Attack Scroll - existing, verified in datamine), and scroll earrings for LUK (via Earring LUK Scroll - also verified). Claws don't have LUK scrolls; they'd want Weapon Attack scrolls which the datamine has in the `2044xxx` range (Claw Attack Scrolls - full breakdown deserves its own guide). **Priority order for Assassins: earrings → gloves → overall → claw**, because earrings are cheap and always in-slot regardless of gear.

### I already put 30 DEX in by accident - how bad is it?

5 wasted AP if the gate is 25, more if you overshot. Not catastrophic. Every AP past 25 that isn't LUK is worth maybe 1 damage per Lucky Seven star lost forever, so ~5-15 damage per attack in the long run. Painful but not build-ending. **Consider it a lesson tax for future characters.** Whether Classic World offers a stat reset at launch is another open question; if it does, take it.

---

**Related reading:**

- [Thief Job Guide](/jobs/thief) - the parent guide covering skills, first-job pathing, and Bandit branch
- [Blue Sauna Robe](/items/blue-sauna-robe) / [Red Sauna Robe](/items/red-sauna-robe) - item pages with full stat rolls
- [Sleepywood Sauna Robe Chain](/quests/sleepywood-sauna-robe-chain) - the quest that awards it
- [Crafting Guide](/crafting) - Weaponcrafting for Gold Titans and Adamantium Guards
- [Citizenship Guide](/citizenship) - Kerning City residency gets you Overall LUK scrolls from town shops
- [Training Routes Guide](/training-routes) - which maps to grind at each level, including star-farm callouts
- [Mushmom](/bosses/mushmom) / [Zombie Mushmom](/bosses/zombie-mushmom) / [Jr. Balrog](/bosses/jr-balrog) - the three world bosses gating Ilbi + Hwabi drops
