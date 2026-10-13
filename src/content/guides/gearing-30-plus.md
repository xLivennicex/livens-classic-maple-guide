---
# ---------- Core metadata ----------
title: "Gearing at 30+: Weapons, Armor, and the FA Content Ceiling"
description: "Post-2nd-job gear progression for MapleStory Classic World Founder's Access. Per-class weapon ladders from L30 to the Lv 100 FA cap, universal armor progression, scrolling philosophy, and the honest answer about which traditional late-game BiS gear is NOT yet accessible in FA. Every item cross-linked to its /items dossier."
lastUpdated: "2026-10-11"
tags:
  - gear
  - post-30
  - weapons
  - armor
  - scrolling
  - founders-access
status: "Live - Founder's Access window Oct 6 to Oct 20, 2026"

# ---------- Layout ----------
theme: "perion"
decorations: false
eyebrow: "Post-30 Progression"
heading: "Gearing at 30+"
tagline: "Every weapon and armor pick from Lv 30 to the Lv 100 FA cap, pulled from the live Classic World FA client datamine. With honest callouts about Classic World mechanic changes and which traditional BiS staples are NOT in FA yet."

# ---------- Verification ----------
verificationStatus: "launch-verified"
verificationNote: "Weapon + armor stats, levels, slot counts, drop sources, and quest rewards come directly from src/data/db/items.json (7431 items parsed from the Classic World FA client datamine via osmsdataexplorer.com, cross-verified with MeowDB community drops). Classic-World-specific mechanic changes (1.25x elemental multiplier, HP wash removal, earring crit damage line, Forgotten Hollow placement) sourced from the msclassic.wiki moderator community (Lunitidal) and r/Maplestory CW-tagged threads. Where a traditional-MapleStory BiS item is NOT in our Classic World datamine (e.g. Pilfered Vest, Blue Craven, Brown Work Gloves), the guide names the Classic World equivalent from our DB instead - do not expect traditional item names to transfer wholesale."
sourceSlugs:
  - nexon-founders-access-release-notes
  - osmsdataexplorer
  - eleveny-training-guide
  - msclassic-wiki-elemental-125x
  - msclassic-wiki-victoria-leveling
  - reddit-everything-changed-cot2

# ---------- TOC ----------
toc:
  - { href: "#classic-world-ground-rules", label: "CW ground rules" }
  - { href: "#how-to-use-this-guide", label: "How to use this" }
  - { href: "#level-30-40-first-2nd-job-kit", label: "L30-40" }
  - { href: "#level-40-50-pre-cap-prep", label: "L40-50" }
  - { href: "#level-50-60-first-real-investment", label: "L50-60" }
  - { href: "#level-60-70-scroll-everything", label: "L60-70" }
  - { href: "#level-70-100-the-fa-ceiling", label: "L70-100" }
  - { href: "#scrolling-philosophy", label: "Scrolling" }
  - { href: "#what-isnt-in-fa-yet", label: "What's not in FA" }
  - { href: "#faq", label: "FAQ" }
---

You picked your 2nd job branch. You stared at the inventory tab. Nothing in
there looks like a plan. This guide walks the Lv 30 → Lv 100 FA cap arc
in six brackets, naming the specific weapon and armor pieces that exist
*right now* in the Classic World datamine, where they drop, and when it's
worth your mesos to scroll them.

Every item name below links to its [`/items`](/items) dossier with full
stats + drop table + spawn maps. Weapons are grouped by class/weapon-type
so Fighters only see Fighter picks, Pages only see Pages picks, and so on.

<div class="callout callout--framing">
<strong>Reading order:</strong> jump straight to your current level using
the TOC chips. Each bracket is self-contained. The CW ground rules
section at the top matters for every bracket though - skim it first.
Training-map choices are covered in a separate guide:
<a href="/training-routes">Training routes L10-70</a>. This guide answers
"what do I <em>equip</em>", that one answers "where do I <em>grind</em>".
</div>

<h2 id="classic-world-ground-rules">Classic World ground rules</h2>

Classic World is NOT a 1:1 of traditional MapleStory, so some
conventional gearing advice doesn't apply. Four changes dominate
every gear decision below.

### 1. Elemental damage multiplier is 1.25×, not 1.5×

Traditional MapleStory used a 1.5× multiplier for element-weakness.
In Classic World the multiplier is **1.25×** — Nexon rebalanced it
during Closed Online Test 2 and msclassic.wiki moderator Lunitidal
has confirmed it via playtest math against fire-weak Ligators.

**Practical impact:** elemental weapon picks (Fire wand vs. Ice wand
vs. generic high-MATK staff) matter *less* than they used to. A plain
high-MATK weapon is often parity-or-better against neutral mobs, and
only ~25% behind on elementally-weak content. This is a soft-but-real
nudge away from "always farm the right-element weapon."

### 2. HP washing is removed

