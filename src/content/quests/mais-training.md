---
questId: "1009"
name: "Mai's Training"
category: "tutorial"
tagline: "Mai the sword master at A Split Road wants to train you. First lesson: hunt Blue Snails, Shrooms, and other early Amherst mobs. Step 1 of a 2-part combat tutorial."

# ==== Requirements ====
levelMin: 3
classReq: "Beginner (Maple Island)"

# ==== NPC / location ====
npcName: "Mai"
npcLocation: "Maple Island - A Split Road"
npcId: 12100  # canonical GMS/83 WZ ID (verified live)

# ==== Chain ====
chainName: "Mai's Combat Training"
chainStep: 1
chainLength: 2
nextQuest: "mais-final-training"

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  Mai at A Split Road seems like a martial arts specialist who
  can train beginners.

  I am now under the tutelage of the famous sword master, Mai,
  in A Split Road. For my first lesson, she told me to hunt
  Blue Snails, Shrooms, and other early Amherst mobs.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "70 EXP"
    details: "Substantial at level 3 - roughly one full level at this tier when combined with the mob EXP earned."
  - type: "item"
    label: "5x Egg"
    itemId: 2010002
    details: "Small HP restore snacks. Total from Mai's chain across both steps: 15 Eggs. Enough to keep you topped up through the rest of Maple Island."
  - type: "next-quest"
    label: "Unlocks: Mai's Final Training"
    details: "Return to Mai after the hunt for the graduation step."

# ==== Editorial ====
editorial: |
  <p>Mai is Maple Island's most-developed training NPC. Sam
  pointed you toward Mai; Mai actually teaches you the flow
  of a real quest cycle: accept quest -> travel to hunting
  grounds -> kill required mobs -> return for reward.</p>

  <p><strong>Where:</strong> A Split Road is the middle
  section of Maple Island, between Amherst and the more
  eastern hunting grounds. Mai stands at the intersection -
  hence "A Split Road."</p>

  <p><strong>Mob targets:</strong> Blue Snails and Shrooms
  are both in the maps immediately east of A Split Road.
  Neither hits hard enough to threaten a level-3 character
  with basic gear. Total kill time: 5-10 minutes if the maps
  aren't contested.</p>

  <p><strong>Chain payoff:</strong> the real reward is
  finishing step 2 (<a href="/quests/mais-final-training">Mai's
  Final Training</a>), which adds mesos to the reward and
  hands out another 10 Eggs. Complete the chain for the full
  ~15 Eggs and the mesos boost.</p>

callout: |
  <strong>Practicing quest patterns.</strong> Mai's chain
  formalizes the "accept -> hunt -> return" pattern that
  becomes automatic for Victoria Island quests. Every
  Perion, Henesys, Kerning, and Ellinia questgiver expects
  you to know this rhythm - Maple Island is where you
  learn it.

# ==== Cross-links ====
relatedGuides:
  - "/quests/mais-final-training"
  - "/quests/sams-suggestion"
  - "/quests/todds-how-to-hunt"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (1009), NPC (Mai 12100), level (3), 70 EXP + 5x Egg (2010002 guaranteed) + chain-next linkage to 1010 all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-24"
---
