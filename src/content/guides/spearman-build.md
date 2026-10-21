---
title: "Spearman Build: Hyper Body, Spear vs Polearm, and the Mandatory-Party-Invite Life"
description: "Comprehensive Spearman deep-dive for MapleStory Classic World. Hyper Body as the identity party-buff, spear vs polearm decision math, SP priority (Weapon Mastery/Booster/Hyper Body/Iron Will/Final Attack), pure STR allocation, armor progression, scrolling, and the honest 'you will be invited to everything' verdict."
lastUpdated: "2026-10-11"
tags:
  - spearman
  - warrior
  - builds
  - post-30
status: "Live - Founder's Access window Oct 6 to Oct 20, 2026"
theme: "perion"
decorations: false
eyebrow: "Class Build Deep Dive"
heading: "Spearman Build"
tagline: "The party-support warrior. Hyper Body +60% max HP/MP buff to everyone in range. Spear vs polearm settled, armor progression from Fighter guide reused, mandatory-invite verdict."
verificationStatus: "launch-verified"
verificationNote: "Weapon ATK + speed data from src/data/db/items.json datamine. Classic World mechanics (HP wash removal boosting Hyper Body party value) sourced from Nexon Oct 3 release notes + msclassic.wiki. SP priority follows corrected community consensus. Armor progression shared with Fighter guide (same Warrior class)."
sourceSlugs:
  - nexon-founders-access-release-notes
  - osmsdataexplorer
  - reddit-xbucc-complete-builds
  - reddit-everything-changed-cot2
toc:
  - { href: "#tldr", label: "TL;DR" }
  - { href: "#hyper-body-is-the-identity", label: "Hyper Body identity" }
  - { href: "#spear-vs-polearm", label: "Spear vs polearm" }
  - { href: "#sp-priority", label: "SP priority" }
  - { href: "#ap-allocation", label: "AP allocation" }
  - { href: "#weapon-progression", label: "Weapons L10-70" }
  - { href: "#armor-and-scrolling", label: "Armor + scrolling" }
  - { href: "#party-value", label: "Party value" }
  - { href: "#faq", label: "FAQ" }
---

<h2 id="tldr">TL;DR</h2>

- **Stat allocation:** pure STR. Same reasoning as Fighter.
- **Spear vs polearm:** polearm wins at endgame on both ATK and
  single-target vs. multi-target coverage. Spear is marginally
  faster per hit. **Pick polearm** unless you specifically prefer
  spear animations.
- **SP max order (2nd job):** Weapon Mastery (20) → Weapon Booster
  (20) → **Hyper Body (20)** → Iron Will (20) → Final Attack (20).
  Hyper Body is your identity skill; don't delay it.
- **CW makes Hyper Body MORE valuable, not less.** HP wash removal
  means every class's HP ceiling in Classic World is driven by
  base-table + AP alone; Spearman's +60% HP buff fills a gap that
  no other class covers.

<h2 id="hyper-body-is-the-identity">Hyper Body is the identity</h2>

### What Hyper Body does

- Buffs the Spearman AND every party member in range
- **+60% max HP and +60% max MP** at max rank
- Lasts 200 seconds per cast
- Costs ~30 MP per cast

### Why it's so good in Classic World

HP wash removal eliminates the traditional path to multi-thousand
HP ceilings. In Classic World, a Night Lord's HP pool is driven by
base-table alone (projecting to ~4,000-5,000 at Lv 120 per the FA
datamine); Hyper Body's +60% buff is often the only way to push
past those projections for group endgame content.

**A party with Hyper Body active has 60% more HP buffer**. That's
the difference between surviving Jr. Balrog's charge attack and
dying. **No other class provides this**.

### The practical consequence

- **Spearman is now the single most-invited party class in Classic
  World bossing meta** (tied with Cleric for party value, both for
  different reasons: Spearman for Hyper Body HP buffer, Cleric for
  Bless + Heal)
- Expect boss party invites at Lv 50+ purely because you have
  Hyper Body maxed
- Whenever Zakum arrives (it is not in Grand Launch), Spearman will be
  near-mandatory for every Zakum run

<h2 id="spear-vs-polearm">Spear vs polearm</h2>

### Raw ATK comparison

