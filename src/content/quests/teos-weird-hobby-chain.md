---
questId: "10011"
name: "Teo's Weird Hobby (2 quests)"
category: "tutorial"
tagline: "Teo the Lith Harbor sailor collects weird things. Two L8 quests - first Fried Chicken, then Lemons + a Sniper Potion. Wholesome sailor eccentricity."

levelMin: 8
classReq: "Any"

npcName: "Teo"
npcLocation: "Lith Harbor"
npcId: 1002001

# Documented as ONE canonical article covering 2 discrete quest
# IDs (10010, 10011). Same NPC, same collection pattern, back-
# to-back quest steps. Compact 2-quest canonical.
chainName: "Teo's Weird Hobby"
chainStep: 2
chainLength: 2

description: |
  It seems a sailor named Teo in Lith Harbor is looking for
  an adventurer to lend a hand.

  Teo in Lith Harbor told me his hobby is collecting weird
  things. He asked me to help him complete his collection -
  first weird items, then even WEIRDER items in the follow-
  up quest.

rewards:
  - type: "exp"
    label: "168 EXP total across 2 quests"
    details: "84 EXP per quest. Tutorial-tier EXP, matches other L8 Lith Harbor quests."
  - type: "mesos"
    label: "468 mesos total"
  - type: "item"
    label: "10x Fried Chicken (Weird Hobby step 1)"
    itemId: 2020001
    details: "10 GUARANTEED Fried Chicken (2020001). HP restore consumable - like Red Potion but food-flavored. Solid stash for L8-15 combat."
  - type: "item"
    label: "1x Sniper Potion + 10x Lemon (Even Weirder Hobby step 2)"
    itemId: 2002002
    itemSlug: "sniper-potion"
    details: "1 GUARANTEED Sniper Potion (2002002) + 10 GUARANTEED Lemons (2010005). Sniper Potion is +5 ACC for 10 min - the earliest stat potion source in the game (before the L40 Master Sgt Fox chain)."

editorial: |
  <p>Teo's Weird Hobby is <strong>Classic MapleStory's most
  charming L8 quest chain</strong>. Teo is a sailor with an
  unusual hobby - collecting weird things. You bring him
  weird things. He collects them. Everyone's happy.</p>

  <h3>The 2 quests</h3>
  <ol>
    <li><strong>10010 - Weird Hobby.</strong> Teo asks for
      weird items. Rewards 10 Fried Chicken.</li>
    <li><strong>10011 - Even Weirder Hobby.</strong> Teo
      raises the bar - he wants even weirder items now.
      Rewards 1 Sniper Potion + 10 Lemons.</li>
  </ol>

  <h3>Why the Sniper Potion reward matters at L8</h3>
  <p>Sniper Potion is normally awarded from
  <a href="/quests/master-sergeant-fox-military-chain">Master
  Sergeant Fox's L40 Ossyria chain</a>. Teo's L8 quest is
  the ONLY early-game source. Bank it for when you
  actually understand what +5 ACC does (probably around
  L15+ when you start missing mobs).</p>

  <h3>Character context: Teo the sailor</h3>
  <p>Teo (1002001) is one of Lith Harbor's permanent
  characters. Sailors dominate the Lith NPC roster - the
  town is built around the ferry pier. Teo's eccentricity
  (weird hobby) is a running character trait; other Lith
  sailors are more transactional.</p>

  <h3>Compare to the other L8 Lith trio</h3>
  <ul>
    <li><a href="/quests/phils-call">Phil's Call</a> - 5 Red
      + 5 Blue Potions (welcome package)</li>
    <li><a href="/quests/olaf-second-training">Olaf's Second
      Training</a> - 3 Return Scrolls (teleport stash)</li>
    <li><strong>Teo's Weird Hobby (this)</strong> - 10 Fried
      Chicken + Sniper Potion + 10 Lemons (consumables)</li>
  </ul>
  <p>Together the trio give you a complete L8 starter kit
  - potions, scrolls, food, and one stat buff. Do all
  three.</p>

callout: |
  <strong>Sniper Potion is the sleeper reward.</strong>
  Most players ignore Teo because "weird items" sounds
  like a fetch grind. Actually - it's THE earliest stat
  potion source in Classic MapleStory. Bank the Sniper
  Potion for a boss fight or a hard training session
  later.

relatedGuides:
  - "/quests/phils-call"
  - "/quests/olaf-second-training"
  - "/items/sniper-potion"

verificationStatus: "closed-test-info"
verificationNote: "Both quest IDs (10010, 10011), NPC (Teo 1002001 Lith Harbor), level (8), per-quest EXP (84) + mesos (234) + all item rewards (10x Fried Chicken 2020001 on step 1, 1x Sniper Potion 2002002 + 10x Lemon 2010005 on step 2, all guaranteed) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "lith"
lastUpdated: "2026-08-26"
---
