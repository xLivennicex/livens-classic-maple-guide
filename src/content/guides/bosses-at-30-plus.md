---
# ---------- Core metadata ----------
title: "Bosses at 30+: The Founder's Access Progression Ladder"
description: "Every boss you'll actually fight after 2nd job in MapleStory Classic Founder's Access, in level order. King Slime through Zombie Mushmom with datamine-verified stats, access routes, party composition, and the honest 'what drops aren't live yet' caveats."
lastUpdated: "2026-10-11"
tags:
  - bosses
  - post-30
  - party-play
  - founders-access
  - progression
status: "Live - Founder's Access window Oct 6 to Oct 20, 2026"

# ---------- Layout ----------
theme: "sleepywood"
decorations: false
eyebrow: "Post-30 Progression"
heading: "Bosses at 30+"
tagline: "You advanced 2nd job. Now what do you actually fight? Here's every FA-roster boss in level order with HP, access, strategy, and the honest 'is this drop live yet' answer."

# ---------- Verification ----------
verificationStatus: "launch-verified"
verificationNote: "Boss stats (HP, level, EXP, defense, special flags) come from the Classic World FA client datamine via osmsdataexplorer.com and are cross-verified against MeowDB's live-scraped mob pages. FA availability per Nexon's Oct 3 Release Notes which explicitly enumerated the five bosses in-scope at Founder's Access: Mano, Mushmom, Shade, Zombie Mushmom, Jr. Balrog (plus King Slime via Kerning PQ). Access routes and strategy observations draw on FA tester community reports (Eleveny's training tour, msclassic.wiki Oct 8-9 writeups, MapleClassic Wiki) plus datamined mob mechanics. Drop tables are MeowDB community-sourced and refreshed on every build - but note that several FA bosses still show empty drop tables because their post-launch rewards haven't been scraped yet."
sourceSlugs:
  - nexon-founders-access-release-notes
  - osmsdataexplorer
  - eleveny-training-guide

# ---------- TOC ----------
toc:
  - { href: "#the-fa-roster-in-one-table", label: "FA roster table" }
  - { href: "#how-to-use-this-guide", label: "How to use this" }
  - { href: "#level-20-25-mano", label: "L20 Mano" }
  - { href: "#level-21-30-king-slime-kpq", label: "L21-30 King Slime" }
  - { href: "#level-47-shade", label: "L47 Shade" }
  - { href: "#level-55-jr-balrog", label: "L55 Jr. Balrog" }
  - { href: "#level-60-mushmom", label: "L60 Mushmom" }
  - { href: "#level-65-zombie-mushmom", label: "L65 Zombie Mushmom" }
  - { href: "#the-l70-100-content-ceiling", label: "L70-100 ceiling" }
  - { href: "#class-notes", label: "Class notes" }
  - { href: "#faq", label: "FAQ" }
---

You hit Level 30, picked your 2nd job branch, and now you're staring at the
world map wondering what's actually worth fighting. Short answer: six bosses
are live during the Founder's Access window (Oct 6 - Oct 20, 2026), spread
from Lv 20 to Lv 65. Everything above Lv 65 is thin repeatable grinding:
Nexon's release notes keep endgame bosses (Zakum, Papulatus, Pianus) out
of both Founder's Access and Grand Launch, and Forgotten Hollow opens in
November. Grand Launch adds one boss, Stumpy, to the Victoria Island roster.

