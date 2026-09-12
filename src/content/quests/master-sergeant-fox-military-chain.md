---
questId: "12108"
name: "Master Sergeant Fox's Military Chain (9-quest canonical)"
category: "story"
tagline: "El Nath's Master Sergeant Fox needs you to find 3 missing soldiers - Charlie, Bravo, Easy (NATO phonetic naming). 3x3 sub-chain structure across Orbis / El Nath / Cloud Park VI. Introduces Sniper / Dexterity / Speed potions + new Earring Crit + Evasion scrolls."

levelMin: 40
classReq: "Any"

npcName: "Master Sergeant Fox / Staff Sgt Charlie / Sgt Bravo / Corporal Easy"
npcLocation: "El Nath / Orbis / Icy Cold Field / Cloud Park VI"
npcId: 2020003

# Documented as ONE canonical article covering 9 discrete quest
# IDs (12100-12108). Natural 3x3 structure: Fox dispatches you
# to find each soldier, soldier gives a request (ingot delivery),
# soldier gives a report (document delivery). Ships as compact
# 9-quest canonical rather than 9 separate files.
chainName: "Master Sergeant Fox's Military Chain"
chainStep: 9
chainLength: 9

description: |
  Let's go see Master Sergeant Fox in El Nath.

  Master Sergeant Fox, whom I met in El Nath, asked me to
  meet Staff Sergeant Charlie, Sergeant Bravo, and Corporal
  Easy in order. Each soldier is stationed at a different
  Ossyria zone: Charlie at Orbis, Bravo at Icy Cold Field,
  Easy at Cloud Park VI.

rewards:
  - type: "exp"
    label: "~45,809 EXP total across all 9 steps"
    details: "5,287 EXP for Fox-dispatch steps + 5,287 EXP for Request steps + 3,700 EXP for Charlie/Bravo Report steps + 5,287 EXP for Easy Report step. Substantial multi-level EXP haul at L40."
  - type: "mesos"
    label: "~10,158 mesos total"
  - type: "item"
    label: "3x Sniper Potion (Charlie Report step)"
    itemId: 2002002
    itemSlug: "sniper-potion"
    details: "Sniper Potion (2002002): +5 ACC for 10 min. Bowman-focused stat potion. First quest-guaranteed source."
  - type: "item"
    label: "3x Dexterity Potion (Bravo Report step)"
    itemId: 2002003
    itemSlug: "dexterity-potion"
    details: "Dexterity Potion (2002003): +5 EVA for 10 min. Thief/high-DEX class focused."
  - type: "item"
    label: "3x Speed Potion (Easy Report step)"
    itemId: 2002004
    itemSlug: "speed-potion"
    details: "Speed Potion (2002004): +8 SPD for 10 min. Universal movement buff."
  - type: "item"
    label: "RANDOM Earring Crit Damage OR Evasion Scroll (Easy Report climax)"
    itemId: 2040317
    details: "RANDOM 1-of-4 pool: Earring Crit Damage Scroll: Intermediate (2040317, 60% / +1 Crit Damage) OR Greater (2040318, 30% / +2 Crit Damage) OR Earring Evasion Scroll: Intermediate (2040321, 60% / +1 EVA) OR Greater (2040322, 30% / +2 EVA). Two NEW Earring scroll types expanding the pool beyond STR/DEX/INT/LUK."

