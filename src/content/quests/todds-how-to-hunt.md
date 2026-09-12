---
questId: "1005"
name: "Todd's How-to-Hunt"
category: "tutorial"
tagline: "Combat tutorial. Todd sends you to kill Tutorial Jr. Sentinels, then report back. This is where you learn to fight."

# ==== Requirements ====
levelMin: 1
classReq: "Beginner (Maple Island)"

# ==== NPC / location ====
npcName: "Todd"
npcLocation: "Maple Island - Amherst"
npcId: 9101002  # tutorial-map variant - the town-block 2004 entry 404s on maplestory.io

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  You hear that Todd can teach you how to hunt...

  Todd asked me to defeat Tutorial Jr. Sentinels, then talk to
  Peter.

  You defeated the monsters, just as Todd instructed.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "10 EXP"
    details: "Small - the real reward is unlocking Peter's follow-up chain and internalizing the attack keybind"

# ==== Editorial ====
editorial: |
  <p>Todd is the "here's how you kill things" NPC. He asks you to
  defeat a specific tutorial mob (Tutorial Jr. Sentinels - which
  exist ONLY for this tutorial and can't be found anywhere else
  in the game) and report to Peter. The 10 EXP reward is nominal;
  the value is teaching the attack keybind and target-cycling.</p>
  <p>Tutorial Jr. Sentinels are set to die in a few hits from a
  fresh level 1 with no weapon equipped, so this quest is
  hand-holdingly safe. Fresh characters won't fail it. That's
  the point.</p>
  <p><strong>Peter's follow-up</strong> after you report is where
  the chain starts to earn real rewards - it's the entry to the
  more substantive "learn to loot, learn to sell to NPCs" segment
  of the tutorial.</p>

callout: |
  <strong>Watch your XP bar during this quest.</strong> If you
  weren't already level 2 when you accepted it, killing the
  Tutorial Jr. Sentinels + turning the quest in will very likely
  push you over. Save any AP allocation until after you complete
  Todd's chain so you can budget with clean numbers.

# ==== Cross-links ====
relatedGuides: []

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID, name, giver NPC, level, in-game text, and 10-EXP reward pulled verbatim from the CoT 2 client datamine."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-23"
---
