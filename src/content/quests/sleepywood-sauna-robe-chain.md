---
questId: "10508"
name: "Mr. Wetbottom's Secret Book (Sleepywood Sauna Chain)"
category: "story"
tagline: "Nine-step cross-continental fetch chain starting in Sleepywood's VIP Sauna and ending with a Sauna Robe - one of the best universal Overalls in the level 30 bracket. The chain that made Sleepywood + Ronnie into permanent MapleStory folklore."

# ==== Requirements ====
levelMin: 32
classReq: "Any"

# ==== NPC / location ====
npcName: "Mr. Wetbottom (chain start)"
npcLocation: "Sleepywood - VIP Sauna"
npcId: 1061003  # canonical GMS/83 WZ ID (verified live)

# ==== Chain metadata ====
# Datamine covers 9 discrete quest IDs (10500-10508), one per NPC
# interaction. Documenting as ONE canonical article because
# structurally they're a linear delivery chain - splitting into 9
# separate files would be a DRY nightmare with no reader benefit.
chainName: "Sleepywood Sauna Robe Chain"
chainStep: 9
chainLength: 9

# ==== In-game narrative (final step 10508, verbatim from datamine) ====
description: |
  I got Ronnie all kinds of yummy snacks and finally got his
  dad's Secret Book in exchange. I really want to take just
  one peek...

  I got Mr. Wetbottom the precious Secret Book that he'd been
  desperately looking for. I asked him if he's worried about
  the book being unreturned - his answer suggests the book's
  contents matter more than any material reward, and he thanks
  you with a Sauna Robe as a token.

# ==== Rewards (final step, tier 9) ====
# The chain awards small EXP + mesos at each step. The final
# step (10508) awards the Sauna Robe (Blue for male, Red for
# female). Per-step EXP: mostly 3487; smaller "walk" steps
# (10502, 10505) reward 2440. Total chain EXP: ~28,500;
# Total mesos: ~7,650.
rewards:
  - type: "exp"
    label: "3,487 EXP per major step (~28,500 total across chain)"
    details: "Steps 10500, 10501, 10503, 10504, 10506, 10507, 10508 each award 3,487 EXP. Interim walk steps (10502 = 'go see Rina', 10505 = 'go see Rowen') award 2,440. Full chain nets ~28.5k EXP - about a full level at 32."
  - type: "mesos"
    label: "~7,650 mesos across chain"
    details: "Per-step 936 or 655 mesos. Modest per step; adds up over the chain length."
  - type: "item"
    label: "20x Blue Potion (step 10501, guaranteed)"
    itemId: 2000003
    itemSlug: "blue-potion"
    details: "Ronnie awards a stack of 20 Blue Potions early in the chain. Combined with the 10 from Talking to Stan at L18, you enter this chain with a healthy MP reserve for Magicians or a resale opportunity for physical classes."
  - type: "item"
    label: "1 additional Blue Potion (step 10503)"
    itemId: 2000003
    itemSlug: "blue-potion"
    details: "Rina hands out a single extra Blue Potion when you deliver the Curse Eye Tails and Pig's Heads. Small but non-zero."
  - type: "item"
    label: "Blue Sauna Robe (male characters, step 10508 final payoff)"
    itemId: 1050010
    itemSlug: "blue-sauna-robe"
    details: "L30 Overall, +1 STR/DEX/INT/LUK, +75 PDD, +10 MaxHP, +10 MaxMP, 10 upgrade slots, 1.5x HP/MP recovery inside the Sleepywood VIP Sauna. Male-character variant."
  - type: "item"
    label: "Red Sauna Robe (female characters, step 10508 final payoff)"
    itemId: 1051004
    itemSlug: "red-sauna-robe"
    details: "Mechanically identical to Blue Sauna Robe - the reward is gender-locked at award time. Female characters get the Red variant. Both are literally striped bath towels with a bow."

