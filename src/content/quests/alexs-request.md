---
questId: "10300"
name: "Alex's Request"
category: "story"
tagline: "A runaway kid named Alex is hiding on a Kerning City rooftop. He wants to go home to Henesys, but he's had a fight with his father. Step 1 of the classic Alex/Chief Stan reconciliation arc."

# ==== Requirements ====
levelMin: 18
classReq: "Any"

# ==== NPC / location ====
npcName: "Alex"
npcLocation: "Kerning City (rooftop)"
npcId: 1052000  # canonical GMS/83 WZ ID (verified maplestory.io)

# ==== Chain ====
chainName: "Alex and Chief Stan"
chainStep: 1
chainLength: 3
nextQuest: "talking-to-stan"

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  There is a runaway kid named Alex in Kerning City.

  On a lonely building rooftop in Kerning City, I met a boy
  named Alex, who's run away from home because of a fight with
  his father, Chief Stan, in Henesys. But Alex is exhausted
  from being on the streets and wants to go home. He asked me
  to talk to Chief Stan for him.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "959 EXP"
    details: "Modest at level 18 - the chain's payoff is at step 3, not here. Consider this the setup investment."
  - type: "mesos"
    label: "368 mesos"
    details: "Nominal. Chain rewards concentrate at step 3."
  - type: "next-quest"
    label: "Unlocks: Talking to Stan"
    details: "Head to Henesys entrance to find Chief Stan and try to broker peace."

# ==== Editorial ====
editorial: |
  <p>The Alex chain is one of Classic MapleStory's most-remembered
  intro-Kerning quests, precisely because it's <em>not</em> a
  combat quest. You're not killing anything - you're playing
  family therapist between a runaway teenager and his stern
  father. That framing is what makes step 3's emotional payoff
  land.</p>

  <p><strong>Where to find Alex:</strong> the rooftop of the
  building on the far east side of the main Kerning City map.
  There's a ladder up. Kids will remember this - it's a landmark
  for anyone who did the chain in v83.</p>

  <p><strong>Why level 18?</strong> The chain unlocks around the
  time most players are wrapping up their first job's early
  training and starting to explore beyond their home town.
  It's the game's way of saying "you're ready for a story
  now."</p>

callout: |
  <strong>Bring good boots.</strong> The chain routes you
  Kerning City -> Henesys -> Kerning -> Henesys across three
  quests. That's a lot of taxi mesos if you don't already have
  town scrolls. Level 18 is right about when Return Scrolls
  start being affordable.

# ==== Cross-links ====
relatedGuides:
  - "/quests/talking-to-stan"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (10300), NPC (Alex), level requirement (18), rewards (959 EXP + 368 mesos), and chain-next linkage to quest 10301 all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "kerning"
lastUpdated: "2026-08-23"
---
