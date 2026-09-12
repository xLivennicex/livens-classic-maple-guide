---
# ==================== Core metadata ====================
title: "Thief"
tagline: "Fast movement, LUK-based damage, and the game's only true stealth skill. Two branches that play like two different classes."
lastUpdated: "2026-08-22"

# ==================== Card / directory ====================
monogram: "T"
cardDescription: "Fast movement, LUK planning, claws, daggers, and throwing stars."
listOrder: 4

# ==================== Layout ====================
theme: "kerning"
decorations: true

# ==================== Verification ====================
verificationStatus: "closed-test-info"
verificationNote: "First-job skill lists (all six match the v83 baseline exactly - just the class name changed to Rogue in datamine files), skill IDs, and skill icons are CoT 2-verified against the client datamine at osmsdataexplorer.com. Numeric stat values (max levels, DEX-for-advancement quirk, Lucky Seven's LUK-only damage formula, Bandit Steal drop rates) still reflect v83-era baseline pending live Classic World verification once Founder's Access begins on October 6."
sourceSlugs:
  - "ayumilove-v83-thief"
  - "hiddenstreet-v83-database"
  - "osmsdataexplorer"

# ==================== TOC ====================
toc:
  - { href: "#overview", label: "Overview" }
  - { href: "#advancement", label: "How to advance" }
  - { href: "#ap", label: "AP allocation" }
  - { href: "#skills", label: "First job skills" }
  - { href: "#training", label: "Training routes" }
  - { href: "#equipment", label: "Equipment" }
  - { href: "#second-job", label: "Second job branches" }
  - { href: "#faq", label: "FAQ" }

# ==================== Overview ====================
overview:
  identity:
    primaryStat: "LUK (for damage)"
    secondaryStat: "<strong>DEX</strong> - required for job advancement AND basic attacks. The v83 quirk: DEX gates progression, LUK does the damage."
    damageType: "Physical - ranged claw throws (Assassin) OR melee dagger swings (Bandit). Lucky Seven's damage formula is LUK-only, ignoring weapon attack."
    weaponFamilies: "Claws + throwing stars (Assassin branch) OR Daggers (Bandit branch) - locked at 2nd job"
    healthProfile: "<strong>Medium HP, low MP</strong>. Similar profile to Bowman, but with much better active defense via mobility."
    mobilityProfile: "<strong>Highest in the game</strong>. Highest base jump stat + Haste at 2nd job (self and party movement/jump buff) + Dark Sight for invulnerability walk-throughs. Nobody outmaneuvers a Thief."
    playStyle: "Dance around mobs. Assassin snipes from platforms with LUK-crit Lucky Seven; Bandit weaves through packs with Savage Blow + Steal. Both branches revolve around mobility + LUK crits, but the moment-to-moment feel is completely different."
  paragraphs:
    - "Thieves are Classic World's evasion-and-precision archetype: LUK-based damage, high mobility, and the only class with a true invisibility skill. They trade the melee resilience of Warriors and the magical burst of Magicians for speed, positioning tricks, and damage that scales off a single stat purely."
    - "The class has a split personality. First job feels similar for everyone, but second job creates two genuinely different games. <strong>Assassins</strong> throw stars from safety and buff their party's movement speed; <strong>Bandits</strong> stab things at melee range and steal drops as a passive money printer. Pick your character concept before hitting 30 - swapping branches later means rolling a new Thief."
  callout: |
    <strong>Best for:</strong> players who want a stat
    build with a clear identity (LUK all day), enjoy
    either ranged safety (Assassin) or melee burst with
    looting perks (Bandit), or value the party utility of
    Haste at 2nd job.
    <br />
    <strong>Not ideal for:</strong> players who dislike
    thinking about which weapon type to commit to, want
    high raw HP (Warrior), or prefer elemental variety
    (Magician).

# ==================== Advancement ====================
advancement:
  requirements:
    - "Character level <strong>10</strong>"
    - "At least <strong>25 DEX</strong>"
  steps:
    - "From Lith Harbor (arrival point after Maple Island), take the taxi or travel to <strong>Kerning City</strong>, the neon-lit thief quarter on the east side of Victoria Island."
    - "Enter the <em>Thief Hideout</em> - accessed through a hidden entrance in the middle of Kerning City (down a manhole in v83) - and speak with <strong>The Dark Lord</strong>, the Thief job instructor."
    - "Accept the job change. Historically this was a direct conversation with no combat trial - Classic World may reintroduce an advancement quest. See FAQ below."
  followup: "After advancement you gain 1 SP and unlock the first job skill set (listed below)."
  callout: |
    <strong>The DEX-for-advancement quirk.</strong>
    Thieves need 25 DEX to advance, but LUK is their
    damage stat. This trips up every new player. The
    expected v83 approach is to put JUST enough AP into
    DEX to hit 25 (using free level-up AP), and pour
    everything else into LUK from the very first level.
    Overshooting DEX is one of the most common Thief
    build mistakes.

