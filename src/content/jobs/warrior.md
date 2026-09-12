---
# ==================== Core metadata ====================
title: "Warrior"
tagline: "High HP, high defense, melee physical damage. The class that survives your mistakes."
lastUpdated: "2026-08-22"

# ==================== Card / directory ====================
monogram: "W"
cardDescription: "Durable melee combat, weapon planning, and steady progression."
listOrder: 1

# ==================== Layout ====================
theme: "perion"
decorations: true

# ==================== Verification ====================
verificationStatus: "closed-test-info"
verificationNote: "First-job skill lists, skill IDs, and skill icons are CoT 2-verified against the client datamine at osmsdataexplorer.com. Numeric stat values (max levels, damage, AP requirements) still reflect the v83-era baseline pending live Classic World verification once Founder's Access begins on October 6."
sourceSlugs:
  - "ayumilove-v83-warrior"
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
    primaryStat: "STR"
    secondaryStat: "DEX (accuracy floor - keep at level - 1)"
    damageType: "Physical melee"
    weaponFamilies: "Swords (1H + 2H), Axes (1H + 2H), Blunt Weapons (1H + 2H), Spears, Polearms"
    healthProfile: "<strong>Highest HP</strong> in the game - Improved MaxHP Increase compounds every level"
    mobilityProfile: "<strong>Low</strong> at first job. Rush at second job (level 30) is the fix - a ground-dash attack that closes distance instantly"
    playStyle: "Walk into the mob, stay there. Attack, watch HP, potion when needed. Damage scales with STR + weapon; survival scales with HP + defense. Zero mana-management, no positional dance."
  paragraphs:
    - "Warriors are Classic World's melee tank archetype: high HP, high defense, and STR-based physical damage. They trade the ranged safety of Bowmen and the magical utility of Magicians for the ability to walk into a mob and stay there."
    - "The class rewards steady play. Damage scales primarily off STR and weapon choice; survival scales off HP investment and defensive equipment. There is no mana-management minigame, no positional dance - the moment-to-moment gameplay is \"attack, watch HP, use a potion when needed.\""
  callout: |
    <strong>Best for:</strong> players who want to survive
    mistakes, prefer simple decision trees, or plan to party
    often and appreciate having the meat shield.
    <br />
    <strong>Not ideal for:</strong> players who want ranged
    safety (Bowman), magical burst (Magician), or high-mobility
    assassination gameplay (Thief).

# ==================== Advancement ====================
advancement:
  requirements:
    - "Character level <strong>10</strong>"
    - "At least <strong>35 STR</strong>"
  steps:
    - "From Lith Harbor (arrival point after Maple Island), take the taxi or travel to <strong>Perion</strong> in Ossyria."
    - "Enter the <em>Chief's Residence</em> in Perion and speak with <strong>Dances with Balrog</strong>, the Warrior job instructor."
    - "Accept the job change. Historically this was a direct conversation with no combat trial - Classic World may reintroduce an advancement quest. See FAQ below."
  followup: "After advancement you gain 1 SP and unlock the first job skill set (listed below)."

# ==================== AP allocation ====================
apAllocation:
  summary: "<strong>The short version (v83 baseline):</strong> pour points into STR every level. DEX only exists to keep your hit rate acceptable. You get 5 AP per level starting at level 2 - by level 30 (second job) you've allocated 25 (starting) + 140 (from levels) = ~165 AP total."
  builds:
    - name: "Pure STR (glass cannon)"
      description: "Every AP into STR. Maximum damage output; you will miss more often, especially on same-level or higher mobs. Popular in party-heavy playstyles where a Cleric can buff your accuracy."
    - name: "DEX = (character level - 1)  [recommended for solo]"
      description: "Keep DEX one below your level for reliable hit rate. Slightly lower damage; substantially more consistent. This is what most v83 guides recommended for first-time Warriors."
    - name: "Milestone check at L30"
      description: "For the DEX-per-level build: ~135 STR, ~30 DEX. For pure STR: ~165 STR, 25 DEX (starting). Either way, you should also have accumulated enough STR to equip your second-job weapon by advancement day."
  notes: "The DEX-level rule is the more forgiving choice for a first character and the recommendation most v83 guides made. Whether the hit-rate formula still behaves this way in Classic World is one of the values we will verify at launch."
  callout: |
    <strong>Common AP mistakes to avoid:</strong>
    <ul>
      <li><strong>Don't put AP into HP or MP.</strong> These
        stats grow automatically on level-up and are boosted by
        passive skills (Improved MaxHP Increase on Warriors).
        AP spent on HP is AP wasted.</li>
      <li><strong>Don't spread thin.</strong> Warriors do NOT
        want stats in INT or LUK - ever. These stats do
        literally nothing for you.</li>
      <li><strong>Check equip requirements before dumping AP.</strong>
        Some Warrior weapons and armor require specific STR
        + DEX floors. If you're targeting a Level 30 axe with
        a 90-STR requirement, plan your leveling AP to hit
        that number by level 30.</li>
      <li><strong>AP resets exist but cost mesos or NX.</strong>
        The v83-era AP Reset scrolls could be purchased for
        mesos in-game. Classic World's economy for these is
        TBD - plan your build assuming resets are expensive.</li>
    </ul>

