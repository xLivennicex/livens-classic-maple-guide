---
questId: "10205"
name: "Rowen the Fairy's Cursed Doll Chain (5 quests)"
category: "story"
tagline: "The legendary Cursed Doll grind. Rowen the Fairy asks for 50/70/100/150/200 Cursed Dolls from Zombie Lupins across 5 escalating quests. Rewards ALL 6 base ores, ALL 7 gem ores, Gold/Diamond Ore, Gloves Attack Scrolls, and a random hat pool."

levelMin: 36
classReq: "Any"

npcName: "Rowen the Fairy"
npcLocation: "Ellinia forest"
npcId: 1032101

# Documented as ONE canonical article covering 5 discrete quest
# IDs (10201-10205). This is Classic MapleStory's iconic L36
# grind chain - escalating collection quest (50, 70, 100, 150,
# 200 dolls per step). Splitting into 5 files would fragment
# the tier-reward structure.
chainName: "Cursed Doll Collection"
chainStep: 5
chainLength: 5

description: |
  I think Rowen the Fairy in Ellinia has something to ask
  me... I ran into Rowen the Fairy again, who had given me
  Fresh Milk for Ronnie, Mr. Wetbottom's son, last time.

  This time she wants Cursed Dolls. A LOT of Cursed Dolls.
  Zombie Lupins in the forest area of Ellinia drop them.
  She asks for 50 first, then 70, then 100, then 150, then
  200. The rewards escalate accordingly.

rewards:
  - type: "exp"
    label: "21,935 EXP total across all 5 steps"
    details: "4,387 EXP per quest. Consistent per-step EXP but the grind time escalates dramatically (50 dolls vs 200 dolls). At L36 this is roughly 2-3 full levels of EXP."
  - type: "mesos"
    label: "5,265 mesos total (1,053 per step)"
  - type: "item"
    label: "50 dolls: RANDOM 7 of each BASE ORE (6 types)"
    itemId: 4010000
    itemSlug: "bronze-ore"
    details: "Step 1 rewards RANDOM 7 of each: Bronze Ore, Iron Ore, Mithril Ore, Adamantium Ore, Silver Ore, Orihalcon Ore. 42 total ores in the reward pool - full Blacksmithing/Weaponcrafting tier spread."
  - type: "item"
    label: "70 dolls: RANDOM 10 of each GEM ORE (7 types)"
    itemId: 4020000
    details: "Step 2 rewards RANDOM 10 of each: Garnet Ore, Amethyst Ore, Aquamarine Ore, Emerald Ore, Opal Ore, Sapphire Ore, Topaz Ore. 70 total gem ores - Arcforging (scroll crafting) material windfall."
  - type: "item"
    label: "100 dolls: RANDOM Gold Ore x5 + Diamond Ore x5"
    itemId: 4010006
    details: "Step 3: Gold Ore x5 (4010006) + Diamond Ore x5 (4020007) random pool. High-tier precious ores; Diamond Ore is the input for the Diamond gem crafting recipe."
  - type: "item"
    label: "150 dolls: RANDOM Gloves Attack Scroll (Intermediate) OR Gloves Magic Attack Scroll (Intermediate)"
    itemId: 2040801
    details: "Step 4 rewards a random Gloves Scroll - Attack (2040801, +1 PAD) for physical classes or Magic Attack (2040805, +1 MAD) for Magicians. Both are Intermediate tier (60% success)."
  - type: "item"
    label: "200 dolls: RANDOM 1-of-5 hat pool (Old Wisconsin / Steel Nordic Helm / Dark Guiltian / Dark Distinction / Dark Pilfer)"
    itemId: 1002053
    itemSlug: "old-wisconsin"
    details: "Final tier: RANDOM 1-of-5 hat drop. Old Wisconsin (1002053), Steel Nordic Helm (1002139), Dark Guiltian (1002144), Dark Distinction (1002151), Dark Pilfer (1002156). Hat variety spans multiple stat profiles - Warrior/Magician/Bowman/Thief-favored hats all in the pool."