# ==================== AP allocation ====================
apAllocation:
  summary: "<strong>The short version (v83 baseline):</strong> pour points into LUK every level after you hit the 25 DEX advancement gate. DEX beyond that only matters for hit rate against equal-level and higher mobs."
  builds:
    - name: "Pure LUK (\"LUK all day\")"
      description: "After 25 DEX for advancement, every AP into LUK. Maximum damage; hit rate becomes a real problem against same-level+ mobs unless you scroll gear with DEX."
    - name: "DEX = (character level - 1)  [recommended for solo]"
      description: "Keep DEX one below your level for reliable hit rate against equal-level content. Slightly lower damage; substantially more consistent, especially during 20-30 when equipment scrolling is out of reach."
    - name: "Milestone check at L30"
      description: "For pure LUK: 25 DEX (advancement gate), ~140 LUK, 4 STR (starting). For DEX-per-level: ~30 DEX, ~135 LUK. Thieves have the strictest DEX gate of any class (25 DEX for job advancement) - plan the first 5 levels around hitting that number early."
  notes: "The DEX-level rule is the safer default for a first Thief - the pure-LUK build only really shines once you have scrolled equipment with DEX bonuses making up the accuracy deficit. Whether Classic World's hit-rate math preserves this dynamic is one of the values we will verify at launch."
  callout: |
    <strong>Common AP mistakes to avoid:</strong>
    <ul>
      <li><strong>Do NOT invest in STR or INT.</strong>
        Thieves derive zero damage benefit from either. Any
        AP that isn't going into LUK (or DEX up to the level
        rule) is a wasted point.</li>
      <li><strong>Hit the 25 DEX gate ASAP.</strong> Thief
        advancement at level 10 requires exactly 25 DEX. If
        you started dumping AP into LUK from level 1, you
        can't advance until you fix it - burning the AP
        allocation for those levels.</li>
      <li><strong>Assassins care about LUK more than
        anything.</strong> Lucky Seven scales entirely off
        LUK - the weapon's base Attack is irrelevant. Every
        LUK point is a point of damage.</li>
      <li><strong>Don't put AP into HP or MP.</strong> Auto-
        gained on level-up. Thieves have modest HP by design.</li>
    </ul>

# ==================== Skills ====================
skills:
  order: "First job gives you six skills. Unlike the other base classes, <strong>Thief skill priority depends on which second job you plan to pick</strong>. Both paths max Nimble Body for accuracy; the attack skills split cleanly. Decide Assassin vs Bandit BEFORE spending SP."
  entries:
    - name: "Nimble Body"
      skillId: "4000000"
      type: "Passive"
      maxLevel: "20 (v83)"
      summary: "Passive bonus to Weapon Accuracy and Avoidability. The shared foundation for both Assassin and Bandit paths - Thieves live and die by hit rate."
      suggested: "1 point early, then max after your main attack skill (v83 baseline)"
    - name: "Keen Eyes"
      skillId: "4000001"
      type: "Passive"
      maxLevel: "8 (v83)"
      summary: "Passive attack-range extension for throwing weapons. Critical for Assassins (star-throwers); useless for Bandits (melee daggers)."
      suggested: "Assassins: max after Lucky Seven. Bandits: skip entirely."
    - name: "Disorder"
      skillId: "4001000"
      type: "Debuff"
      maxLevel: "20 (v83)"
      summary: "Reduces target mob's Attack and Defense for a short duration. Situational; more useful in early Bandit training (melee range) than Assassin's kite-and-throw playstyle."
      suggested: "1 point utility, or skip"
    - name: "Dark Sight"
      skillId: "4001001"
      type: "Buff"
      maxLevel: "20 (v83)"
      summary: "Turn invisible to mobs. Breaks on attack. Reduces movement speed while active. The signature Thief utility - useful for escapes, positioning, or walking through a crowded map safely."
      suggested: "1 point utility (higher levels reduce the speed penalty, but 1pt is enough for the escape trick)"
    - name: "Double Stab"
      skillId: "4001002"
      type: "Attack"
      maxLevel: "20 (v83)"
      summary: "Two-hit dagger attack. Melee range. The Bandit's core first-job attack; Assassins skip it entirely because they never intend to hold a dagger."
      suggested: "Bandits: MAX FIRST (v83 baseline). Assassins: skip."
    - name: "Lucky Seven"
      skillId: "4001003"
      type: "Attack"
      maxLevel: "20 (v83)"
      summary: "Throws two stars for damage based PURELY on LUK - weapon Attack is ignored. Unique in the game. The Assassin's identity skill and one of the strongest first-job attacks anywhere because it scales off stat rather than gear."
      suggested: "Assassins: MAX FIRST (v83 baseline). Bandits: skip or 1 point utility."
  infoCard:
    eyebrow: "Why Lucky Seven is special"
    heading: "The only weapon-independent attack in the game"
    body: |
      <p>Every other attack skill in MapleStory scales off
      weapon Attack (physical) or weapon Magic ATT (magic).
      Lucky Seven is the exception: its damage formula
      uses <em>only</em> your LUK stat and the star's
      enhancement, ignoring the star's base Attack entirely.</p>
      <p>That's why Assassins can wear a cheap starter star
      and still hit like a truck as long as their LUK is
      high. It's also why Assassins are unusually
      gear-independent through 30 - you're paying for LUK
      bonuses on your armor, not for weapon upgrades. This
      is unique to Lucky Seven; every subsequent Assassin
      attack scales normally.</p>

