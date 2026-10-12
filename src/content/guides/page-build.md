---
title: "Page Build: Threaten, Power Guard, and the Tank Warrior Identity"
description: "Comprehensive Page deep-dive for MapleStory Classic World. Threaten mob-debuff mechanics, Power Guard reflect math, SP priority (Weapon Mastery/Booster/Threaten/Power Guard/Final Attack), 1H sword or BW with shield, pure STR allocation, armor progression, scrolling, and the tank-focused party value verdict."
lastUpdated: "2026-10-11"
tags:
  - page
  - warrior
  - tank
  - builds
  - post-30
status: "Live - Founder's Access window Oct 6 to Oct 20, 2026"
theme: "perion"
decorations: false
eyebrow: "Class Build Deep Dive"
heading: "Page Build"
tagline: "The tank warrior branch. Threaten debuffs mobs, Power Guard reflects physical damage, pure STR with 1H sword or blunt weapon + shield. The 'make bosses easier for your party' identity."
verificationStatus: "launch-verified"
verificationNote: "Weapon ATK + speed data from src/data/db/items.json datamine. Blunt weapon (BW) tier data cross-referenced. Classic World mechanics (HP wash removal relevance to tanks) sourced from Nexon Oct 3 release notes + msclassic.wiki. SP priority follows community consensus. Armor progression shared with Fighter (same Warrior class)."
sourceSlugs:
  - nexon-founders-access-release-notes
  - osmsdataexplorer
  - ayumilove-v83-warrior
  - reddit-xbucc-complete-builds
  - reddit-everything-changed-cot2
toc:
  - { href: "#tldr", label: "TL;DR" }
  - { href: "#the-page-identity", label: "The Page identity" }
  - { href: "#sword-vs-bw", label: "Sword vs BW" }
  - { href: "#sp-priority", label: "SP priority" }
  - { href: "#ap-allocation", label: "AP allocation" }
  - { href: "#weapon-progression", label: "Weapons L10-70" }
  - { href: "#armor-and-scrolling", label: "Armor + scrolling" }
  - { href: "#tank-math", label: "Tank math" }
  - { href: "#faq", label: "FAQ" }
---

<h2 id="tldr">TL;DR</h2>

- **Stat allocation:** pure STR. Same as Fighter and Spearman.
- **Sword or blunt weapon (BW):** sword is Fast speed, BW is Slow
  speed. Sword wins DPS by a wide margin. **Pick sword unless you
  specifically want BW animations** or plan to go White Knight
  (3rd job) which has BW-specific skills.
- **SP max order (2nd job):** Weapon Mastery (20) → Weapon Booster
  (20) → Threaten (20) → Power Guard (20) → Final Attack (20).
- **The CW tank question:** HP wash removal makes tanking harder
  because every class has lower effective HP. Page's Power Guard
  reflect doesn't compensate for the lost HP ceiling. **At Grand
  Launch endgame, Page viability vs. Zakum is one of the hot debates.**
  At FA cap, Page is fine.

<h2 id="the-page-identity">The Page identity: debuff + reflect</h2>

Page is Classic World's "tank" warrior branch, but **"tank" doesn't
mean what WoW/FF players expect**. Page doesn't absorb damage like a
protection paladin — Page **reduces mob damage output via Threaten**
and **reflects physical damage via Power Guard**.

### Threaten mechanics

| Stat | Effect |
| --- | --- |
| **Weapon ATK** | Target mobs lose 20% WATK |
| **Weapon DEF** | Target mobs lose 20% WDEF |
| **Range** | AoE around the Page |
| **Duration** | 30 seconds max rank |
| **Max targets** | 6 mobs |

Translation: cast Threaten on a mob pack and they hit the party
20% softer AND take 20% more damage from party attacks. Hyper
Body (Spearman) adds HP; Threaten subtracts incoming damage.

### Power Guard mechanics

- Reflects **40% of incoming physical damage** back at attacker
- Reflected damage ignores enemy DEF
- Lasts 10 minutes per cast

In practice, Power Guard adds ~5-10% damage to your DPS output just
by taking hits. Not a replacement for actual DPS skills, but it's a
free damage multiplier.

### Why this makes Page a party-friendly tank

- Threaten reduces mob WATK = party takes less damage
- Threaten reduces mob WDEF = party deals more damage
- Power Guard reflects back passively = free DPS contribution
- Page tanks the frontline positioning (same as any warrior)

