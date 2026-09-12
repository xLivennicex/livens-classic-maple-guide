---
questId: "506000"
name: "To Henesys, the Prairie Town"
category: "story"
tagline: "The entry point to the Henesys Citizenship system. Level 12+, sends you to the Community Board for your first resident greeting quest."

levelMin: 12
classReq: "Any"

npcName: "Henesys Town Sign"
npcLocation: "Henesys entrance"
# No NPC - triggered by area or town-clerk interaction.
# Community Board itself has no NPC WZ ID.

chainName: "Henesys Citizenship - Entry"
chainStep: 1
chainLength: 1

description: |
  Mentally exhausted from endless adventuring, a peaceful
  rest sounds pretty good right now.

  It seems Henesys offers various services for adventurers.
  I should drop by Henesys if I'm ever in the area. Only
  characters at Level 12 or higher can complete this quest.

rewards:
  - type: "exp"
    label: "321 EXP"
  - type: "mesos"
    label: "351 mesos"
  - type: "item"
    label: "5x Red Potion"
    itemId: 2000000
    itemSlug: "red-potion"
  - type: "item"
    label: "5x Blue Potion"
    itemId: 2000003
    itemSlug: "blue-potion"
  - type: "next-quest"
    label: "Unlocks: Community Board greeting series"

editorial: |
  <p>"To Henesys, the Prairie Town" is the front door to
  Classic World's <strong>Citizenship system</strong>. Once
  you complete this quest at level 12+, the Community Board
  in front of Henesys Town Hall unlocks a series of
  citizen-greeting quests (see
  <a href="/quests/henesys-community-board">Henesys Community
  Board series</a>).</p>

  <p><strong>Why Citizenship matters:</strong> the Citizenship
  system is a parallel progression track in Classic World -
  it's the mechanic that ties characters to specific towns
  and unlocks town-specific benefits (shop discounts, teleport
  access, boss loot bonuses in some cases). See the
  <a href="/citizenship">full Citizenship guide</a>
  for the whole system.</p>

  <p><strong>Where:</strong> the quest triggers automatically
  when you visit Henesys at level 12+. If it doesn't appear
  in your quest log, talk to the town sign or nearest guard
  NPC to prompt it.</p>

callout: |
  <strong>Don't skip this if you're planning to main this
  character.</strong> Citizenship unlocks are permanent per
  character - if you're going to spend hours in Henesys
  anyway (Bowman first job area, Bunny hunting, Henesys PQ
  hub in v83 - though HPQ is absent in CoT), the citizenship
  benefits compound over hundreds of hours.

relatedGuides:
  - "/quests/henesys-community-board"
  - "/citizenship"

verificationStatus: "closed-test-info"
verificationNote: "Quest ID (506000), level (12), rewards (321 EXP, 351 mesos, 5x Red Potion 2000000, 5x Blue Potion 2000003) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. NPC trigger (town sign, area event, or town clerk) not explicitly named in datamine."
sourceSlugs:
  - "osmsdataexplorer"

theme: "henesys"
lastUpdated: "2026-08-24"
---
