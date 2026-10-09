---
questId: "10311"
name: "First Time Together (Kerning City PQ)"
category: "party-quest"
tagline: "Four adventurers level 21+ delve into the Ant Tunnel, defeat King Slime, and split a bag of Intermediate earring scrolls. The classic Kerning Party Quest, renamed for Classic World."

# ==== Requirements ====
levelMin: 21
classReq: "Any (party of 4)"

# ==== NPC / location ====
npcName: "Lakelis"
npcLocation: "Kerning City"
npcId: 9020000  # canonical GMS/83 WZ ID (verified against maplestory.io)

# ==== Chain metadata ====
# The datamine-facing meta quest is called "Proof of Companionship"
# (id 10311). Once the party clears the PQ boss, this quest closes
# and the party can queue again. There's no formal chain step 2 -
# repeat the PQ as many times as you want.
chainName: "First Time Together"
chainStep: 1
chainLength: 1

# ==== In-game narrative (CoT 2 datamine text, verbatim) ====
description: |
  It seems that Lakelis in Kerning City is looking for a party
  to take on a party quest that requires multiple adventurers
  to work together.

  Lakelis in Kerning City asked me to challenge the party quest
  First Time Together and defeat King Slime inside. The party
  quest must be attempted by a party of four adventurers, all
  level 21 or higher. Once all members are ready, the party
  leader can speak to Lakelis to enter.

  As requested by Lakelis, my friends and I challenged the party
  quest First Time Together and defeated King Slime. When
  everyone works together, there's nothing that can't be done!

# ==== Rewards ====
# From Founder's Access datamine (quests.json id 10311). Item drops
# are RANDOM (prop 1 each, non-guaranteed) - you receive ONE of the
# four earring scrolls per completion, not all four. The scroll is
# rolled per party member when the quest closes.
rewards:
  - type: "exp"
    label: "1,870 EXP"
    details: "Solid at level 21 (~4-5% of a level per completion). Since PQs run 10-15 minutes each, that's competitive with any solo grinding option available at this level band."
  - type: "mesos"
    label: "687 mesos"
    details: "Nominal reward. The real economic value is the earring scrolls plus whatever drops you hoover up in the Bonus Stage."
  - type: "item"
    label: "1 random Intermediate Earring Stat Scroll"
    itemId: 2040301
    itemSlug: "earring-str-scroll-intermediate"
    details: "Random pick from four options: STR (2040301), DEX (2040305), INT (2040309), or LUK (2040313). Each is a 60%-success chance to add +2 of its stat to an earring. Rare drops in v83; made accessible via KPQ in Classic World."
  - type: "item"
    label: "Earring DEX Scroll (Intermediate) - alternate outcome"
    itemId: 2040305
    itemSlug: "earring-dex-scroll-intermediate"
    details: "One of the four random earring scroll outcomes. Valuable for Bowman and Thief characters who scale DEX."
  - type: "item"
    label: "Earring INT Scroll (Intermediate) - alternate outcome"
    itemId: 2040309
    itemSlug: "earring-int-scroll-intermediate"
    details: "One of the four random earring scroll outcomes. Valuable for Magician characters who scale INT."
  - type: "item"
    label: "Earring LUK Scroll (Intermediate) - alternate outcome"
    itemId: 2040313
    itemSlug: "earring-luk-scroll-intermediate"
    details: "One of the four random earring scroll outcomes. Valuable for Thief characters who scale LUK."

