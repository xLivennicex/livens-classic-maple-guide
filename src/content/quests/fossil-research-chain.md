---
questId: "10410"
name: "Fossil Research Chain (6 quests)"
category: "story"
tagline: "A 6-quest archaeology arc crossing Winston (Perion Rocky Mountains), Dr. Betty (Ellinia biologist), and Anne (Henesys). Ends with the guaranteed L17 Leaf Earrings reward."

levelMin: 17
classReq: "Any"

npcName: "Winston / Dr. Betty / Anne"
npcLocation: "Perion Rocky Mountains -> Ellinia -> Henesys -> back"
npcId: 1022006

# Documented as ONE canonical article covering 6 discrete quest
# IDs (10405-10410). The chain spans three NPCs and three towns
# but is a single continuous archaeology narrative. Splitting
# into 6 files would fragment the story.
chainName: "Fossil Research"
chainStep: 6
chainLength: 6

description: |
  I hear that Winston the archaeologist is searching for
  something in the Rocky Mountains on the east side of
  Perion...

  Winston lost his fossils. You help him recover and transport
  them. Then Dr. Betty in Ellinia needs assistance with plant
  and animal fossil research. Her daughter Anne in Henesys
  has a Stuffed Drake Skull she needs. By the end you're
  couriering the completed research report back across
  Victoria Island.

rewards:
  - type: "exp"
    label: "~5,960 EXP across all 6 steps"
    details: "Individual step EXP: 1,104 + 772 + 1,104 + 1,104 + 772 + 1,104 = 5,960. Substantial multi-level EXP haul for a full L17 clear."
  - type: "mesos"
    label: "~2,982 mesos across all 6 steps"
  - type: "item"
    label: "10x Blue Potion (Winston step 1)"
    itemId: 2000003
    itemSlug: "blue-potion"
  - type: "item"
    label: "15x Egg (Winston step 2)"
    itemId: 2010002
    itemSlug: "egg"
  - type: "item"
    label: "10x Blue Potion (Betty step 3)"
    itemId: 2000003
    itemSlug: "blue-potion"
  - type: "item"
    label: "15x Orange (Betty step 4)"
    itemId: 2010004
    itemSlug: "orange"
  - type: "item"
    label: "1x Leaf Earrings (final reward, step 6)"
    itemId: 1032015
    itemSlug: "leaf-earrings"
    details: "GUARANTEED L17 earring accessory. Slot upgrade over vendor earrings, meaningful for any class that hasn't scrolled up earrings yet."

editorial: |
  <p>The Fossil Research chain is Victoria Island's longest
  narrative arc in the L17 tier - <strong>6 quests, 3 NPCs,
  3 towns, ~30-45 minutes of quest time</strong>. It's also
  one of the highest-value chains in the tier: guaranteed
  Leaf Earrings + substantial consumables + ~5,960 EXP.</p>

  <h3>The chain in order</h3>
  <ol>
    <li><strong>10405 - Searching for Fossils (Winston, Perion Rocky Mountains).</strong>
      Recover Winston's lost fossils. Reward: 10 Blue Potions.</li>
    <li><strong>10406 - Delivering a Box of Fossils (Winston -> Ellinia).</strong>
      Winston realizes fossils shouldn't sit in a tent. Deliver
      them to Ellinia for safekeeping. Reward: 15 Eggs.</li>
    <li><strong>10407 - Research on Plant Fossils (Dr. Betty, Ellinia).</strong>
      Betty needs 20 Plant Samples from Ellinia's tree platform
      mobs. Reward: 10 Blue Potions.</li>
    <li><strong>10408 - Research on Animal Fossils (Dr. Betty).</strong>
      Betty needs 1 Stuffed Drake Skull. Sends you to her
      daughter Anne, near Henesys. Reward: 15 Oranges.</li>
    <li><strong>10409 - Transporting Drake's Skull (Anne, Henesys).</strong>
      Anne hands over the skull; deliver it VERY carefully to
      Dr. Betty in Ellinia. Reward: EXP + mesos only.</li>
    <li><strong>10410 - Progress on Fossil Research (Dr. Betty).</strong>
      Betty completes her research. Deliver the final report
      to Dr. Winston in Perion. Reward: 1x Leaf Earrings +
      1,104 EXP.</li>
  </ol>

  <h3>Where the NPCs are</h3>
  <ul>
    <li><strong>Winston:</strong> Rocky Mountains east of
      Perion. Take the Perion east exit, one map east.</li>
    <li><strong>Dr. Betty:</strong> Ellinia (near town),
      biologist's tent.</li>
    <li><strong>Anne:</strong> near Henesys (likely Henesys
      Park or one of the Ellinia-Henesys road maps).</li>
  </ul>

  <h3>Efficiency tips</h3>
  <ul>
    <li><strong>Use Return Scrolls generously.</strong> The
      chain requires 4+ inter-town trips. If you've stockpiled
      Return Scrolls from the Bruce / Nella / Wing chains
      earlier, this is when to spend them.</li>
    <li><strong>Plant Samples drop from Green Mushrooms and
      Bubblings.</strong> Same maps as
      <a href="/quests/how-to-enjoy-mushrooms">Shane's Mushroom
      Chain</a> - you can dual-purpose the grind.</li>
    <li><strong>Do this before starting the Alex Chain (L17-18).</strong>
      The Leaf Earrings from step 6 give you a solid earring
      slot; combine with <a href="/items/old-wisconsin">Old
      Wisconsin</a> hat + <a href="/items/earring-str-scroll-intermediate">STR
      Earring Scroll</a> from the Alex Chain for a full L17-18
      accessory refresh.</li>
  </ul>

callout: |
  <strong>The chain crosses 3 towns; budget ~40 minutes.</strong>
  This isn't a quick fetch quest - it's a proper mini-arc.
  If you've got 30-45 minutes free, run it end to end. If
  you split sessions, use the chain nav on subsequent quests
  to remember where you left off.

relatedGuides:
  - "/quests/how-to-enjoy-mushrooms"
  - "/quests/alexs-request"
  - "/items/old-wisconsin"
  - "/items/leaf-earrings"
  - "/items/egg"
  - "/items/orange"

verificationStatus: "closed-test-info"
verificationNote: "All 6 quest IDs (10405-10410), NPCs (Winston 1022006, Dr. Betty 1032104, Anne 1012110), level (17), per-step EXP + mesos + item rewards (Blue Potion 2000003, Egg 2010002, Orange 2010004, Leaf Earrings 1032015) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "perion"
lastUpdated: "2026-08-24"
---
