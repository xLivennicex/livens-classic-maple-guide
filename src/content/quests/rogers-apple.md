---
questId: "1002"
name: "Roger's Apple"
category: "tutorial"
tagline: "The inventory tutorial disguised as a fruit. Roger hands you an apple. You learn what the Use tab is."

# ==== Requirements ====
levelMin: 1
classReq: "Beginner (Maple Island)"

# ==== NPC / location ====
npcName: "Roger"
npcLocation: "Maple Island - Amherst"
npcId: 2000  # canonical GMS/83 WZ ID

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  Talk to Roger.

  Press the hotkey I to open your inventory, navigate to the Use
  tab, and double-click Roger's Apple to consume it. Then, talk
  to Roger.

  You learned how to use items! This will make life much easier!

# ==== Rewards ====
rewards:
  - type: "other"
    label: "Inventory UI competence"
    details: "The datamine shows no material reward, but the mechanic (double-click Use tab items) is essential for the entire game."

# ==== Editorial ====
editorial: |
  <p>Roger is the sit-you-down-and-teach-you-the-basics NPC of
  Maple Island. This quest sounds absurd on paper - "consume an
  apple, come back" - but its job isn't to reward you; it's to
  make sure you press <strong>I</strong> to open your inventory
  and understand that consumables live in the Use tab. That
  muscle memory pays off for the entire rest of your MapleStory
  career.</p>
  <p>The datamine shows no material reward for Roger's Apple
  itself - the "reward" is that the game has now confirmed you
  know how to eat a potion, unlocking the rest of Roger's tutorial
  chain (each of which DOES give small material rewards: HP-boost
  apples, HP-max snacks, and eventually a set of starter potions).</p>

callout: |
  <strong>Roger has a full tutorial chain</strong> beyond this one
  quest - the follow-ups teach movement, jumping, and the four
  basic monster types. Each is trivially short. Together they
  cover roughly the first 20 minutes of an intended new-player
  experience. Do them in order for the smoothest onboarding.

# ==== Cross-links ====
relatedGuides: []

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID, name, giver NPC, level, and in-game text pulled verbatim from the CoT 2 client datamine. The datamine returns no material reward for this specific quest ID."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-23"
---
