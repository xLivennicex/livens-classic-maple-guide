---
# ---------- Core metadata ----------
title: "Wizard Build: F/P vs I/L, 1.25x Elemental, Freeze-Lock, and the Magic Guard Shield"
description: "Comprehensive F/P and I/L Wizard deep-dive for MapleStory Classic World. F/P vs I/L decision math with CW's 1.25x elemental multiplier, SP priority for both branches (Magic Claw/Fire Arrow/Poison Mist vs Cold Beam/Thunder Bolt/Ice Strike), Magic Guard MP-shield mechanics, pure INT allocation, wand vs staff, armor progression, and the freeze-lock vs poison-DOT identity question."
lastUpdated: "2026-10-11"
tags:
  - wizard
  - magician
  - fire-poison
  - ice-lightning
  - builds
  - weapons
  - post-30
status: "Live - Founder's Access window Oct 6 to Oct 20, 2026"

# ---------- Layout ----------
theme: "ellinia"
decorations: false
eyebrow: "Class Build Deep Dive"
heading: "Wizard Build"
tagline: "F/P vs I/L settled with CW's 1.25x elemental multiplier. Magic Guard shield math, freeze-lock gameplay, poison-DOT DPS, and the honest grind-rotation verdict for both branches."

# ---------- Verification ----------
verificationStatus: "launch-verified"
verificationNote: "Weapon MAD values, speed classes, armor stats, and reqLevel data pulled directly from src/data/db/items.json (7431 items from the Classic World FA client datamine via osmsdataexplorer.com + MeowDB community drops). Classic-World-specific mechanics (HP wash removal, 1.25x elemental multiplier confirmed, earring crit damage line, Victoria-only FA content ceiling) sourced from Nexon's Oct 3 release notes + Lunitidal on msclassic.wiki + r/Maplestory CW threads. SP priority for both F/P and I/L corrects the xBucc Reddit community-build cluster errors noted in the OP's own addendum. 1.25x elemental math uses the Lunitidal msclassic.wiki writeup as primary source; damage multiplier is confirmed-live in Classic World per Day 1 player tests. Mob elemental weaknesses sourced from mobs.json (FA datamine) + traditional MapleStory lookups where mob flags are null."
sourceSlugs:
  - nexon-founders-access-release-notes
  - osmsdataexplorer
  - msclassic-wiki-elemental-125x
  - reddit-xbucc-complete-builds
  - reddit-everything-changed-cot2

# ---------- TOC ----------
toc:
  - { href: "#tldr", label: "TL;DR" }
  - { href: "#the-125x-elemental-mechanic", label: "1.25x elemental" }
  - { href: "#fp-vs-il", label: "F/P vs I/L" }
  - { href: "#sp-priority-fp", label: "F/P SP" }
  - { href: "#sp-priority-il", label: "I/L SP" }
  - { href: "#ap-allocation", label: "AP allocation" }
  - { href: "#magic-guard-math", label: "Magic Guard math" }
  - { href: "#wand-vs-staff", label: "Wand vs staff" }
  - { href: "#weapon-progression", label: "Weapons L10-70" }
  - { href: "#armor-progression", label: "Armor" }
  - { href: "#grind-rotations", label: "Grind rotations" }
  - { href: "#bossing", label: "Bossing" }
  - { href: "#faq", label: "FAQ" }
---

<h2 id="tldr">TL;DR</h2>

- **Stat allocation:** pure INT with a small LUK dip (10-20 LUK for
  wand reqLUK). Same as Cleric.
- **F/P vs I/L:** F/P wins solo-grinding (Poison Mist DoT runs on
  its own), I/L wins boss parties and ambient DPS (freeze-lock
  disables mob attacks). Classic World's 1.25× elemental shifts the
  balance **slightly** toward I/L because ice-weak and lightning-weak
  mob coverage in FA is wider than fire-weak coverage.
