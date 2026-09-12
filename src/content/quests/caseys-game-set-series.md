---
questId: "80007"
name: "Casey's Game Set Series (7 quests)"
category: "story"
tagline: "Casey in Henesys Park crafts board games from monster cards and mob drops. A 7-quest crafting series covering Match Cards + 6 different Omok Set combinations. The gateway to MapleStory's Monster Card and Mini-Game systems."

levelMin: 12
classReq: "Any"

npcName: "Casey"
npcLocation: "Henesys Park"
npcId: 1012008

# Documented as ONE canonical article covering 7 discrete quest
# IDs (80001-80007). Same DRY approach as Rain's Maple Quiz Series
# and the Sleepywood Sauna Robe Chain - splitting into 7 files
# would balloon prose without adding reader value.
chainName: "Casey's Game Set Series"
chainStep: 7
chainLength: 7

description: |
  It seems that Casey in Henesys Park knows a way to have a
  different kind of fun in Maple World.

  Casey claims he can craft entertainment for whenever you
  get tired of hunting. Each of his seven quests asks for
  Monster Cards from specific mobs; deliver the cards and
  he assembles a Match Cards set or an Omok Set with the
  matching theme.

rewards:
  - type: "exp"
    label: "321 EXP per quest x 7 = 2,247 EXP total"
    details: "Each of the 7 quests awards 321 EXP. Full series haul: 2,247 EXP. Meaningful at level 12."
  - type: "item"
    label: "1x Set of Match Cards (quest 80001)"
    itemId: 4080100
    details: "Match Cards is a memory game set - flip cards to find matching pairs. Two players; casual mini-game."
  - type: "item"
    label: "1x Slime & Mushroom Omok Set (quest 80002)"
    itemId: 4080000
    details: "Omok (Korean five-in-a-row) set themed with Slime and Mushroom pieces. Playable in Henesys Free Market or town squares."
  - type: "item"
    label: "5 more themed Omok Sets (quests 80003-80007)"
    itemId: 4080005
    details: "Slime & Pig, Slime & Octopus, Pig & Mushroom, Octopus & Mushroom, and Pig & Octopus Omok Sets (IDs 4080001-4080005). All function identically - collect them all if you want to match your Omok board to your opponent's aesthetic preferences."

editorial: |
  <p>Casey's series is MapleStory's onboarding for two entire
  mini-game systems: <strong>Match Cards</strong> and
  <strong>Omok</strong>. Neither is combat, neither is
  progression - they're social gameplay. Two players sit in
  Henesys or Free Market squares, pull out a board, and play
  a round against each other.</p>

  <p><strong>Where:</strong> Casey is in <strong>Henesys Park</strong>
  (the map with the Pig hunting grounds). Talk to him for the
  quest list.</p>

  <h3>What you're collecting</h3>
  <p>Each quest asks for Monster Cards from specific mobs.
  Monster Cards are a separate collection system - every mob
  has a card that drops rarely on kill (typically 1-3% rate).
  Casey's quests want:</p>
  <ul>
    <li><strong>Set of Match Cards (80001):</strong> Snail Cards from Snails.</li>
    <li><strong>Slime & Mushroom Omok (80002):</strong> Slime Cards + Orange Mushroom Cards.</li>
    <li><strong>Slime & Pig Omok (80003):</strong> Slime Cards + Pig Cards.</li>
    <li><strong>Slime & Octopus Omok (80004):</strong> Slime Cards + Octopus Cards.</li>
    <li><strong>Pig & Mushroom Omok (80005):</strong> Pig Cards + Orange Mushroom Cards.</li>
    <li><strong>Octopus & Mushroom Omok (80006):</strong> Octopus Cards + Orange Mushroom Cards.</li>
    <li><strong>Pig & Octopus Omok (80007):</strong> Pig Cards + Octopus Cards.</li>
  </ul>

  <p><strong>Grinding strategy:</strong> if you're at Henesys
  Park already (natural level 12-15 training location), Pig +
  Mushroom cards drop passively while you grind. Slime and
  Octopus cards require detours - Slimes are near the Ellinia-
  Henesys road, Octopi are in Kerning City subway.</p>

  <p><strong>Why do this?</strong> Beyond the mini-games
  themselves: the Monster Card system rewards SET completion
  (usually 5+ cards of one mob) with permanent character
  stat bonuses. Casey's quests exist partially to introduce
  you to the card-hunting habit.</p>

callout: |
  <strong>The Omok sets are effectively cosmetic.</strong>
  All 6 Omok variants play identically - only the piece
  theme differs (Slime pieces look like slimes; Pig pieces
  look like pigs; you get the idea). Complete as many
  quests as the card grinding will support. If you're not
  interested in mini-games, ship the first quest for the
  EXP and skip the rest.

relatedGuides:
  - "/citizenship"
  - "/jobs/warrior"

verificationStatus: "closed-test-info"
verificationNote: "All 7 quest IDs (80001-80007), NPC (Casey 1012008), level (12), per-quest EXP (321), and reward item IDs (Match Cards 4080100, Omok Sets 4080000-4080005) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Specific Monster Card drop requirements per quest are inferred from the naming convention; exact drop-mob targets pending verification against a running client."
sourceSlugs:
  - "osmsdataexplorer"

theme: "henesys"
lastUpdated: "2026-08-24"
---
