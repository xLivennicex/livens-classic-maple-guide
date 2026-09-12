---
questId: "1003"
name: "What Sen wants to eat"
category: "tutorial"
tagline: "Nina is planning dinner for her brother Sen. Nobody has actually asked Sen what he wants. This is Maple Island's first two-NPC delivery quest."

# ==== Requirements ====
levelMin: 1
classReq: "Beginner (Maple Island)"

# ==== NPC / location ====
npcName: "Nina"
npcLocation: "Maple Island - Amherst"
npcId: 2102  # canonical GMS/83 WZ ID (Maple Island 21xx block)

# ==== Chain ====
chainName: "Nina and Sen's Dinner"
chainStep: 1
chainLength: 2
nextQuest: "returning-to-nina"

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  Talk to Nina.

  Nina is wondering what to make her brother, Sen, for dinner.
  Go talk to Sen, who's in the house next to Nina, and ask him
  what he wants to eat.

  You asked Sen, Nina's brother, what he wants for dinner. He
  said he wants Mushroom Soup.

# ==== Rewards ====
rewards:
  - type: "next-quest"
    label: "Unlocks: Returning to Nina"
    details: "Head back to Nina and tell her Sen wants Mushroom Soup. That's the whole quest chain: three NPC conversations."

# ==== Editorial ====
editorial: |
  <p>Nina and Sen are siblings living in adjacent Amherst
  houses. This chain is the tutorial's introduction to the
  <strong>two-NPC delivery pattern</strong> that pervades every
  MapleStory questline: NPC A asks about NPC B, you visit NPC
  B, you return to NPC A. Cross-checking that you understand
  the pattern before Sera's Mirror (which does the same thing
  with a physical item, not just information).</p>

  <p><strong>Zero EXP on step 1.</strong> The reward for step 1
  is literally just unlocking step 2. Maple Island is training
  you: quests are about narrative flow, not just numbers.</p>

  <p><strong>Where are Nina and Sen?</strong> Both in the row of
  Amherst houses one screen from the tutorial center. Nina's
  house is to the left of Sen's. Walk right after talking to
  Nina, enter the next house's portal, talk to Sen, walk
  back left.</p>

callout: |
  <strong>Optional chain.</strong> Nothing gates on completing
  this chain - you can skip it entirely and still leave Maple
  Island at level 10. It's included as a "learn how to talk to
  NPCs" tutorial for players who want the guided experience.
  Completing it is more about being thorough than being
  necessary.

# ==== Cross-links ====
relatedGuides:
  - "/quests/returning-to-nina"
  - "/quests/borrowing-seras-mirror"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest ID (1003), NPCs (Nina & Sen), level (1), zero explicit rewards + chain-next linkage to 1004 all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "henesys"
lastUpdated: "2026-08-23"
---
