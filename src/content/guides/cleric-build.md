---
# ---------- Core metadata ----------
title: "Cleric Build: Heal Culture, Holy Arrow, and Why HP Wash Removal Hits You Hardest"
description: "Comprehensive Cleric deep-dive for MapleStory Classic World. Pure INT allocation, SP priority (Heal/Invincible/Bless/Teleport/Holy Arrow), wand vs staff decision, Heal damage math vs undead, armor progression, scrolling philosophy, and the honest post-launch Priest realization about CW's HP wash removal."
lastUpdated: "2026-10-11"
tags:
  - cleric
  - magician
  - priest
  - builds
  - weapons
  - post-30
status: "Live - Founder's Access window Oct 6 to Oct 20, 2026"

# ---------- Layout ----------
theme: "ellinia"
decorations: false
eyebrow: "Class Build Deep Dive"
heading: "Cleric Build"
tagline: "Heal culture, Holy Arrow against undead, Bless party buff, and the long-game truth about CW's HP wash removal hitting Priest/Bishop hardest at endgame."

# ---------- Verification ----------
verificationStatus: "launch-verified"
verificationNote: "Weapon MAD values, wand/staff speed classes, armor stats, and reqLevel data pulled directly from src/data/db/items.json (7431 items from the Classic World FA client datamine via osmsdataexplorer.com + MeowDB community drops). Classic-World-specific mechanics (HP wash removal, 1.25x elemental multiplier, earring crit damage line, Victoria-only FA content ceiling) sourced from Nexon's Oct 3 release notes + Lunitidal on msclassic.wiki + r/Maplestory CW threads. SP priority order follows the top-upvoted r/Maplestory Cleric community consensus; adjusted for CW's HP wash removal (Priest/Bishop late-game viability concerns noted but held for Grand Launch coverage). Heal damage math and party buff numbers are traditional-MapleStory baseline; not formally re-tested in Classic World FA."
sourceSlugs:
  - nexon-founders-access-release-notes
  - osmsdataexplorer
  - reddit-xbucc-complete-builds
  - reddit-everything-changed-cot2

# ---------- TOC ----------
toc:
  - { href: "#tldr", label: "TL;DR" }
  - { href: "#classic-world-cleric-changes", label: "CW changes" }
  - { href: "#the-hp-wash-removal-reality", label: "HP wash reality" }
  - { href: "#sp-priority", label: "SP priority" }
  - { href: "#ap-allocation", label: "AP allocation" }
  - { href: "#wand-vs-staff", label: "Wand vs staff" }
  - { href: "#weapon-progression", label: "Weapons L10-70" }
  - { href: "#armor-progression", label: "Armor" }
  - { href: "#heal-culture", label: "Heal culture" }
  - { href: "#bossing", label: "Bossing + party invites" }
  - { href: "#scrolling-philosophy", label: "Scrolling" }
  - { href: "#faq", label: "FAQ" }
---

<h2 id="tldr">TL;DR</h2>

- **Stat allocation:** pure INT with a small LUK dip (10-20 LUK for
  wand reqLUK). Max LUK needed through Lv 70 is 20, achievable with
  starting LUK pool + 10 misc levelup APs.
- **Wand vs staff:** wands have higher MAD and Normal speed; staves
  have ~5% lower MAD and Slow speed. **Wand wins DPS** by a small
  margin and feels better to play. Staves exist primarily for the
  attack-animation preference.
- **SP max order (2nd job):** Heal (30) → Teleport (20) → Invincible
  (20) → Bless (20) → Holy Arrow (30). Heal first because it's your
  training tool AND undead-killer AND emergency survival.
- **The CW long-game caveat:** HP wash removal doesn't hurt you at
  2nd-job Cleric level, but **Priest/Bishop builds traditionally
  depended on HP wash for Zakum / Horntail survival**. CW removed
  the wash; the long-term endgame viability question is one of the
  top Reddit debates in the server right now. Up to the Lv. 100 cap at
  Grand Launch this is non-impactful — but if you plan to go
  Priest/Bishop once 3rd Job arrives, know that endgame content
  difficulty may shift.
