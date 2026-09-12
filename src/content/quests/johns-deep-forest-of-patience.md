---
questId: "10008"
name: "John's Deep Forest of Patience (3 quests)"
category: "story"
tagline: "John the Lith Harbor fisherman has an emotional 3-quest arc: wife's anniversary flower basket, follow-up present, then his mother's grave. Rewards a random glove from 5-slot pool + guaranteed Pansy Earrings."

levelMin: 45
classReq: "Any"

npcName: "John"
npcLocation: "Lith Harbor"

# Documented as ONE canonical article covering 3 discrete quest
# IDs (10006-10008). Same NPC, same emotional arc, escalating
# stakes (anniversary -> present -> mother's death). Compact
# 3-quest canonical. Deep Forest of Patience is a sub-zone
# accessed via Sleepywood/Sabitrama's region.

chainName: "John's Deep Forest of Patience"
chainStep: 3
chainLength: 3

description: |
  Let's go meet John in Lith Harbor.

  I met a fisherman named John in Lith Harbor. He wants to
  get his wife a nice flower basket for their upcoming
  anniversary. Later, he asks for Blue Violas as a follow-
  up present. And finally, he tells me his mother has
  passed away recently, and asks for one last favor.

rewards:
  - type: "exp"
    label: "19,743 EXP total across 3 quests"
    details: "6,581 EXP per quest. Substantial at L45."
  - type: "mesos"
    label: "3,948 mesos total"
  - type: "item"
    label: "30x Screw (Pink Flower Basket step 1)"
    itemId: 4003000
    details: "30 GUARANTEED Screws. Screws are Leatherworking crafting inputs (JM From tha Streetz uses these). FM value 20-60 mesos each = ~600-1,800 mesos in FM resale value."
  - type: "item"
    label: "RANDOM 1-of-5 Gloves (Present step 2)"
    itemId: 1082000
    itemSlug: "work-gloves"
    details: "RANDOM pool: Work Gloves (1082000), Dark Knuckle (1082054), Dark Arten (1082057), Dark Brace (1082060), Dark Cleave (1082063). Work Gloves is the same L11 item from earlier Kerning arc; the 4 Dark variants are higher-tier glove upgrades."
  - type: "item"
    label: "1x Pansy Earrings (Last Present step 3)"
    itemId: 1032012
    details: "GUARANTEED - Pansy Earrings (1032012). Named earrings themed around the pansy flower (John's mother's favorite, implied by the memorial context). Emotional reward matching the quest's narrative weight."

editorial: |
  <p>John's Deep Forest of Patience is
  <strong>Classic MapleStory's most emotionally-loaded
  fetch chain</strong>. Three quests, each with escalating
  emotional stakes:</p>

  <h3>The 3-quest emotional arc</h3>
  <ol>
    <li><strong>10006 - Pink Flower Basket.</strong> John's
      wedding anniversary is coming. He wants a Pink Flower
      Basket for his wife. Wholesome domestic setup.
      Rewards 30 Screws.</li>
    <li><strong>10007 - Present (Blue Violas).</strong> A
      follow-up gift - Blue Violas this time. John is
      thoughtful, not just doing one-off gestures. Rewards
      random glove from 5-slot pool.</li>
    <li><strong>10008 - Last Present.</strong>
      <strong>John's mother passed away recently.</strong>
      He needs one last favor - implicitly a memorial
      offering for the grave. Rewards Pansy Earrings
      (Pansy = mother's favorite flower, implied).</li>
  </ol>

  <p>The chain progresses from JOY (anniversary) to GRIEF
  (mother's death) across three steps. The Pansy Earrings
  reward isn't just a stat item - it's a memorial. Classic
  World writers earned this one.</p>

  <h3>Where the Deep Forest of Patience is</h3>
  <p>"Deep Forest of Patience" is the level tag prefix on
  all 3 quests. This zone extends from
  <a href="/quests/sabitrama-forest-of-patience">Sabitrama's
  Forest of Patience</a> in Sleepywood - "Deep" implies
  further-in / higher-level territory. Blue Violas grow
  here; the Pink Flower Basket materials come from here.</p>

  <p><strong>Zone chain:</strong> Sleepywood -> Sabitrama's
  Forest of Patience (L25) -> Deep Forest of Patience
  (L45+). This is a natural progression corridor.</p>

  <h3>The 5-glove pool analysis</h3>
  <table>
    <thead>
      <tr><th>Glove</th><th>ID</th><th>Class Bias</th></tr>
    </thead>
    <tbody>
      <tr><td>Work Gloves</td><td>1082000</td><td>Any (Beginner)</td></tr>
      <tr><td>Dark Knuckle</td><td>1082054</td><td>Warrior</td></tr>
      <tr><td>Dark Arten</td><td>1082057</td><td>Magician</td></tr>
      <tr><td>Dark Brace</td><td>1082060</td><td>Bowman</td></tr>
      <tr><td>Dark Cleave</td><td>1082063</td><td>Thief</td></tr>
    </tbody>
  </table>
  <p><strong>5-way random roll</strong> covering all 4
  classes + Beginner. If the roll matches your class, use
  it. If not, FM sell or gift to a friend of that class.</p>

  <h3>Character note: John the Fisherman</h3>
  <p>John is a Lith Harbor NPC. Fishermen in Lith are a
  running character type - the town is built around the
  ferry docks. John is unusual because his quest arc has
  emotional stakes beyond the typical fetch quest. Most
  Lith NPCs give you delivery / gathering quests without
  personal stakes.</p>

callout: |
  <strong>Don't skip step 3.</strong> Pansy Earrings is a
  guaranteed named accessory. Combined with the emotional
  weight of the story (John's mother, the memorial
  offering), this is the kind of quest that lingers with
  players years later.

relatedGuides:
  - "/quests/sabitrama-forest-of-patience"
  - "/items/work-gloves"
  - "/quests/crafting-apprentices-in-need-of-help"

verificationStatus: "closed-test-info"
verificationNote: "All 3 quest IDs (10006-10008), NPC (John - Lith Harbor fisherman, WZ ID pending), level (45), per-quest EXP (6,581) + mesos (1,316) + all item rewards (30x Screw 4003000 on step 1, random glove pool 1082000/1082054/1082057/1082060/1082063 on step 2, Pansy Earrings 1032012 GUARANTEED on step 3) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Deep Forest of Patience zone naming and Sabitrama's Forest of Patience connection is editorial interpretation of consistent naming."
sourceSlugs:
  - "osmsdataexplorer"

theme: "lith"
lastUpdated: "2026-08-25"
---