**Practical takeaway:** Page is the "I make the fight easier for
everyone" class. Not flashy, not top DPS, but every party notices
when you're there.

<h2 id="sword-vs-bw">Sword vs BW (blunt weapon)</h2>

### Raw ATK + speed comparison

| Lv | 1H Sword | ATK · Speed | 2H BW | ATK · Speed |
| --- | --- | --- | --- | --- |
| 30 | [Gladius](/items/1302008) | 47 · Fast | [Mithril Maul](/items/1422004) | 52 · Normal |
| 35 | [Cutlus](/items/1302010) | 55 · Fast | [Sledgehammer](/items/1422005) | 60 · Slow |
| 40 | [Traus](/items/1302012) | 60 · Fast | [Titan](/items/1422006) | 65 · Slow |
| 50 | [Jeweled Katar](/items/1302015) | 70 · Fast | [Golden Mole](/items/1422007) | 75 · Slow |
| 60 | [Neocora](/items/1302017) | 77 · Fast | [The Blessing](/items/1422008) | 85 · Slow |
| 70 | [Red Katana](/items/1302018) | 87 · Fast | [Gigantic Sledge](/items/1422009) | 95 · Slow |

**Observation:** BW has +5-10 ATK over 1H sword at every bracket but
is **2 speed classes slower** (Fast = 5 vs Slow = 7). Speed class
difference is massive — Fast attacks ~2x per second vs Slow ~1x per
second.

### The verdict

**Pick 1H sword + shield.** Reasons:
- Fast attack speed = roughly 2x the hits-per-second of BW Slow
- Fast speed = faster Threaten reapplication (combo chaining)
- Shield slot = +5 scroll slots for ATT or STR

**Pick BW** only if you specifically plan to go **White Knight (3rd
job)** which has BW-specific charge skills (Fire/Ice/Lightning
Charge). Even then, BW is a late-game pivot — you can start with
1H sword at 2nd job and switch when needed.

<h2 id="sp-priority">SP priority (2nd job Page)</h2>

| Order | Skill | Max | Why |
| --- | --- | --- | --- |
| 1 | **Weapon Mastery (Sword OR BW)** | 20 | Damage floor cap. |
| 2 | **Weapon Booster** | 20 | Attack speed +2 for 200 seconds. |
| 3 | **Threaten** | 20 | **The identity debuff**. -20% WATK/WDEF on 6 mobs. |
| 4 | **Power Guard** | 20 | 40% physical reflect. Free DPS tax on attackers. |
| 5 | **Final Attack** | 20 | 40% proc bonus hit. Universal warrior tech. |
| 6 | **Slash Blast** | leftover | AoE sword slash. Niche. |

### Threaten timing

Max Threaten by Lv 55-60 if following priority. **The moment
Threaten is maxed, your bossing value jumps** — you can debuff
Jr. Balrog's physical attacks, making the whole party take less
damage.

### Power Guard note

Power Guard scales with your maximum HP. In Classic World (post-HP-wash),
your HP ceiling is lower than v83, so Power Guard reflects slightly
less damage. Still worth maxing for the uptime and free DPS.

<h2 id="ap-allocation">AP allocation: pure STR</h2>

