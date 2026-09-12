---
questId: "10308"
name: "Nella's Veteran Requests (3 quests)"
category: "story"
tagline: "Nella's L22 sequel to her L10 hub. Higher difficulty, better rewards - Dr. Faymus (30 White Potions), Chris (Bronze + Iron Ingots), Cutthroat Manny (RANDOM boot from 5-slot pool)."

levelMin: 22
classReq: "Any"

npcName: "Nella"
npcLocation: "Kerning City"
npcId: 1052103

# Documented as ONE canonical article covering 3 discrete quest
# IDs (10306-10308). Mirrors the L10 Nella hub canonical
# structure. Nella's own dialogue frames this as her second
# tier of brokered work now that you've proven yourself.
chainName: "Nella's Kerning Requests (Veteran)"
chainStep: 3
chainLength: 3

description: |
  Nella thinks I've grown a lot since my last visit; she's
  going to start giving me tasks of a slightly higher
  difficulty from here on out.

  Three L22 requests brokered through Nella: Dr. Faymus at
  Kerning Pharmacy needs medicine ingredients, Chris needs
  pillow-stuffing after a theft, and Cutthroat Manny (weapon
  shop owner) wants Evil Eye Tail Stew ingredients.

rewards:
  - type: "exp"
    label: "2,306 EXP per quest x 3 = 6,918 EXP total"
  - type: "mesos"
    label: "643 mesos per quest x 3 = 1,929 mesos total"
  - type: "item"
    label: "30x White Potion (Dr. Faymus)"
    itemId: 2000002
    itemSlug: "white-potion"
    details: "30 guaranteed White Potions - meaningful HP consumable kit. At 300 HP each, that's 9,000 HP of restore locked in."
  - type: "item"
    label: "1x Bronze Ingot + 1x Iron Ingot (Chris)"
    itemId: 4010100
    details: "Refined ore ingots - one tier higher than Bronze Ore / Iron Ore. Blacksmithing tier 2-3 crafting inputs. Feeds Silas Irons's mid-tier recipes."
  - type: "item"
    label: "1x RANDOM boot from 5-boot pool (Cutthroat Manny)"
    itemId: 1072044
    details: "RANDOM roll: Red Whitebottom Boots (1072058), Mithril War Boots (1072044), Silver Wind Shoes (1072048), Brown Jack Boots (1072051), Blue Lappy Boots (1072054). All L20-25 shoe upgrades with varying stat profiles."

editorial: |
  <p>Nella's Veteran Requests is the sequel to
  <a href="/quests/don-hwangs-request">Nella's L10 Kerning
  Requests hub</a>. Same broker mechanic - Nella collects
  requests from citizens and passes them to you - but the
  quests are meatier and the rewards are proper gear.</p>

  <h3>The 3 requests</h3>
  <ol>
    <li><strong>Dr. Faymus's Request (10306):</strong> the
      Kerning Pharmacy owner needs medicinal supplies.
      Rewards 30 White Potions - a substantial mid-game HP
      kit.</li>
    <li><strong>Chris's Request (10307):</strong> Chris's
      pillow was stolen and he can't sleep. Deliver 20 Stiff
      Feathers + 20 pieces of Leather. Rewards a Bronze Ingot
      and Iron Ingot - <strong>refined ore</strong>, one tier
      above raw Bronze/Iron Ore.</li>
    <li><strong>Cutthroat Manny's Request (10308):</strong>
      the weapon shop owner wants Evil Eye Tail Stew.
      Requires hunting 50 Evil Eyes (Perion Rocky Mountains
      area). Rewards a RANDOM boot from a 5-slot pool.</li>
  </ol>

  <h3>The Boot Pool</h3>
  <ul>
    <li><strong>Red Whitebottom Boots (1072058)</strong></li>
    <li><strong>Mithril War Boots (1072044)</strong> -
      Warrior-flavored name</li>
    <li><strong>Silver Wind Shoes (1072048)</strong> -
      likely Bowman/Thief-flavored</li>
    <li><strong>Brown Jack Boots (1072051)</strong></li>
    <li><strong>Blue Lappy Boots (1072054)</strong></li>
  </ul>
  <p>All 5 boots share the L20-25 tier. Stat profiles vary
  (some favor DEX/LUK for Thieves, others STR for Warriors,
  etc.). Since the roll is random, expect FM trading if your
  class doesn't match - Boot roll grand-prize for Warriors
  is the Mithril War Boots.</p>

  <h3>Where the mobs are</h3>
  <ul>
    <li><strong>Stiff Feathers + Leather (Chris):</strong>
      Feathers drop from Blue Mushroom or Zombie Mushrooms.
      Leather drops from Ligators (Kerning subway) or Pigs
      / Ribbon Pigs (Henesys).</li>
    <li><strong>50 Evil Eyes (Manny):</strong> Evil Eyes live
      in the Perion Rocky Mountains and Sleepywood approach
      maps. L23 mob - manageable for L22 characters with
      training gear.</li>
  </ul>

callout: |
  <strong>Total chain haul:</strong> 6,918 EXP + 1,929 mesos
  + 30 White Potions + Bronze Ingot + Iron Ingot + 1 random
  boot. If you missed the L10 Nella chain earlier, doing both
  hubs at L22 catches you up fast.

relatedGuides:
  - "/quests/don-hwangs-request"
  - "/quests/shumis-request"
  - "/quests/andres-request"
  - "/items/white-potion"

verificationStatus: "closed-test-info"
verificationNote: "All 3 quest IDs (10306, 10307, 10308), NPC (Nella 1052103), level (22), per-quest EXP (2,306) + mesos (643) + item rewards (White Potion 2000002 x30, Bronze/Iron Ingot 4010100/4010101, random boot pool 1072044/1072048/1072051/1072054/1072058) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "kerning"
lastUpdated: "2026-08-25"
---
