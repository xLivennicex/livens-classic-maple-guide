---
questId: "506045"
name: "Chief Stan's Past (5-quest canonical)"
category: "story"
tagline: "Chief Stan hasn't been himself since the festival. Mrs. Ming Ming and Jay reveal his past: he was once an ADVENTURER who lost his hammer in the Ant Tunnel. Recover it. Give him back his vitality."

levelMin: 27
classReq: "Any"

npcName: "Mrs. Ming Ming / Jay / Chief Stan"
npcLocation: "Henesys"
npcId: 1012106

# Documented as ONE canonical article covering 5 discrete quest
# IDs (506041-506045). This is Henesys's Chief Stan backstory
# arc - referenced multiple times by the Community Board and
# the Free Market intro chain. Splitting into 5 files would
# fragment the reveal.
chainName: "Chief Stan's Past"
chainStep: 5
chainLength: 5

description: |
  Mrs. Ming Ming of Henesys seems to have something on her
  mind. Chief Stan hasn't been feeling quite like himself
  lately.

  What follows is a 5-quest journey through Chief Stan's
  hidden past: Jay reveals Chief Stan was once an adventurer
  who lost his Old Hammer, Mrs. Ming Ming secretly cares for
  him, and the Ant Tunnel holds the missing artifact that
  brings him back to life.

rewards:
  - type: "exp"
    label: "~11,528 EXP total across all 5 steps"
    details: "Individual steps: 1,968 + 1,968 + 2,812 + 1,968 + 2,812 = 11,528. Substantial multi-level EXP haul at L27."
  - type: "mesos"
    label: "~3,234 mesos total"
  - type: "item"
    label: "30x Blue Potion (steps 3-4)"
    itemId: 2000003
    itemSlug: "blue-potion"
    details: "15 Blue Potions on step 3 (Chief Stan's Hammer, Ant Tunnel grind) + 15 more on step 4 (Memories of Youth delivery)."
  - type: "item"
    label: "1x RANDOM Earring Stat Scroll: Intermediate (STR/DEX/INT/LUK)"
    itemId: 2040301
    itemSlug: "earring-str-scroll-intermediate"
    details: "SAME random pool as Lakelis's Proof of Companionship - 60% success / +2 primary stat on hit. Random 1-of-4 roll: STR (2040301), DEX (2040305), INT (2040309), LUK (2040313)."
  - type: "item"
    label: "Citizenship contribution points (all 5 steps)"
    details: "Every step contributes to your Henesys Citizenship rank. Full 5-quest completion is one of the largest citizenship-XP hauls in the L27 tier."

editorial: |
  <p>Chief Stan's Past is <strong>Henesys's most important
  narrative arc</strong>. The Chief you've seen as a
  friendly town leader was once a <strong>traveling
  adventurer</strong>. Mrs. Ming Ming knows his story and
  carries an unspoken affection. Jay knows where the hammer
  went. And YOU are the one who reunites Chief Stan with
  his past.</p>

  <h3>The 5 quests in order</h3>
  <ol>
    <li><strong>506041 - Mrs. Ming Ming's Concern.</strong>
      Mrs. Ming Ming notices Chief Stan isn't himself. Even
      after the successful village festival, he seems distant.
      She asks you to help.</li>
    <li><strong>506042 - Chief Stan's Past (Jay).</strong>
      Jay of Henesys reveals: Chief Stan was an adventurer
      who traveled the world. His weapon of choice was the
      Old Chief Stan's Hammer - long lost.</li>
    <li><strong>506043 - Chief Stan's Hammer (Mrs. Ming Ming).</strong>
      The hunt: dive deep into the Ant Tunnel while hunting
      Evil Eyes. The Hammer may drop from them. Rewards 15
      Blue Potions plus the Hammer if you're lucky.</li>
    <li><strong>506044 - Memories of Youth (Mrs. Ming Ming).</strong>
      Deliver the freshly polished Hammer to Chief Stan.
      Mrs. Ming Ming is oddly reluctant to deliver it
      herself (hint: she has feelings but won't admit them).
      Rewards 15 more Blue Potions.</li>
    <li><strong>506045 - Regained Vitality (Chief Stan).</strong>
      Chief Stan asks you to tell Mrs. Ming Ming he's
      grateful AND sorry. Whatever he's sorry FOR is the
      unspoken love story. Rewards: random Earring Stat
      Scroll (Intermediate) + a lot of citizenship
      contribution.</li>
  </ol>

  <h3>The Ant Tunnel Evil Eye grind</h3>
  <p>Old Chief Stan's Hammer is a rare drop from Evil Eyes
  deep in the Ant Tunnel. Evil Eyes are L23-25 mobs; at L27
  they're manageable. Expect 20-60 minutes of grinding
  depending on drop luck.</p>

  <p><strong>Coincidental EXP win:</strong> Evil Eye killing
  overlaps with
  <a href="/quests/nellas-veteran-requests">Cutthroat
  Manny's Request</a> (Nella L22 quest asking for 50 Evil
  Eyes). Chain both quests for double credit.</p>

  <h3>Character web</h3>
  <ul>
    <li><strong>Chief Stan:</strong> Henesys town leader,
      Free Market letter-of-approval NPC
      (<a href="/quests/welcome-to-the-free-market">Welcome
      to the Free Market</a>), and now revealed as ex-
      adventurer.</li>
    <li><strong>Mrs. Ming Ming:</strong> village carnival
      organizer (<a href="/quests/mrs-ming-mings-first-worry">First
      Worry chain</a>), Community Board resident, and
      Chief Stan's secret admirer.</li>
    <li><strong>Jay:</strong> new NPC, keeper of Chief
      Stan's history. Likely a longtime Henesys resident.</li>
  </ul>

  <p><strong>The unspoken love story:</strong> the datamine
  is careful NOT to spell it out, but Mrs. Ming Ming's
  reluctance to hand over the Hammer herself + Chief Stan's
  "sorry AND grateful" line + Mrs. Ming Ming being the one
  who initiates the whole chain = a decades-long unspoken
  affection. Classic World writers wrote poetry here.</p>

callout: |
  <strong>Highest citizenship contribution in Henesys.</strong>
  All 5 steps grant citizenship points. If you're pushing
  for Henesys Citizenship rank benefits, this chain is one
  of the most efficient contribution paths outside the
  Community Board loop. Also: the earring scroll random
  roll is genuinely valuable.

relatedGuides:
  - "/quests/mrs-ming-mings-first-worry"
  - "/quests/mrs-ming-mings-second-worry"
  - "/quests/welcome-to-the-free-market"
  - "/quests/henesys-community-board"
  - "/quests/nellas-veteran-requests"
  - "/quests/proof-of-companionship"
  - "/citizenship"

verificationStatus: "closed-test-info"
verificationNote: "All 5 quest IDs (506041-506045), NPCs (Mrs. Ming Ming 1012106, Jay 1012109 Henesys, Chief Stan 1012003), level (27), per-step EXP (1,968-2,812) + mesos (552-789) + item rewards (Blue Potion 2000003 x15 on steps 3-4, random Earring Stat Scroll Intermediate 2040301/2040305/2040309/2040313 on step 5) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Citizenship contribution mechanic confirmed via 'citizenship_contribution' reward type in datamine."
sourceSlugs:
  - "osmsdataexplorer"

theme: "henesys"
lastUpdated: "2026-08-25"
---