| Lv | Spear | ATK · Speed | Polearm | ATK · Speed |
| --- | --- | --- | --- | --- |
| 30 | [Forked Spear](/items/1432003) | 52 · Slow | [Mithril Pole Arm](/items/1442004) | 55 · Slower |
| 35 | [Nakamaki](/items/1432004) | 57 · Slow | [Axe Pole Arm](/items/1442005) | 60 · Slower |
| 40 | [Zeco](/items/1432005) | 59 · Normal | [Crescent Polearm](/items/1442006) | 65 · Slower |
| 50 | [Serpent's Tongue](/items/1432006) | 69 · Normal | [The Nine Dragons](/items/1442007) | 75 · Slower |
| 60 | [Holy Spear](/items/1432007) | 82 · Normal | [Skylar](/items/1442008) | 85 · Slower |
| 70 | [Redemption](/items/1432008) | 95 · Slow | [The Gold Dragon](/items/1442009) | 95 · Slower |

**Observation:** Polearm has consistently **+3-10 ATK over spear**
at every bracket but **one speed class slower**. The hits-per-second
tradeoff is roughly a wash — spear and polearm end up at similar
sustained DPS.

### The skill difference

**Both Spearman branches use the SAME skill tree.** Spear Crusher
and Pole Arm Crusher are both 2nd-job attacks that scale with
whichever weapon you equip. The weapon choice is purely cosmetic
and attack-animation preference.

### The verdict

**Pick polearm.** Reasons:
- Slightly higher raw ATK at every bracket
- Overhead-slam animation looks more satisfying
- Classic MapleStory culture treats polearm as the Spearman weapon

Pick spear if you specifically love the thrust animation or if a
spear drops in your early game and you want to run with it. The
DPS gap is small enough to ignore.

<h2 id="sp-priority">SP priority (2nd job Spearman)</h2>

| Order | Skill | Max | Why |
| --- | --- | --- | --- |
| 1 | **Weapon Mastery (Spear OR Polearm)** | 20 | Damage floor cap. Same as Fighter. |
| 2 | **Weapon Booster** | 20 | Attack speed +2 for 200 seconds. |
| 3 | **Hyper Body** | 20 | **The identity skill**. +60% HP/MP party buff. |
| 4 | **Iron Will** | 20 | **+30% MDEF party buff**. Secondary party-value skill. |
| 5 | **Final Attack** | 20 | 40% proc bonus hit. Standard warrior tech. |
| 6 | **Power Guard** | leftover | 40% physical damage reflect. Niche but usable. |

### The Hyper Body timing

Hyper Body should hit max rank at Lv 60-65 if you're following the
priority order above. **The moment Hyper Body is maxed, your party
value jumps dramatically.** Lv 50-60 is the Spearman grind phase
where you're just a slightly-weaker Fighter; Lv 60+ is when you
become a party staple.

<h2 id="ap-allocation">AP allocation: pure STR</h2>

Same as Fighter. See
[Fighter guide AP section](/fighter-build#ap-allocation) for the
reqDEX table showing starting pool covers every Spearman weapon
through Lv 70.

<h2 id="weapon-progression">Weapon progression L10-70</h2>

### Polearm path (recommended)

| Lv | Pick | ATK | Speed | Source |
| --- | --- | --- | --- | --- |
| 15 | [Iron Ball](/items/1442001) | 40 | Slower | NPC shop |
| 20 | [Studded Polearm](/items/1442002) | 42 | Slow | NPC shop |
| 30 | [Mithril Pole Arm](/items/1442004) | 55 | Slower | drop: [Horny Mushroom](/mobs) |
| 35 | [Axe Pole Arm](/items/1442005) | 60 | Slower | drop: [Curse Eye](/mobs/31) |
| 40 | [Crescent Polearm](/items/1442006) | 65 | Slower | NPC shop |
| 50 | [The Nine Dragons](/items/1442007) | 75 | Slower | NPC shop |
| 60 | [Skylar](/items/1442008) | 85 | Slower | NPC shop |
| 70 | [The Gold Dragon](/items/1442009) | 95 | Slower | NPC shop |

### Spear path

| Lv | Pick | ATK | Speed | Source |
| --- | --- | --- | --- | --- |
| 30 | [Forked Spear](/items/1432003) | 52 | Slow | drop: [Evil Eye](/mobs) |
| 35 | [Nakamaki](/items/1432004) | 57 | Slow | drop: [Zombie Mushroom](/mobs) |
| 40 | [Zeco](/items/1432005) | 59 | Normal | NPC shop |
| 50 | [Serpent's Tongue](/items/1432006) | 69 | Normal | NPC shop |
| 60 | [Holy Spear](/items/1432007) | 82 | Normal | NPC shop |
| 70 | [Redemption](/items/1432008) | 95 | Slow | NPC shop |

<h2 id="armor-and-scrolling">Armor + scrolling (same as Fighter)</h2>

Spearman uses the same Warrior armor progression as Fighter.
See the [Fighter guide armor section](/fighter-build#armor-progression)
for the full tables and Zakum Helmet caveat.

### Scrolling note

Spearman weapons have **7 slots** on polearm/spear picks. 60% ATT
scrolls as usual. Fully-scrolled polearm at Lv 50 (The Nine Dragons
base 75 ATK) reaches 83-85 ATK, matching unscrolled Lv 60 Skylar.

### The no-shield consequence

Spear and polearm are 2H weapons. **No shield slot**. This means:
- No shield DEF or STR scrolls
- No shield scroll slot (unlike Fighter's 1H+shield build)
- Lose ~+10 ATT from the "would-have-been-shield-scrolled" line

**Partially offset by:** polearm/spear base ATK is higher than 1H
sword/axe. The tradeoff is net ~5 ATT behind Fighter 1H+shield,
but you have Hyper Body in exchange.

<h2 id="party-value">Party value: the Spearman identity</h2>

### Buffs you provide

| Buff | Effect | Range |
| --- | --- | --- |
| **Hyper Body** | +60% max HP/MP | Party in screen |
| **Iron Will** | +30% MDEF | Party in screen |

### Boss party stacking math

Example: Jr. Balrog party of 4 (Spearman, Fighter, Hunter, Cleric):
- **Without Spearman:** party has 4 × ~3000 HP = 12,000 total HP buffer
- **With Spearman + Hyper Body:** party has 4 × ~4800 HP = 19,200 total HP buffer

**That's an extra 7,200 HP** across the party. Jr. Balrog's charge
attack hits ~1500. Hyper Body = 5 more charge attacks the party can
tank.

### The social dynamic

Spearmen in Classic World are **always welcome at every boss
party**. Guild leaders will specifically message Spearmen to join
runs. You never have to search for party slots.

**Practical takeaway:** at Lv 50-60 with Hyper Body maxed, your
calendar fills with boss party invites. Capitalize on this for
EXP + party meso split.

<h2 id="faq">FAQ</h2>

**I'm Lv 30 and ready for 2nd-job. Fighter or Page or Spearman?**

- **[Fighter](/fighter-build)**: pure DPS warrior. Picks sword or axe,
  shield or 2H. Max DPS burst.
- **[Page](/page-build)**: tanky warrior with Threaten + Power Guard.
  Lower DPS, higher survivability.
- **Spearman**: party-support warrior with Hyper Body. Lower solo
  DPS, highest party value.

**Which has the highest DPS?**

Fighter at pure solo DPS. Spearman is competitive but trades 1-2
skill slots for Hyper Body/Iron Will instead of max damage skills.

**Can I switch from Fighter to Spearman at Lv 50?**

No. 2nd-job advancement is one-way. Pick carefully at Lv 30.

**Do I need to max Hyper Body before anything else?**

No. Max Weapon Mastery + Booster first (DPS foundation), THEN Hyper
Body. Max Hyper Body before Final Attack.

**My party keeps asking me to recast Hyper Body - is it short?**

200 seconds per cast = ~3.3 minutes. On long boss fights (Jr.
Balrog, Mushmom) you'll need 2-3 recasts. Keep MP
pots stocked.

**Does Hyper Body stack with Bless (Cleric)?**

Yes! Separate buff slots. Hyper Body (HP/MP), Bless (ACC/MAD/ATK)
stack additively. A party with Spearman + Cleric gets both. This
is why those two are the premier party-support classes.

**Will this guide update when Dark Knight unlocks?**

Yes. Spearman → Dragon Knight (3rd job) → Dark Knight (4th job) is
the traditional path; 3rd Job is not in Grand Launch and has no
announced date. The guide gets a 3rd-job SP section when it arrives.
Last reviewed 2026-10-21.
