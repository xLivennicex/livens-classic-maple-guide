---
questId: "10209"
name: "Building Ronnie's House (4-Step Ellinia Material Delivery Chain)"
category: "story"
tagline: "Four material deliveries for Ronnie the fairy in Ellinia's woods, across Ellinia, the Kerning subway, Perion, and the Ant Tunnel. 8,670 EXP per step, 90 Blue Potions, three buff potions, and a 50/50 Shoes Speed Scroll at the end."

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
# Merged 2026-10-21 with a duplicate write-up (ronnies-house-building-
# chain, which now redirects here).
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


# ==== Rewards (aggregated across the 4-step chain; current client datamine) ====
rewards:
  - type: "exp"
    label: "8,670 EXP per step (34,680 total)"
    details: "Flat 8,670 EXP for each of the four deliveries. The Closed Online Test 2 build paid 5,568 per step."
  - type: "mesos"
    label: "1,301 mesos per step (5,204 total)"
    details: "Travel money, not a meso farm."
  - type: "item"
    label: "30x Blue Potion per step, steps 1-3 (90 total)"
    itemId: 2000003
    itemSlug: "blue-potion"
    details: "Steps 10206, 10207, and 10208 each give 30 Blue Potions, guaranteed. The last step gives a scroll instead."
  - type: "item"
    label: "5x Magic Potion (step 1)"
    itemId: 2002001
    itemSlug: "magic-potion"
    details: "Magic Attack +10 for 10 minutes."
  - type: "item"
    label: "5x Dexterity Potion (step 2)"
    itemId: 2002003
    itemSlug: "dexterity-potion"
    details: "Despite the name: Evasion +5 for 10 minutes."
  - type: "item"
    label: "5x Warrior Potion (step 3)"
    itemId: 2002000
    itemSlug: "warrior-potion"
    details: "Attack Power +10 for 10 minutes."
  - type: "item"
    label: "Shoes Speed Scroll: Intermediate OR Greater (step 4, 50/50)"
    itemId: 2040705
    itemSlug: "shoes-speed-scroll-intermediate"
    details: "One of the two, equally weighted. Intermediate: 60% success, +2 Speed. Greater: 10% success, +3 Speed."

# ==== Editorial ====
editorial: |
  <p>Ronnie's House-Building Chain is a four-step fetch quest
  that sends you through most of Victoria Island's mid-level
  hunting grounds to collect building materials for baby
  fairies. Not glamorous, but one of the cleaner "learn the map"
  chains for players who haven't visited the Kerning subway or
  the Ant Tunnel yet.</p>

  <p>It needs <strong>Level 41</strong>. The last step's Cold Eyes
  and Drakes are the real difficulty, along with a
  <a href="/items/diamond">Diamond</a> - see below.</p>

  <h3>The four steps</h3>
  <ol>
    <li>
      <strong>10206 - First Material Delivery</strong>
      (Ronnie, Ellinia woods): <strong>30 Horny Mushroom Caps</strong>
      from <a href="/mobs/19">Horny Mushrooms</a> and
      <strong>30 Curse Eye Tails</strong> from
      <a href="/mobs/31">Curse Eyes</a>. Rewards 30 Blue Potions
      and 5 Magic Potions.
    </li>
    <li>
      <strong>10207 - Second Material Delivery</strong>: the
      Kerning City subway, for <strong>30 Bubbling's Huge
      Bubbles</strong> from <a href="/mobs/14">Bubblings</a> and
      <strong>30 Tablecloths</strong> from
      <a href="/mobs/32">Jr. Wraiths</a>. Rewards 30 Blue Potions
      and 5 Dexterity Potions.
    </li>
    <li>
      <strong>10208 - Third Material Delivery</strong>: Perion
      way, for <strong>30 Fire Boar's Teeth</strong> from
      <a href="/mobs/30">Fire Boars</a> (The Burnt Land) and
      <strong>30 Drake Skulls</strong> from
      <a href="/mobs/40">Copper Drakes</a>. Rewards 30 Blue Potions
      and 5 Warrior Potions.
    </li>
    <li>
      <strong>10209 - Last Material Delivery</strong>: deep in the
      Ant Tunnel for <strong>30 Cold Eye Tails</strong> from
      <a href="/mobs/37">Cold Eyes</a> and <strong>10 Dragon
      Skins</strong> from <a href="/mobs/45">Drakes</a>, plus
      <strong>1 Diamond</strong>. Rewards one Shoes Speed Scroll -
      Intermediate or Greater, 50/50.
    </li>
  </ol>

  <h3>The Diamond bottleneck</h3>
  <p><strong>No monster drops a Diamond.</strong> You make one:
  refine <strong>1 Diamond Ore</strong> through
  <a href="/crafting">Arcforge</a> (Chrishrama; crafting level 6,
  1,200 mesos). Diamond Ore drops from several mobs as low as
  Lv. 8, and step 3 of the
  <a href="/quests/cursed-doll-collection-chain">Cursed Doll chain</a>
  can award 5 of it. Diamond Ore and Diamond are different items -
  the quest won't accept the ore.</p>

  <h3>Should you run this?</h3>
  <p>For EXP per hour, no - four cross-island deliveries for
  34,680 EXP is slower than training. Run it for the
  <strong>Shoes Speed Scroll</strong>, the <strong>90 Blue
  Potions</strong> (a real stockpile for a Magician at 41), and
  the excuse to learn the subway and Ant Tunnel layouts before
  you hunt there.</p>

  <h3>Ronnie's other appearance</h3>
  <p>The same Ronnie appears in the
  <a href="/quests/sleepywood-sauna-robe-chain">Sleepywood Sauna
  Robe Chain</a> as the "Hungry Ronnie" step between Mr. Wetbottom
  and Rina around Level 32. Clear all the side content and you
  meet him twice: snack-begging at 32, fairy homebuilder at 41.</p>

callout: |
  <strong>The Greater scroll is a gamble.</strong> At 10% success
  it fails nine times out of ten. If you roll it, use it on shoes
  you can afford to waste a slot on - and if you roll the
  Intermediate (60%, +2 Speed), put it on the shoes you plan to
  keep.

# ==== Cross-links ====
relatedGuides:
  - "/quests/sleepywood-sauna-robe-chain"
  - "/quests/cursed-doll-collection-chain"
  - "/mobs/45"
  - "/items/diamond"
  - "/items/blue-potion"
  - "/items/shoes-speed-scroll-intermediate"
  - "/items/shoes-speed-scroll-greater"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Quest IDs (10206-10209), required items per step, EXP (8,670) and mesos (1,301) per step, and reward tables come from the current client datamine (quests.json, items.json requiredByQuests). Potion effects and scroll success rates are the items' in-game descriptions. Diamond acquisition (no mob drops; Arcforge from Diamond Ore) is from items.json droppedBy / craftableFrom. Ronnie's NPC ID (320) and the mob IDs are verified against npcs.json and mobs.json. Merged on 2026-10-21 from two duplicate write-ups, which used Closed Online Test 2 values (5,568 EXP / 1,199 mesos) and misdescribed the Dexterity/Warrior Potion effects and the final-scroll odds."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "ellinia"
lastUpdated: "2026-10-21"
---