# ==================== Skills ====================
skills:
  order: "<strong>CoT 2 update:</strong> first job now gives you SIX skills, not the five old v83 guides list - CoT 2 added <em>Precise Strikes</em>, a passive Accuracy + Critical Rate boost. The recommended v83 order still applies for the original five: <strong>1 point in Improved HP Recovery,</strong> then max Improved MaxHP Increase, then max Power Strike, then max Slash Blast, then Iron Body with anything left over. Slot Precise Strikes at 1-point utility once you're at 30, or skip it entirely if you're committed to a min-max build."
  entries:
    - name: "Improved Max HP Recovery"
      skillId: "1000000"
      type: "Passive"
      maxLevel: "16 (v83)"
      summary: "Faster natural HP regeneration over time."
      suggested: "1 point (prerequisite for other passives)"
    - name: "Improved Max HP Increase"
      skillId: "1000001"
      type: "Passive"
      maxLevel: "10 (v83)"
      summary: "Bonus HP gained per level-up. Compounds with every level, so investing early pays for the rest of the character's life."
      suggested: "Max out first (v83 baseline)"
    - name: "Precise Strikes"
      skillId: "1000002"
      type: "Passive"
      maxLevel: "15 (CoT 2 verified)"
      summary: "<strong>New in CoT 2.</strong> Repeated practice with your weapon increases Accuracy and Critical Rate. A passive quality-of-life boost - Accuracy helps you actually connect with same-level or higher mobs, and Crit is genuinely rare on Warriors."
      suggested: "1 point utility, or fully skip in favor of the classic v83 damage-first build"
    - name: "Iron Body"
      skillId: "1001000"
      type: "Buff"
      maxLevel: "20 (v83)"
      summary: "Temporary boost to Weapon Defense."
      suggested: "Skip early or 1-point utility; damage skills come first"
    - name: "Power Strike"
      skillId: "1001001"
      type: "Attack"
      maxLevel: "20 (v83)"
      summary: "Single strong hit. Higher damage-per-point than Slash Blast against single targets."
      suggested: "Max after HP passive (v83 baseline)"
    - name: "Slash Blast"
      skillId: "1001002"
      type: "Attack"
      maxLevel: "20 (v83)"
      summary: "Short-range AoE hit. The AoE pick once you start training on grouped mobs."
      suggested: "Max after Power Strike (v83 baseline)"

# ==================== Training routes ====================
training:
  intro: "v83 baseline routes. Classic World map spawns and monster levels may have shifted; verify at Founder's Access."
  routes:
    - levels: "Levels 1 - 10 (Beginner)"
      where: "Maple Island"
      what: "Snails, Blue Snails, Red Snails"
      note: "Complete the Maple Island story quests, then take the ship to Victoria Island. Reach 35 STR before hitting Perion."
    - levels: "Levels 10 - 15"
      where: "Henesys area or Perion outskirts"
      what: "Orange Mushrooms, Green Snails, Ribbon Pigs"
      note: "Get comfortable with Power Strike here. Party quests are usually low priority at this range."
    - levels: "Levels 15 - 25"
      where: "Perion (Stumps, Axe Stumps), Kerning City (Ligators, Octopus), or Ellinia (Green Trixters)"
      what: "Whichever has fewer players competing for spawns."
      note: "This is where Slash Blast starts pulling ahead if you find grouped mobs."
    - levels: "Levels 25 - 30"
      where: "Perion Excavation Site (Fire Boars) or Ant Tunnel entrance (Zombie Mushrooms)"
      what: "Denser mobs, higher EXP-per-kill."
      note: "Second job advancement quest becomes available at level 30. Save some mesos for the second-job weapon."

