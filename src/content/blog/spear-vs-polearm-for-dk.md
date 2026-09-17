---
title: "Spear vs Polearm for Dragon Knight: Classic World Rewrites the Rules"
description: "The Classic World CBT2 datamines rewrote this debate. Polearm Mastery now grants +20 movement speed at max; Spear Mastery grants +20% critical rate. Piercing Crusher and Dragon Fury are weapon-agnostic. The old 'spear for bossing, polearm for mobbing' rule of thumb still points the right direction - but for entirely different reasons than v83 players remember."
excerpt: "This post was rewritten after Classic World's CBT2 datamines dropped. The v83 rule of thumb ('spear for bossing, polearm for mobbing') survives, but the underlying reasons changed completely. Polearm Mastery now grants +1 Movement Speed per level. Spear Mastery grants +1% Critical Rate per level. Piercing Crusher (the reworked Dragon Buster) and Dragon Fury are both now weapon-agnostic with identical 2.5x multipliers. This is no longer an animation-arc debate - it's a mastery-tree branching choice. Also: 3rd job Dragon Knight isn't launching day 1, so all of this is subject to change before it actually ships."
publishedAt: "2026-09-17"
updatedAt: "2026-09-17"
author: "Liven"
category: "community"
tags:
  - warrior
  - dragon-knight
  - dk
  - spear
  - polearm
  - build-discussion
  - class-guide
  - cbt2
  - beta-findings
theme: "perion"
featured: true
commentsEnabled: true
---

## Heads up: this post got rewritten

The first version of this post argued the debate on v83 baseline assumptions - "spear hits harder per swing, polearm sweeps wider, carry both." That was written before I actually scrubbed the Classic World CBT2 datamines. Once I did, it became clear that **the meta arguments still point at the same conclusions but for entirely different reasons**. The old animation-arc / per-hit-percentage debate is basically dead. A new mastery-tree branching debate has replaced it, and it's arguably more interesting.

Also: **3rd job Dragon Knight is not launching with the game on October 21.** Per Nexon's Aug 21 Ossyria Exploration Report, 3rd job advancement, Orbis, and El Nath are being reworked and rolled out gradually after Grand Launch. All the DK-specific numbers below are from CBT2 (Aug 4-12, 2026) datamines - dataminable but unconfirmed by Nexon, and Nexon has explicitly said the content will be reworked before it ships. So take everything below as "current beta reality, subject to change."

Let's talk about what actually shifted.

## The new TL;DR

- **Polearm Mastery (max)**: +20% mastery, +20 accuracy, **+20 Movement Speed**
- **Spear Mastery (max)**: +20% mastery, +20 accuracy, **+20% Critical Rate**
- **Piercing Crusher** (formerly Dragon Buster): now works with **either** weapon, identical 2.5x weapon multiplier for spear or polearm
- **Dragon Fury**: now works with either weapon, identical 2.5x multiplier. Previously polearm-only in v83.
- **The consensus rule of thumb survives** ("spear for bosses, polearm for grinding") but the reason is now the passive mastery split, not the attack-skill animations

If you only read one paragraph, that's it. The rest of this post is the "wait, what actually changed" breakdown.

## The masteries are asymmetric now

This is the biggest shift and it's the one most v83 veterans won't see coming.

In vanilla v83, Spear Mastery and Polearm Mastery were near-identical - both gave the same mastery percentage curve and the same accuracy bonus. The choice between them was cosmetic; the class fantasy was that you specialized in one weapon type and the passive followed you.

In Classic World CBT2, they've diverged:

**Polearm Mastery** at Lv 20:
- +20% Polearm Mastery (damage variance floor)
- +20 Accuracy
- **+20 Movement Speed**
- (Applies only when a polearm is equipped)

**Spear Mastery** at Lv 20:
- +20% Spear Mastery
- +20 Accuracy
- **+20% Critical Rate**
- (Applies only when a spear is equipped)

The other stats are symmetric. The mastery, accuracy, weapon-locked activation - all identical. It's the third line item that flips the class into two distinct build paths.

**+20 Movement Speed is a big deal.** In v83, movement speed was scarce - most sources of it were limited to specific gear pieces and consumables, and hitting the movement cap took real investment. +20 from a mastery alone is a huge boost to your grinding rotation. You clear maps faster, you move between platforms faster, you spend less time walking and more time hitting things.

