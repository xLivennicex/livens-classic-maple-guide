---
questId: "10102"
name: "Estelle's Request"
category: "story"
tagline: "Estelle wants a Garnet to buy her mom a birthday necklace. Prereq step to Estelle's Special Sauce - the chain that awards the Ribboned Pig Headband."

levelMin: 15
classReq: "Any"

npcName: "Estelle"
npcLocation: "The Field South of Ellinia"
# NPC WZ ID: Estelle 1032105 was the only match in maplestory.io's
# GMS/83 NPC list (verified earlier). Uses that lookup.
npcId: 1032105

chainName: "Estelle and the Ribboned Pig Headband"
chainStep: 1
chainLength: 2
nextQuest: "estelles-special-sauce"

description: |
  Estelle in The Field South of Ellinia wants a Garnet in
  exchange for her Special Sauce. She wants to buy a
  necklace for her mom's birthday gift.

  I got 1 Garnet for Estelle, who I met near The Hill East
  of Henesys, for making her mother's birthday present.

rewards:
  - type: "exp"
    label: "705 EXP"
    details: "Meaningful EXP at L15 - roughly a fifth of a full level. The prereq step is actually the higher-EXP step of the two-quest chain."
  - type: "mesos"
    label: "438 mesos"
  - type: "next-quest"
    label: "Unlocks: Estelle's Special Sauce"

editorial: |
  <p>Estelle's Request is the prerequisite step for
  <a href="/quests/estelles-special-sauce">Estelle's Special
  Sauce</a> (which is the actual reward payoff - Ribboned Pig
  Headband at L27). Without doing this step first, Special
  Sauce won't unlock.</p>

  <p><strong>What you're gathering:</strong> 1 Garnet. Garnet
  drops from various mid-level mobs (Bubblings, Cold Eyes,
  and other Sleepywood-area mobs). Drop rate is low, so
  expect either 10-20 minutes of grinding or a Free Market
  purchase.</p>

  <p><strong>Where the NPCs are:</strong> Estelle is in the
  Field South of Ellinia (one map south from Ellinia town).
  She references "The Hill East of Henesys" in her dialogue -
  the datamine implies she moves or has a sibling questgiver
  in that area, though most players complete both steps at
  Estelle's Ellinia spot.</p>

  <p><strong>Chain economics:</strong> total across both
  steps: ~2,000 EXP + ~1,000 mesos + Ribboned Pig Headband
  (L27, +26 PDD, +7 MMP, 7 slots). The headband alone
  justifies the chain - it's the flagship L27 hat and cross-
  references our other headband options (Old Wisconsin at
  L17).</p>

callout: |
  <strong>Do this at L15, wait to turn in Special Sauce
  until L27.</strong> The reward Ribboned Pig Headband is
  L27-required. You can complete both quest steps early but
  won't be able to equip the headband until you level up.
  Some players intentionally hold the second step until L27
  so they can equip immediately.

relatedGuides:
  - "/quests/estelles-special-sauce"
  - "/items/ribboned-pig-headband"

verificationStatus: "closed-test-info"
verificationNote: "Quest ID (10102), NPC (Estelle 1032105), level (15), rewards (705 EXP, 438 mesos, chain-next linkage to 10103) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "ellinia"
lastUpdated: "2026-08-24"
---
