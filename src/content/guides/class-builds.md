---
# ---------- Core metadata ----------
title: "Class Builds: Skill and Stat Guides for All 10 Branches"
description: "Skill priorities, stat allocation, and playstyle notes for every 2nd job branch in MapleStory Classic World. Fighter, Page, Spearman, Fire/Poison, Ice/Lightning, Cleric, Hunter, Crossbowman, Bandit, and Assassin. Classic World-specific caveats on HP washing, earring crit damage, and the 1.25x elemental multiplier woven in."
lastUpdated: "2026-10-11"
tags:
  - builds
  - classes
  - skills
  - stats
  - post-30
status: "Live - Founder's Access window Oct 6 to Oct 20, 2026"

# ---------- Layout ----------
theme: "sleepywood"
decorations: false
eyebrow: "Post-30 Progression"
heading: "Class Builds"
tagline: "Skill priorities, stat allocation, and the honest playstyle verdict for every 2nd job branch. Classic World mechanic changes (no HP wash, earring crit damage, 1.25x elemental) baked into every recommendation."

# ---------- Verification ----------
verificationStatus: "community-reported"
verificationNote: "Skill names, SP point counts, and max levels pulled from the CoT 2 datamine via osmsdataexplorer.com (same source as our item + mob data). SP build priorities and max-order recommendations draw on v83 community canon (MapleRoyals community archives, Hidden Street forum traditions, Ayumilove's v83 skill guides) combined with Classic-World-specific adjustments noted in Nexon's CoT 2 release notes and community playtest observations (msclassic.wiki moderator Lunitidal). The dedicated Assassin build guide covers that one branch at deeper equipment-focused depth; this hub covers all 10 branches at planning-depth. Where a build decision is actively contested in the community (e.g. Magician Magic Claw max order, Page HP recovery vs Precise Strikes), the FAQ flags it with both camps. Not datamine-authoritative on SP ordering - treat as a planning starting point and verify your in-game skill book before dumping SP."
sourceSlugs:
  - nexon-founders-access-release-notes
  - osmsdataexplorer
  - ayumilove-v83-warrior
  - ayumilove-v83-magician
  - ayumilove-v83-bowman
  - ayumilove-v83-thief
  - reddit-xbucc-complete-builds
  - reddit-everything-changed-cot2

# ---------- TOC ----------
toc:
  - { href: "#how-to-pick-a-class", label: "How to pick" }
  - { href: "#classic-world-build-rules", label: "CW build rules" }
  - { href: "#warrior-fighter", label: "Fighter" }
  - { href: "#warrior-page", label: "Page" }
  - { href: "#warrior-spearman", label: "Spearman" }
  - { href: "#magician-fire-poison", label: "F/P" }
  - { href: "#magician-ice-lightning", label: "I/L" }
  - { href: "#magician-cleric", label: "Cleric" }
  - { href: "#bowman-hunter", label: "Hunter" }
  - { href: "#bowman-crossbowman", label: "Crossbowman" }
  - { href: "#thief-bandit", label: "Bandit" }
  - { href: "#thief-assassin", label: "Assassin" }
  - { href: "#faq", label: "FAQ" }
---

Ten 2nd-job branches, ten different builds. This hub covers every one
with its skill priority, stat allocation, and playstyle verdict. For
the Assassin branch we have a [dedicated deep-dive guide](/assassin-build)
with full equipment and scrolling math — this page is the planning
layer across all branches.

<div class="callout callout--framing">
<strong>Reading order:</strong> read "How to pick" + "CW build rules"
first, then jump to your chosen branch via the TOC chips. Each branch
section is self-contained. Cross-references to
<a href="/gearing-30-plus">Gearing at 30+</a>,
<a href="/training-routes">Training routes</a>, and
<a href="/bosses-at-30-plus">Bosses at 30+</a> are inline where
relevant.
</div>

<h2 id="how-to-pick-a-class">How to pick a class</h2>

Four axes to evaluate against before you commit:

