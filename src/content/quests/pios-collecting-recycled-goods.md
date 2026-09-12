---
questId: "1012"
name: "Pio's Collecting Recycled Goods"
category: "tutorial"
tagline: "Pio in Amherst is famous for fixing broken things. Break down wooden boxes for Rusty Screws and Old Wooden Planks - reward is a Green Relaxer, Maple Island's iconic first CHAIR."

# ==== Requirements ====
levelMin: 5
classReq: "Beginner (Maple Island)"

# ==== NPC / location ====
npcName: "Pio"
npcLocation: "Maple Island - Amherst"
npcId: 10000  # canonical GMS/83 WZ ID

# ==== Chain (standalone) ====
chainName: "Standalone"
chainStep: 1
chainLength: 1

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  Pio in Amherst wants you to help collect recycled goods.

  I ran into Pio, who's famous in Amherst for fixing broken
  things. He asked me to break down wooden boxes from around
  town and bring back Rusty Screws and Old Wooden Planks.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "100 EXP"
    details: "Solid at level 5 - equivalent to Mai's Final Training payout. Contributes meaningfully to the level 5 -> 10 push."
  - type: "mesos"
    label: "150 mesos"
    details: "Matches Mai's chain finale. Between Pio and Mai, you can accumulate ~300 mesos before leaving Maple Island."
  - type: "item"
    label: "1x The Green Relaxer (Chair)"
    itemId: 3010000
    details: "A CHAIR item! Sitting in a chair boosts your HP/MP regeneration rate significantly - the primary use case is AFK recovery between training sessions. The Green Relaxer is the first chair most Maple Island graduates ever get, and many veterans keep it in inventory as a memento long past when better chairs are available."

# ==== Editorial ====
editorial: |
  <p>Pio's Collecting Recycled Goods introduces two mechanics
  that most Maple Island tutorials skip:</p>

  <ol>
    <li><strong>Environmental interaction:</strong> the wooden
      boxes are actual map objects, not mobs. You break them
      by attacking them like a mob, but they don't fight back
      and their drops are guaranteed on breakage.</li>
    <li><strong>Chairs:</strong> The Green Relaxer is a
      full-featured chair item. Chairs go in your Setup
      inventory tab and can be summoned by double-clicking to
      sit down. Sitting boosts your HP/MP regeneration
      substantially - the recovery rate math is worth
      exploiting between training runs.</li>
  </ol>

  <p><strong>Where:</strong> the wooden boxes are scattered
  around Amherst's town map itself. You don't need to leave
  town. Break enough to collect the required Rusty Screws +
  Old Wooden Planks.</p>

  <p><strong>Why chairs matter long-term:</strong> Classic
  MapleStory's AFK recovery mechanic depends on either
  standing still (slow) or sitting in a chair (much faster).
  Magicians especially chair-camp to refill MP after Magic
  Guard depletes their bar. The Green Relaxer isn't the best
  chair in the game - just the first - but it teaches the
  pattern.</p>

callout: |
  <strong>Bank The Green Relaxer.</strong> The Amherst
  wooden boxes only respawn once per character, and Pio's
  quest is one-time. If you delete or NPC the chair, you
  can't get another one from Maple Island. Move it to your
  storage NPC in Victoria Island as soon as you leave.

# ==== Cross-links ====
relatedGuides:
  - "/quests/biggss-collection-of-items"
  - "/quests/rains-maple-quiz-series"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (1012), NPC (Pio 10000), level (5), 100 EXP + 150 mesos + 1x The Green Relaxer (3010000 guaranteed) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Chair-mechanic recovery-rate boost retains v83 baseline pending CoT 2 numerical verification."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-24"
---