**+20% Critical Rate is also a big deal.** Warriors in v83 had almost no baseline crit rate. Getting +20% from a passive puts a spear-DK in Assassin Critical Throw territory - a meaningful chunk of your hits will land as crits, which compounds against boss HP pools where every hit matters.

**Sources for the mastery data:** `meowdb.com/msclassic/skills/spearman/polearm-mastery`, `meowdb.com/msclassic/skills/spearman/spear-mastery`, cross-confirmed on `henesys.gg/skills` (Spearman 2nd job section). Both fan DBs tag these as "updated in COT2" and pull from the client dump.

## Piercing Crusher: the rework kills half the old debate

The old v83 debate about "Spear Crusher hits harder per hit vs Polearm Crusher swings wider" is essentially gone.

CBT2 replaced Dragon Buster with **Piercing Crusher**, a scaling multi-hit skill that works with both weapon types on the same multipliers:

| Level range | Targets | Hits | % per hit |
|---|---|---|---|
| 1-6 | 1 | 2 | 170-200% |
| 7-14 | 2 | 2 | 110-140% |
| 15-22 | 2 | 3 | 100-130% |
| 23-30 | 3 | 3 | 90-120% |

The scaling ladder is interesting on its own - the sweet spot for 1-2 target situations is actually **Lv 21-22 (390% peak)**, higher than the Lv 30 max (360%). Bossing DKs may deliberately underlevel this skill.

**Both weapon types use the identical 2.5x weapon multiplier.** The animation is a "thrust" for both. The old spear-thrust vs polearm-swing visual identity is largely collapsed for this skill.

Same story for **Dragon Fury** - now 4-target AoE, max 240%, weapon-agnostic. In v83 Dragon Fury was polearm-locked; in CBT2 it uses either weapon on identical multipliers.

**Source:** `meowdb.com/msclassic/skills/dragon-knight/piercing-crusher` (level tables + weapon multipliers), `meowdb.com/msclassic/skills/dragon-knight/dragon-fury`, `henesys.gg/updatenotes` warrior section. Tagged "updated in COT2" throughout.

## So what's actually the difference now?

Now that the attack skills are weapon-agnostic, the difference between running a spear DK and a polearm DK collapses to:

1. **The mastery passive** (movement speed vs crit rate)
2. **Weapon attack values** on individual weapons at the same level
3. **Your own preference for swing animations** (spear = thrust, polearm = arc)

That's it. The old "which weapon is better for which skill" argument doesn't apply anymore, because the same skill has the same numbers with both weapons.

Which means the debate has shifted from **"which weapon does more damage on which content"** to **"which secondary stat compounds better for your playstyle."** That's a different conversation.

## The bossing case, rewritten

- **Old v83 pitch:** Spear Crusher hits harder per hit. Dragon Buster (spear-only) is your boss-chunker. Commit to spear for single-target damage.
- **CBT2 pitch:** Piercing Crusher does identical damage with either weapon. But spear grants +20% crit rate via mastery, which compounds across every hit you land on a boss over a multi-minute fight.

The conclusion is the same ("spear for bosses") but the mechanism is completely different. +20% crit rate on a boss with 500 million HP and no dodge is a meaningful DPS gain across the whole fight, especially if you're stacking any additional crit rate from other sources.

**Spear-DK for bosses is still the answer.** It's just answering a different question.

## The grinding case, rewritten

- **Old v83 pitch:** Polearm Fury sweeps wider, catches more mobs per swing. Polearm Crusher's arc animation hits both sides. More mobs per animation = more EXP per hour.
- **CBT2 pitch:** Dragon Fury is now weapon-agnostic with the same target count (4) and multiplier. But polearm's mastery grants +20 Movement Speed, which shortens the time between mob groups on any grinding map.

Again, the conclusion holds ("polearm for grinding") but the mechanism is different. You're not out-swinging spear on any individual mob - the skills are identical. You're just moving between mob groups faster. On maps where you're constantly walking to the next platform or the next spawn cluster, +20 movement speed compounds hard.

**Polearm-DK for grinding is still the answer.** Because the marginal EXP-per-hour gain from moving faster is real.

## What if you want to carry both?