# ==================== Training routes ====================
training:
  intro: "v83 baseline routes. Classic World map spawns and monster levels may have shifted; verify at Founder's Access. The Kerning City subway system is home turf - most of the early Thief training circuit happens within a two-map radius of the Dark Lord."
  routes:
    - levels: "Levels 1 - 10 (Beginner)"
      where: "Maple Island"
      what: "Snails, Blue Snails, Red Snails"
      note: "Complete the Maple Island story quests, then take the ship to Victoria Island. Aim to hit exactly 25 DEX (not more) before reaching Kerning City - every extra point of DEX is a point of LUK you'll never get back."
    - levels: "Levels 10 - 15"
      where: "Kerning City subway line 1 (Ligators) or the outer Kerning streets (Octopus)"
      what: "Ligators drop meso-per-kill that fund your early star or dagger purchases."
      note: "Get comfortable with your chosen attack rhythm here. Assassins: kite mobs and throw stars from range. Bandits: close, Double Stab, back off."
    - levels: "Levels 15 - 25"
      where: "Kerning City rooftops (Wild Kargos, Jr. Wraiths) or Ant Tunnel entrance (Zombie Mushrooms)"
      what: "Denser mobs, better EXP rates. Wraiths are undead - decent EXP if you can survive them."
      note: "Your main attack (Lucky Seven or Double Stab) should be maxed by 20. Damage-per-hour jumps sharply once it is."
    - levels: "Levels 25 - 30"
      where: "Kerning Party Quest (KPQ) - Thieves are one of the most-requested KPQ classes in v83"
      what: "Fast group EXP, cash equipment rewards, way more efficient than solo grinding at this range."
      note: "Second job advancement quest becomes available at level 30. If you have not fully committed to Assassin or Bandit yet, decide now - the second-job weapon investment starts here."

