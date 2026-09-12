---
questId: "10112"
name: "Sparkling Rock Chain (6 quests)"
category: "story"
tagline: "To save Maya, you need Weird Medicine from Teo in Lith Harbor. But Teo needs a Sparkling Rock. Sophia can make one in Perion - but needs Arcon's Blood from Manji, who needs 40 Charm of the Undead. A 6-quest cross-Victoria-Island arc."

levelMin: 21
classReq: "Any"
prerequisiteQuest: "maya-of-henesys"

npcName: "Teo / Sophia / Manji"
npcLocation: "Lith Harbor / Perion Dept Store / Perion"
npcId: 1002001

# Documented as ONE canonical article covering 6 discrete quest
# IDs (10107-10112). This is the definitive Sparkling Rock arc
# reference. Splitting into 6 files would fragment the story
# that Maya, Teo, Sophia, and Manji collectively tell.
chainName: "Sparkling Rock / Save Maya"
chainStep: 7
chainLength: 7

description: |
  In Lith Harbor, I met a heavily bearded crew member named
  Teo. He does have the Weird Medicine, but explained that,
  in order for it to work properly, it needs a Sparkling
  Rock. He told me that he'll hand the medicine over if I
  can bring one.

  What follows is a 6-quest cross-town scavenger hunt
  through Perion, Ant Tunnel, and back to Lith Harbor. By
  the end you deliver Weird Medicine to Maya - and receive
  the Brown Bamboo Hat as thanks.

rewards:
  - type: "exp"
    label: "~13,158 EXP total across all 6 steps"
    details: "Each of the 6 steps awards 2,193 EXP. Full arc: 13,158 EXP. Substantial - roughly a full level at L21."
  - type: "mesos"
    label: "~3,684 mesos total"
  - type: "item"
    label: "30x Blue Potion (Manji steps 3-4)"
    itemId: 2000003
    itemSlug: "blue-potion"
    details: "15 Blue Potions on step 3 (Arcon's Blood?) + 15 more on step 4 (Getting Arcon's Blood). 30 total across the Manji steps."
  - type: "item"
    label: "1x Brown Bamboo Hat (final reward, step 6)"
    itemId: 1002081
    details: "GUARANTEED L20-ish bamboo hat, final chain reward. Themed asian hat aesthetic - Kerning/Perion crossover style."

editorial: |
  <p>The Sparkling Rock chain is Victoria Island's most
  ambitious narrative arc. <strong>6 quests, 4 NPCs
  (Teo/Sophia/Manji + Maya at bookends), 3 towns, ~45-60
  minutes of quest time</strong>. It has more moving parts
  than the <a href="/quests/fossil-research-chain">Fossil
  Research chain</a> AND better character work.</p>

  <h3>The chain in order</h3>
  <ol>
    <li><strong>10107 - Finding Sophia (Teo, Lith Harbor).</strong>
      Teo has Weird Medicine but wants a Sparkling Rock first.
      Sends you to Sophia in Perion Department Store.</li>
    <li><strong>10108 - Making a Sparkling Rock (Sophia, Perion).</strong>
      Sophia's dream is alchemy. To make the Sparkling Rock
      she needs: <strong>30 Squishy Liquids, 30 Leafs, 30
      Octopus Legs, 1 Arcon's Blood</strong>. First three are
      standard mob drops. The last one requires Manji.</li>
    <li><strong>10109 - Arcon's Blood? (Manji, Perion).</strong>
      Manji is cocky and refuses to give up Arcon's Blood for
      free. He sends you to Ant Tunnel to defeat 75 Zombie
      Mushrooms and gather 40 Charm of the Undead. Rewards
      15 Blue Potions on completion.</li>
    <li><strong>10110 - Getting Arcon's Blood (Manji).</strong>
      Turn in the Charms. Manji hands over Arcon's Blood.
      Rewards another 15 Blue Potions. Datamine narrative
      note: "Maybe he isn't the WORST" - Manji character
      development.</li>
    <li><strong>10111 - Making Sparkling Rock (Sophia).</strong>
      Deliver all materials to Sophia. She makes the Sparkling
      Rock and hands it over. Sophia is genuinely surprised
      you pulled it off.</li>
    <li><strong>10112 - Delivering the Weird Medicine (Teo -> Maya).</strong>
      Give Sparkling Rock to Teo in Lith Harbor, receive
      Weird Medicine, deliver to Maya. Reward: Brown Bamboo
      Hat (1002081).</li>
  </ol>

  <h3>What you're hunting (Sophia's material list)</h3>
  <ul>
    <li><strong>30 Squishy Liquids:</strong> from Slime,
      Blue Slime, or similar slime-family mobs. Ellinia forest
      or Kerning subway.</li>
    <li><strong>30 Leaves:</strong> from Stumps and Dark
      Stumps. Perion + Ellinia edges.</li>
    <li><strong>30 Octopus Legs:</strong> from Octopus mobs
      in Kerning subway.</li>
    <li><strong>1 Arcon's Blood:</strong> from Manji, after
      you clear the 75 Zombie Mushroom / 40 Charm of the
      Undead subquest.</li>
    <li><strong>75 Zombie Mushrooms + 40 Charm of the
      Undead:</strong> Ant Tunnel middle sections. Zombie
      Mushrooms are L26 - slightly above the L21 requirement,
      so budget for HP potions.</li>
  </ul>

  <h3>Efficiency notes</h3>
  <ul>
    <li><strong>Batch grind Ant Tunnel.</strong> Zombie
      Mushrooms drop Charm of the Undead ~50%. 75 kills = ~40
      Charms with reasonable luck. Same session yields
      passive EXP for L21-25 leveling.</li>
    <li><strong>Slimes/Leaves/Octopus Legs are cheap.</strong>
      Check Free Market before grinding - Sophia's mat list is
      standard enough that FM stockpilers usually offer bulk
      bundles for under 5,000 mesos total.</li>
    <li><strong>Do BEFORE the Ronnie chain (L41).</strong>
      Ant Tunnel and Zombie Mushrooms feature in later chains
      too; getting familiar now pays off.</li>
  </ul>

  <h3>Character notes (why this chain hits harder)</h3>
  <ul>
    <li><strong>Teo</strong> in Lith Harbor is a "heavily
      bearded crew member" - possibly ex-pirate given the
      harbor setting.</li>
    <li><strong>Sophia</strong> is an aspiring alchemist
      working out of the Perion Department Store. She's the
      only aspiring-professional NPC in Victoria Island who
      isn't a fully-realized master (contrast with the 6
      crafting apprentices).</li>
    <li><strong>Manji</strong> is a genuine antagonist-turned-
      ally. Cocky and arrogant, but follows through on his
      promise. The datamine even flags his character growth.</li>
  </ul>

callout: |
  <strong>Maya's Sparkling Rock arc is the emotional apex of
  Victoria Island questing.</strong> If you've played through
  from Maple Island, saving grown-up Maya is a payoff moment.
  Don't speedrun the dialogue - the writers put real effort
  into this one.

relatedGuides:
  - "/quests/maya-of-henesys"
  - "/quests/mais-training"
  - "/quests/fossil-research-chain"

verificationStatus: "closed-test-info"
verificationNote: "All 6 quest IDs (10107-10112), NPCs (Teo 1002001 Lith Harbor, Sophia 1022100 Perion Dept Store, Manji 1022002 Perion), level (21), per-step EXP (2,193) + mesos (614) + item rewards (Blue Potion 2000003 on Manji steps, Brown Bamboo Hat 1002081 on final step) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "perion"
lastUpdated: "2026-08-24"
---
