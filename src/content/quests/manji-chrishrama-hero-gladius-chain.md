---
questId: "10404"
name: "Manji + Chrishrama's Hero's Gladius Chain (3 quests)"
category: "story"
tagline: "L50 EPIC. Manji entrusts you with his Old Gladius. Chrishrama - its ORIGINAL CREATOR - reawakens it into the legendary Hero's Gladius. Guaranteed reward: Hero's Gladius 1H sword + Skull Earrings."

levelMin: 50
classReq: "Any"

npcName: "Manji / Chrishrama"
npcLocation: "Perion / Sleepywood"
npcId: 1022002

# Documented as ONE canonical article covering 3 discrete quest
# IDs (10402-10404). Cross-NPC narrative arc: Manji introduces
# the Old Gladius, Chrishrama reveals he forged it originally,
# Chrishrama reawakens it. Natural 3-quest canonical.
chainName: "Hero's Gladius"
chainStep: 3
chainLength: 3

description: |
  Find Manji in Perion.

  I visited Manji again, whom I'd first met in Perion when
  making the medicine for Maya of Henesys. Surprised at how
  much I'd grown, Manji entrusted me with his Old Gladius -
  a sword he no longer uses. He directed me to Chrishrama
  in Sleepywood to reawaken it.

  Chrishrama, revealed to be the sword's ORIGINAL CREATOR,
  needs specific materials to restore the Old Gladius to
  its Hero's Gladius form.

rewards:
  - type: "exp"
    label: "23,961 EXP total across 3 quests"
    details: "7,987 EXP per quest. Substantial at L50 - roughly a level per step."
  - type: "mesos"
    label: "4,386 mesos total"
  - type: "item"
    label: "30x Blue Potion (Chrishrama step 2)"
    itemId: 2000003
    itemSlug: "blue-potion"
  - type: "item"
    label: "1x Hero's Gladius (Chrishrama final step)"
    itemId: 1302014
    details: "GUARANTEED - Hero's Gladius (1302014) is a named 1H Sword. Warrior mid-endgame weapon. The 'Hero' naming references the Maple Story hero mythology - one of the most narratively-loaded weapons in Victoria Island."
  - type: "item"
    label: "1x Skull Earrings (Chrishrama final step)"
    itemId: 1032013
    details: "GUARANTEED - Skull Earrings (1032013) are premium accessory earrings. Named piece, likely with substantial stat profile. Perfect complement to Hero's Gladius for a Warrior loadout."

editorial: |
  <p>The Manji-Chrishrama Hero's Gladius chain is
  <strong>Victoria Island's most emotionally-loaded L50
  quest arc</strong>. Two NPCs you've met before at
  earlier level tiers converge on a single revelation:
  Chrishrama forged Manji's Old Gladius. The two masters
  have history that predates you by decades.</p>

  <h3>The 3-quest arc</h3>
  <ol>
    <li><strong>10402 - Old Gladius (Manji, Perion).</strong>
      Manji recognizes how much you've grown since first
      meeting during the Maya medicine chain. He entrusts
      you with his Old Gladius - a sword he no longer
      wields. Directs you to Chrishrama in Sleepywood.</li>
    <li><strong>10403 - Reawakening the Gladius (Chrishrama,
      Sleepywood).</strong> Chrishrama reveals he was the
      Old Gladius's original creator. He needs specific
      materials to reawaken its true form. Rewards 30
      Blue Potions.</li>
    <li><strong>10404 - Hero's Gladius (Chrishrama).</strong>
      With materials gathered, Chrishrama transforms the
      Old Gladius into the Hero's Gladius.
      <strong>Guaranteed rewards: Hero's Gladius + Skull
      Earrings.</strong></li>
  </ol>

  <h3>Character web reveal</h3>
  <p>This chain retroactively upgrades the significance of
  earlier quests:</p>
  <ul>
    <li><strong>Manji</strong> is Perion's Warrior job
      instructor. His Old Gladius was his ADVENTURING
      weapon before he settled into teaching. Handing it to
      you is a passing-of-the-torch gesture.</li>
    <li><strong>Chrishrama</strong> - previously known as the
      <a href="/quests/crafting-masters-graduation">Arcforging
      master</a> in Sleepywood - is retroactively revealed
      as an ANCIENT SMITH. He forged legendary weapons in
      his youth. His current Arcforging profession is a
      quieter continuation of that craft.</li>
    <li><strong>The connection:</strong> Manji and Chrishrama
      are old colleagues from an adventuring era. When Manji
      trusts YOU with the Old Gladius, he's continuing a
      cycle Chrishrama started decades ago.</li>
  </ul>

  <h3>Hero's Gladius stat analysis</h3>
  <p>Hero's Gladius (1302014) is a <strong>named 1H sword</strong>
  in the Warrior weapon pool. Named weapons in MapleStory
  typically:</p>
  <ul>
    <li>Have higher base attack than tier-equivalent unnamed
      weapons</li>
    <li>Have unique visual sprites (Hero's Gladius likely has
      distinctive coloring)</li>
    <li>Cannot be traded / bound to character (typical of
      quest-reward named items)</li>
    <li>Serve as the primary weapon through L50-60 progression</li>
  </ul>

  <h3>Skull Earrings context</h3>
  <p>Skull Earrings (1032013) are premium earring accessories
  themed around the Warrior aesthetic. Combined with Hero's
  Gladius, they form a matched Warrior L50 kit. Non-Warrior
  classes can also equip earrings, so Skull Earrings retain
  value even for Bowman/Magician/Thief players (potentially
  FM-tradeable if not bound).</p>

callout: |
  <strong>Priority L50 quest for Warriors.</strong> Guaranteed
  named weapon + guaranteed named earrings + 24K EXP + 30
  Blue Potions is an exceptional payout. If you're a
  Warrior at L50, this chain is BEFORE
  <a href="/quests/master-sergeant-fox-military-chain">Master
  Sgt Fox's L40 chain</a> in priority - even if you've
  outleveled it.

relatedGuides:
  - "/quests/crafting-masters-graduation"
  - "/quests/crafting-apprentices-in-need-of-help"
  - "/quests/mais-training"
  - "/items/arcforging-kit"

verificationStatus: "closed-test-info"
verificationNote: "All 3 quest IDs (10402-10404), NPCs (Manji 1022002 Perion, Chrishrama 80023 Sleepywood - Crafting Apprentice special ID), level (50), per-quest EXP (7,987) + mesos (1,462) + all item rewards (30x Blue Potion 2000003 on step 2, Hero's Gladius 1302014 + Skull Earrings 1032013 both guaranteed on step 3) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Manji-Chrishrama shared history is interpretive editorial based on Chrishrama's dialogue revealing him as the sword's creator."
sourceSlugs:
  - "osmsdataexplorer"

theme: "sleepywood"
lastUpdated: "2026-08-25"
---
