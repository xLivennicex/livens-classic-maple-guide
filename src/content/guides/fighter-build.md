---
# ---------- Core metadata ----------
title: "Fighter Build: Sword or Axe, 1H + Shield or 2H, and the Rage Question"
description: "Comprehensive Fighter deep-dive guide for MapleStory Classic World. Sword vs axe weapon ladder L10-70, 1H+shield vs 2H decision math, SP priority (Weapon Mastery/Booster/Final Attack/Power Guard/Rage), AP allocation under CW's no-HP-wash rules, scrolling philosophy for Fighter's unique dual-slot setup, armor progression, and the honest bossing verdict."
lastUpdated: "2026-10-11"
tags:
  - fighter
  - warrior
  - builds
  - weapons
  - post-30
status: "Live - Founder's Access window Oct 6 to Oct 20, 2026"

# ---------- Layout ----------
theme: "perion"
decorations: false
eyebrow: "Class Build Deep Dive"
heading: "Fighter Build"
tagline: "The DPS warrior branch — pure STR, max weapon mastery, Rage party buff, and the eternal 1H+shield vs 2H question with real datamine ATK numbers to settle it."

# ---------- Verification ----------
verificationStatus: "launch-verified"
verificationNote: "Weapon ATK values, speed classes, armor stats, shield DEF, and reqLevel data pulled directly from src/data/db/items.json (7431 items from the CoT 2 client datamine via osmsdataexplorer.com + MeowDB community drops). Classic-World-specific mechanics (HP wash removal, 1.25x elemental, earring crit damage line, Victoria-only FA content ceiling) sourced from Nexon's Oct 3 release notes + Lunitidal on msclassic.wiki + r/Maplestory CW threads. SP priority order is a condensed version of community consensus from MapleRoyals traditional MapleStory archives + xBucc Reddit cluster corrections (specifically the top-upvoted critique that all Warrior builds skip Final Attack - we max it). The 2H vs 1H+shield DPS math uses the datamine ATK values and standard traditional MapleStory Hitrate conventions; not formally re-tested in CW CoT 2 so treat the 'break-even point' as a planning estimate, not a precise simulation."
sourceSlugs:
  - nexon-founders-access-release-notes
  - osmsdataexplorer
  - reddit-xbucc-complete-builds
  - reddit-everything-changed-cot2

# ---------- TOC ----------
toc:
  - { href: "#tldr", label: "TL;DR" }
  - { href: "#classic-world-fighter-changes", label: "CW changes" }
  - { href: "#1h-vs-2h-the-decision", label: "1H vs 2H" }
  - { href: "#sword-vs-axe", label: "Sword vs axe" }
  - { href: "#sp-priority", label: "SP priority" }
  - { href: "#ap-allocation", label: "AP allocation" }
  - { href: "#weapon-progression", label: "Weapons L10-70" }
  - { href: "#shield-progression", label: "Shields" }
  - { href: "#armor-progression", label: "Armor" }
  - { href: "#scrolling-philosophy", label: "Scrolling" }
  - { href: "#bossing", label: "Bossing" }
  - { href: "#faq", label: "FAQ" }
---

<h2 id="tldr">TL;DR</h2>

- **Stat allocation:** pure STR. Classic World's no-HP-wash doesn't
  hurt Warriors because the base HP table is already generous.
- **1H + shield vs 2H:** 1H + shield wins long-term thanks to the
  extra scroll slot (your shield adds +15-25 scrolled DEF/STR). 2H
  wins pre-scrolling (+6-8 raw ATK). **Pick 2H if you plan to scroll
  nothing; pick 1H + shield if you'll scroll your gear.**
