---
questId: "10101"
name: "Mrs. Ming Ming's Second Worry"
category: "story"
tagline: "The Henesys carnival needs food. Mrs. Ming Ming sends you to Estelle for the special sauce - this quest launches the Estelle chain."

levelMin: 15
classReq: "Any"
prerequisiteQuest: "mrs-ming-mings-first-worry"

npcName: "Mrs. Ming Ming"
npcLocation: "Henesys"
npcId: 1012106

chainName: "Mrs. Ming Ming's Worries"
chainStep: 2
chainLength: 2

description: |
  I hear Mrs. Ming Ming in Henesys has a new concern...

  I saw Mrs. Ming Ming again in Henesys; she's still
  preparing for the village carnival. She said that this time
  she needs food for the carnival and asked me to collect
  the ingredients - starting with Estelle's Special Sauce.

rewards:
  - type: "exp"
    label: "705 EXP"
  - type: "mesos"
    label: "438 mesos"
  - type: "next-quest"
    label: "Unlocks: Estelle's Request chain"

editorial: |
  <p>Mrs. Ming Ming's Second Worry is the narrative pivot
  that connects the Henesys carnival prep to the entire
  Estelle chain. From here you're pointed at
  <a href="/quests/estelles-request">Estelle in the Field
  South of Ellinia</a>, and by the end of Estelle's Special
  Sauce (which rewards the Ribboned Pig Headband) you'll
  have delivered the Sauce back to Mrs. Ming Ming.</p>

  <p><strong>Chain interlock:</strong></p>
  <ol>
    <li>Mrs. Ming Ming's First Worry (10100) - decorations</li>
    <li>Mrs. Ming Ming's Second Worry (10101, this quest) -
      food, pointer to Estelle</li>
    <li><a href="/quests/estelles-request">Estelle's Request
      (10102)</a> - Garnet fetch for Estelle</li>
    <li><a href="/quests/estelles-special-sauce">Estelle's
      Special Sauce (10103)</a> - deliver Sauce + Pig's Heads
      + Octopus Legs to Mrs. Ming Ming. Reward: Ribboned Pig
      Headband L27.</li>
  </ol>

  <p><strong>What you're doing right now:</strong> the quest
  itself asks for carnival food ingredients as a fetch. But
  the datamine implies this step is more of a "here's your
  next lead" than a standalone task - Estelle takes over
  as your primary contact after this.</p>

callout: |
  <strong>Running order matters:</strong> this quest chain
  is 4 quests across 3 NPCs and 2 towns. If you accept out
  of order you may lock yourself into confusing quest logs.
  Recommended: complete both Mrs. Ming Ming quests first,
  THEN head to Ellinia for the Estelle steps.

relatedGuides:
  - "/quests/mrs-ming-mings-first-worry"
  - "/quests/estelles-request"
  - "/quests/estelles-special-sauce"
  - "/items/ribboned-pig-headband"

verificationStatus: "closed-test-info"
verificationNote: "Quest ID (10101), NPC (Mrs. Ming Ming 1012106), level (15), rewards (705 EXP, 438 mesos, chain-next linkage pointing toward Estelle's Request 10102) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "henesys"
lastUpdated: "2026-08-24"
---
