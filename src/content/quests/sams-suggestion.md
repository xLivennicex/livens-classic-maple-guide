---
questId: "1006"
name: "Sam's Suggestion"
category: "tutorial"
tagline: "Sam tells you to head east, hunt 10 Snails, and meet Mai. The bridge quest between Amherst's static NPCs and the combat-training trio (Mai, Biggs, Pio, Rain)."

# ==== Requirements ====
levelMin: 1
classReq: "Beginner (Maple Island)"

# ==== NPC / location ====
npcName: "Sam"
npcLocation: "Maple Island - Amherst"
npcId: 9101003  # tutorial variant - canonical 2005 renders as 404 (same footgun as Todd 9101002)

# ==== Chain metadata (standalone) ====
chainName: "Standalone"
chainStep: 1
chainLength: 1

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  Sam has some advice for beginner adventurers...

  Sam told me to head east and hunt 10 Snails before meeting
  up with Mai.

  As Sam suggested, you hunted 10 Snails, then met Mai. Is
  this person a master? They definitely give off that vibe.

# ==== Rewards ====
rewards:
  - type: "exp"
    label: "30 EXP"
    details: "Meaningful at level 1 - a full level-worth boost when combined with the Snail-hunting EXP itself."
  - type: "item"
    label: "3x Egg"
    itemId: 2010002
    details: "Egg is a low-tier food consumable that restores a small amount of HP. Useful for beginners who haven't figured out the potion economy yet."

# ==== Editorial ====
editorial: |
  <p>Sam's Suggestion is Maple Island's "hey, go fight things"
  quest - the softest possible combat tutorial. You're told
  to hunt 10 Snails (the easiest mob in the game) and then
  meet Mai (who has the actual training quest).</p>

  <p><strong>Where:</strong> Sam is in Amherst, near the
  center of the tutorial hub. Snails are literally one screen
  east - you can't miss them.</p>

  <p><strong>Why do this quest?</strong> It's the mechanical
  onramp to <a href="/quests/mais-training">Mai's Training</a>,
  the two-part combat tutorial. Sam's quest teaches you that
  Snails give EXP and quests can require kill counts. Mai's
  quest builds on that by introducing multi-mob-type
  requirements.</p>

  <p><strong>Snail location:</strong> the Maple Island snail
  spawns are dense - you can chain 10 kills in under two
  minutes even at level 1 with only a wooden weapon. There is
  no gate here; the quest exists purely to teach the flow.</p>

callout: |
  <strong>Egg is not Blue Potion.</strong> The 3 Eggs you get
  are a low-restore food item, not the mainline potion. Save
  them or eat them casually - they're worth the equivalent of
  the smallest potion in Amherst's shops. Don't panic if you
  run out.

# ==== Cross-links ====
relatedGuides:
  - "/quests/mais-training"
  - "/quests/todds-how-to-hunt"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (1006), NPC (Sam), level (1), 30 EXP + 3x Egg (2010002 guaranteed) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. NPC WZ ID: canonical 2005 returns 404 on render endpoint; tutorial-variant 9101003 renders correctly (same footgun as Todd's 9101002 vs canonical 2004). Documented in docs/npc-id-lookup.md."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-24"
---
