---
questId: "10104"
name: "Pia and the Blue Mushroom"
category: "story"
tagline: "Pia in a teddy bear costume was bullied by a Blue Mushroom on the way to Ellinia. Handle it for her - and roll on a random Hat Accuracy Scroll (Lesser / Intermediate / Greater)."

levelMin: 16
classReq: "Any"

npcName: "Pia"
npcLocation: "Henesys Park (under watchtower)"
npcId: 1012102

chainName: "Standalone"
chainStep: 1
chainLength: 1

description: |
  Find Pia in Henesys Park.

  Under the watchtower in Henesys Park, I saw Pia, who was
  wearing a teddy bear costume. How cute! She told me that
  she ran into a bully Blue Mushroom on her way to Ellinia,
  and now she wants me to teach that Blue Mushroom a lesson.

rewards:
  - type: "exp"
    label: "884 EXP"
    details: "Solid single-quest EXP at L16 - roughly 15-20% of a full level."
  - type: "mesos"
    label: "468 mesos"
  - type: "item"
    label: "1x Random Hat Accuracy Scroll (Lesser / Intermediate / Greater)"
    itemId: 2040001
    details: "RANDOM roll from three tiers: Lesser (2040000, 100% success / +1 ACC), Intermediate (2040001, 60% success / +2 ACC), Greater (2040002, 30% success / +3 ACC). Higher tier = higher risk-reward when scrolling your hat."

editorial: |
  <p>Pia's quest is a rare single-quest scroll drop. Most L15+
  scrolls come from Free Market purchases or later Sleepywood
  quest chains - Pia hands one out at L16, no strings attached
  besides "beat up the Blue Mushroom that scared me."</p>

  <p><strong>Where:</strong> Pia is under the watchtower in
  Henesys Park (same map as Casey the mini-game NPC). Blue
  Mushrooms are on the Ellinia road - one screen east of
  Henesys Park.</p>

  <h3>Scroll tier analysis</h3>
  <p>You get ONE random scroll of the three tiers. Compare:</p>
  <ul>
    <li><strong>Lesser (100% success):</strong> +1 Accuracy
      guaranteed. Safe, boring, useful on low-slot hats.</li>
    <li><strong>Intermediate (60% success):</strong> +2 ACC on
      hit, no bonus on miss. Best EV of the three; commonly
      used on flagship hats.</li>
    <li><strong>Greater (30% success):</strong> +3 ACC on hit,
      DESTROYS the slot on miss. Only use on hats with many
      remaining slots and a plan for the destroy risk.</li>
  </ul>

  <p><strong>Which hat to scroll:</strong> if you're a Bowman
  or Thief, Accuracy is your primary hit-rate stat, so
  scrolling your best hat is meaningful. Warriors and
  Magicians benefit less - they typically have Accuracy in
  spare or don't care. Consider selling to Bowmen/Thieves in
  FM if you're not those classes.</p>

callout: |
  <strong>Save the scroll for your best hat.</strong> At L17
  the flagship hat is <a href="/items/old-wisconsin">Old
  Wisconsin</a> from the Alex chain - 5 slots, headband slot.
  Scrolling Pia's Accuracy scroll onto Old Wisconsin at L17
  is a common play for Bowmen and Thieves.

relatedGuides:
  - "/items/old-wisconsin"
  - "/jobs/bowman"
  - "/jobs/thief"

verificationStatus: "closed-test-info"
verificationNote: "Quest ID (10104), NPC (Pia 1012102), level (16), rewards (884 EXP, 468 mesos, 1 random Hat Accuracy Scroll from three tiers Lesser 2040000 / Intermediate 2040001 / Greater 2040002, all with guaranteed=False flag indicating random roll) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "henesys"
lastUpdated: "2026-08-24"
---
