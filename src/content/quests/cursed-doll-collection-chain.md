---
questId: "10205"
name: "Rowen the Fairy's Cursed Doll Chain (5 quests)"
category: "story"
tagline: "Rowen the Fairy asks for 50, 70, 100, 150, then 200 Cursed Dolls from Zombie Lupins. Each step pays 7,020 EXP plus one random reward - a stack of ore, a gloves scroll, and finally a Lv. 40 hat for your job."

levelMin: 36
classReq: "Any"

npcName: "Rowen the Fairy"
npcLocation: "Ellinia forest"
npcId: 305  # internal datamine NPC id (npcs.json); QuestLayout resolves the WZ sprite from it

# ONE canonical article for 5 discrete quest IDs (10201-10205): each
# step is the same loop (kill Zombie Lupins, hand in dolls) with a
# different reward table. Merged 2026-10-21 from two duplicate write-ups
# (this file and cursed-doll-chain, which now redirects here).
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
    label: "7,020 EXP per step (35,100 total)"
    details: "Same EXP for every step, while the doll count climbs from 50 to 200. Current client datamine; the Closed Online Test 2 build paid 4,387 per step."
  - type: "mesos"
    label: "1,140 mesos per step (5,700 total)"
  - type: "item"
    label: "50 dolls: 7x one random base ore"
    itemId: 4010000
    itemSlug: "bronze-ore"
    details: "One of Bronze, Iron, Mithril, Adamantium, Silver, or Orihalcon Ore, quantity 7. You get one type, not all six."
  - type: "item"
    label: "70 dolls: 10x one random gem ore"
    itemId: 4020000
    details: "One of Garnet, Amethyst, Aquamarine, Emerald, Opal, Sapphire, or Topaz Ore, quantity 10."
  - type: "item"
    label: "100 dolls: 5x Gold Ore or 5x Diamond Ore"
    itemId: 4010006
    details: "One of the two, at random."
  - type: "item"
    label: "150 dolls: Gloves Attack Scroll or Gloves Magic Attack Scroll (Intermediate)"
    itemId: 2040801
    itemSlug: "gloves-attack-scroll-intermediate"
    details: "One of the two at random. Attack: +2 Weapon Attack. Magic Attack: +4 Magic Attack. Both 60% success."
  - type: "item"
    label: "200 dolls: the Lv. 40 hat for your job"
    itemId: 1002139
    itemSlug: "steel-nordic-helm"
    details: "Each hat in the reward table is job-restricted, so you receive the one for your job: Steel Nordic Helm (Warrior), Dark Guiltian (Magician), Dark Distinction (Bowman), Dark Pilfer (Thief), or Old Wisconsin (Beginner, Lv. 17)."

editorial: |
  <p>The Cursed Doll chain is a solo grind framed as five
  collection quests from Rowen the Fairy in Ellinia. The mob is
  the same every step: <strong>Zombie Lupin</strong> (Lv. 40),
  found in the
  <a href="/maps/10002022">Monkey Forest</a>,
  <a href="/maps/10003097">Monkey Swamp</a>, and
  <a href="/maps/10002025">Forest of Evil</a> maps on Victoria
  Island. Every step is a separate quest, so you can stop after
  any of them and come back later.</p>

  <h3>The five steps</h3>
  <table>
    <thead>
      <tr><th>Step</th><th>Dolls</th><th>Reward (one, at random)</th></tr>
    </thead>
    <tbody>
      <tr><td>10201</td><td>50</td><td>7x Bronze / Iron / Mithril / Adamantium / Silver / Orihalcon Ore</td></tr>
      <tr><td>10202</td><td>70</td><td>10x Garnet / Amethyst / Aquamarine / Emerald / Opal / Sapphire / Topaz Ore</td></tr>
      <tr><td>10203</td><td>100</td><td>5x Gold Ore or 5x Diamond Ore</td></tr>
      <tr><td>10204</td><td>150</td><td>Gloves Attack Scroll or Gloves Magic Attack Scroll (Intermediate)</td></tr>
      <tr><td>10205</td><td>200</td><td>The Lv. 40 hat for your job (see below)</td></tr>
    </tbody>
  </table>
  <p>Every step also pays <strong>7,020 EXP and 1,140 mesos</strong>.
  The whole chain is <strong>570 Cursed Dolls</strong> for
  35,100 EXP, 5,700 mesos, 22 ores, a gloves scroll, and a hat.</p>

  <h3>The hat at the end</h3>
  <p>Each hat in step 5's reward table is restricted to one job,
  so the hat you get matches your job:</p>
  <ul>
    <li><strong><a href="/items/1002139">Steel Nordic Helm</a></strong> (Warrior, Lv. 40): +4 DEX, +4 Accuracy, 46 DEF.</li>
    <li><strong><a href="/items/1002144">Dark Guiltian</a></strong> (Magician, Lv. 40): +20 HP, +20 MP, 20 DEF, 22 Magic DEF.</li>
    <li><strong><a href="/items/1002151">Dark Distinction</a></strong> (Bowman, Lv. 40): +2 STR, +2 DEX, 33 DEF.</li>
    <li><strong><a href="/items/1002156">Dark Pilfer</a></strong> (Thief, Lv. 40): +4 LUK, 33 DEF.</li>
    <li><strong><a href="/items/1002053">Old Wisconsin</a></strong> (Beginner, Lv. 17, needs 10 Fame): +17 HP, 19 DEF.</li>
  </ul>
  <p>All five have 7 upgrade slots.</p>

  <h3>Why grind this instead of leveling normally?</h3>
  <p>Hunting the same Lv. 40 mobs without the quest is probably
  similar EXP per hour - the chain's value is what it adds on
  top: crafting ore, a gloves scroll, and a job-specific hat
  without buying anything. If you craft, steps 1-3 are a free
  ore restock. If you don't, the gloves scroll and the hat are
  the reasons to finish.</p>

  <h3>How long it takes</h3>
  <p>Nexon doesn't publish drop rates, and we haven't measured
  Cursed Doll's in Classic World, so we won't quote a kill
  count. 570 dolls is a long session either way - spread it
  across several play sessions; nothing resets if you pause.
  Cursed Dolls sell to NPCs for 40 mesos each if you overshoot.</p>

callout: |
  <strong>Each step is its own quest.</strong> Finish step 1
  for the ore, come back weeks later for the hat - nothing
  expires between steps.

relatedGuides:
  - "/items/bronze-ore"
  - "/items/iron-ore"
  - "/items/diamond"
  - "/items/arcforging-kit"
  - "/items/old-wisconsin"
  - "/quests/sleepywood-sauna-robe-chain"
  - "/quests/crafting-masters-graduation"

verificationStatus: "closed-test-info"
verificationNote: "Quest IDs (10201-10205), NPC (Rowen the Fairy), level (36), per-step EXP (7,020) and mesos (1,140), and every reward table come from the current client datamine (quests.json). Hat stats and job restrictions come from items.json. Zombie Lupin's level and maps come from mobs.json. Drop rates are not in the datamine and are deliberately not estimated. Merged on 2026-10-21 from two duplicate write-ups, which had used Closed Online Test 2 values (4,387 EXP / 1,053 mesos) and disagreed with each other and with the datamine on several rewards."
sourceSlugs:
  - "osmsdataexplorer"

theme: "ellinia"
lastUpdated: "2026-10-21"
---
