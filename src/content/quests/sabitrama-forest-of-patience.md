---
questId: "10510"
name: "Sabitrama's Forest of Patience Chain (2 quests)"
category: "story"
tagline: "Sabitrama - Chrishrama's younger brother - is a Sleepywood herb trader. Two L25 quests: Diet Medicine (random Overall DEF Scroll) and Anti-Aging Medicine (Star Rock, a new gem tier)."

levelMin: 25
classReq: "Any"

npcName: "Sabitrama"
npcLocation: "Sleepywood (in front of the Sleepywood Hotel)"
# Sabitrama is a Classic World-exclusive NPC (Chrishrama's
# brother, matching the Arcforging system). No v83 sprite.
# Marked in docs/npc-id-lookup.md 'Classic World-exclusive' section.

chainName: "Sabitrama's Forest of Patience"
chainStep: 2
chainLength: 2

description: |
  Let's go look for Sabitrama in Sleepywood.

  I met Sabitrama, a medicinal herb trader, in front of the
  Sleepywood Hotel. He appears to be the younger brother of
  Chrishrama. He recently discovered a place that grows the
  last ingredient he needs for his Diet Medicine. Later, he
  found another place - this time for Anti-Aging Medicine.

rewards:
  - type: "exp"
    label: "5,174 EXP total across 2 quests"
  - type: "mesos"
    label: "1,462 mesos total"
  - type: "item"
    label: "1x RANDOM Overall Armor DEF Scroll (Intermediate OR Greater)"
    itemId: 2040501
    details: "RANDOM roll: Overall Armor DEF Scroll: Intermediate (2040501, 60% / +2 DEF) OR Overall Armor DEF Scroll: Greater (2040502, 30% / +3 DEF, destroy on miss). Both scroll Overall armor pieces (full-body outfits like the Sauna Robes)."
  - type: "item"
    label: "1x Star Rock (Anti-Aging Medicine, step 2)"
    itemId: 4020109
    details: "GUARANTEED - Star Rock is a NEW gem tier separate from the 8-gem pool Luke drops. Higher rarity, likely crafting input for Arcforging (Sabitrama's brother Chrishrama is the Arcforging master). Bank this - do NOT sell."

editorial: |
  <p>Sabitrama's Forest of Patience is a <strong>family
  narrative:</strong> Sabitrama is Chrishrama's younger
  brother, and both work medicinal-herb / crafting adjacent
  disciplines out of <strong>Sleepywood</strong>. The
  brothers form a matched pair - Chrishrama does Arcforging
  (scroll crafting), Sabitrama trades the medicinal herbs
  that feed into it.</p>

  <h3>The 2 quests</h3>
  <ol>
    <li><strong>10509 - Sabitrama and the Diet Medicine.</strong>
      Sabitrama discovered the last ingredient for a Diet
      Medicine recipe. Help him gather it. Reward: random
      Overall Armor DEF Scroll.</li>
    <li><strong>10510 - Sabitrama's Anti-Aging Medicine.</strong>
      A second recipe: Anti-Aging Medicine using a different
      set of ingredients. Reward: 1 guaranteed Star Rock
      (4020109).</li>
  </ol>

  <h3>What Star Rock is</h3>
  <p>Star Rock is a <strong>gem tier separate from Luke's
  8-gem pool</strong> (Diamond, Garnet, Amethyst, etc). It
  has its own item ID range (4020109) and is guaranteed at
  Sabitrama's L25 quest - meaning it's a designed reward,
  not a random rare drop.</p>

  <p><strong>Likely uses:</strong>
  <ul>
    <li><strong>Arcforging recipe input</strong> - Chrishrama
      (Sabitrama's brother) practices Arcforging. Star Rock
      is likely a mandatory ingredient for high-tier scroll
      recipes.</li>
    <li><strong>Quest chain prerequisite</strong> - Star Rock
      may unlock further Sleepywood or Forest of Patience
      quests (pending live verification).</li>
    <li><strong>FM resale</strong> - if you're not going the
      Arcforging route, Star Rock will have significant Free
      Market value as a rare crafting material.</li>
  </ul>

  <h3>Overall Armor DEF Scroll analysis</h3>
  <p>Overall armor is the full-body outfit slot (Sauna Robes,
  Adventurer Overalls, etc.). Scrolling DEF onto it:</p>
  <ul>
    <li><strong>Intermediate (60% / +2 DEF):</strong> best EV.</li>
    <li><strong>Greater (30% / +3 DEF, destroy on miss):</strong>
      higher variance. Only use on Overalls with many slots.</li>
  </ul>
  <p>If you rolled the Greater scroll and don't want to risk
  it, FM sell for solid mesos to Warrior players who need
  survivability scaling.</p>

callout: |
  <strong>Chrishrama-Sabitrama family arc:</strong> the two
  brothers are a small piece of worldbuilding most players
  miss. If you've done the
  <a href="/quests/crafting-apprentices-in-need-of-help">Chrishrama
  Arcforging apprentice quest</a>, then meeting Sabitrama
  next hits differently. Family, herbs, scrolls, Sleepywood -
  a whole thematic pocket of Classic World content.

relatedGuides:
  - "/quests/crafting-apprentices-in-need-of-help"
  - "/items/arcforging-kit"
  - "/items/diamond"
  - "/quests/sleepywood-sauna-robe-chain"

verificationStatus: "closed-test-info"
verificationNote: "Both quest IDs (10509, 10510), NPC (Sabitrama - CoT-exclusive, no v83 WZ), level (25), rewards (2,587 EXP + 731 mesos per step, random Overall Armor DEF Scroll 2040501/2040502 on step 1, guaranteed Star Rock 4020109 on step 2) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "sleepywood"
lastUpdated: "2026-08-25"
---