editorial: |
  <p>Master Sergeant Fox's Military Chain is <strong>your
  first extended Ossyria continent arc</strong>. Nine
  quests, four NPCs, three zones - Orbis, Icy Cold Field
  (El Nath), and Cloud Park VI (Orbis Sky Terrace). The
  NPCs are named after <strong>NATO phonetic alphabet
  letters</strong> (Fox / Charlie / Bravo / Easy) - a
  deliberate military-worldbuilding wink.</p>

  <h3>The 3x3 sub-chain structure</h3>
  <table>
    <thead>
      <tr><th>Soldier</th><th>Location</th><th>Ingots Required</th><th>Report Reward</th></tr>
    </thead>
    <tbody>
      <tr><td>Staff Sgt Charlie</td><td>Orbis</td>
          <td>4x Refined Orihalcon Ingots</td>
          <td>3x Sniper Potion</td></tr>
      <tr><td>Sgt Bravo</td><td>Icy Cold Field</td>
          <td>4x Refined Adamantium Ingots</td>
          <td>3x Dexterity Potion</td></tr>
      <tr><td>Corporal Easy</td><td>Cloud Park VI</td>
          <td>4x Refined Sapphires</td>
          <td>3x Speed Potion + RANDOM Earring Scroll</td></tr>
    </tbody>
  </table>

  <h3>THE Refined Ingot economy reveal</h3>
  <p>Each soldier asks for <strong>Refined Ingots</strong> -
  higher-tier processed versions of the ores from
  <a href="/quests/cursed-doll-collection-chain">the Cursed
  Doll chain</a>. This confirms the crafting-tier ladder:</p>
  <ol>
    <li>Raw ore (Orihalcon, Adamantium, etc)</li>
    <li>Refined Ingot (Refined Orihalcon Ingot, Refined
      Adamantium Ingot, etc.)</li>
    <li>Weapon/armor recipe output</li>
  </ol>
  <p>Refined tier is likely a <strong>Blacksmithing recipe
  output</strong> (Silas Irons apprentices produce these).
  If you're not Blacksmithing yourself, expect to FM-buy
  Refined Ingots at 500-2,000 mesos each.</p>

  <h3>The Refined Sapphires twist</h3>
  <p>Easy's request is <strong>4x Refined Sapphires</strong>
  (not Adamantium or Orihalcon). Refined gems are an
  <a href="/items/arcforging-kit">Arcforging</a> output -
  gem processing is scroll-crafting adjacent. This suggests
  Easy's mission involves Arcforging materials, tying the
  military chain to the crafting economy at multiple points.</p>

  <h3>Character reveals: NATO phonetic naming</h3>
  <ul>
    <li><strong>Master Sergeant Fox (2020003, El Nath):</strong>
      commanding officer. NATO letter F = Foxtrot.
      Coordinates the mission from El Nath HQ.</li>
    <li><strong>Staff Sergeant Charlie (2010000, Orbis):</strong>
      NATO letter C = Charlie. Sniper-adjacent role
      (rewards Sniper Potion).</li>
    <li><strong>Sergeant Bravo (2030001, Icy Cold Field):</strong>
      NATO letter B = Bravo. Defensive role (Dexterity /
      Evasion Potion).</li>
    <li><strong>Corporal Easy (2030002, Cloud Park VI):</strong>
      military phonetic E (older-style) = Easy. Scout /
      recon role (Speed Potion + climax reward).</li>
  </ul>

  <h3>Ossyria continent zone unlocks</h3>
  <p>Completing this chain effectively serves as a
  <strong>guided tour of Ossyria</strong>:</p>
  <ul>
    <li><strong>El Nath:</strong> snow zone, Master Sgt Fox
      HQ. Post-chain unlocks El Nath as a base.</li>
    <li><strong>Icy Cold Field:</strong> El Nath sub-map.
      L40-45 mob content.</li>
    <li><strong>Orbis:</strong> the sky city you first met
      via <a href="/quests/huckles-magic-ingredients">Huckle's
      quest</a>.</li>
    <li><strong>Cloud Park VI:</strong> Orbis Sky Terrace
      sub-zone. L40-45 sky mob content.</li>
  </ul>

callout: |
  <strong>Do this after L40 job advancement.</strong> Nine
  quests spanning 3 Ossyria zones is 2-4 hours of gameplay
  minimum. The Refined Ingot delivery gate (4 per soldier
  = 12 total) requires either mesos or Blacksmithing
  friends. Total EXP payout (~45K) is roughly 2-3 levels
  at L40, plus the 3 stat potions + Earring scroll payout
  makes this the most-worth-it L40 arc.

relatedGuides:
  - "/quests/huckles-magic-ingredients"
  - "/items/sniper-potion"
  - "/items/dexterity-potion"
  - "/items/speed-potion"
  - "/items/warrior-potion"
  - "/items/magic-potion"
  - "/quests/cursed-doll-collection-chain"

verificationStatus: "closed-test-info"
verificationNote: "All 9 quest IDs (12100-12108), NPCs (Master Sergeant Fox 2020003 El Nath, Staff Sergeant Charlie 2010000 Orbis, Sergeant Bravo 2030001 Icy Cold Field, Corporal Easy 2030002 Cloud Park VI), level (40), per-quest EXP (3,700-5,287) + mesos (819-1,170) + all item rewards (3x Sniper Potion 2002002, 3x Dexterity Potion 2002003, 3x Speed Potion 2002004, random Earring Crit Damage Scroll 2040317/2040318 or Evasion Scroll 2040321/2040322) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. NATO phonetic naming interpretation is editorial."
sourceSlugs:
  - "osmsdataexplorer"

theme: "sleepywood"
lastUpdated: "2026-08-25"
---