- **FA endgame kit:** scrolled Lv 50 [Cromi](/items/1372007) wand,
  [Blue Calas](/items/1050029) overall, Zakum Helmet (if accessible,
  otherwise [Blue Seraphis](/items/1002187) L60), full Blue armor set.

<h2 id="classic-world-cleric-changes">Classic World Cleric changes</h2>

### 1. HP wash removal — the big one

See the dedicated [HP wash reality section](#the-hp-wash-removal-reality)
below. For 2nd-job Cleric this is non-impactful; for 3rd-job Priest
and 4th-job Bishop it's the single most-debated change in the server.

### 2. 1.25× elemental doesn't apply to Holy Arrow

Holy Arrow is a holy-element spell. Classic World's 1.25× elemental
multiplier applies to **elemental weakness** — i.e. fire spells on
ice-weak mobs. **Holy damage to undead is a separate mechanic**
(2× damage to undead) that was already in the base game. Classic
World didn't change it.

Translation: Holy Arrow still does 2× damage to undead mobs (Jr.
Wraith, Zombie Lupin, Zombie Mushroom, every ghost/skeleton). But
you won't stack a 1.25× bonus on top of the 2× undead multiplier.

### 3. Earring crit damage line is Cleric-friendly

Classic World added `crit damage` stat lines to earrings. Cleric
doesn't have crit skills at 2nd job, but **Holy Arrow and Shining
Ray (3rd job) can crit** in traditional MapleStory. 3rd Job is not in
Grand Launch and has no date, so scroll earrings for your current kit
first.

<h2 id="the-hp-wash-removal-reality">The HP wash removal reality for Clerics</h2>

<div class="callout callout--warning">
<strong>This section is the main CW-specific angle for Cleric.</strong>
If you're playing Cleric purely through FA (L30-70), skip this
and come back when 3rd Job is announced (it is not part of Grand
Launch). If you plan to go Priest eventually, read carefully.
</div>

### What HP washing did traditionally

Clerics have the lowest base HP of any class per the FA datamine's
base-HP table. By Lv 70-120, HP pool projects to ~2,000-4,000 —
not enough to survive Zakum's 1-shot attacks (~5,000-8,000 damage
per hit, per Zakum's datamined damage range).

Traditional MapleStory HP wash let players convert MP into HP at
a 10:1 ratio over hundreds of hours. A well-washed Priest reached
~8,000-12,000 HP and could survive Zakum / Horntail directly.

### What CW removed

Classic World removed the HP wash mechanic entirely. Your HP pool
is now **permanently locked to base HP table + AP**.

### Why this is scary for endgame Priests

- Zakum's datamined attack damage values are not reduced to
  compensate for the wash removal (mob HP + damage tables in
  src/data/db/mobs.json show no CW-specific nerf to Zakum)
- Priest/Bishop base HP at Lv 120 without wash is ~4,000-5,000
- Zakum's magic attacks still hit for ~5,000-8,000 damage

**The practical consequence:** whenever Zakum arrives (it is not in
Grand Launch), Priests may not be able to directly tank Zakum's attacks and will
have to rely on positioning + Invincible timing + Resurrection stall
tactics. The community debate is still ongoing — some players argue
"use Magic Guard + Invincible rotation to tank," others argue "CW
Priests are a party-support-only build at endgame."

### Our recommendation for Classic World Clerics

**At Grand Launch:** this doesn't affect you. Play Cleric normally
through the Lv. 100 cap. Our SP priority below is unaffected.

**When 3rd Job arrives** (not in Grand Launch; no date yet): monitor
community discussion before committing to Bishop.
Current community lean: **Priest/Bishop is still viable**, but
positioning and skill-rotation become harder.

**If you want hedge options:** consider going I/L mage instead.
I/L freeze-lock disables mob attacks and sidesteps the HP tanking
problem. See the [Wizard build guide](/wizard-build) when it ships.

<h2 id="sp-priority">SP priority (2nd job Cleric)</h2>

### The 100% uncontested picks

| Order | Skill | Max | Why |
| --- | --- | --- | --- |
| 1 | **Heal** | 30 | Your training tool AND undead-killer AND emergency survival. 30 max. |
| 2 | **Teleport** | 20 | Instant repositioning. Trivializes Jr. Balrog / Jr. Boogie / Shade. |
| 3 | **Invincible** | 20 | 1-shot immunity for 20 seconds. The "oh no" button for every boss. |

### The strong picks

| Order | Skill | Max | Why |
| --- | --- | --- | --- |
| 4 | **Bless** | 20 | Party buff: +WATK, +MAD, +ACC. Mandatory-invite for any boss party. |
| 5 | **Holy Arrow** | 30 | Your single-target damage spell. 2× to undead. |

### The optional picks

- **MP Eater** at level 1 only (duration/efficiency gain is minimal)
- **Magic Guard** maxed if you have 50 extra SP (realistic only late in the Lv. 70-100 stretch)

### The Heal grinding culture

Heal is Cleric's **training skill**. Against undead mobs (Jr.
Wraith, Zombie Lupin, Rotten Mushroom, Zombie Mushroom), it:
- Does ~500-1,500 damage per cast (scales with INT + skill level)
- Heals the Cleric (and party in range)
- Costs ~15 MP per cast at max

