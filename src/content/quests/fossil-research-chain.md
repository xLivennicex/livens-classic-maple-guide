---
questId: "10410"
name: "Fossil Research Chain (6 quests)"
category: "story"
tagline: "A 6-quest archaeology arc spanning Winston (Perion Rocky Mountains), Dr. Betty (Ellinia biologist), and Anne (Henesys). Pays out ~5,892 EXP, ~3,330 mesos, five consumable stacks, and a guaranteed Lv 17 Leaf Earrings."

levelMin: 17
classReq: "Any"

npcName: "Winston / Dr. Betty / Anne"
npcLocation: "East Rocky Mountain II -> Ellinia -> The Hill East of Henesys -> back to Ellinia -> back to Winston"
npcId: 1022006

# This article documents ONE narrative arc covering 6 discrete
# quest IDs (10405-10410). The chain spans three NPCs and three
# towns but is a single continuous archaeology story. Splitting
# into 6 files would fragment the walkthrough and make it harder
# to follow the item-trail (Fossil Box -> Plant Samples -> Drake
# Skull -> Fossil Report).
chainName: "Fossil Research"
chainStep: 6
chainLength: 6

description: |
  Winston the archaeologist is digging for fossils in the
  Rocky Mountains east of Perion, but he keeps misplacing
  them.

  First you recover his dig and courier the Fossil Box to
  Dr. Betty, an Ellinia biologist. She needs 8 Plant Samples
  from the Ellinia forest to study the plant fossil, and
  a Stuffed Drake Skull from her daughter Anne (over by
  Henesys) to study the animal fossil. When Betty finishes
  her report you carry it back across Victoria Island to
  Winston. End-to-end: ~30-45 minutes of travel and busywork.

rewards:
  - type: "exp"
    label: "~5,892 EXP across all 6 steps"
    details: "Each step pays a flat 982 EXP (982 x 6 = 5,892). Meaningful at Lv 17 — roughly a full level of EXP spread across the chain."
  - type: "mesos"
    label: "~3,330 mesos across all 6 steps"
    details: "Each step pays 555 mesos."
  - type: "item"
    label: "15x Blue Potion (step 1, Searching for Fossils)"
    itemId: 2000003
    itemSlug: "blue-potion"
  - type: "item"
    label: "15x Egg (step 2, Delivering a Box of Fossils)"
    itemId: 2010002
    itemSlug: "egg"
  - type: "item"
    label: "15x Blue Potion (step 3, Research on Plant Fossils)"
    itemId: 2000003
    itemSlug: "blue-potion"
  - type: "item"
    label: "15x Orange (step 4, Research on Animal Fossils)"
    itemId: 2010004
    itemSlug: "orange"
  - type: "item"
    label: "5x Meat (step 5, Transporting Drake's Skull)"
    itemId: 2010003
    itemSlug: "meat"
  - type: "item"
    label: "1x Leaf Earrings (step 6, Progress on Fossil Research)"
    itemId: 1032015
    itemSlug: "leaf-earrings"
    details: "GUARANTEED Lv 17 earring accessory. Fills your earring slot before you have the stats to scroll vendor earrings. Worth running the chain for this alone."

