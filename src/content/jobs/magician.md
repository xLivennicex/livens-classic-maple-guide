---
# ==================== Core metadata ====================
title: "Magician"
tagline: "Low HP, high MP, ranged magical damage. The class that trades survival for power - until Magic Guard changes everything."
lastUpdated: "2026-08-22"

# ==================== Card / directory ====================
monogram: "M"
cardDescription: "Early advancement, MP management, and elemental skill paths."
listOrder: 2

# ==================== Layout ====================
theme: "ellinia"
decorations: true

# ==================== Verification ====================
verificationStatus: "closed-test-info"
verificationNote: "First-job skill lists (all six match the v83 baseline), skill IDs, and skill icons are CoT 2-verified against the client datamine at osmsdataexplorer.com. Numeric stat values (max levels, INT requirement, Magic Guard's damage-to-MP ratio, advancement level) still reflect v83-era baseline pending live Classic World verification once Founder's Access begins on October 6."
sourceSlugs:
  - "ayumilove-v83-magician"
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
    primaryStat: "INT"
    secondaryStat: "LUK (magic accuracy - keep at 3 + level or so, depending on target level)"
    damageType: "Magical elemental - Fire/Poison, Ice/Lightning, or Holy after 2nd job"
    weaponFamilies: "Wands, Staves (staves give more Magic Attack; wands are lighter/cheaper)"
    healthProfile: "<strong>Lowest HP</strong> in the game, <strong>highest MP</strong> by a wide margin. Magic Guard converts damage-to-MP so MP effectively IS your HP pool."
    mobilityProfile: "<strong>Medium</strong> at first job. Teleport at second job (level 30) makes it high - blink through mob packs and skip most terrain."
    playStyle: "Cast, kite, manage MP. Magic Guard means MP is your effective health bar; drink an MP potion and you're back at full 'HP'. Elemental matchups matter: no class is more punished by picking the wrong element for a boss."
  paragraphs:
    - "Magicians are Classic World's ranged magical archetype: low HP, high MP, INT-based magical damage, and unique survival mechanics that rewrite the \"glass cannon\" trope. They trade the melee durability of Warriors and the physical range of Bowmen for spells that hit hard, scale with intelligence, and can be sustained by Mana potions instead of Health."
    - "The class has a distinctive learning curve. Levels 1 through 7 are the roughest in the game - Magicians advance later than Warriors in some metrics and have the lowest starting HP. But at level 8, first job unlocks <strong>Magic Guard</strong>, and Magician survivability suddenly becomes competitive with any class in the game."
  callout: |
    <strong>Best for:</strong> players who enjoy resource
    management (MP is your health once Magic Guard is up),
    want elemental variety, or plan to eventually specialize
    into party support (Cleric branch).
    <br />
    <strong>Not ideal for:</strong> players who dislike
    potion-heavy play early on, want melee combat feel
    (Warrior), or want the highest possible mobility
    (Thief).

# ==================== Advancement ====================
advancement:
  requirements:
    - "Character level <strong>8</strong> (earlier than the other three classes)"
    - "At least <strong>20 INT</strong>"
  steps:
    - "From Lith Harbor (arrival point after Maple Island), take the taxi or travel east to <strong>Ellinia</strong>, the treetop city."
    - "Enter the <em>Magic Library</em> at the top of the tree and speak with <strong>Grendel the Really Old</strong>, the Magician job instructor."
    - "Accept the job change. In v83 this was a direct conversation with no combat trial. Classic World may reintroduce an advancement quest - see FAQ."
  followup: "After advancement you gain 1 SP and unlock the first job skill set (listed below)."
  callout: |
    <strong>Timing note:</strong> Because Magicians can
    advance at level 8 versus the level-10 requirement for
    the other three classes, the early game feels shorter.
    If Classic World keeps this rule, expect to be casting
    spells while your Warrior friends are still throwing
    Maple Island snails.

