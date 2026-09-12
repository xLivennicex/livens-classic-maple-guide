---
questId: "10614"
name: "Nyroth + Jaime's Rot-Steeped Arcforging (3 quests)"
category: "story"
tagline: "Nyroth is Arcforging PROTECTION SCROLLS using rot-steeped catalysts against the living malice in Forgotten Hollow. The Rot swallows his forging fire - alchemist Jaime the Wandering Explorer investigates. Deep Arcforging lore."

levelMin: 45
classReq: "Any"

npcName: "Nyroth / Jaime the Wandering Explorer"
npcLocation: "Forgotten Hollow (deep tunnels)"

# Documented as ONE canonical article covering 3 discrete quest
# IDs (10612, 10613, 10614). Cross-NPC arc - Nyroth's Arcforging
# fails against living malice, Jaime the alchemist investigates.
# Natural 3-quest canonical.
chainName: "Nyroth's Protection Scroll"
chainStep: 3
chainLength: 3

description: |
  Nyroth is trying to Arcforge a protection scroll using
  rot-steeped catalysts. Maybe he needs some help venturing
  deeper into the dark tunnels to hunt the corrupted
  creatures for materials.

  When The Rot swallows Nyroth's forging fire, he realizes
  the sickness is a LIVING MALICE. He asks you to take the
  scorched scroll to Jaime the Wandering Explorer - an
  alchemist who might explain why the Arcforging machinery
  failed.

rewards:
  - type: "exp"
    label: "16,644 EXP total across 3 quests"
    details: "5,255 + 5,255 + 6,134 = 16,644 EXP. Substantial multi-level EXP at L45."
  - type: "mesos"
    label: "4,200 mesos total"
  - type: "item"
    label: "25x Blue Potion (Nyroth step 1)"
    itemId: 2000003
    itemSlug: "blue-potion"
  - type: "item"
    label: "RANDOM Cape Accuracy Scroll (Int OR Greater) - Nyroth step 2"
    itemId: 2041025
    details: "RANDOM 1-of-2 pool: Cape Accuracy Scroll: Intermediate (2041025, 60% / +1 ACC) OR Cape Accuracy Scroll: Greater (2041026, 30% / +2 ACC, destroy on miss). Uncommon cape scroll type - most cape scrolls are primary-stat (STR/DEX/INT/LUK), Accuracy variants are rarer."
  - type: "item"
    label: "15x Watermelon + 10x Lemon (Jaime step 3)"
    itemId: 2010006
    details: "15 GUARANTEED Watermelons (2010006, food HP restore) + 10 GUARANTEED Lemons (2010005, food MP restore). Alchemist's assessment fee, paid in fresh ingredients. Solid consumable stash."

editorial: |
  <p>Nyroth's arc is <strong>the deep Arcforging lore
  chain</strong>. Nyroth is one of the few NPCs in the
  Forgotten Hollow who explicitly practices Arcforging -
  the scroll crafting profession
  <a href="/items/arcforging-kit">documented in the
  Arcforging Kit page</a>. This chain reveals HOW
  Arcforging actually works when it interacts with
  cursed materials.</p>

  <h3>The 3-quest arc</h3>
  <ol>
    <li><strong>10612 - Nyroth's Fragile Hope.</strong>
      Nyroth is trying to Arcforge a protection scroll
      using rot-steeped catalysts. Venture into the dark
      tunnels to hunt corrupted creatures for materials.
      Rewards 25 Blue Potions.</li>
    <li><strong>10613 - Matters of the Heart (Nyroth).</strong>
      The Rot swallows Nyroth's forging fire - the sickness
      is a LIVING MALICE. Nyroth wants you to take the
      scorched scroll to Jaime the Wandering Explorer.
      Rewards random Cape Accuracy Scroll.</li>
    <li><strong>10614 - A Memory of Iron (Jaime the Wandering
      Explorer).</strong> Jaime the alchemist analyzes the
      scorched scroll to understand why Nyroth's machinery
      failed against the living malice. Rewards 15
      Watermelons + 10 Lemons.</li>
  </ol>

  <h3>THE Arcforging + Malice reveal</h3>
  <p>This chain is <strong>essential Classic World Arcforging
  lore</strong>. Key facts:</p>
  <ul>
    <li><strong>Arcforging uses catalysts.</strong> Nyroth's
      "rot-steeped catalysts" match the pattern seen in
      <a href="/quests/crafting-masters-graduation">Chrishrama's
      L25 graduation - Scroll Crafting Catalyst</a>.</li>
    <li><strong>Arcforging can be corrupted.</strong> The
      living malice in the tunnels overpowers Nyroth's
      forge. This is Classic World's <em>first documented
      case of Arcforging failure</em>.</li>
    <li><strong>Alchemy > Arcforging in some cases.</strong>
      Jaime uses alchemy (not Arcforging) to analyze the
      scorched scroll. This implies there are TWO magical
      disciplines in Classic World - Arcforging (scroll
      crafting) and Alchemy (analysis / potion / material
      transformation).</li>
  </ul>

  <p><strong>Cross-narrative implication:</strong> Jaime the
  Wandering Explorer might be the Classic World equivalent
  of an Alchemy master. His NPC name "Wandering Explorer"
  suggests he moves between zones - possibly he's the
  bridge between Forgotten Hollow, Ossyria continent, and
  other future crafting content.</p>

  <h3>Where the tunnels are</h3>
  <p>The "dark tunnels" are Forgotten Hollow's sub-zones
  accessed from Zelya's cave map. Corrupted mob density
  L40-45 - manageable at L45 with a fresh second-job
  character.</p>

callout: |
  <strong>Deep-lore priority.</strong> If you care about
  Classic World's crafting worldbuilding, this chain is
  MANDATORY. Nyroth's rot-steeped Arcforging + Jaime's
  alchemy analysis define the magical-crafting economy's
  edge cases. Skipping means missing HALF the crafting
  system reveals.

relatedGuides:
  - "/quests/welcome-to-the-hollow"
  - "/quests/zelyas-road-back-home"
  - "/quests/crafting-masters-graduation"
  - "/items/arcforging-kit"

verificationStatus: "closed-test-info"
verificationNote: "All 3 quest IDs (10612, 10613, 10614), NPCs (Nyroth - CoT-exclusive Forgotten Hollow Arcforger, Jaime the Wandering Explorer - alchemist, both WZ IDs pending), level (45), per-quest EXP (5,255/5,255/6,134) + mesos (1,300/1,300/1,600) + all item rewards (25x Blue Potion 2000003 step 1, RANDOM Cape Accuracy Scroll 2041025/2041026 step 2, 15x Watermelon 2010006 + 10x Lemon 2010005 step 3) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Arcforging = scroll crafting confirmed via crafting-masters-graduation Scroll Crafting Catalyst; Alchemy inferred as separate discipline from Jaime's role."
sourceSlugs:
  - "osmsdataexplorer"

theme: "ellinia"
lastUpdated: "2026-08-26"
---