editorial: |
  <p>The Cursed Doll chain is <strong>Classic MapleStory's
  iconic L36 grind quest</strong>. Rowen the Fairy asks for
  Cursed Dolls, which drop from Zombie Lupins deep in
  Ellinia's forest area. The escalating requirement (50 -&gt;
  70 -&gt; 100 -&gt; 150 -&gt; 200) matches escalating rewards.</p>

  <h3>The escalating tier rewards</h3>
  <table>
    <thead>
      <tr><th>Step</th><th>Dolls</th><th>Reward Category</th><th>What You Get</th></tr>
    </thead>
    <tbody>
      <tr><td>10201</td><td>50</td><td>Base Ores</td><td>7 of each: Bronze, Iron, Mithril, Adamantium, Silver, Orihalcon</td></tr>
      <tr><td>10202</td><td>70</td><td>Gem Ores</td><td>10 of each: Garnet, Amethyst, Aquamarine, Emerald, Opal, Sapphire, Topaz</td></tr>
      <tr><td>10203</td><td>100</td><td>Precious Ores</td><td>Gold Ore x5 + Diamond Ore x5</td></tr>
      <tr><td>10204</td><td>150</td><td>Gloves Scroll</td><td>Random Gloves Attack OR Magic Attack Scroll (Intermediate)</td></tr>
      <tr><td>10205</td><td>200</td><td>Random Hat</td><td>1-of-5 hat pool (multi-class stat profiles)</td></tr>
    </tbody>
  </table>

  <h3>The crafting economy implications</h3>
  <p>This chain <strong>single-handedly funds Blacksmithing
  and Arcforging beginners</strong>. Steps 1-3 award 112
  total ores across every tier - enough to feed all L15+
  crafting recipes. Step 4's Gloves Attack Scroll is a
  direct
  <a href="/items/arcforging-kit">Arcforging</a> product,
  which means Rowen is likely quest-referencing scroll
  crafting mechanics.</p>

  <p><strong>Sell strategy if not crafting:</strong> ores
  have Free Market value at 40-100 mesos each. 112 ores
  from steps 1-3 = ~7,000-11,000 mesos in FM resale.
  Combined with the Gloves Scroll (5,000-15,000 mesos FM)
  and the random hat (varies by roll), the entire chain
  is worth 20,000-40,000 mesos.</p>

  <h3>The grind time reality</h3>
  <p>200 Cursed Dolls at ~15-30% drop rate from Zombie
  Lupins = 700-1,300 kills. At 5-8 kills per minute solo,
  that's 90-260 minutes JUST for step 5. Total chain grind
  time: 3-5 hours. This is a real commitment quest.</p>

  <p><strong>Alternative:</strong> Cursed Dolls are FM-
  tradeable. If you have mesos and want to skip the grind,
  buy Cursed Dolls in bulk from farmers. Expect 30-80
  mesos per doll = 6,000-16,000 mesos for step 5 alone.
  The final rewards make it worthwhile.</p>

  <h3>The hat pool analysis</h3>
  <p>Step 5's random hat pool covers 5 different hats
  targeting different class stat profiles:</p>
  <ul>
    <li><strong>Old Wisconsin (1002053):</strong> L17 hat -
      lower tier, casual reward. See
      <a href="/items/old-wisconsin">Old Wisconsin page</a>.</li>
    <li><strong>Steel Nordic Helm (1002139):</strong> Warrior-
      themed, +DEF-focused.</li>
    <li><strong>Dark Guiltian (1002144):</strong> Thief-themed,
      +LUK/DEX profile.</li>
    <li><strong>Dark Distinction (1002151):</strong> Magician-
      themed, +INT profile.</li>
    <li><strong>Dark Pilfer (1002156):</strong> variant of
      Dark line, likely all-class or hybrid.</li>
  </ul>

callout: |
  <strong>Best return on investment in the L30-40 range.</strong>
  Between the 112 ores, gem ores, precious ores, Gloves
  Attack Scroll, and random hat - this chain delivers more
  economic value than any single quest chain in Victoria
  Island L30-40. Don't skip.

relatedGuides:
  - "/items/bronze-ore"
  - "/items/iron-ore"
  - "/items/diamond"
  - "/items/arcforging-kit"
  - "/quests/sleepywood-sauna-robe-chain"
  - "/quests/crafting-masters-graduation"

verificationStatus: "closed-test-info"
verificationNote: "All 5 quest IDs (10201-10205), NPC (Rowen the Fairy 1032101 Ellinia), level (36), per-quest EXP (4,387) + mesos (1,053) + item rewards (6 base ores 4010000-4010005 x7 each, 7 gem ores 4020000-4020006 x10 each, Gold Ore 4010006 + Diamond Ore 4020007 x5, Gloves Attack Scroll Intermediate 2040801 OR Gloves Magic Attack Scroll Intermediate 2040805, random hat pool 1002053/1002139/1002144/1002151/1002156) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "ellinia"
lastUpdated: "2026-08-25"
---
