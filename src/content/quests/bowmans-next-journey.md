---
questId: "20200"
name: "The Bowman's Next Journey"
category: "advancement"
tagline: "Trigger quest for Archer second-job advancement. Athena Pierce runs a trial that gates Hunter or Crossbowman branch selection."

# ==== Requirements ====
levelMin: 30
classReq: "Archer / Bowman (1st job)"

# ==== NPC / location ====
npcName: "Athena Pierce"
npcLocation: "Henesys"
npcId: 1012100  # canonical GMS/83 WZ ID (Henesys sprite)

# ==== Chain ====
chainName: "The Bowman's Next Journey"
chainStep: 1
chainLength: 4

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  Having reached level 30 and mastered the way of the Archer,
  I feel the urge to learn more.

  Does Athena Pierce of Henesys have even greater lessons to
  teach me?

  Athena Pierce said that if I can pass her test, she'll gladly
  teach me more. I'm no longer the weakling I once was, but
  hearing that I still have to face a trial makes me a bit
  nervous.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "12,600 EXP total across all 4 steps (3,150 per step)"
    details: "Step 20200 (Athena trigger) + Step 20201 (Finding the Instructor) + Step 20202 (Test of Qualification) + Step 20203 (Proof of Qualification) = 12,600 EXP guaranteed."
  - type: "item"
    label: "The Proof of the Bowman (chain-terminal item, step 20203)"
    details: "Physical proof of second-job qualification. Token to unlock Hunter / Crossbowman skill trees."

# ==== Editorial ====
editorial: |
  <p>This canonical article covers the <strong>complete 4-step
  Bowman second-job advancement chain</strong> - quests 20200,
  20201, 20202, 20203. Athena's trial gates all second-job
  Bowman skills (Hunter / Crossbowman).</p>

  <h3>The 4-step chain</h3>
  <ol>
    <li><strong>20200 - The Bowman's Next Journey (Athena Pierce,
      Henesys).</strong> Talking quest. Athena acknowledges your
      growth. Rewards 3,150 EXP.</li>
    <li><strong>20201 - Finding the Instructor (Athena Pierce).</strong>
      Athena sends you to the Bowman Job Instructor at <strong>The
      Road to the Dungeon</strong>. Rewards 3,150 EXP.</li>
    <li><strong>20202 - Test of Qualification (Bowman Job
      Instructor, The Road to the Dungeon).</strong> Solo trial
      instance. Ranged combat time-limit test. Rewards 3,150 EXP.</li>
    <li><strong>20203 - Proof of Qualification (Bowman Job
      Instructor).</strong> Return with proof. Instructor grants
      The Proof of the Bowman. Rewards 3,150 EXP. Return to Athena
      Pierce to select your branch.</li>
  </ol>

  <h3>The branch choice - PERMANENT</h3>
  <p>Both branches are ranged physical DPS. See the
  <a href="/jobs/bowman#second-jobs">Bowman second-job branches
  guide</a> for the full comparison:</p>
  <ul>
    <li><strong>Hunter (Bow):</strong> faster attack speed, lower
      per-shot damage. Extends into Ranger -> Bowmaster.</li>
    <li><strong>Crossbowman (Crossbow):</strong> slower attack
      speed, higher per-shot damage. Extends into Sniper ->
      Marksman.</li>
  </ul>

  <h3>Henesys location advantage</h3>
  <p>Athena Pierce is in Henesys - one of the few second-job
  trainers NOT in their class's stereotypical home region.
  Henesys is the friendliest town for a fresh L30 to navigate,
  and the Road to the Dungeon is a short east-hop from Henesys
  town center.</p>

  <p><strong>Note the class naming:</strong> the CoT 2 datamine
  calls this class "Archer" internally (matching modern KMS
  conventions), but Athena's dialogue and every player-facing
  text uses "Bowman" throughout. Same class.</p>

callout: |
  <strong>DEX is your friend in the trial.</strong> Whatever the
  trial mob happens to be, you'll want your ranged accuracy up.
  Skip any last-minute LUK dumps and complete the full 4-step
  chain (20200 -> 20201 -> 20202 -> 20203) at L30 exactly.

# ==== Cross-links ====
relatedGuides:
  - "/jobs/bowman"
  - "/quests/warriors-next-journey"
  - "/quests/magicians-next-journey"
  - "/quests/thiefs-next-journey"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "All 4 chain quest IDs (20200, 20201, 20202, 20203), NPCs (Athena Pierce 1012100 Henesys, Bowman Job Instructor at The Road to the Dungeon), per-step EXP (3,150 each = 12,600 total), and quest names/descriptions pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Class stored as 'archer' in datamine but rendered as 'Bowman' in-game."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-23"
---
