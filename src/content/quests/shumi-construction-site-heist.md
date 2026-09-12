---
questId: "10314"
name: "Shumi's Construction Site Losses (3 quests)"
category: "story"
tagline: "Shumi keeps losing things at the Kerning Construction Site B1-B3. Coin, cash, sack of cash. Each level deeper = bigger loss = better reward. Final step drops a 10,000 meso windfall + 30 Mana Elixirs."

levelMin: 35
classReq: "Any"

npcName: "Shumi"
npcLocation: "Kerning Construction Site"
npcId: 1032003

# Documented as ONE canonical article covering 3 discrete quest
# IDs (10312, 10313, 10314). Same NPC, same location, same
# 'lost item' fetch structure at 3 escalating basement levels.
# Compact 3-quest canonical mirrors the Casey Game Set pattern.
chainName: "Shumi's Construction Site Losses"
chainStep: 3
chainLength: 3

description: |
  Let's start looking for Shumi in Kerning City.

  I met this girl named Shumi in Kerning City. She's
  devastated about losing things at the Kerning Construction
  Site. Each basement level she visits, she loses something
  worse - starting with a coin, then rent money, then a
  sack of cash meant for JM From tha Streetz.

rewards:
  - type: "exp"
    label: "12,486 EXP total across 3 quests"
    details: "4,162 EXP per quest. Substantial at L35."
  - type: "mesos"
    label: "12,046 mesos total"
    details: "1,023 + 1,023 + 10,000 = 12,046 mesos. Step 3 (Sack of Cash) is a MASSIVE meso reward. This is one of the highest-meso quests in the L30-40 tier."
  - type: "item"
    label: "5x Return Scroll (Nearest Town) + 3x each town Return Scroll"
    itemId: 2030000
    details: "Step 1 gives a MASSIVE Return Scroll grab bag: 5x Nearest Town + 3x each Lith Harbor / Ellinia / Perion / Henesys / Kerning / Sleepywood. 23 Return Scrolls total. Portable town-hopping stash."
  - type: "item"
    label: "30x Blue Potion (step 2)"
    itemId: 2000003
    itemSlug: "blue-potion"
  - type: "item"
    label: "30x Mana Elixir (step 3)"
    itemId: 2000006
    details: "30 GUARANTEED Mana Elixirs. Mana Elixir restores a huge chunk of MP - substantially better than Blue Potion. Priest / Wizard essential stash."

editorial: |
  <p>Shumi's Construction Site Losses is a <strong>heist-
  adjacent 3-quest fetch chain</strong>. Same girl, same
  disorganization, three basement levels of the Kerning
  Construction Site. Each level = deeper mob difficulty =
  bigger stakes.</p>

  <h3>The 3 basement dives</h3>
  <ol>
    <li><strong>10312 - [Construction Site B1] Shumi's Lost
      Coin.</strong> "A bunch of guys draped in blue" (Ligator
      mob description) stole her lucky coin. Recover it.
      Reward: 23 Return Scrolls spanning every major town.</li>
    <li><strong>10313 - [Construction Site B2] Shumi's Lost
      Roll of Cash.</strong> A Stirge flew over and snatched
      her rent money. Kerning subway grind. Reward: 30 Blue
      Potions.</li>
    <li><strong>10314 - [Construction Site B3] Shumi's Lost
      Sack of Cash.</strong> She dropped a sack of cash
      meant for
      <a href="/quests/crafting-apprentices-in-need-of-help">JM
      From tha Streetz</a> (Leatherworking Kit purchase).
      Recover it. Reward: <strong>10,000 mesos + 30 Mana
      Elixirs</strong>.</li>
  </ol>

  <h3>Cross-narrative: JM From tha Streetz cameo</h3>
  <p>Step 3 explicitly names JM From tha Streetz as the
  Sack of Cash's intended recipient - the same NPC who runs
  <a href="/quests/crafting-apprentices-in-need-of-help">Leatherworking
  apprenticeship</a> in Kerning. This is Classic World doing
  world-building - Shumi is a JM apprentice or courier, and
  her lost cash was for Screws (Leatherworking material).
  The system references cross the entire Kerning district.</p>

  <h3>Shumi character arc</h3>
  <p>Shumi first appears in
  <a href="/quests/shumis-request">Nella's L10 hub</a>
  (Shumi's Request) building a dog house. Now L35 and doing
  Construction courier work for JM. The economic pipeline is:
  <em>childhood chores -> teenage courier work -> full
  Leatherworking apprentice</em>. Best character arc in
  Kerning district.</p>

  <h3>The 10K meso payout</h3>
  <p>10,000 mesos from a single L35 quest is exceptional -
  most L30-40 quests award 800-1,500 mesos. Combined with
  30 Mana Elixirs (worth ~150 mesos each = 4,500 mesos
  material), this single quest is worth ~15,000 mesos in
  effective value. Prioritize.</p>

callout: |
  <strong>Do step 3 with a party.</strong> Basement B3 mobs
  are the toughest in the chain - L35+ mobs in cramped
  vertical map layout. If soloing at L35, expect deaths.
  Party members share EXP but the 10K meso payout goes to
  the quest holder only, so bring friends or grind solo
  with high potion stock.

relatedGuides:
  - "/quests/shumis-request"
  - "/quests/crafting-apprentices-in-need-of-help"
  - "/quests/nellas-veteran-requests"

verificationStatus: "closed-test-info"
verificationNote: "All 3 quest IDs (10312, 10313, 10314), NPC (Shumi 1032003 Kerning), level (35), per-quest EXP (4,162), mesos (1,023 for steps 1-2, 10,000 for step 3), and item rewards (Return Scroll pool 2030000-2030006 on step 1, 30x Blue Potion 2000003 on step 2, 30x Mana Elixir 2000006 on step 3) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "kerning"
lastUpdated: "2026-08-25"
---
