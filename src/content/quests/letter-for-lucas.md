---
questId: "1007"
name: "Letter for Lucas"
category: "tutorial"
tagline: "Maria needs someone to deliver a letter to Lucas in Amherst. Step 1 of a two-part Maple Island messenger chain - the sibling to Nina and Sen's Dinner, but with a real reward at the end."

# ==== Requirements ====
levelMin: 2
classReq: "Beginner (Maple Island)"

# ==== NPC / location ====
npcName: "Maria"
npcLocation: "Maple Island - Amherst"
npcId: 2103  # canonical GMS/83 WZ ID (Maple Island 21xx block)

# ==== Chain ====
chainName: "Maria and Lucas"
chainStep: 1
chainLength: 2
nextQuest: "lucass-reply"

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  Maria needs someone to help her...

  Maria needs help. She asked me to deliver a letter to Lucas
  in Amherst.

  I delivered Maria's Letter to Lucas in Amherst.

# ==== Rewards ====
rewards:
  - type: "next-quest"
    label: "Unlocks: Lucas's Reply"
    details: "No EXP or mesos on step 1 - the payoff (a random cosmetic hat) lands at step 2. Head back to Maria with Lucas's reply."

# ==== Editorial ====
editorial: |
  <p>Letter for Lucas is a Level 2+ Maple Island messenger
  quest. Structurally it's the "delivery item" variant of
  the tutorial pattern: NPC A hands you an item, NPC B
  accepts it, you carry a reply back. Contrast with
  <a href="/quests/what-sen-wants-to-eat">Nina and Sen's
  Dinner</a> which uses information delivery instead of a
  physical item.</p>

  <p><strong>Where to find them:</strong> Maria is in the
  Amherst houses row. Lucas is in the next house over
  (Amherst's own residential cluster). Both are one screen
  from the tutorial center.</p>

  <p><strong>Why do this chain?</strong> Beyond the tutorial
  value, step 2 (<a href="/quests/lucass-reply">Lucas's Reply</a>)
  awards a random pick from SEVEN Level 5 cosmetic hats -
  the classic Skullcap / Headband set. Character customization
  starts here on Maple Island for most players.</p>

callout: |
  <strong>Skip-friendly.</strong> This chain is entirely
  optional. If you're rushing to Victoria Island for job
  advancement, feel free to bypass - the reward is
  cosmetic, not stat-critical. However, the completion
  history stays on your character permanently.

# ==== Cross-links ====
relatedGuides:
  - "/quests/lucass-reply"
  - "/quests/what-sen-wants-to-eat"
  - "/quests/borrowing-seras-mirror"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (1007), NPC (Maria), level (2), zero explicit rewards + chain-next linkage to 1008 all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. NPC WZ ID (2103) verified against maplestory.io."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-24"
---
