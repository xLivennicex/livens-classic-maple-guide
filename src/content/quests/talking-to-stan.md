---
questId: "10301"
name: "Talking to Stan"
category: "story"
tagline: "Chief Stan of Henesys won't even hear about his son Alex until you prove yourself. Bring 15 Green Mushroom Caps and 15 Blue Mushroom Caps. Step 2 of the reconciliation arc."

# ==== Requirements ====
levelMin: 18
classReq: "Any"
prerequisiteQuest: "alexs-request"

# ==== NPC / location ====
npcName: "Chief Stan"
npcLocation: "Henesys (entrance)"
npcId: 1012003  # canonical GMS/83 WZ ID (Henesys chief sprite)

# ==== Chain ====
chainName: "Alex and Chief Stan"
chainStep: 2
chainLength: 3
nextQuest: "mothers-gold-watch"

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  At the entrance of Henesys, I met Alex's father, Chief Stan,
  the chief of Henesys. He wouldn't let me even start a
  conversation about Alex with him, and he demanded I bring him
  15 Green Mushroom Caps and 15 Blue Mushroom Caps if I want
  to talk to him. I better hurry to the Green Mushroom Forest
  to hunt them.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "1,371 EXP"
    details: "Meaningful at level 18 - about 3-4% of a level. Combined with the mushroom-hunt EXP, this step nets substantial progression."
  - type: "mesos"
    label: "526 mesos"
    details: "Modest. The item reward is the real value here."
  - type: "item"
    label: "10x Blue Potion"
    itemId: 2000003
    itemSlug: "blue-potion"
    details: "Guaranteed drop. Each Blue Potion restores 200 MP - a full stack is 2,000 MP of restoration, which is substantial for a level 18 Magician or utility-heavy Warrior. Non-Magicians can sell to NPC for 22 each = 220 mesos, or bank for later."
  - type: "next-quest"
    label: "Unlocks: Mother's Gold Watch"
    details: "Return once Stan actually listens - you're one step from convincing him to take Alex home."

# ==== Editorial ====
editorial: |
  <p>The mushroom cap hunt is the chain's actual grinding
  component. Green Mushroom Caps drop from Green Mushrooms;
  Blue Mushroom Caps drop from Blue Mushrooms. Both mobs live
  in the <strong>Green Mushroom Forest</strong> maps west of
  Henesys.</p>

  <p><strong>Drop rate reality check:</strong> ~30-40% per kill
  on the caps. You'll need to kill roughly 40-50 of each mob
  type to guarantee 15 caps. Not fast, not slow - it's the
  right length for a step-2 gate. At level 18 you'll likely
  gain a level or two just from the hunt.</p>

  <p><strong>Efficient path:</strong> Green Mushroom Forest III
  (the map with mixed Green and Blue Mushrooms) lets you farm
  both cap types simultaneously without switching maps. Half
  the total kill time vs single-map farming.</p>

callout: |
  <strong>Chief Stan is grumpy on purpose.</strong> His
  rudeness in this quest is part of the character setup - he's
  visibly upset that his son ran away and he's taking it out
  on the first stranger who mentions Alex. This landing pays
  off in step 3.

# ==== Cross-links ====
relatedGuides:
  - "/quests/alexs-request"
  - "/quests/mothers-gold-watch"
  - "/items/blue-potion"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (10301), NPC (Chief Stan), level (18), collection requirement (15 Green + 15 Blue Mushroom Caps), rewards (1371 EXP + 526 mesos + 10 Blue Potion guaranteed), and chain-next linkage to 10302 all pulled verbatim from the CoT 2 client datamine."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-23"
---
