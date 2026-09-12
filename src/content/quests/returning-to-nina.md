---
questId: "1004"
name: "Returning to Nina"
category: "tutorial"
tagline: "Sen wants Mushroom Soup. Walk 20 pixels back to Nina and tell her. The world's simplest delivery quest, and the completion payoff for the Nina/Sen tutorial chain."

# ==== Requirements ====
levelMin: 1
classReq: "Beginner (Maple Island)"
prerequisiteQuest: "what-sen-wants-to-eat"

# ==== NPC / location ====
npcName: "Sen"
npcLocation: "Maple Island - Amherst (delivery to Nina)"
npcId: 2001  # canonical GMS/83 WZ ID (Maple Island 200x block)

# ==== Chain ====
chainName: "Nina and Sen's Dinner"
chainStep: 2
chainLength: 2

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  Sen wants Mushroom Soup for dinner. Better tell Nina now.

  You told Nina what Sen wants for dinner.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "3 EXP"
    details: "The tutorial's smallest meaningful reward. This isn't about progression - it's the completion checkmark for finishing your first two-NPC information chain."

# ==== Editorial ====
editorial: |
  <p>Walk from Sen's house back to Nina's house (literally 20
  pixels). Tell Nina about the Mushroom Soup. Done. Total
  round-trip time: about 30 seconds.</p>

  <p>The 3 EXP reward is genuinely nominal - what this quest
  actually rewards is the completion-checkmark: "yes, I know
  how to complete a delivery chain now." Every subsequent
  MapleStory quest builds on this: some NPC will ask you to
  visit another NPC and report back, and by the time it
  happens at level 30 with a life-changing skill book on the
  line, this Nina/Sen chain has already made the pattern
  automatic.</p>

  <p><strong>Sibling to the Sera's Mirror chain.</strong> Both
  are 2-step Maple Island tutorial chains teaching the same
  pattern (visit NPC B, return to NPC A). Sera's Mirror uses
  a physical item; this one uses just information. Together
  they cover the two variants you'll see for the entire game.</p>

callout: |
  <strong>Mushroom Soup is not a real item.</strong> Nina never
  actually cooks anything. The soup is a narrative device
  purely to give the delivery something to be about. Don't go
  looking for Mushroom Soup as a consumable in your inventory
  or in the crafting menu - it doesn't exist as a game object.

# ==== Cross-links ====
relatedGuides:
  - "/quests/what-sen-wants-to-eat"
  - "/quests/borrowing-seras-mirror"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (1004), NPC (Sen), level (1), 3 EXP reward, and chain-parent linkage to 1003 all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-23"
---
