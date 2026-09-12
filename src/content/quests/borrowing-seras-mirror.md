---
questId: "1000"
name: "Borrowing Sera's Mirror"
category: "tutorial"
tagline: "The very first quest of your MapleStory life. Talk to Heena. Fetch a mirror. Learn what a quest even is."

# ==== Requirements ====
levelMin: 1
classReq: "Beginner (Maple Island)"

# ==== NPC / location ====
npcName: "Heena"
npcLocation: "Maple Island - Amherst"
npcId: 2101  # canonical GMS/83 WZ ID (NOT the ohmi datamine ordinal)

# ==== Chain ====
chainName: "Sera's Mirror"
chainStep: 1
chainLength: 2
nextQuest: "bringing-mirror-to-heena"  # now live

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  Go talk to Heena.

  I met Heena, who's worried the sun is damaging her skin. I should
  get her mirror from her sister, Sera, so she can check.

  Heena asked me to get a mirror from her sister, so I walked all
  the way to Sera.

# ==== Rewards ====
rewards:
  - type: "next-quest"
    label: "Unlocks step 2 of 2"
    details: "Bringing the Mirror to Heena - the payoff step that grants the actual reward"

# ==== Editorial ====
editorial: |
  <p><strong>This is quest zero.</strong> The literal first quest a
  brand-new character encounters in MapleStory Classic World, and
  the moment the game tells you "oh right, quests are a thing."</p>
  <p>Heena stands near the spawn point in Amherst on Maple Island.
  Talk to her, accept the quest, walk to Sera (a few screens over -
  no combat required), pick up the mirror, then return to Heena.
  It's a 90-second round trip that exists purely to teach the
  quest UI.</p>
  <p><strong>Actual reward comes on step 2</strong>, not this step.
  The next quest in the chain ("Bringing a Mirror to Heena") is
  where the EXP and mesos land.</p>

callout: |
  <strong>Don't skip the tutorial chain.</strong> Yes, you can grind
  Snails to level 8 and skip every Maple Island quest. But the
  tutorial quests collectively hand you 1-2 levels of free EXP,
  teach you every UI panel, and give you a small stack of starter
  potions. On a fresh character, doing them is faster than skipping
  them.

# ==== Cross-links ====
relatedGuides: []

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID, name, giver NPC, level, in-game text, and 2-step chain length pulled verbatim from the CoT 2 client datamine."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-23"
---
