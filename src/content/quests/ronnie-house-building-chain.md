---
questId: "10209"
name: "Building Ronnie's House (4-Step Ellinia Material Delivery Chain)"
category: "story"
tagline: "Four-step cross-continental fetch chain for Ronnie the fairy in Ellinia's woods. He's collecting materials to build a house for newborn fairies. Rewards ~22k EXP, 90 Blue Potions across the chain, and a scroll roll at the finale."

# ==== Requirements ====
levelMin: 41
classReq: "Any"

# ==== NPC / location ====
npcName: "Ronnie"
npcLocation: "Ellinia - The Tree That Grew (woods east of town)"
npcId: 320  # Classic World datamine ID (verified in npcs.json)

# ==== Chain metadata ====
# Datamine covers 4 discrete quest IDs (10206-10209), one per
# material delivery. Documenting as ONE canonical article because
# structurally they're a linear delivery chain across four regions -
# splitting into four separate files would be a DRY nightmare with
# no reader benefit. The chain's identity is the arc, not the steps.
chainName: "Ronnie's House-Building Chain"
chainStep: 4
chainLength: 4

# ==== In-game narrative (final step 10209, verbatim) ====
description: |
  Ronnie asked me for help one last time. This time, he wants
  me to get 30 Cold Eye Tails, 10 Dragon Skins, and 1 Diamond
  by taking down Cold Eyes and Drakes. I guess I can do it,
  but hunting down in the deep parts of the Ant Tunnel... This
  is way too hard!!

  I got all the materials Ronnie needed for the last time.
  Is this it For the reward, he gave me a scroll and thanked
  me for helping build a home for the newborn fairies.

# ==== Rewards (aggregated across the 4-step chain) ====
rewards:
  - type: "exp"
    label: "5,568 EXP per step (22,272 EXP total across chain)"
    details: "Every step in the chain awards a flat 5,568 EXP. Total ~22.3k across the four steps - about a fifth of a level at L41. Modest by chain standards; the real value is the material and potion payload, not the EXP curve."
  - type: "mesos"
    label: "1,199 mesos per step (4,796 total)"
    details: "Flat 1,199 mesos per delivery. Combined ~4.8k across the chain - not a meso farm, just travel money."
  - type: "item"
    label: "30x Blue Potion per step (90 total, guaranteed)"
    itemId: 2000003
    itemSlug: "blue-potion"
    details: "Steps 10206, 10207, and 10208 each award 30 Blue Potions. Ninety total MP potions is a substantial Magician stockpile - or a resale opportunity for physical classes at ~40-60 mesos each on Free Market."
  - type: "item"
    label: "5x Magic Potion (step 10206, guaranteed)"
    itemId: 2002001
    itemSlug: "magic-potion"
    details: "First step reward. Magic Potions boost Magic Attack for a limited time - useful for Magicians pushing damage tables for a specific fight."
  - type: "item"
    label: "5x Dexterity Potion (step 10207, guaranteed)"
    itemId: 2002003
    itemSlug: "dexterity-potion"
    details: "Second step reward. DEX Potions boost DEX for a limited time - Bowmen and Bandit-hybrids get accuracy value; other classes usually save these for a critical Zakum-adjacent moment."
  - type: "item"
    label: "5x Warrior Potion (step 10208, guaranteed)"
    itemId: 2002000
    itemSlug: "warrior-potion"
    details: "Third step reward. Warrior Potions boost STR - the natural Warrior stat buff, but also useful for any class that stacks STR for gear requirements."
  - type: "item"
    label: "Shoes Speed Scroll: Intermediate (step 10209, chance)"
    itemId: 2040705
    itemSlug: "shoes-speed-scroll-intermediate"
    details: "Final step awards a randomized scroll roll. Intermediate is the common outcome."
  - type: "item"
    label: "Shoes Speed Scroll: Greater (step 10209, rare chance)"
    itemId: 2040706
    itemSlug: "shoes-speed-scroll-greater"
    details: "Rare upgrade tier - the Greater variant of the Shoes Speed Scroll. Both scrolls target the same slot (footwear) and add movement speed, but the Greater tier is the trade-worthy prize."