# ==== Editorial ====
editorial: |
  <p><strong>Party size:</strong> exactly 4. Not 3, not 5 - the
  entry check is strict. If you're missing a slot, Kerning City
  general chat is the traditional recruitment hub.</p>

  <p><strong>Level requirement:</strong> every party member must
  be level 21 or higher. The upper cap is soft - high-level
  helpers can carry a party, but EXP scaling makes it painful for
  them. Standard practice: 21-30 for the sweet spot.</p>

  <p><strong>Where it happens:</strong> the PQ instances inside a
  private version of Kerning City's Ant Tunnel. You'll fight a
  series of themed rooms culminating in a King Slime boss
  encounter. Total run time: 10-15 minutes with a coordinated
  party; 20-30 with a first-time group.</p>

  <h3>Stage-by-stage breakdown</h3>

  <p>The datamine maps the PQ instance across seven consecutive
  rooms (map IDs 80000000 through 80000600, named "1st
  Accompaniment" internally). Cloto and Nella NPCs run the show
  from each stage.</p>

  <p><strong>Stage 1 (<em>Ligator slaughter</em>, map 80000000):</strong>
  22 Ligators (Lv32) spawn. Mash them. Clear-all before Cloto will
  let the party advance. Warriors tank, ranged / mage AOE the
  pile. Easy stage - call it the warm-up.</p>

  <p><strong>Stages 2-4 (puzzle rooms, maps 80000100-80000300):</strong>
  No mobs in the datamine. These are the classic KPQ platform
  puzzles - rope coordination, platform shimmy sequences, team
  teleport-pad timing. Nella / Cloto give instructions on each
  stage. Specific puzzle mechanics NOT datamined; expect typical
  KPQ puzzle flow pending Founder's Access playtime verification.</p>

  <p><strong>Last Stage (<em>King Slime</em>, map 80000400):</strong>
  the boss room. Spawns:</p>
  <ul>
    <li>6 x Jr. Necki (Lv21) - trash adds, pressure the backline</li>
    <li>3 x Curse Eye (Lv35) - the real threat; hits hard, can seduce</li>
    <li>1 x King Slime (Lv40) - 8,000 HP, 130 PDmg / 165 MDmg, body-attack, no bless/undead flags</li>
  </ul>
  <p>King Slime is a tank-and-spank boss with no mechanical gimmicks
  in his stat block - the challenge is managing the Curse Eye adds
  without the party getting focus-fired. Burn adds first, boss
  second.</p>

  <p><strong>Bonus Stage (<em>mushroom chest room</em>, map 80000500):</strong>
  after King Slime dies, the party teleports to a time-limited
  bonus room with Nella and <strong>36 passive mushroom reactors</strong>:
  12 Green Mushrooms (Lv15) and 24 Horny Mushrooms (Lv22). This is
  where the "chest rewards" live - whack mushrooms, items pour out.
  Full drop tables documented in the next section.</p>

  <p><strong>Exit (map 80000600):</strong> teleport room back out
  to Kerning City. Nella hands you off to Lakelis for the quest
  turn-in.</p>

  <h3>King Slime's own drop table</h3>

  <p>Separate from the Bonus Stage chest rewards, King Slime
  himself has a two-item drop table (datamine-verified):</p>
  <ul>
    <li><a href="/items/1072128">Squishy Shoes</a> (score 7) - <strong>the
      marquee drop</strong>. L28 all-class shoes with +1 STR / +1 DEX /
      +1 INT / +1 LUK, 18 PDD, 7 MDD, and 5 upgrade slots. Classic
      MapleStory called these "Slime Shoes"; Classic World renamed
      them Squishy. All-stat shoes with 5 scroll slots are a
      lifetime investment for any build - this alone is why KPQ
      remains worth running past the earring-scroll meta.</li>
    <li>Coupon (4001001, score 1) - low-score etc item, used by
      various merchant / vendor quests.</li>
  </ul>

  <h3>Bonus Stage chest rewards (the mushroom pinata)</h3>

  <p>Each mushroom in the Bonus Stage drops from its own loot table.
  With 36 reactors and a 4-player split, expect each party member
  to kill 8-10 mushrooms per run - so your effective chest reward
  is roughly 8-10 rolls per completion. Items.json gives us scores,
  not percentages; higher score = more common. The best drops are
  stacked at the bottom of each table.</p>

  <p><strong>Green Mushroom (12 spawns) drop table:</strong></p>
  <ul>
    <li>Score 25 - <a href="/items/1092002">Pan Lid</a> (Lv10 all-class shield)</li>
    <li>Score 14 - Fragment of Magic (etc, used in later Ellinia quests)</li>
    <li>Score 11 - Green Mushroom Cap (etc, quest material)</li>
    <li>Score 10 - Green Feather Hat (Lv13 all-class hat)</li>
    <li>Score 8 - Green Woodsman Boots (Lv10 all-class shoes)</li>
    <li>Score 7 - Silver Ore (crafting material)</li>
    <li>Score 7 - <a href="/items/1322003">Mace</a> (Lv15 Warrior/Mage 1H blunt)</li>
    <li>Score 6 - <a href="/items/1382002">Emerald Staff</a> (Lv15 Mage staff)</li>
    <li>Score 4 - Green Bennis Chainmail (Lv25 Bowman top)</li>
    <li>Score 4 - Emerald Ore (crafting material)</li>
    <li>Score 3 - <strong>Claw Attack Scroll: Intermediate</strong> (60% +2 wATT on claws - rare scroll)</li>
    <li>Score 3 - <a href="/items/2000003">Blue Potion</a></li>
    <li>Score 3 - Pet Equip Speed Scroll: Lesser (30% +1 Speed on pet gear)</li>
    <li>Score 2 - <strong>One-Handed Axe Attack Scroll: Greater</strong> (30% +3 wATT on 1H axes)</li>
    <li>Score 2 - <a href="/items/2000000">Red Potion</a></li>
    <li>Score 2 - Animal Fossil (etc, Fossil Research chain)</li>
    <li>Score 2 - Arrows for Crossbows</li>
    <li>Score 2 - Orihalcon Ore (crafting material)</li>
    <li>Score 1 - Green Archer Top (Lv10 Bowman)</li>
    <li>Score 1 - Blue Qi Pao Pants (Lv20 Thief)</li>
    <li>Score 1 - Sandblasted Jeans (Lv15 bottom)</li>
  </ul>

  <p><strong>Horny Mushroom (24 spawns) drop table:</strong></p>
  <ul>
    <li>Score 12 - <a href="/items/2000001">Orange Potion</a></li>
    <li>Score 7 - Horny Mushroom Cap (etc, quest material)</li>
    <li>Score 7 - <a href="/items/2002001">Magic Potion</a> (buff potion!)</li>
    <li>Score 7 - <a href="/items/2000003">Blue Potion</a></li>
    <li>Score 7 - Bronze Ore (crafting material)</li>
    <li>Score 7 - Topaz Ore (crafting material)</li>
    <li>Score 7 - Blue Shark (Lv25 Warrior top)</li>
    <li>Score 5 - Steel Fingerless Gloves (Lv15 all-class glove)</li>
    <li>Score 5 - Cutlus (Lv35 Warrior 1H sword)</li>
    <li>Score 5 - Brown Jester (Lv20 all-class hat)</li>
    <li>Score 4 - Iron Dagger (Lv25 Thief dagger)</li>
    <li>Score 3 - Arrows for Bows</li>
    <li>Score 3 - Mithril Pole Arm (Lv30 Warrior polearm)</li>
    <li>Score 3 - Blue Guise (hat)</li>
    <li>Score 2 - Sky Sneak Pants (Lv25 Thief)</li>
    <li>Score 2 - Black Sneak Pants (Lv25 Thief)</li>
    <li>Score 2 - Blue Pole-Feather Hat (hat)</li>
    <li>Score 1 - Blue Hawkeye (hat)</li>
    <li>Score 1 - Sapphire Ore (crafting material)</li>
    <li>Score 1 - <strong>Two-handed Blunt Weapon Attack Scroll: Greater</strong> (30% +3 wATT)</li>
    <li>Score 1 - <a href="/items/1092003">Steel Shield</a> (Lv15 Warrior shield)</li>
  </ul>

  <p><strong>How to prioritize the bonus room:</strong> if you can
  only tag some of the 36 mushrooms, prioritize <strong>Horny
  Mushrooms</strong> - they drop Magic Potions (useful at this
  level band), Attack Scrolls, Cutlus (sellable), and crafting ores
  in roughly equal measure. Green Mushrooms are front-loaded with
  Pan Lid (common, cheap vendor shield) and etc junk - their good
  stuff (Claw Scroll Intermediate, 1H Axe Attack Greater) is rarer.</p>

  <h3>The reward that matters most</h3>

  <p>Three parallel reward streams on every KPQ run:</p>
  <ol>
    <li><strong>Lakelis completion quest</strong> - 1,870 EXP, 687
      mesos, and 1 of 4 random Intermediate Earring Stat Scrolls
      (STR / DEX / INT / LUK). Each scroll is a 60%-success +2 of
      its stat on an earring; +10 to a core stat from a fully-
      scrolled earring is a serious damage uplift.</li>
    <li><strong>King Slime's drop</strong> - Squishy Shoes rolls on
      every kill. Score 7 of 8 total drop weight means roughly
      7/8 or ~88% drop rate IF the datamine score field is a
      straight weighting - but the pre-BB convention was <5% for
      equips of this quality, so expect 1-in-20 to 1-in-10 per
      run empirically. Needs FA playtest to pin down.</li>
    <li><strong>Bonus Stage chest rewards</strong> - 8-10 mushroom
      drops per party member per run. Attack Scrolls, crafting
      ores, and lower-tier starter gear.</li>
  </ol>

  <p>In v83, Intermediate earring scrolls were boss-drop-only and
  traded on the Free Market for six-figure sums. Making them a PQ
  reward flips the entire mid-game earring economy - budget
  accessories become upgradeable without farming Zakum for a week.</p>

callout: |
  <strong>Note on the name:</strong> the datamine calls the
  entry quest <strong>Proof of Companionship</strong> and the
  PQ itself <strong>First Time Together</strong>. Older players
  will know it as <strong>Kerning Party Quest</strong> or
  <strong>KPQ</strong> - it is the same content, renamed for
  Classic World. All three names refer to the same 4-player
  Ant Tunnel + King Slime encounter.

# ==== Cross-links ====
relatedGuides:
  - "/party-quests"
  - "/quests"
  - "/items/weighted-earrings"  # natural first earring to invest scrolls into
  - "/quests/mothers-gold-watch"  # the chain that awards Weighted Earrings at L18

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Datamine-verified via osmsdataexplorer.com Founder's Access dump: Quest ID 10311 (completion rewards 1870 EXP / 687 mesos / 1-of-4 earring scroll), NPC Lakelis (9020000), level requirement 21+, party size 4, boss King Slime (800003, Lv40, 8000HP). KPQ stage maps 80000000-80000600 confirmed via maps.json. Stage mob spawns pulled from mobs.json: Stage 1 = 22 Ligators, Last Stage = 6 Jr. Necki + 3 Curse Eye + 1 King Slime, Bonus = 12 Green Mushrooms + 24 Horny Mushrooms. Full bonus-stage drop tables (42 unique items across both mushrooms) sourced from mobs.json drops arrays with datamine score weights. King Slime's own drop table (Squishy Shoes score 7, Coupon score 1) also datamine-verified. Puzzle-stage mechanics for maps 80000100-80000300 are NOT in the datamine (no mobs, no NPC scripts exposed) - documented from v83 KPQ convention, needs FA playtime verification."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "kerning"
lastUpdated: "2026-10-08"
---
