---
questId: "10209"
name: "Ronnie's House-Building Chain"
category: "area"
tagline: "Four-step L41 material-gathering chain from Ronnie the fairy in Ellinia. Rewards mid-tier utility potions per step, culminating in a guaranteed Shoes Speed Scroll (Intermediate) AND a Shoes Speed Scroll (Greater) - the go-to speed-boost path for the L40 bracket."

# ==== Requirements ====
levelMin: 41
classReq: "Any"

# ==== NPC / location ====
npcName: "Ronnie"
npcLocation: "Ellinia (Fairy forest)"
npcId: 1061004  # canonical GMS/83 WZ ID (verified live)

# ==== Chain ====
# 4 discrete quest IDs (10206-10209), documented as ONE canonical
# article. Structurally similar to Cursed Doll chain: linear
# material-fetch quests with escalating drop targets.
chainName: "Ronnie's House-Building"
chainStep: 4
chainLength: 4

# ==== In-game narrative (final step 10209, verbatim) ====
description: |
  Meet Ronnie in the Unknown Map (105010000).

  Ronnie asked me for help one last time. This time, he wants
  me to get 30 Cold Eye Tails, 10 Dragon Skins, and 1 Diamond
  by taking down Cold Eyes, Drakes, and hunting a Diamond drop
  from somewhere. The finished house needs the finishing
  materials to stand.

# ==== Rewards (final step, tier 4) ====
rewards:
  - type: "exp"
    label: "5,568 EXP per step (22,272 EXP total across chain)"
    details: "Each of the 4 chain steps awards a flat 5,568 EXP. Full chain: ~22.3k EXP - about half a level at 41-42."
  - type: "mesos"
    label: "1,199 mesos per step (4,796 total)"
    details: "Modest per-step. Real value is the potion + scroll rewards."
  - type: "item"
    label: "30x Blue Potion PER STEP (120 total)"
    itemId: 2000003
    itemSlug: "blue-potion"
    details: "Every step (10206, 10207, 10208, 10209) hands out 30 Blue Potions guaranteed. Full-chain haul: 120 Blue Potions = 24,000 MP worth of restoration. Magicians should prioritize this chain purely for the potion economy."
  - type: "item"
    label: "5x Magic Potion (step 10206)"
    itemId: 2002001
    details: "The Magic Potion is a temporary +INT buff consumable - situational for casters. Bank or sell if you're not a Magician."
  - type: "item"
    label: "5x Dexterity Potion (step 10207)"
    itemId: 2002003
    details: "Temporary +DEX buff. Useful for Bowmen and Thieves during boss fights or accuracy-limited content."
  - type: "item"
    label: "5x Warrior Potion (step 10208)"
    itemId: 2002000
    details: "Temporary +STR buff. Standard Warrior boss-fight consumable."
  - type: "item"
    label: "1x Shoes Speed Scroll: Intermediate (step 10209 - guaranteed)"
    itemId: 2040705
    itemSlug: "shoes-speed-scroll-intermediate"
    details: "+2 Speed at 60% success. Apply to shoes for a meaningful movement speed uplift. See item page for stacking math."
  - type: "item"
    label: "1x Shoes Speed Scroll: Greater (step 10209 - guaranteed)"
    itemId: 2040706
    itemSlug: "shoes-speed-scroll-greater"
    details: "+3 Speed at 10% success. The higher-risk, higher-reward version. 10% success is punishing but the +3 vs +2 payoff is substantial when it lands."

# ==== Editorial ====
editorial: |
  <p>Ronnie's House-Building chain is the direct thematic
  follow-up to the <a href="/quests/sleepywood-sauna-robe-chain">Sleepywood
  Sauna Robe chain</a>. After Ronnie is reunited with his
  father (Wetbottom) and the Secret Book is returned, Ronnie
  moves to the Ellinia fairy forest and takes up house-building
  for baby fairies. He needs materials, so he calls on the
  hero one more time.</p>

  <h3>The four steps</h3>
  <ol>
    <li>
      <strong>10206 - First Material Delivery</strong>: Meet
      Ronnie in the Ellinia forest. Straightforward
      introduction; rewards 5 Magic Potions + 30 Blue Potions.
    </li>
    <li>
      <strong>10207 - Second Material Delivery</strong>: 30
      Bubbling's Huge Bubbles from Bubblings + 30 Tablecloths
      from Jr. Wraiths. Both drop in the Unknown Map area
      (105010000). Rewards 5 Dexterity Potions + 30 Blue Potions.
    </li>
    <li>
      <strong>10208 - Third Material Delivery</strong>: 30
      Fire Boar's Tooth from Fire Boars (Perion excavation
      site) + 30 Drake Skull from Copper Drakes (Sleepywood
      dungeon). Rewards 5 Warrior Potions + 30 Blue Potions.
    </li>
    <li>
      <strong>10209 - Last Material Delivery</strong>: 30 Cold
      Eye Tails from Cold Eyes (Ice Valley) + 10 Dragon Skins
      from Drakes + 1 <a href="/items/diamond">Diamond</a>.
      The Diamond is the actual bottleneck - see below.
    </li>
  </ol>

  <h3>The Diamond bottleneck</h3>
  <p>Diamonds drop rarely from mid-to-high-level mobs (Zombie
  Lupins, Cold Drakes, various Ellinia and Sleepywood mobs)
  or from the <a href="/quests/cursed-doll-chain">Cursed Doll
  chain</a> tier 3 as a random reward. If you've completed the
  Cursed Doll chain first, you may already have one; otherwise
  budget grinding time or buy off the Free Market.</p>

  <h3>Why grind this chain?</h3>
  <p>The final-tier rewards are the point: two Shoes Speed
  Scrolls in one delivery. Movement Speed is one of the most
  overlooked quality-of-life stats in Classic MapleStory - a
  faster character trains faster, retreats faster, and loops
  maps faster. A single successful <a href="/items/shoes-speed-scroll-intermediate">Speed Scroll (Intermediate)</a>
  application is +2 Speed permanently on your shoes; stacking
  4-5 successes over a shoe's slot lifetime is a genuinely
  transformative QOL upgrade.</p>

  <p><strong>Bonus haul:</strong> 120 Blue Potions across the
  chain. If you're a Magician, this alone justifies the chain
  time investment. If you're not, the potions NPC-sell for
  ~22 mesos each = 2,640 mesos of vendor value.</p>

callout: |
  <strong>The Shoes Speed Scroll (Greater) is a gamble.</strong>
  10% success rate is brutal. If your shoes have limited slots
  remaining, apply the Intermediate version first (60% success,
  +2 Speed) and hold the Greater for a shoe with more slots.
  Booming a well-scrolled shoe on a 10% roll is the classic
  mid-game heartbreak.

# ==== Cross-links ====
relatedGuides:
  - "/items/diamond"
  - "/items/blue-potion"
  - "/items/shoes-speed-scroll-intermediate"
  - "/items/shoes-speed-scroll-greater"
  - "/quests/sleepywood-sauna-robe-chain"
  - "/quests/cursed-doll-chain"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "All 4 quest IDs (10206-10209), NPC (Ronnie 1061004), level requirement (41+), per-step EXP (5,568) + mesos (1,199), all item reward IDs (Blue Potion 2000003, Magic Potion 2002001, Dexterity Potion 2002003, Warrior Potion 2002000, Shoes Speed Scroll: Intermediate 2040705, Shoes Speed Scroll: Greater 2040706), and Diamond bottleneck all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "ellinia"
lastUpdated: "2026-08-24"
---