Same as Fighter / Spearman. See
[Fighter guide AP section](/fighter-build#ap-allocation).

<h2 id="weapon-progression">Weapon progression L10-70</h2>

### 1H Sword path (recommended)

See the [Fighter guide 1H sword progression](/fighter-build#1h-sword-path)
— identical shop ladder, since Fighter and Page share the sword
weapon pool.

### 2H BW path

| Lv | Pick | ATK | Speed | Source |
| --- | --- | --- | --- | --- |
| 15 | [Heavy Mace](/items/1422001) | 40 | Slow | NPC shop |
| 20 | [Square Hammer](/items/1422002) | 42 | Slow | NPC shop |
| 30 | [Mithril Maul](/items/1422004) | 52 | Normal | drop: [Evil Eye](/mobs) |
| 35 | [Sledgehammer](/items/1422005) | 60 | Slow | drop: [Iron Hog](/mobs/24) |
| 40 | [Titan](/items/1422006) | 65 | Slow | drop: [Lupin](/mobs/35) |
| 50 | [Golden Mole](/items/1422007) | 75 | Slow | NPC shop |
| 60 | [The Blessing](/items/1422008) | 85 | Slow | NPC shop |
| 70 | [Gigantic Sledge](/items/1422009) | 95 | Slow | NPC shop |

### Shields

Same as Fighter. See
[Fighter shield progression](/fighter-build#shield-progression).

<h2 id="armor-and-scrolling">Armor + scrolling</h2>

Same Warrior armor as Fighter. See
[Fighter armor section](/fighter-build#armor-progression) for the
full tables and Zakum Helmet caveat.

### Page-specific scrolling priority

1. **Weapon** — 60% ATT scrolls. 7 slots on 1H sword.
2. **Shield** — 60% ATT scrolls. 5 slots. Same scroll pool as weapon.
3. **Gloves** — 60% ATT. 5 slots.
4. **Top + Bottom** OR **Overall** — 60% STR.
5. **Hat** — 60% STR.

### Tank-focused alternative scrolling

Instead of maxing ATT on everything, some Page players scroll
**MDEF overalls** for Zakum (gated for Grand Launch) and
**earring/overall WDEF** scrolls for Zombie Mushmom tanking.
This is a late-game-specialist pivot — not recommended for FA play.

<h2 id="tank-math">Tank math: Page in FA bossing</h2>

### FA roster boss performance

- **[Jr. Balrog](/bosses/jr-balrog)** (Lv 55) — **Page's premier
  fight**. Threaten debuffs Jr. Balrog's physical attacks; Power
  Guard reflects his melee hits. Party DPS cleans up safely.
- **[Mushmom](/bosses/mushmom)** (Lv 60) — Fine. Page damage is
  medium but survivability is highest.
- **[Zombie Mushmom](/bosses/zombie-mushmom)** (Lv 65) — Page can
  front-line tank ZMM while the party DPS from range. Threaten +
  Power Guard rotation is strong here.
- **[Shade](/bosses/shade)** (Lv 47) — 999 evasion wall. Page can't
  hit her solo. Bring a Cleric.

### The CW endgame question

<div class="callout callout--warning">
<strong>Grand Launch endgame concern:</strong> Classic World's HP
wash removal reduces every class's HP ceiling by ~2-3x compared to
v83. Page's role was traditionally "tanks Zakum via massive HP pool
+ Power Guard reflect." Without HP wash, Page's HP pool at Lv 120
is ~5,000-6,000 vs. v83's ~10,000+. <strong>Whether Page can still
reliably tank Zakum at Grand Launch is a top community debate</strong>.
Monitor the <a href="/community-resources">r/Maplestory Classic World
threads</a> as we approach Oct 21.
</div>

### The 2nd-job FA takeaway

For FA play (Lv 70 cap), none of the Grand Launch endgame concerns
apply. Page is a strong 2nd-job class with:
- The best party-defensive buffs (Threaten + Power Guard)
- Comparable solo grinding to Fighter
- Mandatory-invite status for Jr. Balrog + Zombie Mushmom parties

<h2 id="faq">FAQ</h2>

**I'm Lv 30 and ready for 2nd-job. Fighter or Page or Spearman?**

- **[Fighter](/fighter-build)**: pure DPS, picks sword/axe, 1H+shield
  or 2H. Max damage output.
- **Page**: tank with Threaten + Power Guard. Best party-defensive
  buffs.
- **[Spearman](/spearman-build)**: Hyper Body party HP buff.
  Mandatory-invite for Zakum.

**Can I do both Threaten AND Power Guard maxed?**

Yes, both are 20-point maxes. The order above gets you there by Lv 60-65.

**Why not pump DEX for ACC?**

Classic World Fighter ACC is already sufficient for every mob you'll
face in FA. Threaten doesn't need to hit — it's a cast-on-mobs skill
that debuffs regardless of your ACC. Pure STR.

**My party keeps dying - is Threaten not working?**

Threaten targets up to 6 mobs. Make sure you're recasting it when
new mobs spawn. Also, Threaten doesn't reduce boss-specific attacks
(e.g. Zombie Mushmom's summoned babies retain their damage).

**Power Guard breaks when I die - how to maintain uptime?**

Keep Power Guard rotating with Weapon Booster (both are 200s self-buffs).
Recast both at the ~150s mark during long boss fights.

**Will this guide update when White Knight unlocks?**

Yes. Page → White Knight (3rd job) → Paladin (4th job) opens at Grand
Launch. Guide gets a 3rd-job section covering Charged Blow,
Fire/Ice/Lightning Charge mechanics, and the BW pivot question.
Last reviewed 2026-10-11.