# ==================== AP allocation ====================
apAllocation:
  summary: "<strong>The short version (v83 baseline):</strong> pour points into INT every level. LUK only exists to keep your magic hit rate acceptable."
  builds:
    - name: "Pure INT (\"INT-only\")"
      description: "Every AP into INT. Maximum magical damage; you will miss more often on same-level or higher mobs, and hit rate on bosses may suffer."
    - name: "LUK = (character level - 3)  [recommended for solo]"
      description: "Keep LUK three below your level for reliable hit rate. Slightly lower damage; noticeably more consistent, especially against higher-level content."
    - name: "Milestone check at L30"
      description: "For the LUK-3 build: ~140 INT, ~27 LUK. For pure INT: ~165 INT, 4 LUK (starting). Note that Magicians start with 4 INT + 4 LUK (not 4 STR + 4 DEX like other classes), so allocation math starts from a different baseline."
  notes: "The LUK-level rule is the more forgiving choice for a first character and the recommendation most v83 guides made. Whether the magic hit-rate formula behaves this way in Classic World is one of the values we will verify at launch."
  callout: |
    <strong>Common AP mistakes to avoid:</strong>
    <ul>
      <li><strong>Do NOT invest in STR or DEX.</strong>
        Magicians derive zero damage benefit from these stats.
        If a piece of equipment requires STR or DEX to wear,
        it was not built for you.</li>
      <li><strong>Don't spend AP on HP or MP.</strong> Both are
        boosted automatically on level-up. Magicians also have
        Improved Max MP Increase (a passive) that compounds
        your MP pool - AP is not the tool for growing MP.</li>
      <li><strong>Don't overshoot LUK.</strong> LUK three
        below your level is a hit-rate floor, not a target.
        Every point above that is a point of INT you didn't
        get, and INT is your entire damage stat.</li>
      <li><strong>Reset scrolls exist.</strong> If you
        overshot LUK or wasted AP early, v83 sold AP Reset
        scrolls in the cash shop. Classic World's plan for
        these is TBD - if you're unsure, err toward the
        LUK-3 build which is safe.</li>
    </ul>

# ==================== Skills ====================
skills:
  order: "First job gives you six skills. The recommended v83 order is: <strong>1 point in Improved MP Recovery,</strong> then MAX <strong>Magic Guard</strong> as fast as possible (survival before damage), then max Improved Max MP Increase, then max Magic Claw. Skip Energy Bolt (Magic Claw dominates it) and leave Magic Armor at 1 point or skip entirely."
  entries:
    - name: "Improved MP Recovery"
      skillId: "2000000"
      type: "Passive"
      maxLevel: "16 (v83)"
      summary: "Faster natural MP regeneration over time."
      suggested: "1 point (prerequisite for other passives)"
    - name: "Improved Max MP Increase"
      skillId: "2000001"
      type: "Passive"
      maxLevel: "10 (v83)"
      summary: "Bonus MP gained per level-up. Compounds every level - the earlier you invest, the larger your endgame MP pool."
      suggested: "Max after Magic Guard (v83 baseline)"
    - name: "Magic Guard"
      skillId: "2001000"
      type: "Buff"
      maxLevel: "20 (v83)"
      summary: "Converts a percentage of damage taken into MP loss instead of HP. THE defining Magician survival skill - a maxed Magic Guard makes glass-cannon builds viable."
      suggested: "MAX FIRST (v83 baseline). Survival before damage."
    - name: "Magic Armor"
      skillId: "2001001"
      type: "Buff"
      maxLevel: "20 (v83)"
      summary: "Temporary boost to Weapon Defense. Situational; Magic Guard does the heavy lifting for damage mitigation."
      suggested: "Skip early or 1-point utility"
    - name: "Energy Bolt"
      skillId: "2001002"
      type: "Attack"
      maxLevel: "20 (v83)"
      summary: "Single-hit ranged magic attack. Simple but Magic Claw does more damage per MP spent."
      suggested: "1 point (or skip) - Magic Claw is better DPS"
    - name: "Magic Claw"
      skillId: "2001003"
      type: "Attack"
      maxLevel: "20 (v83)"
      summary: "Two-hit ranged magic attack. Higher damage-per-cast than Energy Bolt and the workhorse skill for first-job Magicians."
      suggested: "Max after Improved Max MP Increase (v83 baseline)"
  infoCard:
    eyebrow: "Why Magic Guard first?"
    heading: "The Magician survival flip"
    body: |
      <p>A first-job Magician without Magic Guard is genuinely
      fragile - one mob hit can take 20-40% of your HP bar.
      With Magic Guard active, that same hit deducts MP
      instead. Since you already carry Mana potions to cast
      spells, you effectively use MP potions as HP potions.</p>
      <p>This is why max Magic Guard <em>immediately</em> is the
      universal v83 recommendation. Everything else - MP pool,
      damage - is optimization on top of the survival
      foundation Magic Guard provides.</p>

