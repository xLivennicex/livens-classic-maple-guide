---
questId: "1010"
name: "Mai's Final Training"
category: "tutorial"
tagline: "Mai's graduation lesson: understand your own abilities by pushing them. The completion beat for Maple Island's most-developed combat tutorial."

# ==== Requirements ====
levelMin: 3
classReq: "Beginner (Maple Island)"
prerequisiteQuest: "mais-training"

# ==== NPC / location ====
npcName: "Mai"
npcLocation: "Maple Island - A Split Road"
npcId: 12100  # canonical GMS/83 WZ ID

# ==== Chain ====
chainName: "Mai's Combat Training"
chainStep: 2
chainLength: 2

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  Mai's training is just about defeating monsters, but it
  seems really useful for learning how to hunt. Let's continue
  with Mai's training.

  Mai believes that, while understanding my abilities is
  important, challenging myself with progressively tougher
  targets is the real path to mastery.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "100 EXP"
    details: "The largest single-quest EXP reward on Maple Island's tutorial track. Combined with step 1, Mai's chain awards ~170 EXP."
  - type: "mesos"
    label: "150 mesos"
    details: "Mai is one of the few Maple Island NPCs who awards actual mesos. Save these for a Return Scroll or use them at Amherst's item shop for basic gear."
  - type: "item"
    label: "10x Egg"
    itemId: 2010002
    details: "The chain finale hands out another 10 Eggs. Total across both Mai quests: 15 Eggs. Enough small HP restores to comfortably finish Maple Island's remaining content."

# ==== Editorial ====
editorial: |
  <p>Mai's Final Training is the graduation ceremony for the
  Maple Island combat tutorial. Narratively, Mai admits that
  her training is "just defeating monsters" but frames it as
  the essential skill you'll need everywhere else. Which is
  correct: 95% of MapleStory training IS defeating monsters.</p>

  <p><strong>Where:</strong> return to Mai at A Split Road
  after step 1's hunt. She rewards you and points you toward
  the next set of Amherst NPCs (Biggs, Pio, Rain) for further
  optional pre-Victoria content.</p>

  <p><strong>Chain summary:</strong> the full Mai arc (1009 +
  1010) awards 170 EXP, 150 mesos, and 15 Eggs. Combined with
  the mob EXP from the training hunt itself, expect to gain
  1-2 levels running Mai's chain end-to-end.</p>

  <p><strong>What next?</strong> After Mai you're ready for:
  <a href="/quests/biggss-collection-of-items">Biggs's
  Collection of Items</a> in Southperry (which awards your
  first real weapon), <a href="/quests/pios-collecting-recycled-goods">Pio's
  Collecting Recycled Goods</a> (which awards a Chair), and
  <a href="/quests/rains-maple-quiz-series">Rain's Maple Quiz
  Series</a> (7-part quiz culminating in your Victoria Island
  send-off).</p>

callout: |
  <strong>Money for the first time.</strong> Mai's 150 mesos
  are the first significant meso payout most players see.
  Coming from zero, it feels enormous. Coming from level 30+,
  you'll laugh at the number. This is the moment MapleStory
  starts teaching the economy exists.

# ==== Cross-links ====
relatedGuides:
  - "/quests/mais-training"
  - "/quests/biggss-collection-of-items"
  - "/quests/pios-collecting-recycled-goods"
  - "/quests/rains-maple-quiz-series"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (1010), NPC (Mai 12100), 100 EXP + 150 mesos + 10x Egg (2010002 guaranteed), and chain-parent linkage to 1009 all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-24"
---