Bishops, Night Lords, and Buccaneers traditionally washed MP into HP
to survive high-level bosses. **Classic World removed this mechanic
entirely** during the second closed test. You can't trade MP for HP,
which means your survivability is fixed at whatever your base HP
table gives.

**Practical impact:** HP wash guides from traditional MapleStory
don't apply here. Invest mesos into gear, not into AP wash potions.
Your gear's +HP lines and your scrolled Overall are the only levers
you have.

### 3. Earrings now have a crit damage line

Classic World added a crit-damage stat to the earring pool as part of CoT 2.
Earrings are now a damage upgrade, not just a stat stick.

**Practical impact:** farm earrings aggressively. The community hasn't
yet settled on which earring brackets are "the one" to scroll — treat
this as an actively-evolving meta, not a solved problem.

### 4. Most traditional late-game BiS zones are NOT in Founder's Access

Nexon held several continents back for Grand Launch (Oct 21, 2026) and
later patches. The following content is **inaccessible during FA**:

- **Zakum** boss fight (helmet exists in datamine but the altar is gated)
- **Orbis** (no Icarus Cape walk-in path — only the Green Icarus Cape
  quest reward works)
- **Leafre** (no Dragon-tier crafted weapons)
- **Phantom Forest** (no Raven's Claw crafts for Assassins)
- **Omega Sector** (no Stormcaster Gloves)
- **El Nath Lion King's Castle** / **New Leaf City** (no Von Leon's
  scrolls, no White Scroll crafts via John Barricade)
- **Mu Lung** / **Herb Town** (no Pirate Den training)
- **Temple of Time** / **Aqua Road** / **Ninja Castle** / **Showa Town**

**Practical impact:** the realistic FA-cap endgame kit is **scrolled
Lv 50-70 Classic World gear from NPC shops, mob drops, and quest
rewards**. If you've read traditional-MapleStory guides naming Pilfered
Vest, Blue Craven, Brown Work Gloves, Maple Soul Rohen — those item
names are *not* in the Classic World FA datamine. Classic World has
its own equivalent items; this guide names those.

<h2 id="how-to-use-this-guide">How to use this guide</h2>

Each bracket section has four fixed parts:

1. **Weapon progression** — per-class, per-weapon-type table pulled from
   the datamine. The pick is the highest-ATK weapon at that `reqLevel`
   that your class can equip. Click any name for its full dossier.
2. **Armor progression** — hat/top/bottom/overall/shoes/gloves/cape
   picks optimized for your class's primary stat (STR/DEX/INT/LUK).
3. **Boss priority** — which [/bosses](/bosses) are worth your cooldown
   time at this level and what they realistically drop.
4. **Scrolling priority** — what to actually spend scrolls on this
   bracket, with the "don't scroll until later" advice called out.

