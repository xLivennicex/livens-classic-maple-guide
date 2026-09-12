---
questId: "506039"
name: "Bruce's Cake For His Daughter (4 quests)"
category: "citizenship"
tagline: "Bruce agonizes over how to reach his daughter Ayan (in Perion!). Mrs. Ming Ming gives him cooking advice. He bakes Bruce's Special Cake. YOU deliver it across Victoria - Henesys to Perion. Emotional father-daughter arc, citizenship contribution."

levelMin: 17
classReq: "Any"

npcName: "Bruce / Mrs. Ming Ming"
npcLocation: "Henesys -> Perion (Ayan)"
npcId: 1012111

# Documented as ONE canonical article covering 4 discrete quest
# IDs (506036, 506037, 506038, 506039). Multi-NPC citizenship arc:
# Bruce initiates, Mrs. Ming Ming advises, Bruce cooks, YOU deliver
# to Ayan in Perion. Cross-town narrative. Compact 4-quest canonical.
chainName: "Bruce's Cake For Ayan"
chainStep: 4
chainLength: 4

description: |
  It seems like Bruce, your neighbor living in Henesys, has
  something on his mind.

  Bruce has been agonizing over how to reach his daughter -
  who lives in Perion (as Ayan, the Perion resident from
  the L11 Andre's Request area). Mrs. Ming Ming gives him
  cooking advice: bake a cake, send it with a courier.
  YOU are the courier. The cake travels Henesys -> Perion
  in your inventory.

rewards:
  - type: "exp"
    label: "3,752 EXP total across 4 steps"
    details: "772 (Bruce Dilemma) + 772 (Ming Ming Advice) + 1,104 (Cooking Ingredients) + 1,104 (Father's Love delivery) = 3,752 EXP. Tutorial-tier per step but 4x the citizenship contribution."
  - type: "mesos"
    label: "1,688 mesos total"
  - type: "item"
    label: "20x Blue Potion total (steps 2-4)"
    itemId: 2000003
    itemSlug: "blue-potion"
    details: "10 Blue Potions on step 3 (Cooking Ingredients) + 10 on step 4 (Father's Love delivery). Solid mid-tutorial MP-restore stash."
  - type: "item"
    label: "Citizenship contribution points (all 4 steps)"
    details: "Every step contributes to your Henesys Citizenship rank. Full 4-quest completion is one of the largest citizenship-XP hauls in the L17 tier."

editorial: |
  <p>Bruce's Cake For His Daughter is <strong>Classic
  MapleStory's most understated cross-town narrative</strong>.
  Bruce lives in Henesys. His daughter Ayan lives in
  Perion. They haven't spoken in a while. Bruce bakes
  a cake as a peace offering. Mrs. Ming Ming (Bruce's
  Henesys neighbor) gives him the cooking advice.
  <strong>YOU</strong> are the courier.</p>

  <h3>The 4-quest arc</h3>
  <ol>
    <li><strong>506036 - Bruce's Dilemma (Bruce, Henesys).</strong>
      Bruce agonizes over how to reach his daughter.
      Rewards 772 EXP + 347 mesos.</li>
    <li><strong>506037 - Mrs. Ming Ming's Advice (Mrs.
      Ming Ming).</strong> You seek advice on Bruce's
      behalf. Mrs. Ming Ming advises: express his true
      feelings through a homemade dish. Rewards 772 EXP.</li>
    <li><strong>506038 - Bruce's Cooking Ingredients
      (Bruce).</strong> Bruce needs ingredients to make
      the dish. Gather them. Rewards 1,104 EXP + 10 Blue
      Potions.</li>
    <li><strong>506039 - A Father's Love for His Daughter
      (Bruce).</strong> Bruce hands you his homemade
      Bruce's Special Cake. Deliver it to Ayan in Perion.
      Rewards 1,104 EXP + 10 Blue Potions.</li>
  </ol>

  <h3>THE cross-narrative reveal: Bruce = Ayan's father</h3>
  <p><strong>This chain retroactively reframes Ayan's
  L11 arc.</strong> When you first met Ayan in Perion at
  L11 during <a href="/quests/andres-request">Andre's
  Request</a>, she was just a peripheral Perion tribeswoman.
  Now at L17 you learn she has a FATHER in Henesys who
  misses her. And later at L48 she's
  <a href="/quests/ayans-alligator-hunt">leading Perion
  town defense</a> - a woman with her own life, her own
  responsibilities, and now a mended relationship with
  her Henesys father via YOUR cake delivery.</p>

  <p><strong>Classic World character web:</strong></p>
  <ul>
    <li><a href="/quests/mushroom-studies-bruce">Bruce
      (L10 Mushroom Studies)</a> - Bruce's original
      appearance as a mushroom hobbyist</li>
    <li><a href="/quests/andres-request">Ayan (L11 Perion)</a>
      - Ayan as peripheral tribeswoman</li>
    <li><strong>This chain (L17):</strong> Bruce is
      revealed as Ayan's father</li>
    <li><a href="/quests/mrs-ming-mings-first-worry">Mrs.
      Ming Ming (L11-27)</a> - Bruce's Henesys neighbor
      and advisor</li>
    <li><a href="/quests/ayans-alligator-hunt">Ayan (L48
      Perion town defense)</a> - Ayan as adult leader,
      relationship with father mended</li>
  </ul>

  <h3>The Citizenship contribution mechanic</h3>
  <p>All 4 quests in this chain contribute to your Henesys
  Citizenship rank. Along with the
  <a href="/quests/henesys-community-board">Community Board
  greetings</a> and
  <a href="/quests/chief-stans-past-chain">Chief Stan's
  Past chain</a>, Bruce's chain is one of the largest
  citizenship-contribution paths in the L17 tier. See
  <a href="/citizenship">the Citizenship System
  Guide</a> for the full breakdown of contribution paths
  and their rewards.</p>

callout: |
  <strong>Do this AT L17, not earlier or later.</strong>
  The narrative context requires you to have met Ayan
  already (L11 area quests). At L17 you're the right
  courier - trusted enough to carry a father's love, not
  so high-level that Bruce's request feels beneath you.

relatedGuides:
  - "/quests/mushroom-studies-bruce"
  - "/quests/andres-request"
  - "/quests/mrs-ming-mings-first-worry"
  - "/quests/ayans-alligator-hunt"
  - "/quests/chief-stans-past-chain"
  - "/citizenship"

verificationStatus: "closed-test-info"
verificationNote: "All 4 quest IDs (506036, 506037, 506038, 506039), NPCs (Bruce 1012111 Henesys, Mrs. Ming Ming 1012106 Henesys, Ayan 1022007 Perion), level (17), per-step EXP (772/772/1,104/1,104 = 3,752 total) + mesos (347/347/497/497 = 1,688 total) + item rewards (10x Blue Potion 2000003 guaranteed on steps 3 and 4) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Bruce-Ayan father-daughter link and Bruce's Special Cake mechanic per step 4 dialogue explicitly."
sourceSlugs:
  - "osmsdataexplorer"

theme: "henesys"
lastUpdated: "2026-08-26"
---
