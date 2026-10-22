---
# ---------- Core metadata ----------
title: "Meso Farming at 30+: Mob Rotations, NPC-Sell Gems, and Launch Economy"
description: "Where to grind mesos post-2nd-job in MapleStory Classic World. Datamine-verified mob/map rotations per level bracket, the NPC-sellable Etc drops worth keeping, boss-drop income routes, and honest Founder's Access economy notes on inflation and investment timing."
lastUpdated: "2026-10-11"
tags:
  - mesos
  - farming
  - economy
  - post-30
  - founders-access
status: "Live - Founder's Access window Oct 6 to Oct 20, 2026"

# ---------- Layout ----------
theme: "henesys"
decorations: false
eyebrow: "Post-30 Progression"
heading: "Meso Farming at 30+"
tagline: "Mob rotations, NPC-sell gems, and the honest economy answer. Who to kill, where to kill them, and which Etc drops to stop sorting out of your inventory."

# ---------- Verification ----------
verificationStatus: "launch-verified"
verificationNote: "Mob levels, drop tables, and spawn-map data pulled from src/data/db/mobs.json (Classic World FA client datamine via osmsdataexplorer.com + MeowDB community drops). NPC-sell prices from src/data/db/items.json. Meso-per-kill estimates use the traditional MapleStory community-consensus coefficient (level * 1.5 base, ~65% drop rate) which has not been formally re-verified for Classic World - treat per-kill numbers as planning estimates, not guaranteed yields. Launch economy observations (meso inflation Day 5-6, invest-into-gear advice) sourced from Day-5 FA streamers (Samool, MSC Guides). Links to meso.watch for live Free Market pricing per their ToS section 1 (quote small list with credit, no automated scraping)."
sourceSlugs:
  - nexon-founders-access-release-notes
  - osmsdataexplorer
  - eleveny-training-guide
  - msclassic-wiki-victoria-leveling
  - reddit-everything-changed-cot2

# ---------- TOC ----------
toc:
  - { href: "#how-meso-income-works", label: "How meso income works" }
  - { href: "#level-30-40-meso-rotation", label: "L30-40" }
  - { href: "#level-40-50-meso-rotation", label: "L40-50" }
  - { href: "#level-50-60-meso-rotation", label: "L50-60" }
  - { href: "#level-60-70-meso-rotation", label: "L60-70" }
  - { href: "#level-70-100-meso-rotation", label: "L70-100" }
  - { href: "#boss-cooldown-income", label: "Boss cooldowns" }
  - { href: "#npc-sell-gems", label: "NPC-sell gems" }
  - { href: "#fa-launch-economy", label: "FA launch economy" }
  - { href: "#faq", label: "FAQ" }
---

You're Lv 30+, you've seen the price of a decent 60% ATT scroll on the
Free Market, and you've done the math: scrolling a weapon takes real
mesos. This guide walks the Lv 30 to Lv 100 FA cap arc through a pure
income lens — which mob to grind at each level, which Etc drops are
actually worth NPC-selling, which boss cooldowns pay out, and what the
honest launch economy looks like on Day 5-6 of Founder's Access.

