---
questId: "10311"
name: "Proof of Companionship"
category: "party-quest"
tagline: "Lakelis wants proof you can party. Complete First Time Together (KPQ) and return - roll on a random Earring Stat Scroll (STR, DEX, INT, or LUK). Flagship KPQ tie-in quest."

levelMin: 21
classReq: "Any"
prerequisiteQuest: "first-time-together"

npcName: "Lakelis"
npcLocation: "Kerning City (KPQ entrance)"
npcId: 9020000

chainName: "Standalone (post-KPQ)"
chainStep: 1
chainLength: 1

description: |
  It seems that Lakelis in Kerning City is looking for a
  party to take on a party quest that requires multiple
  adventurers to work together.

  Lakelis in Kerning City asked me to challenge the party
  quest First Time Together and defeat King Slime. I need
  to bring back proof of the accomplishment.

rewards:
  - type: "exp"
    label: "2,193 EXP"
  - type: "mesos"
    label: "614 mesos"
  - type: "item"
    label: "1x Random Earring Stat Scroll (Intermediate)"
    itemId: 2040301
    itemSlug: "earring-str-scroll-intermediate"
    details: "RANDOM roll from 4 tiers - Earring STR Scroll: Intermediate (2040301), DEX Scroll: Intermediate (2040305), INT Scroll: Intermediate (2040309), LUK Scroll: Intermediate (2040313). 60% success rate, +2 to matched stat. Every base class benefits from this pool - you always want your class's primary stat scroll."

editorial: |
  <p>Proof of Companionship is Lakelis's follow-up to the
  <a href="/quests/first-time-together">First Time Together
  (KPQ)</a> completion. Running KPQ once earns you the scroll
  drop opportunity here - a genuine post-PQ progression
  reward, uncommon in Victoria Island.</p>

  <p><strong>Prerequisite:</strong> complete
  <a href="/quests/first-time-together">First Time Together</a>
  at least once. Bring Lakelis proof (the datamine text
  suggests an item drop from the King Slime kill, but the
  exact proof item isn't specified - likely auto-flagged in
  the quest log on completion).</p>

  <h3>The scroll pool</h3>
  <p>Random 1-of-4 roll:</p>
  <ul>
    <li><strong><a href="/items/earring-str-scroll-intermediate">Earring
      STR Scroll (Intermediate)</a>:</strong> 60% success,
      +2 STR on hit. Warrior primary stat scroll.</li>
    <li><strong><a href="/items/earring-dex-scroll-intermediate">Earring
      DEX Scroll (Intermediate)</a>:</strong> 60% success, +2
      DEX. Bowman primary + Thief secondary + Warrior
      secondary.</li>
    <li><strong><a href="/items/earring-int-scroll-intermediate">Earring
      INT Scroll (Intermediate)</a>:</strong> 60% success, +2
      INT. Magician primary.</li>
    <li><strong><a href="/items/earring-luk-scroll-intermediate">Earring
      LUK Scroll (Intermediate)</a>:</strong> 60% success, +2
      LUK. Thief primary + Magician secondary.</li>
  </ul>

  <p><strong>Best-case scenario:</strong> you roll YOUR class's
  primary stat scroll and land it on your best earrings (see
  <a href="/items/leaf-earrings">Leaf Earrings</a> or vendor
  earrings). +2 primary stat is meaningful at L21.</p>

  <p><strong>Wrong-class roll:</strong> the scroll has FM
  resale value even if you can't use it. Warriors selling
  INT/LUK scrolls to Magicians/Thieves is a common Kerning
  FM trade.</p>

  <h3>Re-runnable?</h3>
  <p>Lakelis quests are historically re-runnable in v83
  MapleStory (KPQ + related rewards). CoT's version pending
  live verification - if repeatable, this is one of the best
  L21+ farming opportunities for scroll income.</p>

callout: |
  <strong>KPQ is worth running MULTIPLE times.</strong>
  Even without Proof of Companionship, KPQ awards experience
  + participation rewards. Adding Lakelis's scroll drop makes
  organized KPQ groups a genuinely lucrative L21-25 activity.
  Party up in Kerning FM.

relatedGuides:
  - "/quests/first-time-together"
  - "/items/earring-str-scroll-intermediate"
  - "/items/earring-dex-scroll-intermediate"
  - "/items/earring-int-scroll-intermediate"
  - "/items/earring-luk-scroll-intermediate"

verificationStatus: "closed-test-info"
verificationNote: "Quest ID (10311), NPC (Lakelis 9020000, same NPC as KPQ operator), level (21), rewards (2,193 EXP, 614 mesos, 1 random earring stat scroll from 4-tier pool: STR 2040301, DEX 2040305, INT 2040309, LUK 2040313, all guaranteed=False flagging random roll) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "kerning"
lastUpdated: "2026-08-24"
---
