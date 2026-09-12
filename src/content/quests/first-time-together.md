---
questId: "10311"
name: "First Time Together (Kerning City PQ)"
category: "party-quest"
tagline: "Four adventurers level 21+ delve into the Ant Tunnel, defeat King Slime, and split a bag of Intermediate earring scrolls. The classic Kerning Party Quest, renamed for Classic World."

# ==== Requirements ====
levelMin: 21
classReq: "Any (party of 4)"

# ==== NPC / location ====
npcName: "Lakelis"
npcLocation: "Kerning City"
npcId: 9020000  # canonical GMS/83 WZ ID (verified against maplestory.io)

# ==== Chain metadata ====
# The datamine-facing meta quest is called "Proof of Companionship"
# (id 10311). Once the party clears the PQ boss, this quest closes
# and the party can queue again. There's no formal chain step 2 -
# repeat the PQ as many times as you want.
chainName: "First Time Together"
chainStep: 1
chainLength: 1

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  It seems that Lakelis in Kerning City is looking for a party
  to take on a party quest that requires multiple adventurers
  to work together.

  Lakelis in Kerning City asked me to challenge the party quest
  First Time Together and defeat King Slime inside. The party
  quest must be attempted by a party of four adventurers, all
  level 21 or higher. Once all members are ready, the party
  leader can speak to Lakelis to enter.

  As requested by Lakelis, my friends and I challenged the party
  quest First Time Together and defeated King Slime. When
  everyone works together, there's nothing that can't be done!

# ==== Rewards ====
# From CoT 2 datamine. Item drops are RANDOM (prop 1 each, non-
# guaranteed) - you receive ONE of the four earring scrolls, not
# all four. Party leader distributes.
rewards:
  - type: "exp"
    label: "2,193 EXP"
    details: "Solid at level 21 (~5-7% of a level per completion). Since PQs run 10-15 minutes each, that's competitive with any solo grinding option available at this level band."
  - type: "mesos"
    label: "614 mesos"
    details: "Nominal reward. The real economic value is the earring scrolls."
  - type: "item"
    label: "1 random Intermediate Earring Stat Scroll"
    itemId: 2040301
    itemSlug: "earring-str-scroll-intermediate"
    details: "Random pick from four options: STR (2040301), DEX (2040305), INT (2040309), or LUK (2040313). Each is a 60%-success chance to add +2 of its stat to an earring. Rare drops in v83; made accessible via KPQ in Classic World."
  - type: "item"
    label: "Earring DEX Scroll (Intermediate) - alternate outcome"
    itemId: 2040305
    itemSlug: "earring-dex-scroll-intermediate"
    details: "One of the four random earring scroll outcomes. Valuable for Bowman and Thief characters who scale DEX."
  - type: "item"
    label: "Earring INT Scroll (Intermediate) - alternate outcome"
    itemId: 2040309
    itemSlug: "earring-int-scroll-intermediate"
    details: "One of the four random earring scroll outcomes. Valuable for Magician characters who scale INT."
  - type: "item"
    label: "Earring LUK Scroll (Intermediate) - alternate outcome"
    itemId: 2040313
    itemSlug: "earring-luk-scroll-intermediate"
    details: "One of the four random earring scroll outcomes. Valuable for Thief characters who scale LUK."

# ==== Editorial ====
editorial: |
  <p><strong>Party size:</strong> exactly 4. Not 3, not 5 - the
  entry check is strict. If you're missing a slot, Kerning City
  general chat is the traditional recruitment hub.</p>

  <p><strong>Level requirement:</strong> every party member must
  be level 21 or higher. The upper cap is soft - high-level
  helpers can carry a party, but EXP scaling makes it painful for
  them. Standard practice: 21-30 for the sweet spot.</p>

  <p><strong>Where it happens:</strong> the PQ instances inside a
  private version of Kerning City's Ant Tunnel. You'll fight a
  series of themed rooms culminating in a King Slime boss
  encounter. Total run time: 10-15 minutes with a coordinated
  party; 20-30 with a first-time group.</p>

  <p><strong>The reward that matters:</strong> the earring stat
  scrolls. Each is a 60%-success attempt to add +2 of its stat
  to an earring. In v83, Intermediate earring scrolls were
  boss-drop-only and traded on the Free Market for six-figure
  sums. Making them a PQ reward flips the entire mid-game earring
  economy - budget accessories become upgradeable without
  farming Zakum for a week.</p>

callout: |
  <strong>Note on the name:</strong> the datamine calls the
  entry quest <strong>Proof of Companionship</strong> and the
  PQ itself <strong>First Time Together</strong>. Older players
  will know it as <strong>Kerning Party Quest</strong> or
  <strong>KPQ</strong> - it is the same content, renamed for
  Classic World. All three names refer to the same 4-player
  Ant Tunnel + King Slime encounter.

# ==== Cross-links ====
relatedGuides:
  - "/party-quests"
  - "/quests"
  - "/items/weighted-earrings"  # natural first earring to invest scrolls into
  - "/quests/mothers-gold-watch"  # the chain that awards Weighted Earrings at L18

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (10311), NPC (Lakelis), level requirement (21+), party size (4), boss (King Slime), and all four earring stat scroll reward IDs pulled verbatim from the CoT 2 client datamine. In-game description text is a direct quote from quests.json. Stage-by-stage mechanics are inferred from v83 KPQ knowledge; individual room mechanics NOT yet CoT 2-verified and will be updated when players run the PQ at Founder's Access."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "kerning"
lastUpdated: "2026-08-23"
---
