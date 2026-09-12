---
questId: "10205"
name: "Rowen's Cursed Doll Chain"
category: "area"
tagline: "Five escalating collection quests from Rowen the Fairy in Ellinia. Grind Zombie Lupins for Cursed Dolls; each tier trades progressively better crafting ore and, at the top, a level 40 hat you didn't know you wanted."

# ==== Requirements ====
levelMin: 36
classReq: "Any"

# ==== NPC / location ====
npcName: "Rowen the Fairy"
npcLocation: "Ellinia"
npcId: 1032101  # canonical GMS/83 WZ ID

# ==== Chain metadata ====
# Datamine has 5 quest IDs (10201-10205) representing tiers.
# We treat this as ONE canonical article because they're
# structurally identical (talk to Rowen, kill Zombie Lupins,
# return dolls) with different reward tables. Chain length
# metadata reflects tier 5 (the payoff step) as canonical.
chainName: "Cursed Doll Chain"
chainStep: 5
chainLength: 5

# ==== In-game narrative (CoT 2 datamine text, verbatim from tier 5) ====
description: |
  Rowen the Fairy asked for my help one last time, this time
  to hunt 200 Zombie Lupins and collect 200 Cursed Dolls. Does
  she really need THIS many? Is it working?

  I eliminated a bunch of Zombie Lupins in a forest near
  Ellinia and collected all 200 Cursed Dolls for Rowen.

# ==== Rewards - tier 5 canonical (level 40 hat drop) ====
# Only listing the tier 5 (200 doll) rewards here since this
# quest article treats tier 5 as canonical. Editorial covers
# tiers 1-4 in prose because they're each just a different
# ore/scroll bundle - the item-sprite grid on this page would
# get overwhelming if we tried to list all 5 tiers' random
# drops individually.
rewards:
  - type: "exp"
    label: "4,387 EXP (per tier - 5 tiers total)"
    details: "Each of the 5 chain tiers awards 4,387 EXP. Complete the whole chain and you bank 21,935 EXP - about 1.5 levels at level 36-37."
  - type: "mesos"
    label: "1,053 mesos (per tier)"
    details: "Nominal mesos per tier. Real value is the item drops."
  - type: "item"
    label: "Gloves Attack Scroll: Intermediate (tier 4 outcome)"
    itemId: 2040801
    itemSlug: "gloves-attack-scroll-intermediate"
    details: "Tier 4 (150 dolls) awards either this OR the Magic Attack variant, randomly. +2 Weapon Attack per successful application at 60% success."
  - type: "item"
    label: "Gloves Magic Attack Scroll: Intermediate (tier 4 outcome)"
    itemId: 2040805
    itemSlug: "gloves-magic-attack-scroll-intermediate"
    details: "The Magician side of the tier 4 (150 dolls) reward flip. +4 Magic Attack per successful application at 60% success - double the Weapon Attack variant's stat gain."
  - type: "item"
    label: "Steel Nordic Helm - one of the L40 tier 5 outcomes"
    itemId: 1002139
    itemSlug: "steel-nordic-helm"
    details: "Warrior-aesthetic L40 hat. See its item page for the full 18-variant tier-5 hat pool enumeration (Nordic Helm, Guiltian, Distinction, Pilfer families)."
  - type: "item"
    label: "Old Wisconsin - the L17 Fame-gated tier 5 outcome"
    itemId: 1002053
    itemSlug: "old-wisconsin"
    details: "L17 hat with 10 Fame requirement - the historical 'prestige' payoff of the chain. See Steel Nordic Helm for the full L40 hat pool."

# ==== Editorial ====
editorial: |
  <p>The Cursed Doll chain is <em>not</em> a party quest - it
  is a solo grinding chain framed as a series of five collection
  quests. All five are triggered by talking to Rowen the Fairy
  in Ellinia. The mob you're grinding is the same for every
  tier: <strong>Zombie Lupin</strong>, found in the forest maps
  north of Ellinia.</p>

  <h3>The five tiers</h3>
  <ul>
    <li>
      <strong>Tier 1: Collecting 50 Cursed Dolls</strong> -
      awards a random low-tier metal ore (Bronze / Iron /
      Mithril / Adamantium / Silver / Orihalcon), quantity 7.
      Crafting fuel for smiths.
    </li>
    <li>
      <strong>Tier 2: Collecting 70 Cursed Dolls</strong> -
      awards a random gem ore (Garnet / Amethyst / Aquamarine
      / Emerald / Opal / Sapphire / Topaz), quantity 10.
      Accessory-crafting fuel.
    </li>
    <li>
      <strong>Tier 3: Collecting 100 Cursed Dolls</strong> -
      awards a random precious ore: Gold or Diamond, quantity
      5. High-tier crafting fuel.
    </li>
    <li>
      <strong>Tier 4: Collecting 150 Cursed Dolls</strong> -
      awards <em>either</em> a Gloves Attack Scroll
      (Intermediate) OR a Gloves Magic Attack Scroll
      (Intermediate). The first genuine equipment-upgrade
      reward in the chain.
    </li>
    <li>
      <strong>Tier 5: Collecting 200 Cursed Dolls</strong> -
      the payoff. A random level 40 hat: Old Wisconsin, Steel
      Nordic Helm, Dark Guiltian, Dark Distinction, or Dark
      Pilfer. This is the reward chain readers actually run
      for.
    </li>
  </ul>

  <h3>Why grind this instead of leveling normally?</h3>
  <p>Straight leveling in this range is faster EXP per hour
  than the chain's rewards. What the chain gives you is
  <strong>crafted-item fuel + a decent hat</strong> without
  buying anything from other players. If you're a smith or
  accessory-crafter, tiers 1-3 are your ore restock run. If
  you don't craft, skip to tier 5.</p>

  <p><strong>Total dolls needed to complete all 5 tiers:</strong>
  50 + 70 + 100 + 150 + 200 = <strong>570 Cursed Dolls</strong>.
  At a rough drop rate of 40-60% from Zombie Lupins, that's
  ~1,000-1,400 mobs. Budget 3-5 hours for a full clear at
  level 36-40.</p>

callout: |
  <strong>Chain accepts partial completions.</strong> Each tier
  is a discrete quest - you can complete tier 1 for the ore,
  skip a few weeks, come back and knock out tier 5 for the hat.
  The Cursed Dolls you collect count toward whichever tier is
  currently accepted. No penalty for pausing.

# ==== Cross-links ====
relatedGuides:
  - "/items/old-wisconsin"
  - "/quests"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "All 5 quest IDs (10201-10205), NPC (Rowen the Fairy), level requirement (36+), per-tier EXP + meso rewards (4387/1053 each), and complete tier-by-tier reward tables pulled verbatim from the CoT 2 client datamine. Drop rate estimate (40-60% per Zombie Lupin) is v83 community estimate pending live CoT 2 measurement."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "ellinia"
lastUpdated: "2026-08-23"
---