<div class="callout callout--framing">
<strong>Companion tools:</strong> use the
<a href="/calculators/mesos">Meso income estimator</a> to project how
many hours a specific grind takes to hit a mesos goal. For live
Free-Market prices on items you plan to buy or sell, see
<a href="https://meso.watch" rel="noopener" target="_blank">meso.watch</a>
(public Twitch-VOD-OCR'd player shop data). This guide covers
<em>farming</em>; those cover <em>planning</em> and <em>trading</em>.
</div>

<div class="callout callout--warning">
<strong>FA map access caveat:</strong> some <em>deeper</em>
Victoria Island subzones that exist in the datamine (e.g.
<strong>Burnt Land V</strong>, Sanctuary Entrance IV, deeper
Golem's Temple floors) may be gated during Founder's Access. If
you can't portal to a map referenced here, step back one subzone
in the chain (Burnt Land IV→III, Sanctuary IV→II/III) — the mob
composition is near-identical. See the full gating catalog at
<strong><a href="/fa-access-status">FA Content Access Status</a></strong>
for the central reference + how to report an issue.
</div>

<h2 id="how-meso-income-works">How meso income works</h2>

Three income streams, roughly in order of volume:

1. **Mob meso drops** — every non-boss mob drops mesos on ~60-70% of
   kills, averaging roughly `level × 1.5` mesos per drop. That means
   grinding a Lv 60 Red Drake nets ~60 mesos per kill on average vs.
   ~45 for a Lv 32 Fire Boar. Density and kill speed usually matter
   more than per-kill size.
2. **NPC-sellable Etc drops** — the stuff that drops looking like
   "Dragon Skin" or "Mushroom Spore" sells to any NPC. Some pieces
   are worth 500-1000+ mesos each — significantly more than the
   meso stack from the same kill. See the [NPC-sell gems](#npc-sell-gems)
   section for the keep list.
3. **Boss drops** — Mushmom, Zombie Mushmom, Jr. Balrog have
   once-per-hour spawn cooldowns per channel. Their drops include
   crafting catalysts (1000m each at NPC), scrolls, and occasional
   rare equipment. Low-volume, high-value supplement to your main
   grind rotation.

<div class="callout">
<strong>What this guide intentionally skips:</strong> Free Market
re-selling (buy cheap, sell high) and crate-item flipping. Those are
real income streams in Classic World — meso.watch exists for exactly
this reason — but they're a different skill set than farming. For live
market research, use <a href="https://meso.watch" rel="noopener"
target="_blank">meso.watch</a> directly.
</div>

### The multiplier line

Classic World ships a `mesoMult` stat (visible in client data) that
stacks server events + buffs on top of base rates. During GM-run
events like Monster Invasion or Up and Up, mob meso drops scale by
whatever Nexon sets the multiplier to. The [Meso income
estimator](/calculators/mesos) has a slot for this — fill it in during
events to see your real yield.

<h2 id="level-30-40-meso-rotation">Level 30-40: The second-job starter rotation</h2>

At Lv 30-40 you're earning meso income to buy your first scroll
investments at Lv 50+. Density beats per-kill size this bracket.

### Top mobs by meso density

| Mob | Lv | Est. mesos/kill | Best map |
| --- | --- | --- | --- |
| [Lupin](/mobs/35) | 37 | ~36 | [Monkey Swamp I](/maps/10003095) |
| [Fire Boar](/mobs/30) | 32 | ~31 | [The Burnt Land I-V](/maps/10004111) |
| [Curse Eye](/mobs/31) | 33 | ~32 | [Sleepy Dungeon V](/maps/10005054) · Forgotten Hollow |
| [Jr. Wraith](/mobs/32) | 34 | ~33 | [Line 2 Area 1](/maps/10003066) |
| [Ligator](/mobs/29) | 31 | ~30 | [The Swamp of Despair I](/maps/10003090) |
| [Lorang](/mobs/36) | 38 | ~37 | [A Look-Out Shed Around the Beach](/maps/10007010) |

### Pick-your-rotation

- **Pure meso focus:** Lupin → [Monkey Swamp I](/maps/10003095). 21 drop
  entries + ~36 mesos per kill. Secondary drops (see
  [NPC-sell gems](#npc-sell-gems)) include Lupin Doll (100m NPC). Best
  raw meso density this bracket.
- **Meso + EXP balance:** Fire Boar across the Burnt Land chain east of
  Perion. Access shakes out as [I](/maps/10004111) → [II](/maps/10004112) →
  [III](/maps/10004113) typically open; **[IV](/maps/10004114) and
  [V](/maps/10004115) have been reported gated in some FA sessions.**
  33 drop entries, Red Viper bow / Steely Throwing Knives occasional
  drops. If IV/V are locked, Burnt Land II or III have equivalent Fire
  Boar density. The
  [Training routes guide](/training-routes#levels-30-40-the-second-job-power-spike)
  covers the EXP side.
- **Wild Boar option:** sub-30 Wild Boars still work at Lv 30-34 if
  you want a low-pressure grind. Hit [Land of Wild Boar](/maps/10004041)
  or [The Land of Wild Boar II](/maps/10004091) — both are hidden
  streets off the Perion-East corridor.
- **Meso + gear farm:** Curse Eye at Forgotten Hollow early maps.
  Mediocre meso rate but you're already there if you're training in
  Forgotten Hollow (which fills the L30-50 gap in CW — see
  [Classic World ground rules](/gearing-30-plus#classic-world-ground-rules)).

### What NOT to grind for mesos

- **Jr. Boogie 1/2** have only 3-5 drop entries and are notorious
  for one-shot-potential at underleveled characters. Low meso + risk =
  skip.
- **Dark Nependeath** isn't in the Classic World datamine at Grand
  Launch (its old id now belongs to Wooden Mask) - don't plan around it.

<h2 id="level-40-50-meso-rotation">Level 40-50: The pre-Zakum climb</h2>

Your scroll stockpile should be growing. 40-50 is where you add Monkey
Swamp III (Zombie Lupins) and the Pig Park iron-hog cycle.

### Top mobs by meso density

| Mob | Lv | Est. mesos/kill | Best map |
| --- | --- | --- | --- |
| [Cold Eye](/mobs/37) | 40 | ~39 | [Tunnel That Lost Light I](/maps/10005076) · [II](/maps/10005077) |
| [Iron Hog](/mobs/24) | 28 | ~27 | [Pig Park II](/maps/10001004) · [Pig Park](/maps/10001003) |
| [Zombie Lupin](/mobs/38) | 41 | ~40 | [Monkey Swamp III](/maps/10003097) · [Tree Dungeon](/maps/10002022) |
| [Wraith](/mobs/43) | 48 | ~47 | [Line 2 Area 3](/maps/10003068) |
| [Clang](/mobs/44) | 49 | ~48 | [Lorang and Clang](/maps/10007030) beach loops |
| [Tortie](/mobs/41) | 46 | ~45 | [Hot Sand](/maps/10007040) |
| [Copper Drake](/mobs/40) | 45 | ~44 | [East Rocky Mountain VII](/maps/10004056) · [Dangerous Valley](/maps/10004101) |

### Pick-your-rotation

- **Pure meso focus:** Iron Hog at [Pig Park II](/maps/10001004). 17
  drop entries + the Lv 42 meso rate make this the best raw income
  grind at this bracket. Bonus: Iron Hog drops Sledgehammer (Lv 35
  Warrior 2H blunt) which sells on the Free Market.
- **Meso + Etc drops:** Zombie Lupin at [Monkey Swamp III](/maps/10003097).
  17 drops including the full Lupin Doll chain. Multiple Etc drops at
  NPC-sellable prices.
- **Line 2 Wraiths:** 48 mesos/kill, dense spawns, and Wraith overalls
  are a known mid-bracket gear drop. Pairs nicely with the
  [L40-50 training route](/training-routes#levels-40-50-party-play).

<h2 id="level-50-60-meso-rotation">Level 50-60: Golems and the Scroll Catalyst gate</h2>

Golem's Temple becomes your sustained grind this bracket. Boss
cooldowns on Mushmom / Jr. Balrog / Zombie Mushmom now return real
drop value.

### Top mobs by meso density

| Mob | Lv | Est. mesos/kill | Best map |
| --- | --- | --- | --- |
| [Stone Golem](/mobs/48) | 56 | ~55 | [Golem's Temple III](/maps/10001105) · [Entrance of Golem's Temple](/maps/10001102) |
| [Dark Stone Golem](/mobs/49) | 58 | ~57 | [Sleepy Dungeon V](/maps/10005054) · [Sleepy Dungeon III](/maps/10005052) |
| [Drake](/mobs/45) | 50 | ~49 | [Drake's Meal Table](/maps/10005090) · [Tunnel That Lost Light I](/maps/10005076) |
| [Croco](/mobs/46) | 52 | ~51 | [Dangerous Croko I](/maps/10003093) · [II](/maps/10003094) |
| [Malady](/mobs/47) | 55 | ~54 | [Forest of Evil I](/maps/10002025) · [II](/maps/10002026) |

### Pick-your-rotation

- **Pure meso focus:** Dark Stone Golem at [Sleepy Dungeon V](/maps/10005054).
  57 mesos/kill, 6 drop entries including Earth Stone which NPC-sells
  for real money. Fastest meso income this bracket, period.
- **Meso + rare drops:** Drake at [Drake's Meal Table](/maps/10005090).
  49 mesos/kill plus [Dragon Skin](/items/4000050) which NPC-sells
  for 200m. One Dragon Skin per ~50 kills averages out to another
  ~4 mesos/kill bonus income.
- **Croco at [Dangerous Croko I](/maps/10003093) / [II](/maps/10003094):**
  The one most people skip because
  the map layout is awkward, but 51 mesos/kill + decent drops. Worth
  trying if the main spots are camped.

<h2 id="level-60-70-meso-rotation">Level 60-70: The Drake-and-Kargo loop</h2>

The sweet spot for meso-per-hour in Founder's Access. Red Drakes and
Wild Kargos stack high meso drops with reasonable kill speed for a
2nd-job character.

### Top mobs by meso density

| Mob | Lv | Est. mesos/kill | Best map |
| --- | --- | --- | --- |
| [Wild Kargo](/mobs/51) | 62 | ~60 | [Wild Kargo's Area](/maps/10005091) · [Drake's Meal Table](/maps/10005090) |
| [Red Drake](/mobs/50) | 60 | ~59 | [Dangerous Valley II](/maps/10004102) |

Yes, just two viable targets. Classic World's Lv 60-70 bracket is
thin on content — see the [FA content ceiling
callout](/gearing-30-plus#what-isnt-in-fa-yet) in the gearing guide
for context on why.

### Pick-your-rotation

- **Wild Kargo + [Drake's Meal Table](/maps/10005090) loop:** multi-mob
  map, high meso density, workable solo-or-duo. 60 mesos/kill with
  Dragon Skin side drops. **Most profitable grind in FA for the 60-70
  range.**
- **Red Drake at [Dangerous Valley II](/maps/10004102):** 59 mesos/kill
  but single-mob spawn means slower per-session clear. Worth the swap
  if Drake's Meal Table is camped.

<h2 id="level-70-100-meso-rotation">Level 70-100: Taurospear territory</h2>

Here's the honest part. The FA datamine has **two** non-boss mobs
above Lv 70 (and one of them, Taurospear, is Lv 75). Lv 80-100
training in FA is **not a meso-farming bracket** so much as a
grind-to-grand-launch holding pattern.

### Top mobs by meso density

| Mob | Lv | Est. mesos/kill | Best map |
| --- | --- | --- | --- |
| [Taurospear](/mobs/53) | 75 | ~73 | [Sanctuary Entrance IV](/maps/10005104) · [III](/maps/10005103) |
| [Tauromacis](/mobs/52) | 70 | ~68 | [Sanctuary Entrance I](/maps/10005101) · [II](/maps/10005102) |

### Pick-your-rotation

- **Taurospear at [Sanctuary Entrance IV](/maps/10005104):** 73 mesos/kill,
  drops [Black Crystal Ore](/items/4020008) (500m NPC) and various
  catalysts. **This is your main income stream L70+ in FA.**
  Taurospear's drop table is the best Etc-side-income combo in FA.
- **Tauromacis at [Sanctuary Entrance I](/maps/10005101) / [II](/maps/10005102):**
  68 mesos/kill, similar drop profile. Easier spawns than Taurospear
  for solo.

### The Lv 80-100 reality check

Beyond Lv 80 your effective meso rate drops because:
- No new mobs appear in the datamine above Lv 75
- Mob levels fall behind your character level → relative EXP
  tanks → you spend more time per mob than you earn
- The [post-30 bosses guide](/bosses-at-30-plus#jr-balrog)
  has the full "what to do at FA cap" writeup

**TL;DR: hard-cap your meso goal at Lv 75 Taurospear farm, bank what
you need, use the rest of your FA time for scrolling + Grand Launch
prep.** The content ceiling is real.

<h2 id="boss-cooldown-income">Boss cooldown income</h2>

Supplement your grind rotation with once-per-hour boss cooldowns.
Each listed boss drops **Crafting Catalysts** which NPC-sell for 1,000
mesos each — a huge single-drop payout compared to Etc drops.

### FA roster boss drops (verified in DB)

| Boss | Lv | Known meso-value drops |
| --- | --- | --- |
| [Mushmom](/bosses/mushmom) | 40 | [Armor Crafting Catalyst](/items/4130002) 1000m · [Mushmom Spore](/items/4000048) 400m |
| [Jr. Balrog](/bosses/jr-balrog) | 80 | [Two-Handed Weapon Crafting Catalyst](/items/4130001) 1000m · scroll drops |
| [Zombie Mushmom](/bosses/zombie-mushmom) | 55 | [Scroll Crafting Catalyst](/items/4130003) 1000m · [Poisonous Mushroom](/items/4000064) 500m · [Two-Handed Weapon Crafting Catalyst](/items/4130001) 1000m |

### Why this matters

A single Zombie Mushmom kill with lucky drops is **worth 2000-3000+
mesos in NPC-sellable Etc alone**, before counting any gear or scroll
drops. On a once-per-hour cooldown with channel-hopping, this scales
to **~15,000-25,000 mesos per hour** of boss hunting across channels —
competitive with grinding, but with a limited daily ceiling.

Pair with your main grind: start at a channel, hit the boss if alive,
grind that channel's main spot for the rest of the hour, then hop and
repeat.

<h2 id="npc-sell-gems">NPC-sell gems (don't sort these out)</h2>

The default Maple inventory sort-and-discard behavior throws out Etc
drops that look like trash but NPC-sell for real money. These are the
pieces to **keep and sell at the nearest NPC**, not auto-dispose.

### High-value Etc drops

| Item | NPC sell | Dropped by | Notes |
| --- | --- | --- | --- |
| [One-Handed Weapon Crafting Catalyst](/items/4130000) | 1,000m | Crimson Balrog (Lv 100) | *Crimson Balrog not in FA — post-launch* |
| [Two-Handed Weapon Crafting Catalyst](/items/4130001) | 1,000m | Zombie Mushmom (Lv 55) | FA boss cooldown target |
| [Armor Crafting Catalyst](/items/4130002) | 1,000m | Mushmom (Lv 40) | FA boss cooldown target |
| [Scroll Crafting Catalyst](/items/4130003) | 1,000m | Zombie Mushmom (Lv 55) | FA boss cooldown target |
| [Rotten Mushmom Cap](/items/4000065) | 600m | Rotten Mushmom | Rare secondary drop |
| [Poisonous Mushroom](/items/4000064) | 500m | Zombie Mushmom (Lv 55) | Common ZMM drop |
| [Black Crystal Ore](/items/4020008) | 500m | Taurospear (Lv 75) | FA L70+ grind bonus income |
| [Mushmom Spore](/items/4000048) | 400m | Mushmom (Lv 40) | Common Mushmom drop |
| [Arwen's Glass Shoe](/items/4001000) | 250m | Fire Boar (Lv 32) | L30-40 grinder bonus |
| [Diamond Ore](/items/4020007) | 240m | Orange Mushroom (Lv 8) | Pre-30 bonus (don't grind for it, but keep if dropped) |
| [Dragon Skin](/items/4000050) | 200m | Drake (Lv 50) | L50-60 grinder bonus |

<div class="callout callout--warning">
<strong>Crafting system caveat:</strong> the Crafting Catalysts above
can also be <em>used</em> in the Classic World crafting system (visible
in Day-5 FA streams: dinofries wand crafting, MoreKenzo page crafting).
If you're planning to craft your own weapons, hold catalysts instead
of NPC-selling. If you're not, 1000m per catalyst is a fine floor
value. Craft recipes are still being catalogued by the community - if
a craft becomes clearly best-in-slot, we'll update this guide.
</div>

### Mob-level Etc keep list by bracket

Rough rule for sorting: **anything priced 100+ at NPC is a keep**. In
practice during a 1-hour grind:
- Lv 30-40 Fire Boar run: watch for **Arwen's Glass Shoe** (250m each)
- Lv 30-40 Lupin run: watch for **Lupin Doll** (100m each)
- Lv 50-60 Drake run: watch for **Dragon Skin** (200m each)
- Lv 70+ Taurospear: watch for **Black Crystal Ore** (500m each)

### What to NPC-sell vs. list on Free Market

As a rule of thumb (meso.watch has the real answer for live prices):
- **Catalysts**: Free Market usually > NPC (demand from crafters)
- **Rare mob drops that gate quests** (Zombie Mushmom Petals etc.):
  Free Market during active questing phases
- **Common ores and mushroom spores**: NPC-sell. Supply is high, FM
  undercutters make listing not worth it.
- **Scroll drops from bosses**: Free Market, always

<h2 id="fa-launch-economy">FA launch economy (Day 5-6 reality check)</h2>

Classic World Founder's Access went live Oct 6, 2026. Four observable
dynamics as of Oct 11 (Day 5-6):

### 1. Meso inflation is already visible

Multiple Day-5 streamers (Samool "STOP HOLDING MESOS", MSC Guides
"Protect yourself from MESO INFLATION") have run content specifically
about this. The pattern mirrors every launch: early-adopters stockpile
mesos → nothing to spend them on → prices on scrolls and endgame-prep
items spike within the first week.

**Practical implication:** don't hoard mesos. Invest them in gear and
scrolls as soon as the item is worth more than its current meso price.

### 2. Botting + goldselling exists

Coppersan's "MapleStory Classic World Has a BIG Problem" video (63K
views in 22 hours as of Day 5) documents observable bot behavior at
mid-level maps. Expect Nexon to run anti-bot sweeps in Week 2.
**Practical implication:** avoid obvious "trade for mesos" offers from
unknown players. Price-check anything you buy against meso.watch.

### 3. The crafting economy drives mid-level demand

Day-5 streamers (dinofries wand crafting, MoreKenzo page crafting)
show that the crafting system is live and generates demand for the
Crafting Catalysts listed above. **Practical implication:** Mushmom
and Zombie Mushmom cooldown runs have real supplier-side income now,
not just the solo-player's "sell to NPC" value.

### 4. No HP wash means no AP-wash potion economy

Classic World removed HP washing. That eliminates an entire
traditional MapleStory income stream (farming/selling Lv 10 Boogie
Potion for MP wash) that doesn't apply here. **Practical
implication:** don't buy or hoard AP wash potions. They're worth
NPC-sell value only.

<h2 id="faq">FAQ</h2>

**What's the realistic mesos/hour at the FA cap?**

Depends heavily on your gear and kill speed. Rough ranges from
Day-5/6 streamer observations + the `level × 1.5 × 0.65` formula:
- Lv 30-40: ~20,000-40,000 mesos/hr (slow kill speed)
- Lv 40-50: ~40,000-70,000 mesos/hr (second-job skills coming online)
- Lv 50-60: ~70,000-100,000 mesos/hr (Golem's Temple density)
- Lv 60-70: ~100,000-150,000 mesos/hr (Wild Kargo + Red Drake)
- Lv 70-100: ~100,000-130,000 mesos/hr (Taurospear plateau)

These are rough — use the [calculator](/calculators/mesos) with your
actual KPM for a tighter estimate.

**Should I run Mushmom + Jr. Balrog + Zombie Mushmom on cooldown
every hour?**

Yes, if you're in their level range. Catalysts at 1000m each stack to
real income over a session. Channel-hop between the three bosses +
your main grind for maximum yield.

**Is it worth leveling just to farm Taurospears for Black Crystal Ore?**

If you're already Lv 75+, Taurospear is your best FA meso grind. If
you're sub-70, don't level JUST for Taurospear — Wild Kargo at 60-70
is comparable per-hour with less risk and faster unlock.

**Do EXP coupons / Meso coupons work in FA?**

As of Day 5, no publicly-confirmed EXP/meso coupon drops from GM events
during FA. Nexon has run Monster Invasion-style events on fixed
schedules (see the [Launch page](/launch) for the full calendar).
Those temporarily multiply EXP/mesos server-wide, but no persistent
coupons appear in player inventories.

**Should I sell Catalysts to NPC or list on Free Market?**

Free Market, usually. meso.watch (link in header) shows live catalyst
prices — on Day 5 they were trading at ~1,500-2,500m vs. the 1,000m
NPC floor. Hold catalysts, list on FM. Only NPC-sell if you need
immediate liquidity.

**What's the fastest meso-saving goal to hit before scrolling?**

Rough budget for a decent L50-60 scroll pass across your main gear:
- Overall: 15-25 scrolls × ~5-10k each = 75-250k mesos
- Weapon: 15-25 scrolls × ~10-20k each = 150-500k mesos
- Gloves: 10-15 scrolls × ~5-10k each = 50-150k mesos

Target: **500k-1M mesos** in your account by Lv 50 so you can scroll
your first keeper gear pass. Beyond that, save for Grand Launch
when more scroll targets open up.

**Why isn't there a "best meso map" tier list?**

Our maps database has spawn data but not per-map meso-density
figures (count × level × drop rate × respawn rate × map size). It's
on the backlog to generate. For now, use the per-mob tables above
and cross-reference with the [Training routes guide](/training-routes)
for map-specific layout notes.

**Does this guide update post-Grand-Launch?**

Yes. When Zakum, Horntail, Orbis, Leafre open up, the mob/map
roster for L70+ changes dramatically and this guide gets a full
pass. Last reviewed 2026-10-11.
