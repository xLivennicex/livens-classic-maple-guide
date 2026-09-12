---
questId: "10105"
name: "Camila's Gem"
category: "story"
tagline: "Camila from Henesys is too timid to deliver a Sparkling Glass Marble to Utah at the Pig Farm. Do it for her - roll on 30 Cake or the Pig Illustrated collectible book."

levelMin: 24
classReq: "Any"

npcName: "Camila"
npcLocation: "Henesys"
# Camila is a Henesys resident featured in the Community Board
# resident roster. WZ ID pending confirmation against v83 pool.

chainName: "Standalone"
chainStep: 1
chainLength: 1

description: |
  I hear that Camila in Henesys is worried about something...

  I met Camila in Henesys, and, because of her timid
  disposition, she needs me to deliver Sparkling Glass Marble
  to Utah for her. I can get to Utah's Pig Farm through the
  Henesys southern exit.

rewards:
  - type: "exp"
    label: "2,531 EXP"
  - type: "mesos"
    label: "702 mesos"
  - type: "item"
    label: "1x RANDOM: 30x Cake OR Pig Illustrated"
    itemId: 2020002
    itemSlug: "cake"
    details: "RANDOM 1-of-2 roll: 30x Cake (2020002) - substantial dual HP+MP food kit, OR Pig Illustrated (1322014) - a Monster Illustration book. The Pig Illustrated is the flavor prize; Cake is the practical one."

editorial: |
  <p>Camila's Gem is a delivery quest with an unusual reward
  structure: random 1-of-2 where one option is a consumable
  stack and the other is a collectible book. Very different
  value depending on what you roll.</p>

  <h3>The two prize outcomes</h3>
  <ul>
    <li><strong>30 Cake (best for L24 grinding):</strong>
      dual 100 HP + 100 MP food consumables. See
      <a href="/items/cake">Cake page</a> for the ratio math -
      30 Cakes is a meaningful mid-training buffer.</li>
    <li><strong>Pig Illustrated (1322014):</strong> a Monster
      Illustration entry - part of MapleStory's Monster Book
      system. Rare and collectible, but functionally the same
      as buying an empty illustration book from a vendor.
      Collector's item; consider FM-flipping if you rolled it.</li>
  </ul>

  <h3>Where Utah's Pig Farm is</h3>
  <p>Exit Henesys through the southern portal. Utah's Pig
  Farm is one screen south - a themed farm map with
  Pig-family mobs. Utah stands near the entrance. Deliver
  the Sparkling Glass Marble and return to Camila.</p>

  <h3>Cross-narrative: Camila</h3>
  <p>Camila appears in the
  <a href="/quests/henesys-community-board">Henesys Community
  Board</a> resident greeting series (quests 506005-506006).
  This gem quest is her personal follow-up - the citizenship
  greeting introduces her, this quest establishes her timid
  personality and social anxiety.</p>

callout: |
  <strong>Timid NPC pattern:</strong> Camila's inability to
  deliver something herself is a recurring quest hook in
  Classic MapleStory. Similar patterns: Sen on Maple Island,
  various Community Board residents. The game likes to make
  YOU the confident outsider who moves items around.

relatedGuides:
  - "/items/cake"
  - "/quests/henesys-community-board"

verificationStatus: "closed-test-info"
verificationNote: "Quest ID (10105), NPC (Camila - WZ ID pending), level (24), rewards (2,531 EXP, 702 mesos, random 1-of-2: 30x Cake 2020002 OR Pig Illustrated 1322014, both guaranteed=False flagging random roll) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "henesys"
lastUpdated: "2026-08-25"
---