| Axis | Options |
| --- | --- |
| **Playstyle** | Melee burst (Fighter/Page/Spearman/Bandit) · Ranged DPS (Hunter/Crossbowman/F-P/I-L) · Support-plus-DPS (Cleric) · High-mobility (Assassin) |
| **Group fit** | Party-mainstay (Cleric, Spearman) · Flexible (Hunter, Fighter) · Solo-friendly (Assassin, F/P) · PQ-staple (Chief Bandit, Cleric) |
| **Gear budget** | Low (Fighter/Spearman) · Medium (Page/Hunter/Crossbowman/Bandit) · High (Assassin, mages at 70+) |
| **Content ceiling** | Grind-friendly to FA cap (every class) · Scales best into Grand Launch (Spearman Hyper Body + Cleric Bless + Priest holy damage) |

**Short recommendations by player type:**

- **"I want to not die"** → Spearman (Hyper Body + max HP scaling)
- **"I want to feel strong fast"** → Fighter or Bandit (early burst)
- **"I like being needed"** → Cleric (every party wants you)
- **"I want to AoE packs"** → F/P mage (Poison Mist + Fire Arrow)
- **"I want to KS bosses"** → Hunter/Crossbowman (Strafe range) or
  Assassin (Lucky Seven + Shadow Partner)
- **"I'm a meso-maker"** → Chief Bandit (Meso Explosion is the single
  highest meso-conversion skill in the game)

<h2 id="classic-world-build-rules">Classic World build rules</h2>

Every build on this page assumes four Classic-World-specific facts:

### 1. HP washing is removed

In v83 GMS, Night Lords, Bishops, and Buccaneers washed MP into HP
to survive high-HP bosses. **Classic World removed this entirely**
during the 2nd playtest. Your HP is fixed at whatever your base HP
table gives at each level — you can't wash around it.

**Build impact:** Mages (especially Cleric → Priest) can no longer
plan around "I'll wash later for Shao/Zakum". Spearmen with Hyper
Body remain the most survivable class in CW because that's the only
HP multiplier left in the game.

### 2. Earring crit damage line

CoT 2 added a `crit damage` stat line to earring items. Earrings are
now a damage upgrade in addition to being a stat stick.

**Build impact:** every build should farm earrings aggressively. In
v83 earrings were an afterthought for warriors; in CW they're worth
scrolling with 60% stat scrolls across every class.

### 3. Elemental damage multiplier is 1.25×, not 1.5×

Playtest-verified by msclassic.wiki moderator Lunitidal: Classic
World's elemental weakness multiplier is 1.25× instead of v83's 1.5×.

**Build impact:** F/P and I/L builds that previously planned around
"always match element to mob weakness" shift toward raw MATK. Both
elementalist branches remain viable but their "farm element X area"
specialization is less rewarded than in v83.

### 4. Most v83 BiS gear is NOT in FA