# ==== Editorial ====
editorial: |
  <p>The Sleepywood Sauna Robe chain is one of MapleStory's
  longest single-continent quest chains, and one of the most
  culturally beloved. It's why every v83 player has a memory of
  the Sleepywood VIP Sauna, and why Ronnie became a running
  meme in Classic MapleStory circles ("Ronnie's still hungry"
  is basically shorthand for the fetch-quest treadmill).</p>

  <h3>The nine steps</h3>
  <ol>
    <li>
      <strong>10500 - A Clue to the Secret Book</strong>
      (Wetbottom): Meet the old man in the VIP Sauna. He's
      lost his precious Secret Book to his runaway son Ronnie.
    </li>
    <li>
      <strong>10501 - Hungry Ronnie</strong> (Ronnie, in a
      tree tunnel near Ellinia): He'll only trade for the
      book if you feed him. Kill Lupins in the western Ellinia
      area to collect Lupin's Bananas. Rewards 20 Blue Potions
      for your trouble.
    </li>
    <li>
      <strong>10502 - Still Hungry Ronnie</strong>: Bananas
      aren't enough. Go see Rina in Henesys for the real meal.
    </li>
    <li>
      <strong>10503 - Secret to Unagi Special</strong>
      (Rina, Henesys): Bring 50 Curse Eye Tails and 10 Pig's
      Heads. This is the actual grinding portion - Curse Eyes
      live in various maps at level 30-40, Pig's Heads drop
      from Pigs and Ribbon Pigs.
    </li>
    <li>
      <strong>10504 - Rina's Unagi Special</strong>: Deliver
      the finished dish to Ronnie.
    </li>
    <li>
      <strong>10505 - Thirsty Ronnie</strong>: Ronnie's now
      thirsty from all that unagi. Off to Ellinia to see
      <a href="/quests/cursed-doll-chain">Rowen the Fairy</a>.
    </li>
    <li>
      <strong>10506 - Cold Milk</strong> (Rowen, Ellinia):
      Rowen wants a <a href="/items/diamond">Diamond</a>
      (WZ 4020107, the finished gem - NOT Diamond Ore) in
      exchange for Fresh Milk. Diamonds drop rarely from
      Zombie Lupins, Cold Drakes, and Sleepywood-area mobs.
      Also available on the Free Market.
    </li>
    <li>
      <strong>10507 - Satisfied Ronnie</strong>: Deliver the
      milk to Ronnie.
    </li>
    <li>
      <strong>10508 - Returned Secret Book</strong>: Ronnie
      finally hands over the Secret Book. Deliver it to Mr.
      Wetbottom for the chain's payoff: a Sauna Robe.
    </li>
  </ol>

  <h3>The Sauna Robe is the point</h3>
  <p>Let's talk about why this chain matters mechanically. The
  <a href="/items/blue-sauna-robe">Sauna Robe</a> is a
  <strong>Level 30 Overall</strong> with +1 to every stat,
  +75 Weapon Defense, +10 MaxHP, +10 MaxMP, and 10 upgrade
  slots. That's a solid Overall by any measure, and it's
  outright the best universal-class Overall you can get for
  zero mesos investment at level 30.</p>

  <p>The +1 to every stat is the standout feature. Most
  Overalls specialize (STR for Warriors, INT for Magicians);
  the Sauna Robe gives a small nudge to all four. For any
  class, that's a free +1 to your primary damage stat. For
  hybrid or off-meta builds (Warrior sub-DEX for accuracy,
  Bandit picking up STR for equip requirements), the +1 to
  everything is genuinely useful.</p>

  <p><strong>The 1.5x sauna recovery bonus is a cute touch.</strong>
  Wear the robe inside the actual Sleepywood VIP Sauna map and
  your natural HP/MP regen jumps 50%. Mechanically minor
  (nobody sits in a sauna to regen mid-training), but a
  perfect thematic detail linking the reward back to its
  origin location.</p>

callout: |
  <strong>Gender-locked reward.</strong> Male characters
  receive the Blue Sauna Robe; female characters get the Red
  Sauna Robe. Mechanically identical (same stats, same slots),
  visually different. Both share item behavior and can be
  scrolled with the same Overall scrolls.

# ==== Cross-links ====
relatedGuides:
  - "/items/blue-sauna-robe"
  - "/items/red-sauna-robe"
  - "/items/blue-potion"
  - "/items/diamond"
  - "/quests/cursed-doll-chain"
  - "/quests/mothers-gold-watch"
  - "/quests/ronnies-house-building-chain"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "All 9 quest IDs (10500-10508), NPCs (Mr. Wetbottom 1061003, Ronnie 1061004, Rina 1010100, Rowen the Fairy 1032101), level requirement (32+), rewards per step, and the Sauna Robe payoff (Blue 1050010 male / Red 1051004 female, L30, +1 all stats, +75 PDD, +10 MHP/MMP, 10 slots, 1.5x sauna recovery) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Drop rate estimates for Curse Eye Tails and Pig's Heads are v83 community estimates pending CoT 2 measurement."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "perion"
lastUpdated: "2026-08-24"
---
