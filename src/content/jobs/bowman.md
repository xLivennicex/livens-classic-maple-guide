---
# ==================== Core metadata ====================
title: "Bowman"
tagline: "Ranged physical damage from the safe end of the map. High accuracy, high mobility, and the only class that fights bosses without ever standing next to them."
lastUpdated: "2026-08-22"

# ==================== Card / directory ====================
monogram: "B"
cardDescription: "Ranged positioning, equipment choices, and precise attacks."
listOrder: 3

# ==================== Layout ====================
theme: "henesys"
decorations: true

# ==================== Verification ====================
verificationStatus: "closed-test-info"
verificationNote: "First-job skill lists, skill IDs, and skill icons are CoT 2-verified against the client datamine at osmsdataexplorer.com - which is how we caught that Blessing of Amazon was dropped and Power Knockback was added. Numeric stat values (max levels, crit multiplier, damage numbers) still reflect v83-era baseline pending live Classic World verification once Founder's Access begins on October 6."
sourceSlugs:
  - "ayumilove-v83-bowman"
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
    primaryStat: "DEX"
    secondaryStat: "STR (minimum required to equip bow tier - do NOT overinvest)"
    damageType: "Physical ranged - arrows (Hunter/Bow) or bolts (Crossbowman/Crossbow)"
    weaponFamilies: "Bows (Hunter branch) OR Crossbows (Crossbowman branch) - locked at 2nd job"
    healthProfile: "<strong>Medium HP, low MP</strong>. You survive by NOT getting hit, not by tanking hits."
    mobilityProfile: "<strong>Medium</strong> - no dedicated mobility skill until much later. Bowman mobility IS range: shoot from platforms mobs can't reach."
    playStyle: "Positioning is everything. Every extra pixel of range is one more free hit before contact. Ammo economy matters until Soul Arrow at 2nd job (30) eliminates arrow costs entirely."
  paragraphs:
    - "Bowmen are Classic World's ranged physical archetype: DEX-based damage, extended attack range, and the unique privilege of killing things from across the screen. They trade the melee resilience of Warriors and the magical burst of Magicians for positional safety - a Bowman who plays their range correctly takes vastly less damage than any other class."
    - "The class rewards awareness. Damage scales primarily off DEX and weapon choice; effective damage-per-hour scales off how well you kite mobs and how efficiently you position for Arrow Bomb or Iron Arrow at second job. Bowmen are not the highest-DPS class, but they are consistently among the safest - and safety translates to fewer potion mesos spent and more time actually training."
  callout: |
    <strong>Best for:</strong> players who like ranged
    combat, want to boss safely, or enjoy positional
    gameplay (kiting, jump-shooting, staying just outside
    threat range).
    <br />
    <strong>Not ideal for:</strong> players who want
    melee immediacy (Warrior), magical crowd control
    (Magician), or the highest-mobility assassination feel
    (Thief).

# ==================== Advancement ====================
advancement:
  requirements:
    - "Character level <strong>10</strong>"
    - "At least <strong>25 DEX</strong>"
  steps:
    - "From Lith Harbor (arrival point after Maple Island), take the taxi or travel to <strong>Henesys</strong>, the archer town on Victoria Island."
    - "Enter the <em>Bowman's Instructional School</em> on the west side of Henesys and speak with <strong>Athena Pierce</strong>, the Bowman job instructor."
    - "Accept the job change. Historically this was a direct conversation with no combat trial - Classic World may reintroduce an advancement quest. See FAQ below."
  followup: "After advancement you gain 1 SP and unlock the first job skill set (listed below). You'll also want a real bow (or crossbow - see the note below) as soon as you can afford one; Beginner slingshots do not scale."
  callout: |
    <strong>Weapon choice is deferrable until 2nd job.</strong>
    First-job skills work on both bows and crossbows, so
    you can experiment with either weapon type through
    levels 10-30. The permanent commitment happens at
    level 30 when you pick Hunter (bow) or Crossbowman
    (crossbow).

