---
questId: "80000"
name: "'Mar' the Fairy and the Water of Life"
category: "unique-reward"
tagline: "Utility quest - Mar the Ellinia fairy REVIVES YOUR DEAD PET using the Water of Life. No level requirement. The go-to for anyone whose pet has expired. CoT-exclusive naming with a v83-derived mechanic."

levelMin: 1
classReq: "Any"

npcName: "Mar the Fairy"
npcLocation: "Ellinia"

chainName: "Standalone (Utility)"
chainStep: 1
chainLength: 1

description: |
  I met a fairy in Ellinia that was busily studying the
  magic of life. Her name was Mar, and she took a look at
  the lifeless doll that was once my pet for me. She can
  bring it back to life - if I bring her the necessary
  ingredients.

  This is a UTILITY quest - accessible at any level,
  primarily used by players whose pets have "died" (in
  MapleStory, pets have hunger/happiness meters and
  eventually expire).

rewards:
  - type: "exp"
    label: "None documented (utility quest)"
    details: "The reward is your pet's revival, not EXP or mesos. Datamine shows no EXP/meso rewards - the entire value is the pet's second life."
  - type: "item"
    label: "Pet Revival (Water of Life applied to your dead pet)"
    details: "Mar uses the Water of Life to revive your lifeless pet doll. Post-revival, the pet resumes its normal hunger/happiness cycle. This is the ONLY documented CoT method for pet revival - no alternative NPC or item."

editorial: |
  <p>Mar the Fairy is <strong>Classic MapleStory's pet
  revival NPC</strong>. Pets in MapleStory follow a hunger
  / happiness cycle. Ignore them too long and they
  "die" - become lifeless dolls in your inventory. Mar's
  the fairy who brings them back.</p>

  <h3>Why the "L0" level requirement</h3>
  <p>Utility quests like Mar's don't have level gates -
  pet death can happen at any character level, so revival
  needs to be accessible at any level. The datamine shows
  <code>level_min: 0</code> (or no level requirement) to
  signal universal accessibility.</p>

  <h3>Where Mar is</h3>
  <p>Ellinia - the mage town in the treetops. Mar is one
  of the fairy NPCs on the tree platforms. Distinct from:</p>
  <ul>
    <li><a href="/quests/arwen-and-the-glass-shoe">Arwen
      the Fairy</a> (glass shoe quest, trinket obsession)</li>
    <li><a href="/quests/wing-the-fairys-homework">Wing the
      Fairy</a> (misanthropic, Icarus collaborator)</li>
    <li><a href="/quests/cursed-doll-collection-chain">Rowen
      the Fairy</a> (Cursed Doll collector)</li>
  </ul>
  <p>All 4 fairies live in Ellinia but have distinct
  personalities and quest specialties. Mar's specialty is
  <strong>life magic</strong> - the most emotionally-loaded
  fairy discipline.</p>

  <h3>The Water of Life mechanic</h3>
  <p>The Water of Life is a rare consumable ingredient.
  You need to obtain a Water of Life to bring Mar - she
  applies it to your dead pet. Sources of Water of Life:</p>
  <ul>
    <li><strong>Rare mob drops:</strong> various L30-50
      mobs occasionally drop it</li>
    <li><strong>Cash Shop:</strong> in traditional
      MapleStory, Water of Life was Cash Shop premium
      item. CoT's Free-to-Play mission suggests this may
      be in-game only.</li>
    <li><strong>Quest reward:</strong> may drop as random
      reward from Sleepywood or Forgotten Hollow chains
      (pending live verification).</li>
  </ul>

  <h3>Pet system context</h3>
  <p>Pets in MapleStory:</p>
  <ul>
    <li>Follow you around the map (cosmetic + minor QoL)</li>
    <li>Can auto-loot with a Pet Loot skill (Cash Shop)</li>
    <li>Have hunger/happiness meters that decay over time</li>
    <li>"Die" if neglected - become lifeless dolls in
      inventory</li>
    <li>Can be revived ONCE per character (or multiple
      times with Water of Life)</li>
  </ul>

callout: |
  <strong>Bookmark this quest.</strong> You won't need Mar
  until your pet actually dies (weeks/months of play). But
  when it happens, remembering "the fairy in Ellinia who
  revives pets" is a lifesaver. Don't sell your dead pet -
  bring it to Mar.

relatedGuides:
  - "/quests/wing-the-fairys-homework"
  - "/quests/arwen-and-the-glass-shoe"
  - "/quests/cursed-doll-collection-chain"

verificationStatus: "closed-test-info"
verificationNote: "Quest ID (80000), NPC (Mar the Fairy - Ellinia, CoT-exclusive naming variant of the pet-revival fairy tradition, WZ ID pending verification), level (unset - treated as universal utility), no EXP/meso rewards documented in datamine, all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. The pet revival mechanic is inferred from MapleStory v83 tradition and the quest description explicitly mentioning 'lifeless doll' + 'magic of life'."
sourceSlugs:
  - "osmsdataexplorer"

theme: "ellinia"
lastUpdated: "2026-08-26"
---