# ==== Editorial ====
editorial: |
  <p>Ronnie's House-Building Chain is a four-step cross-continental
  fetch quest that sends the player through most of Victoria
  Island's mid-level hunting grounds under the pretext of
  collecting building materials for baby fairies. It's a
  classic Ellinia mid-40s side quest - not glamorous, but
  memorable, and one of the cleaner "learn the map" chains for
  new players who haven't yet visited Kerning Subway or the
  Ant Tunnel.</p>

  <p>The chain unlocks around <strong>Level 41</strong> based
  on the difficulty of the last step (Cold Eyes and Drakes in
  the Ant Tunnel). It's technically doable earlier if you can
  buy or borrow the required drops, but the Diamond in the
  final step is the practical floor - Diamonds only drop from
  L45+ mobs unless you buy one on the Free Market.</p>

  <h3>The four steps</h3>
  <ol>
    <li>
      <strong>10206 - First Material Delivery</strong>
      (Ronnie, Ellinia woods): Collect
      <strong>30 Horny Mushroom Caps</strong> from
      <a href="/mobs/19">Horny Mushrooms</a> and
      <strong>30 Curse Eye Tails</strong> from
      <a href="/mobs/31">Curse Eyes</a>. Both live in
      Ellinia and around the border of Perion - starting in
      familiar territory. Rewards 30 Blue Potions and 5 Magic
      Potions.
    </li>
    <li>
      <strong>10207 - Second Material Delivery</strong>: Now
      travel to the Kerning City subway system for
      <strong>30 Bubbling's Huge Bubbles</strong> from
      <a href="/mobs/14">Bubblings</a> and
      <strong>30 Tablecloths</strong> from
      <a href="/mobs/32">Jr. Wraiths</a>. The subway maps
      are compact and quick to farm once you know the layout.
      Rewards 30 Blue Potions and 5 Dexterity Potions.
    </li>
    <li>
      <strong>10208 - Third Material Delivery</strong>: Off
      to Perion. Collect <strong>30 Fire Boar's Tooth</strong>
      from <a href="/mobs/30">Fire Boars</a> and
      <strong>30 Drake Skulls</strong> from
      <a href="/mobs/40">Copper Drakes</a>. Copper Drakes
      are your first taste of Sleepywood-adjacent hunting
      grounds - a good place to naturally start scouting Ant
      Tunnel. Rewards 30 Blue Potions and 5 Warrior Potions.
    </li>
    <li>
      <strong>10209 - Last Material Delivery</strong>: The
      finale. Deep into the Ant Tunnel for
      <strong>30 Cold Eye Tails</strong> from
      <a href="/mobs/37">Cold Eyes</a>,
      <strong>10 Dragon Skins</strong> from
      <a href="/mobs/45">Drakes</a>, and
      <strong>1 Diamond</strong>. The Diamond is the tricky
      part - it drops rarely from higher-level mobs, or you
      buy one on the Free Market for a few thousand mesos.
      Rewards a random <a href="/items/2040705">Shoes Speed
      Scroll</a> - Intermediate on the common roll, Greater
      on the rare roll.
    </li>
  </ol>

  <h3>Should you run this?</h3>
  <p>The chain is a <strong>net-positive for Magicians and
  Wizards</strong> because 90 Blue Potions is a meaningful
  stockpile at L41. Physical classes can still run it for
  the resale value (90 Blue Potions on Free Market at even
  40 mesos each is 3,600 mesos on top of the chain's meso
  rewards, plus the scroll roll).</p>

  <p>For pure EXP-per-hour thinking, this chain is not
  competitive - 22k EXP for four cross-continental deliveries
  is worse than just training at the appropriate map for the
  same time. But EXP is not the point. This is a chain you
  run for the <strong>Shoes Speed Scroll roll</strong>, the
  <strong>bulk potion payload</strong>, and the excuse to
  learn the layouts of Kerning Subway and Ant Tunnel before
  you actually need them for hunting.</p>

  <p><strong>Diamond acquisition tip:</strong> if you don't
  want to farm one, check the Free Market. Diamonds trade
  reliably at ~3-5k mesos each in early Classic World
  economies - well under the chain's total meso reward, so
  buying one is net-positive even if it feels like a
  workaround.</p>

  <h3>Ronnie's other appearance</h3>
  <p>The same Ronnie also runs a separate role in the
  <a href="/quests/sleepywood-sauna-robe-chain">Sleepywood
  Sauna Robe Chain</a> - he's the "Hungry Ronnie" step
  between Mr. Wetbottom and Rina at Level 32. If you're
  clearing all the classic v83 side content, you'll meet
  Ronnie twice: once in his tree-tunnel snack-begging role
  around L32, and again here around L41 as a fairy homebuilder.
  He's earned his meme status.</p>

callout: |
  <strong>Do this chain before hitting L50</strong> if you
  want the Shoes Speed Scroll roll to matter. Movement speed
  scrolls scale with your current footwear's upgrade slots,
  so applying one to a mid-40s pair of Shoes pays off across
  the rest of your climb to third job. Applying it to
  end-game footwear is fine too, but the marginal utility
  goes down when your Shoes already have other buffs stacked.

# ==== Cross-links ====
relatedGuides:
  - "/quests/sleepywood-sauna-robe-chain"
  - "/mobs/45"
  - "/items/diamond"
  - "/items/blue-potion"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest IDs (10206-10209), names, in-game descriptions, mob targets, drop counts, and reward tables all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Ronnie's NPC ID (320) verified against npcs.json. Mob cross-reference IDs (Horny Mushroom 19, Curse Eye 31, Bubbling 14, Jr. Wraith 32, Fire Boar 30, Copper Drake 40, Cold Eye 37, Drake 45) verified against mobs.json. Diamond as final-step material is confirmed in the quest text; whether the drop rate makes farming vs Free Market economically break-even depends on live-market prices that will not exist until launch."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "ellinia"
lastUpdated: "2026-09-26"
---

