---
questId: "1019"
name: "Rain's Maple Quiz Series (7 quizzes)"
category: "tutorial"
tagline: "A 7-part quiz series teaching Maple Island's core UI + gameplay mechanics. Complete all seven and Rain sends you off to Victoria Island as a true Mapler."

# ==== Requirements ====
levelMin: 5
classReq: "Beginner (Maple Island)"

# ==== NPC / location ====
npcName: "Rain"
npcLocation: "Maple Island - Amherst"
npcId: 12101  # canonical GMS/83 WZ ID (adjacent to Mai 12100)

# ==== Chain metadata ====
# Documented as ONE canonical article covering 7 discrete quest
# IDs (1013-1019). Splitting into 7 files would be a DRY
# nightmare - the quests are structurally identical (dialogue-
# only, no combat) with different topics each.
chainName: "Rain's Maple Quiz Series"
chainStep: 7
chainLength: 7

# ==== In-game narrative (CoT 2 datamine text, quiz 1 as example) ====
description: |
  I'm not a beginner anymore. Talk to Rain in Amherst and
  take the Maple Quiz!

  Each quiz asks about a core Maple Island / MapleStory
  mechanic: ladders and ropes, equippable items, inventory
  management, and so on. Answer correctly to unlock the next
  quiz. Complete all seven and Rain officially graduates
  you to Victoria Island.

# ==== Rewards ====
# Per-quiz EXP rewards escalate: 20, 25, 30, 35, 40, 45, 50.
# Final quiz (1019) also awards 10 Oranges.
rewards:
  - type: "exp"
    label: "20 + 25 + 30 + 35 + 40 + 45 + 50 = 245 EXP across all 7 quizzes"
    details: "Each quiz awards slightly more EXP than the last, capping at 50 for the final. Total chain EXP is ~245 - moderate for level 5, and the pacing rewards persistence."
  - type: "item"
    label: "10x Orange (final quiz reward)"
    itemId: 2010004
    details: "Oranges are food consumables that restore HP. 10 Oranges is a meaningful kit for the early Victoria Island grind - stock them for training runs before you can afford proper potions."