# ==================== Equipment ====================
equipment:
  intro: "Warrior gear is the least specialized of the four classes: you want raw Weapon ATT on your weapon, and Weapon Def with STR/DEX bonuses on everything else."
  armorProgression:
    - name: "Level 1 - 10 (starter):"
      description: "Whatever the beginner shops sell. Warriors can use most weapon categories, so pick whichever your starting mesos allow. Basic <a href=\"/items/sword\">Sword</a> from vendor is fine."
    - name: "Level 10 - 20 (early Perion):"
      description: "A basic sword or axe from Perion's weapon shop. Look for drops from Stumps."
    - name: "Level 17+ (first real hat):"
      description: "<a href=\"/items/old-wisconsin\">Old Wisconsin</a> (+19 PDD, +17 MHP, 7 slots) - reward from <a href=\"/quests/cursed-doll-chain\">Rowen's Cursed Doll Chain</a>. The MHP bonus is exactly what a tank wants. Note: 10 Fame required to wear, so if you can't equip it immediately, bank it until you accumulate Fame."
    - name: "Level 18 chain (Alex reconciliation):"
      description: "Run <a href=\"/quests/alexs-request\">Alex's Request</a> through <a href=\"/quests/mothers-gold-watch\">Mother's Gold Watch</a> for guaranteed <a href=\"/items/weighted-earrings\">Weighted Earrings</a> (L20, +22 MDD, 5 slots). This is your KPQ scroll target."
    - name: "Level 20 - 27 (mushroom hats):"
      description: "Zombie's Lost Gold Tooth (sword) or a Fusion Axe were common v83 upgrades. Also consider <a href=\"/items/ribboned-pig-headband\">Ribboned Pig Headband</a> at L27 (+26 PDD, +7 MMP, 7 slots) from <a href=\"/quests/estelles-special-sauce\">Estelle's Special Sauce</a>."
    - name: "Level 21+ (KPQ scroll investment):"
      description: "Start running <a href=\"/quests/first-time-together\">Kerning Party Quest</a> for <a href=\"/items/earring-str-scroll-intermediate\">Earring STR Scrolls (Intermediate)</a> (+2 STR at 60% success). Apply to your Weighted Earrings from the Alex chain."
    - name: "Level 30 milestone Overall:"
      description: "<a href=\"/items/blue-sauna-robe\">Blue Sauna Robe</a> (Blue for males, Red for females) - +1 STR/DEX/INT/LUK, +75 PDD, +10 MHP, +10 MMP, 10 slots. Payoff of the <a href=\"/quests/sleepywood-sauna-robe-chain\">Sleepywood chain</a>. The +75 PDD is best-in-class at L30 for a universal Overall."
    - name: "Approaching 30 (second-job weapon):"
      description: "Save mesos for the second-job weapon you have already chosen. Second-job weapons are a large power jump."
  callout: |
    <strong>Scroll safely.</strong> Ten-percent scrolls with
    stat boosts read tempting but usually destroy your gear at
    this level range. Sixty and hundred-percent scrolls are the
    beginner-friendly choices. Save the risky rolls for gear
    you're prepared to replace.

