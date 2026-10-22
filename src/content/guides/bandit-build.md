---
title: "Bandit Build: Savage Blow, Steal, and the Chief Bandit Meso Explosion Preview"
description: "Comprehensive Bandit deep-dive for MapleStory Classic World. Savage Blow burst skill, Steal mechanics (free drops from any mob), SP priority (Weapon Mastery/Booster/Savage Blow/Steal/Final Attack), LUK-primary stat allocation, dagger weapon progression with the Fast vs Faster speed-class decision, armor progression, and the honest Chief Bandit meso-farming preview."
lastUpdated: "2026-10-11"
tags:
  - bandit
  - thief
  - builds
  - weapons
  - post-30
status: "Live - Founder's Access window Oct 6 to Oct 20, 2026"
theme: "kerning"
decorations: false
eyebrow: "Class Build Deep Dive"
heading: "Bandit Build"
tagline: "Savage Blow burst, Steal double-drops, and what Chief Bandit's Meso Explosion could mean once 3rd job arrives (not in Grand Launch; no date yet). The Fast vs Faster dagger speed-class decision settled."
verificationStatus: "launch-verified"
verificationNote: "Weapon ATK + speed data from src/data/db/items.json datamine. Dagger progression confirmed via node query showing two parallel paths (speed 3 Faster vs speed 4 Fast). Classic World mechanics sourced from Nexon Oct 3 release notes + msclassic.wiki. SP priority follows corrected community consensus (the xBucc build cluster had Bandit builds that the OP later amended)."
sourceSlugs:
  - nexon-founders-access-release-notes
  - osmsdataexplorer
  - reddit-xbucc-complete-builds
  - reddit-everything-changed-cot2
toc:
  - { href: "#tldr", label: "TL;DR" }
  - { href: "#the-bandit-identity", label: "The Bandit identity" }
  - { href: "#fast-vs-faster-dagger-speed", label: "Fast vs Faster dagger speed" }
  - { href: "#sp-priority", label: "SP priority" }
  - { href: "#ap-allocation", label: "AP allocation" }
  - { href: "#weapon-progression", label: "Daggers L10-70" }
  - { href: "#armor-progression", label: "Armor" }
  - { href: "#steal-mechanics", label: "Steal mechanics" }
  - { href: "#chief-bandit-preview", label: "Chief Bandit preview" }
  - { href: "#faq", label: "FAQ" }
---

<h2 id="tldr">TL;DR</h2>

- **Stat allocation:** pure LUK (not DEX like Assassin). Dagger
  damage formula is LUK-primary with STR secondary. **Pure LUK
  wins** in Classic World because starting STR pool covers every
  dagger reqSTR through Lv 70.
- **Fast vs Faster daggers:** at every bracket there are two
  parallel dagger picks — one speed 4 (Fast) with higher ATK, one
  speed 3 (Faster) with lower ATK. **Pick Faster** for Savage Blow
  spam. The DPS gap favors speed.
- **SP max order (2nd job):** Weapon Mastery (20) → Weapon Booster
  (20) → **Savage Blow (30)** → Steal (20) → Final Attack (20).
- **The Chief Bandit tease:** 3rd-job Chief Bandit unlocks **Meso
  Explosion** which spawns mesos into AoE damage. This is the
  single most-anticipated post-launch skill in the Classic World
  meta. 3rd Job is not in Grand Launch and has no date; we'll cover it
  when Nexon releases it.
- **FA endgame kit:** scrolled Lv 50 [Sai](/items/1332016) Faster dagger
  or [Shinkita](/items/1332015) Fast dagger, Thief armor set
  (Steely → Mithril → Dark variants), high-LUK accessories.

<h2 id="the-bandit-identity">The Bandit identity</h2>

Bandit at 2nd job is a melee single-target burst class. Your main
skills:

### Savage Blow

- Single-target 6-hit combo attack
- Each hit = 70% of weapon damage
- Combo total = ~420% weapon damage per cast
- Great against bosses with high HP (Mushmom, Jr. Balrog)
- Weak against crowded mob rooms (no AoE)

### Steal

- Chance to drop an extra copy of whatever the target drops
- **Includes meso drops** — a stolen meso drop can be 1.5-2x normal
- Works on bosses (occasionally)
- The quiet-OP skill of the Bandit kit

### The playstyle

- Grind: Magic Claw-style auto-attack + Savage Blow on tough mobs
- Boss: pure Savage Blow spam
- Bossing + Steal: free bonus drops when the stars align