# ==================== Training routes ====================
training:
  intro: "v83 baseline routes. Classic World map spawns and monster levels may have shifted; verify at Founder's Access."
  routes:
    - levels: "Levels 1 - 8 (Beginner)"
      where: "Maple Island"
      what: "Snails, Blue Snails, Red Snails"
      note: "Complete the Maple Island story quests, then take the ship to Victoria Island. Reach 20 INT before hitting Ellinia. Magicians can advance two levels earlier than the other classes."
    - levels: "Levels 8 - 15"
      where: "Ellinia trees or Henesys area"
      what: "Green Trixters (Ellinia), Snails, Orange Mushrooms (Henesys)"
      note: "Get comfortable with Magic Claw and Magic Guard rotation here. Casting Magic Guard costs MP - budget accordingly and refresh before it expires."
    - levels: "Levels 15 - 25"
      where: "Ellinia dungeon (Wild Boars), Kerning City area (Ligators)"
      what: "Whichever has fewer competing players."
      note: "Ellinia is the traditional Magician home, but the Kerning tunnel offers better EXP-per-hour if you can handle the melee-range mobs from ranged."
    - levels: "Levels 25 - 30"
      where: "Ant Tunnel (Zombie Mushrooms) or Henesys Hunting Ground (Ribbon Pigs, Green Mushrooms)"
      what: "Denser mobs, higher EXP-per-kill."
      note: "Second job advancement quest becomes available at level 30. If you plan to go Cleric, Zombie Mushroom maps are especially productive because Heal will become your primary attack against them."

# ==================== Equipment ====================
equipment:
  intro: "Magician gear is INT-focused: you want raw Magic ATT on your weapon, and INT/MP bonuses with modest Magic Def on everything else. Weapon Def matters far less than it does for Warriors because Magic Guard shifts incoming damage to MP."
  weaponsIntro: "<strong>Weapons:</strong>"
  weapons:
    - name: "Wand"
      description: "Lower base Magic ATT but faster attack speed. Good for consistent damage output."
    - name: "Staff"
      description: "Higher base Magic ATT, slower attack speed. Slightly better for burst damage and single-cast skills."
  weaponsNote: "Both are viable in v83. Staff is the more common pick because Magic ATT compounds with your INT-heavy build, but wands remain competitive."
  armorProgression:
    - name: "Level 1 - 10 (starter):"
      description: "Whatever the beginner shops sell. Prioritize any INT or MP bonuses. A basic <a href=\"/items/wooden-wand\">Wooden Wand</a> from vendor is fine to start."
    - name: "Level 10 - 20 (early Ellinia):"
      description: "Basic robes and hats from Ellinia shops. Green robes and pointed hats are the traditional Magician starter look."
    - name: "Level 17+ (first real hat):"
      description: "<a href=\"/items/old-wisconsin\">Old Wisconsin</a> (+19 PDD, +17 MHP, 7 slots) from <a href=\"/quests/cursed-doll-chain\">Rowen's Cursed Doll Chain</a>. Even for Magicians the PDD is useful before Magic Guard is maxed - and Magicians love any hat with 7+ slots since MDD/INT scrolls exist."
    - name: "Level 18 chain (Alex reconciliation):"
      description: "Run the <a href=\"/quests/alexs-request\">Alex chain</a> for guaranteed <a href=\"/items/weighted-earrings\">Weighted Earrings</a> (L20, +22 MDD, 5 slots). Also nets 10x <a href=\"/items/blue-potion\">Blue Potion</a> - meaningful MP kit for Magicians."
    - name: "Level 21+ (KPQ scroll investment):"
      description: "Run <a href=\"/quests/first-time-together\">Kerning Party Quest</a> for <a href=\"/items/earring-int-scroll-intermediate\">Earring INT Scrolls (Intermediate)</a> (+2 INT at 60% success). +10 INT from a fully-scrolled earring is +10 damage AND ~140 extra MP."
    - name: "Level 30 milestone Overall:"
      description: "<a href=\"/items/blue-sauna-robe\">Blue Sauna Robe</a> (Blue for males, Red for females). +1 INT is a small direct damage boost; the +75 PDD is a huge survival cushion for pre-Magic-Guard cast intervals or when Magic Guard is on cooldown."
    - name: "Level 36+ (Cursed Doll chain gloves):"
      description: "Run the <a href=\"/quests/cursed-doll-chain\">Cursed Doll Chain</a> tier 4 for a chance at <a href=\"/items/gloves-magic-attack-scroll-intermediate\">Gloves Magic Attack Scroll (Intermediate)</a> - +4 MATT per successful application. Magicians benefit doubly compared to physical classes (WATT variant is only +2)."
    - name: "Approaching 30 (second-job weapon):"
      description: "Save mesos for the second-job weapon (a matching wand or staff with better base Magic ATT)."
  callout: |
    <strong>Scroll safely.</strong> As with Warriors, ten
    percent scrolls with big stat boosts destroy gear more
    often than they help at this level range. Sixty and
    hundred percent scrolls with INT or Magic ATT bonuses
    are the beginner-friendly choices.