# ==================== Equipment ====================
equipment:
  intro: "Thief gear prioritizes <strong>LUK</strong> on everything and either <strong>throwing star enhancement</strong> (Assassin) or <strong>Weapon ATT</strong> on a dagger (Bandit). DEX bonuses on gear are valuable too - they let you skip investing AP into DEX beyond the 25 advancement gate."
  weaponsIntro: "<strong>Weapons (defer the big commitment):</strong>"
  weapons:
    - name: "Throwing stars"
      description: "Consumed as ammunition (though a full stack is cheap and lasts a long time). Damage doesn't scale off the star's base Attack for Lucky Seven - just the LUK stat. Commits you to Assassin at 2nd job."
    - name: "Daggers"
      description: "Standard melee weapon. Damage scales normally. Commits you to Bandit at 2nd job."
  weaponsNote: "First-job Thieves can try both, though Lucky Seven's weapon-independent scaling gives Assassins a smoother early-game ramp. Bandits catch up once Double Stab is maxed and dagger drops start showing up."
  armorProgression:
    - name: "Level 1 - 10 (starter):"
      description: "Whatever the beginner shops sell. Prioritize LUK or DEX bonuses in that order."
    - name: "Level 10 - 20 (early Kerning):"
      description: "Basic Thief starter gear from Kerning City shops. Look for drops with LUK bonuses from Ligators and Octopus."
    - name: "Level 17+ (first real hat):"
      description: "<a href=\"/items/old-wisconsin\">Old Wisconsin</a> (+19 PDD, +17 MHP, 7 slots) from <a href=\"/quests/cursed-doll-chain\">Rowen's Cursed Doll Chain</a>. Thieves are as squishy as Bowmen at this level range - the MHP cushion is genuinely useful."
    - name: "Level 18 chain (Alex reconciliation):"
      description: "Run the <a href=\"/quests/alexs-request\">Alex chain</a> for guaranteed <a href=\"/items/weighted-earrings\">Weighted Earrings</a> (L20, +22 MDD, 5 slots). This becomes your LUK scroll target."
    - name: "Level 21+ (KPQ scroll investment):"
      description: "Run <a href=\"/quests/first-time-together\">Kerning Party Quest</a> for <a href=\"/items/earring-luk-scroll-intermediate\">Earring LUK Scrolls (Intermediate)</a> (+2 LUK at 60% success). +10 LUK from a fully-scrolled earring is a direct damage uplift on Lucky Seven - the compounding here is exceptional for Assassins."
    - name: "Level 30 milestone Overall:"
      description: "<a href=\"/items/blue-sauna-robe\">Blue Sauna Robe</a> (Blue for males, Red for females). +1 LUK, +75 PDD, +10 MHP - a durability boost for a class that trades survivability for burst. 10 slots for future LUK scrolls."
    - name: "Level 36+ (Cursed Doll gloves):"
      description: "Run <a href=\"/quests/cursed-doll-chain\">Cursed Doll Chain</a> tier 4 for <a href=\"/items/gloves-attack-scroll-intermediate\">Gloves Attack Scroll (Intermediate)</a>. Bandits get direct WATT scaling on Double Stab; Assassins benefit less (Lucky Seven is LUK-scaled) but still improves the base per-hit damage."
    - name: "Level 20 - 30:"
      description: "Overall gear with LUK bonuses is the target. Blackfist Cloak was a common v83 Thief overall for its cost-to-LUK ratio."
    - name: "Approaching 30:"
      description: "Save mesos for a real second-job weapon - either a proper claw (Assassin) or a good dagger (Bandit). Second-job weapon tiers are meaningful power jumps."
  callout: |
    <strong>Scroll safely.</strong> Ten-percent scrolls
    with LUK boosts destroy gear more often than they
    help at this level range. Sixty and hundred-percent
    scrolls with LUK or DEX bonuses are the beginner-
    friendly picks.

# ==================== Second-job branches ====================
secondJobs:
  intro: "At level 30 you choose one of TWO second-job paths - Thief, like Bowman, has no third branch. Unlike Bowman (where the two branches are weapon-flavor variations of the same playstyle), Thief's branches play <em>radically differently</em>. Pick with intent."
  branches:
    - name: "Assassin"
      subtitleLabel: "Weapon"
      subtitleValue: "Throwing stars (claws)"
      summary: "Ranged, LUK-scaling, Lucky Seven forever. Adds Critical Throw (large crit-chance passive that stacks on Lucky Seven), Claw Booster (attack-speed buff), and Haste (party movement + jump speed - the single most-loved party utility buff in the game)."
      bestFor: "Players who want ranged safety, big number crits, and to be the person every party asks for the movement buff"
      previewSkills:
        - name: "Claw Mastery"
          skillId: "4100000"
          summary: "Passive - min-damage floor for claws. Locks in Assassin identity: throwing-star DPS scales entirely off this + LUK, not weapon attack."
        - name: "Critical Throw"
          skillId: "4100001"
          summary: "THE Assassin passive. Adds a critical-hit chance to every ranged claw attack. Stacks on top of Lucky Seven's LUK-scaling. Turns big yellow crit numbers into your default view."
        - name: "Haste"
          skillId: "4101001"
          summary: "Party buff - adds Movement Speed AND Jump. The single most-requested buff in the game because it makes EVERY player's traversal noticeably better. Being able to cast Haste is a social superpower."
        - name: "Drain"
          skillId: "4101002"
          summary: "Attack - dagger-style hit that returns a percentage of damage dealt as HP. Interesting outlier for a claw-focused class; mostly used against tough elites. Rarely maxed early."
    - name: "Bandit"
      subtitleLabel: "Weapon"
      subtitleValue: "Daggers"
      summary: "Melee, LUK-scaling. Adds Savage Blow (six-hit dagger attack - highest hit-count skill in the game), Dagger Booster, and Steal - a passive that forces additional item drops from mobs. Bandits literally make more mesos per hour than any other second-job class in v83."
      bestFor: "Players who love melee dagger combat, want the game's best mesos-per-hour, and don't mind giving up ranged safety"
      previewSkills:
        - name: "Dagger Mastery"
          skillId: "4200000"
          summary: "Passive - min-damage floor for daggers. Bandit's identity anchor; makes your dagger swings numerically reliable so combat rhythm smooths out."
        - name: "Steal"
          skillId: "4201002"
          summary: "Signature passive. Every hit has a chance to force the mob to drop an EXTRA item on death. Turns Bandit into the game's uncontested mesos-per-hour king."
        - name: "Savage Blow"
          skillId: "4201003"
          summary: "Six-hit dagger flurry. Highest hit-count skill in the game. Because Steal procs per hit, Savage Blow is doubly efficient - you get 6 chances at Steal per cast. Bandits' core attack."
        - name: "Haste"
          skillId: "4201001"
          summary: "Same party movement+jump buff Assassins get. Both Thief branches share it - because being a Thief means being the mobility-buff person no matter which weapon you swing."
  infoCard:
    eyebrow: "Two branches, two games"
    heading: "Assassin and Bandit are barely the same class"
    body: |
      <p><strong>Assassin</strong> throws stars from platform
      above the mobs, never takes a hit, and eventually
      becomes the party's speed-buff dispenser via Haste.
      Their rhythm is kite, throw, kite, throw. Big crit
      numbers, steady safety.</p>
      <p><strong>Bandit</strong> runs into the mob, unloads
      Savage Blow's six hits, and passively steals extra
      drops on every kill. Their rhythm is engage,
      devastate, loot. Highest mesos-per-hour of any 2nd
      job class in v83 - the drop bonus really adds up
      over an hour of training.</p>
      <p>If you love one playstyle, you will find the other
      unbearable. Try to picture yourself playing hour
      fifty before you pick.</p>

