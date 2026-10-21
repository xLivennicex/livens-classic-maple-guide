---
title: "Founder's Access Content Status: What's Open, What's Gated, What We Don't Know"
description: "Archived reference: what was accessible in MapleStory Classic World Founder's Access (Oct 6-20, 2026). Victoria Island regions, bosses, maps, and player-reported gated subzones. Corrected after the Grand Launch release notes."
lastUpdated: "2026-10-11"
tags:
  - founders-access
  - reference
  - access-status
  - gating
status: "Archived - Founder's Access ended October 20, 2026"
theme: "henesys"
decorations: false
eyebrow: "Reference"
heading: "FA Content Access Status"
tagline: "Archived: what was playable during Founder's Access (Oct 6-20). For what's in Grand Launch, see What's Actually in Grand Launch."
verificationStatus: "launch-verified"
verificationNote: "Confirmed-accessible content sourced from Nexon's Oct 3 Founder's Access release notes (slug: nexon-founders-access-release-notes). Confirmed-gated content sourced from the same release notes plus Nexon's Inkwell blog on the future of Classic World (slug: nexon-inkwell-future-of-classic-world). Player-reported gated content is tagged as such — single data points from community reports, not definitive. Datamine-complete references validated against src/data/db/*.json (CoT 2 scrape via osmsdataexplorer.com)."
sourceSlugs:
  - nexon-founders-access-release-notes
  - nexon-inkwell-future-of-classic-world
  - nexon-ossyria-exploration-report
  - osmsdataexplorer
  - reddit-everything-changed-cot2
toc:
  - { href: "#tldr", label: "TL;DR" }
  - { href: "#why-this-page-exists", label: "Why this exists" }
  - { href: "#confirmed-accessible", label: "Confirmed accessible" }
  - { href: "#confirmed-gated", label: "Confirmed gated" }
  - { href: "#player-reported-gated", label: "Player-reported gated" }
  - { href: "#the-fuzzy-middle", label: "The fuzzy middle" }
  - { href: "#report-an-access-issue", label: "Report an access issue" }
  - { href: "#faq", label: "FAQ" }
---

<div class="callout callout--heads-up">
<strong>Archived and corrected.</strong> Founder's Access ended on
October 20, 2026. This page originally described 3rd Job, Zakum, and
Ossyria regions (Orbis, El Nath, and more) as "held for Grand Launch"
and said those claims came from Nexon's release notes. They didn't, and
the Grand Launch release notes confirm none of it opens at launch: the
cap stays Lv. 100, only the Lv. 10 and Lv. 30 advancements exist, and
all six launch bosses are on Victoria Island. It also listed the
Founder's Access cap as Lv. 70; it was Lv. 100. Those lines are fixed
below. For current content, see
<a href="/grand-launch-prep">What's Actually in Grand Launch</a>.
</div>

<h2 id="tldr">TL;DR</h2>

- **Fully accessible:** Maple Island, Victoria Island (all 6 regions),
  Lv 1-100 cap, 1st and 2nd job advancement, Mano / Mushmom /
  Jr. Balrog / Zombie Mushmom bosses, PQ roster (Kerning / Ludi PQ
  held).
- **Confirmed gated per Nexon release notes:** 3rd and 4th job
  advancement, Zakum boss fight, Orbis / Leafre / Phantom Forest /
  El Nath / NLC / Omega Sector / Mu Lung Dojo / Aqua Road / Temple
  of Time (every Ossyria+ region).
- **Player-reported gated (one data point each):** Burnt Land IV
  and V (east Perion), Sanctuary Entrance IV (deep Ant Tunnel), deep
  Golem's Temple floors.
