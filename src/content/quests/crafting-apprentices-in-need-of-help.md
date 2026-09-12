---
questId: "80025"
name: "Crafting Apprentices in Need of Help (6-master canonical)"
category: "story"
tagline: "The follow-up to the L10 apprentice-seeking quests. All 6 Classic World crafting masters need help at once, each awarding their profession's Kit. Full crafting-system unlock for the L15+ character."

levelMin: 15
classReq: "Any"

npcName: "Silas Irons / Mr. Thunder / Francois / Vicious / JM / Chrishrama"
npcLocation: "Perion x2, Ellinia, Henesys, Kerning, Sleepywood"
# All 6 masters are Classic World-exclusive NPCs; individual
# WZ IDs unavailable in v83's maplestory.io pool. Documented
# in docs/npc-id-lookup.md 'Classic World-exclusive NPCs' section.

# Documented as ONE canonical article covering 6 discrete quest
# IDs (80010, 80013, 80016, 80019, 80022, 80025). This is the
# definitive Classic World crafting profession map - all six
# disciplines and their master + location + Kit reward in one
# reference.
chainName: "Crafting Apprentices in Need of Help"
chainStep: 6
chainLength: 6

description: |
  Each of the 6 Classic World crafting masters has received
  an important request but is struggling due to a lack of
  materials. They need an apprentice to gather resources
  and complete the job.

  Complete each master's L15 quest and receive their
  profession's Crafting Kit as a reward. Six masters, six
  Kits, six professions.

rewards:
  - type: "exp"
    label: "705 EXP per master x 6 = 4,230 EXP total"
  - type: "item"
    label: "Smithing Kit (Silas Irons, Perion Blacksmith)"
    itemId: 2002007
    details: "Unlocks Blacksmithing crafting - weapons, armor, shields. Silas Irons's discipline."
  - type: "item"
    label: "Weaponcrafting Kit (Mr. Thunder, Perion Weaponmaster)"
    itemId: 2002005
    details: "Unlocks Weaponcrafting - specialized weapon recipes distinct from Blacksmithing. Mr. Thunder's discipline."
  - type: "item"
    label: "Tailoring Kit (Francois, Ellinia Tailor)"
    itemId: 2002009
    details: "Unlocks Tailoring - fabric armor, robes, capes, and mage-focused equipment. Francois's discipline."
  - type: "item"
    label: "Woodcrafting Kit (Vicious, Henesys Carpenter)"
    itemId: 2002006
    details: "Unlocks Woodcrafting / Carpentry - bows, wands, staves, and wooden equipment. Vicious's discipline."
  - type: "item"
    label: "Leatherworking Kit (JM From tha Streetz, Kerning)"
    itemId: 2002008
    details: "Unlocks Leatherworking - light armor, gloves, boots, thief gear. JM's discipline."
  - type: "item"
    label: "Arcforging Kit (Chrishrama, Sleepywood)"
    itemId: 2002010
    details: "Unlocks Arcforging - the mysterious 6th discipline, based in Sleepywood. Likely handles magical / enchantment-adjacent recipes. Chrishrama's discipline."