# ==================== AP allocation ====================
apAllocation:
  summary: "<strong>The short version (v83 baseline):</strong> pour points into DEX every level. STR only exists to meet equipment level requirements - and even that is optional at low levels."
  builds:
    - name: "Pure DEX (\"DEXless never\") [recommended]"
      description: "Every AP into DEX. Maximum damage; Bowmen already have strong innate accuracy from DEX so hit rate rarely becomes a problem."
    - name: "STR = weapon requirement"
      description: "Keep just enough STR to wear the next weapon tier as it unlocks. Some v83 bows required small STR amounts (usually 5-15). Slightly lower damage; allows earlier access to specific weapon tiers."
    - name: "Milestone check at L30"
      description: "For pure DEX: ~150 DEX, 4 STR (starting). For DEX-with-STR-buffer: ~135 DEX, ~30 STR. Bowmen have the simplest AP math of any class - DEX good, everything else bad."
  notes: "Pure DEX is the standard v83 recommendation for a first Bowman. STR-based equipment thresholds mostly matter for min-max players chasing specific bow upgrades. Whether Classic World preserves the same requirement math is one of the values we will verify at launch."
  callout: |
    <strong>Common AP mistakes to avoid:</strong>
    <ul>
      <li><strong>Do NOT invest in INT or LUK.</strong> Bowmen
        do not benefit from either. Ignore any "hybrid"
        advice you find in old forum threads - those were
        experimental builds, not the recommendation.</li>
      <li><strong>Don't put AP into HP or MP.</strong> Both
        grow automatically on level-up. Bowmen have modest HP
        by design - the class philosophy is "don't get hit,"
        not "tank the hit."</li>
      <li><strong>Watch weapon requirements before locking in
        pure DEX.</strong> If you're eyeing a specific bow or
        crossbow with a STR requirement, budget the AP.</li>
      <li><strong>Reset scrolls exist.</strong> If you
        over-invested in STR early expecting a specific weapon,
        v83 sold AP Reset scrolls. Classic World's plan for
        these is TBD.</li>
    </ul>

# ==================== Skills ====================
skills:
  order: "<strong>CoT 2 update:</strong> the classic v83 build advice needs revising. CoT 2 <em>dropped Blessing of Amazon entirely</em> and replaced it with <em>Power Knockback</em>, a crowd-control AoE that always crits. Revised recommended order: <strong>1 point in Arrow Blow</strong> so you have an attack, then MAX <strong>Double Shot</strong> (pure damage winner), then MAX <strong>Critical Shot</strong> (damage multiplier), then evaluate Power Knockback based on your training style - grinders love it, boss hunters skip it. The Eye of Amazon and Focus remain 1-point utility."
  entries:
    - name: "Power Knockback"
      skillId: "3001003"
      type: "Attack"
      maxLevel: "15 (CoT 2 verified)"
      summary: "<strong>New in CoT 2 - replaces Blessing of Amazon.</strong> Swings the bow widely to push multiple enemies far back. This attack ALWAYS crits, and higher skill levels increase the number of mobs pushed per swing. A genuine mob-training utility, especially on maps where kite-and-shoot beats stand-and-deliver."
      suggested: "Max after Double Shot + Critical Shot if you train on grouped mobs; skip for boss-focused builds"
    - name: "Critical Shot"
      skillId: "3000000"
      type: "Passive"
      maxLevel: "30 (v83)"
      summary: "Chance for every ranged attack to critically hit for +50% damage. THE Bowman damage passive - compounds with every attack you'll ever make."
      suggested: "Max after Double Shot (v83 baseline)"
    - name: "The Eye of Amazon"
      skillId: "3000001"
      type: "Passive"
      maxLevel: "8 (v83)"
      summary: "Passive attack-range extension. Small effect but Bowmen live and die by range - every extra pixel is one more hit before mobs close."
      suggested: "1 point utility, or skip if SP is tight"
    - name: "Focus"
      skillId: "3001000"
      type: "Buff"
      maxLevel: "20 (v83)"
      summary: "Short-term buff to Accuracy and Avoidability. Situational - useful against high-avoid bosses; unnecessary against most training mobs."
      suggested: "1 point utility or skip"
    - name: "Arrow Blow"
      skillId: "3001001"
      type: "Attack"
      maxLevel: "20 (v83)"
      summary: "Single-target ranged attack. Higher damage-per-hit than Double Shot but only one arrow - lower total damage per cast once Double Shot is leveled."
      suggested: "1 point for early training, then leave (v83 baseline)"
    - name: "Double Shot"
      skillId: "3001002"
      type: "Attack"
      maxLevel: "20 (v83)"
      summary: "Two-arrow ranged attack. Higher total damage output than Arrow Blow once maxed and the workhorse skill for the entire first job."
      suggested: "MAX FIRST after 1 point in Arrow Blow (v83 baseline)"
  infoCard:
    eyebrow: "Why Double Shot before Critical Shot?"
    heading: "The v83 damage math"
    body: |
      <p>Double Shot fires two arrows per cast, so it doubles
      the number of chances Critical Shot has to trigger.
      Maxing Double Shot first means every subsequent
      Critical Shot point you buy is worth twice as much on
      a Double Shot cast as it would be on Arrow Blow.</p>
      <p>Skipping Arrow Blow beyond the 1 free point is fine.
      Its damage-per-MP is worse than Double Shot's, and by
      the time you have both skills to compare, Double Shot
      is already carrying every fight.</p>

