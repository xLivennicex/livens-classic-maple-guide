---
name: "Old Wisconsin"
wzId: 1002053
category: "armor"
subcategory: "Hat"
tagline: "A dented, weathered hat with a floppy brim. Low level requirement but a Fame gate - one of the few 'prestige-only' equipment pieces in the level 20-40 range."

# ==== Requirements ====
# CoT 2 datamine: reqLevel 17 + reqPOP 10. The Fame gate (POP) is
# unusual for a low-level hat - most Fame-gated gear is high-level.
# Historical note: Old Wisconsin has always been the "you did the
# doll chain to prove yourself" trophy hat.
levelReq: 17
jobReq: "Any"
# NOTE: the datamine also lists reqPOP 10 (Fame gate). Our schema
# only carries str/dex/int/luk under statReq, so the Fame gate is
# called out in the editorial + tagline rather than shoehorned into
# an ill-fitting field. Future TODO: add reqFame to statRequirements
# schema if Fame-gated gear becomes common enough to justify it.

# ==== Stats (CoT 2 datamine-verified) ====
combat:
  defense: 19
bonus:
  hp: 17
slots: 7
mesos: 1000

# ==== Editorial ====
editorial: |
  <p>Old Wisconsin is a solid mid-game hat with an unusual
  gate: it requires <strong>Level 17 AND 10 Fame</strong> to
  equip. Fame accumulates slowly (max 1 given/received per day
  from another player), which means most level 17 characters
  can't wear this even if they own it. The intended obtain
  path - <a href="/quests/cursed-doll-chain">Rowen's Cursed
  Doll Chain</a> - is a level 36+ quest, so by the time you
  earn one, you've likely accumulated the Fame naturally.</p>

  <p>Stats: <strong>+19 Weapon Defense</strong>,
  <strong>+17 MaxHP</strong>, and 7 upgrade slots. The MaxHP
  bonus is what makes it stand out among level 17-tier hats -
  most defensive headwear at this level bracket gives just PDD
  with no HP bump.</p>

  <p><strong>Who this is for:</strong> anyone in the level 17-40
  range who values the HP bonus. Warriors get the most obvious
  value (survival scaling), but the +17 MaxHP is a meaningful
  cushion for Bowmen and Thieves who otherwise die in 2-3 hits
  at this level range. Magicians benefit less because Magic
  Guard makes their MP pool the effective HP anyway.</p>

callout: |
  <strong>Fame is prestige, not stats.</strong> The 10 Fame
  requirement doesn't buff the hat - it's a social gate. Prior
  to Classic World, some players wore Old Wisconsin as a
  status symbol precisely because it meant "I ground the
  chain AND I have 10 Fame." That may or may not still land
  socially on Classic World; the stats themselves justify
  wearing it regardless.

# ==== Cross-links ====
relatedGuides:
  - "/quests/cursed-doll-chain"
  - "/items/steel-nordic-helm"  # L40 sibling from the same tier-5 pool

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Item ID (1002053), name, level requirement (17), Fame requirement (10 POP), Weapon Defense (19), MaxHP (17), slot count (7), NPC sell price (1000 mesos) all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "ellinia"
lastUpdated: "2026-08-23"
---
