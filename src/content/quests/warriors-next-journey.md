---
questId: "20000"
name: "The Warrior's Next Journey"
category: "advancement"
tagline: "The trigger quest for Warrior second-job advancement. Talk to Dances with Balrog at level 30 to unlock the branch selection."

# ==== Requirements ====
levelMin: 30
classReq: "Warrior (1st job)"

# ==== NPC / location ====
npcName: "Dances with Balrog"
npcLocation: "Perion"
npcId: 1022000  # canonical GMS/83 WZ ID (Perion town sprite)

# ==== Chain ====
chainName: "The Warrior's Next Journey"
chainStep: 1
chainLength: 4
# nextQuest slug intentionally omitted for now - we haven't seeded
# step 2 yet, and the layout gracefully hides the next-step link.

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  Having reached level 30 and mastered the way of the Swordsman,
  I feel the urge to learn even more.

  Does Dances with Balrog of Perion have even greater lessons
  to teach me?

  Dances with Balrog of Perion seemed surprised to see how much
  stronger I had become compared to before.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "12,600 EXP total across all 4 steps (3,150 per step)"
    details: "Step 20000 (Dances with Balrog trigger) + Step 20001 (Finding the Instructor) + Step 20002 (Test of Qualification) + Step 20003 (Proof of Qualification) = 12,600 EXP guaranteed. No random drops in this chain - the actual reward is second-job branch access + skill tree unlock."
  - type: "item"
    label: "The Proof of the Warrior (chain-terminal item, step 20003)"
    details: "Physical proof of second-job qualification. Doesn't grant stats - it's the token you present to unlock Fighter / Page / Spearman skill trees."

# ==== Editorial - our voice ====
editorial: |
  <p>This canonical article covers the <strong>complete 4-step
  Warrior second-job advancement chain</strong> - quests 20000,
  20001, 20002, 20003. The chain is mandatory, sequential, and
  gates all second-job Warrior skills (Fighter / Page / Spearman).</p>

  <h3>The 4-step chain</h3>
  <ol>
    <li><strong>20000 - The Warrior's Next Journey (Dances with
      Balrog, Perion).</strong> Talking quest. Balrog acknowledges
      your growth and directs you toward the Warrior Job
      Instructor. Rewards 3,150 EXP.</li>
    <li><strong>20001 - Finding the Instructor (Dances with
      Balrog).</strong> Balrog wants to test your worth. He
      sends you to find the Warrior Job Instructor at <strong>West
      Rocky Mountain IV</strong> - a specific Perion map you'll
      need to travel to. Rewards 3,150 EXP.</li>
    <li><strong>20002 - Test of Qualification (Warrior Job
      Instructor, West Rocky Mountain IV).</strong> The actual
      trial. Traditional MapleStory pattern: enter a solo instance
      map, defeat wave-based enemies within a time limit. Rewards
      3,150 EXP on completion.</li>
    <li><strong>20003 - Proof of Qualification (Warrior Job
      Instructor).</strong> You return with proof of victory. The
      Job Instructor grants you The Proof of the Warrior - your
      physical token to advance. Rewards 3,150 EXP. Return to
      Dances with Balrog to actually select your second-job
      branch.</li>
  </ol>

  <h3>The branch choice - PERMANENT</h3>
  <p><strong>Before you accept this quest,</strong> read the
  <a href="/jobs/warrior#second-jobs">second-job branches section
  of the Warrior guide</a>. Once you commit to Fighter, Page, or
  Spearman at step 4, that decision is permanent for the life of
  the character:</p>
  <ul>
    <li><strong>Fighter:</strong> sword/axe striker. Highest raw
      damage. Extends into Crusader (3rd job) -> Hero (4th job).</li>
    <li><strong>Page:</strong> 1-handed sword/blunt shield-tank.
      Highest survivability. Extends into White Knight -> Paladin.</li>
    <li><strong>Spearman:</strong> polearm/spear crowd-controller.
      Party-play focused. Extends into Dragon Knight ->
      Dark Knight.</li>
  </ul>

  <h3>West Rocky Mountain IV - where to go</h3>
  <p>West Rocky Mountain IV is a Perion sub-map. Path: Perion town
  -> west exit -> Rocky Mountain I -> II -> III -> IV. The Warrior
  Job Instructor stands at the far-west edge of map IV. Mob density
  is L25-30 (in-range for L30 Warriors) - Fire Boars, Wild Boars.
  Bring a stack of White Potions if you're at exactly L30.</p>

callout: |
  <strong>Don't wait past level 30.</strong> The old v83 pattern of
  "grind to 31 or 32 for extra buffer then advance" still works,
  but there's no mechanical benefit anymore - you just delay access
  to your second-job skill tree. Advance at 30, complete the full
  4-step chain (20000 -> 20001 -> 20002 -> 20003), and pick your
  branch immediately.

# ==== Cross-links ====
relatedGuides:
  - "/jobs/warrior"
  - "/quests/magicians-next-journey"
  - "/quests/bowmans-next-journey"
  - "/quests/thiefs-next-journey"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "All 4 chain quest IDs (20000, 20001, 20002, 20003), NPCs (Dances with Balrog 1022000 Perion, Warrior Job Instructor at West Rocky Mountain IV), per-step EXP (3,150 each = 12,600 total), and quest names/descriptions pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Second-job branch mechanics (Fighter/Page/Spearman) inherited from GMS/v83 tradition; CoT 2 confirmed to preserve branch structure."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "perion"
lastUpdated: "2026-08-23"
---