This means Cleric is uniquely free-to-grind on undead maps —
you heal yourself with every attack. The sections below cover the
specific undead-rich map rotation.

<h2 id="ap-allocation">AP allocation: pure INT + 10-20 LUK</h2>

### The simple answer

- **INT per level:** +4 (full INT)
- **LUK per level:** +1 (minimal LUK for wand/staff reqLUK)

Target: Lv 70 with INT 299-ish, LUK 20-25.

### Why 10-20 LUK matters

Wand and staff reqLUK values in Classic World:

| Weapon tier | reqINT | reqLUK |
| --- | --- | --- |
| Lv 10 (Wooden Wand) | 20 | 0 |
| Lv 20 (Metal Wand) | 40 | 10 |
| Lv 30 (Mithril Wand) | 55 | 15 |
| Lv 50 (Cromi) | 85 | 20 |
| Lv 70 (Angel Wings) | 115 | 20 |

**Max LUK needed = 20** across all weapons through Lv 70. Starting
LUK pool is 4; you need +16 over 70 levels. At +1 LUK every 4 levels
(instead of +4 INT, +0 LUK) you reach 20 LUK by Lv 64 and still
have 274 INT — plenty for max damage.

### The pure-INT purist option

Some Clerics go pure INT and skip the LUK investment entirely —
accepting a 1-tier-lower weapon equip. **Don't do this.** The
MAD gap between tiers is +7-14 per weapon; losing one tier is
losing ~10-15% of your damage. Spend the 16 LUK.

<h2 id="wand-vs-staff">Wand vs staff: wand wins</h2>

### Raw MAD comparison

| Lv | Wand (MAD · Speed) | Staff (MAD · Speed) |
| --- | --- | --- |
| 10 | [Wooden Wand](/items/1372000) 27 · Normal | [Wooden Staff](/items/1382000) 24 · Slow |
| 25 | [Ice Wand](/items/1372003) 48 · Normal | [Wizard Staff](/items/1382004) 45 · Slow |
| 50 | [Cromi](/items/1372007) 83 · Normal | — |
| 55 | — | [Thorns](/items/1382006) 87 · Slow |
| 70 | [Angel Wings](/items/1372010) 111 · Normal | [Evil Wings](/items/1382007) 101 (Lv 65) · Slow |

**Observation:** Wand has **higher MAD AND faster speed**. The old
"staff is for magic-ATT bosses, wand is for grinding" meta doesn't
hold in Classic World — the FA datamine shows wand dominance at
every bracket where both exist.

**The verdict:** **Pick wand.** Staff is cosmetic preference only.

### Staff defender argument

The one staff advantage: staves have no "casting speed modifier" —
your spell cast time is purely driven by the spell itself. In
Classic World FA testing this effect is still negligible.

<h2 id="weapon-progression">Weapon progression L10-70</h2>

### Wand path (recommended)

