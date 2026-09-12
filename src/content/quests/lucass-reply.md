---
questId: "1008"
name: "Lucas's Reply"
category: "tutorial"
tagline: "Bring Lucas's reply back to Maria. She's relieved - and grateful enough to give you a random pick from the classic Maple Island Skullcap/Headband cosmetic set."

# ==== Requirements ====
levelMin: 2
classReq: "Beginner (Maple Island)"
prerequisiteQuest: "letter-for-lucas"

# ==== NPC / location ====
npcName: "Lucas"
npcLocation: "Maple Island - Amherst (delivery to Maria)"
npcId: 12000  # canonical GMS/83 WZ ID

# ==== Chain ====
chainName: "Maria and Lucas"
chainStep: 2
chainLength: 2

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  I delivered Maria's Letter to Lucas in Amherst, and he wrote
  her a reply. I should bring it back to Maria now.

  Maria looked relieved after reading the reply from Lucas.
  Now I want to know what was in that letter...

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "50 EXP"
    details: "Nominal - notable mostly by contrast with Returning to Nina's 3 EXP. Maple Island rewards scale roughly with how meaningful the quest 'feels' narratively."
  - type: "item"
    label: "1 random Level 5 Cosmetic Hat"
    details: "RANDOM pick from seven L5 hats: Brown Skullcap (1002000), Green Skullcap (1002001), Red Headband (1002003, +5 MHP), Black Headband (1002004, +1 ACC), Green Headband (1002005), Yellow Headband (1002006), Blue Headband (1002007). All are 6 PDD, 7 slots. Some variants have a minor stat bonus; most are pure cosmetic."

# ==== Editorial ====
editorial: |
  <p>Walk from Lucas's house back to Maria's house. Deliver
  the reply. Maria reads it, smiles - and hands you a
  random cosmetic hat.</p>

  <p><strong>The random hat pool:</strong> all seven possible
  outcomes are Level 5 hats with 6 Weapon Defense and 7
  upgrade slots. The stat differences are minor - Red
  Headband adds +5 MaxHP, Black Headband adds +1 Accuracy,
  the rest are pure cosmetic variants. All 7 are usable by
  any class.</p>

  <p><strong>Why this quest matters:</strong> character
  customization. The Skullcap / Headband set was the first
  visible cosmetic personalization most v83 players ever
  had. Ten years later, longtime players still remember
  which color they got on Maple Island. In-game screenshots
  from 2004-2008 era MapleStory show these hats everywhere.</p>

  <p><strong>Reroll strategy:</strong> if you got a color you
  don't want, you can't reroll - the drop is one-per-
  character. Either equip whatever you got, delete + reroll
  the entire character (extreme), or wait to trade with a
  friend who rolled a different color.</p>

callout: |
  <strong>Sibling patterns on Maple Island:</strong>
  <ul>
    <li><a href="/quests/borrowing-seras-mirror">Sera's Mirror</a> - item delivery + return</li>
    <li><a href="/quests/what-sen-wants-to-eat">Nina/Sen's Dinner</a> - information delivery + return</li>
    <li>Letter for Lucas / Lucas's Reply - item delivery + reply return (this chain)</li>
  </ul>
  Three chains, three variants of the same pattern. By the
  time you leave Maple Island, you've internalized the
  delivery-quest flow that dominates the entire game.

# ==== Cross-links ====
relatedGuides:
  - "/quests/letter-for-lucas"
  - "/quests/what-sen-wants-to-eat"
  - "/quests/borrowing-seras-mirror"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (1008), NPC (Lucas 12000), level (2), 50 EXP reward, and all 7 random cosmetic hat drop IDs (Brown Skullcap 1002000, Green Skullcap 1002001, Red Headband 1002003, Black Headband 1002004, Green Headband 1002005, Yellow Headband 1002006, Blue Headband 1002007) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-24"
---