<h2 id="fast-vs-faster-dagger-speed">Fast vs Faster dagger speed</h2>

Classic MapleStory daggers come in two speed classes with parallel
tiers at every level:

### The speed class math

- **Fast (speed 4):** ~1.5 attacks per second
- **Faster (speed 3):** ~1.8 attacks per second
- Difference: ~20% more hits per second with Faster weapons

### Raw ATK comparison

| Lv | Faster dagger (speed 3) | ATK | Fast dagger (speed 4) | ATK |
| --- | --- | --- | --- | --- |
| 15 | [Field Dagger](/items/1332003) | 30 | — | — |
| 20 | [Stinger](/items/1332006) | 39 | [Coconut Knife](/items/1332005) | 38 |
| 25 | — | — | [Iron Dagger](/items/1332007) | 40 |
| 30 | [Cass](/items/1332009) | 47 | [Reef Claw](/items/1332010) | 48 |
| 35 | — | — | [Halfmoon Zamadar](/items/1332011) | 53 |
| 40 | [Korean Fan](/items/1332013) | 55 | [Gephart](/items/1332012) | 58 |
| 45 | [Bazlud](/items/1332014) | 62 | — | — |
| 50 | [Sai](/items/1332016) | 67 | [Shinkita](/items/1332015) | 68 |
| 60 | [Serpent's Coil](/items/1332019) | 77 | [Deadly Fin](/items/1332018) | 78 |
| 70 | [Golden River](/items/1332021) | 87 | [Kandine](/items/1332020) | 88 |

**Observation:** Fast daggers have **+1-3 ATK** over Faster daggers
at the same bracket. But Faster daggers hit **20% more often**.

### DPS calculation (approximate)

At Lv 50:
- Shinkita (Fast, 68 ATK): 68 × 1.5 hits/sec = 102 ATK/sec baseline
- Sai (Faster, 67 ATK): 67 × 1.8 hits/sec = 120 ATK/sec baseline

**Faster wins by ~18%** on sustained DPS. The slight ATK gap is
outweighed by the speed class.

### Savage Blow doubles down on Faster

Savage Blow is a **6-hit combo per cast**. Each hit scales with
weapon damage × 70%. Faster weapons = faster recast = more Savage
Blow procs per minute.

**The verdict:** pick Faster (speed 3) daggers at every bracket.
The DPS advantage compounds with Savage Blow's hit-rate scaling.

<h2 id="sp-priority">SP priority (2nd job Bandit)</h2>

| Order | Skill | Max | Why |
| --- | --- | --- | --- |
| 1 | **Dagger Mastery** | 20 | Damage floor cap. Standard class foundation. |
| 2 | **Dagger Booster** | 20 | Attack speed +2 for 200 seconds. |
| 3 | **Savage Blow** | 30 | **Your main damage skill**. 6-hit combo. |
| 4 | **Steal** | 20 | Bonus drop chance. The quiet-OP skill. |
| 5 | **Final Attack: Thief** | 20 | 40% proc bonus hit. Universal thief tech. |
| 6 | **Haste** | leftover | +10% move speed and jump. Quality of life. |

### Savage Blow max to 30 note

Savage Blow is one of the few 2nd-job skills that maxes to 30 (not
20). This means you need **more SP investment** than other skills.
Prioritize this after mastery + booster.

### Steal is NOT a troll pick

The xBucc Reddit build cluster and some older community guides treat
Steal as "optional" or "skip if lazy." **Don't skip it.** Steal
is the second-highest value skill in the Bandit kit after Savage
Blow. The 2x drop chance pays dividends over hundreds of grinding
hours.

<h2 id="ap-allocation">AP allocation: pure LUK (not DEX)</h2>

### Why Bandit is LUK-primary

Dagger damage formula:
- Base damage = LUK × (dagger ATK / 100) + STR × 1.3
- Translation: LUK contributes ~1.0× per point, STR contributes 1.3× per point BUT dagger ATK scales with LUK

**LUK wins the damage math** at every reasonable gear tier. Pure
LUK is the right answer.

### The STR question

- **STR per level:** +0 (starting pool is 25)
- **LUK per level:** +5 (full LUK)

Dagger reqSTR tops at 50 STR at Lv 50 (Shinkita/Sai) and 70 STR at
Lv 70 (Kandine/Golden River). Starting STR pool is 25; you need
~45 more over 70 levels.

**But wait** — you get +5 STR every 10 levels naturally through
level APs even without pumping it. By Lv 70 you'll have ~60+ STR
automatically. **Pure LUK works.**

### The 25-STR myth from Assassin

Some Bandit guides recommend "25 STR start, then pure LUK." This is
leftover from Assassin's claw builds where STR has a different
scaling role. **For Bandit, starting STR is already enough.** Don't
pump STR.

<h2 id="weapon-progression">Dagger progression L10-70 (Faster path)</h2>

| Lv | Pick | ATK | Speed | Source |
| --- | --- | --- | --- | --- |
| 15 | [Field Dagger](/items/1332003) | 30 | Faster | NPC shop |
| 20 | [Stinger](/items/1332006) | 39 | Faster | drop: Jr. Necki |
| 30 | [Cass](/items/1332009) | 47 | Faster | NPC shop |
| 40 | [Korean Fan](/items/1332013) | 55 | Faster | drop: [Lorang](/mobs/36) |
| 45 | [Bazlud](/items/1332014) | 62 | Faster | drop: [Lupin](/mobs/35) |
| 50 | [Sai](/items/1332016) | 67 | Faster | drop: Duskmander |
| 60 | [Serpent's Coil](/items/1332019) | 77 | Faster | drop: [Rotten Mushroom](/mobs) |
| 70 | [Golden River](/items/1332021) | 87 | Faster | NPC shop |

### Dagger progression (Fast path, if you prefer)

| Lv | Pick | ATK | Speed | Source |
| --- | --- | --- | --- | --- |
| 20 | [Coconut Knife](/items/1332005) | 38 | Fast | drop: Jr. Necki |
| 25 | [Iron Dagger](/items/1332007) | 40 | Fast | drop: Horny Mushroom |
| 30 | [Reef Claw](/items/1332010) | 48 | Fast | drop: [Ligator](/mobs/29) |
| 35 | [Halfmoon Zamadar](/items/1332011) | 53 | Fast | drop: Glowshroom |
| 40 | [Gephart](/items/1332012) | 58 | Fast | drop: [Ligator](/mobs/29) |
| 50 | [Shinkita](/items/1332015) | 68 | Fast | NPC shop |
| 60 | [Deadly Fin](/items/1332018) | 78 | Fast | NPC shop |
| 70 | [Kandine](/items/1332020) | 88 | Fast | NPC shop |

### Boss drop farming note

The L45 [Bazlud](/items/1332014) drops from [Lupin](/mobs/35) in
Monkey Swamp. L50 Sai drops from Duskmander in Perion area. These
are the two "cheap boss drop upgrade" moments for Bandit progression.

<h2 id="armor-progression">Bandit armor progression</h2>

Bandits use the same Thief armor pool as Assassins. See the
[Assassin build guide armor section](/assassin-build#armor-progression-and-the-sauna-robe)
for the full progression.

### Key picks

| Lv | Hat | Overall | Shoes | Gloves |
| --- | --- | --- | --- | --- |
| 30 | [Steely Mesh Hat](/items/1002108) | [Steely](/items/1050015) | [Steely Boots](/items/1072076) | [Steely](/items/1082030) |
| 50 | [Mithril](/items/1002169) | [Mithril Platine](/items/1050032) | [Mithril Boots](/items/1072117) | [Mithril](/items/1082066) |
| 70 | [Dark](/items/1002200) | [Dark Oriental Fury](/items/1050045) | [Dark](/items/1072145) | [Dark](/items/1082090) |

### Scrolling priority (Bandit-specific)

Same as Assassin:
1. **Dagger** — 60% ATT scrolls, 7 slots
2. **Overall** — 60% LUK (not DEX) scrolls
3. **Gloves** — 60% ATT or LUK
4. **Hat** — 60% LUK
5. **Shoes, cape** — low priority

<h2 id="steal-mechanics">Steal mechanics</h2>

### How Steal works

Each mob attack has a chance to proc Steal, which causes the mob
to drop an **additional copy** of a random item from its drop
table. This includes:

- Regular equipment drops
- Consumable drops (potions, scrolls, materials)
- **Meso drops** — often the biggest value add

### Steal proc rate at max rank

- 20 skill levels = ~50% proc chance (approximate, traditional MapleStory baseline - unverified for Classic World)
- Soul proc on cooldown, roughly once per combat loop

### Why Steal is OP for mesos

A boss like [Mushmom](/bosses/mushmom) drops ~15,000-25,000 mesos
per kill. A Bandit with Steal maxed averages ~1.5x that amount
over many runs. **Over 50 Mushmom kills, Steal nets ~500,000+
extra mesos**.

### Steal doesn't work on specific drops

- Rare drops (like Red Viper bow from Fire Boar) have Steal
  protection — you can't steal them
- Quest items can't be stolen
- Soul-locked items can't be stolen

<h2 id="chief-bandit-preview">Chief Bandit preview (3rd job teaser)</h2>

<div class="callout callout--framing">
<strong>This is a preview of traditional MapleStory 3rd-job content.</strong>
3rd-job advancement is not in Grand Launch (Nexon's release notes list
only the Lv. 10 and Lv. 30 advancements) and has no announced date, so
nothing below is confirmed for Classic World. An earlier version said
it would open at Grand Launch; that was wrong.
</div>

### Meso Explosion — the most-anticipated skill

Meso Explosion lets Bandit "pile up" meso bags on the ground, then
detonate them for massive AoE damage. The skill mechanic:

1. Mobs drop meso bags (bags are physical items on the ground)
2. Bandit casts Meso Explosion targeting a bag pile
3. Each bag explodes for ~500-2000 damage in AoE
4. Multiple bags stack damage additively

### Why this is the Classic World meta

- **Highest sustained AoE DPS in the game** at 3rd job
- Scales infinitely with meso drops (more mesos = more damage)
- Transforms Bandit from "single-target DPS" to "AoE powerhouse"

### What this means for 2nd-job Bandit now

- **Max Steal** — it carries forward to boost meso drops at Chief Bandit
- **Pure LUK** — Meso Explosion scales with LUK indirectly through
  dagger damage during the mob-killing phase
- **Save mesos for scrolling** — don't waste on cosmetics now, invest
  in scrolls for your Grand Launch dagger

### Pickpocket (3rd-job AoE helper)

Chief Bandit also gets Pickpocket, which auto-generates meso bags
from every mob you hit. Combined with Meso Explosion, this creates
infinite AoE DPS loops.

**Translation:** at Grand Launch, Chief Bandit is one of the top
3-5 classes in the meta. If you're playing Bandit now, you're
investing in future power.

<h2 id="faq">FAQ</h2>

**I'm Lv 30 and ready for 2nd-job. Bandit or Assassin?**

- **Bandit**: single-target melee with Savage Blow + Steal. Mesos
  farmer at 3rd job via Meso Explosion.
- **[Assassin](/assassin-build)**: ranged throwing stars with
  Avenger + Haste. Mobility king.

**Why LUK and not DEX?**

Bandit dagger damage is LUK-primary. See
[the AP allocation section](#ap-allocation). The common DEX advice
is from Assassin builds, where DEX pumps claw equip requirements.

**Fast vs Faster daggers — really Faster?**

Yes. The speed class advantage (20% more hits per second) outweighs
the small ATK gap. Faster weapons also compound with Savage Blow's
hit-rate scaling.

**Can I switch from Bandit to Assassin at Lv 50?**

No. 2nd-job advancement is one-way. Pick carefully at Lv 30.

**Steal doesn't seem to work on bosses - bug?**

Steal proc rate on bosses is traditionally lower than on regular mobs
(long-standing MapleStory balance; FA client datamine does not expose
separate boss/regular proc values). It does work, just rarely. Over
many Mushmom kills you'll notice the stolen bonus drops.

**Does Steal work with my party members?**

No. Steal is a Bandit-only proc. Other classes don't see the
bonus drops.

**My Savage Blow damage seems low - bug?**

Savage Blow damage is per-hit based on weapon damage. Low damage
means either:
- Weapon ATK is low (upgrade or scroll your dagger)
- Weapon Mastery not maxed (max it first)
- Fighting a mob with high DEF (Threaten from a Page helps here)

**When does Meso Explosion unlock?**

Unknown. It's a Chief Bandit (3rd job) skill in traditional MapleStory,
and 3rd Job is not part of Grand Launch. Nexon hasn't announced a date.

**Will this guide update when Chief Bandit unlocks?**

Yes. 3rd-job Chief Bandit section covering Meso Explosion mechanics,
Pickpocket uptime optimization, dark sight stealth usage, and the
meso-farming meta will ship on Grand Launch day. Last reviewed
2026-10-11.
