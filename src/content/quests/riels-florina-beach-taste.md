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
      <strong>10 Coconuts</strong> from the coconut trees
      standing on <a href="/maps/10007000">Florina Beach</a>
      proper. Riel says "those delicious looking Coconuts
      over there on the right" - she is literally pointing
      at the trees. Rewards 15 Blue Potions.</li>
    <li><strong>10701 - Special Taste II.</strong> Riel asks
      a beach trivia question first (answer it), then collect
      <strong>15 Coconuts</strong>. Rewards 30 Blue Potions
      + 3,246 mesos.</li>
    <li><strong>10702 - Special Taste III.</strong> Scale
      up to <strong>30 Coconuts</strong>. Rewards 30 Blue
      Potions + <strong>6,492 mesos</strong> (jackpot).</li>
    <li><strong>10703 - Special Taste IV.</strong> Final
      specialty batch: <strong>10 Coconuts + 10
      <a href="/mobs/36">Lorang</a> Claws + 10
      <a href="/mobs/44">Clang</a> Claws + 10
      <a href="/mobs/35">Lupin</a>'s Bananas</strong>.
      Rewards 30 Blue Potions + 3,246 mesos.</li>
  </ol>

  <h3 id="coconuts">How to collect Coconuts (the thing the quest
  text is coy about)</h3>

  <p><strong>Coconuts are not a mob drop.</strong> Our Founder's
  Access datamine lists <em>zero</em> mobs as a source for
  item 4000061 (Coconut). The classic Florina Beach does the
  work differently.</p>

  <p><strong>Coconut trees are reactors.</strong> On the
  <a href="/maps/10007000">Florina Beach</a> town map there
  are several tall palm trees standing on and around the
  beach deck. Each tree is an <em>interactable reactor</em> -
  you walk up to one, hit it with your weapon the same way
  you hit a mob, the tree shakes, and a single Coconut drops
  to the ground for you to pick up. Each tree is on an
  independent respawn timer (classic MapleStory used ~2-3
  minute windows per reactor), so you'll be grinding through
  the available trees, moving to the next, and cycling back.</p>

  <p>Because step 3 asks for 30 Coconuts in one go, expect
  to <strong>spend 20-30 minutes on step 3 alone</strong>
  depending on how many trees are up at once and how many
  other players are competing for them. If the beach is busy,
  this is the single longest-running quest in the chain.</p>

  <p><strong>Honesty caveat:</strong> we have not yet
  confirmed the exact Founder's Access coconut-tree count,
  respawn timer, or Coconut-per-tree yield. The item ID
  (4000061), the quest counts (10 / 15 / 30 / 10), and the
  mob families (Lorang / Clang / Lupin) are all pulled from
  the datamine; the reactor mechanics are inferred from the
  pre-Big-Bang classic layout. If you walk Florina Beach and
  see something different, flag it and we'll update.</p>

  <h3>Where the step-4 mobs are</h3>
  <ul>
    <li><strong>Lorang (Lv 27-32):</strong>
      <a href="/maps/10007020">Lorang Lorang</a>,
      <a href="/maps/10007021">Lorang Lorang Lorang</a>,
      <a href="/maps/10007030">Lorang and Clang</a>. Drops
      Lorang Claw.</li>
    <li><strong>Clang (Lv 32-36):</strong>
      <a href="/maps/10007030">Lorang and Clang</a>,
      <a href="/maps/10007031">Clang and Lorang</a>,
      <a href="/maps/10007040">Hot Sand</a>. Drops Clang
      Claw. Hits harder than Lorang - keep potions up.</li>
    <li><strong>Lupin (Lv 32):</strong>
      <a href="/maps/10007010">A Look-Out Shed Around the
      Beach</a> and <a href="/maps/10007020">Lorang Lorang</a>.
      Drops Lupin's Banana. Lupins are monkey mobs that chuck
      bananas as projectiles - approach aware of ranged
      damage.</li>
  </ul>

  <p><strong>Efficient step-4 route:</strong> start at
  <a href="/maps/10007020">Lorang Lorang</a> for Lupins +
  Lorangs simultaneously, hop one map east to
  <a href="/maps/10007030">Lorang and Clang</a> to pick up
  the Clang quota, then detour back to the Florina Beach
  town map for the 10 Coconuts. All three quotas finish in
  one 15-20 minute sweep.</p>

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
  <strong>Coconuts are reactors, not mob drops.</strong> If
  you're wondering where to find them, see
  <a href="#coconuts">"How to collect Coconuts"</a> below -
  the trees on the main <a href="/maps/10007000">Florina
  Beach</a> map are clickable, each shake drops one coconut,
  each tree respawns independently.

relatedGuides:
  - "/quests/shumi-construction-site-heist"
  - "/quests/mayas-collections"
  - "/items/blue-potion"

verificationStatus: "closed-test-info"
verificationNote: |
  All 4 quest IDs (10700-10703), NPC (Riel 1081100 Florina
  Beach), level (37), per-quest EXP (4,612), mesos (1,082 /
  3,246 / 6,492 / 3,246), item rewards (15 / 30 / 30 / 30
  Blue Potion 2000003 guaranteed per step), and step-4 mob
  families (Lorang 36 / Clang 44 / Lupin 35) all pulled
  verbatim from the Founder's Access datamine at
  osmsdataexplorer.com. The coconut-tree reactor mechanics on
  <a href="/maps/10007000">Florina Beach</a> (number of trees,
  respawn cadence, Coconut-per-tree yield) are INFERRED from
  pre-Big-Bang classic MapleStory - our datamine lists zero
  mob drops for item 4000061 (Coconut), confirming the item
  is sourced non-conventionally. Awaiting Founder's Access
  playtime confirmation for the exact reactor layout.
sourceSlugs:
  - "osmsdataexplorer"

theme: "lith"
lastUpdated: "2026-10-08"
---