- **Sword vs axe:** parity on ATK and speed in CW. Axes have slightly
  more boss drops in the L30-40 range; swords have a quest reward
  (Hero's Gladius Lv 45). Pick based on vibes, not optimization.
- **SP max order (2nd job):** Weapon Mastery (20) → Weapon Booster (20)
  → Final Attack (20) → Power Guard (20) → Rage (20). Rage waits
  because the party-buff tax outweighs its personal benefit until
  2nd job skills are rolling.
- **FA endgame kit:** scrolled Lv 50-70 1H sword/axe + Skull Shield
  (L50) / Ancient Shield (L70), full Umber Shouldermail → Bronze
  Platine armor set, Zakum Helmet alternative (Red Oriental Helmet
  L60 or Silver Crusader Helm L50).

<h2 id="classic-world-fighter-changes">Classic World Fighter changes</h2>

Three mechanic shifts matter for Fighter specifically.

### 1. HP washing removed — but it was never Fighter's problem

Warriors have the highest base HP table in the game. Classic World's
HP wash removal **doesn't affect Fighter builds at all** — your HP
ceiling is already strong by base-table alone.

**Practical impact:** zero. Fighters are fine without HP wash. The
real losers of HP wash removal are Clerics, Night Lords, and
Buccaneers — you're not one of them.

### 2. Earring crit damage line

CoT 2 added a crit-damage stat line to earring items. Fighter's
2nd-job skill set has no crit skill (unlike Shadowers' Pickpocket
or Rangers' Mortal Blow), but crit damage still stacks with weapon
crit and Final Attack procs.

**Practical impact:** scroll earrings aggressively. The community
meta on specific earring picks is still forming; monitor
[meso.watch](https://meso.watch) for emerging mid-tier earring prices.

### 3. 1.25× elemental is irrelevant

Fighters are a physical-damage class. The 1.25× elemental weakness
multiplier doesn't apply to your weapon attacks. You can ignore the
"match element to mob weakness" meta entirely.

**Practical impact:** Fighter is the most consistent class across
every map type in Classic World because you don't care about
elemental weakness. Every mob is just a target.

<h2 id="1h-vs-2h-the-decision">1H + shield vs 2H: the real math</h2>

The question every new Fighter asks. Here's the honest answer with
Classic World datamine numbers:

### Raw ATK comparison at Lv 50

| Weapon | ATK | Speed | Pair |
| --- | --- | --- | --- |
| [Jeweled Katar](/items/1302015) 1H sword | 70 | Fast | + shield |
| [Buck](/items/1312008) 1H axe | 70 | Fast | + shield |
| [Lion's Fang](/items/1402008) 2H sword | 73 | Normal | — |
| [The Rising](/items/1412007) 2H axe | 73 | Normal | — |
| [Golden Mole](/items/1422007) 2H blunt | 75 | Slow | — |

**Observation:** 2H weapons have **+3-5 ATK** over 1H at Lv 50. At
Lv 70 the gap widens to **+6-8 ATK** ([Red Katana](/items/1302018)
L70 sword = 87, [Doombringer](/items/1402010) 2H L70 = 93).

### Shield adds a scroll slot

A fully-scrolled Lv 50 [Skull Shield](/items/1092016) with 5 slots
of 60% ATT scrolls expects **+10 ATT** (5 scrolls × 60% × +2 ATT
each, before failures). That's **more than the raw 2H ATK advantage**.

**The verdict:**
- **1H + shield wins** if you'll scroll your gear seriously (budget
  of 20+ scrolls across weapon + shield).
- **2H wins** if you're playing budget / F2P and won't scroll the
  shield slot. The raw ATK gap matters more when neither side is
  scrolled.

### Attack speed caveat

- 1H swords and axes are all **Fast** (attack speed 5)
- 2H swords are **Normal** (speed 6)
- 2H axes are **Fast** (speed 5) at low levels, **Normal** at Lv 50+
- 2H blunt weapons are all **Slow** (speed 7)
- 2H polearms are **Slower** (speed 8+)

A faster weapon lets Weapon Booster push you into a higher
hits-per-second bracket. **For raw DPS Fighter builds, 1H + shield
or 2H axe (not 2H sword) are the two viable picks.** Avoid 2H blunt
and polearm unless you're building for 3rd job skills.

<h2 id="sword-vs-axe">Sword vs axe: datamine parity, taste decides</h2>

Classic World has sword and axe weapons at every reqLevel from 15
to 70. Compare the full lists in the [weapon
progression](#weapon-progression) section.

### What's actually different in CW

| Factor | Sword | Axe |
| --- | --- | --- |
| ATK | Identical at every bracket | Identical at every bracket |
| Speed | Fast (all tiers) | Fast (all tiers) |
| Boss drops (L30-40) | Cutlus from Horny Mushroom | Fireman's Axe from Fire Boar · Dankke from Jr. Wraith |
| Quest reward | [Hero's Gladius](/items/1302014) L45 from the Hero's quest | — |
| Final Attack visual | Horizontal slash | Overhead chop |

**Honest answer:** parity. The old "axes crit for more" rumor is a
confused memory of Fighter's Weapon Mastery skill which caps your
minimum damage percentage — it applies equally to sword and axe
in the FA datamine's skill definitions.

Pick based on which boss drop route you want to farm, or just the
animation you prefer. **If undecided, pick axe** — the Lv 30
Fireman's Axe is a reliable [Fire Boar](/mobs/30) drop and gives
you a cheap boss-farming motivator from Lv 30-35.

<h2 id="sp-priority">SP priority (2nd job)</h2>

The FA datamine confirms the Fighter skill tree matches
traditional MapleStory layouts. Max order with reasoning:

### The 100% uncontested picks

| Order | Skill | Max | Why |
| --- | --- | --- | --- |
| 1 | **Weapon Mastery (Sword OR Axe)** | 20 | Caps your minimum damage. Highest DPS floor in the game. |
| 2 | **Weapon Booster** | 20 | Attack speed +2 for 200 seconds per cast. Single most impactful DPS multiplier. |
| 3 | **Final Attack (Sword OR Axe)** | 20 | ~40% proc chance for a free bonus hit on auto-attacks. Free damage multiplier. |

### The contested picks

The xBucc Reddit community-authored build cluster (540+ upvotes)
suggested maxing both Weapon Mastery and Booster but **skipping
Final Attack entirely**. The top-upvoted critique (28 points)
disagreed and so do we — Final Attack is a free DPS line that scales
with your weapon ATK.

**Our recommendation:**

| Order | Skill | Max | Why |
| --- | --- | --- | --- |
| 4 | **Power Guard** | 20 | Reflects 40% of monster physical damage back at them. 2x more valuable in a HP-wash-free CW. |
| 5 | **Rage** | 20 | Party buff: +12 WATK to everyone in range. Can hold off maxing until 2nd job is rolling because the party-buff tax (you cast on others, no self-benefit if solo) outweighs personal DPS early. |

### The optional picks

- **Sword/Axe Booster** at level 1 only (duration scales with level
  but the +2 speed cap is already hit at level 1 — maxing it only
  extends duration from 10 seconds to 200)

- Actually never mind, max it anyway for duration. The duration
  benefit is real.

<h2 id="ap-allocation">AP allocation: pure STR</h2>

### The simple answer

- **STR per level:** +5 (full STR)
- **DEX per level:** +0

Classic World Fighter has no reason to go hybrid. The weapons list
has consistent DEX requirements that stay reachable with just the
starting DEX pool across all Lv 10-70 Fighter weapons:

| Weapon tier | DEX required | Starting DEX by that level |
| --- | --- | --- |
| Lv 30 (Gladius) | 30 DEX | 25 DEX starting pool is enough with 5 misc level APs if you want ACC margin |
| Lv 50 (Jeweled Katar) | 50 DEX | 25 DEX starting + 25 wasted APs if you went hybrid — don't |
| Lv 70 (Red Katana) | 70 DEX | 25 DEX starting + 45 wasted APs — definitely don't |

**Translation:** the "pump DEX = character level" meme is a leftover
from Thief/Assassin builds where it was needed for claw equip. For
Fighter, pure STR is the right answer at every level.

### Accuracy problems?

Fighters' Final Attack and Power Guard are not accuracy-dependent.
Your base ACC from level + Weapon Mastery + Rage party ACC buff
covers you against every mob in Classic World FA at your level.

The only Classic World mob where accuracy matters for a solo
Fighter is [Shade](/bosses/shade) at Lv 47 (999 evasion). Our
[boss guide](/bosses-at-30-plus#level-47-shade) covers the
Cleric-mandatory solution.

<h2 id="weapon-progression">Fighter weapon progression L10-70</h2>

Full datamine tables. Pick the row at your bracket and click
through for the item dossier.

### 1H Sword path

| Lv | Pick | ATK | Speed | Source |
| --- | --- | --- | --- | --- |
| 15 | [Sabre](/items/1302002) | 32 | Fast | NPC shop |
| 20 | [Viking Sword](/items/1302004) | 37 | Fast | NPC shop |
| 30 | [Gladius](/items/1302008) | 47 | Fast | drop: [Iron Hog](/mobs/24) (Lv 42) |
| 35 | [Cutlus](/items/1302010) | 55 | Fast | drop: [Horny Mushroom](/mobs) (Lv 22) |
| 40 | [Traus](/items/1302012) | 60 | Fast | NPC shop |
| 45 | [Hero's Gladius](/items/1302014) | 62 | Fast | **quest reward** |
| 50 | [Jeweled Katar](/items/1302015) | 70 | Fast | drop: Rafflesia |
| 60 | [Neocora](/items/1302017) | 77 | Fast | NPC shop |
| 70 | [Red Katana](/items/1302018) | 87 | Fast | NPC shop |

### 1H Axe path

| Lv | Pick | ATK | Speed | Source |
| --- | --- | --- | --- | --- |
| 15 | [Battle Axe](/items/1312002) | 32 | Fast | drop: Bubbling |
| 25 | [Mithril Axe](/items/1312004) | 45 | Fast | NPC shop |
| 30 | [Fireman's Axe](/items/1312005) | 47 | Fast | drop: [Fire Boar](/mobs/30) |
| 35 | [Dankke](/items/1312006) | 55 | Fast | drop: [Jr. Wraith](/mobs/32) |
| 40 | [Blue Counter](/items/1312007) | 57 | Fast | drop: Echopus |
| 50 | [Buck](/items/1312008) | 70 | Fast | NPC shop |
| 60 | [Hawkhead](/items/1312009) | 77 | Fast | NPC shop |
| 70 | [Mikhail](/items/1312010) | 87 | Fast | NPC shop |

### 2H Sword path (if going 2H)

| Lv | Pick | ATK | Speed | Source |
| --- | --- | --- | --- | --- |
| 20 | [Two-Handed Sword](/items/1402002) | 40 | Fast | NPC shop |
| 25 | [Broadsword](/items/1402003) | 45 | Fast | NPC shop |
| 30 | [Scimitar](/items/1402005) | 53 | Normal | drop: [Curse Eye](/mobs/31) |
| 35 | [Lionheart](/items/1402006) | 55 | Fast | drop: [Zombie Lupin](/mobs/38) |
| 40 | [Zard](/items/1402007) | 60 | Fast | NPC shop |
| 50 | [Lion's Fang](/items/1402008) | 73 | Normal | NPC shop |
| 60 | [Sparta](/items/1402009) | 83 | Normal | NPC shop |
| 70 | [Doombringer](/items/1402010) | 93 | Normal | NPC shop |

### 2H Axe path (if going 2H axe)

| Lv | Pick | ATK | Speed | Source |
| --- | --- | --- | --- | --- |
| 20 | [Iron Axe](/items/1412001) | 35 | Fast | NPC shop |
| 25 | [Two-Handed Axe](/items/1412003) | 45 | Fast | drop: Ribbon Pig |
| 30 | [Blue Axe](/items/1412004) | 50 | Fast | drop: [Curse Eye](/mobs/31) |
| 35 | [Niam](/items/1412005) | 55 | Fast | NPC shop |
| 40 | [Sabretooth](/items/1412006) | 60 | Fast | NPC shop |
| 50 | [The Rising](/items/1412007) | 73 | Normal | NPC shop |
| 60 | [The Shining](/items/1412008) | 80 | Fast | NPC shop |
| 70 | [Chrono](/items/1412009) | 93 | Normal | NPC shop |

### Hero's Gladius note

Hero's Gladius at Lv 45 is a **quest reward**, not a drop or shop
item. The quest unlocks around Lv 45-50 (quest id 10404 in the
datamine). Pick it up as your Lv 45-50 bridge — don't scroll it
because the Lv 50 picks (Jeweled Katar / Buck) overtake it by +8 ATK.

<h2 id="shield-progression">Shield progression (1H builds only)</h2>

Full warrior-equippable shield list. **Prioritize the +STR
scrolled variants** at each tier.

| Lv | Pick | DEF | Source |
| --- | --- | --- | --- |
| 10 | [Wooden Buckler](/items/1092001) | 70 | drop: Jr. Wraith |
| 15 | [Steel Shield](/items/1092003) | 80 | drop: Horny Mushroom |
| 20 | [Mithril Buckler](/items/1092004) | 90 | drop: [Ligator](/mobs/29) |
| 25 | [Red Triangular Shield](/items/1092009) | 100 | NPC shop |
| 30 | [Red Cross Shield](/items/1092010) | 110 | NPC shop |
| 35 | [Battle Shield](/items/1092012) | 120 | drop: [Curse Eye](/mobs/31) |
| 40 | [Steel/Mithril/Adamantium Tower Shield](/items/1092013) | 130/132/132 | NPC shop |
| 50 | [Skull Shield](/items/1092016) | 150 | NPC shop |
| 60 | [Wooden/Silver/Adamantium Legend Shield](/items/1092017) | 170/172/172 | NPC shop |
| 70 | [Steel/Silver/Gold Ancient Shield](/items/1092020) | 190/192/192 | NPC shop |

### Scrolling priority: shield is a sleeper investment

Shields have **5 slots** and roll on `incPAD` (ATT) scroll of 60%
success rate — same scrolls you use on weapon and glove. A clean
Lv 50 Skull Shield with 5 passed 60% ATT scrolls = **+10 ATT**,
which is **more than the 2H ATK advantage over 1H**. This is why
1H + shield wins long-term.

<h2 id="armor-progression">Fighter armor progression</h2>

Classic World gives you Warrior-flagged armor at every bracket.
Pick the top-STR variant at your reqLevel.

### Hat

| Lv | Pick | STR | DEF | Slots |
| --- | --- | --- | --- | --- |
| 30 | [Jousting Helmet](/items/1002104) | +0 | 38 | 7 |
| 35 | [Great Red Helmet](/items/1002121) | +0 | 43 | 7 |
| 45 | [Blue Bone Helm](/items/1002161) | +4 | 51 | 7 |
| 55 | [Old Steel Nordic Helm](/items/1002182) | +5 | 59 | 7 |
| 60 | [Red Oriental Helmet](/items/1002184) | +6 | 62 | 7 |
| 70 | [Bronze Planet](/items/1002198) | +0 | 70 | 7 |

<div class="callout callout--warning">
<strong>Zakum Helmet in FA:</strong> the Lv 50 all-stat Zakum Helmet
(+5/+5/+5/+5) exists in the datamine but the boss fight is held for
Grand Launch. Use <strong>Old Steel Nordic Helm L55</strong> or
<strong>Red Oriental Helmet L60</strong> as the realistic FA hat
pick. Full context in the
<a href="/gearing-30-plus#level-50-60-first-real-investment">Gearing
guide</a>.
</div>

### Overall / Top + Bottom

The Fighter armor progression splits into overall-robe or
top+bottom at Lv 35+. **Fighter picks top+bottom** at higher
brackets for +STR scrolling leverage.

| Lv | Top pick | Bottom pick |
| --- | --- | --- |
| 30 | [Red Hwarang Shirt](/items/1040040) +3 STR / DEF 55 | [Red Martial Arts Pants](/items/1060030) +3 STR / DEF 41 |
| 40 | [Maroon Jangoon Armor](/items/1040059) +4 STR / DEF 65 | [Black Jangoon Pants](/items/1060051) +4 STR / DEF 49 |
| 45 | [Gold Dragon](/items/1040069) +4 STR / DEF 70 | — |
| 50 | [Umber Shouldermail](/items/1040070) +5 STR / DEF 75 | [Umber Shouldermail Pants](/items/1060060) +5 STR / DEF 57 |
| 60 | [Red Orientican](/items/1040078) +6 STR / DEF 85 | [Red Orientican Pants](/items/1060068) +6 STR / DEF 65 |
| 70 | [Bronze Platine](/items/1040084) +7 STR / DEF 95 | [Bronze Platine Pants](/items/1060074) +7 STR / DEF 73 |

### Shoes, Gloves, Cape

| Lv | Shoes | Gloves |
| --- | --- | --- |
| 30 | [Red Snowshoes](/items/1072079) +1 STR | [Steel Missel](/items/1082029) +3 STR |
| 35 | [Steel Trigger](/items/1072085) +0 STR | [Steel Briggon](/items/1082040) +3 STR |
| 40 | [Maroon Jangoon Shoes](/items/1072097) +0 STR | [Iron Knuckle](/items/1082052) +4 STR |
| 50 | [Gold Hildon Boots](/items/1072115) +1 STR | [Steel Brist](/items/1082064) +5 STR |
| 60 | [Orihalcon Camel Boots](/items/1072130) +2 STR | [Bronze Clench](/items/1082076) +6 STR |
| 70 | [Blue Carzen Boots](/items/1072142) +0 STR | [Bronze Husk](/items/1082088) +7 STR |

Capes: use the Justice/Magic/Gaia cape chain from the
[universal armor section](/gearing-30-plus#level-30-40-first-2nd-job-kit)
in the gearing guide.

<h2 id="scrolling-philosophy">Scrolling philosophy for Fighter</h2>

Fighter is the easiest class to scroll correctly because every slot
rolls on a single primary stat (STR or ATT). No elemental,
no job-specific caveats.

### The priority order

1. **Weapon** — 60% ATT scrolls. 7 slots on most 1H swords and axes.
   Expect to burn ~2 weapons finding one that keeps all slots.
2. **Shield** (1H builds) OR **Hat** (2H builds) — 60% ATT for shield
   (same scroll type as weapon) OR 60% STR for hat
3. **Gloves** — 60% ATT. 5 slots. Universal scroll type across classes.
4. **Top + Bottom** OR **Overall** — 60% STR for Warrior.
5. **Shoes** — 60% STR or Jump scroll. Lower priority.
6. **Cape** — 10% STR scroll if you have slack. Low ROI.

### The 60% ATT math

A 7-slot weapon fully scrolled with 60% ATT scrolls expects:
- Average passes: 7 × 0.60 = 4.2 scrolls land
- Average ATT gained: 4.2 × 2 ATT = **+8.4 ATT**
- Budget: ~15-25 scrolls to find a 7-slot weapon that survives all
  7 passes (counting destroys)

**For a Lv 50 Jeweled Katar (base 70 ATT) a well-scrolled copy
reaches 78-82 ATT, matching a non-scrolled Lv 70 Red Katana.** This
is why scrolling your weapon well is more valuable than rushing to
Lv 70 for the next shop weapon.

### Chaos Scroll and White Scroll in CW

Both exist in the datamine but their accessibility during FA is
unconfirmed. See the
[Gearing guide's scrolling philosophy section](/gearing-30-plus#scrolling-philosophy)
for the full context. For Fighter planning, assume **no White Scroll
safety net** during FA.

<h2 id="bossing">Bossing readiness as a Fighter</h2>

### FA roster boss performance

- **[Mano](/bosses/mano)** (Lv 20) — tag Mano on cooldown. Fighter
  Power Strike burst reliably one-shots at Lv 25+.
- **[King Slime](/bosses/king-slime)** (via Kerning PQ) — bring your
  Fighter for the PQ bonus stage. Reliable DPS.
- **[Mushmom](/bosses/mushmom)** (Lv 60) — Fighter is one of the
  best Mushmom KSers at Lv 50+. Max Weapon Mastery + Booster rolling
  into Power Strike chains burn her down fast.
- **[Jr. Balrog](/bosses/jr-balrog)** (Lv 55) — Fighter + Cleric
  party clears in 2-3 minutes with Rage party buff running.
- **[Zombie Mushmom](/bosses/zombie-mushmom)** (Lv 65) — Fighter is
  physical damage, doesn't care about undead resistances. Great KSer.
- **[Shade](/bosses/shade)** (Lv 47) — **don't bother.** Shade has
  999 evasion. Solo Fighters can't hit her. Bring a Cleric or skip.

### What Rage brings to parties

Rage is Fighter's single-use party buff: **+12 WATK** to every
party member within range for 240 seconds. This stacks additively
with Bless (ACC + ATK from Cleric) and makes Fighter mandatory-invite
for any serious boss party.

**Practical takeaway:** at Lv 50+ with Rage maxed, your party value
jumps significantly. Rage is the "I'm bringing +12 ATT to everyone
for 4 minutes" skill that gets you boss party slots.

### The L70-100 reality check

Fighter doesn't have a bossing problem at the FA cap — your weapon
and shield scrolling finishes before Lv 70, your 2nd-job skills are
maxed, and Rage is online. The reality check is just that **FA has
no bosses above Zombie Mushmom's Lv 65 cooldown**. See
[Bosses at 30+](/bosses-at-30-plus#the-l70-100-content-ceiling) for
the honest "what to do at FA cap" writeup.

<h2 id="faq">FAQ</h2>

**I'm Lv 30 and ready to pick a 2nd-job branch. Fighter or Page or
Spearman?**

- **Fighter**: pure DPS. Fastest to feel strong. Easiest scroll
  budget. Pick if you like killing stuff fast and don't need to
  tank bosses.
- **[Page](/class-builds#warrior-page)**: tankier with Threaten
  (party debuff). Lower DPS. Pick if you'll main-tank Jr. Balrog
  party runs.
- **[Spearman](/class-builds#warrior-spearman)**: Hyper Body HP
  buff. Mandatory party invite at Lv 70+. Pick if you want to be
  permanently wanted.

**Should I take sword or axe?**

Parity in Classic World. Pick axe if you want cheaper boss-drop
weapons at L30-35 (Fireman's Axe from Fire Boar, Dankke from
Jr. Wraith). Pick sword if you want the Hero's Gladius quest
reward at L45.

**I already pumped 20 DEX into my Fighter accidentally. How bad?**

Not bad enough to reroll. 20 wasted DEX = ~20 fewer STR = ~40 fewer
raw damage ceiling. Scrolling 1 extra 60% STR scroll on gear
recovers most of it. Just stop misallocating going forward.

**Do I need a shield at all? Even a bare 2H build?**

2H means no shield slot. You keep more inventory flexibility (no
need to store multiple shields for different bosses) and get +6-8
raw ATK. The tradeoff is losing 5 scroll slots. **If you'll scroll
your gear, 1H + shield wins. If you won't, 2H wins.**

**What about the 2H blunt weapon / polearm paths?**

- 2H blunt: higher raw ATK but slow attack speed. For Fighter,
  Weapon Booster + fast weapons out-DPS slow weapons by a lot.
  Skip.
- Polearm: a Spearman weapon. Fighter can't equip polearm skills
  (Spear/Polearm Crusher). You'd be wasting 2nd-job SP. Skip.

**I'm F2P. How do I prioritize mesos?**

Weapon > shield > gloves > armor > capes > shoes. Scroll one piece
to completion before starting the next. The [Meso farming
guide](/meso-farming-30-plus) has grind rotations that fund scroll
budgets.

**Does Classic World have Fighter → Hero 3rd job?**

Not in Founder's Access. 3rd job is confirmed to unlock at Lv 70
but 3rd job advancement is **held for Grand Launch** (Oct 21, 2026)
per Nexon's release notes. Hold your SP from Lv 70 onwards until
3rd job NPCs unlock.

**I keep failing 60% scrolls. Is CW's rate actually 60%?**

The FA datamine shows scroll success rates matching the printed
values on each scroll. 60% feels like 40% because small sample
sizes are brutal: a run of 3 fails in a row is a 6.4% event,
which happens often enough that it feels broken. Trust the math
over the vibes.

**Is Fighter viable at the FA cap?**

Absolutely. Fighter is one of the strongest classes in FA because:
- No elemental damage penalty (physical class)
- No HP wash dependency (base HP table is generous)
- Weapon + shield fully scrollable with 60% ATT scrolls
- Rage party buff keeps you mandatory-invite at L50+

**Will this guide update when 3rd job opens?**

Yes. When Grand Launch opens Hero / White Knight / Dark Knight
advancement, this guide gets a 3rd job SP priority section. Last
reviewed 2026-10-11.