# ==================== Second-job branches ====================
secondJobs:
  intro: "At level 30 you choose one of three second-job paths. All three are viable; the pick shapes the next 40+ levels of gameplay and dictates which elements you specialize in."
  branches:
    - name: "F/P Wizard (Fire/Poison)"
      subtitleLabel: "Element"
      subtitleValue: "Fire and Poison"
      summary: "Damage-over-time specialist. Poison Brace applies a DoT that ticks for 1 HP per second on bosses in v83 - a signature technique. Higher single-target output than I/L against fire-weak or poison-vulnerable enemies."
      bestFor: "Players who like DoT gameplay, want strong single-target burst, and enjoy elemental matchup planning"
      previewSkills:
        - name: "Fire Arrow"
          skillId: "2101003"
          summary: "Main attack - ranged fire-elemental projectile. F/P's bread-and-butter until Poison Breath comes online. Massive damage on fire-weak mobs."
        - name: "Poison Breath"
          skillId: "2101004"
          summary: "The signature. Applies a poison DoT that ticks even on bosses. Chaining Poison Breath into a rotation is what defines F/P playstyle - you never stop poisoning things."
        - name: "Teleport"
          skillId: "2101001"
          summary: "Blink a short distance in any direction. Fixes the Magician mobility problem entirely; also lets you dodge through walls of monsters. Get this immediately."
        - name: "Meditation"
          skillId: "2101000"
          summary: "Party buff - adds Magic Attack to allies. Not just an F/P skill; every Wizard branch has Meditation. Being asked to cast it is a rite of passage."
    - name: "I/L Wizard (Ice/Lightning)"
      subtitleLabel: "Element"
      subtitleValue: "Ice and Lightning"
      summary: "Crowd control and AoE. Cold Beam freezes enemies (interrupts attacks); Thunder Bolt is a multi-hit AoE that scales excellently against grouped mobs. Slightly lower single-target damage than F/P but stronger utility."
      bestFor: "Players who want to control fights, train on grouped mobs, and value freeze utility for party play"
      previewSkills:
        - name: "Cold Beam"
          skillId: "2201003"
          summary: "Main attack - ice-elemental projectile that FREEZES the target on hit. Freeze interrupts monster attacks; on packs you can perma-lock everything. I/L's defining crowd-control tool."
        - name: "Thunder Bolt"
          skillId: "2201004"
          summary: "Multi-hit AoE lightning strike. Scales excellently against grouped mobs and monsters vulnerable to lightning. THE reason I/L is the grinder's favorite pick."
        - name: "Teleport"
          skillId: "2201001"
          summary: "Same short-blink as F/P's - the fundamental Magician mobility skill. Get it early, use it constantly."
        - name: "Slow"
          skillId: "2201002"
          summary: "Debuff - slows enemy movement speed. Less flashy than freeze but stacks with it, and lasts longer. Underrated for kite-heavy training runs."
    - name: "Cleric"
      subtitleLabel: "Element"
      subtitleValue: "Holy (with Heal utility)"
      summary: "Support and undead specialist. Heal doubles as an attack against undead mobs (Zombie Mushrooms, Wraiths, etc.) - some of the best undead-map EXP in v83 came from Cleric AoE-healing. Progresses to Priest (buffs) and Bishop (full party support)."
      bestFor: "Players who want to party constantly, don't mind slower solo damage, and appreciate that everyone loves the healer"
      previewSkills:
        - name: "Heal"
          skillId: "2301001"
          summary: "THE Cleric skill. Restores HP to all allies AND deals holy-elemental damage to undead mobs. On undead maps this is your grind attack too - Cleric doesn't 'attack' so much as 'heal aggressively.'"
        - name: "Bless"
          skillId: "2301003"
          summary: "Party buff - adds Weapon+Magic Attack AND Weapon+Magic Defense AND Accuracy AND Avoidability. Yes, all of it. Non-optional buff for any party."
        - name: "Holy Arrow"
          skillId: "2301004"
          summary: "Main single-target attack. Weaker than F/P or I/L equivalents, but has innate holy-element bonus damage against undead. Your solo attack when you're not fighting undead."
        - name: "Teleport"
          skillId: "2301000"
          summary: "Standard Wizard mobility. Get it early - Cleric relies on positioning to heal-attack undead effectively, and teleport lets you weave through mob packs to reach party members."
  infoCard:
    eyebrow: "Element matters"
    heading: "Mob resistance is a real thing"
    body: |
      <p>Unlike Warriors (physical damage against everything),
      Magicians deal <em>elemental</em> damage. Every mob has
      a resistance profile - some are weak to fire, others
      resist ice, others are immune to both but weak to holy.</p>
      <p>Your second-job branch commits you to two elements for
      the rest of the game. F/P Wizards will steamroll
      fire-weak mobs and struggle against fire-immune ones.
      I/L Wizards freeze most fights but hit ice-resistant
      mobs weakly. This is intentional design - not a
      weakness, but something to factor into where you
      train and party.</p>

