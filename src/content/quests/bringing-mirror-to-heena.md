---
questId: "1001"
name: "Bringing a Mirror to Heena"
category: "tutorial"
tagline: "Step 2 of Sera's Mirror. Sera hands you the mirror; you walk it back to Heena. The payoff step of the very first quest chain."

# ==== Requirements ====
levelMin: 1
classReq: "Beginner (Maple Island)"
prerequisiteQuest: "borrowing-seras-mirror"

# ==== NPC / location ====
# The datamine attributes this quest to Sera (she hands you the mirror
# to deliver back). Delivery target is Heena.
npcName: "Sera"
npcLocation: "Maple Island - Amherst (delivery to Heena)"
npcId: 2100  # canonical GMS/83 WZ ID (Sera)

# ==== Chain ====
chainName: "Sera's Mirror"
chainStep: 2
chainLength: 2

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  I got the mirror from Sera, who was doing her laundry. I have
  to take it to Heena now.

  I got the mirror from Sera, who was doing her laundry, and
  took it to Heena.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "2 EXP"
    details: "Yes, two. The reward is nominal - the point is completing your first-ever quest chain, not the number."

# ==== Editorial ====
editorial: |
  <p>Sera is doing her laundry on a lower Amherst screen. Walk to
  her, receive the mirror, walk back to Heena, hand it over.
  End of chain. Total round-trip time: about 60 seconds.</p>
  <p>The reward really is <strong>2 EXP</strong> - practically
  meaningless numerically. What this quest actually rewards is
  the completion-checkmark: your first finished chain, the ping
  sound, and the confirmation that yes, you now understand how
  quests work. Every subsequent Maple Island quest builds on this
  foundation.</p>
  <p>If you skip this second step, the chain sits in your quest
  log forever. Some completionist players find that mildly
  distressing, which is a good reason to do it just to close the
  loop.</p>

callout: |
  <strong>Sera is a repeat NPC.</strong> She's the sister in the
  laundry-mirror story, but she's also the tutorial's clothing-
  and-inventory NPC in some later Maple Island chains. If you see
  her again, that's why - one NPC, multiple tutorial roles.

# ==== Cross-links ====
relatedGuides:
  - "/quests/borrowing-seras-mirror"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (1001), name, NPC (Sera), in-game text, and 2-EXP reward all pulled verbatim from the CoT 2 client datamine. The prerequisite chain-step relationship to id 1000 (Borrowing Sera's Mirror) is datamine-confirmed."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-23"
---