# ==================== Second-job branches ====================
secondJobs:
  intro: "At level 30 you choose one of three second-job paths. All are viable; the pick shapes what you do for the next 40+ levels."
  branches:
    - name: "Fighter"
      subtitleLabel: "Weapon"
      subtitleValue: "Sword or Axe"
      summary: "Highest sustained single-target damage in v83. Party utility via Rage (+ATT buff). Straightforward, damage-first playstyle."
      bestFor: "Players who want pure DPS and a simple decision tree"
      previewSkills:
        - name: "Sword Mastery / Axe Mastery"
          skillId: "1100000"
          summary: "Passive - dramatically raises the min-damage floor of your weapon type so hits stop feeling random. Pick the mastery matching the weapon you actually plan to use; the other is wasted SP."
        - name: "Rage"
          skillId: "1101004"
          summary: "Party buff - adds Weapon Attack to yourself AND up to 5 nearby allies. Fighter's iconic contribution; guarantees you're invited to every party from level 30 onward."
        - name: "Rush"
          skillId: "1101005"
          summary: "Ground-dash attack that shoves multiple mobs. Fixes the Warrior mobility problem in one skill - you no longer chase, you commute."
        - name: "Final Attack: Sword / Axe"
          skillId: "1101000"
          summary: "Passive proc - your normal swing has a chance to trigger a follow-up hit. Small DPS uplift, but consistent, and stacks with every other damage buff you get later."
    - name: "Page"
      subtitleLabel: "Weapon"
      subtitleValue: "Sword or Blunt Weapon (BW)"
      summary: "Utility and control. Threaten debuffs mob attack; strong element-based follow-up skills at 3rd job. Historically the least DPS-focused of the three."
      bestFor: "Players who value party utility and lower damage-taken over raw output"
      previewSkills:
        - name: "Sword Mastery / Blunt Weapon Mastery"
          skillId: "1200000"
          summary: "Passive - the min-damage floor for the weapon you picked. Same as Fighter mechanic; pick the one matching your actual weapon."
        - name: "Threaten"
          skillId: "1201004"
          summary: "Debuff - reduces the Weapon Attack AND Weapon Defense of nearby mobs. Page's defining active. Turns dangerous packs into merely inconvenient ones."
        - name: "Rush"
          skillId: "1201005"
          summary: "Same ground-dash as Fighter's - Warrior mobility fix. Especially valuable on Page since your kit is more about controlling ground than dealing damage."
        - name: "Sword Booster / BW Booster"
          skillId: "1201002"
          summary: "Buff - speeds up your attack animation by 2 speed tiers. Costs a small amount of MP per cast. Effectively 30-50% more DPS while active. Non-negotiable buff."
    - name: "Spearman"
      subtitleLabel: "Weapon"
      subtitleValue: "Spear or Polearm"
      summary: "AoE-focused. Iron Will (party Weapon Def buff). Later unlocks Hyper Body (+HP/MP for the party) which is a core group-content buff."
      bestFor: "Players who plan to party a lot and want to bring buffs everyone loves"
      previewSkills:
        - name: "Spear Mastery / Polearm Mastery"
          skillId: "1300000"
          summary: "Passive - min-damage floor for your chosen polearm weapon. Polearm scales more consistently vs single targets; Spear had better historical numbers vs bosses in v83."
        - name: "Iron Will"
          skillId: "1301004"
          summary: "Party buff - adds Weapon Defense AND Magic Defense to allies. Spearman's iconic party contribution. Not damage, but every group appreciates fewer deaths."
        - name: "Rush"
          skillId: "1301005"
          summary: "Ground-dash mobility. Even more valuable on Spearman because your polearms are slow-swinging - closing distance faster means more time spent hitting things."
        - name: "Final Attack: Spear / Polearm"
          skillId: "1301000"
          summary: "Passive follow-up hit chance. Meshes especially well with AoE polearm swings - one Final Attack can catch a whole pack you're standing in."

# ==================== FAQ ====================
faq:
  - question: "Do I need to do a job advancement quest, or just talk?"
    answer: "<em>Awaiting confirmation.</em> v83 was talk-only; some later versions added a \"prove yourself\" combat trial. Which one Classic World uses will be visible at Founder's Access."
    badge: "awaiting-confirmation"
  - question: "Is pure STR still viable at launch?"
    answer: "<em>Awaiting confirmation.</em> Depends on the hit-rate formula. In v83 pure STR was playable but painful. If Classic World keeps the same math, DEX = (level - 1) stays the safer general recommendation."
    badge: "awaiting-confirmation"
  - question: "Which second job does the most damage?"
    answer: "<em>v83 baseline:</em> Fighter had the highest sustained single-target output; Spearman won on AoE; Page had the best party utility but the lowest raw DPS. Classic World may rebalance any of these."
    badge: "historical-archive"
  - question: "Can I change my mind at second job?"
    answer: "No. Second job is a one-time choice per character. If you want to try another branch, you make a new Warrior."
  - question: "Do I need to grind Mark of Beta on this character?"
    answer: "<em>Awaiting confirmation.</em> Mark of Beta details are not public yet. If it is per-character rather than per-account, it will affect early-game choices - see the <a href=\"/launch#mark-of-beta\">Launch Hub Mark of Beta section</a>."
    badge: "awaiting-confirmation"
---