A separate [Scrolling philosophy](#scrolling-philosophy) section at the
bottom covers the universal rules (60% ATT math, Chaos Scroll status in
CW, etc.) so each bracket doesn't repeat the same disclaimer.

<h2 id="level-30-40-first-2nd-job-kit">Level 30-40: First 2nd-job kit</h2>

You just advanced. Your Lv 10-30 weapons are embarrassing. Your gear
budget is tiny. Priority is a cheap weapon that outlasts the bracket.

### Weapons by class

#### Warrior (STR)

| Weapon | Lv | ATK | Where |
| --- | --- | --- | --- |
| [Cutlus](/items/1302010) 1H sword | 35 | 55 Fast | drop: Horny Mushroom · Evil Eye · Jr. Necki |
| [Dankke](/items/1312006) 1H axe | 35 | 55 Fast | drop: Jr. Wraith · Bubbling |
| [Lionheart](/items/1402006) 2H sword | 35 | 55 Fast | drop: Zombie Lupin |
| [Sledgehammer](/items/1422005) 2H blunt | 35 | 60 Slow | drop: Iron Hog |
| [Nakamaki](/items/1432004) spear | 35 | 57 Slow | drop: Zombie Mushroom |
| [Axe Pole Arm](/items/1442005) polearm | 35 | 60 Slow | drop: Curse Eye |

**Fighter pick:** Cutlus or Dankke for 1H (shield slot = extra scroll
real estate) OR Lionheart 2H if you want burst over DPS consistency.
Spearmen: Nakamaki until L40 — the polearm/spear scaling kicks in at 50.

#### Magician (INT)

| Weapon | Lv | MATK | Where |
| --- | --- | --- | --- |
| [Mithril Wand](/items/1372004) | 30 | 55 | NPC / shop |
| [Wizard Wand](/items/1372005) | 35 | 62 | NPC / shop |

Only two mage weapons gate at L30-40 in the CoT 2 datamine. **Hold Wizard
Wand through this bracket** — the next upgrade is Fairy Wand at L40.
Element matters less than you think (see 1.25× rule above).

#### Bowman (DEX)

| Weapon | Lv | ATK | Where |
| --- | --- | --- | --- |
| [Red Viper](/items/1452005) bow | 35 | 52 Fast | drop: Fire Boar |
| [Eagle Crow](/items/1462004) crossbow | 30 | 52 Slow | drop: Wild Boar |

Hunters: farm Fire Boars for Red Viper. Crossbowmen: Eagle Crow is a
Lv 30 crossbow with the same ATK — a free upgrade immediately after
2nd job if you don't already have one.

#### Thief (LUK)

| Weapon | Lv | ATK | Where |
| --- | --- | --- | --- |
| [Halfmoon Zamadar](/items/1332011) dagger | 35 | 53 Fast | drop: Glowshroom |
| [Silver Guardian](/items/1472012) claw | 35 | 26 Fast | NPC shop |

Bandits: Halfmoon Zamadar is a real upgrade. Assassins: claw ATK numbers
look tiny because claws are low-base-ATK fast-attack weapons — the DPS
comes from Lucky Seven multi-hit + star ATK. Pair with
[Steely Throwing Knives](/items/2070005) for throwing stars.

### Armor (per class)

| Slot | Warrior | Magician | Bowman | Thief |
| --- | --- | --- | --- | --- |
| Hat | [Great Red Helmet](/items/1002121) L35 DEF+60 | [Brown Matty](/items/1002128) L35 INT+3 | [Green Pole-Feather Hat](/items/1002123) L35 DEX+3 | [Dark Burgler](/items/1002137) L35 LUK+3 |
| Overall | [Blue Crusader Chainmail](/items/1050016) L35 DEF+125 | [Blue Chaos Robe](/items/1050020) L35 INT+6 | [Blue Sauna Robe](/items/1050010) L30 all-stat | [Dark Avenger](/items/1051016) L35 LUK+6 |
| Shoes | [Steel Trigger](/items/1072085) L35 DEF+30 | [Blue Snowshoes](/items/1072080) L30 INT+1 | [Black Hunter Boots](/items/1072073) L30 DEX+1 | [Black Snowshoes](/items/1072082) L30 LUK+1 |
| Gloves | [Steel Briggon](/items/1082040) L35 DEF+24 | [Blue Noel](/items/1082044) L35 INT+3 | [Mithril Scaler](/items/1082047) L35 DEX+3 | [Gold Arbion](/items/1082049) L35 LUK+3 |
| Cape | [Blue Justice Cape](/items/1102009) L35 all | [Blue Justice Cape](/items/1102009) L35 | [White Justice Cape](/items/1102011) L35 DEX+1 | [Black Justice Cape](/items/1102012) L35 LUK+1 |

**Overall vs. Top/Bottom:** at L30-40 the overall picks win on stat +
slot count. Switch to top/bottom split only if you need the specific
stat distribution.

### Boss priority

- **[Mano](/bosses/mano)** (Lv 20, Perion hidden street) — if you're
  still 30 and haven't killed him, swing by for the easy EXP.
- **[King Slime](/bosses/king-slime)** via Kerning PQ — the only PQ
  available in FA, drops [Squishy Shoes](/items/1072128) (Lv 28) which
  carry Thief/Mage/Bowman shoe slots cheaply.
- **Save Mushmom + Jr. Balrog** for the next bracket — fight ratio is
  too lopsided at Lv 30.

### Scrolling priority

**Don't.** You will outgrow every piece in this bracket within 10 hours.
Save all your 60% ATT and named-stat scrolls for Lv 50+ gear. The only
exception: 100% scrolls on a gear piece you'll wear for 20+ hours
(e.g. Dark Avenger overall on a Thief has no replacement until L50+).

<h2 id="level-40-50-pre-cap-prep">Level 40-50: Pre-cap prep</h2>

You're staring down 2nd-job skill maxing and a lot of grinding. Gear
upgrades are smaller than 30-40 because the real tier jump happens at 50.

### Weapons by class

#### Warrior

| Weapon | Lv | ATK | Where |
| --- | --- | --- | --- |
| [Hero's Gladius](/items/1302014) 1H sword | 45 | 62 Fast | quest reward: *Hero's Gladius* (Lv 50) |
| [Blue Counter](/items/1312007) 1H axe | 40 | 57 Fast | drop: Echopus |
| [Zard](/items/1402007) 2H sword | 40 | 60 Fast | NPC |
| [Titan](/items/1422006) 2H blunt | 40 | 65 Slow | drop: Lupin |
| [Zeco](/items/1432005) spear | 40 | 59 Normal | NPC |
| [Crescent Polearm](/items/1442006) polearm | 40 | 65 Slow | NPC |

**Hero's Gladius** is noteworthy — it's a *quest reward*, not a drop or
shop item. Pick it up when the quest unlocks and don't scroll it (the
L50 upgrades are too close).

#### Magician

| Weapon | Lv | MATK | Where |
| --- | --- | --- | --- |
| [Fairy Wand](/items/1372006) | 40 | 69 | NPC / shop |
| [Arc Staff](/items/1382005) | 45 | 73 | NPC / shop |

Wands win on speed, staves win on raw MATK. Classic World's 1.25×
elemental cap means the staff path (slower, higher MATK) is marginally
better against neutral mobs. Pick staff if you grind mixed-element maps.

#### Bowman

| Weapon | Lv | ATK | Where |
| --- | --- | --- | --- |
| [Vaulter 2000](/items/1452006) bow | 40 | 60 Normal | drop: Raffle |
| [Silver Crow](/items/1462006) crossbow | 45 | 67 Slow | drop: Fairy 3 |

Crossbow pulls ahead this bracket (67 vs 60 ATK). Hunters are not in a
bad spot but Crossbowmen have the clearer upgrade.

#### Thief

| Weapon | Lv | ATK | Where |
| --- | --- | --- | --- |
| [Gephart](/items/1332012) dagger | 40 | 58 Fast | drop: Ligator |
| [Blood Avarice](/items/1472015) claw | 40 | 29 Fast | drop: Raffle |

### Armor (per class)

| Slot | Warrior | Magician | Bowman | Thief |
| --- | --- | --- | --- | --- |
| Hat | [Blue Bone Helm](/items/1002161) L45 DEF+72 | [Brown Guiltian](/items/1002146) L40 INT+4 | [Green Distinction](/items/1002147) L40 DEX+4 | [Dark Pilfer](/items/1002156) L40 LUK+4 (quest: *Collecting 200 Cursed Dolls*) |
| Overall | [Blue Dragon](/items/1040068) L45 DEF+70 top | [Blue Starlight](/items/1050025) L40 INT+8 | [Brown Piette](/items/1040062) L40 DEX+4 top | [Dark Shadow](/items/1040067) L40 LUK+4 top |
| Shoes | [Maroon Jangoon Shoes](/items/1072097) L40 DEF+33 | [Dark Moon Shoes](/items/1072103) L40 INT+1 | [Yellow Pierre Shoes](/items/1072105) L40 DEX+1 | [Black Red-Lined Shoes](/items/1072108) L40 DEX+2 |
| Gloves | [Iron Knuckle](/items/1082052) L40 DEF+27 | [Blue Arten](/items/1082056) L40 INT+4 | [Aqua Brace](/items/1082058) L40 DEX+4 | [Dark Cleave](/items/1082063) L40 LUK+4 |
| Cape | [Green Icarus Cape](/items/1102001) L46 (quest) | [Blue Icarus Cape](/items/1102003) L46 (quest) | [Green Icarus Cape](/items/1102001) L46 (quest) | [Green Icarus Cape](/items/1102001) L46 (quest) |

<div class="callout">
<strong>Icarus Cape in FA:</strong> the traditional Icarus Cape path
(buying colored variants from Yoona in Orbis) is NOT accessible in
Classic World Founder's Access. Orbis isn't live. What <em>does</em>
work: the quest
<a href="/quests/10321">Delivering the Flying Medicine</a> at Lv 46
gives Green Icarus Cape, and the Mage variant Blue Icarus Cape also
drops in-FA. Grab the quest cape and don't worry about the
color-matching until Orbis opens post-launch.
</div>

### Boss priority

- **[Mushmom](/bosses/mushmom)** (Lv 60, Henesys hidden street) — you'll
  be undergeared until 48+ but doable in a party. First-hit-wins
  culture; see the [boss guide](/bosses-at-30-plus#level-60-mushmom)
  for party strategy.
- **[Jr. Balrog](/bosses/jr-balrog)** (Lv 55, Sleepywood) — same story:
  party at 45+ or hold until next bracket. The Lv 42 Jr. Balrog
  cooldown-starter runs are a known FA meme because the EXP is literally
  10 and his HP is 30,000.

### Scrolling priority

Still mostly "don't." Exception: if you got the **Hero's Gladius quest
reward** and plan to carry it to 50, feel free to 100%-slot it (safe,
small gain). Save all 60% ATT scrolls for L50+ gloves and overall.

<h2 id="level-50-60-first-real-investment">Level 50-60: First real investment</h2>

This is the first bracket where your gear sticks around long enough to
justify scrolling. Overall + weapon are your two highest-leverage
scroll targets.

### Weapons by class

#### Warrior

| Weapon | Lv | ATK | Where |
| --- | --- | --- | --- |
| [Jeweled Katar](/items/1302015) 1H sword | 50 | 70 Fast | drop: Rafflesia |
| [Buck](/items/1312008) 1H axe | 50 | 70 Fast | NPC |
| [Lion's Fang](/items/1402008) 2H sword | 50 | 73 Normal | NPC |
| [Golden Mole](/items/1422007) 2H blunt | 50 | 75 Slow | NPC |
| [Serpent's Tongue](/items/1432006) spear | 50 | 69 Normal | NPC |
| [The Nine Dragons](/items/1442007) polearm | 50 | 75 Slow | NPC |

Lv 50 weapons are mostly NPC-shop staples at 13.5-16.5k mesos. **Pick
the one your class skill tree favors** (axes for Fighter speed-attack
synergy, swords for defensive Pages, polearms for Spearman Hyper Body
builds).

#### Magician

| Weapon | Lv | MATK | Where |
| --- | --- | --- | --- |
| [Cromi](/items/1372007) wand | 50 | 83 | NPC / shop |
| [Thorns](/items/1382006) staff | 55 | 87 | NPC / shop |

Cromi at 50 → Thorns at 55. Hold Cromi for 5 levels if you can't afford
Thorns yet.

#### Bowman

| Weapon | Lv | ATK | Where |
| --- | --- | --- | --- |
| [Olympus](/items/1452007) bow | 50 | 70 Normal | NPC |
| [Rower](/items/1462007) crossbow | 50 | 72 Slow | drop: Sporewood |

#### Thief

| Weapon | Lv | ATK | Where |
| --- | --- | --- | --- |
| [Shinkita](/items/1332015) dagger | 50 | 68 Fast | NPC |
| [Steel Slain](/items/1472018) claw | 50 | 34 Fast | NPC |

### Armor (per class)

| Slot | Warrior | Magician | Bowman | Thief |
| --- | --- | --- | --- | --- |
| Hat | [Zakum Helmet](/items/1002180) L50 ( see callout) OR [class-specific L50 hat] | [Zakum Helmet](/items/1002180) OR [Blue Seraphis](/items/1002187) L60 INT+6 | [Zakum Helmet](/items/1002180) OR [Brown Polyfeather Hat](/items/1002192) L60 DEX+6 | [Zakum Helmet](/items/1002180) OR [Dark Identity](/items/1002197) L60 LUK+6 |
| Overall | [Umber Shouldermail](/items/1040070) L50 top DEF+75 | [Blue Calas](/items/1050029) L50 INT+10 (drop: Echopus) | [Blue-Lined Kismet](/items/1050034) L50 DEX+10 | [Brown China](/items/1040075) L50 LUK+5 top |
| Bottom | [Umber Shouldermail Pants](/items/1060060) L50 | split in overall | split in overall | [Brown China Pants](/items/1060065) L50 LUK+5 |
| Shoes | [Emerald Hildon Boots](/items/1072112) L50 DEF+39 | [Purple Goldwind Shoes](/items/1072118) L50 INT+1 LUK+2 | [Green Steel-Tip Boots](/items/1072121) L50 STR+2 DEX+1 | [Red Goni Shoes](/items/1072124) L50 DEX+2 |
| Gloves | [Steel Brist](/items/1082064) L50 DEF+33 | [Blue Penance](/items/1082068) L50 INT+5 | [Blue Willow](/items/1082071) L50 DEX+5 | [Brown Moon Gloves](/items/1082075) L50 LUK+5 |
| Cape | [Red Magic Cape](/items/1102014) L55 STR+3 | [Blue Magic Cape](/items/1102013) L55 INT+3 | [White Magic Cape](/items/1102015) L55 DEX+3 | [Black Magic Cape](/items/1102016) L55 LUK+3 |

<div class="callout callout--warning">
<strong>Zakum Helmet in FA:</strong> the item exists in our datamine at
WZ ID 1002180 with its full +5/+5/+5/+5 all-stat line and 7 slots. But
<strong>the Zakum boss fight itself is NOT in Founder's Access</strong>
per Nexon's Oct 3 release notes — the altar in El Nath is gated for
Grand Launch. That means the canonical Zakum Helmet acquisition path
(doing the pre-quest + killing Zakum for the helmet drop) is <em>not
live yet</em>. The helmet row in the table above shows the datamine
entry because it <em>exists</em>; use the class-specific L50-60 hats as
your realistic FA pick. Zakum Helmet becomes attainable at Grand Launch.
</div>

### Boss priority

- **Mushmom + Jr. Balrog + Zombie Mushmom** on cooldown. Zombie Mushmom
  (Lv 65) rewards the most meaningful drops at this bracket — see her
  entry in the [boss guide](/bosses-at-30-plus#level-65-zombie-mushmom).
- **[Shade](/bosses/shade)** quest unlock at Lv 47 if you haven't done it.
  Clerics clear in minutes; everyone else accuracy-struggles. Finish
  the [Citizenship chain](/citizenship) while you're down here.

### Scrolling priority

1. **Overall** — this is your highest-ATT/MATK/DEX/LUK leverage. 60%
   named-stat scrolls here.
2. **Weapon** — 60% ATT weapon scrolls. Expect to burn 2-3 pieces
   finding the one that keeps all slots.
3. **Gloves** — 60% ATT scrolls (universal across all classes).
4. **Cape** — 10% stat scroll if you have slack scrolls, otherwise skip.
5. **Shoes, bottom, top** — only after everything above is scrolled.

<h2 id="level-60-70-scroll-everything">Level 60-70: Scroll everything</h2>

Your Lv 50-60 kit either carries you to the FA cap or needs a hard-scroll
pass right now. There are no Lv 100-tier craftable upgrades waiting at
the end of this bracket, so **this is where you commit mesos**.

### Weapons by class

#### Warrior

| Weapon | Lv | ATK | Where |
| --- | --- | --- | --- |
| [Neocora](/items/1302017) 1H sword | 60 | 77 Fast | NPC |
| [Hawkhead](/items/1312009) 1H axe | 60 | 77 Fast | NPC |
| [Sparta](/items/1402009) 2H sword | 60 | 83 Normal | NPC |
| [The Shining](/items/1412008) 2H axe | 60 | 80 Fast | NPC |
| [The Blessing](/items/1422008) 2H blunt | 60 | 85 Slow | NPC |
| [Holy Spear](/items/1432007) spear | 60 | 82 Normal | NPC |
| [Skylar](/items/1442008) polearm | 60 | 85 Slow | NPC |

#### Magician

| Weapon | Lv | MATK | Where |
| --- | --- | --- | --- |
| [Evil Tale](/items/1372009) wand | 60 | 97 | NPC |
| [Evil Wings](/items/1382007) staff | 65 | 101 | NPC |

#### Bowman

| Weapon | Lv | ATK | Where |
| --- | --- | --- | --- |
| [Asianic Bow](/items/1452009) bow | 60 | 80 Normal | NPC |
| [Golden Crow](/items/1462008) crossbow | 60 | 82 Slow | NPC |

#### Thief

| Weapon | Lv | ATK | Where |
| --- | --- | --- | --- |
| [Deadly Fin](/items/1332018) dagger | 60 | 78 Fast | NPC |
| [Blood Gigantic](/items/1472024) claw | 60 | 41 Fast | NPC |

### Armor

Same slot philosophy as L50-60 but with L60 pieces:

| Slot | Warrior | Magician | Bowman | Thief |
| --- | --- | --- | --- | --- |
| Hat | [Red Oriental Helmet](/items/1002184) L60 | [Blue Seraphis](/items/1002187) L60 INT+6 | [Brown Polyfeather Hat](/items/1002192) L60 DEX+6 | [Dark Identity](/items/1002197) L60 LUK+6 |
| Top | [Green Orientican](/items/1040077) L60 top DEF+85 | continue overall | continue top+bottom | [Dark Scorpio](/items/1040083) L60 LUK+6 |
| Overall | — | [Blue Anakamoon](/items/1050035) L60 INT+12 | [Blue Tai](/items/1050040) L60 DEX+12 | — |
| Shoes | [Sapphire Camel Boots](/items/1072129) L60 DEF+45 | [Orange Goldrunners](/items/1072134) L60 INT+2 LUK+2 | [Green Gore Boots](/items/1072138) L60 STR+2 DEX+2 | [Blood Moss Boots](/items/1072139) L60 DEX+3 |
| Gloves | [Bronze Clench](/items/1082076) L60 DEF+39 | [Gold Manute](/items/1082080) L60 INT+6 | [Oaker Garner](/items/1082082) L60 DEX+6 | [Gold Pow](/items/1082087) L60 LUK+6 |
| Cape | [Red Gaia Cape](/items/1102018) L65 STR+4 | [Blue Gaia Cape](/items/1102017) L65 INT+4 | [White Gaia Cape](/items/1102019) L65 DEX+4 | [Black Gaia Cape](/items/1102020) L65 LUK+4 |

### Boss priority

- **Zombie Mushmom** is your top loot target (Scroll Crafting Catalyst
  drops, mid-tier scrolls).
- Jr. Balrog on cooldown if you want crafting catalysts.
- Mushmom becomes trivial — tag on channel-hop for easy EXP.

### Scrolling priority

Full investment bracket. Same priority as L50-60 but assume you commit
your scroll stockpile here:

1. **Overall / top / bottom** (whichever your class uses) — 60% named stat
2. **Weapon** — 60% ATT weapon
3. **Gloves** — 60% ATT (saved from earlier brackets)
4. **Hat** — 60% named stat (unless Zakum Helm opens post-launch)
5. **Shoes + cape** — 10% stat if you have slack

<h2 id="level-70-100-the-fa-ceiling">Level 70-100: The FA ceiling</h2>

Here's the honest part. **Lv 70 is the last bracket where our datamine
has fresh gear**, and even that's sparse. Lv 80-100 means wearing your
scrolled Lv 70 kit through the FA cap climb.

### Weapons by class

| Class | Lv 70 pick | Stats |
| --- | --- | --- |
| Warrior | [Red Katana](/items/1302018) / [Mikhail](/items/1312010) / [Doombringer](/items/1402010) / [Redemption](/items/1432008) / [The Gold Dragon](/items/1442009) | ATK 87-95 |
| Magician | [Angel Wings](/items/1372010) wand | MATK 111 |
| Bowman | [Red Hinkel](/items/1452010) bow / [Gross Jaeger](/items/1462009) crossbow | ATK 90-92 |
| Thief | [Kandine](/items/1332020) dagger / [Green Scarab](/items/1472028) claw | ATK 88 / 47 |

### Armor (per class)

| Slot | Warrior | Magician | Bowman | Thief |
| --- | --- | --- | --- | --- |
| Hat | [Silver Planet](/items/1002199) L70 DEF+99 | [Blue Infinium Circlet](/items/1002202) L70 INT+7 | [Green Patriot](/items/1002206) L70 DEX+7 | [White Nightfox](/items/1002211) L70 LUK+7 |
| Overall / top | [Bronze Platine](/items/1040084) L70 top DEF+95 | [Blue Requiem](/items/1050042) L70 INT+14 | [Green Linnex](/items/1050048) L70 DEX+14 | [Dark Studded Top](/items/1040089) L70 LUK+7 |
| Shoes | [Blue Carzen Boots](/items/1072142) L70 DEF+51 | [Brown Lapiz Sandals](/items/1072147) L70 INT+1 LUK+2 | [Green Elf Shoes](/items/1072151) L70 STR+2 DEX+1 | [Purple Mystique Shoes](/items/1072153) L70 STR+1 DEX+2 |
| Gloves | [Bronze Husk](/items/1082088) L70 DEF+45 | [Blue Lorin](/items/1082092) L70 INT+7 | [Blue Eyes](/items/1082094) L70 DEX+7 | [Gold Rover](/items/1082099) L70 LUK+7 |
| Cape | *(no L70+ cape in datamine)* | *(no L70+ cape)* | *(no L70+ cape)* | *(no L70+ cape)* |

<div class="callout callout--warning">
<strong>Capes above Lv 65 don't exist in our FA client datamine.</strong>
Highest cape is the Gaia tier at Lv 65. We've triple-checked and this
isn't a scrape bug — it's a hard content ceiling. Expect Nexon to
ship L70+ capes with Grand Launch (traditionally this happens when
Orbis/Ludibrium content opens). Until then, hard-scroll your
Gaia-tier cape and carry it to FA cap.
</div>

### Boss priority (Lv 70-100)

The honest answer: boss hunting at this bracket is **loot-only**, not
EXP. Zombie Mushmom's 1,500 EXP is nothing at Lv 90. See the
[post-30 bosses guide](/bosses-at-30-plus#the-l70-100-content-ceiling)
for the full "what to do at the FA cap" writeup. The TL;DR:

- Grind training maps (see [Training routes](/training-routes))
- Hunt bosses for crafting catalysts and scrolls, not EXP
- Prep mesos for Grand Launch (Oct 21) when Zakum, Horntail, and
  Forgotten Hollow's deeper content unlocks

### Scrolling priority (Lv 70-100)

This is the "finish or accept it stays white" bracket. If you have
clean gear slots at 70, scroll them now. The FA cap is not a stepping
stone to higher-tier gear within FA — the next tier is **Grand Launch
content**, which is at least 10 days out.

<h2 id="scrolling-philosophy">Scrolling philosophy</h2>

The universal rules every bracket inherits.

### Named-stat scroll math

| Scroll | Success rate | On fail | When to use |
| --- | --- | --- | --- |
| **100%** | 100 pass, +1 stat | can't fail | always safe; wear-forever gear |
| **70%** | 70 pass, 30 destroy | destroys item | mid-tier keeper gear |
| **60% ATT (weapon/glove)** | 60 pass, +2 stat / 40 destroy | destroys item | **main scroll** for L50+ gear |
| **30%** | 30 pass, +3 stat / 70 destroy | destroys item | near-perfect gear with White Scroll backup |
| **10%** | 10 pass, +5 stat / 90 destroy | destroys item | end-game gambler only |

Classic World ships all five scroll tiers in the client datamine. The
drop sources vary; the simplest acquisition is from NPC-sold scroll
books and from mid-tier mob drops.

### Chaos Scroll + White Scroll in CW

**Both exist in the FA datamine but their accessibility in Founder's
Access is unconfirmed.** Traditionally Chaos Scroll of Goodness and
White Scroll are the end-game scrolling tools — CS randomizes stats
within a range and WS prevents destruction on failure. In CW:

- **Chaos Scroll**: datamined but no community-confirmed drop source
  during FA. Treat as "exists but may be very rare" until Day 14+
  intel surfaces.
- **White Scroll**: traditional craft is via John Barricade in New
  Leaf City. **NLC is NOT in Founder's Access**, so the primary craft
  path is gated. Alternative sources (if any) have not been found by
  the community.

**Practical advice:** scroll conservatively with 60% / 30% / 10% named
stat scrolls. Don't plan a strategy that assumes White Scroll safety
nets — those nets probably aren't in FA.

### The 60% ATT rule

For weapons and gloves: 60% ATT scrolls are the sweet spot of risk/reward.
Expect to burn **~2 scrolls per net +2 ATT** on average. For a 7-slot
weapon that means budgeting ~14 scrolls to average +8-10 ATT without
White Scrolls. Fewer if lucky, more if cursed.

### What NOT to scroll

- **Lv 30-40 anything** — you'll outgrow it in hours
- **100% scrolls on gear you'll replace in <20 hours** — wasted scroll
- **Capes above 10% stat** — low ROI vs. weapon/glove ATT
- **Zakum Helmet until you own one** — the altar isn't live in FA

<h2 id="what-isnt-in-fa-yet">What's not in FA yet</h2>

Reference checklist. Traditional MapleStory guides will mention these
items and you'll search our DB for them in vain. Not a bug — they're
held content:

| Zone / System | Status in FA | What this blocks |
| --- | --- | --- |
| Zakum altar |  Grand Launch | Zakum Helmet drops, Chaos Scrolls |
| Orbis / Ariant |  later patch | Icarus Cape color variants (buy path) |
| Leafre |  later patch | Dragon-tier weapons (Mos crafts) |
| Phantom Forest |  later patch | Raven's Claws (Fiona crafts) |
| Omega Sector |  later patch | Stormcaster Gloves |
| New Leaf City |  later patch | White Scroll crafts (John Barricade) |
| El Nath Lion King's Castle |  later patch | Von Leon's scrolls |
| Mu Lung / Herb Town |  later patch | Pirate Den training |
| Aqua Road / Temple of Time |  later patch | L80+ training variety |

**What this means for your gear ceiling:** your realistic FA endgame
kit is scrolled Lv 50-70 FA-datamine gear (hat/overall/weapon/gloves)
+ the Gaia cape + whatever earrings you've farmed. Grand Launch opens
the next tier.

<h2 id="faq">FAQ</h2>

**I read a traditional MapleStory guide saying I need Pilfered Vest /
Brown Work Gloves / Maple Soul Rohen. Where are they?**

They're not in Classic World — the FA client shipped a different
item list. Classic World's L30-70 equivalents are the ones named in
the tables above (e.g. Dark Avenger overall for Thieves instead of
Blue Craven, Zard 2H sword for Fighters instead of Devil's Sunrise).
Don't fight the item list; use ours.

**Should I craft or buy my weapons?**

Classic World ships a crafting system, visible in Day-5 FA streams
(dinofries wand craft, MoreKenzo page craft). Specific recipes are
still being catalogued by the community as of Day 6 of FA. For *this*
guide we show NPC-shop + drop sources because those are datamine-confirmed;
if a craft recipe gets published that beats our picks, we'll update.

**What's the earring crit damage line everyone's talking about?**

Classic World added a `crit damage` stat line to earring items —
not present in traditional MapleStory. Scrolled earrings now contribute
damage, not just raw stat. This makes earrings a higher-priority
scroll target than they historically were. Community meta on which
earrings are "the one" is still forming.

**Can I actually get Zakum Helmet in FA?**

The item exists in the datamine. The boss fight (which drops the helm
pre-quest-complete) is held for Grand Launch per Nexon's Oct 3 release
notes. **No, you can't realistically get it during FA.** Use the
class-specific L60 hat (Blue Seraphis / Red Oriental / Brown Polyfeather /
Dark Identity) as your interim pick.

**Do I need 1H + shield or 2H weapon?**

Fighter/Page: 1H + shield gives you a scrollable shield slot which is
worth ~+15 DEF scrolled. 2H gives raw ATK. Pick based on your scroll
budget: if you'll scroll everything, 2H wins; if you're broke, 1H+shield
is cheaper to upgrade over time.

**I'm an Assassin. Why do claws have such low raw ATK?**

Claws are low-base-ATK fast-attack weapons. DPS comes from Lucky Seven
hit twice with ATK-scrolled throwing stars adding damage per hit. Your
real damage pipeline is `(claw ATK × 2) + (star ATK × multiplier)`.
Scroll stars as hard as the claw itself.

**Where's the belt system I keep hearing about?**

Belts exist in CoT 2 and the item category is in our datamine, but belt
drops have not been documented by the community yet. We'll update this
guide once accessible-in-FA belts are confirmed. Likely a Grand Launch
or later-patch addition.

**Will this guide update post-launch?**

Yes. When Grand Launch opens Zakum, Orbis, Leafre, etc., we'll pivot
each bracket's picks and add new BiS tiers. Last reviewed 2026-10-11,
Day 5 of Founder's Access.