The pragmatic argument from v1 of this post still applies, and it's arguably stronger now:

- **Same skill tree** — every attack skill works with either weapon on identical multipliers
- **Same funding requirements** — STR-based build, no weapon-type-specific stat allocation
- **Different passive benefits based on which weapon you're holding** — swap weapons, swap mastery activation

The catch: only ONE mastery is active at a time (whichever weapon you're currently holding). So you don't get +20 movement speed AND +20% crit at the same time. You get whichever one applies to your equipped weapon.

But that's actually the whole appeal of carrying both:

- Load into a boss fight? Equip spear, get crit uptime
- Head out to Ludi Ronnies for a grind session? Equip polearm, get movement speed

If you're willing to put SP into both masteries and carry both weapons, you get to context-swap your entire passive kit by swapping a weapon slot. That's a real feature, not a wasted decision.

## What v83 vets should mentally recalibrate

If you played DK in old GMS and are coming into Classic World with your old instincts:

- **Forget "spear crusher hits harder."** It doesn't. Piercing Crusher is symmetric.
- **Forget "polearm fury swings wider."** It doesn't. Dragon Fury is symmetric.
- **The reason to pick spear is now the +20% crit rate.** That's an unfamiliar sales pitch to a v83 player - crit rate wasn't part of Warrior identity before. It is now.
- **The reason to pick polearm is now the +20 movement speed.** That's a mobility passive, not a damage passive. Also unfamiliar territory.
- **The old "carry both weapons" argument is stronger, not weaker.** Because now the swap gives you a genuinely different passive kit, not just a marginally-different swing.

## The caveats you need to hold in your head

Because this is beta data, I want to be explicit:

1. **3rd job DK isn't launching October 21.** It rolls out later, post-Grand Launch. This gives Nexon time to iterate.
2. **Nexon has said the 3rd job content is being reworked before release.** All the numbers above may shift.
3. **The datamines are unconfirmed by Nexon.** Fan DBs (meowdb, henesys.gg, mapleclassic.wiki) are pulling from client dumps. Almost certainly accurate for what's in the beta client, but Nexon can change anything before ship.
4. **CBT2 was a specific patch state (Aug 4-12, 2026).** Later betas or the actual live build may have different values.

Read all of the above as "current beta reality" not "confirmed launch balance."

## Where I land, revised edition

- **Bossing-focused DK:** Commit to spear. The +20% crit rate compounds hard across long fights.
- **Grinding-focused DK:** Commit to polearm. The +20 movement speed compounds hard across long training sessions.
- **Generalist DK:** Carry both, invest in both masteries. This is now a real feature choice, not a compromise.
- **Absolute beginners:** Don't stress about it. Pick whichever weapon feels better in your hand. You have plenty of time to decide - 3rd job isn't dropping day one anyway.

The rule of thumb ("spear for bosses, polearm for grinding") is stable across v83 and CBT2. What changed is that the underlying mechanic is now a passive stat split rather than an animation-arc difference. That's cleaner design, in my opinion. It makes the choice legible - you're not squinting at damage percentages between two versions of the same skill; you're picking between "+ crit" and "+ speed" as your class-defining passive.

## Sources for anyone who wants to dig deeper

- **meowdb.com/msclassic** — skill pages tagged "updated in COT2" for all the CBT2 numbers cited above
- **henesys.gg/skills** and **henesys.gg/updatenotes** — cross-references and rework labels
- **mapleclassic.wiki** — Polearm and Spear item entries, "Differences from MapleStory" page (last edit Aug 30, 2026)
- **Nexon Aug 21, 2026 dev post** ("Ossyria Exploration Report") — the source for "3rd job not day 1, will be reworked"

## What's your read?

- **Does the mastery split (movement speed vs crit rate) change your commitment?** V83 vets, does knowing "+20 movement speed" push you toward polearm even if you were a spear loyalist?
- **How much do you expect the numbers to shift before 3rd job actually ships?** Nexon has said "rework," but the community usually reads that as "small adjustments" not "throw the whole thing out."
- **Anyone else worried the crit rate change will make spear-DK feel too Assassin-y?** That +20% crit passive is a big departure from the classic Warrior identity.

Drop it in the comments. See you (eventually) in a Perion that finally has a 3rd job.
