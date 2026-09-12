---
questId: "10005"
name: "Jane's Challenges (3 quests)"
category: "story"
tagline: "L44 continuation of Jane and the Mushroom. Her dad said no - so Jane's building her own life instead. Three escalating challenges rewarding Elixir x10 -> Power Elixir x15 -> RANDOM Gloves Attack Scroll (Int/Greater, Physical/Magic)."

levelMin: 44
classReq: "Any"

npcName: "Jane"
npcLocation: "Lith Harbor"

chainName: "Jane's Journey"
chainStep: 4
chainLength: 4

description: |
  I heard Jane's found herself a new life ambition...

  Last time, I got Jane some mushroom caps to help convince
  her dad to let her travel. Apparently, it didn't work.
  Now Jane has pivoted - she's building her own experimental
  projects to prove she's competent on her own terms.

  Three challenges of escalating difficulty: gather
  materials for potion-making, defeat monsters for better
  items, and finally help her build a mysterious scroll.

rewards:
  - type: "exp"
    label: "18,900 EXP total across 3 quests"
    details: "6,300 EXP per quest. Consistent per-step payout at L44."
  - type: "mesos"
    label: "3,861 mesos total"
  - type: "item"
    label: "10x Elixir (First Challenge)"
    itemId: 2000004
    details: "10 GUARANTEED Elixirs (2000004). Elixir restores 50% max HP - substantially better than any regular potion. Boss-fight essential kit."
  - type: "item"
    label: "15x Power Elixir (Second Challenge)"
    itemId: 2000005
    details: "15 GUARANTEED Power Elixirs (2000005). Power Elixir restores 100% max HP AND MP - the ULTIMATE consumable in Classic MapleStory. 15 of these is a substantial party-boss stash."
  - type: "item"
    label: "RANDOM Gloves Attack Scroll (Int/Greater, Physical/Magic) - Final Challenge"
    itemId: 2040801
    details: "RANDOM 1-of-4 pool: Gloves Attack Scroll Intermediate (2040801, 60% / +1 PAD), Gloves Attack Scroll Greater (2040802, 30% / +2 PAD, destroy on miss), Gloves Magic Attack Scroll Intermediate (2040805, 60% / +1 MAD), Gloves Magic Attack Scroll Greater (2040806, 30% / +2 MAD, destroy on miss). Covers all 4 permutations - either physical or magic, either safe or risky."

editorial: |
  <p>Jane's Challenges is the <strong>continuation of Jane's
  L20 mushroom arc</strong>. Her father STILL won't let her
  travel. So instead of fighting him, she's built her own
  alchemy / crafting operation at Lith Harbor - proving
  competence through work rather than argument.</p>

  <p><strong>The character growth is meaningful.</strong> At
  L20 Jane was a passive petitioner (asking her dad).
  At L44 she's building her own life on her own terms.
  Classic World writers used the level gap to signal
  Jane's maturation.</p>

  <h3>The 3 challenges</h3>
  <ol>
    <li><strong>10003 - First Challenge (Elixir experiment).</strong>
      Gather materials for Jane's potion research. Reward:
      10 Elixirs - the products of her research shared
      with you.</li>
    <li><strong>10004 - Second Challenge (better item).</strong>
      Jane promises something even better than last time.
      Defeat monsters, gather materials. Reward: 15 Power
      Elixirs.</li>
    <li><strong>10005 - Final Challenge (mysterious
      scroll).</strong> Jane's most ambitious project: a
      mysterious scroll requiring 1 Moon Rock + 20 Dragon
      Skin + more. Reward: RANDOM Gloves Attack Scroll from
      4-permutation pool (Physical/Magic x Int/Greater).</li>
  </ol>

  <h3>The Gloves Scroll reward analysis</h3>
  <p>All 4 outcomes are valuable:</p>
  <ul>
    <li><strong>Gloves Attack Int (60% / +1 PAD):</strong>
      safe scroll for Warriors/Bowmen/Thieves. Best EV.</li>
    <li><strong>Gloves Attack Greater (30% / +2 PAD):</strong>
      risky but rewarding. Use on high-slot Work Gloves for
      best odds.</li>
    <li><strong>Gloves Magic Attack Int/Greater:</strong>
      same but for Magicians.</li>
  </ul>
  <p><strong>Match your class or FM sell.</strong> Gloves
  scrolls FM at 20-80K mesos - big windfall regardless.</p>

  <h3>Where the mobs are</h3>
  <p>The datamine truncates specifics, but based on quest
  patterns:</p>
  <ul>
    <li><strong>Moon Rock:</strong> rare Sleepywood or
      Ossyria mob drop.</li>
    <li><strong>Dragon Skin:</strong> likely Fire Boars,
      Malady, or Deep Forest of Patience mobs.</li>
    <li><strong>Second Challenge materials:</strong> various
      L40-45 mob drops (Zombie Mushrooms, Iron Hogs, etc.)</li>
  </ul>

  <h3>Cross-reference: emotional weight</h3>
  <p>Jane's arc pairs thematically with
  <a href="/quests/johns-deep-forest-of-patience">John the
  Fisherman</a> (L45 Lith Harbor). Both are Lith Harbor
  citizens navigating family / personal stakes at the
  L40-45 tier. John's arc ends in mourning; Jane's ends
  in personal empowerment. Two different Lith stories,
  same emotional maturity.</p>

callout: |
  <strong>Elixirs + Power Elixirs are boss-fight priority
  loot.</strong> Even if you're not a scroll-user, the 25
  combined Elixirs/Power Elixirs are worth 15,000+ mesos
  FM value. Do the chain for the consumable stash alone.

relatedGuides:
  - "/quests/jane-and-the-mushroom"
  - "/quests/johns-deep-forest-of-patience"
  - "/items/elixir"
  - "/items/work-gloves"

verificationStatus: "closed-test-info"
verificationNote: "All 3 quest IDs (10003-10005), NPC (Jane - Lith Harbor, WZ ID pending), level (44), per-quest EXP (6,300) + mesos (1,287) + all item rewards (10x Elixir 2000004 guaranteed step 1, 15x Power Elixir 2000005 guaranteed step 2, RANDOM Gloves Attack Scroll 4-permutation pool 2040801/2040802/2040805/2040806 step 3) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "lith"
lastUpdated: "2026-08-26"
---
