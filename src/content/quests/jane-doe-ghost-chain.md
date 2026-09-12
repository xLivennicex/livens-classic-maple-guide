---
questId: "10310"
name: "Jane Doe Ghost Chain (2 quests)"
category: "story"
tagline: "The stranger in Niora Hospital's bandages is a GHOST. She's been waiting for a doctor who never returned. Help her accept her death - reward is the Old Raggedy Cape, her personal effect made permanent."

levelMin: 23
classReq: "Any"

npcName: "Jane Doe"
npcLocation: "Niora Hospital, Kerning City"
# Jane Doe is a ghost NPC; likely has a distinct WZ ID from
# regular Kerning residents but not confirmed in v83's asset
# pool. Marked as pending verification.

chainName: "Jane Doe's Identity"
chainStep: 2
chainLength: 2

description: |
  I hear someone's been seen inside the Niora Hospital in
  Kerning City...

  I met Jane Doe inside the Niora Hospital in Kerning City.
  Jane Doe needs to take off her bandages to see the results
  of her surgery, but there's no one to help her.

  The stranger I met in the Niora Hospital was, surprisingly,
  a GHOST! She's been in the hospital all this time - unaware
  that she'd died, waiting for Dr. Niora to return. Now,
  unwilling to accept her death, she needs me to help her
  find peace.

rewards:
  - type: "exp"
    label: "4,836 EXP total across 2 steps"
  - type: "mesos"
    label: "1,344 mesos total"
  - type: "item"
    label: "15x Blue Potion (Stranger's Request, step 1)"
    itemId: 2000003
    itemSlug: "blue-potion"
  - type: "item"
    label: "1x Old Raggedy Cape (final reward, step 2)"
    itemId: 1102000
    details: "GUARANTEED Cape - the first cape slot equipment most players own. Jane Doe's personal effect made permanent. Emotional narrative weight AND functional gear."

editorial: |
  <p>The Jane Doe chain is one of Classic MapleStory's more
  atmospheric arcs - <strong>a ghost story quest</strong>.
  Not many L23 quests carry emotional stakes; this one hits
  hard because you don't know Jane Doe is dead until step 2.</p>

  <h3>The chain in order</h3>
  <ol>
    <li><strong>10309 - Stranger's Request (Jane Doe, Niora
      Hospital).</strong> Jane Doe wants her bandages off to
      see the results of her surgery. She's been waiting for
      Dr. Niora to return. Help her out. Rewards 15 Blue
      Potions + unlocks step 2.</li>
    <li><strong>10310 - Stranger's Identity (Jane Doe).</strong>
      The plot twist: Jane Doe is a ghost. Dr. Niora is long
      dead too. Jane Doe just... hasn't accepted it yet.
      Help her find peace. Rewards Old Raggedy Cape (1102000).</li>
  </ol>

  <h3>Where the hospital is</h3>
  <p>Niora Hospital is inside Kerning City - one of the
  buildings you can enter via the city's interior portals.
  Look for a hospital signage; the entrance leads to a
  medical waiting room where Jane Doe stands.</p>

  <h3>The cape reward</h3>
  <p>Old Raggedy Cape is <strong>the first cape slot
  equipment</strong> most L23 characters will own. Capes are:</p>
  <ul>
    <li>Universal (all classes can wear)</li>
    <li>Slot-friendly for scrolling (Cape STR / DEX / INT /
      LUK scrolls exist in the L20-40 range)</li>
    <li>A permanent equipment slot upgrade path through
      endgame - many characters end up with a scrolled
      Adventurer Cape or better, but Old Raggedy Cape is
      where the journey starts</li>
  </ul>

  <p><strong>The narrative meaning:</strong> Old Raggedy Cape
  is Jane Doe's actual hospital garment - the raggedy cape
  she died in. Wearing it is a small memento mori. Classic
  World writers put character work into this one.</p>

callout: |
  <strong>Play the dialogue slowly.</strong> Most L23 quests
  are transactional fetch or kill loops. Jane Doe is one of
  the few emotionally-weighted chains in the tier. Read the
  ghost reveal instead of speed-clicking.

relatedGuides:
  - "/items/old-raggedy-cape"
  - "/quests/sparkling-rock-chain"

verificationStatus: "closed-test-info"
verificationNote: "Both quest IDs (10309, 10310), NPC (Jane Doe - ghost, WZ ID pending v83 asset verification), level (23), rewards (2,418 EXP + 672 mesos per step, 15x Blue Potion 2000003 on step 1, 1x Old Raggedy Cape 1102000 guaranteed on step 2) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "kerning"
lastUpdated: "2026-08-25"
---