| Lv | Pick | MAD | Speed | Source |
| --- | --- | --- | --- | --- |
| 10 | [Wooden Wand](/items/1372000) | 27 | Normal | drop: Stump |
| 15 | [Hardwood Wand](/items/1372001) | 34 | Normal | NPC shop |
| 20 | [Metal Wand](/items/1372002) | 41 | Normal | drop: Red Snail |
| 25 | [Ice Wand](/items/1372003) | 48 | Normal | drop: [Evil Eye](/mobs) |
| 30 | [Mithril Wand](/items/1372004) | 55 | Normal | NPC shop |
| 35 | [Wizard Wand](/items/1372005) | 62 | Normal | drop: Jr. Boogie 2 |
| 40 | [Fairy Wand](/items/1372006) | 69 | Normal | NPC shop |
| 50 | [Cromi](/items/1372007) | 83 | Normal | NPC shop |
| 60 | [Evil Tale](/items/1372009) | 97 | Normal | NPC shop |
| 70 | [Angel Wings](/items/1372010) | 111 | Normal | NPC shop |

### Staff path (if you insist)

| Lv | Pick | MAD | Speed | Source |
| --- | --- | --- | --- | --- |
| 10 | [Wooden Staff](/items/1382000) | 24 | Slow | drop: Stump |
| 25 | [Wizard Staff](/items/1382004) | 45 | Slow | drop: Blue Mushroom |
| 45 | [Arc Staff](/items/1382005) | 73 | Slow | NPC shop |
| 55 | [Thorns](/items/1382006) | 87 | Slow | NPC shop |
| 65 | [Evil Wings](/items/1382007) | 101 | Slow | NPC shop |

### Wizard Wand drop note

The Lv 35 [Wizard Wand](/items/1372005) drops from Jr. Boogie 2 in
the Boogie line (Ellinia-adjacent hidden maps). It's the first
"identity moment" for Cleric — a drop that notably outperforms the
Lv 30 shop wand. Farm it between Lv 35-40.

<h2 id="armor-progression">Cleric armor progression</h2>

### Hat

| Lv | Pick | INT | MDEF | Slots |
| --- | --- | --- | --- | --- |
| 30 | [Steel Pride](/items/1002102) | +3 | 19 | 7 |
| 35 | [Brown Matty](/items/1002128) | +3 | 20 | 7 |
| 40 | [Brown Guiltian](/items/1002146) | +4 | 22 | 7 |
| 50 | **Zakum Helmet** +5 all-stat (if accessible) OR [Blue Seraphis](/items/1002187) L60 | — | — | — |
| 60 | [Blue Seraphis](/items/1002187) | +6 | 30 | 7 |
| 70 | [Blue Infinium Circlet](/items/1002202) | +7 | 34 | 7 |

<div class="callout callout--warning">
<strong>Zakum Helmet in FA:</strong> same gating as other classes.
The item exists in datamine as [Zakum Helmet](/items/1002180) with
+5/+5/+5/+5 all-stat, but the boss is held for Grand Launch. Use
<strong>Blue Seraphis L60</strong> as the realistic FA hat pick.
Full context in the
<a href="/gearing-30-plus#level-50-60-first-real-investment">Gearing
guide</a>.
</div>

### Overall robe (your primary armor slot)

Clerics almost always wear overall robes rather than top+bottom
pairs. The 10-slot overalls have more total MDEF than top+bottom
combined, and 10 slots means better scrolling potential.

| Lv | Pick | INT | MDEF | Slots | Source |
| --- | --- | --- | --- | --- | --- |
| 15 | [Blue Plain Robe](/items/1050001) | +3 | 38 | 10 | NPC shop |
| 25 | [Blue Doros Robe](/items/1050007) | +5 | 49 | 10 | NPC shop |
| 30 | [Blue Wizard Robe](/items/1050012) | +6 | 55 | 10 | NPC shop |
| 35 | [Blue Chaos Robe](/items/1050020) | +6 | 60 | 10 | drop: Zombie Mushroom |
| 40 | [Blue Starlight](/items/1050025) | +8 | 66 | 10 | drop: Cold Eye |
| 50 | [Blue Calas](/items/1050029) | +10 | 77 | 10 | drop: Echopus |
| 60 | [Blue Anakamoon](/items/1050035) | +12 | 88 | 10 | NPC shop |
| 70 | [Blue Requiem](/items/1050042) | +14 | 99 | 10 | NPC shop |