- **The 1.25× elemental mechanic is central to CW Wizard play.**
  Match your element to mob weakness for +25% damage per hit.
  Fire >> Ice-weak mobs (Jr. Snail family, slimes). Ice >> Fire-weak
  mobs (Fire Boar, Jr. Boogie). Lightning >> Water-weak mobs
  (jellies, octopi).
- **SP max order (F/P):** Magic Claw (30) → Magic Guard (20) → Fire
  Arrow (30) → MP Eater (20) → Poison Brace (20) — Poison Mist is
  3rd job (held).
- **SP max order (I/L):** Magic Claw (30) → Magic Guard (20) →
  Cold Beam (30) → MP Eater (20) → Thunder Bolt (30).
- **FA endgame kit:** scrolled Lv 50 [Cromi](/items/1372007) wand,
  [Blue Calas](/items/1050029) overall, matched-element MDEF
  accessories, Magic Guard rotating.

<h2 id="the-125x-elemental-mechanic">The 1.25× elemental mechanic</h2>

<div class="callout callout--framing">
<strong>This is the defining CW Wizard mechanic.</strong>
Classic World adds a <strong>+25% damage multiplier when your spell
element matches a mob's weakness</strong>. Source:
<a href="https://msclassic.wiki" target="_blank" rel="noopener">Lunitidal on msclassic.wiki</a>,
Day 1 player tests confirmed.
</div>

### How it works

Every mob has an element flag (Fire-weak, Ice-weak, Lightning-weak,
Dark-weak, Holy-weak, or None). Casting a spell of the matching
element = **damage × 1.25**.

### FA map element weakness overview

| Element | Mobs weak to it | Where |
| --- | --- | --- |
| **Fire** (F/P) | Blue Mushroom, Green Mushroom, Ice-element mobs | Victoria lowlands |
| **Ice** (I/L) | Fire Boar, Jr. Boogie, fire-element mobs | Burnt Land chain |
| **Lightning** (I/L) | Jellyfish, Octopi, water-element mobs | Beach / Aqua Road (gated) |
| **Dark** (3rd job) | Holy mobs, undead | (post-launch) |
| **Holy** (Cleric) | Undead mobs | Zombie maps |

### The ice/fire asymmetry

In FA specifically, **ice-weak mobs are more concentrated** than
fire-weak mobs. The Burnt Land chain (5 maps) has heavy Fire Boar
density; Monkey Swamp III has Lupin + Zombie Lupin. These give I/L
mages consistent 1.25× uptime.

Fire-weak mobs exist but are scattered: Jr. Boogie 1/2/3 in Ellinia
hidden areas, Fairy types. Great individually, less consistent for
rotation planning.

**Translation:** I/L has a slight CW-specific advantage from map
weakness distribution. F/P still works but requires more
map-hopping to maintain 1.25× uptime.

<h2 id="fp-vs-il">F/P vs I/L: the decision</h2>

### Identity comparison

| Factor | F/P | I/L |
| --- | --- | --- |
| Core gameplay | **Poison DoT** stacking | **Freeze-lock** mob control |
| Solo DPS | High (Poison Mist 3rd job carries) | Medium |
| Group DPS | Medium | High (I/L buffs party damage via Thunder Spear 3rd job) |
| Boss DPS | Medium | High (freeze-lock disables boss mechanics) |
| CW 1.25× uptime | Medium | High (ice-weak maps more common in FA) |
| Grinding solo | **Best in class** (set-and-forget Poison Mist) | Good (freeze-lock as mob control) |
| Grinding in party | Medium | **Best in class** (frozen mobs = free damage for melee allies) |

### The 2nd-job vs 3rd-job gap

**Important:** at 2nd job (up to the Lv. 100 cap), both branches play
similarly. Magic Claw spam + Magic Guard. In traditional MapleStory the
identity divergence happens at **3rd job**, which is not in Grand
Launch and has no announced date:
- F/P gets **Poison Mist** = AoE DoT ground pool that kills everything
  that walks through for 10 seconds
- I/L gets **Ice Strike** = AoE freeze on hit, plus **Thunder Spear**
  for party burst

