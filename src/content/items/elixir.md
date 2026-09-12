---
name: "Elixir"
wzId: 2000004
category: "consumable"
subcategory: "HP + MP Recovery (Cooldown)"
tagline: "A legendary potion. Restores 35% of your HP and MP - but has a cooldown between uses. The mid-tier answer to burst survival at level 30+."

# ==== Requirements ====
levelReq: 0
jobReq: "Any"

# ==== Editorial ====
editorial: |
  <p>Elixir restores <strong>35% of MaxHP AND 35% of MaxMP</strong>
  per use, in a single button press. Unlike Blue Potion or the
  basic HP potions, Elixir has a <strong>cooldown between uses</strong>
  (typically ~30 seconds in v83, TBD in Classic World).</p>

  <p><strong>Why the cooldown matters:</strong> the cooldown is
  what keeps Elixir from trivializing damage - you can't spam
  it during a boss burst. Instead, it's the "oh no" button
  for genuine emergencies: when you're at 20% HP and 10% MP
  and need a full-kit reset in one press.</p>

  <p><strong>Who this is for:</strong> everyone who takes real
  hits. Warriors love the HP restore, Magicians love the MP
  restore (Magic Guard drains MP fast under pressure), Bowmen
  and Thieves use it as an emergency reset. Because Elixir
  restores BOTH stats, it's the most flexible consumable in
  its tier.</p>

  <p><strong>How to acquire:</strong> Elixirs drop from various
  mid-level mobs and higher-tier bosses. They're also sold by
  potion NPCs starting around Sleepywood/Perion for a
  significant meso premium over Blue/White Potions. The premium
  is justified by the dual-stat restore + emergency utility.</p>

callout: |
  <strong>Elixir vs Power Elixir vs Mana Elixir:</strong>
  Elixir restores 35% of both. Power Elixir (2000005)
  restores 100% of both. Mana Elixir (2000006) restores 50%
  of MP only. All three share the same cooldown pool. Rule
  of thumb: Elixir for standard training, Power Elixir for
  bosses, Mana Elixir for pure caster utility.

# ==== Cross-links ====
relatedGuides:
  - "/items/blue-potion"
  - "/items/white-potion"

# ==== Verification ====
verificationStatus: "closed-test-info"
verificationNote: "Item ID (2000004), name, restore amounts (35% HP + 35% MP), and cooldown-based-usage mechanic all pulled verbatim from the CoT 2 client datamine at osmsdataexplorer.com. Exact cooldown duration retains v83 baseline (~30s) pending CoT 2 verification."
sourceSlugs:
  - "osmsdataexplorer"

# ==== Layout ====
theme: "ellinia"
lastUpdated: "2026-08-24"
---
