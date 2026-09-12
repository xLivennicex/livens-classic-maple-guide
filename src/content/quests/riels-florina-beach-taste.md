---
questId: "10703"
name: "Riel's Special Taste of Florina Beach (4 quests)"
category: "story"
tagline: "FLORINA BEACH DEBUT. Riel is developing a special beach dish. Collect Coconuts and Loran Claws across 4 escalating quests. Meso reward jumps from 1K to 6.5K then back down - unusual reward curve."

levelMin: 37
classReq: "Any"

npcName: "Riel"
npcLocation: "Florina Beach"
npcId: 1081100

# Documented as ONE canonical article covering 4 discrete quest
# IDs (10700-10703). Same NPC, same cooking arc, same location.
# Escalating ingredient counts (10 -> 15 people -> 30 people ->
# specialty ingredients). Ships as compact 4-quest canonical.
chainName: "Special Taste of Florina Beach"
chainStep: 4
chainLength: 4

description: |
  A beautiful girl by the name of Riel from Florina Beach
  seems to be in need of help...

  Riel introduced me to a part-time job, where I have to
  collect ingredients for her cooking experiments. She's
  developing a special beach dish - starting with 10
  Coconuts, then enough for 15 people, then 30 people, then
  a final specialty batch of Coconuts + Loran Claws.

rewards:
  - type: "exp"
    label: "18,448 EXP total across 4 quests"
    details: "4,612 EXP per quest. Consistent EXP payout across all 4 steps."
  - type: "mesos"
    label: "14,066 mesos total (unusual curve: 1,082 -> 3,246 -> 6,492 -> 3,246)"
    details: "Step 3 is the meso jackpot (6,492 mesos - highest single-quest meso reward in L35-40 range). Step 4 drops back to 3,246. Unusual curve suggests step 3 was the 'commit test' - once you pass, step 4 is more of an epilogue."
  - type: "item"
    label: "105x Blue Potion total across 4 quests"
    itemId: 2000003
    itemSlug: "blue-potion"
    details: "15 + 30 + 30 + 30 = 105 guaranteed Blue Potions. Substantial MP-restore stash for post-advancement casters and dagger Thieves."

editorial: |
  <p>Riel's Special Taste is <strong>your first documented
  Florina Beach quest chain</strong>. Florina Beach is
  Victoria Island's beach resort zone - accessible via boat
  from Lith Harbor. Riel's cooking experiments introduce
  the beach's cooking sub-culture.</p>

  <h3>Where Florina Beach is</h3>
  <p>Lith Harbor -> ferry to Florina Beach (short boat ride
  from the Lith Harbor pier). The beach itself is a themed
  Victoria Island map with palm trees, sand, and unique
  mob families (Lorang, Clang, coconut trees). Riel stands
  near the main beach area.</p>

  <h3>The 4 cooking quests</h3>
  <ol>
    <li><strong>10700 - Special Taste I.</strong> Collect
      10 Coconuts from coconut trees on the beach. Simple
      intro. Rewards 15 Blue Potions.</li>
    <li><strong>10701 - Special Taste II.</strong> Riel
      asks a beach trivia question first (answer it), then
      collect ingredients for 15 people. Rewards 30 Blue
      Potions + 3,246 mesos.</li>
    <li><strong>10702 - Special Taste III.</strong> Scale
      up: ingredients for 30 people. Rewards 30 Blue
      Potions + <strong>6,492 mesos</strong> (jackpot).</li>
    <li><strong>10703 - Special Taste IV.</strong> Final
      batch: 10 Coconuts + 10 Lorang Claws (specialty
      ingredients). Rewards 30 Blue Potions + 3,246 mesos.</li>
  </ol>

  <h3>Where the mobs are</h3>
  <ul>
    <li><strong>Coconuts:</strong> drop from coconut trees
      (interactable objects) on the Florina Beach main map.</li>
    <li><strong>Lorang Claws:</strong> drop from Lorangs
      (L27-32 crab mobs on Florina Beach). Manageable at
      L37.</li>
    <li><strong>Ingredients for 15/30 people:</strong>
      likely various beach mob drops (Clang shells, Lorang
      claws, Sand mob loot). Datamine truncates specifics.</li>
  </ul>

  <h3>Meso curve analysis</h3>
  <p>The unusual reward curve (1K -&gt; 3K -&gt; 6.5K -&gt;
  3K) suggests Classic World designers built this as a
  <strong>"commitment test"</strong> - if you make it to
  step 3, you've proven you'll finish, so step 4 doesn't
  need to be maximally rewarding. Step 3 is the peak-
  motivation moment.</p>

  <p><strong>Total value:</strong> ~14K mesos + 105 Blue
  Potions (worth ~1,575 mesos NPC vendor value) + 18K EXP.
  Solid mid-tier chain, but not as juicy as
  <a href="/quests/shumi-construction-site-heist">Shumi's
  Construction Site heist</a> (which yields 12K mesos +
  Mana Elixir stack in the same L35-tier).</p>

callout: |
  <strong>Florina Beach opens up an entire sub-region.</strong>
  If this is your first time on Florina Beach, wander
  around after Riel's chain. Lorangs (L27-32) are great
  training mobs, the beach map has hidden portals to
  Aquarium and other sub-zones, and future quest chains
  originate here.

relatedGuides:
  - "/quests/shumi-construction-site-heist"
  - "/quests/mayas-collections"
  - "/items/blue-potion"

verificationStatus: "closed-test-info"
verificationNote: "All 4 quest IDs (10700-10703), NPC (Riel 1081100 Florina Beach), level (37), per-quest EXP (4,612) + mesos (1,082/3,246/6,492/3,246) + item rewards (15/30/30/30 Blue Potion 2000003 guaranteed per step) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "lith"
lastUpdated: "2026-08-25"
---