editorial: |
  <p>The Fossil Research chain is Victoria Island's longest
  narrative arc in the Lv 17 tier — <strong>6 quests, 3
  NPCs, 3 towns, ~30-45 minutes of quest time</strong>.
  Payoff: guaranteed Leaf Earrings + 30 Blue Potions +
  15 Eggs + 15 Oranges + 5 Meat + ~5,892 EXP.</p>

  <h3>The chain at a glance</h3>
  <ol>
    <li><strong>10405 — Searching for Fossils (Winston, East Rocky Mountain II).</strong>
      Collect 1 Plant Fossil + 1 Animal Fossil for Winston.
      Plant Fossil drops from <a href="/mobs/15">Axe Stump</a>,
      Animal Fossil drops from <a href="/mobs/13">Green
      Mushroom</a>. Reward: 15 Blue Potions.</li>
    <li><strong>10406 — Delivering a Box of Fossils (Winston → Dr. Betty, Ellinia).</strong>
      Winston realizes a tent is a bad place to store
      irreplaceable fossils. Carry the Fossil Box to Dr.
      Betty in Ellinia. Reward: 15 Eggs.</li>
    <li><strong>10407 — Research on Plant Fossils (Dr. Betty, Ellinia).</strong>
      Betty needs <strong>8 Plant Samples</strong> from
      the plants covering the Ellinia forest.
      <strong>See the "How to collect Plant Samples"
      section below</strong> — this is the step where our
      datamine stops being helpful. Reward: 15 Blue Potions.</li>
    <li><strong>10408 — Research on Animal Fossils (Dr. Betty).</strong>
      Betty needs a Stuffed Drake Skull. She sends you to
      fetch it from her daughter Anne, who is <strong>at
      The Hill East of Henesys</strong> (map 10001060).
      Reward: 15 Oranges.</li>
    <li><strong>10409 — Transporting Drake's Skull (Anne → Dr. Betty).</strong>
      Anne hands you the Stuffed Drake Skull. Deliver it
      <em>very carefully</em> back to Betty in Ellinia.
      Reward: 5 Meat.</li>
    <li><strong>10410 — Progress on Fossil Research (Dr. Betty → Dr. Winston, East Rocky Mountain II).</strong>
      Betty hands you the completed Fossil Report. Bring it
      back to Winston on the mountain. Reward: 1 Leaf Earrings.</li>
  </ol>

  <h3 id="plant-samples">How to collect Plant Samples (step 3)</h3>

  <p>This is the step the quest text is coy about: Betty
  tells you "I can see a lot of plants covering the woods
  in Ellinia" and expects you to figure out the rest.
  Here's what we know:</p>

  <p><strong>Plant Samples are not a regular mob drop.</strong>
  Our Founder's Access datamine has <em>zero mobs</em>
  listed as a source for item 4031072 (Plant Sample). That's
  not a bug in our scraper — the item is deliberately not on
  any mob's drop table.</p>

  <p><strong>They come from plant reactors.</strong> In
  pre-Big-Bang MapleStory (the era Classic World rebuilds),
  Plant Samples drop from <strong>interactive bushes and
  plants</strong> scattered across the Ellinia forest floor.
  You walk up to one, hit it with your weapon just like a
  mob, and it breaks and drops a Plant Sample ETC. These are
  <em>reactors</em>, not monsters — they don't show in the
  minimap and they don't give EXP.</p>

  <p><strong>Where to look:</strong> start on the tree
  platform maps directly north of Ellinia town. Good
  candidates based on the pre-BB layout:</p>
  <ul>
    <li><a href="/maps/10002050">The Field Up North of Ellinia</a> — one map north of town.</li>
    <li><a href="/maps/10002060">The Tree That Grew I</a> and <a href="/maps/10002061">II</a> — the climb up Ellinia's great tree.</li>
    <li><a href="/maps/10002070">The Forest North of Ellinia</a> — a wider forest map with plant decor.</li>
  </ul>

  <p><strong> Honesty caveat:</strong> we have not yet
  confirmed that Founder's Access ships the plant reactors
  on these specific maps. The quest, items, and NPC data all
  match the pre-BB layout exactly, and FA is explicitly
  rebuilding that era, so the reactors almost certainly
  exist. But if you walk The Field Up North of Ellinia and
  see zero clickable plants, let us know — we'll update this
  section the moment a Founder tells us where they actually
  spawn. Verification state for this specific claim is
  tracked in the quest's <code>verificationNote</code> block
  at the bottom of this page.</p>

  <h3>Step 1 details: where to kill for the fossils</h3>

  <p>Step 1 asks for one <strong>Plant Fossil</strong>
  (from <a href="/mobs/15">Axe Stump</a>, Lv 17) and one
  <strong>Animal Fossil</strong> (from <a href="/mobs/13">Green
  Mushroom</a>, Lv 15). Both are modest drop rates — plan
  on ~10-20 minutes of grinding unless you get lucky early.</p>

  <ul>
    <li><strong>Axe Stump — closest spawns to Winston:</strong>
      Winston stands on <a href="/maps/10004051">East Rocky
      Mountain II</a> itself, which has <strong>12 Axe
      Stumps per spawn cycle</strong>. You literally do
      not need to leave his map to farm the Plant Fossil.
      If the room is crowded, <a href="/maps/10004052">East
      Rocky Mountain III</a> and <a href="/maps/10004042">Over
      the Wall</a> have another 12 and 11 respectively.</li>
    <li><strong>Green Mushroom — the detour:</strong>
      Rocky Mountain has mostly Snails and Stumps, so for
      the Animal Fossil you'll want to walk west.
      <a href="/maps/10004022">West Rocky Mountain III</a>
      has 32 Green Mushrooms and is a straight shot from
      Perion. If you prefer the Ellinia side,
      <a href="/maps/10002074">Tree Dungeon, Forest Up North
      III</a> (16 spawns) and <a href="/maps/10002075">IV</a>
      (31 spawns) are directly on the Ellinia-to-forest
      route you'll already be running for step 3's plant
      reactors.</li>
  </ul>

  <h3>Where each NPC stands</h3>
  <ul>
    <li><strong>Winston (NPC 512):</strong>
      <a href="/maps/10004051">East Rocky Mountain II</a>.
      From Perion, take the east exit and walk two maps
      east. He's by his dig tent.</li>
    <li><strong>Dr. Betty (NPC 308):</strong>
      <a href="/maps/10002000">Ellinia</a> proper, near her
      biologist tent in town. You can't miss her — she's
      one of the few townsfolk standing outside a shop.</li>
    <li><strong>Anne (NPC 224):</strong>
      <a href="/maps/10001060">The Hill East of Henesys</a>,
      map 10001060. From Henesys town, take the east exit
      — Anne is on the hill one map out. (The quest text
      says "near Henesys" and leaves the exact map vague;
      our datamine resolves it to this specific hill.)</li>
  </ul>

  <h3>Efficiency tips</h3>
  <ul>
    <li><strong>Carry Return Scrolls.</strong> The chain
      forces four cross-town hops (Perion → Ellinia →
      Henesys → Ellinia → Perion). If you have Return
      Scrolls from the <a href="/quests/bruces-cake-for-daughter">Bruce</a>
      / <a href="/quests/nellas-veteran-requests">Nella</a>
      chains, this is the chain to spend them on.</li>
    <li><strong>Dual-purpose with Shane's chain.</strong>
      You're already killing Green Mushrooms for step 1
      and running Ellinia forest maps for step 3 — those
      are the same maps and the same mobs
      <a href="/quests/how-to-enjoy-mushrooms">Shane's
      Mushroom Chain</a> uses. Pick up both quests before
      you start grinding.</li>
    <li><strong>Finish before Alex's Chain.</strong> The
      Leaf Earrings in step 6 give you an earring slot you
      didn't have. Pair with <a href="/items/old-wisconsin">Old
      Wisconsin</a> and the earring STR/INT/LUK/DEX scrolls
      from <a href="/quests/alexs-request">Alex's Request</a>
      for a free Lv 17-18 accessory refresh.</li>
    <li><strong>Keep spare inventory ETC slots.</strong>
      You will be carrying Fossil Box, Plant Fossil, Animal
      Fossil, 8 Plant Samples, Stuffed Drake Skull, and
      Fossil Report in rapid succession — that's six
      distinct ETC slots in a 24-slot ETC tab. Clean out
      vendor trash before you start.</li>
  </ul>

