---
questId: "20100"
name: "The Magician's Next Journey"
category: "advancement"
tagline: "Trigger quest for Magician second-job advancement. Grendel the Really Old sets a trial before you may choose F/P, I/L, or Cleric."

# ==== Requirements ====
levelMin: 30
classReq: "Magician (1st job)"

# ==== NPC / location ====
npcName: "Grendel the Really Old"
npcLocation: "Ellinia"
npcId: 1032001  # canonical GMS/83 WZ ID (Ellinia sprite)

# ==== Chain ====
chainName: "The Magician's Next Journey"
chainStep: 1
chainLength: 4

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  Having reached level 30 and mastered the way of the Magician,
  I feel the urge to learn more.

  Does Grendel the Really Old of Ellinia have even greater
  lessons to teach me?

  Grendel the Really Old said that if I can pass his test, he'll
  gladly teach me more. I'm no longer the weakling I once was,
  but hearing that I still have to face a trial makes me a bit
  nervous.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "12,600 EXP total across all 4 steps (3,150 per step)"
    details: "Step 20100 (Grendel trigger) + Step 20101 (Finding the Instructor) + Step 20102 (Test of Qualification) + Step 20103 (Proof of Qualification) = 12,600 EXP guaranteed."
  - type: "item"
    label: "The Proof of the Magician (chain-terminal item, step 20103)"
    details: "Physical proof of second-job qualification. Token to unlock F/P Wizard / I/L Wizard / Cleric skill trees."

# ==== Editorial ====
editorial: |
  <p>This canonical article covers the <strong>complete 4-step
  Magician second-job advancement chain</strong> - quests 20100,
  20101, 20102, 20103. Grendel's trial gates all second-job
  Magician skills (F/P Wizard / I/L Wizard / Cleric).</p>

  <h3>The 4-step chain</h3>
  <ol>
    <li><strong>20100 - The Magician's Next Journey (Grendel,
      Ellinia Magic Library).</strong> Talking quest. Grendel
      acknowledges your growth and directs you to prove yourself.
      Rewards 3,150 EXP.</li>
    <li><strong>20101 - Finding the Instructor (Grendel).</strong>
      Grendel sends you to the Magician Job Instructor at
      <strong>The Forest North of Ellinia</strong>. Rewards 3,150
      EXP.</li>
    <li><strong>20102 - Test of Qualification (Magician Job
      Instructor, Forest North of Ellinia).</strong> Solo trial
      instance. Wave-based enemies, time-limited. Rewards 3,150
      EXP on completion.</li>
    <li><strong>20103 - Proof of Qualification (Magician Job
      Instructor).</strong> Return with proof. Job Instructor
      grants The Proof of the Magician. Rewards 3,150 EXP.
      Return to Grendel to select your branch.</li>
  </ol>

  <h3>The branch choice - PERMANENT</h3>
  <p>See the <a href="/jobs/magician#second-jobs">Magician
  second-job branches guide</a>. Once you commit, the choice is
  permanent for the character's life:</p>
  <ul>
    <li><strong>F/P Wizard:</strong> Fire/Poison damage-over-time.
      Extends into F/P Mage -> F/P Arch Mage.</li>
    <li><strong>I/L Wizard:</strong> Ice/Lightning burst + slow
      effect. Extends into I/L Mage -> I/L Arch Mage.</li>
    <li><strong>Cleric:</strong> Heal + Holy damage to undead +
      party buffs (Bless, Invincible). Extends into Priest ->
      Bishop.</li>
  </ul>

  <h3>Forest North of Ellinia - where to go</h3>
  <p>Ellinia town -> north exit -> Forest of Evil (or similar
  named path map) -> Forest North. The Magician Job Instructor
  stands at the trial-instance portal. Mob density is L25-30
  (Wild Boars, Cold Eyes) - manageable at L30 Magicians who
  carry Magic Guard active.</p>

callout: |
  <strong>Save your SP going into the trial.</strong> F/P Wizard
  starts with Fire Arrow which needs early SP allocation to feel
  good; I/L starts with Cold Beam; Cleric gets Heal (the game
  changer). Complete the full 4-step chain (20100 -> 20101 ->
  20102 -> 20103) and pick your branch immediately - don't wait.

# ==== Cross-links ====
relatedGuides:
  - "/jobs/magician"
  - "/quests/warriors-next-journey"
  - "/quests/bowmans-next-journey"
  - "/quests/thiefs-next-journey"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "All 4 chain quest IDs (20100, 20101, 20102, 20103), NPCs (Grendel the Really Old 1032001 Ellinia, Magician Job Instructor at The Forest North of Ellinia), per-step EXP (3,150 each = 12,600 total), and quest names/descriptions pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "ellinia"
lastUpdated: "2026-08-23"
---