editorial: |
  <p>This chain is the <strong>complete map of Classic World's
  crafting system</strong>. Six professions, six masters, six
  towns (well, five towns + Sleepywood). If you've been curious
  about what crafting looks like in CoT, this quest series is
  your unlock.</p>

  <h3>The six professions and their masters</h3>
  <table>
    <thead>
      <tr><th>Profession</th><th>Master</th><th>Location</th><th>Kit ID</th></tr>
    </thead>
    <tbody>
      <tr><td>Blacksmithing</td><td>Silas Irons</td><td>Perion</td><td>2002007</td></tr>
      <tr><td>Weaponcrafting</td><td>Mr. Thunder</td><td>Perion</td><td>2002005</td></tr>
      <tr><td>Tailoring</td><td>Francois</td><td>Ellinia</td><td>2002009</td></tr>
      <tr><td>Woodcrafting</td><td>Vicious</td><td>Henesys</td><td>2002006</td></tr>
      <tr><td>Leatherworking</td><td>JM From tha Streetz</td><td>Kerning City</td><td>2002008</td></tr>
      <tr><td>Arcforging</td><td>Chrishrama</td><td>Sleepywood</td><td>2002010</td></tr>
    </tbody>
  </table>

  <h3>Prerequisite: the L10 apprentice-seeking quests</h3>
  <p>Each master has an L10 quest first
  (<a href="/quests/silas-irons-apprentice">Silas Irons in Need
  of an Apprentice</a> and 5 siblings: 80011 Mr. Thunder,
  80014 Francois, 80017 Vicious, 80020 JM, 80023 Chrishrama).
  Complete the L10 quest to establish apprenticeship, then at
  L15 the master calls you back for the "in Need of Help"
  quest that awards the Kit.</p>

  <h3>Can you learn all six?</h3>
  <p>The datamine doesn't restrict you from collecting all 6
  Kits - each quest is independent. Whether your character can
  actually PRACTICE all 6 professions simultaneously is a
  system-level question (CoT may enforce a 1-2 profession
  cap per character, similar to many MMOs). Pending live
  verification at launch.</p>

  <h3>Which profession fits your class?</h3>
  <ul>
    <li><strong>Warrior:</strong> Blacksmithing (Silas) or
      Weaponcrafting (Thunder). You need swords, axes, shields,
      armor - both professions serve you.</li>
    <li><strong>Magician:</strong> Woodcrafting (Vicious for
      wands/staves) + Tailoring (Francois for robes and cloth).</li>
    <li><strong>Bowman:</strong> Woodcrafting (Vicious for
      bows/crossbows) + Leatherworking (JM for light armor).</li>
    <li><strong>Thief:</strong> Leatherworking (JM) for the
      full Thief kit - gloves, boots, light armor. Weaponcrafting
      for claws.</li>
    <li><strong>Any class:</strong> Arcforging (Chrishrama) is
      the wild card - likely enchantment or scroll-adjacent
      recipes. Worth investigating regardless of your combat
      class.</li>
  </ul>

  <h3>Sleepywood placement note</h3>
  <p>Chrishrama being in <strong>Sleepywood</strong> at L15 is
  a signal that Arcforging is meant for slightly later-game
  players - Sleepywood mobs are L30+ zones. The L15 quest is
  accessible (you can walk to Sleepywood from Henesys via
  Ant Tunnel) but the profession's recipes probably need
  Sleepywood-tier drops as inputs.</p>

callout: |
  <strong>This chain rewrites what we thought the crafting
  system was.</strong> Previously we knew there were 6 masters
  from the L10 quests but not what each specialized in. The
  Kit IDs in the L15 quests spell it out: Smithing, Weapon-
  crafting, Tailoring, Woodcrafting, Leatherworking, Arcforging.
  Full crafting deep-dive guide expansion is queued in ROADMAP
  now that we have the profession map.

relatedGuides:
  - "/quests/silas-irons-apprentice"
  - "/crafting"
  - "/quests/how-to-enjoy-mushrooms"

verificationStatus: "closed-test-info"
verificationNote: "All 6 quest IDs (80010 Silas Irons, 80013 Mr. Thunder, 80016 Francois, 80019 Vicious, 80022 JM From tha Streetz, 80025 Chrishrama), level (15), per-quest EXP (705), and Crafting Kit item IDs (Smithing 2002007, Weaponcrafting 2002005, Tailoring 2002009, Woodcrafting 2002006, Leatherworking 2002008, Arcforging 2002010) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Master NPCs are CoT-exclusive; no v83 sprites available."
sourceSlugs:
  - "osmsdataexplorer"

theme: "sleepywood"
lastUpdated: "2026-08-24"
---
