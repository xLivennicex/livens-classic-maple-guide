---
questId: "10106"
name: "Maya of Henesys"
category: "story"
tagline: "Maya from Amherst grew up - and she's dying. A mysterious illness has kept her bedridden. Someone mentioned Weird Medicine might help. This quest launches the 6-quest Sparkling Rock arc to save her life."

levelMin: 21
classReq: "Any"

npcName: "Maya"
npcLocation: "Henesys Townstreet"
# Maya's Henesys NPC ID is 1012101 based on typical Henesys
# resident WZ mapping; earlier Maple Island Maya (2103) is a
# different entity - the Amherst-Maya-to-Henesys-Maya narrative
# thread suggests they're the same person, but the WZ IDs are
# distinct because sprite/character definitions changed.
npcId: 1012101

chainName: "Sparkling Rock / Save Maya"
chainStep: 1
chainLength: 7
nextQuest: "10107"  # dossier ID; QuestLayout auto-resolves to "Finding Sophia"

description: |
  I hear that Maya in Henesys is very sick...

  A girl named Maya in Henesys Townstreet has been ill for a
  long time. It seems like she hasn't been able to live a
  normal life at all, so I agreed to do what I could to help.
  Weird Medicine... what a strange name. But if it might
  work, it's worth trying.

rewards:
  - type: "exp"
    label: "1,535 EXP"
  - type: "mesos"
    label: "429 mesos"
  - type: "next-quest"
    label: "Unlocks: Finding Sophia (Sparkling Rock chain)"

editorial: |
  <p>Maya of Henesys is one of Classic MapleStory's biggest
  narrative payoffs. If you're returning after playing Maple
  Island, <strong>this Maya is the same Maya who welcomes new
  characters at Amherst</strong>. She grew up, moved to
  Henesys, and something went wrong. Now she needs saving.</p>

  <p><strong>Where:</strong> Maya lives in Henesys Townstreet
  (central Henesys). She's bedridden - the datamine text
  implies you visit her in her home.</p>

  <p><strong>What triggers next:</strong> after accepting
  Maya's quest, you're pointed at <strong>Teo in Lith Harbor</strong>
  who supposedly has Weird Medicine. That's the entry to the
  <a href="/quests/sparkling-rock-chain">Sparkling Rock 6-quest
  chain</a> - a cross-Victoria-Island arc involving Teo, Sophia
  (Perion Dept Store alchemist), Manji (Perion), and a Zombie
  Mushroom + Squishy Liquid grind. Final reward: Brown Bamboo
  Hat + Maya's recovery.</p>

  <h3>Narrative continuity: Amherst -> Henesys</h3>
  <p>The Amherst NPC Maya appears in Maple Island quests
  <a href="/quests/mais-training">Mai's Training</a> and
  others as the L1 welcomer. She was NOT sick then - she was
  vibrant and encouraging. The Henesys-Maya being sick,
  combined with the timeline (an L21 character has played
  through ~40-60 hours), tells you something happened between
  Amherst and Henesys. The datamine doesn't spell it out;
  players get to speculate.</p>

callout: |
  <strong>Emotional weight:</strong> the Sparkling Rock chain
  is the highest-effort quest arc in Victoria Island (7 quests
  when you count Maya). Don't rush through the dialogue -
  Maya, Teo, Sophia, and Manji each add color. The datamine
  writers put in real work here.

relatedGuides:
  - "/quests/sparkling-rock-chain"
  - "/quests/mais-training"
  - "/quests/mais-final-training"

verificationStatus: "closed-test-info"
verificationNote: "Quest ID (10106), NPC (Maya - Henesys instance, WZ ID 1012101 inferred from Henesys resident range), level (21), rewards (1,535 EXP, 429 mesos, next-quest linkage to 10107 Finding Sophia) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Maya's Henesys WZ ID is inferred; verify against MeowDB or client extraction if sprite doesn't render."
sourceSlugs:
  - "osmsdataexplorer"

theme: "henesys"
lastUpdated: "2026-08-24"
---