# ==================== FAQ ====================
faq:
  - question: "Do I need to do a job advancement quest, or just talk?"
    answer: "<em>Awaiting confirmation.</em> v83 was talk-only with an INT requirement; some later versions added a \"prove yourself\" trial. Whether Classic World reintroduces the quest will be visible at Founder's Access."
    badge: "awaiting-confirmation"
  - question: "Is a pure-INT build viable at launch?"
    answer: "<em>Awaiting confirmation.</em> In v83, pure INT was the meta once players had scrolled equipment with LUK bonuses to cover hit rate. Whether Classic World preserves the same hit-rate formula and LUK requirements determines whether it stays viable."
    badge: "awaiting-confirmation"
  - question: "Why does everyone say max Magic Guard first?"
    answer: "Because it converts damage taken into MP loss instead of HP loss. Since Magicians already carry MP potions, Magic Guard effectively lets you use those MP potions as HP potions - trivially cheaper than the White Potions Warriors chew through. Without Magic Guard, first job Magicians die a lot."
    badge: "historical-archive"
  - question: "Which second job branch does the most damage?"
    answer: "In v83 F/P Wizards had the highest single-target sustained damage against fire-weak or poison-vulnerable mobs. I/L Wizards had better AoE and crowd control. Cleric was intentionally lower DPS but essential to parties. Classic World may shift these balance points."
    badge: "historical-archive"
  - question: "Should I go Cleric if I only plan to solo?"
    answer: "Cleric can absolutely solo, especially against undead mobs where Heal doubles as attack. But if you never plan to party at all, F/P or I/L will feel more powerful per fight. Cleric's real payoff is being the person everyone wants in their party - worth thinking about socially, not just mechanically."
  - question: "Can I re-spec if I regret my second-job choice?"
    answer: "<em>Awaiting confirmation.</em> v83 had no free re-spec; SP resets required specific event items or cash-shop purchases. Whether Classic World allows a launch-window re-spec (as some private servers did) is unknown."
    badge: "awaiting-confirmation"
---
