---
# ---------- Core metadata ----------
title: "Archer Build: Hunter vs Crossbowman, Strafe vs Iron Arrow, and the Soul Arrow Question"
description: "Comprehensive Archer deep-dive guide for MapleStory Classic World. Hunter vs Crossbowman decision math with real datamine ATK numbers, bow vs crossbow progression L10-70, SP priority (Weapon Mastery/Booster/Final Attack/Arrow Bomb or Iron Arrow/Soul Arrow), pure DEX allocation under CW's no-HP-wash rules, arrows + scrolling philosophy, armor progression, and the bossing + KS verdict."
lastUpdated: "2026-10-11"
tags:
  - archer
  - hunter
  - crossbowman
  - builds
  - weapons
  - post-30
status: "Live - Founder's Access window Oct 6 to Oct 20, 2026"

# ---------- Layout ----------
theme: "henesys"
decorations: false
eyebrow: "Class Build Deep Dive"
heading: "Archer Build"
tagline: "Hunter vs Crossbowman settled with real ATK numbers. Pure DEX allocation, Strafe burst DPS, Iron Arrow pierce AoE, Soul Arrow infinite-ammo play, and the FA bossing verdict."

# ---------- Verification ----------
verificationStatus: "launch-verified"
verificationNote: "Weapon ATK values, speed classes, armor stats, arrow tiers, and reqLevel data pulled directly from src/data/db/items.json (7431 items from the Classic World FA client datamine via osmsdataexplorer.com + MeowDB community drops). Classic-World-specific mechanics (HP wash removal, 1.25x elemental multiplier, earring crit damage line, Victoria-only FA content ceiling) sourced from Nexon's Oct 3 release notes + Lunitidal on msclassic.wiki + r/Maplestory CW threads. SP priority order corrects the xBucc Reddit Archer cluster error (OP acknowledged the Archer section was wrong in the original Reddit post). Hunter vs Crossbowman DPS math uses datamine ATK + speed class values with traditional attack-speed-to-hits-per-second mapping; not formally re-tested in Classic World FA so treat 'break-even point' as a planning estimate."
sourceSlugs:
  - nexon-founders-access-release-notes
  - osmsdataexplorer
  - reddit-xbucc-complete-builds
  - reddit-everything-changed-cot2

# ---------- TOC ----------
toc:
  - { href: "#tldr", label: "TL;DR" }
  - { href: "#classic-world-archer-changes", label: "CW changes" }
  - { href: "#hunter-vs-crossbowman", label: "Hunter vs Crossbowman" }
  - { href: "#sp-priority-hunter", label: "Hunter SP" }
  - { href: "#sp-priority-crossbowman", label: "Crossbowman SP" }
  - { href: "#ap-allocation", label: "AP allocation" }
  - { href: "#bow-progression", label: "Bows L10-70" }
  - { href: "#crossbow-progression", label: "Crossbows L10-70" }
  - { href: "#arrows-and-ammo", label: "Arrows" }
  - { href: "#armor-progression", label: "Armor" }
  - { href: "#scrolling-philosophy", label: "Scrolling" }
  - { href: "#bossing-and-ks", label: "Bossing + KS" }
  - { href: "#faq", label: "FAQ" }
---

<h2 id="tldr">TL;DR</h2>

- **Stat allocation:** pure DEX. Same reason as Fighter — Classic World's
  no-HP-wash doesn't affect physical classes and starting DEX pool
  covers every bow/crossbow reqDEX through Lv 70.
- **Hunter vs Crossbowman:** marginal DPS edge to Crossbowman at the
  Lv 50-70 bracket thanks to higher per-shot damage. Hunter wins on
  attack speed and animation flow. **Pick based on preferred skill
  identity** — Hunter's Arrow Bomb (big AoE boom) or Crossbowman's
  Iron Arrow (pierce through 6 mobs in a line).
