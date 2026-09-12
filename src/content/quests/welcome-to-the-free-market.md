---
questId: "80029"
name: "Welcome to the Free Market! (4-quest chain)"
category: "story"
tagline: "Lewis at the Free Market Entrance needs your help delivering diplomacy letters to Chief Stan (Henesys) and Dances with Balrog (Perion). A 4-quest FM system introduction with 40 Blue Potions across the chain."

levelMin: 13
classReq: "Any"

npcName: "Lewis"
npcLocation: "Free Market Entrance"
# Lewis has no v83 maplestory.io NPC entry - Free Market clerk
# NPCs may have been renamed or are CoT-additions.

# Documented as ONE canonical article covering 4 discrete quest
# IDs (80026-80029). The chain crosses 3 NPCs (Lewis in FM ->
# Chief Stan in Henesys -> Lewis -> Dances with Balrog in Perion
# -> Lewis) but the narrative is one continuous letter-delivery
# system explainer.
chainName: "Welcome to the Free Market"
chainStep: 4
chainLength: 4

description: |
  Lewis in the Free Market Entrance is looking for an
  adventurer to help him. It seems the Free Market can be
  accessed through Henesys or Perion.

  Lewis is trying to revitalize the Free Market and needs
  cooperation from both Chief Stan (Henesys) and Dances with
  Balrog (Perion). Deliver his letters, bring back the
  replies, and by the end you'll have visited every town
  hub AND unlocked working knowledge of the FM system.

rewards:
  - type: "exp"
    label: "420 EXP per step x 4 = 1,680 EXP total"
    details: "Meaningful chunk of EXP at level 13. Roughly 40-50% of a full level at this tier."
  - type: "mesos"
    label: "380 mesos per step x 4 = 1,520 mesos total"
  - type: "item"
    label: "10x Blue Potion (step 80027 - Chief Stan reply)"
    itemId: 2000003
    itemSlug: "blue-potion"
  - type: "item"
    label: "10x Blue Potion (step 80029 - Dances with Balrog reply)"
    itemId: 2000003
    itemSlug: "blue-potion"

editorial: |
  <p>The Free Market intro chain is Classic World's onboarding
  for one of the game's most important systems: <strong>the
  Free Market</strong>. The FM is where players trade with
  each other - equipment, scrolls, monster cards, ore, chairs,
  everything. If you plan to buy or sell anything player-to-
  player, you need to know how to get to the FM and how it
  works.</p>

  <h3>The four steps</h3>
  <ol>
    <li><strong>80026 - Welcome to the Free Market!</strong>
      Lewis introduces himself and asks you to deliver a
      letter to Chief Stan in Henesys. FM access is via
      Henesys OR Perion - both have Free Market Entrance
      portals.</li>
    <li><strong>80027 - Chief Stan's Reply.</strong>
      <a href="/quests/talking-to-stan">Chief Stan</a> hands
      you a reply letter for Lewis. Deliver it back. Rewards
      10 Blue Potions.</li>
    <li><strong>80028 - Asking Perion for Help.</strong>
      Lewis sends you to Perion this time - deliver a letter
      to Dances with Balrog (the Warrior job advancer).</li>
    <li><strong>80029 - Dances with Balrog's Reply.</strong>
      Bring Balrog's reply back to Lewis. Rewards another 10
      Blue Potions. Chain complete.</li>
  </ol>

  <h3>Why do this chain?</h3>
  <ul>
    <li><strong>The 20 Blue Potions</strong> are substantial
      for a level-13 character. Combined with the 40+ Blue
      Potions from Icarus (10) + Wing the Fairy (10) + earlier
      quests, you should have 60-80 in inventory by L15.</li>
    <li><strong>You get physically comfortable</strong> with
      the FM entrance portals in Henesys and Perion by the
      end of the chain. Many new players never notice these
      portals until they need to trade with someone.</li>
    <li><strong>Cross-town travel practice.</strong> Four
      trips across three towns builds the muscle memory for
      Victoria Island's geography.</li>
  </ul>

  <p><strong>Where the FM entrance portals are:</strong></p>
  <ul>
    <li><strong>Henesys:</strong> left side of town, near the
      Perion road exit.</li>
    <li><strong>Perion:</strong> Perion's south side, near
      the general shop.</li>
  </ul>

callout: |
  <strong>Free Market etiquette:</strong> the FM has ~20
  numbered channels. Sellers typically use FM 1-5. Buyers
  browse by walking through shops or using the search NPC.
  Prices vary widely by channel and time of day - don't
  panic-buy the first thing you see.

relatedGuides:
  - "/quests/talking-to-stan"
  - "/quests/mothers-gold-watch"
  - "/items/blue-potion"

verificationStatus: "closed-test-info"
verificationNote: "All 4 quest IDs (80026-80029), NPCs (Lewis at FM Entrance - no v83 WZ ID found; Chief Stan 1012003; Dances with Balrog 1022000), level (13), per-step rewards (420 EXP, 380 mesos, 10x Blue Potion 2000003 guaranteed on steps 80027 and 80029) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "henesys"
lastUpdated: "2026-08-24"
---
