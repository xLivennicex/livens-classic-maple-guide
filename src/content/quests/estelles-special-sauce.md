---
questId: "10103"
name: "Estelle's Special Sauce"
category: "unique-reward"
tagline: "The classic Henesys sauce-delivery chain that awards the iconic Ribboned Pig Headband. THE reward-worth-the-quest example."

# ==== Requirements ====
levelMin: 15
classReq: "Any"

# ==== NPC / location ====
npcName: "Estelle"
npcLocation: "The Field South of Ellinia (delivery to Henesys)"
# npcId: 1032105 - the only Estelle entry in maplestory.io's GMS/83
# NPC listing, but the render endpoint returns 404. Omitting so the
# hero gracefully falls back to text-only until we find a working
# variant (or extract the sprite ourselves from the CoT 2 client).

# ==== Chain ====
chainName: "Estelle and the Ribboned Pig Headband"
chainStep: 2
chainLength: 2
prerequisiteQuest: "estelles-request"

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  I got the Special Sauce from Estelle in The Field South of
  Ellinia. Now, I need to deliver it to Mrs. Ming Ming, along
  with 10 Pig's Heads and 30 Octopus Legs.

  I got all the materials that Mrs. Ming Ming asked me to get
  and gave them to her.

# ==== Rewards ====
# Note the itemSlug wiring on the Ribboned Pig Headband reward -
# this is the pattern that makes rewards clickable back to the
# item page (and shows the item sprite inline).
rewards:
  - type: "exp"
    label: "705 EXP"
    details: "Meaningful chunk at level 15"
  - type: "mesos"
    label: "438 mesos"
  - type: "item"
    label: "1x Ribboned Pig Headband"
    itemSlug: "ribboned-pig-headband"
    itemId: 1002100
    details: "The signature reward. Guaranteed drop, not RNG."
  - type: "item"
    label: "15x Lemon"
    itemId: 2010005
    details: "Bonus consumables - Lemons restore a solid chunk of MP for the level"

# ==== Editorial ====
editorial: |
  <p>This is <strong>THE reward-worth-doing example</strong>. On
  the surface, Estelle's Special Sauce sounds tedious: run to a
  field south of Ellinia, grab a bottle of sauce, walk it BACK
  to Henesys, gather 10 Pig's Heads (Henesys pig maps) and 30
  Octopus Legs (Kerning City sewer maps), and hand everything
  to Mrs. Ming Ming. That's a lot of travel for a level-15
  character.</p>
  <p>The payoff is the Ribboned Pig Headband - a cosmetic hat
  that's been coveted since v83. If you skip this chain, you
  can never get one on that character. That's the entire
  argument for doing the quest: it's the only source. The
  EXP and mesos are decent, but the headband is the reason
  players still queue up for this quest 20 years later.</p>
  <p>The chain is part of "Mrs. Ming Ming's Second Worry" -
  a 3-step arc that starts by talking to Mrs. Ming Ming in
  Henesys and asking about her worry, receiving the collection
  assignment, then completing it (this quest).</p>

callout: |
  <strong>Pick up the pig heads WHILE you're grinding.</strong>
  Pig's Heads drop from Pigs (Henesys west grass field, the
  starter map every new character trains on anyway). Don't make
  a special trip - just get them naturally over the L11-15 range.
  Octopus Legs from Octopi are the same story - Kerning City
  sewers are where every new Thief trains. Time this quest to
  overlap with training runs.

# ==== Cross-links ====
relatedGuides: []

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (10103), name, giver NPC, level, in-game text, and full reward table (EXP + mesos + Ribboned Pig Headband + 15 Lemons) pulled verbatim from the CoT 2 client datamine. The Ribboned Pig Headband drop is flagged as guaranteed in the datamine."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-23"
---
