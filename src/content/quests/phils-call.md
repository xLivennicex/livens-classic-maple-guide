---
questId: "10001"
name: "Phil's Call"
category: "tutorial"
tagline: "Phil the Lith Harbor informant greets every new arrival from Maple Island. Your very first Victoria Island quest - a gentle welcome + 5 Red Potions + 5 Blue Potions."

levelMin: 8
classReq: "Any"

npcName: "Phil"
npcLocation: "Lith Harbor"

chainName: "Lith Harbor Welcome"
chainStep: 1
chainLength: 1

description: |
  It seems Phil, the informant of Lith Harbor, has something
  to say to all novice adventurers who have just arrived on
  Victoria Island.

  Phil is the first NPC to greet you off the Maple Island
  boat. He introduces you to the world beyond the tutorial
  and rewards you with starter potions to kick off your
  Victoria Island journey.

rewards:
  - type: "exp"
    label: "171 EXP"
  - type: "mesos"
    label: "204 mesos"
  - type: "item"
    label: "5x Red Potion"
    itemId: 2000000
    itemSlug: "red-potion"
  - type: "item"
    label: "5x Blue Potion"
    itemId: 2000003
    itemSlug: "blue-potion"

editorial: |
  <p>Phil's Call is <strong>the very first Victoria Island
  quest</strong>. If you just finished
  the Maple Island tutorial arc and stepped off the boat at Lith
  Harbor, Phil is right there waiting.</p>

  <p>The reward - 5 Red Potions + 5 Blue Potions - is
  intentionally modest. Phil's job is <strong>onboarding,
  not reward-giving</strong>. He points you toward the
  other Lith Harbor NPCs (Olaf, Teo, Jane) who'll set you
  on real quest paths.</p>

  <h3>Where Phil stands</h3>
  <p>Lith Harbor main dock area. He's the NPC with the
  clipboard - hard to miss when you first arrive. Talk
  to him BEFORE wandering off; you can accept the quest
  and complete it instantly without leaving the map.</p>

  <h3>What to do next after Phil</h3>
  <p>The Lith Harbor L8 quest cluster:</p>
  <ul>
    <li><a href="/quests/olaf-second-training">Olaf's
      Second Training</a> - continues from Olaf's initial
      L8 onboarding</li>
    <li><a href="/quests/teos-weird-hobby-chain">Teo's
      Weird Hobby chain</a> - 2 quests, the friendly
      sailor</li>
    <li>Head to any town starter - Perion (Warriors),
      Ellinia (Magicians), Henesys (Bowmen), or Kerning
      (Thieves) for job advancement at L10</li>
  </ul>

callout: |
  <strong>Do this instantly.</strong> Phil's Call is a
  10-second click quest with zero travel required. Free
  potions + tiny EXP. Never skip.

relatedGuides:
  - "/quests/olaf-second-training"
  - "/quests/teos-weird-hobby-chain"
  - "/items/red-potion"
  - "/items/blue-potion"

verificationStatus: "closed-test-info"
verificationNote: "Quest ID (10001), NPC (Phil - Lith Harbor informant, WZ ID pending), level (8), rewards (171 EXP, 204 mesos, 5x Red Potion 2000000 guaranteed, 5x Blue Potion 2000003 guaranteed) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "lith"
lastUpdated: "2026-08-26"
---