**Translation for planning:** through Grand Launch, F/P and I/L play
similarly. Your 2nd-job SP goes to Magic Claw + Fire Arrow / Cold Beam.
Pick based on which 3rd-job identity you want **for whenever 3rd Job arrives**.

### Honest recommendation

- **Pick F/P** if you plan to solo-grind alone a lot and love the
  idea of "cast Poison Mist, autoattack with Magic Claw while poison
  does the work" at endgame.
- **Pick I/L** if you plan to join boss parties regularly and want
  the freeze-lock utility. Also the slight CW-specific advantage
  from ice-weak FA map concentration.
- **Both branches are strong in CW** — this isn't a top-tier vs
  bottom-tier decision like some class comparisons.

<h2 id="sp-priority-fp">F/P SP priority (2nd job)</h2>

| Order | Skill | Max | Why |
| --- | --- | --- | --- |
| 1 | **Magic Claw** | 30 | Your training spell. 2-hit multi-target. Scales with INT. |
| 2 | **Magic Guard** | 20 | MP-shield: damage comes off MP instead of HP. Critical for low-HP mages. |
| 3 | **Fire Arrow** | 30 | Your 2nd-job identity spell. Fire-element burst damage. |
| 4 | **MP Eater** | 20 | Chance to drain MP from kills. Reduces pot dependency. |
| 5 | **Poison Brace** | 20 | DoT debuff on single target. Precursor to Poison Mist. |
| 6 | **Slow** | leftover SP | Debuff on mobs. Niche but handy for mob control. |

### F/P playstyle note

F/P at 2nd job is "Magic Claw everything, cast Fire Arrow on fire-weak
mobs for the 1.25× bonus." Not glamorous, but the DPS is strong.
The identity payoff is 3rd-job Poison Mist.

<h2 id="sp-priority-il">I/L SP priority (2nd job)</h2>

| Order | Skill | Max | Why |
| --- | --- | --- | --- |
| 1 | **Magic Claw** | 30 | Same as F/P. Your training spell. |
| 2 | **Magic Guard** | 20 | Same MP-shield mechanic. |
| 3 | **Cold Beam** | 30 | Your 2nd-job identity spell. **Freezes mobs for ~1s on hit.** |
| 4 | **MP Eater** | 20 | Chance to drain MP from kills. |
| 5 | **Thunder Bolt** | 30 | AoE lightning spell. Hits 6 mobs. Good for crowded maps. |
| 6 | **Slow** | leftover SP | Niche debuff. |

### The freeze-lock mechanic

Cold Beam has ~90% chance to freeze the target for ~1 second on
hit. Chain-casting Cold Beam against a single mob keeps it
permanently frozen — it can't attack you back.

**Practical takeaway:** against single-target bosses (Jr. Balrog,
Mushmom), freeze-lock means you take zero damage. I/L is the safest
boss class in the server at 2nd job.

<h2 id="ap-allocation">AP allocation (same for F/P and I/L)</h2>

- **INT per level:** +4 (full INT)
- **LUK per level:** +1 (minimal LUK for wand reqLUK)

Target: Lv 70 with INT 299-ish, LUK 20-25.