This guide walks the whole ladder in level order, with the datamine-verified
HP/EXP numbers, access route, party composition that actually works for FA,
and - honestly - which drops are *not* live yet. We're pulling stats from
the CoT 2 client dump at
[osmsdataexplorer.com](https://osmsdataexplorer.com/data/current),
cross-referencing MeowDB's community drop tables, and layering editorial
strategy on top where live gameplay has disambiguated something datamine
can't tell us.

<div class="callout callout--framing">
<strong>Looking for the dense data?</strong> Each boss has a full dossier
page under <a href="/bosses">/bosses</a> with the complete drop table, spawn
map, and auto-updating stats block. This guide is the editorial progression
layer on top. Click any boss heading below to jump to its dossier.
</div>

<h2 id="the-fa-roster-in-one-table">The FA roster in one table</h2>

| Boss | Level | HP | EXP | Access | Threat |
| --- | --- | --- | --- | --- | --- |
| [Mano](/bosses/mano) | 20 | 2,000 | 120 | Perion hidden street | Low |
| [King Slime](/bosses/king-slime) | 25 | 8,000 | split | Kerning PQ final stage | Low |
| [Shade](/bosses/shade) | 56 | 4,800 | 180 | Lv 47 Citizenship quest | Moderate |
| [Jr. Balrog](/bosses/jr-balrog) | 55 | 30,000 | 10 | Sleepywood (Cursed Sanctuary) | Moderate |
| [Mushmom](/bosses/mushmom) | 60 | 20,000 | 1,200 | Henesys hidden street | Moderate |
| [Zombie Mushmom](/bosses/zombie-mushmom) | 65 | 35,000 | 1,500 | Sleepywood hidden street | Moderate |

Six bosses sounds thin, and honestly it is - Founder's Access is a soft
pre-launch window, not full launch. The two bosses the Lv 70+ crowd will
spend most of their time with are **Jr. Balrog** and **Zombie Mushmom**
because they're the only repeatable high-HP targets.

<h2 id="how-to-use-this-guide">How to use this guide</h2>

Each boss section below has the same shape:

- **Where** - exact access route + any quest gates
- **Datamine stats** - level, HP, EXP, special flags (undead, body-attack)
- **Party fit** - solo-viable? duo? full six-person?
- **Strategy** - the actual thing to do when the fight starts
- **Known drops** - what MeowDB has scraped so far, with the "data not yet
  live" caveat where applicable
- **Dossier link** - cross-ref to the full /bosses page

Jump straight to the level you care about via the TOC chips above. If
you're a Cleric reading top-to-bottom, pay extra attention to Shade and
Zombie Mushmom - both are undead and your holy damage carries the fight.

<h2 id="level-20-25-mano">Level 20-25: Mano</h2>

**Where:** Perion → Excavation Site → Split Road of Beginners → north
portal into "Sparkling Land of Vanishing" hidden street. Mano replaces one
of the native sheep spawns when he's up.

**Datamine stats** (from mobs.json via osmsdataexplorer):

| Stat | Value |
| --- | --- |
| Level | 20 |
| HP | 2,000 |
| EXP | 120 |
| Physical damage | ~110 |
| Weakness | None |

**Party fit:** Solo-friendly, kill-stealable in open channels. First-hit
wins the drops. If you're a Lv 15-20 fresh out of Maple Island this is
your first "real health bar" fight - take the KS culture as practice for
Mushmom later.

**Strategy:** Out-DPS everyone else. Mano does not punish mistakes - he
hits like a wet noodle. The challenge is purely "can you tag him before
someone else does" if there's competition on channel. Channel-hop freely.

**Known drops** (as of Oct 11 build): Mano has no drops in our
database yet - MeowDB's community scrape hasn't populated his table.
This is a known gap - Mano's Classic World drop table has not been
published by the community yet. See the [Mano dossier](/bosses/mano)
for the live table (which will auto-update when drops land).

<h2 id="level-21-30-king-slime-kpq">Level 21-30: King Slime (KPQ)</h2>

**Where:** Kerning Party Quest at Lv 21+. King Slime is the final stage
boss. You access the PQ by assembling a party of 3-6 players (Lv 21-30)
in Kerning City and talking to Lakelis. [Full KPQ walkthrough](/party-quests/kerning-pq).

**Datamine stats:**

| Stat | Value |
| --- | --- |
| Level | 25 |
| HP | 8,000 |
| EXP | Split across party |

**Party fit:** PQ-only - no solo access. The whole fight is a party
mechanic. Mages pump Magic Claw from range, Warriors/Chief Bandits go
melee, Cleric heals. Baby slimes spawn when he's hit; focus the big one.

**Strategy:** Classic multi-DPS burn with add-management. Watch for the
mini-slimes on hit - they're not individually threatening but can
overwhelm an unarmored party if you let three stack. If you have a
Cleric using Heal, the fight is trivial. Without one, bring potions.

**Known drops** (KPQ bonus stage pool, verified via Eleveny's video +
MeowDB): Blue Mushroom Cap chair (rare), Golden River weapon (rare),
basic etc. drops in the Bonus Room. Full table at the
[KPQ guide](/party-quests/kerning-pq).

<h2 id="level-47-shade">Level 47: Shade</h2>

The weirdest boss in the FA roster, and the one most players will
unknowingly skip.

**Where:** Pick up "An Old Grudge" from Arthur in Henesys at Lv 47+ as
part of the Henesys Citizenship questline. The quest sends you to the
**Cabin of the Forsaken**, a hidden street tucked off the standard
Henesys-area routing. Quest-gated and **one kill per character** - this
is NOT a repeatable free-roam world boss.

**Datamine stats:**

| Stat | Value |
| --- | --- |
| Level | 56 |
| HP | **4,800** (surprisingly low) |
| EXP | 180 |
| Physical damage | 165 |
| **Evasion** | **999** |
| Flag | Undead |

**Party fit:** Solo-viable for Clerics; frustrating-but-doable for
accuracy-stacked ranged. Melee classes without accuracy gear should bring
a holy partymate.

**Strategy:** The 999 evasion stat is the whole fight. Physical attacks
miss constantly. Holy damage (Cleric's Holy Arrow, future Shining Ray)
lands reliably against undead regardless of evasion checks - which makes
this a Cleric showcase fight. If you're not a Cleric: scroll your
accessories for ACC, or bring a Cleric friend. The HP is low so you can
actually feel yourself winning, which is nice.

**Known drops:** Empty in our database as of Oct 11 build. Shade is a
quest-objective boss - the "drop" is really the questline progression and
Citizenship advancement, not a loot drop. If MeowDB adds a scraped drop
table post-launch we'll surface it on the [Shade dossier](/bosses/shade).

<div class="callout">
<strong>Why Shade matters for the Citizenship system:</strong> Henesys
Citizenship (via Arthur's quest chain starting Lv 12) gates several
useful benefits - cab discount, storage keeper discount, special shop
access. Shade's quest is one of the mid-chain gates. If you skip Shade,
you skip Henesys Citizenship benefits for the rest of your character's
life. Our <a href="/citizenship">Citizenship guide</a> has the full
quest-chain context.
</div>

<h2 id="level-55-jr-balrog">Level 55: Jr. Balrog</h2>

**Where:** From Sleepywood town, take Route to Cursed Sanctuary. Walk
east until you hit "The Cursed Sanctuary" proper - Jr. Balrog spawns on
that specific map. Respawns roughly once per real-world hour per channel.
Free entry; no quest gate.

**Datamine stats:**

| Stat | Value |
| --- | --- |
| Level | 55 |
| HP | 30,000 |
| EXP | **10** |
| Physical damage | 160 |
| Physical defense | 420 (hard) |
| Magic defense | 450 (very hard) |
| Flag | Not undead |

**Party fit:** Duo or trio at Lv 55+. Solo possible for a well-geared
Ranger using Strafe from the platform edge. Zero EXP reward (yes, 10 at
Lv 55) means **this is a loot-only grind**, not an XP target.

**Strategy:** Kite the knockback. His body-attack windup telegraphs a
huge damage tick - watch the animation and reposition during the wind-up.
Ranged classes stand on the edge platform and Strafe/Arrow Bomb; melee
takes the deck but should expect to use at least one potion per two
engagements. The 450 magic defense makes mages inefficient here -
F/P and I/L parties should pick a different grind target.

**Known drops** (6 verified via MeowDB):

- **White Potion** - common consumable restock
- **Blue Potion** - common consumable restock
- **Elixir** - the mid-tier potion that justifies the grind
- **Two-Handed Weapon Crafting Catalyst** - crafting currency
- **Hwabi Throwing Stars** - thief consumable

Jr. Balrog's Classic World drop table in MeowDB is incomplete as of
Oct 11; the Thief-set Silver Deputy Star has not been confirmed as a
CW drop. See the [Jr. Balrog dossier](/bosses/jr-balrog) for the live
table.

<h2 id="level-60-mushmom">Level 60: Mushmom</h2>

**Where:** Roam any of the mushroom hidden streets north of Henesys:
"The Tree That Grew I/II/III" or the Green Mushroom hidden street.
Mushmom replaces one of the giant mushroom mobs on a once-per-hour
timer. **First-hit-wins** culture carried into Classic World per
community reports; check channel chat for whether someone has an
active claim.

**Datamine stats:**

| Stat | Value |
| --- | --- |
| Level | 60 |
| HP | 20,000 |
| EXP | 1,200 |
| Physical damage | ~220 |
| Flag | Not undead |

**Party fit:** Duo at Lv 55+, or solo for a geared Ranger / Chief Bandit
with Meso Explosion. KS competition is the usual complication, not the
fight itself.

**Strategy:** If you find her alive, unload everything. Strafe, Assaulter
chain, Shadow-Partner Avenger - whatever your 2nd job's burst looks like.
If a party's already fighting her, back off; Maple etiquette says the
first-tagger has claim. Baby Mushrooms spawn alongside her (6-8 of them);
ignore them and focus the big one.

**Known drops:** Empty in our database as of Oct 11 build - this is a
MeowDB scrape gap, not a Nexon disclosure gap. Classic World's
Mushmom drop table has not been fully scraped yet by the community.
[Mushmom dossier](/bosses/mushmom).

<h2 id="level-65-zombie-mushmom">Level 65: Zombie Mushmom</h2>

**Where:** From Sleepywood, take "The Forest East of Sleepywood" or
"The Path to the Excavation" hidden streets. Once-per-hour spawn, same
rotation logic as Mushmom but deeper into Sleepywood and with better
drops.

**Datamine stats:**

| Stat | Value |
| --- | --- |
| Level | 65 |
| HP | **35,000** |
| EXP | 1,500 |
| Physical damage | 250 |
| Magic damage | 380 (ranged splash) |
| Flag | **Undead** |

**Party fit:** Duo-to-trio at Lv 60+. Clerics halve the time to kill.

**Strategy:** The undead flag is the shortcut. Holy damage bypasses the
Zombie evasion/defense math, so a Priest's Shining Ray annihilates her.
Chief Bandits with Meso Explosion also carry. Watch the body-attack tick
- the 250 physical damage can two-shot an underleveled Thief glass
cannon from full HP. Avoid standing underneath her sprite.

**Known drops** (10 verified via MeowDB):

- **Scroll Crafting Catalyst** - the crafting currency that justifies
  the grind. Highest score (10) in her drop table.
- **Poisonous Mushroom** - etc. drop, mostly sellable to NPC
- **Two-Handed Weapon Crafting Catalyst** - crafting currency
- **Ilbi Throwing Stars** - thief consumable
- **Earring Crit. Damage Scroll: Intermediate** - the gear-upgrade find
- Various potions

See the [Zombie Mushmom dossier](/bosses/zombie-mushmom) for the full
table.

<h2 id="the-l70-100-content-ceiling">The L70-100 content ceiling</h2>

<div class="callout callout--framing">
<strong>Need the full L70-100 playbook?</strong> This section is the
quick summary; the dedicated
<a href="/level-70-100-capstone">Level 70-100 Capstone guide</a>
walks through SP holdback rules, gear finishing targets, meso banking,
and per-class 3rd-job previews for all 10 Classic World 3rd-job
branches.
</div>

Here's the honest part: **the FA datamine has zero quests past Lv 70**.
We've audited our own quest database (316 entries) and the highest
`levelMin` field in any quest is in the 60s. That's not a bug in our
scrape - it's a hard content ceiling in the current build.

What this means practically for the FA cap (Lv 100):

- There is **no quest content** between Lv 70 and Lv 100
- There are **no new bosses** between Lv 65 (Zombie Mushmom) and Lv 100
- **Forgotten Hollow is NOT in Founder's Access** - Nexon confirmed this
  in the Oct 3 Release Notes, planning it for a later patch

So what fills Lv 65 to 100?

1. **Repeatable boss grinding** - Jr. Balrog + Zombie Mushmom on
   channel-hop rotation. The best EXP + drops combo at your level.
2. **Taurospear / Wild Kargo grinding** in Sleepywood's deeper maps -
   see our [Training routes L10-70 guide](/training-routes) sections
   for L60+ map picks.
3. **GM-run events** - Monster Invasion, Up and Up, Physical Fitness
   Challenge during FA give burst EXP, but they're on fixed schedules
   (see the [FA Events Calendar](/fa-events-calendar) for the full schedule).
4. **Prepping for Grand Launch** - meso-farming so you can scroll your
   gear, finishing Citizenship quests, maxing your 2nd job skill tree.

If you were expecting a complete endgame loop at FA, you were going to
be disappointed. The honest message to new players is: **FA is the
appetizer, Grand Launch is the main course**.

<h2 id="class-notes">Class notes</h2>

### Clerics / Priests
Shade and Zombie Mushmom are both undead. Holy damage carries both
fights. If you're a Cleric heading into FA and you want to feel like a
main character, these are your encounters.

### Chief Bandits
Meso Explosion dominates every boss fight on this list. Carry a Cleric
or Priest for Shade (ACC still matters for the setup hits), otherwise
you're the party's win condition against Mushmom, Zombie Mushmom, and
Jr. Balrog.

### Rangers / Snipers
Strafe into every boss, especially Jr. Balrog where the knockback
distance works for you. Mushmom KS culture favors ranged classes with
reliable DPS - you can tag from off-screen while melee is still
closing distance.

### F/P / I/L mages
Rough post-30 roster for pure elemental mages. Jr. Balrog's 450 magic
defense is punishing; Mushmom resists direct elemental damage less but
she's the only comfortable farm. Lean into the party-support role at
KPQ and the training routes rather than solo bossing.

### Warriors (Fighter / Page / Spearman)
Melee bosses respect your HP pool. Pages get the hardest Shade experience
(Threaten + Power Guard reduce incoming hits, but your low ACC against
999 evasion means long fights). Spearmen with Hyper Body carry
Zombie Mushmom parties. Fighters are the solo pick for Mushmom.

### Assassins / Hermits
Avenger with Shadow Partner clears Mushmom reliably. Jr. Balrog is
harder because of the magic defense. Shade is a struggle without ACC
gear; recruit a Cleric.

### Hunters / Crossbowmen
Both branches work for every FA boss. Hunter's Arrow Bomb AoE helps
with Mushmom's baby adds; Crossbowman's Iron Arrow pierce is efficient
on Zombie Mushmom when she stacks with mob adds.

<h2 id="faq">FAQ</h2>

**What's the best EXP boss at FA cap?**

Zombie Mushmom at 1,500 EXP, but her once-per-hour spawn makes her a
side-objective, not a farm. For sustained EXP you want
[training-route grinds](/training-routes), not bosses.

**Why does Jr. Balrog give only 10 EXP?**

Not a datamine typo - verified by eye. Jr. Balrog is a loot pinata, not
an XP target. His 30,000 HP + the knockback mechanic means you'd fight
him for 10-15 minutes for 10 EXP, which is a joke. Grind him for drops
only.

**Is there a Zakum fight at FA?**

No - and not at Grand Launch either. Zakum isn't on either release
notes' boss roster, and Nexon hasn't said when it will open.

**Are hidden-street boss spawns per-channel or per-world?**

Per-channel per-map. If Mushmom is dead on channel 1, hop to channel 2
and check again. Spawn timers tick independently per channel.

**Does Shade count as a Lv 47 fight or a Lv 56 fight?**

Both, depending on how you measure. The *quest* unlocks at Lv 47, but
Shade's mob stats are Lv 56 - so even though you can start the
questline at 47, you're better off coming back at 55+ for the hit
rate (and don't forget: if you're not a Cleric, the 999 evasion will
embarrass you anyway).

**What should I do if the next boss is dead on every channel?**

Train. The [Training routes guide](/training-routes) covers the best
grind maps per level bracket. Boss rotations are supplementary to
sustained training, not a replacement for it.

**Will this guide update when Nexon ships more content?**

Yes. Grand Launch's new boss, Stumpy, gets a page once its data is in
our datamine; later bosses (Zakum, Papulatus, Pianus, and others) get
added to [/bosses](/bosses) as they go live. Last reviewed: 2026-10-21.
