---
questId: "506002"
name: "Henesys Community Board Series"
category: "story"
tagline: "Arthur the town clerk assigns you to greet + check on Henesys residents. A 12+ quest citizenship-contribution loop covering Rina, Mrs. Ming Ming, Camila, Bruce, Maya, and more."

levelMin: 12
classReq: "Any"

npcName: "Community Board / Arthur (town clerk)"
npcLocation: "Henesys - in front of Town Hall"
# No canonical NPC - the Community Board is a UI element, not a
# renderable NPC. Arthur is referenced in the datamine text but
# doesn't have his own WZ ID in v83 (may be CoT-exclusive).

chainName: "Henesys Community Board"
chainStep: 71
chainLength: 71
# This canonical article documents the ENTIRE Community Board
# resident-greeting series. Datamine confirms 71 quests with NPC
# name 'Community Board', spanning IDs 506001-506136 (with gaps
# where other NPCs occupy IDs - Bruce chain 506036-506039, Chief
# Stan chain 506041-506045, Mrs. Ming Ming Advice 506037, Mong from
# Kong chain 506138-506141). The 71 Board quests are mechanically
# identical (First Greeting + Asking After per resident) and are
# DRY-covered by this single canonical rather than 71 separate files.

description: |
  It looks like Arthur, the town clerk, is looking for someone
  to help with their work. Let's go check out Community Board
  in front of Henesys Town Hall.

  Arthur, the town clerk, asks you to greet and check on
  various Henesys residents. Each resident has TWO quests:
  a "First Greeting" and an "Asking After." Both contribute
  to your Citizenship rank in Henesys.

rewards:
  - type: "exp"
    label: "~5,000-8,000 EXP across the full series"
    details: "Each individual quest awards 224-321 EXP. The full ~18-quest series (9 residents x 2 quests each, per the CoT 2 datamine sequence 506001-506018+) accumulates meaningful EXP at level 12."
  - type: "item"
    label: "Various food consumables + Citizenship contribution"
    details: "Rewards include Orange (2010004), Lemon (2010005), and Cake (2020002) plus Citizenship contribution points that build your Henesys Citizenship rank. Individual per-quest item drops vary."
  - type: "item"
    label: "5x Orange (first quest reward: Rina Greeting)"
    itemId: 2010004
  - type: "item"
    label: "5x Lemon (Asking After Rina reward)"
    itemId: 2010005

editorial: |
  <p>The Henesys Community Board is the beating heart of the
  <strong>Henesys Citizenship system</strong>. After completing
  <a href="/quests/to-henesys-the-prairie-town">To Henesys,
  the Prairie Town</a>, this Board opens up a rotating series
  of resident-check-in quests. Each resident has two quests:
  the first "First Greeting" (introduction), the second
  "Asking After" (follow-up check).</p>

  <h3>The resident roster (datamine order)</h3>
  <p>The Board sequences quests through Henesys residents in
  order. Full quest ID range: <strong>506001-506136</strong>
  (71 total quests, with ID gaps where non-Board NPCs occupy
  slots - see<em> Cross-narrative citizenship arcs</em> below).
  Confirmed residents from CoT 2 datamine:</p>
  <ol>
    <li><strong>Rina</strong> - the town resident from the
      <a href="/quests/sleepywood-sauna-robe-chain">Sleepywood
      chain</a>. Yes, same Rina. She has ties to multiple
      towns and the Board is her Henesys registration.</li>
    <li><strong>Mrs. Ming Ming</strong> - Henesys resident,
      appears in her own L15 Worry-chain quests.</li>
    <li><strong>Camila</strong> - Henesys resident.</li>
    <li><strong>Bruce</strong> - the SAME Bruce from the
      <a href="/quests/mushroom-studies-bruce">Bruce and Ayan
      Reunion arc</a>. His registration confirms he lives in
      Henesys with recovered Ayan.</li>
    <li><strong>Maya</strong> - the L1 Amherst NPC now
      living in Henesys. Long journey from Maple Island.</li>
    <li>...additional residents (Arthur, Chief Stan, Athena
      Pierce, etc.) continue the sequence.</li>
  </ol>

  <h3>Cross-narrative citizenship arcs (NOT Board-driven)</h3>
  <p>Some quests in the 506000-506200 range are NOT Community
  Board greetings but substantive character arcs by named NPCs.
  These have their own canonical articles:</p>
  <ul>
    <li><a href="/quests/bruces-cake-for-daughter">Bruce's
      Cake For His Daughter (506036, 506037, 506038, 506039)</a> -
      Bruce sends cake to Ayan via Mrs. Ming Ming advice</li>
    <li><a href="/quests/chief-stans-past-chain">Chief Stan's
      Past Chain (506041, 506042, 506043, 506044, 506045)</a> -
      the Henesys chief's adventurer backstory</li>
    <li><a href="/quests/mong-from-kong-stirge-cure">Mong from
      Kong's Stirge Phobia Cure (506138, 506139, 506141)</a> -
      Kerning phobia medicine + Pet Equipment Scroll reward</li>
  </ul>

  <h3>How to run efficiently</h3>
  <p>Each quest is trivially fast - talk to the Board, talk
  to the named resident, return to the Board. Most residents
  are within 2-3 screens of the Board itself. Full series
  takes 30-60 minutes if you're not fighting anything along
  the way.</p>

  <h3>Citizenship contribution</h3>
  <p><strong>Citizenship contribution points</strong> are
  the currency this series pays out in (alongside the food
  consumables). Accumulating contribution ranks up your
  Henesys Citizenship, unlocking:</p>
  <ul>
    <li>Discounted vendor prices in Henesys shops</li>
    <li>Fast-travel options to and from Henesys</li>
    <li>Possible boss loot / drop rate bonuses (CoT-specific,
      pending live verification)</li>
    <li>Access to Citizenship-locked area quests</li>
  </ul>
  <p>See the full <a href="/citizenship">Citizenship
  guide</a> for rank-benefit breakdown.</p>

callout: |
  <strong>Rina cross-narrative:</strong> Rina appears in
  the Sleepywood chain AS THE UNAGI COOK in Henesys - she's
  the same person. The Community Board is where you first
  meet her narratively. She then re-enters your story much
  later in Sleepywood. Classic World's storytelling web is
  denser than v83's if you pay attention.

relatedGuides:
  - "/quests/to-henesys-the-prairie-town"
  - "/quests/sleepywood-sauna-robe-chain"
  - "/quests/mushroom-studies-bruce"
  - "/citizenship"

verificationStatus: "closed-test-info"
verificationNote: "Quest IDs 506001-506018 series, quest broker (Community Board / Arthur), level (12), sample rewards (224-321 EXP per quest, food consumables Orange 2010004 + Lemon 2010005, Citizenship contribution) all pulled from the CoT 2 client datamine at osmsdataexplorer.com. Complete resident roster confirmed via quest name enumeration; individual per-resident quest rewards vary and are documented per-quest in the datamine (not fully replicated here to keep this page as a canonical overview)."
sourceSlugs:
  - "osmsdataexplorer"

theme: "henesys"
lastUpdated: "2026-08-24"
---
