---
name: "Sniper Potion"
wzId: 2002002
category: "consumable"
subcategory: "Stat Buff (Accuracy)"
tagline: "Increases Accuracy +5 for 10 minutes. The Bowman-focused stat buff - guaranteed from Master Sgt Fox's Charlie sub-chain. First quest-source for Accuracy potions."

levelReq: 0
jobReq: "Any"

editorial: |
  <p>Sniper Potion is a <strong>10-minute Accuracy buff</strong>.
  +5 ACC is significant for classes that miss a lot -
  primarily Bowmen shooting at high-Avoidability mobs, and
  Thieves attempting Lucky Seven crits.</p>

  <h3>Stat analysis</h3>
  <ul>
    <li><strong>+5 Accuracy (ACC):</strong> flat additive.
      Directly reduces miss chance against evasive mobs.</li>
    <li><strong>10-minute duration:</strong> matches all
      other stat potions in the pantheon.</li>
    <li><strong>250 mesos vendor price:</strong> same as
      Warrior / Magic / Dexterity / Speed Potions.</li>
  </ul>

  <h3>The Stat Potion Pantheon (all now documented)</h3>
  <table>
    <thead>
      <tr><th>Potion</th><th>Buff</th><th>Best For</th></tr>
    </thead>
    <tbody>
      <tr><td><a href="/items/warrior-potion">Warrior Potion</a></td>
          <td>+10 PAD</td><td>Warriors / Bowmen / Thieves</td></tr>
      <tr><td><a href="/items/magic-potion">Magic Potion</a></td>
          <td>+10 MAD</td><td>Magicians</td></tr>
      <tr><td><strong>Sniper Potion (this)</strong></td>
          <td>+5 ACC</td><td>Bowmen / Thieves</td></tr>
      <tr><td><a href="/items/dexterity-potion">Dexterity Potion</a></td>
          <td>+5 EVA</td><td>Thieves / Bowmen</td></tr>
      <tr><td><a href="/items/speed-potion">Speed Potion</a></td>
          <td>+8 SPD</td><td>All classes</td></tr>
    </tbody>
  </table>

  <h3>Who benefits most</h3>
  <ul>
    <li><strong>Bowmen (primary):</strong> the name says it.
      Snipers are Bowmen. Accuracy scaling matters more for
      Bowmen than any other class - their ranged attacks
      have to LAND to deal damage.</li>
    <li><strong>Thieves:</strong> Lucky Seven throwing stars
      and Double Stab both check accuracy against target
      Avoidability. Sniper Potion smooths out crit chains.</li>
    <li><strong>Under-leveled combat scenarios:</strong>
      fighting mobs 5+ levels above you causes accuracy
      penalties. Sniper Potion offsets that.</li>
  </ul>

  <h3>Where it comes from</h3>
  <ul>
    <li><strong>Quest reward:</strong>
      <a href="/quests/master-sergeant-fox-military-chain">Master
      Sgt Fox's Charlie sub-chain (12102)</a> awards 3x
      Sniper Potion guaranteed. Best free source.</li>
    <li><strong>NPC purchase:</strong> various weapon shops
      sell Sniper Potion for 250 mesos each.</li>
    <li><strong>Mob drops:</strong> uncommon from L30-45
      mobs.</li>
  </ul>

callout: |
  <strong>Stack with hit-scan classes.</strong> Sniper Potion
  doesn't cooldown-conflict with Warrior/Magic Potions.
  Bowmen should layer Warrior Potion (+10 PAD) + Sniper
  Potion (+5 ACC) simultaneously - PAD scales the damage,
  ACC ensures it lands.

relatedGuides:
  - "/items/warrior-potion"
  - "/items/magic-potion"
  - "/items/dexterity-potion"
  - "/items/speed-potion"
  - "/quests/master-sergeant-fox-military-chain"
  - "/jobs/bowman"

verificationStatus: "closed-test-info"
verificationNote: "Item ID (2002002), name, category (Consumable), NPC price (250 mesos), stats (+5 ACC for 10 minutes = 600000 ms), and in-game description ('Increases Accuracy. Accuracy +5 for 10 min.') all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Sprite from MeowDB."
sourceSlugs:
  - "osmsdataexplorer"

theme: "sleepywood"
lastUpdated: "2026-08-25"
---
