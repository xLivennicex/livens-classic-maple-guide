---
questId: "10321"
name: "Icarus + Wing the Fairy's Flying Medicine (3 quests)"
category: "story"
tagline: "The Balloon failed. Icarus turns to WING THE FAIRY (misanthropic Ellinia fairy) for magical assistance. Character convergence - the Kerning dreamer meets the fairy hermit. Random reward: 1-of-3 Icarus Capes."

levelMin: 46
classReq: "Any"

npcName: "Icarus / Wing the Fairy"
npcLocation: "Kerning City rooftop / Ellinia"
npcId: 1052106

# Documented as ONE canonical article covering 3 discrete quest
# IDs (10319-10321). Character convergence arc - Icarus's L11
# 'I'm Bored' + L31 'Flight Experiments' arcs finally succeed
# via Wing the Fairy's magic. Natural 3-quest canonical spanning
# 2 NPCs and 2 towns.
chainName: "Icarus's Flight Dream"
chainStep: 7
chainLength: 7

description: |
  I wonder how Icarus is doing with the flying balloon...
  Maybe I should go check up on him in Kerning City.

  Icarus's flying balloon didn't work out, but he still
  dreams of flight. This time he's directing me to Wing the
  Fairy in Ellinia - hoping magical assistance can succeed
  where engineering failed.

rewards:
  - type: "exp"
    label: "18,527 EXP total across 3 quests"
    details: "4,803 (Icarus) + 6,862 (Wing gather) + 6,862 (Wing deliver) = 18,527 EXP. Solid multi-step payout at L46."
  - type: "mesos"
    label: "3,631 mesos total"
  - type: "item"
    label: "25x Blue Potion (Wing ingredient step)"
    itemId: 2000003
    itemSlug: "blue-potion"
  - type: "item"
    label: "RANDOM 1-of-3 Icarus Cape (final step)"
    itemId: 1102001
    details: "RANDOM roll from 3-cape pool: Green Icarus Cape (1102001), Yellow Icarus Cape (1102002), Blue Icarus Cape (1102003). Named capes themed around Icarus's flight dream. Cosmetic color variance; stat profiles likely identical or near-identical."

editorial: |
  <p>Icarus + Wing the Fairy's Flying Medicine is
  <strong>the culminating chapter of Icarus's flight arc</strong>.
  His story has spanned three level tiers:</p>
  <ul>
    <li><strong>L11:</strong>
      <a href="/quests/im-bored-1">I'm Bored (1)</a> - Icarus
      staring at the sky, wanting entertainment.</li>
    <li><strong>L31:</strong>
      <a href="/quests/icarus-flight-experiments">Flight
      Experiments</a> - hang glider fails, balloon fails.</li>
    <li><strong>L46 (this):</strong> Icarus turns to magic.
      Wing the Fairy assists. <em>The Flying Medicine
      works.</em></li>
  </ul>

  <h3>The 3-quest arc</h3>
  <ol>
    <li><strong>10319 - In search of Wing the Fairy
      (Icarus).</strong> Icarus explains: engineering failed,
      magic is next. He asks you to find Wing the Fairy in
      Ellinia.</li>
    <li><strong>10320 - The Ingredients for the Flying
      Medicine (Wing).</strong> Wing REALLY doesn't like
      people. As a whole. The quest text: "How did he and
      Icarus even become friends?" Rewards 25 Blue Potions
      + ingredient gathering.</li>
    <li><strong>10321 - Delivering the Flying Medicine
      (Wing).</strong> The Medicine is ready. Deliver to
      Icarus. Rewards RANDOM Icarus Cape.</li>
  </ol>

  <h3>The Wing / Icarus friendship mystery</h3>
  <p>The datamine EXPLICITLY calls out that Wing hates
  people. So how are Wing and Icarus friends? Classic
  World writers plant this as a lore mystery. Possible
  interpretations:</p>
  <ul>
    <li><strong>Icarus's persistence:</strong> Wing respects
      obsession. Icarus's flight dream never wavers, and
      that consistency might be the only human trait Wing
      values.</li>
    <li><strong>Ancient connection:</strong> Icarus might
      have done Wing a favor years ago (before your quest
      arc). Off-screen backstory.</li>
    <li><strong>Fairy magic curiosity:</strong> Icarus's
      flight obsession aligns with fairy aesthetics
      (fairies fly naturally). Wing might see Icarus as
      "human trying to become fairy-like" and find that
      compelling.</li>
  </ul>
  <p>The game leaves it ambiguous, which is the correct
  narrative choice.</p>

  <h3>The 3 Icarus Capes</h3>
  <table>
    <thead>
      <tr><th>Cape</th><th>ID</th><th>Color</th></tr>
    </thead>
    <tbody>
      <tr><td>Green Icarus Cape</td><td>1102001</td><td>Green</td></tr>
      <tr><td>Yellow Icarus Cape</td><td>1102002</td><td>Yellow</td></tr>
      <tr><td>Blue Icarus Cape</td><td>1102003</td><td>Blue</td></tr>
    </tbody>
  </table>
  <p>Random roll gives you one of three. Cosmetic color
  variance - stat profiles are likely identical (pending
  live verification of individual stats). If you want a
  specific color, expect Free Market trading with other
  players who rolled differently.</p>

  <h3>Cape slot economy</h3>
  <p>At L46, this Icarus Cape upgrade path is:</p>
  <ul>
    <li>L25:
      <a href="/items/old-raggedy-cape">Old Raggedy Cape</a>
      (Jane Doe reward)</li>
    <li>L46: Icarus Cape (this chain)</li>
    <li>L60+: various Ossyria capes (pending future
      documentation)</li>
  </ul>

callout: |
  <strong>The narrative payoff is the reward.</strong> Even
  if the Icarus Cape stats don't beat your current cape,
  do this chain for the story. Icarus's dream succeeds
  through friendship + magic - one of the most heartwarming
  arcs in Classic MapleStory.

relatedGuides:
  - "/quests/im-bored-1"
  - "/quests/im-bored-2"
  - "/quests/icarus-flight-experiments"
  - "/quests/wing-the-fairys-homework"

verificationStatus: "closed-test-info"
verificationNote: "All 3 quest IDs (10319-10321), NPCs (Icarus 1052106 Kerning rooftop, Wing the Fairy 1032106 Ellinia), level (46), per-quest EXP (4,803/6,862/6,862) + mesos (941/1,345/1,345) + all item rewards (25x Blue Potion 2000003 on step 2, RANDOM Icarus Cape pool 1102001/1102002/1102003 on step 3) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

theme: "kerning"
lastUpdated: "2026-08-25"
---