callout: |
  <strong>The Plant Samples step is the one most players
  trip over.</strong> They're not a mob drop — they come
  from clickable plant reactors on Ellinia forest maps. See
  <a href="#plant-samples">"How to collect Plant Samples"</a>
  below for the specific maps to search.

relatedGuides:
  - "/quests/how-to-enjoy-mushrooms"
  - "/quests/alexs-request"
  - "/items/old-wisconsin"
  - "/items/leaf-earrings"
  - "/items/blue-potion"
  - "/items/egg"
  - "/items/orange"
  - "/items/2010003"

verificationStatus: "closed-test-info"
verificationNote: |
  All 6 quest IDs (10405-10410), NPCs (Winston 1022006,
  Dr. Betty 1032104, Anne 1012110), level (17), and per-step
  rewards (982 EXP, 555 mesos, 15 Blue Potion / 15 Egg /
  15 Blue Potion / 15 Orange / 5 Meat / 1 Leaf Earrings)
  are pulled verbatim from the Founder's Access datamine
  at osmsdataexplorer.com. The Axe Stump / Green Mushroom
  spawn counts in the "Step 1 details" section are
  verified against src/data/db/maps.json spawn rosters.
  The Plant Samples sourcing (reactors on Ellinia forest
  maps) is INFERRED from pre-Big-Bang classic MapleStory
  mechanics — our datamine does not list any mob drops for
  item 4031072 (Plant Sample), and the quest text ("plants
  covering the woods in Ellinia") strongly implies reactor
  interactions. Awaiting Founder's Access playtime
  confirmation for the exact map pattern.
sourceSlugs:
  - "osmsdataexplorer"

theme: "perion"
lastUpdated: "2026-10-08"
---