# ==================== FAQ ====================
faq:
  - question: "Do I need to do a job advancement quest, or just talk?"
    answer: "<em>Awaiting confirmation.</em> v83 was talk-only with the DEX requirement; some later versions added a \"prove yourself\" trial. Whether Classic World reintroduces the quest will be visible at Founder's Access."
    badge: "awaiting-confirmation"
  - question: "Why DEX for advancement but LUK for damage?"
    answer: "<em>v83 design decision.</em> Wizet gated Thief advancement behind DEX to force players to think about accuracy before committing to a pure-LUK build. It also creates a natural incentive to pick up DEX gear early. Weird from a first-look perspective, but the pattern has held across every MapleStory version. Classic World has not signaled any change."
    badge: "historical-archive"
  - question: "Is pure LUK viable at launch?"
    answer: "<em>Awaiting confirmation.</em> In v83, pure LUK needed scrolled gear with DEX bonuses to hit same-level content reliably. Whether Classic World preserves that math determines whether pure LUK stays viable or DEX-level becomes the universal recommendation."
    badge: "awaiting-confirmation"
  - question: "Assassin or Bandit - which does more damage?"
    answer: "<em>v83 baseline:</em> Bandit's Savage Blow has higher raw sustained DPS on single targets; the six-hit count makes it exceptional against high-HP mobs. Assassin's Lucky Seven + Critical Throw combo has higher <em>peak</em> damage through crits and works from range. Bandits win mesos-per-hour thanks to Steal. Neither is a trap."
    badge: "historical-archive"
  - question: "Is Dark Sight worth leveling past 1?"
    answer: "<em>v83 baseline:</em> Usually no. The movement-speed penalty scales down at higher levels, but 1 point is enough for the standard use case (escape a bad spawn, walk past a mini-boss). Extra SP goes further into damage skills or Nimble Body."
    badge: "historical-archive"
  - question: "Can I re-spec my Assassin/Bandit choice?"
    answer: "<em>Awaiting confirmation.</em> v83 had no free re-spec; SP resets required specific event items or cash-shop purchases. Given how different the two Thief branches feel, this is a bigger deal than it is for Warrior or Magician. Whether Classic World offers a launch-window re-spec is unknown."
    badge: "awaiting-confirmation"
  - question: "Do I need to grind Mark of Beta on this character?"
    answer: "<em>Awaiting confirmation.</em> Mark of Beta details are not public yet. If it is per-character rather than per-account, it will affect early-game choices - see the <a href=\"/launch#mark-of-beta\">Launch Hub Mark of Beta section</a>."
    badge: "awaiting-confirmation"
---