# ==================== Training routes ====================
training:
  intro: "v83 baseline routes. Classic World map spawns and monster levels may have shifted; verify at Founder's Access. Henesys is home turf - most of the early Bowman training circuit happens without ever leaving the town's outer maps."
  routes:
    - levels: "Levels 1 - 10 (Beginner)"
      where: "Maple Island"
      what: "Snails, Blue Snails, Red Snails"
      note: "Complete the Maple Island story quests, then take the ship to Victoria Island. Reach 25 DEX before hitting Henesys - that's roughly every AP into DEX from level 2 onward."
    - levels: "Levels 10 - 15"
      where: "Henesys Pig Beach or the outer Henesys hunting grounds"
      what: "Pigs, Ribbon Pigs, Orange Mushrooms"
      note: "Learn Arrow Blow rhythm here. Bowmen benefit enormously from platform positioning - shoot from a ledge above the mobs and they can't retaliate."
    - levels: "Levels 15 - 25"
      where: "Henesys Hunting Ground I/II (Green + Horny Mushrooms), Kerning City subway (Ligators), or Ellinia trees (Bubblings)"
      what: "Whichever has fewer players competing for spawns."
      note: "Double Shot should be maxed by 20. Once it is, damage-per-hour jumps noticeably - this is usually when Bowman players stop feeling weak."
    - levels: "Levels 25 - 30"
      where: "Ant Tunnel (Zombie Mushrooms, Horny Mushrooms) or Kerning Party Quest if you can find a group"
      what: "Denser mobs = more Double Shot hits per minute."
      note: "Second job advancement quest becomes available at level 30. Decide Hunter vs Crossbowman BEFORE 30 so you can start pricing the right weapon in the market on the way there."