- **SP max order (2nd job, both branches):** Weapon Mastery (20) →
  Weapon Booster (20) → Final Attack (20) → **Arrow Bomb** (Hunter)
  OR **Iron Arrow** (Crossbowman) (30) → Soul Arrow (20).
- **FA endgame kit:** scrolled Lv 50 [Olympus](/items/1452007) bow or
  [Rower](/items/1462007) crossbow, [Blue-Lined Kismet](/items/1050034)
  overall (your first real overall at L50), full
  [Green Patriot](/items/1002206) / [Blue Eyes](/items/1082094) / 
  [Green Elf Shoes](/items/1072151) armor set at Lv 70.

<h2 id="classic-world-archer-changes">Classic World Archer changes</h2>

### 1. HP wash removal doesn't hurt Archers

Archers were never HP wash targets in traditional MapleStory. Your
base HP is middle-tier and your playstyle is ranged-with-knockback
— you don't eat the melee hits that Fighters do. Classic World's HP
wash removal is a **non-event** for Archer builds.

### 2. 1.25× elemental is irrelevant

Bow and crossbow attacks are physical damage. The 1.25× elemental
multiplier doesn't apply. Like Fighter, Archer is a universal class
with no elemental advantage/penalty.

### 3. Earring crit damage line stacks with your Lv 3rd job skill

Classic World added a `crit damage` stat to earrings. For 3rd-job
Rangers in traditional MapleStory, Mortal Blow is a crit-roll skill
that earring crit damage would multiply. 3rd Job is not in Grand
Launch and has no date, so **scroll earrings for the crit damage you
get now** rather than for a future skill.

### 4. xBucc Reddit build errata

