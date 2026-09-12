---
questId: "20300"
name: "The Thief's Next Journey"
category: "advancement"
tagline: "Trigger quest for Thief second-job advancement. Dark Lord runs a trial before letting you choose Assassin or Bandit."

# ==== Requirements ====
levelMin: 30
classReq: "Thief / Rogue (1st job)"

# ==== NPC / location ====
npcName: "Dark Lord"
npcLocation: "Kerning City"
npcId: 1052001  # canonical GMS/83 WZ ID (Kerning City sprite)

# ==== Chain ====
chainName: "The Thief's Next Journey"
chainStep: 1
chainLength: 4

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  Having reached level 30 and mastered the way of the Rogue,
  I feel the urge to learn more.

  Does Dark Lord of Kerning City have even greater lessons to
  teach me?

  Dark Lord said that if I can pass his test, he'll gladly teach
  me more. I'm no longer the weakling I once was, but hearing
  that I still have to face a trial makes me a bit nervous.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "12,600 EXP total across all 4 steps (3,150 per step)"
    details: "Step 20300 (Dark Lord trigger) + Step 20301 (Finding the Instructor) + Step 20302 (Test of Qualification) + Step 20303 (Proof of Qualification) = 12,600 EXP guaranteed."
  - type: "item"
    label: "The Proof of the Thief (chain-terminal item, step 20303)"
    details: "Physical proof of second-job qualification. Token to unlock Assassin / Bandit skill trees."

# ==== Editorial ====
editorial: |
  <p>This canonical article covers the <strong>complete 4-step
  Thief second-job advancement chain</strong> - quests 20300,
  20301, 20302, 20303. Dark Lord's trial gates all second-job
  Thief skills (Assassin / Bandit).</p>

  <h3>The 4-step chain</h3>
  <ol>
    <li><strong>20300 - The Thief's Next Journey (Dark Lord,
      Kerning City).</strong> Talking quest. Dark Lord acknowledges
      your growth. Rewards 3,150 EXP.</li>
    <li><strong>20301 - Finding the Instructor (Dark Lord).</strong>
      Dark Lord sends you to the Thief Job Instructor at
      <strong>Construction Site North of Kerning City</strong>.
      Rewards 3,150 EXP.</li>
    <li><strong>20302 - Test of Qualification (Thief Job
      Instructor, Construction Site North).</strong> Solo trial
      instance. Stealth/combat time-limit test. Rewards 3,150
      EXP.</li>
    <li><strong>20303 - Proof of Qualification (Thief Job
      Instructor).</strong> Return with proof. Instructor grants
      The Proof of the Thief. Rewards 3,150 EXP. Return to Dark
      Lord to select your branch.</li>
  </ol>

  <h3>THE branch choice - completely different playstyles</h3>
  <p>Assassin vs Bandit is the most divergent 2nd-job fork in
  MapleStory - see the
  <a href="/jobs/thief#second-jobs">Thief second-job branches
  guide</a>:</p>
  <ul>
    <li><strong>Assassin (claws + throwing stars):</strong> ranged
      LUK-scaling. Lucky Seven core skill. Extends into Hermit ->
      Night Lord.</li>
    <li><strong>Bandit (daggers):</strong> melee DEX-scaling.
      Double Stab + Steal. Extends into Chief Bandit -> Shadower.</li>
  </ul>

  <h3>Construction Site North of Kerning</h3>
  <p>Kerning City -> north exit -> Construction Site B1 (subway
  area) -> Construction Site North. Same building complex as
  <a href="/quests/shumi-construction-site-heist">Shumi's L35
  Construction Site heist chain</a> - just at a different
  basement level. Mob density L25-30, in-range for L30 Thieves.</p>

  <p><strong>Class naming note:</strong> the CoT 2 datamine
  labels this class "Rogue" internally to match modern KMS
  conventions. Every in-game player-facing text still says
  "Thief". Same class - two names.</p>

callout: |
  <strong>Have your gear sorted before the trial.</strong>
  Assassin-bound characters should have accumulated some early
  claws or a stack of throwing stars; Bandit-bound characters
  should have a solid dagger. Complete the full 4-step chain
  (20300 -> 20301 -> 20302 -> 20303) at L30 exactly.

# ==== Cross-links ====
relatedGuides:
  - "/jobs/thief"
  - "/quests/warriors-next-journey"
  - "/quests/magicians-next-journey"
  - "/quests/bowmans-next-journey"
  - "/quests/shumi-construction-site-heist"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "All 4 chain quest IDs (20300, 20301, 20302, 20303), NPCs (Dark Lord 1052001 Kerning City, Thief Job Instructor at Construction Site North of Kerning City), per-step EXP (3,150 each = 12,600 total), and quest names/descriptions pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Class stored as 'rogue' in datamine but rendered as 'Thief' in-game."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "kerning"
lastUpdated: "2026-08-23"
---