Wand/staff reqLUK across tiers tops at 20 LUK (same as Cleric). Full
detail in the [Cleric guide's AP section](/cleric-build#ap-allocation) —
the math is identical for Wizard.

<h2 id="magic-guard-math">Magic Guard math</h2>

### What Magic Guard does

Converts **85% of incoming damage into MP damage** instead of HP
damage. Lasts 10 minutes per cast.

### How it saves you

A Lv 50 Wizard has:
- ~1,000 HP (even with pure INT, HP scales minimally)
- ~800 MP

Without Magic Guard, a single boss attack (500 damage) kills you
if HP is below half. With Magic Guard active, that 500 damage
becomes:
- 75 damage to HP (15%)
- 425 damage to MP

Your MP pool is bigger than your HP pool. You survive many more
hits.

### The MP management loop

Magic Guard + MP potions means Wizards tank by **drinking blue
potions instead of red potions**. Blue pots are typically cheaper,
and MP Eater (level 1-20) further reduces net MP spending.

### When Magic Guard breaks

If your MP hits zero, Magic Guard turns off. All subsequent damage
goes to HP. **Always keep MP > 20% to maintain Magic Guard uptime.**
Set your blue-pot auto-use threshold around 30%.

<h2 id="wand-vs-staff">Wand vs staff (same recommendation as Cleric)</h2>

Wand wins on MAD at every bracket AND is faster speed. See the
[Cleric wand-vs-staff section](/cleric-build#wand-vs-staff) for the
full comparison. For Wizard, pick wand.

<h2 id="weapon-progression">Weapon progression L10-70</h2>

### Wand path

| Lv | Pick | MAD | Speed | Source |
| --- | --- | --- | --- | --- |
| 10 | [Wooden Wand](/items/1372000) | 27 | Normal | drop: Stump |
| 15 | [Hardwood Wand](/items/1372001) | 34 | Normal | NPC shop |
| 20 | [Metal Wand](/items/1372002) | 41 | Normal | drop: Red Snail |
| 25 | [Ice Wand](/items/1372003) | 48 | Normal | drop: Evil Eye |
| 30 | [Mithril Wand](/items/1372004) | 55 | Normal | NPC shop |
| 35 | [Wizard Wand](/items/1372005) | 62 | Normal | drop: Jr. Boogie 2 |
| 40 | [Fairy Wand](/items/1372006) | 69 | Normal | NPC shop |
| 50 | [Cromi](/items/1372007) | 83 | Normal | NPC shop |
| 60 | [Evil Tale](/items/1372009) | 97 | Normal | NPC shop |
| 70 | [Angel Wings](/items/1372010) | 111 | Normal | NPC shop |

### The Ice Wand pun

The Lv 25 [Ice Wand](/items/1372003) is **not an ice-element wand**
despite the name. Wands don't have elements. The spell element
comes from the skill, not the weapon. "Ice Wand" is just the
weapon's name. **F/P wizards can equip Ice Wand without penalty.**

### Staff path

| Lv | Pick | MAD | Speed | Source |
| --- | --- | --- | --- | --- |
| 10 | [Wooden Staff](/items/1382000) | 24 | Slow | drop: Stump |
| 25 | [Wizard Staff](/items/1382004) | 45 | Slow | drop: Blue Mushroom |
| 45 | [Arc Staff](/items/1382005) | 73 | Slow | NPC shop |
| 55 | [Thorns](/items/1382006) | 87 | Slow | NPC shop |
| 65 | [Evil Wings](/items/1382007) | 101 | Slow | NPC shop |

<h2 id="armor-progression">Wizard armor progression</h2>

Same as Cleric armor (both are Magician class). See the
[Cleric armor section](/cleric-build#armor-progression) for the
full progression tables.

### Element-specific armor variants

**The FA datamine shows no element-specific armor variants.** The
old rumor about F/P wearing fire-resist gear or I/L wearing cold-
resist gear doesn't apply — Classic World mage armor is element-
neutral MDEF only.

<h2 id="grind-rotations">Grind rotations</h2>

### F/P rotation (fire-weak mob targeting)

| Lv | Primary target | Map | Why |
| --- | --- | --- | --- |
| 20-30 | Blue Mushroom | Victoria north | 1.25× fire multiplier, cheap XP |
| 30-40 | Jr. Boogie 1/2/3 | Ellinia hidden maps | Fire-weak, high EXP |
| 40-50 | Fairy / Rotten Fairy | Forgotten Hollow | 1.25× multiplier, dense spawn |
| 50-70 | Rotten Mushroom family | Forgotten Hollow | Fire-weak capstone |

### I/L rotation (fire-element mob targeting)

| Lv | Primary target | Map | Why |
| --- | --- | --- | --- |
| 20-30 | Wild Boar | [Land of Wild Boar](/maps/10004041) | Fire-element, 1.25× ice bonus |
| 30-40 | Fire Boar | [Burnt Land I-III](/maps/10004111) | **Prime I/L farming** — 5-map chain, dense spawn |
| 40-50 | Jr. Yeti (if gated open) | Snow dungeon | Fire-element (odd but accurate) |
| 50-70 | Fire Boar (continued) + Taurospear | Burnt Land + Sanctuary chains | 1.25× uptime optimization |

<div class="callout callout--warning">
<strong>FA access caveat:</strong> Burnt Land IV/V are reported
gated in some FA sessions. Use Burnt Land I-III for consistent
access. Full context in the
<a href="/meso-farming-30-plus#level-30-40-meso-rotation">Meso
farming guide's FA caveat section</a>.
</div>

<h2 id="bossing">Bossing as a Wizard</h2>

### FA roster boss performance

- **[Mano](/bosses/mano)** (Lv 20) — Both branches tag Mano from
  range. F/P uses Fire Arrow if accessible, I/L uses Cold Beam.
- **[Mushmom](/bosses/mushmom)** (Lv 40) — Not elementally weak to
  anything specific. Wizard DPS is medium here. Not your fight.
- **[Jr. Balrog](/bosses/jr-balrog)** (Lv 80) — **I/L freeze-lock
  dominates**. Jr. Balrog's physical attacks never land. F/P takes
  longer because no freeze-lock.
- **[Zombie Mushmom](/bosses/zombie-mushmom)** (Lv 55) — Non-undead
  (yes, really). Not Heal-weak like a Cleric target. Wizard DPS is
  medium. Not your fight.
- **[Shade](/bosses/shade)** (Lv 47) — Both branches hit Shade
  reliably because magic hit works. Not your fight for DPS, but
  you can contribute without the Cleric specialty.

### I/L party invite culture

I/L mages are **mandatory-invite for Jr. Balrog parties** at Lv 50+.
Freeze-lock on Jr. Balrog disables his physical attacks completely,
turning the fight from a positional dance into a free kill.

Practical takeaway: at Lv 50+ with Cold Beam maxed, you'll get
Jr. Balrog party invites just for showing up. Capitalize on this
for EXP + party meso split.

<h2 id="faq">FAQ</h2>

**I'm Lv 30 and ready for 2nd-job. F/P or I/L or Cleric?**

- **F/P** if you want solo-grinding with Poison Mist (3rd job
  payoff) and don't care about party bossing.
- **I/L** if you want boss-party DPS (freeze-lock) and the slight
  CW-specific ice-weak map advantage.
- **Cleric** if you want party-wide buffs + Heal grinding. See
  [Cleric guide](/cleric-build).

**Does Classic World's 1.25× elemental really matter?**

Yes. +25% damage per hit on element-matched mobs is a huge grinding
boost. For I/L on Burnt Land / Monkey Swamp, you're routinely 1.25×
multiplying. For F/P on Jr. Boogie / Fairy, same.

**Can I switch from F/P to I/L at Lv 50?**

No. 2nd-job advancement is one-way. Pick carefully at Lv 30.

**My Magic Guard keeps dropping - why?**

MP ran out. Your blue-pot usage threshold is too low. Set auto-pot
to use blue pots when MP < 30%. Also max MP Eater to reduce drain.

**Can F/P solo Jr. Balrog?**

Yes but slowly. No freeze-lock means you take positional damage.
Doable with Magic Guard rotation + Heal from a party Cleric.
Faster to just invite an I/L mage.

**I want to be the "cool fireball mage" — F/P right?**

F/P does cast fireballs (Fire Arrow). You get your fireball power
fantasy. The 3rd-job Meteor Shower is the capstone fireball-y
spell for F/P.

**I want to freeze everything - I/L right?**

Correct. Cold Beam (2nd job) → Ice Strike (3rd job) is the
freeze-lock progression. If you want to be the "nothing moves"
mage, I/L is your branch.

**Will this guide update when 3rd job opens?**

Yes, when Nexon releases it - 3rd Job is not in Grand Launch and has
no announced date. The guide will get separate F/P Mage and I/L Mage
3rd-job sections then. Last reviewed 2026-10-21.