The widely-shared [xBucc Reddit build cluster](/community-resources)
(540+ upvotes going into Founder's Access) **acknowledged in the OP
that the Archer builds were incorrect** and amended them in the
linked spreadsheet (not in the original Reddit images). If you've
seen conflicting Archer SP priorities, our tables below are the
corrected version.

<h2 id="hunter-vs-crossbowman">Hunter vs Crossbowman: the decision</h2>

### Raw ATK comparison

| Lv | Hunter (Bow) | ATK · Speed | Crossbowman (Crossbow) | ATK · Speed |
| --- | --- | --- | --- | --- |
| 30 | [Ryden](/items/1452004) | 50 · Normal | [Eagle Crow](/items/1462004) | 52 · Slow |
| 35 | [Red Viper](/items/1452005) | 52 · Fast | — | — |
| 40 | [Vaulter 2000](/items/1452006) | 60 · Normal | [Heckler](/items/1462005) | 59 · Normal |
| 45 | — | — | [Silver Crow](/items/1462006) | 67 · Slow |
| 50 | [Olympus](/items/1452007) | 70 · Normal | [Rower](/items/1462007) | 72 · Slow |
| 60 | [Asianic Bow](/items/1452009) | 80 · Normal | [Golden Crow](/items/1462008) | 82 · Slow |
| 70 | [Red Hinkel](/items/1452010) | 90 · Normal | [Gross Jaeger](/items/1462009) | 92 · Slow |

**Observation:** Crossbow has **+2 ATK** at Lv 50, 60, and 70, but
one speed class slower (Slow vs Normal). The bow's higher attack
speed means roughly equivalent sustained DPS once Weapon Booster
is online.

### The skill identity difference matters more than the raw ATK

**Hunter's Arrow Bomb** is a big AoE explosion that hits 6 enemies
in a circle. Great for crowded maps (Monkey Swamp III, Golem's
Temple). Decent at bossing because the single-target component is
also good.

**Crossbowman's Iron Arrow** pierces through up to 6 enemies in a
straight line. Great for **narrow-corridor maps** (Line 2, Tunnel
That Lost Light) and multi-mob boss fights (Zombie Mushmom with
her baby adds).

### The honest verdict

- **Pick Hunter** if you prefer Arrow Bomb's circular AoE and faster
  attack animation. Better for crowded-map grinding.
- **Pick Crossbowman** if you prefer Iron Arrow's pierce AoE and
  higher per-shot damage. Better for narrow-corridor grinding and
  the Zombie Mushmom boss fight.
- **The DPS gap is small enough that playstyle preference wins** —
  neither branch is objectively stronger in Classic World FA.

<h2 id="sp-priority-hunter">Hunter SP priority (2nd job)</h2>

Max order with reasoning:

| Order | Skill | Max | Why |
| --- | --- | --- | --- |
| 1 | **Bow Mastery** | 20 | Caps minimum damage. Highest DPS floor. |
| 2 | **Bow Booster** | 20 | Attack speed +2 for 200 seconds per cast. |
| 3 | **Final Attack: Bow** | 20 | ~40% proc for a free bonus hit on auto-attacks. |
| 4 | **Arrow Bomb** | 30 | Your AoE farm skill AND single-target burst. |
| 5 | **Soul Arrow: Bow** | 20 | 100% uptime no-arrow mode. Saves arrow costs during long grinds. |
| 6 | **Power Knock-Back** | leftover | Pushes mobs back. Niche but useful against melee bosses. |

### Arrow Bomb note

Arrow Bomb max level is 30 (not 20 like Final Attack). It replaces
your auto-attack during grinding sessions once maxed. Max it as
fast as the skill tree allows after the mastery/booster/FA trio.

<h2 id="sp-priority-crossbowman">Crossbowman SP priority (2nd job)</h2>

| Order | Skill | Max | Why |
| --- | --- | --- | --- |
| 1 | **Crossbow Mastery** | 20 | Caps minimum damage. |
| 2 | **Crossbow Booster** | 20 | Attack speed +2 for 200 seconds per cast. |
| 3 | **Final Attack: Crossbow** | 20 | ~40% proc free bonus hit. |
| 4 | **Iron Arrow** | 30 | Your pierce AoE AND the Zombie Mushmom killer skill. |
| 5 | **Soul Arrow: Crossbow** | 20 | Infinite-ammo mode. |
| 6 | **Power Knock-Back** | leftover | Same niche as Hunter's. |

### Iron Arrow note

Iron Arrow pierces up to 6 enemies in a straight line. On maps
where you can funnel mobs into a corridor (Tunnel That Lost Light,
Line 2, Monkey Swamp III) it's the highest DPS skill in the game at
2nd job. Max to 30 immediately after mastery/booster/FA.

<h2 id="ap-allocation">AP allocation: pure DEX</h2>

### The simple answer

- **DEX per level:** +5 (full DEX)
- **STR per level:** +0

### Why pure DEX works in CW

Classic World bows and crossbows have reqSTR values that stay within
the starting STR pool (25 STR by Lv 10) across all Lv 10-70 Archer
weapons:

| Weapon tier | reqSTR | Starting STR pool |
| --- | --- | --- |
| Lv 30 (Ryden / Eagle Crow) | 35 STR | 25 STR starting + 10 incidental misc level APs |
| Lv 50 (Olympus / Rower) | 55 STR | 25 STR starting + 30 wasted APs if you went hybrid — don't |
| Lv 70 (Red Hinkel / Gross Jaeger) | 70 STR | 25 STR starting + 45 wasted APs — definitely don't |

**Translation:** the old "pump STR for bow reqSTR" meme no longer
applies - Classic World's FA datamined bow/crossbow reqSTR numbers
are reachable with just the starting pool. Pure DEX is right.

### Accuracy problems?

Archers' Mastery skill contributes to ACC. You should hit everything
in your level range reliably at pure DEX. The one exception is
**[Shade](/bosses/shade)** at Lv 47 with 999 evasion — Archer can't
reliably hit her solo. Bring a Cleric or skip.

<h2 id="bow-progression">Bow progression L10-70</h2>

| Lv | Pick | ATK | Speed | Source |
| --- | --- | --- | --- | --- |
| 10 | [War Bow](/items/1452000) | 30 | Normal | drop: Ribbon Pig |
| 15 | [Composite Bow](/items/1452001) | 35 | Normal | drop: Stump |
| 20 | [Hunter's Bow](/items/1452002) | 42 | Normal | NPC shop |
| 25 | [Battle Bow](/items/1452003) | 44 | Fast | NPC shop |
| 30 | [Ryden](/items/1452004) | 50 | Normal | drop: [Wild Boar](/mobs/22) (Lv 25) |
| 35 | [Red Viper](/items/1452005) | 52 | Fast | drop: [Fire Boar](/mobs/30) (Lv 32) |
| 40 | [Vaulter 2000](/items/1452006) | 60 | Normal | drop: Raffle |
| 50 | [Olympus](/items/1452007) | 70 | Normal | NPC shop |
| 60 | [Asianic Bow](/items/1452009) | 80 | Normal | NPC shop |
| 70 | [Red Hinkel](/items/1452010) | 90 | Normal | NPC shop |
| 70 | [Blue Hinkel](/items/1452011) | 88 | Normal | NPC shop |
| 70 | [Golden Hinkel](/items/1452012) | 88 | Normal | NPC shop |

### Red Viper note

The Lv 35 Red Viper drops from [Fire Boar](/mobs/30) in Burnt Land
(see [FA map access caveat](/meso-farming-30-plus#level-30-40-meso-rotation)
— Burnt Land IV/V may be gated, use I-III instead). It's your first
"cheap boss drop upgrade" moment as a Hunter. **Faster speed than
Vaulter 2000 at Lv 40**, so hold it a few levels before swapping.

### The L70 Hinkel variant question

Three Lv 70 bows: Red Hinkel (90 ATK), Blue Hinkel (88 ATK), Golden
Hinkel (88 ATK). All Normal speed. **Red Hinkel is +2 ATK over the
other two** — grab Red. The other variants exist for
color-matching cosmetic preferences only.

<h2 id="crossbow-progression">Crossbow progression L10-70</h2>

| Lv | Pick | ATK | Speed | Source |
| --- | --- | --- | --- | --- |
| 10 | [Crossbow](/items/1462000) | 32 | Slow | drop: Stump |
| 15 | [Battle Crossbow](/items/1462001) | 37 | Slow | NPC shop |
| 20 | [Balanche](/items/1462002) | 39 | Normal | NPC shop |
| 25 | [Mountain Crossbow](/items/1462003) | 47 | Slow | NPC shop |
| 30 | [Eagle Crow](/items/1462004) | 52 | Slow | drop: [Wild Boar](/mobs/22) (Lv 25) |
| 40 | [Heckler](/items/1462005) | 59 | Normal | drop: [Zombie Lupin](/mobs/38) |
| 45 | [Silver Crow](/items/1462006) | 67 | Slow | drop: Fairy 3 (Lv 29) |
| 50 | [Rower](/items/1462007) | 72 | Slow | drop: Sporewood |
| 60 | [Golden Crow](/items/1462008) | 82 | Slow | NPC shop |
| 70 | [Gross Jaeger](/items/1462009) | 92 | Slow | NPC shop |

### Heckler note

The Lv 40 Heckler is the ONE "speed class upgrade" in the Crossbow
line. Normal speed vs. the Slow default. Even though it's 8 ATK
below Silver Crow at Lv 45, **hold Heckler through Lv 45-50** if
you can tolerate the DPS gap for the attack-speed quality-of-life.
Many Crossbowmen prefer Heckler → Rower (L50) directly, skipping
Silver Crow entirely.

<h2 id="arrows-and-ammo">Arrows and ammo</h2>

Archer ammo progression is simpler than people expect. Four tiers
of each ammo type:

### Bow arrows

| Tier | Name | Where |
| --- | --- | --- |
| 1 | [Arrows for Bows](/items/2060000) | drop: Horny Mushroom |
| 2 | [Bronze Arrows for Bows](/items/2060001) | NPC shop |
| 3 | [Iron Arrows for Bows](/items/2060002) | NPC shop |
| 4 | [Adamantium Arrows for Bows](/items/2060003) | NPC shop |

### Crossbow arrows

| Tier | Name | Where |
| --- | --- | --- |
| 1 | [Arrows for Crossbows](/items/2061000) | drop: Stirge |
| 2 | [Bronze Arrows for Crossbows](/items/2061001) | NPC shop |
| 3 | [Iron Arrows for Crossbows](/items/2061002) | NPC shop |
| 4 | [Mithril Arrows for Crossbows](/items/2061003) | NPC shop |

### Soul Arrow is the real answer

Once you max Soul Arrow (2nd job skill), you fire arrows **without
consuming them** for 200 seconds per cast. This makes ammo tier
largely irrelevant for grinding — your scrolled Adamantium / Mithril
arrows are only relevant during the ~1-second gap between Soul
Arrow casts.

### Scrolling arrows

Arrows ARE scrollable (5 slots at the top tier). The scroll type is
`incPAD` 60% — same scroll pool as weapon ATT scrolls. A fully
scrolled Adamantium Arrows set adds **+10 ATT** on top of your
weapon's base.

**For Archers, scrolled arrows are a bigger investment than most
other classes' ammo** because of Soul Arrow's uptime. If you'll
scroll arrows seriously, you get +10 ATT 95% of the time (whenever
Soul Arrow isn't active) at a lower cost than scrolling the weapon
itself.

<h2 id="armor-progression">Archer armor progression</h2>

### Hat

| Lv | Pick | DEX | DEF |
| --- | --- | --- | --- |
| 30 | [Green Hawkeye](/items/1002110) | +3 | 27 |
| 35 | [Green Pole-Feather Hat](/items/1002123) | +3 | 30 |
| 40 | [Green Distinction](/items/1002147) | +4 | 33 |
| 50 | [Green Maro](/items/1002172) | +5 | 39 |
| 60 | [Brown Polyfeather Hat](/items/1002192) | +6 | 45 |
| 70 | [Green Patriot](/items/1002206) | +7 | 51 |

<div class="callout callout--warning">
<strong>Zakum Helmet in FA:</strong> same gating as every other
class. The item exists in datamine (+5 all-stat), but the boss
fight is held for Grand Launch. Use <strong>Green Maro L50</strong>
or <strong>Brown Polyfeather Hat L60</strong> as your realistic FA
hat pick. Full context in the
<a href="/gearing-30-plus#level-50-60-first-real-investment">Gearing
guide</a>.
</div>

### Overall / Top + Bottom

Archer overalls don't exist below Lv 50. Below 50 you wear top +
bottom pairs.

| Lv | Top | Bottom | OR Overall |
| --- | --- | --- | --- |
| 30 | [Green Hunter's Armor](/items/1040042) +3 DEX | [Green Hunter's Pants](/items/1060034) +3 DEX | — |
| 35 | [Green Legolier](/items/1040051) +3 DEX | [Green Legolier Pants](/items/1060043) +3 DEX | — |
| 40 | [Brown Piette](/items/1040062) +4 DEX | [Brown Piette Pants](/items/1060054) +4 DEX | — |
| 50 | — | — | [Blue-Lined Kismet](/items/1050034) +10 DEX / DEF 106 |
| 60 | — | — | [Blue Tai](/items/1050040) +12 DEX / DEF 122 |
| 70 | — | — | [Green Linnex](/items/1050048) +14 DEX / DEF 137 |

### The Blue Sauna Robe skip option

L30-50 Archers have an underrated alternative: the
[Blue Sauna Robe](/items/1050010) at Lv 30. All-stat +1 and DEF 75
with 10 slots. Not the highest DEX ceiling but **cheap to scroll
early** since you'll outgrow it at L50 when Blue-Lined Kismet
opens. The [Assassin build guide](/assassin-build#l30-34-sauna-robe)
has the full Sauna Robe scroll math — same logic applies to Archer.

### Shoes

| Lv | Pick | DEX | DEF |
| --- | --- | --- | --- |
| 30 | [Black Hunter Boots](/items/1072073) | +1 | 18 |
| 40 | [Yellow Pierre Shoes](/items/1072105) | +1 | 22 |
| 50 | [Green Steel-Tip Boots](/items/1072121) | +1 | 26 |
| 60 | [Green Gore Boots](/items/1072138) | +2 | 30 |
| 70 | [Green Elf Shoes](/items/1072151) | +1 | 34 |

### Gloves

| Lv | Pick | DEX | DEF |
| --- | --- | --- | --- |
| 35 | [Mithril Scaler](/items/1082047) | +3 | 16 |
| 40 | [Aqua Brace](/items/1082058) | +4 | 18 |
| 50 | [Blue Willow](/items/1082071) | +5 | 22 |
| 60 | [Oaker Garner](/items/1082082) | +6 | 26 |
| 70 | [Blue Eyes](/items/1082094) | +7 | 30 |

Capes: see the [universal cape chain](/gearing-30-plus#level-30-40-first-2nd-job-kit)
(Justice → Magic → Gaia).

<h2 id="scrolling-philosophy">Scrolling philosophy for Archer</h2>

Archer has one unique twist: **arrows are scrollable** and your Soul
Arrow uptime makes them a top-tier investment.

### The priority order

1. **Weapon** — 60% ATT scrolls. Expect to burn 2 weapons finding one that keeps all 7 slots.
2. **Arrows** — 60% ATT scrolls. 5 slots. Soul Arrow uptime makes this a 95%-of-the-time stat boost.
3. **Gloves** — 60% ATT. Universal scroll type.
4. **Overall** (L50+) OR **Top + Bottom** (L30-49) — 60% DEX for Archer.
5. **Hat** — 60% DEX.
6. **Shoes, cape** — 10% DEX if you have slack. Low ROI.

### The 60% ATT math (same as Fighter)

A 7-slot bow fully scrolled with 60% ATT scrolls expects:
- Average passes: 7 × 0.60 = 4.2 scrolls land
- Average ATT gained: 4.2 × 2 ATT = **+8.4 ATT**
- Budget: ~15-25 scrolls to find a 7-slot bow that keeps all slots

**For a Lv 50 Olympus (base 70 ATT), a well-scrolled copy reaches
78-82 ATT.** Scrolled arrows add another +8-10 ATT on top (when
Soul Arrow is up). Total scrolled Archer DPS at Lv 50 approaches
unscrolled Lv 70 Red Hinkel territory.

<h2 id="bossing-and-ks">Bossing + KS as an Archer</h2>

### FA roster boss performance

- **[Mano](/bosses/mano)** (Lv 20) — Archer tags Mano from range
  easily. Zero melee risk.
- **[Mushmom](/bosses/mushmom)** (Lv 40) — **Archer is the premier
  Mushmom KSer**. Strafe (3rd job) + Soul Arrow + ranged damage =
  Mushmom often falls before melee classes can even reach her.
  Even at 2nd job, Arrow Bomb spam clears Mushmom fast.
- **[Jr. Balrog](/bosses/jr-balrog)** (Lv 80) — great in Archer-led
  parties. Soul Arrow uptime means no arrow spending during the
  fight. Iron Arrow / Arrow Bomb cycle efficiently.
- **[Zombie Mushmom](/bosses/zombie-mushmom)** (Lv 55) — **Crossbowman
  Iron Arrow + ZMM's baby adds = premier farming combo**. Pierce
  through 6 adds + ZMM in a line = free damage multiplier. This is
  the archer boss fight.
- **[Shade](/bosses/shade)** (Lv 47) — don't bother solo. 999 evasion
  wall. Bring a Cleric or skip.

### The Mushmom KS culture

Mushmom spawns on a randomized timer per channel (Nexon's Oct 21 patch
randomized field boss respawns) with first-hit-wins loot rules. Archers dominate this because:
- Strafe range exceeds Mushmom's attack range
- Soul Arrow means no arrow restock gap
- Final Attack procs stack with Strafe multi-hit

**Practical takeaway:** if 3rd Job brings Strafe (a traditional 3rd-job
skill; 3rd Job isn't in Grand Launch) on top of Soul Arrow, Archer becomes the Mushmom KS king.
During FA at 2nd job, you're still competitive with Arrow Bomb's
burst damage.

<h2 id="faq">FAQ</h2>

**I'm Lv 30 and ready to pick a 2nd-job branch. Hunter or Crossbowman?**

Playstyle question. Hunter has faster attack animations and the
circular AoE from Arrow Bomb. Crossbowman has slightly higher
per-shot damage and the pierce AoE from Iron Arrow. For grinding
on crowded maps (Monkey Swamp III, Golem's Temple), Hunter wins
on vibes. For narrow-corridor grinding (Line 2, Tunnel That Lost
Light) and Zombie Mushmom farming, Crossbowman wins.

**Can I switch from Hunter to Crossbowman at Lv 50?**

No. 2nd-job advancement is a one-way decision in Classic World.
Pick carefully at Lv 30.

**Should I pump STR to equip higher-reqSTR bows earlier?**

No. Starting STR pool covers every bow/crossbow reqSTR through
Lv 70 — see the [AP allocation table](#ap-allocation) above.

**Soul Arrow completely replaces ammo?**

Nearly. Soul Arrow uptime is 200 seconds per cast with a short
cooldown — you can keep ~95% uptime once maxed. The ~5% gap means
you still want **some** scrolled arrows in inventory for maximum
efficiency, but you don't need to carry 10,000 arrows anymore.

**Scrolled Adamantium Arrows vs Mithril Arrows — which wins?**

Both roll on the same scroll type (`incPAD` 60%) with 5 slots
each. The base `incPAD` of each tier is datamine-confirmed as 0,
meaning they're identical except for ammo-tier flavor. Buy whichever
is cheaper on the Free Market.

**I keep running out of mesos buying arrows. Help?**

Max Soul Arrow early. Also, Adamantium / Mithril arrows aren't
required — Bronze or Iron arrows work fine for grinding, and Soul
Arrow lets you skip ammo for ~95% of combat.

**Why aren't there L70+ bows in the datamine?**

There are — Red Hinkel / Blue Hinkel / Golden Hinkel at Lv 70. The
tier above those (Dragon-tier weapons in Leafre, Raven's Claws in
Phantom Forest, etc.) needs regions that are not in Grand Launch and
have no announced date.

**Does Classic World have Hunter → Ranger 3rd job?**

Not yet. **3rd Job (traditionally Ranger / Sniper) is not in Grand
Launch** - Nexon's Grand Launch release notes list only the Lv. 10 and
Lv. 30 advancements, and no date has been announced. (An earlier
version of this answer said it was held for Grand Launch per the
release notes; that was wrong.) Max the 2nd-job skills you use rather
than banking SP indefinitely.

**I'm F2P. How do I prioritize mesos?**

Weapon > arrows > gloves > overall > hat > shoes > cape. Scroll
one piece to completion before starting the next. The
[Meso farming guide](/meso-farming-30-plus) covers grind rotations
that fund scroll budgets.

**Will this guide update when 3rd job opens?**

Yes. When Nexon releases Ranger / Sniper advancement (not in Grand
Launch), this guide gets a 3rd job SP priority section. Last reviewed
2026-10-21.