### Blue Chaos Robe drop farming

The Lv 35 Blue Chaos Robe drops from [Zombie Mushroom](/mobs) —
convenient because Zombie Mushroom is a Heal-grinding target
anyway. **Clerics farming Zombie Mushroom for EXP will naturally
pick up Blue Chaos Robes as byproduct loot.** Combined with the
other Zombie Mushroom drops (Red Amoria Skirt L35, Nakamaki
spear L35) this is one of the richest Cleric farming maps.

### Shoes, Gloves

| Lv | Shoes | Gloves |
| --- | --- | --- |
| 30 | [Blue Snowshoes](/items/1072080) +1 INT | [Blue Lutia](/items/1082032) +3 INT |
| 40 | [Dark Moon Shoes](/items/1072103) +1 INT | [Blue Arten](/items/1082056) +4 INT |
| 50 | [Purple Goldwind Shoes](/items/1072118) +1 INT | [Blue Penance](/items/1082068) +5 INT |
| 60 | [Orange Goldrunners](/items/1072134) +2 INT | [Gold Manute](/items/1082080) +6 INT |
| 70 | [Brown Lapiz Sandals](/items/1072147) +1 INT | [Blue Lorin](/items/1082092) +7 INT |

Capes: [Blue Justice](/items/1102009) L35 → [Blue Napoleon](/items/1102005)
L50 → [Blue Magic Cape](/items/1102013) L55 → [Blue Gaia](/items/1102017)
L65.

<h2 id="heal-culture">Heal culture: farming undead for free training</h2>

Classic World FA has a rich undead-mob roster that lets Clerics
train with zero potion costs:

### The Cleric training map rotation