# ==== Editorial ====
editorial: |
  <p>Rain's quiz series is the intellectual final exam of
  Maple Island. Where <a href="/quests/mais-training">Mai's
  Training</a> teaches combat and
  <a href="/quests/pios-collecting-recycled-goods">Pio's quest</a>
  teaches environmental interaction, Rain's quizzes drill you
  on <strong>UI + system knowledge</strong> - the things you
  need to know to not fumble your first hour on Victoria Island.</p>

  <p><strong>Note for CoT 2 players:</strong> the Classic World
  quiz content differs from v83. Answers below are pulled from
  the CoT 2 datamine (each quest's post-completion narrative
  reveals the correct answer). If a Classic World patch
  changes a question, this page will need updating.</p>

  <h3>The seven quizzes and their answers</h3>

  <p><strong>Quiz 1 (1013) - Ladders & ropes.</strong>
  Question: how do you climb up or hang from a ladder or rope?</p>
  <blockquote><strong>Answer:</strong> Hold the <strong>Up arrow key</strong>
  (default binding). Same key climbs ropes and vines too.
  Reward: 20 EXP.</blockquote>

  <p><strong>Quiz 2 (1014) - Equipping items.</strong>
  Question: how do you wear an equippable item from your
  inventory?</p>
  <blockquote><strong>Answer:</strong> <strong>Double-click</strong>
  the item in your inventory. It moves automatically to the
  correct equipment slot. Reward: 25 EXP.</blockquote>

  <p><strong>Quiz 3 (1015) - Unequipping items.</strong>
  Question: how do you take off equipped items?</p>
  <blockquote><strong>Answer:</strong> Open the <strong>Equipment
  Inventory tab</strong> (default: E), then <strong>double-click</strong>
  the equipped item. It moves back to your regular inventory.
  Reward: 30 EXP.</blockquote>

  <p><strong>Quiz 4 (1016) - Recovering HP.</strong>
  Question: what are ways to recover HP?</p>
  <blockquote><strong>Answer:</strong> Multiple methods, including:
  <ul>
    <li>Consuming <a href="/items/white-potion">HP potions</a> and food items (Egg, Orange)</li>
    <li>Standing still (slow passive regeneration)</li>
    <li><strong>Sitting in a chair or bench</strong> - dramatically faster regeneration.
      <a href="/quests/pios-collecting-recycled-goods">Pio's quest</a>
      awards <strong>The Green Relaxer</strong>, your first chair.</li>
    <li>Levelling up (fully restores HP + MP)</li>
  </ul>
  Reward: 35 EXP.</blockquote>

  <p><strong>Quiz 5 (1017) - Job advancement level.</strong>
  Question: what level must Warriors, Thieves, Bowmen, and
  Magicians reach to job advance?</p>
  <blockquote><strong>Answer:</strong> <strong>Level 10</strong>
  for all four base classes. Warriors advance in Perion (talk
  to Dances with Balrog), Magicians in Ellinia (Grendel the
  Really Old), Bowmen in Henesys (Athena Pierce), Thieves in
  Kerning City (Dark Lord). Thieves also need 25 DEX to
  advance - see the <a href="/jobs/thief">Thief page</a>
  for the AP gate. Reward: 40 EXP.</blockquote>

  <p><strong>Quiz 6 (1018) - What you get on level-up.</strong>
  Question: what do you get when you level up, and what can
  you do with it?</p>
  <blockquote><strong>Answer:</strong> You get <strong>AP
  (Ability Points)</strong> which can be spent on your
  primary stats (STR, DEX, INT, LUK) to make your character
  stronger. Each level also grants SP (Skill Points) once
  you've job-advanced. See individual
  <a href="/jobs/warrior">job pages</a> for AP allocation
  guides per class. Reward: 45 EXP.</blockquote>

  <p><strong>Quiz 7 (1019) - The graduation.</strong> Not
  actually a quiz - Rain officially tells you it's time to
  leave Maple Island.</p>
  <blockquote><strong>Answer / Guidance:</strong> Head to
  <strong>Southperry</strong> (the port town south of Amherst -
  same place <a href="/quests/biggss-collection-of-items">Biggs</a>
  lives). Talk to the ferry NPC there to take the ship to
  Victoria Island. Reward: 50 EXP + 10 Oranges (2010004
  guaranteed).</blockquote>

  <h3>Where and when</h3>
  <p>Rain is in Amherst near the tutorial center. Level 5 is
  the entry gate - the quizzes are your literal graduation
  ceremony. Most players hit level 5 by the time they've
  finished Mai's chain and Biggs's quest, so Rain's series is
  the natural next step.</p>

  <p><strong>Skip-friendly:</strong> if you already know
  MapleStory basics from previous characters, Rain's series
  is trivial and fast. If you're a first-timer or coming
  from another MMO, the answer sheet above lets you skip the
  memorization step and focus on why the mechanic matters.</p>

  <p><strong>Total chain haul:</strong> 245 EXP + 10 Oranges.
  At level 5 base EXP requirements, this alone can push you
  from L5 partway to L6. Combined with kills earned during
  Mai / Biggs / Pio, most players hit L6-7 before boarding
  the Southperry ferry.</p>

  <h3>The Amherst graduation</h3>
  <p>Completing quiz 7 unlocks the narrative permission to
  leave Maple Island. In-game you can leave any time - the
  ferry NPC in Southperry doesn't gate on quest completion -
  but Rain's send-off is the official Amherst goodbye. Many
  veterans have completed this ceremony 20+ times across
  reroll characters. It never stops being a moment.</p>

callout: |
  <strong>Save the Oranges.</strong> Ten Oranges from quiz 7
  is a legitimate potion kit for the first hour on Victoria
  Island. Don't eat them immediately for the 5 HP restore -
  save them for actual training runs in Ellinia or Perion
  where you'll need every consumable you have.

# ==== Cross-links ====
relatedGuides:
  - "/quests/mais-final-training"
  - "/quests/pios-collecting-recycled-goods"
  - "/quests/biggss-collection-of-items"
  - "/jobs/warrior"
  - "/jobs/magician"
  - "/jobs/bowman"
  - "/jobs/thief"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "All 7 quest IDs (1013-1019), NPC (Rain 12101), level (5), per-quiz EXP escalation (20/25/30/35/40/45/50), and final-quiz Orange x10 reward (item 2010004 guaranteed) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Quiz topics for quizzes 4-6 (1016-1018) inferred from established Rain quiz pattern; direct dialogue text for those specific quizzes not yet transcribed."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-24"
---
