---
questId: "1011"
name: "Biggs's Collection of Items"
category: "tutorial"
tagline: "Biggs in Southperry wants 1 Orange Mushroom Cap and 10 Blue Snail Shells. He's skeptical you can do it. Prove him wrong and he hands you your first real weapon."

# ==== Requirements ====
levelMin: 3
classReq: "Beginner (Maple Island)"

# ==== NPC / location ====
npcName: "Biggs"
npcLocation: "Maple Island - Southperry"
npcId: 20002  # canonical GMS/83 WZ ID (Southperry port town)

# ==== Chain (standalone) ====
chainName: "Standalone"
chainStep: 1
chainLength: 1

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  Biggs in Southperry has a task for you.

  I met Biggs in Southperry. He wants me to get him 1 Orange
  Mushroom Cap and 10 Blue Snail Shells. He seemed pretty
  skeptical that I'd be able to do it, but it sounds like a
  piece of cake.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "70 EXP"
    details: "Substantial at level 3. Matches Mai's step 1 EXP payout."
  - type: "item"
    label: "1 random weapon: Fruit Knife OR Razor"
    itemId: 1332001
    details: "RANDOM pick: Fruit Knife (1332001) or Razor (1332000). Both are Level 1 daggers - your first REAL weapon, meaning something with actual base attack rather than the wooden vendor gear. If you're planning to be a Thief, either one is a legitimate starter dagger you can use through the early levels of Victoria Island."

# ==== Editorial ====
editorial: |
  <p>Biggs's quest is Maple Island's introduction to
  <strong>Southperry</strong>, the port town that connects
  Maple Island to Victoria Island via ferry. If you haven't
  been to Southperry yet, this quest is your excuse to visit -
  Southperry is where you'll leave Maple Island for good when
  you're ready.</p>

  <p><strong>Where:</strong> Take the ferry or path from
  Amherst south to Southperry. Biggs is in the port town's
  central area.</p>

  <p><strong>Mob targets:</strong>
  <ul>
    <li><strong>Orange Mushroom Cap</strong> - drops from
      Orange Mushrooms. Orange Mushrooms are one screen east
      of Amherst. Drop rate: ~40-60% per kill. Need only 1.</li>
    <li><strong>Blue Snail Shell</strong> - drops from Blue
      Snails, one of the earliest Amherst mobs. Drop rate:
      ~30-50%. Need 10 - expect ~20-30 kills.</li>
  </ul></p>

  <p><strong>The weapon reward matters.</strong> Fruit Knife
  and Razor are both L1 daggers with base attack values
  significantly above the wooden weapons Amherst vendors sell.
  If you're going to be a Thief in Victoria Island, this
  dagger will carry you comfortably through the first 10-15
  levels of your character's Kerning City existence.</p>

  <p><strong>If you're NOT going to be a Thief:</strong> the
  dagger is still useful as an emergency melee weapon. Or NPC
  it for a modest meso sum. Or bank it as a memento - the
  Maple Island quest weapons are cultural artifacts most
  veterans remember specifically.</p>

callout: |
  <strong>Fruit Knife vs Razor:</strong> both are Level 1
  daggers with near-identical stats. The visual is different -
  Fruit Knife looks like a small kitchen knife, Razor looks
  like a sharp folding blade. Mechanically the choice is
  cosmetic. Whichever you roll, wear it proudly.

# ==== Cross-links ====
relatedGuides:
  - "/quests/mais-final-training"
  - "/quests/pios-collecting-recycled-goods"
  - "/jobs/thief"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (1011), NPC (Biggs 20002), level (3), 70 EXP + random dagger drop (Fruit Knife 1332001 or Razor 1332000) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Both dagger IDs (1332000, 1332001) confirmed in items.json Equipment category."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "kerning"
lastUpdated: "2026-08-24"
---
