---
questId: "10302"
name: "Mother's Gold Watch"
category: "story"
tagline: "Chief Stan finally listens. You convince him to take Alex home, and Stan gives you Alex's late mother's gold watch as thanks. The emotional payoff of the reconciliation arc - and a level 20 Earring drop."

# ==== Requirements ====
levelMin: 18
classReq: "Any"
prerequisiteQuest: "talking-to-stan"

# ==== NPC / location ====
npcName: "Chief Stan"
npcLocation: "Henesys (entrance)"
npcId: 1012003  # canonical GMS/83 WZ ID

# ==== Chain ====
chainName: "Alex and Chief Stan"
chainStep: 3
chainLength: 3

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  At the entrance of Henesys, I met Alex's father Chief Stan.
  He was even more ornery and difficult to talk to than I'd
  anticipated, but I finally convinced him to accept Alex back
  home with open arms. I also got Alex's late mother's gold
  watch from Stan.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "1,371 EXP"
    details: "Same EXP as step 2 - the chain's real payoff is the earring, not the numbers."
  - type: "mesos"
    label: "526 mesos"
    details: "Nominal."
  - type: "item"
    label: "1 Earring (random pick)"
    itemId: 1032002
    itemSlug: "weighted-earrings"
    details: "RANDOM: either Weighted Earrings (1032002, +22 MDD, +1 EVA) or Yellow Square (1032003, +22 MDD, +1 Craft). Both are Level 20 earrings with 5 slots. The Weighted Earrings are typically preferred (Evasion is universally useful; Craft has narrower application)."

# ==== Editorial ====
editorial: |
  <p>This step is more talk than action - you're basically
  hitting dialogue prompts until Chief Stan softens up. The
  scene lands emotionally: Stan admits he was too hard on his
  son, hands you Alex's late mother's watch as a token, and
  asks you to bring Alex home safely.</p>

  <p><strong>Why the earring is a big deal:</strong> Level 20
  earrings drop rarely from mobs in this level range. Getting
  a guaranteed one from a story chain means you have a slot
  to eventually apply your KPQ-earned
  <a href="/items/earring-str-scroll-intermediate">earring stat scrolls</a>
  to. If you're planning to run KPQ starting at level 21,
  finishing this chain first gives you a head start on
  earring investment.</p>

  <p><strong>Chain summary:</strong> the full Alex arc
  (10300 -> 10301 -> 10302) awards 3,701 EXP, 1,420 mesos,
  10 Blue Potions, and a Level 20 earring. Fair for a
  three-step level-18 chain, especially given the earring's
  compounding value with later scroll upgrades.</p>

callout: |
  <strong>Reroll if you don't like the earring?</strong>
  There's no do-over - the earring drop is one-time-per-
  character. If you REALLY want Weighted Earrings and got
  Yellow Square (or vice versa), reroll a new character or
  wait for a friend to give you the other one. The stats are
  within a few percent of each other for most builds, so it
  usually isn't worth the drama.

# ==== Cross-links ====
relatedGuides:
  - "/quests/alexs-request"
  - "/quests/talking-to-stan"
  - "/items/weighted-earrings"
  - "/quests/first-time-together"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (10302), NPC (Chief Stan), level (18), rewards (1371 EXP + 526 mesos + random earring from 1032002/1032003), and chain-parent linkage to 10301 all pulled verbatim from the CoT 2 client datamine."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-23"
---