| Lv | Map | Primary target | Why |
| --- | --- | --- | --- |
| 20-30 | [Zombie Mushroom](/mobs) spawns in Sleepywood & Ant Tunnel | 500-800 HP undead | Easy Heal 1-shot territory. Doubles as Blue Chaos Robe farm. |
| 30-40 | [Jr. Wraith](/mobs/32) in Line 2 Area 1 | ~2500 HP, Lv 35 | Rich Heal grind. See [Line 2 training route](/training-routes#line-2-area-1-eleveny-fave-30-33). |
| 40-50 | Zombie Lupin in Monkey Swamp | ~5000 HP, Lv 40 | Dense spawn, Heal 2-shot territory. |
| 50-60 | Rotten Mushroom in Forgotten Hollow | ~8000 HP, Lv 55 | High EXP per kill, Rotten Mushmom boss roam. |
| 60-70 | Rotten Mushmom in [Rotten Mushmom's Lair](/maps/10006121) | boss roam | Capstone Cleric farm — hits like a truck but you solo-heal through. |

### The MP management math

Heal costs ~15 MP per cast at max level. A Lv 50 Cleric with max
Heal and INT 150 reaches ~800 MP pool. **You can cast Heal ~50
times between MP pot sips** — plenty to grind a solid 20-minute
Zombie Mushroom session.

MP Eater at level 1 adds ~5% chance to drain MP from kills,
reducing pot dependency further. For pure-Heal grinders, MP Eater
level 1 is enough; don't max it.

<h2 id="bossing">Bossing + party invite culture</h2>

### FA roster boss performance

- **[Mano](/bosses/mano)** (Lv 20) — Holy Arrow from range. Cleric is fine but low priority on Mano runs.
- **[Mushmom](/bosses/mushmom)** (Lv 60) — Heal + Holy Arrow combo. Not undead so no 2× bonus. Still viable.
- **[Jr. Balrog](/bosses/jr-balrog)** (Lv 55) — Cleric parties love you. Bless keeps everyone's ACC + damage up, Heal sustains the party, Invincible saves bad positioning.
- **[Zombie Mushmom](/bosses/zombie-mushmom)** (Lv 65) — **This is YOUR boss**. ZMM is undead, so Heal does 2× damage. A Lv 55+ Cleric can solo ZMM with pure Heal.
- **[Shade](/bosses/shade)** (Lv 47) — 999 evasion makes everyone else useless. **Cleric Holy Arrow has magic hit so ACC doesn't apply the same way.** You CAN damage Shade when melee classes can't. This is Cleric's Shade specialty.

### The Bless party invite tax

Bless lasts 200 seconds and buffs everyone in range. Having a
Cleric in the party = +12 WATK + +18 MAD + +15 ACC for everyone.
**You will get boss party invites just for showing up.**

Practical takeaway: at Lv 50+ with Bless maxed, your party value
exceeds your personal DPS. Lean into the "I'm the healer/buffer"
identity rather than trying to compete with Hunter/Fighter burst.

<h2 id="scrolling-philosophy">Scrolling philosophy for Cleric</h2>

### The priority order

1. **Wand** — 60% MAD scrolls. 7 slots. The Cleric equivalent of
   warrior ATT scrolls. Expect to burn ~2 wands finding one that
   keeps all slots.
2. **Overall robe** — 60% INT scrolls. 10 slots. The slot where
   INT scrolls pay off hardest.
3. **Hat** — 60% INT scrolls.
4. **Gloves** — 60% INT or MAG ATK.
5. **Shoes, cape** — 10% INT if you have slack.

### MAD vs INT scroll choice

**MAD scrolls go on wand (primary stat).** INT scrolls go on
everything else. The scroll pools are separate — don't confuse them.

### The 60% MAD math

A 7-slot wand fully scrolled with 60% MAD scrolls expects:
- Average passes: 7 × 0.60 = 4.2 scrolls land
- Average MAD gained: 4.2 × 3 MAD = **+12.6 MAD**
- Budget: ~15-25 scrolls to find a 7-slot wand that keeps all slots

**For a Lv 50 Cromi (base 83 MAD), a well-scrolled copy reaches
92-98 MAD** — matching unscrolled Lv 55 Thorns staff territory.

<h2 id="faq">FAQ</h2>

**I'm Lv 30 and ready for 2nd-job. Cleric or F/P or I/L?**

Cleric if you want party-centric support play, Heal grinding
convenience on undead maps, and the mandatory-invite-at-every-boss
identity. See the Wizard guide for F/P / I/L differentiation (ships
after this one).

**Does HP wash removal really hurt Cleric at endgame?**

For 2nd-job play (all of Grand Launch): no, zero impact. For an eventual
3rd-job Priest / 4th-job Bishop: possibly — see
[the HP wash reality section](#the-hp-wash-removal-reality) above.

**Can I solo everything with Heal?**

Only undead mobs. Non-undead mobs resist Heal entirely (0 damage).
For non-undead maps you rely on Holy Arrow + party cooperation.

**Why pure INT? Shouldn't I pump LUK for the wand reqLUK?**

Yes, with 10-20 LUK sprinkled in. Full detail in the
[AP allocation section](#ap-allocation). Max LUK through Lv 70
is 20.

**Teleport skill - do I max it?**

Max to 20 for the full-range version. You use Teleport constantly
once you have it — grinding, bossing, map navigation. Highest
quality-of-life skill in the Cleric kit.

**My guildies say Cleric is useless in CW. Help?**

They're wrong but it's complicated. Cleric is strong in FA (party
value, Heal grinding, bossing Shade). The "useless" argument is
usually about Priest/Bishop at Grand Launch endgame — see the HP
wash section. For now, play Cleric normally.

**Can I F/P or I/L and still Heal my friends?**

No. Heal is a Cleric-only skill. F/P and I/L Wizards get Magic
Guard (self-defense via MP shield) but no healing or party-wide buffs.

**Will this guide update when Priest unlocks?**

Yes, when Nexon releases 3rd Job (it is not in Grand Launch). This
guide will get a 3rd-job SP section then. Last reviewed 2026-10-21.