# ==================== Equipment ====================
equipment:
  intro: "Bowman gear prioritizes <strong>DEX</strong> on everything and <strong>Weapon ATT</strong> on the bow or crossbow. Weapon Def is a secondary consideration - your positioning does most of the damage mitigation work."
  weaponsIntro: "<strong>Weapons (defer the big commitment):</strong>"
  weapons:
    - name: "Bow"
      description: "Faster attack speed, lower per-hit damage. Feels smoother in continuous combat. Commits you to Hunter at 2nd job."
    - name: "Crossbow"
      description: "Slower attack speed, higher per-hit damage, more visible crits. Commits you to Crossbowman at 2nd job."
  weaponsNote: "First-job Bowmen can and should try both - swap between them cheaply from vendor shops through levels 10-25. Around level 25, pick the one that felt better and start saving mesos for the second-job upgrade."
  armorProgression:
    - name: "Level 1 - 10 (starter):"
      description: "Whatever the beginner shops sell. Prioritize any DEX bonuses."
    - name: "Level 10 - 20 (early Henesys):"
      description: "Green Bowman starter set from Henesys equipment shops - the traditional archer look. Cheap and DEX-focused."
    - name: "Level 17+ (first real hat):"
      description: "<a href=\"/items/old-wisconsin\">Old Wisconsin</a> (+19 PDD, +17 MHP, 7 slots) from <a href=\"/quests/cursed-doll-chain\">Rowen's Cursed Doll Chain</a>. Bowmen are squishy - the MHP bonus keeps you alive when a mob closes the distance."
    - name: "Level 18 chain (Alex reconciliation):"
      description: "Run the <a href=\"/quests/alexs-request\">Alex chain</a> for guaranteed <a href=\"/items/weighted-earrings\">Weighted Earrings</a> (L20, +22 MDD, 5 slots). Perfect base for your DEX scroll investment."
    - name: "Level 21+ (KPQ scroll investment):"
      description: "Run <a href=\"/quests/first-time-together\">Kerning Party Quest</a> for <a href=\"/items/earring-dex-scroll-intermediate\">Earring DEX Scrolls (Intermediate)</a> (+2 DEX at 60% success). +10 DEX from a fully-scrolled earring is a direct damage uplift on every arrow."
    - name: "Level 27 hat option:"
      description: "<a href=\"/items/ribboned-pig-headband\">Ribboned Pig Headband</a> at L27 (+26 PDD, +7 MMP, 7 slots) from <a href=\"/quests/estelles-special-sauce\">Estelle's Special Sauce</a> - PDD > MHP tradeoff vs Old Wisconsin."
    - name: "Level 30 milestone Overall:"
      description: "<a href=\"/items/blue-sauna-robe\">Blue Sauna Robe</a> (Blue for males, Red for females). +1 DEX bumps every arrow's damage; 10 slots means room for many Overall DEX scrolls to compound."
    - name: "Level 36+ (Cursed Doll gloves):"
      description: "Run <a href=\"/quests/cursed-doll-chain\">Cursed Doll Chain</a> tier 4 for <a href=\"/items/gloves-attack-scroll-intermediate\">Gloves Attack Scroll (Intermediate)</a> (+2 WATT at 60% success). Weapon Attack scales directly on ranged skills - one of the largest gloves-slot upgrades available before Zakum tier."
    - name: "Approaching 30:"
      description: "Save mesos for a real second-job weapon in your chosen weapon type. Second-job weapon tiers are meaningful power jumps."
  callout: |
    <strong>Scroll safely.</strong> Ten-percent scrolls
    with DEX bonuses look tempting but destroy gear more
    often than they help at this level range. Sixty and
    hundred-percent scrolls with DEX or Weapon ATT are
    the beginner-friendly choices.