- **The fuzzy middle:** many Victoria Island subzones have been
  datamine-present on this site but player access is unverified.
  See [the fuzzy middle section](#the-fuzzy-middle) for the
  "assume accessible until proven gated" approach.

<h2 id="why-this-page-exists">Why this page exists</h2>

Classic World ships every map in the WZ datamine regardless of
whether the player can actually walk there in Founder's Access.
**Our site's map pages (/maps/{id}) render all 305 maps** because
they're all in the data file. But some of those maps have **portal
restrictions**, **NPC transport locks**, or **region-level gates**
that Nexon enforces at runtime.

This creates a gap: readers see a Burnt Land V dossier page, follow
our training-routes guide pointing there, and discover **the game
won't let them portal in**. Our data isn't wrong — it just can't see
Nexon's runtime gating.

**This page centralizes what we know about gating** so we don't
scatter the same caveat across every guide. If an access issue
surfaces for a specific map / boss / region, the fix is one edit
here, not twenty.

<h2 id="confirmed-accessible">Confirmed accessible in FA</h2>

Sourced from Nexon's Oct 3 Founder's Access release notes (cited
in the sources section at the bottom of this page).

### Regions

| Region | Status | Notes |
| --- | --- | --- |
| **Maple Island** | Fully open | L1-10 starting zone |
| **Victoria Island** | Fully open | All 6 regions (Henesys, Perion, Ellinia, Kerning, Sleepywood, Nautilus Harbor) |
| **Victoria Island hidden maps** | Fully open | Forgotten Hollow + 67 total hidden maps per our catalog |

### Level progression

- **Lv. 100 cap** confirmed (Oct 3 release notes)
- **1st job advancement** (every class) at Lv 10
- **2nd job advancement** (every branch) at Lv 30

### Bosses

| Boss | Lv | Status |
| --- | --- | --- |
| [Mano](/bosses/mano) | 20 | Open, 1-hour spawn timer |
| [King Slime](/bosses/king-slime) | via Kerning PQ | Via PQ bonus stage |
| [Jr. Balrog](/bosses/jr-balrog) | 55 | Open |
| [Mushmom](/bosses/mushmom) | 60 | Open, 1-hour per channel |
| [Zombie Mushmom](/bosses/zombie-mushmom) | 65 | Open |
| [Shade](/bosses/shade) | 47 | Open (999 evasion — [Cleric mandatory](/cleric-build#bossing)) |

### Content systems

- **Scrolling** (60% ATT / 60% STR / 10% universal scrolls)
- **Trading** (via Free Market zones in Victoria Island)
- **Guild system**
- **Pet / familiar system**
- **Cash shop** (Founder's packages + fashion crates)
- **Earring crit damage line** (CoT 2 addition)
- **1.25× elemental multiplier** (CoT 2 addition — see
  [Wizard guide](/wizard-build#the-125x-elemental-mechanic))

<h2 id="confirmed-gated">Not in Founder's Access - or Grand Launch</h2>

None of the content below was playable in Founder's Access. The
Grand Launch release notes don't include any of it either. Inkwell
has said 3rd Job and some regions will arrive sequentially after
launch, with no dates. (The region and boss lists below come from
the client datamine, not from Nexon's release notes.)

### 3rd and 4th job advancement

- **3rd job** (traditionally Crusader / White Knight / Dragon Knight /
  F-P Mage / I-L Mage / Priest / Ranger / Sniper / Hermit / Chief
  Bandit) — **not in Grand Launch; no date announced**
- **4th job** (traditionally Hero / Paladin / Dark Knight / F-P Arch
  Mage / I-L Arch Mage / Bishop / Bowmaster / Marksman / Night Lord /
  Shadower) — no information

### Regions

| Region | Lv range | Status |
| --- | --- | --- |
| **Orbis** | 50-70 | Gated — not in Grand Launch |
| **El Nath** | 70-85 | Gated |
| **Ludus Lake** | 50-70 | Partially gated (Ludibrium town open, dungeon maps gated) |
| **Omega Sector** | 70-85 | Gated |
| **Korean Folk Town** | 40-60 | Gated |
| **Aqua Road** | 70-85 | Gated |
| **Leafre** | 85-105 | Gated |
| **Mu Lung Dojo** | 70+ | Gated |
| **Temple of Time** | 110+ | Gated |
| **Phantom Forest** | 80-100 | Gated |
| **NLC (New Leaf City)** | 50-70 | Gated |

### Bosses

| Boss | Lv | Status |
| --- | --- | --- |
| **Zakum** | 50+ | Datamine present, boss fight **not in Grand Launch** |
| **Papulatus** | 70+ | Gated with Ludus Lake dungeon |
| **Horntail** | 130+ | Gated with Leafre |
| **Pink Bean** | 130+ | Gated with Temple of Time |

### Items (in datamine but requires gated content to obtain)

- **Zakum Helmet** +5/+5/+5/+5 — datamine present as item 1002180,
  requires defeating Zakum
- **Pap Mark** — requires Papulatus
- **Horntail necklace** — requires Horntail

<h2 id="player-reported-gated">Player-reported gated (unverified)</h2>

<div class="callout callout--warning">
<strong>These are single data points from community reports.</strong>
Not sourced from Nexon directly. If you encounter one of these
blocked, cross-reference the alternative suggestions. If you can
access these, let us know — see
<a href="#report-an-access-issue">how to report</a> below.
</div>

### Victoria Island deep subzones

| Map | Reported by | Status | Fallback |
| --- | --- | --- | --- |
| **The Burnt Land IV** ([10004114](/maps/10004114)) | User report Oct 11 | Reported gated | [Burnt Land II](/maps/10004112) or [III](/maps/10004113) — same Fire Boar density |
| **The Burnt Land V** ([10004115](/maps/10004115)) | User report Oct 11 | Reported gated | Same as IV |
| **Sanctuary Entrance IV** ([10005104](/maps/10005104)) | Community report (one source) | Reported gated | Sanctuary Entrance II or III — near-identical loot table |
| **Entrance of Golem's Temple deep floors** | Community report (one source) | Reported partial gate | [Entrance of Golem's Temple](/maps/10001102) upper floors confirmed accessible |

### What these have in common

All reported-gated subzones are **"deepest in a chain"** — the last
map in a sequence like Burnt Land I → II → III → IV → V. This fits
a pattern where Nexon gates the content frontier to pace the FA
window (Oct 6 → Oct 20 is a 2-week window; keeping deep subzones
closed slows the "I've already farmed everything" grind).

### Not a definitive list

The absence of a map from this list doesn't guarantee it's
accessible. **Treat deep subzones (chain-last entries) with
suspicion** and have fallback maps bookmarked.

<h2 id="the-fuzzy-middle">The fuzzy middle: assume accessible until proven gated</h2>

Our maps catalog has 305 maps total. Breakdown:

- **~250 maps** in Maple Island + Victoria Island are **datamine +
  Nexon-release-notes confirmed accessible**
- **~15 maps** are **confirmed gated** per Nexon release notes
  (Zakum altar, Ludus Lake dungeon, etc.)
- **~5 maps** are **player-reported gated** (above)
- **~35 maps** are in the **fuzzy middle** — datamine present,
  not explicitly accessible or gated per sources we have

### Our policy for the fuzzy middle

- **Our training routes guide and gearing guide reference these
  maps as if accessible** (because the datamine shows mob + drop
  data that readers want to see)
- **If a reader hits a wall accessing one, we treat it as a bug
  report** and add it to the "player-reported gated" section
- **We don't preemptively mark maps as "may be gated"** — that
  would create defensive clutter across every guide

### If you're reading this and you can't access a map referenced in a guide

- Try the fallback suggestions in the specific guide (every
  training-routes map references a nearby alternative)
- Report the gating via the method below so we can tag the map
  centrally

<h2 id="report-an-access-issue">Report an access issue</h2>

If you discovered a map / boss / NPC / item is inaccessible in FA
despite our site showing content for it, help us tag it.

### How to report

- **GitHub issues** on this repo (preferred): include the map ID
  (visible in the URL `/maps/{id}`), the specific portal you tried,
  and your character level at time of attempt.
- **Discord / in-game whisper to Liven** if you prefer DM.
- **Email the project** at contact listed in site footer.

### What we need

| Info | Why |
| --- | --- |
| Map ID | Lets us update the entry here |
| Entry point attempted | Portal / NPC ride / command — knowing the attempt method helps us flag whether it's a soft or hard gate |
| Character level | Some gating is level-based (level requirements), vs. absolute gates |
| Error message (if any) | "Cannot enter," "Try again later," etc. — different messages indicate different gate types |

### What happens after you report

- We'll verify the gating (if the gate is reproducible)
- Add the map to the player-reported gated section above
- Update any guide that references the map with a fallback note
- Credit the reporter in the commit if desired

<h2 id="faq">FAQ</h2>

**Why does the site show maps I can't actually visit?**

Our site builds pages from the WZ datamine (every map Nexon has in
the client code). We can't see Nexon's runtime portal / region
gates. See [why this page exists](#why-this-page-exists).

**When will deep Victoria Island subzones open?**

Unconfirmed. Nexon hasn't published a specific "Burnt Land V opens
at..." schedule, and the Grand Launch release notes don't mention
these subzones. (We previously guessed they would open at Grand Launch
alongside 3rd Job; 3rd Job is not in Grand Launch.)

**Can I 3rd-job early via some exploit?**

No. 3rd-job advancement NPCs don't exist in the FA client. There's
nothing to exploit.

**I bought a Founder's package - do I get ANY gated content early?**

No. Founder's packages give you cosmetics, pets, and some mesos.
They don't unlock gated regions / bosses / jobs.

**Can I farm Zakum Helmet from Zakum?**

No - not in Founder's Access and not at Grand Launch. The Zakum Helmet
item exists in the datamine (item 1002180) but can't drop until the
fight opens, and Nexon hasn't said when that will be.

**I keep seeing community posts about "cleric washing" strategies -
can I still do them in CW?**

HP wash was removed in Classic World. The old "convert MP to HP"
strategy no longer works. See the
[Cleric guide HP wash section](/cleric-build#the-hp-wash-removal-reality)
for the full implications.

**Will this page update post-Grand-Launch?**

No - it's archived as the Founder's Access record. Current content
lives on [What's Actually in Grand Launch](/grand-launch-prep).

Last reviewed 2026-10-21 (archived and corrected).