Zakum, Orbis, Leafre, Omega Sector, Phantom Forest, NLC, Mu Lung,
and El Nath Lion King's Castle are **not accessible in Founder's
Access**. See the [Gearing guide's "What's not in FA"
section](/gearing-30-plus#what-isnt-in-fa-yet) for the full checklist.

**Build impact:** Zakum Helmet, Stormcaster Gloves, Von Leon's scrolls,
Dragon-tier weapons — all unavailable until Grand Launch. Every build
below assumes you're using scrolled L50-70 CoT 2 gear as the FA
endgame kit.

<h2 id="warrior-fighter">Fighter</h2>

<p><strong>Branch pitch:</strong> fast-paced melee DPS with ATK speed boost
and the highest crit uptime of any warrior. Final Attack and Power Guard
make this the most interactive 2nd-job warrior playstyle.</p>

<div class="callout callout--framing">
<strong>Full deep dive:</strong> we have a <strong>dedicated Fighter
build guide</strong> covering sword vs axe weapon ladder L10-70 with
datamine ATK numbers, 1H+shield vs 2H decision math, scrolling
philosophy for Fighter's dual-slot setup, armor + shield progression,
and the bossing-readiness verdict.
<strong><a href="/fighter-build">Read the full Fighter guide →</a></strong>
</div>

### SP priority (2nd job)

| Priority | Skill | Target level |
| --- | --- | --- |
| 1 | Weapon Mastery (Sword/Axe depending on weapon) | 20 (max) |
| 2 | Weapon Booster | 20 (max) |
| 3 | Final Attack | 20 (max) at a steady pace |
| 4 | Power Guard | 20 (max) once Final Attack is online |
| 5 | Rage (party buff) | 20 (max) |
| 6 | Sword/Axe Booster is the first Lv 30 skill to max | — |

**Note:** the top-upvoted critique on the xBucc Reddit build cluster
pointed out that "all Warrior builds max both weapon mastery and
booster but skip Final Attack entirely" — community consensus disagrees.
Final Attack is a free damage multiplier on auto-attacks; max it.

### Stat allocation

- **STR per level:** +5 (full STR)
- **DEX per level:** maintain character level in DEX only if you need
  the ACC against evasive bosses (Shade, Mushmom at low levels).
  Otherwise pure STR.

**Why pure STR works in CW:** HP wash removal doesn't affect Warriors
much because the warrior HP table is already generous. Pure STR for
raw damage.

### Playstyle + weapon preference

- 1H + shield for scroll real estate, OR 2H for raw damage
- See the [Fighter weapon ladder](/gearing-30-plus#weapons-by-class)
  for per-bracket picks (Cutlus → Jeweled Katar → Neocora →
  Red Katana)
- Primary training: [Training routes guide](/training-routes#levels-30-40-the-second-job-power-spike)
  for L30-70 maps

<h2 id="warrior-page">Page</h2>

<div class="callout callout--framing">
<strong>Full deep dive:</strong> we have a <strong>dedicated Page
build guide</strong> covering the Threaten + Power Guard tank
identity, sword vs BW (blunt weapon) decision math, SP priority,
and the honest CW endgame tanking question (HP wash removal hurts
Page harder than Fighter).
<strong><a href="/page-build">Read the full Page guide →</a></strong>
</div>

<p><strong>Branch pitch:</strong> the tanky warrior with the party support
side-dish (Threaten, Power Guard, and later Combo Attack scaling).
Lower raw DPS than Fighter but survives everything.</p>

### SP priority (2nd job)

| Priority | Skill | Target level |
| --- | --- | --- |
| 1 | Weapon Mastery (Sword or BW) | 20 (max) |
| 2 | Weapon Booster | 20 (max) |
| 3 | Threaten | 20 (max) — Page's party contribution |
| 4 | Power Guard | 20 (max) |
| 5 | Final Attack | 20 (max) |
| 6 | Shield Mastery is maxed as last 2nd-job skill | — |

**Contested:** xBucc Reddit top-upvoted critique (32 points) argued
Page builds skip HP recovery in favor of Precise Strikes; hybrid
builds give up Final Attack. The community doesn't have a settled
answer. **Recommendation:** max Weapon Mastery, Booster, and Threaten
first (uncontested), then let your play style decide between HP
Recovery (solo-friendly) vs Final Attack (party-friendly).

### Stat allocation

- **STR per level:** +5 (full STR)
- Same reasoning as Fighter.

### Playstyle + weapon preference

- Sword or BW (Blunt Weapon). Sword hits faster, BW has higher base
  damage. Classic World L50 pick: Lion's Fang 2H sword or Golden Mole
  2H blunt — see [weapon ladder](/gearing-30-plus#level-50-60-first-real-investment).
- Primary training route: same as Fighter.

<h2 id="warrior-spearman">Spearman</h2>

<div class="callout callout--framing">
<strong>Full deep dive:</strong> we have a <strong>dedicated Spearman
build guide</strong> covering Hyper Body as the identity party-buff,
spear vs polearm decision, SP priority, and why CW's HP wash removal
makes Spearman MORE valuable (not less) at every party.
<strong><a href="/spearman-build">Read the full Spearman guide →</a></strong>
</div>

<p><strong>Branch pitch:</strong> the party HP buffer (Hyper Body) and
the only class that can push your effective HP ceiling in a HP-wash-free
Classic World. Mandatory party invitation at Lv 70+.</p>

### SP priority (2nd job)

| Priority | Skill | Target level |
| --- | --- | --- |
| 1 | Spear/Polearm Mastery (match your weapon) | 20 (max) |
| 2 | Spear/Polearm Booster | 20 (max) |
| 3 | **Hyper Body** | 30 (max) — this is why your party is friendly |
| 4 | Iron Will (party DEF buff) | 20 (max) |
| 5 | Final Attack | 20 (max) |
| 6 | Spear Crusher / Polearm Crusher is the Lv 30 skill | — |

**Note:** Hyper Body is your identity. Max it as fast as the skill
tree lets you. In CW with no HP wash, Hyper Body is the ONLY way to
multiply a party's HP ceiling, which means you're perma-wanted for
Jr. Balrog, Zombie Mushmom, and (post-launch) Zakum runs.

### Stat allocation

- **STR per level:** +5 (full STR)
- Same reasoning as other Warriors — the no-HP-wash change doesn't
  hurt Warriors because their base HP table is generous.

### Playstyle + weapon preference

- Spear (faster) or Polearm (bigger AoE via Crusher skills)
- Classic World L50 picks: Serpent's Tongue spear or The Nine Dragons
  polearm — see [weapon ladder](/gearing-30-plus#level-50-60-first-real-investment).
- Primary training: solo through L50, then party-dominant from
  Hyper Body onward.

<h2 id="magician-fire-poison">Fire / Poison</h2>

<div class="callout callout--framing">
<strong>Full deep dive:</strong> we have a <strong>dedicated Wizard
build guide</strong> covering F/P and I/L side-by-side with CW's
1.25x elemental math, SP priority for both branches, Magic Guard
MP-shield mechanics, freeze-lock vs poison-DOT identity question,
and the grind-rotation verdict for each.
<strong><a href="/wizard-build">Read the full Wizard guide →</a></strong>
</div>

<p><strong>Branch pitch:</strong> AoE damage over time via Poison Mist +
single-target burst via Fire Arrow. Best mage for grinding dense
spawn maps; weakest against undead content (which includes Shade and
Zombie Mushmom).</p>

### SP priority (2nd job)

| Priority | Skill | Target level |
| --- | --- | --- |
| 1 | MP Eater | 20 (max) — your mana recovery |
| 2 | Meditation | 20 (max) — party MATK buff |
| 3 | Fire Arrow | 30 (max) — single-target DPS |
| 4 | Poison Mist | 20 (max) — AoE farm skill |
| 5 | Spell Mastery | 20 (max) |
| 6 | Slow (CC) | leftover SP |

### Stat allocation

- **INT per level:** +5 (full INT) if you're not planning to
  cross-wear LUK gear
- **INT:LUK split 4:1:** optional for mages who want to use LUK-
  requirement wand accessories without penalty. Classic World's
  no-HP-wash removes most reasons to go hybrid.

### Classic World elemental caveat

Fire does **1.25× against ice-weak mobs**, not 1.5× — so your
Fire Arrow damage curve against ice-weak content is less steep than
v83 numbers suggest. Still worth maxing; just don't plan a build
around "I'll always farm fire-weak zones."

### Playstyle + weapon preference

- Wand (faster cast) or Staff (higher MATK)
- Classic World L50 picks: Cromi (wand) or Thorns (staff, L55) —
  see [weapon ladder](/gearing-30-plus#level-50-60-first-real-investment).
- Primary training: dense-spawn maps where Poison Mist AoE pays off.
  Burnt Land for L30-40, Golem's Temple L50+.

<h2 id="magician-ice-lightning">Ice / Lightning</h2>

<p>See the <strong><a href="/wizard-build#fp-vs-il">Wizard
deep-dive guide</a></strong> for the full F/P-vs-I/L decision math,
freeze-lock mechanics, Thunder Bolt AoE discussion, and the slight
CW-specific ice-weak map advantage.</p>

<p><strong>Branch pitch:</strong> freeze-and-blast via Cold Beam / Ice
Strike + raw single-target via Thunderbolt. The classic grinder — slow
clear but reliably safe thanks to Ice freeze lock.</p>

### SP priority (2nd job)

| Priority | Skill | Target level |
| --- | --- | --- |
| 1 | MP Eater | 20 (max) |
| 2 | Meditation | 20 (max) |
| 3 | Cold Beam | 30 (max) — freeze mobs |
| 4 | Thunderbolt | 20 (max) — raw single-target |
| 5 | Spell Mastery | 20 (max) |
| 6 | Teleport Mastery (if available) | leftover |

### Stat allocation

Same as F/P: pure INT or 4:1 INT:LUK.

### Playstyle + weapon preference

- Cold Beam freeze lock is Ice/Lightning's identity. The freeze-
  then-DPS loop makes this the safest grinding mage branch, especially
  solo.
- Weapon picks: same as F/P (wand or staff, same shop progression).
- Primary training: anywhere Cold Beam's freeze stabilizes a crowded
  map. Monkey Swamp, Golem's Temple.

<h2 id="magician-cleric">Cleric</h2>

<div class="callout callout--framing">
<strong>Full deep dive:</strong> we have a <strong>dedicated Cleric
build guide</strong> covering the HP wash removal reality (hitting
endgame Priest/Bishop hardest), Heal culture + undead grind rotations,
SP priority (Heal/Teleport/Invincible/Bless/Holy Arrow), armor + wand
progression, and the mandatory-party-invite verdict.
<strong><a href="/cleric-build">Read the full Cleric guide →</a></strong>
</div>

<p><strong>Branch pitch:</strong> party support (Heal, Bless) + undead
specialist via Holy Arrow. The most-wanted party invite in the game.
Essential for Shade (999 evasion ghost boss) and Zombie Mushmom.</p>

### SP priority (2nd job)

| Priority | Skill | Target level |
| --- | --- | --- |
| 1 | Heal | 30 (max) — party survival + undead damage |
| 2 | Teleport | 20 (max) — mobility |
| 3 | Invincible | 10 (max) — damage reduction self-buff |
| 4 | Bless | 20 (max) — party ACC + ATK buff |
| 5 | Holy Arrow | 20 (max) — primary single-target vs undead |
| 6 | MP Eater + Meditation at max | — |

**Note:** Heal double-dips as undead damage. Against Shade and Zombie
Mushmom, your maxed Heal is doing more DPS than most non-Cleric
builds. This is the identity of the branch.

### Stat allocation

- **INT per level:** +5 (full INT)
- Cleric's Heal scales off INT; LUK contributes less than other
  mage branches. Pure INT is correct here.

### Classic World impact: HP wash removal hurts, but not fatally

Future-Priest Cleric players in v83 famously washed MP into HP to
survive Horntail. CW's HP wash removal caps your late-game
survivability. Practical impact: Classic World Clerics will be
party-dependent for high-HP content more than v83 Clerics were. In
Founder's Access this isn't an issue (no Horntail yet) but worth
knowing for Grand Launch.

### Playstyle + weapon preference

- Wand with +INT scrolled hard. Classic World L50: Cromi wand.
- Primary training: KPQ for L21-30, Golem's Temple L50+ with a party
  (your Bless + Heal makes KPQ parties mandatory-invite you).

<h2 id="bowman-hunter">Hunter</h2>

<p><strong>Branch pitch:</strong> single-target Strafe DPS + AoE via
Arrow Bomb. The classic KSer for Mushmom and Jr. Balrog thanks to
Strafe's range and burst.</p>

<div class="callout callout--framing">
<strong>Full deep dive:</strong> we have a <strong>dedicated Archer
build guide</strong> covering Hunter and Crossbowman side-by-side with
datamine ATK numbers L10-70, SP priority for both branches, pure DEX
allocation math, arrows + Soul Arrow scrolling philosophy, armor
progression, and the bossing + KS verdict.
<strong><a href="/archer-build">Read the full Archer guide →</a></strong>
</div>

### SP priority (2nd job)

| Priority | Skill | Target level |
| --- | --- | --- |
| 1 | Bow Mastery | 20 (max) |
| 2 | Bow Booster | 20 (max) |
| 3 | Final Attack: Bow | 20 (max) |
| 4 | **Arrow Bomb** | 30 (max) — AoE farming |
| 5 | Soul Arrow: Bow | 20 (max) — no-arrow play |
| 6 | Power Knock-Back | leftover |

**Note:** the xBucc build cluster acknowledged the Archer section was
wrong in the original Reddit post and amended it in the linked
spreadsheet. **Our recommendation:** Bow Mastery + Booster first,
then Arrow Bomb for farming, Final Attack for sustained DPS.

### Stat allocation

- **DEX per level:** +5 (full DEX)
- Some old guides suggest hybrid STR to equip higher-level bows
  earlier — unnecessary in Classic World where DEX requirements on
  weapons stay within character-level reach.

### Playstyle + weapon preference

- Bow. Classic World bow ladder: Red Viper L35 → Vaulter 2000 L40 →
  Olympus L50 → Asianic Bow L60 → Red Hinkel L70 (
  [weapon ladder](/gearing-30-plus#level-30-40-first-2nd-job-kit)).
- Primary training: Fire Boar maps L30-40, Monkey Swamp III L40-50,
  Golem's Temple L50-60.

<h2 id="bowman-crossbowman">Crossbowman</h2>

<p><strong>Branch pitch:</strong> higher raw damage per shot than
Hunter at the cost of attack speed. Iron Arrow pierce AoE is uniquely
good against stacked mobs (think Zombie Mushmom + adds).</p>

<p>See the <strong><a href="/archer-build#hunter-vs-crossbowman">Archer
deep-dive guide</a></strong> for the full Hunter-vs-Crossbowman decision
math, Iron Arrow pierce mechanics, and L10-70 crossbow progression.</p>

### SP priority (2nd job)

| Priority | Skill | Target level |
| --- | --- | --- |
| 1 | Crossbow Mastery | 20 (max) |
| 2 | Crossbow Booster | 20 (max) |
| 3 | Final Attack: Crossbow | 20 (max) |
| 4 | **Iron Arrow** | 30 (max) — pierce AoE |
| 5 | Soul Arrow: Crossbow | 20 (max) |
| 6 | Power Knock-Back | leftover |

### Stat allocation

Same as Hunter: pure DEX.

### Playstyle + weapon preference

- Crossbow. Classic World ladder: Eagle Crow L30 → Silver Crow L45 →
  Rower L50 → Golden Crow L60 → Gross Jaeger L70.
- Primary training: Iron Arrow shines on dense multi-mob maps. Golem's
  Temple and later Taurospear Sanctuary Entrance IV.
- Boss identity: Iron Arrow against Zombie Mushmom + her baby adds is
  class-defining.

<h2 id="thief-bandit">Bandit</h2>

<div class="callout callout--framing">
<strong>Full deep dive:</strong> we have a <strong>dedicated Bandit
build guide</strong> covering Savage Blow + Steal, Fast vs Faster
dagger speed class decision math, pure LUK allocation, and a
<strong>Chief Bandit Meso Explosion preview</strong> (3rd job, Grand
Launch) that shapes your 2nd-job investment now.
<strong><a href="/bandit-build">Read the full Bandit guide →</a></strong>
</div>

<p><strong>Branch pitch:</strong> melee thief with the Savage Blow combo
+ **Meso Explosion** (Chief Bandit at 3rd job) which is the single
highest meso-conversion ability in Maple. In Founder's Access you
can't 3rd-job yet, but Bandit's 2nd-job kit still carries boss fights.</p>

### SP priority (2nd job)

| Priority | Skill | Target level |
| --- | --- | --- |
| 1 | Dagger Mastery | 20 (max) |
| 2 | Dagger Booster | 20 (max) |
| 3 | **Savage Blow** | 30 (max) — DPS |
| 4 | Steal | 10 — the fun skill |
| 5 | Haste (party speed+jump buff) | 20 (max) |

### Stat allocation

- **LUK per level:** +5 (full LUK)
- DEX = character level if you need ACC against high-evasion content
  (which in FA means mostly Shade). Otherwise pure LUK.

### Playstyle + weapon preference

- Dagger. Classic World ladder: Halfmoon Zamadar L35 → Gephart L40 →
  Shinkita L50 → Deadly Fin L60 → Kandine L70.
- Primary training: Savage Blow's single-target focus means you want
  dense maps where you can chain. Zombie Lupin at Monkey Swamp III
  is the Bandit's sweet spot L40-50.
- Boss identity: Chief Bandit Meso Explosion ends every boss fight.
  Even at 2nd job Bandit, Savage Blow burst gives you KS potential
  on Mushmom.

<h2 id="thief-assassin">Assassin</h2>

<p><strong>Branch pitch:</strong> ranged thief with Lucky Seven multi-hit
+ throwing stars for consistent DPS at any range. High-skill-ceiling,
high-reward.</p>

<div class="callout callout--framing">
<strong>Full deep dive:</strong> we have a <strong>dedicated 593-line
Assassin build guide</strong> covering the claw ladder L10-70, throwing
star progression, the Sauna Robe + Dark Avenger overall math, pure-LUK
vs hybrid stat allocation, the 25-DEX advancement question, and
Classic-World-specific changes to claw DEX requirements.
<strong><a href="/assassin-build">Read the full Assassin
guide →</a></strong>
</div>

### Hub-level summary

| Topic | TL;DR |
| --- | --- |
| **SP priority** | Claw Mastery → Claw Booster → Lucky Seven (max) → Dark Sight (max) → Final Attack |
| **Stat allocation** | Pure LUK OR DEX = character level (CW's reduced claw DEX reqs make pure LUK more viable than in v83) |
| **Primary weapon** | Claw + throwing stars. Ilbi/Hwabi stars are the endgame grind targets |
| **Primary armor** | Sauna Robe L30 → Dark Avenger overall L35-59 (Thief overall gap continues to L60+) |
| **Boss identity** | Avenger with Shadow Partner clears Mushmom + Jr. Balrog reliably |

**Top-upvoted critique from the Reddit builds cluster (39 points):**
Assassin builds that do NOT max Dark Sight are objectively wrong.
Dark Sight is your survivability skill — max it.

### Classic World specific caveat

CW's claw DEX requirement is `character level` (NOT `character level
+ 10` like v83 originally). This means **pure LUK is more viable in
CW than in v83** — you can equip your level-appropriate claw without
needing to pump DEX. The dedicated guide covers this at length.

<h2 id="faq">FAQ</h2>

**Which class is the strongest in FA?**

No single answer. For boss drops: Hunter / Crossbowman for Strafe burst.
For party value: Spearman (Hyper Body) and Cleric (Heal/Bless). For
meso-making at the Lv 100 cap: Chief Bandit via Meso Explosion once
you hit 3rd job (post-launch). For solo clear speed: F/P mage or
I/L mage AoE.

**I accidentally put APs in the wrong stat. Can I reset?**

AP reset scrolls exist in CW's cash shop and GM event rewards. If
you've only miscounted by 5-10 points, your character is still fine —
just stop misallocating going forward. Resetting is only worth the
cash shop cost for 20+ wasted APs.

**Should I max my 2nd job skill before 3rd job unlocks?**

Yes if you're planning for Grand Launch. 3rd job unlocks at Lv 70
in v83 base. 2nd job SP is capped so you'll naturally be able to
max your core skills before 3rd job without wasting SP. The question
is only about the ORDER within 2nd job, which each branch section
covers.

**The xBucc Reddit builds look wrong to me. What's the authoritative
answer?**

There isn't one. The xBucc builds were the biggest community-authored
reference going into Founder's Access, but as noted in our
[community resources page](/community-resources) (which has the full
xBucc Reddit cluster breakdown with the top-upvoted critique counts),
multiple sections drew high-upvoted critiques (Archer builds were
acknowledged wrong, Magician Magic Claw max order was contested,
Assassin Dark Sight omission was flagged). Use xBucc as a starting
point for comparison, not as authority. Our per-branch build
priorities above correct the known errors.

**Does HP washing being removed mean I shouldn't play Cleric/Bishop?**

No. HP wash removal makes Cleric → Priest less survival-focused in
late-game bosses, but Priest + Shining Ray on undead and party Bless
remain top-tier contributions. In FA with no Horntail, HP wash
isn't a factor at all — Clerics are perfectly viable.

**I want to 3rd job as [specific class] — what should I know?**

3rd job unlocks at Lv 70 in base v83 and should carry forward in
Classic World, but **3rd job content is held for Grand Launch** per
Nexon's Oct 3 release notes. In FA, you cap your 2nd job skills and
hold the SP that'll go into 3rd job skills until Grand Launch.
Specific 3rd job build priorities are post-launch content; we'll
update this guide when 3rd job unlocks.

**Where do I find my job's SP skill book in-game?**

Each 2nd-job advancement NPC in Victoria Island hands you a skill
book on job advancement. If you missed it, visit your 2nd-job
instructor NPC and talk through all dialog options. SP you've already
spent cannot be refunded without an AP reset scroll (which is
different from an SP reset).

**Will this guide update with 3rd job content post-launch?**

Yes. When Grand Launch opens 3rd job advancement, each branch section
gets a 3rd-job SP priority addition. Last reviewed 2026-10-11.