# ==================== Second-job branches ====================
secondJobs:
  intro: "At level 30 you choose one of TWO second-job paths - Bowman is the only base class without a third branch. The choice is essentially \"which weapon do I want to hold forever\" because your entire skill kit builds around that weapon type from here on."
  branches:
    - name: "Hunter"
      subtitleLabel: "Specialty"
      subtitleValue: "Bow specialist"
      summary: "Faster attack speed, lower per-shot damage, more consistent DPS. Arrow Bomb is a bomb-arrow AoE that hits multiple stacked mobs - the Hunter's main crowd-clear tool. Power Knock-Back gives crowd control against approaching mobs."
      bestFor: "Players who like sustained fire, prefer clearing packs, and value consistent damage over big-number bursts"
      previewSkills:
        - name: "Bow Mastery"
          skillId: "3100000"
          summary: "Passive - raises the min-damage floor of your bow. Locks in Hunter identity: with Bow Mastery you get NOTHING out of a Crossbow, so this SP is your commitment."
        - name: "Arrow Bomb: Bow"
          skillId: "3101004"
          summary: "Signature attack. Fires a bomb-arrow that explodes on impact, damaging every mob near the target AND stunning them briefly. Hunter's main crowd-clear tool."
        - name: "Soul Arrow: Bow"
          skillId: "3101003"
          summary: "Buff - lets you attack for a duration WITHOUT consuming arrows. Fixes the classic Bowman gold-sink problem: no more paying 30 mesos per 100 arrows during long grinds."
        - name: "Bow Booster"
          skillId: "3101001"
          summary: "Buff - speeds up your attack animation by 2 speed tiers. Costs MP per cast. If Soul Arrow removes your arrow cost, Bow Booster removes your rhythm limit. Both are core."
    - name: "Crossbowman"
      subtitleLabel: "Specialty"
      subtitleValue: "Crossbow specialist"
      summary: "Slower attack speed, higher per-shot damage, bigger crits. Iron Arrow pierces through lined-up mobs - great on maps where enemies come at you single-file. Same Power Knock-Back utility as Hunter."
      bestFor: "Players who like burst damage, big crit numbers, and don't mind slightly slower rhythm - especially if you plan to boss more than you grind"
      previewSkills:
        - name: "Crossbow Mastery"
          skillId: "3200000"
          summary: "Passive - min-damage floor for crossbows. Same identity-lock as Hunter's Bow Mastery: this SP commits you to crossbows for the rest of the character."
        - name: "Iron Arrow: Crossbow"
          skillId: "3201004"
          summary: "Signature attack. Fires a piercing bolt that passes through multiple lined-up enemies. Absolutely dominant on 1-D maps where mobs approach in single file (Zombies, Skeletons, Firebomb)."
        - name: "Soul Arrow: Crossbow"
          skillId: "3201003"
          summary: "Buff - attack without consuming bolts for a duration. Same mechanic as Hunter's Soul Arrow but for crossbows. Ends the ammo-economy annoyance permanently once maxed."
        - name: "Crossbow Booster"
          skillId: "3201001"
          summary: "Buff - 2 tiers of attack-speed acceleration. Especially valuable on Crossbowman since your base swing is the slowest of any ranged class - Booster shifts you into 'reasonable rhythm' territory."
  infoCard:
    eyebrow: "Two branches, not three"
    heading: "Why Bowman is different"
    body: |
      <p>Warriors get three second-job branches (Fighter, Page,
      Spearman). Magicians get three (F/P, I/L, Cleric).
      Thieves get two. <strong>Bowmen also get two</strong>
      - and unlike Thieves (Assassin vs Bandit is a totally
      different playstyle), Hunter and Crossbowman play
      almost identically. The real question is weapon feel,
      not role.</p>
      <p>If you can't decide, most v83 guides slightly favored
      Hunter for training (Arrow Bomb's AoE clears grouped
      mobs faster) and slightly favored Crossbowman for
      bossing (bigger single-shot numbers). Neither is a
      trap - they're both fine picks.</p>

# ==================== FAQ ====================
faq:
  - question: "Do I need to do a job advancement quest, or just talk?"
    answer: "<em>Awaiting confirmation.</em> v83 was talk-only with the DEX requirement; some later versions added a \"prove yourself\" trial. Whether Classic World reintroduces the quest will be visible at Founder's Access."
    badge: "awaiting-confirmation"
  - question: "Is pure DEX viable at launch?"
    answer: "<em>Awaiting confirmation.</em> In v83 pure DEX was standard - Bowmen already get enough accuracy from their weapons and skills that STR was rarely worth the investment. Classic World's weapon-requirement math will determine whether this holds."
    badge: "awaiting-confirmation"
  - question: "Bow or Crossbow - can I switch later?"
    answer: "<em>v83 baseline:</em> No. Once you pick Hunter or Crossbowman at level 30, your masteries, boosters, and third-job upgrades all commit to that weapon type. You can technically <em>equip</em> the other weapon but you lose the mastery bonuses, making it a substantial DPS loss. If you regret the choice, roll a new Bowman."
    badge: "historical-archive"
  - question: "Why only two branches for Bowman?"
    answer: "<em>v83 design decision.</em> Wizet split the Bowman kit by weapon type (bow vs crossbow) rather than by role. Warrior and Magician branches differentiate by role (tank/DPS/support, or element). Bowman just picks a weapon. Classic World has not signaled any change to this structure."
    badge: "historical-archive"
  - question: "Is Critical Shot as good as it sounds?"
    answer: "<em>v83 baseline:</em> Yes. A maxed Critical Shot triggers on a large percentage of ranged attacks for +50% damage. Combined with Double Shot's two-arrow output, it is the largest single damage multiplier available to a first-job Bowman - which is why it's the second skill to max after Double Shot itself."
    badge: "historical-archive"
  - question: "Do I need to grind Mark of Beta on this character?"
    answer: "<em>Awaiting confirmation.</em> Mark of Beta details are not public yet. If it is per-character rather than per-account, it will affect early-game choices - see the <a href=\"/launch#mark-of-beta\">Launch Hub Mark of Beta section</a>."
    badge: "awaiting-confirmation"
---
