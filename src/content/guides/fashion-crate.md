---
# ---------- Core metadata ----------
title: "Founder's Mystery Fashion Crate: Rates, Pool, Is It Worth It"
description: "The full 50-item Founder's Mystery Fashion Crate reward pool with Nexon's published drop rates, the Aurora Stamp dupe-to-pity economy, region restrictions, and honest expected-value math. Primary-sourced from Nexon's rate posts."
lastUpdated: "2026-10-11"
tags:
  - cash-shop
  - mystery-crate
  - fashion
  - nx
  - rates
  - founders-access
status: "Live - Founder's Access window Oct 6 to Oct 28, 2026"

# ---------- Layout ----------
theme: "kerning"
decorations: false
eyebrow: "Cash Shop Guide"
heading: "Founder's Mystery Fashion Crate"
tagline: "Fifty cosmetic items, four rate tiers, one dupe-to-pity economy, and three region blocks. Here's the full table, the actual math, and the honest answer to 'is it worth it'."

# ---------- Verification ----------
verificationStatus: "official-announcement"
verificationNote: "Every per-item percentage, price, sale window, and mechanic in this guide is drawn from Nexon's own disclosure pages (general-post/45538 for Founder's rates, general-post/45659 for Aurora rates, news/sale/45819 for mechanics). Equip-slot categorization and current cash-shop status come from NiaDB's community database (meowdb.com/msclassic). Live free-market resale ranges we cross-link to meso.watch are derived from Twitch-VOD OCR of player shops - freshness varies and we do not vouch for individual sightings."
sourceSlugs:
  - nexon-founders-fashion-crate-rates
  - nexon-aurora-fashion-crate-rates
  - nexon-founders-access-cash-shop-sale

# ---------- TOC ----------
toc:
  - { href: "#at-a-glance", label: "At a glance" }
  - { href: "#the-full-rate-table", label: "Rate table (50 items)" }
  - { href: "#rate-math", label: "Rate math" }
  - { href: "#the-aurora-loop", label: "Aurora loop" }
  - { href: "#aurora-crate", label: "Aurora crate (26 items)" }
  - { href: "#mechanics-and-gotchas", label: "Mechanics & gotchas" }
  - { href: "#live-resale-prices", label: "Live resale prices" }
  - { href: "#is-it-worth-it", label: "Is it worth it?" }
  - { href: "#faq", label: "FAQ" }
---

The Founder's Mystery Fashion Crate is MapleStory Classic's debut gacha
cosmetic. It costs **3,500 NX per crate** (or 35,000 NX for 11 - a straight
buy-10-get-1-free), pulls one of fifty cosmetic items, and every pulled piece
expires after seven days. Nexon has published the exact per-item drop rates
on a dedicated rate-disclosure page, which means for once you can actually
plan this instead of guessing.

Everything numeric below comes from Nexon's own rate tables
([general-post/45538](https://www.nexon.com/maplestory/general-post/45538) for
Founder's, [general-post/45659](https://www.nexon.com/maplestory/general-post/45659)
for Aurora) and the Oct 5 cash-shop sale announcement
([news/sale/45819](https://www.nexon.com/maplestory/news/sale/45819)). Equip
slots and current cash-shop status come from
[NiaDB's crate simulator](https://meowdb.com/msclassic/fashion-crate-sim) -
a 1:1 mirror of Nexon's table with the game-side metadata filled in. Live
resale prices cross-link to [meso.watch](https://meso.watch).

<div class="callout callout--framing">
<strong>TL;DR -</strong> 50-item pool. 16 pieces at 1.00%, 4 at 2.00%, 28 at
2.50%, 2 at 3.00%. One target item at a 1% rate takes <strong>69 crates to be
50/50 you've seen it</strong> (median), and <strong>459 crates for 99%
confidence</strong>. Dupes right-click into Aurora Stamps - which fund the
sibling Aurora Mystery Fashion Crate. Sale ends <strong>Oct 28, 2026 at 7:59
AM UTC</strong>. Pieces last 7 days once pulled.
</div>

<h2 id="at-a-glance">At a glance</h2>

| Field | Founder's Mystery Fashion Crate |
| --- | --- |
| **Datamine item ID** | `5222001` |
| **Price (single)** | 3,500 NX |
| **Price (11-pack)** | 35,000 NX (= 3,181 NX / crate, buy-10-get-1-free) |
| **Reward pool** | 50 items, flat weighted list |
| **Rate histogram** | 16 x 1.00% + 4 x 2.00% + 28 x 2.50% + 2 x 3.00% = 100.00% |
| **Item duration** | 7 days per pulled equip |
| **Dupe mechanic** | Right-click BEFORE equipping -> 1 Aurora Stamp |
| **Pity system** | None beyond the dupe-to-stamp conversion |
| **Sale window** | Oct 6, 2026 (end of maintenance, UTC) through Oct 28, 2026 at 7:59 AM UTC |
| **Region block** | Cannot purchase: Belgium, Slovakia, Brazil |
| **Account-bound in** | Netherlands (purchase works, trade does not) |
| **Gifting** | Allowed, recipient must be Lv. 12+ |

<h2 id="the-full-rate-table">The full rate table (50 items)</h2>

Grouped by rate tier, high to low. Nexon does **not** label items with
common / rare / epic bands - the pool is a flat weighted list and the tier
grouping below is editorial, not official. The one hint of a built-in rarity
flag is on NiaDB's simulator: the 1% items alone carry a `tileRare` CSS
class; the 2%, 2.5%, and 3% items have no visual grouping.

### 3.00% tier - "common" (2 items)

| Item | Rate | Equip slot |
| --- | --- | --- |
| Patissier Hat | 3.00% | Cash Hat |
| Patissier Uniform | 3.00% | Cash Overall |

### 2.50% tier - 28 items

Twenty-eight pieces share this rate - the bulk of the pool. Hitting *any*
item in this tier is 70% likely within a single 11-pack.

| Item | Rate | Equip slot |
| --- | --- | --- |
| Beetle Long Sleeve | 2.50% | Cash Top |
| Beret | 2.50% | Cash Hat |
| Black Enamel Shoes | 2.50% | Cash Shoes |
| Blue Bucket Hat | 2.50% | Cash Hat |
| Blue Watch | 2.50% | Cash Gloves |
| Butterfly Skirt | 2.50% | Cash Bottom |
| Cat Hat | 2.50% | Cash Hat |
| Cat Suit | 2.50% | Cash Overall |
| Gold Kitty Slippers | 2.50% | Cash Shoes |
| Jean Shorts | 2.50% | Cash Bottom |
| Kitty Chat Ring | 2.50% | Cash Ring |
| Lined Hip-Hop Pants | 2.50% | Cash Bottom |
| Meshcap | 2.50% | Cash Hat |
| Orange Baseball Jacket | 2.50% | Cash Top |
| Orange Hooded Shirt | 2.50% | Cash Top |
| Pink Allstar | 2.50% | Cash Top |
| Purple Dorothy Dress | 2.50% | Cash Overall |
| Rainbow Knit | 2.50% | Cash Top |
| Red Sailor Shirt | 2.50% | Cash Top |
| Red Sailor Skirt | 2.50% | Cash Bottom |
| Red Trainer Jacket | 2.50% | Cash Top |
| Red Trainer Pants | 2.50% | Cash Bottom |
| Reggae Hat | 2.50% | Cash Hat |
| Ripped Jeans | 2.50% | Cash Bottom |
| Tourist T | 2.50% | Cash Top |
| White Hooded Vest | 2.50% | Cash Top |
| White Jeans | 2.50% | Cash Bottom |
| Yellow Rainbow Sneaks | 2.50% | Cash Shoes |

### 2.00% tier - 4 items

| Item | Rate | Equip slot |
| --- | --- | --- |
| Blue Cap | 2.00% | Cash Hat |
| Sailor Hat | 2.00% | Cash Hat |
| Sailor Outfit | 2.00% | *(missing from NiaDB index as of Oct 11)* |
| White Ribboned Sailor Dress | 2.00% | Cash Overall |

### 1.00% tier - "rare" (16 items)

These are what most buyers are actually chasing. Angel Halo, the Baby Angel
Wings cape, and the paired Angel Wand are the headline hits - they combine
into the complete Angel outfit meta that dominates player-shop pricing (see
[Live resale prices](#live-resale-prices)). Rings and weapon-covers also
cluster here.

| Item | Rate | Equip slot |
| --- | --- | --- |
| Angel Halo | 1.00% | Cash Hat |
| Angel Wand | 1.00% | Cash Weapon (any weapon) |
| Baby Angel Wings | 1.00% | Cash Cape |
| Black Sunglasses | 1.00% | Cash Eye Accessory |
| Bunny Earmuffs | 1.00% | Cash Hat |
| Bunny Ears | 1.00% | Cash Hat |
| Cherub's Bow | 1.00% | Cash Weapon (bow only) |
| Dollish Pink | 1.00% | Cash Face Accessory |
| Orange Mushroom Balloon | 1.00% | Cash Cape |
| Orange Toy Hammer | 1.00% | Cash Weapon (any weapon) |
| Slime Earrings | 1.00% | Cash Earring |
| Slime Slippers | 1.00% | Cash Shoes |
| Slime T-Shirt | 1.00% | Cash Top |
| Toga | 1.00% | Cash Overall |
| White Label Ring | 1.00% | Cash Ring |
| Yellow Spatula | 1.00% | Cash Weapon (any weapon) |

<div class="callout">
<strong>Sailor Outfit data gap -</strong> Nexon lists Sailor Outfit at 2.00%
in their rate table. NiaDB's crate simulator shows the tile with a placeholder
icon and no linked item-db entry (their `tileMissing` CSS class). Treat the
rate as confirmed (Nexon source) but expect the piece to appear in-game
without a NiaDB stat page until they fill the gap. Last checked 2026-10-11.
</div>

<h2 id="rate-math">Rate math</h2>

Nexon's rounding disclaimer applies: *"the displayed percentages are rounded,
and the total sum of all rates may not add up to exactly 100%."* Our math
below treats the nominal values as true probabilities; actual odds may
diverge by small amounts in either direction.

### Single-crate chances

| Rate tier | Items in tier | Chance per crate (any item from tier) |
| --- | --- | --- |
| 1.00% | 16 | 16.00% |
| 2.00% | 4 | 8.00% |
| 2.50% | 28 | 70.00% |
| 3.00% | 2 | 6.00% |
| **Any 1%-tier item** | 16 | **16.0%** per crate |
| **Specific 1% target** | 1 | **1.0%** per crate |

### Expected pulls to see one specific target

For a target with probability `p`, median pulls to first success is
`ceil(ln(0.5) / ln(1 - p))` and 99%-confidence is
`ceil(ln(0.01) / ln(1 - p))`.

| Target rate | Median (50% confident) | 90% confident | 99% confident |
| --- | --- | --- | --- |
| 1.00% (Angel Halo etc) | **69 crates** | 230 crates | **459 crates** |
| 2.00% (Blue Cap, Sailor set) | 35 crates | 114 crates | 228 crates |
| 2.50% (any of the 28 common pieces) | 28 crates | 91 crates | 182 crates |
| 3.00% (Patissier Hat/Uniform) | 23 crates | 76 crates | 152 crates |

**In dollars (3,500 NX per crate, no bulk discount)**: 69 crates = **241,500
NX** to be 50/50 you've seen one specific 1% item. 459 crates = **1,606,500
NX** to be 99% certain. The 11-pack lowers the per-crate price to 3,182 NX
but doesn't change the per-pull odds (no bonus guarantees).

### Full-collection odds

The expected pulls to collect **all 50 pieces** via a straight gacha is a
classic coupon-collector problem with weighted probabilities. For a
weight-normalized pool like this one, the dominant term is driven by the
rarest items. In practice: **expect several hundred crates minimum to see
every piece at least once, and the final 1% items are what you'll be chasing
longest**. NiaDB's simulator exposes a "pieces collected 0 of 50" counter if
you want to run your own simulation before spending.

<h2 id="the-aurora-loop">The Aurora loop: how dupes become pity</h2>

The one Nexon-sanctioned way to make gacha losses feel less punishing is the
Aurora Stamp conversion. Here's how it works:

1. You pull from a Founder's Mystery Fashion Crate.
2. If the piece is a dupe you don't want, **right-click it BEFORE equipping
   it**. Equipping consumes the stamp conversion option.
3. The dupe converts into **1 Aurora Stamp**.
4. 20 Aurora Stamps buy you one **Aurora Mystery Fashion Crate** (a
   different, smaller 26-item pool - see [below](#aurora-crate)).

So a Founder's crate you've "lost" on isn't fully lost: it's converted into
1/20th of an Aurora pull.

**The hidden cost per Aurora crate (via dupes):**

| Scenario | Founder's crates burned | NX cost | Per-crate NX equivalent |
| --- | --- | --- | --- |
| 20 dupes -> 1 Aurora crate | 20 | 70,000 NX | 70,000 NX / Aurora crate |
| 200 dupes -> 10 Aurora crates | 200 | 700,000 NX (via 11-packs: 636,364 NX) | ~63,636 NX / Aurora crate |

That's **18x the raw NX cost of an Aurora crate** - because Aurora crates
are not sold directly for NX. The Aurora pool is effectively a sink for your
losing Founder's streaks, not an independent purchase path. If you're
pulling Founder's and *not* dupe-converting, you're leaving stamps on the
table.

<div class="callout">
<strong>Timing matters.</strong> Equipping a piece - even once, even for a
screenshot - locks it out of the Aurora Stamp conversion. If you're not sure
whether to keep a piece yet, don't equip it. Right-click is reversible until
you commit.
</div>

<h2 id="aurora-crate">Aurora Mystery Fashion Crate (26 items)</h2>

**Price:** 20 Aurora Stamps per crate, 200 Aurora Stamps per 10-pack
(straight bulk; no bonus crate). **Sale window:** Oct 6, 2026 through
Jan 13, 2027 at 7:59 AM UTC - the full Aurora Stamp Shop Season 1 window.

The Aurora pool is **flatter than Founder's**: 1.50% is the floor, 5.75% is
the ceiling. Only 26 items vs. Founder's 50. If you're chasing a specific
piece, Aurora is easier to collect from piece-by-piece - but you're paying
for it in NX via the Founder's dupe pipeline, so the "cheap" framing is
misleading unless you were already going to roll Founder's heavily.

### 5.75% tier (4 items, the "common" ring/chat series)

| Item | Rate |
| --- | --- |
| Chocolate Chat Ring | 5.75% |
| Chocolate Label Ring | 5.75% |
| Ink-and-Wash Painting Name Tag Ring | 5.75% |
| Ink-and-Wash Thought Bubble Ring | 5.75% |

### 5.00% tier (9 items)

| Item | Rate |
| --- | --- |
| Black Cat Beanie | 5.00% |
| Hearts Tights | 5.00% |
| Heart Sunglasses | 5.00% |
| Orange Cat Beanie | 5.00% |
| Pink Bunny Sweater | 5.00% |
| Pink Elephant Slippers | 5.00% |
| Red Check Rider | 5.00% |
| Sky Blue Cat Beanie | 5.00% |
| Violet Dot Jeans | 5.00% |

### 4.50% tier (2 items)

| Item | Rate |
| --- | --- |
| Loose Fit Sweater | 4.50% |
| Stocking Shorts | 4.50% |

### 2.50% tier (4 items)

| Item | Rate |
| --- | --- |
| Cacao Bear Shoes | 2.50% |
| Chocolate Ribbon | 2.50% |
| Splash Choco Boy | 2.50% |
| Splash Choco Girl | 2.50% |

### 2.00% tier (5 items)

| Item | Rate |
| --- | --- |
| Blank Eye Patch | 2.00% |
| Choco Candy Cookie | 2.00% |
| Detective Glass | 2.00% |
| Heartbreaker Lips | 2.00% |
| Starlight Heart Scepter | 2.00% |

### 1.50% tier - rarest (2 items)

| Item | Rate |
| --- | --- |
| Soft Chocolate Fondue Scepter | 1.50% |
| White Choco Bunny | 1.50% |

**Aurora rate math reality check:** a target at 1.50% is median 46 crates to
first success. 46 Aurora crates = 920 stamps = ~920 Founder's dupes = at
best 920 x 3,182 NX = **~2.93M NX**. That's the practical cost of chasing
one specific Aurora rare if you fund the stamps entirely from Founder's. The
cheaper path, obviously, is to accept dupes along the way: your 920 Founder's
pulls will give you ~147 crate hits in Founder's 1% tier along the way, so
you're not getting *nothing* from the burn.

<h2 id="mechanics-and-gotchas">Mechanics and gotchas</h2>

### 7-day item duration

Every piece pulled from either crate expires 7 days after it hits your
inventory. **These are not permanent cosmetics**. If you pull Angel Halo and
leave it in storage for a week to admire later, it's gone. Equip and enjoy
it, screenshot it, then let it expire. Or dupe-convert it before equipping if
you don't want it at all.

(Our best reading of Nexon's "Duration: 7 days" phrasing is per-item expiry
on the pulled equip, not an expiry on the unopened crate. If you have an
in-game screenshot confirming the opposite interpretation, let us know.)

### Weapon-cover rules (Founder's)

Three weapons in the Founder's pool are "cash weapons" that cosmetically
replace whatever you have equipped, with permissive rules:

| Item | Can be worn with |
| --- | --- |
| Angel Wand | Any weapon |
| Orange Toy Hammer | Any weapon |
| Yellow Spatula | Any weapon |
| Cherub's Bow | **Bows only** - will not display over crossbows or melee weapons |

### Weapon-cover rules (Aurora)

| Item | Can be worn with |
| --- | --- |
| Soft Chocolate Fondue Scepter | Any weapon |
| Starlight Heart Scepter | Any weapon |
| Detective Glass | *(face accessory, not a weapon cover)* |

### Dyeable items

Every piece in both crates is dyeable with Nexon's Palette items **except**
the two Founder's ring pieces: **Kitty Chat Ring** and **White Label Ring**
are not dyeable. See
[Nexon's full dyeable-items list](https://www.nexon.com/maplestory/general-post/45821).

### Region restrictions

| Region | Can purchase crates? | Can trade pulled items? |
| --- | --- | --- |
| Belgium | **No** - Mystery items blocked | n/a |
| Slovakia | **No** - Mystery items blocked | n/a |
| Brazil | **No** - Mystery items blocked | n/a |
| Netherlands | Yes | **No** - pulled items are account-bound |
| Everywhere else | Yes | Yes (tradeable once) |

If you're in a block region and want the cosmetics, your only path is the
free market after someone else pulls them - see
[live resale prices](#live-resale-prices).

### Gifting

Both crates can be gifted via the Cash Shop's gift flow, but the recipient
must be **Lv. 12+**. The intent is to prevent new/throwaway accounts from
being used as gifting intermediaries for region-blocked buyers; practical
impact for players is that gifting a crate to a fresh character requires
them to clear Maple Island first.

<h2 id="live-resale-prices">Live resale prices on the Free Market</h2>

Nexon's rates tell you what you'll pull. The free market tells you what
other players are **selling the pulled dupes for in meso**. For live-world
resale pricing we recommend **[meso.watch](https://meso.watch)** - a
specialized price tracker that OCRs player shops out of public Twitch VOD
footage and surfaces typical sale price, last-3-sales average, and
per-shop sightings per item.

Browse these directly:

- [Ink-and-Wash Painting Name Tag Ring on meso.watch](https://meso.watch) -
  a frequent high-ticket Aurora pull on live Windia
- [Starlight Heart Scepter](https://meso.watch) - Aurora 2.00% rate, limited
  supply by definition
- [Soft Chocolate Fondue Scepter](https://meso.watch) - Aurora's rarest tier
  at 1.50%, the headline chase
- [Black Cat Beanie, Sky Blue Cat Beanie, Orange Cat Beanie](https://meso.watch) -
  Aurora 5.00% tier, bulky supply so prices stay reasonable

<div class="callout">
Meso.watch covers the free market only - which means Founder's items that
are account-bound (Netherlands) or non-tradeable (post-first-trade) don't
have resale data. We cross-check their methodology periodically; their
distinction between a confirmed sale (greyed-out shop row or stock
decrement) and an asking price (still-live row) is sharper than most
community price trackers.
</div>

<h2 id="is-it-worth-it">Is it worth it?</h2>

This is a strictly cosmetic 7-day-duration gacha. Nothing in either crate
gives stats, nothing is permanent, and nothing crosses into gameplay power.
With that said, here's an honest framing by player profile:

<div class="guide-summary-grid">
<div class="guide-summary-card">
<h3>You just want to look cute for a week <span class="status-pill status-pill--same">Casual</span></h3>
<p>One 11-pack (35,000 NX, ~ $35) buys you a 70% chance to see any given
2.5%-tier item and gives you 11 full outfit pieces to mix-and-match for a
week. If the look matters more than the collection, this is the cheapest
honest answer and you should stop reading.</p>
</div>
<div class="guide-summary-card">
<h3>You're chasing one specific 1% rare <span class="status-pill status-pill--rework">Risky</span></h3>
<p>Median 69 crates (241,500 NX, ~ $241). 99% confidence takes 459 crates
(1,606,500 NX, ~ $1,606). That's the actual math. Dupe-convert everything
along the way so you're at least funnelling the losses into Aurora stamps -
you'll net ~16 Founder's rare hits and ~137 non-rare items along the way,
which is... a lot of cosmetics you have 7 days to enjoy.</p>
</div>
<div class="guide-summary-card">
<h3>You want the "complete" Angel outfit <span class="status-pill status-pill--new">Spender</span></h3>
<p>Angel Halo + Baby Angel Wings + Toga + Angel Wand = four separate 1% rolls
you need to hit. If you treat each as independent coupon-collector, median
total is ~200 crates (700,000 NX, ~ $700) just for the Angel set alone.
There is no bundle. There is no pity on specific items. Expect to burn
Aurora stamps on dupes you'll never equip.</p>
</div>
<div class="guide-summary-card">
<h3>You're region-blocked (BE/SK/BR) <span class="status-pill status-pill--same">Market only</span></h3>
<p>You cannot buy crates. Your path to any crate item is the free market
after someone else pulls and trades. Check meso.watch for current pricing;
the 1% items will cost millions of mesos but you'll get a permanent piece
through the trade system rather than a 7-day timer.</p>
</div>
<div class="guide-summary-card">
<h3>You're on a budget and this is "the only cash thing I'll buy" <span class="status-pill status-pill--same">Honest</span></h3>
<p>Buy the 11-pack once. 35,000 NX, buy-10-get-1-free. You get 11 pulls, a
70% shot at the 2.5% commons, and a 16.8% chance (over 11 pulls) to hit at
least one 1% rare. Dupe the leftovers into stamps for the chance at one
Aurora crate. Done. Walk away.</p>
</div>
</div>

**What the guide can't tell you**: whether you'll enjoy the cosmetics
enough to justify the spend. That's an individual-value call. What the
guide can tell you is that the math is above and the pity floor is only
20 dupes per Aurora pull. There's no "guaranteed epic in N crates"
mechanism - you can be unlucky indefinitely.

<h2 id="faq">FAQ</h2>

**Does a Founder's Pack purchase include a Mystery Fashion Crate?**

No. The crate is a separate cash-shop item that happens to run during the
Founder's Access window. The Snail, Orange Mushroom, and Zakum Founder's
Packs include their own Founder's cosmetics (Thief hat/outfit set, Mark of
the Founder, Founder's rings) - but zero crate pulls.

**Can I trade crate items to another player?**

Yes, except in Netherlands (account-bound) or if you're already past the
one-time trade limit (crate items are tradeable once). The free-market
resale economy on meso.watch exists precisely because of this.

**What happens to my Aurora Stamps when Season 1 ends on Jan 13, 2027?**

Nexon's post states Season 1 stamps expire at end of season. We're
double-checking the exact wording before promising burn-or-lose semantics;
assume your stamps need to be spent before Jan 13 and plan accordingly.

**Is there a different "Mystery Fashion Crate" I'm seeing in the datamine?**

Yes. The datamine ships four crate variants:

- `5222000` - Mystery Fashion Crate (base, unreleased)
- `5222001` - Founder's Mystery Fashion Crate (**this guide**)
- `5222002` - Halloween Mystery Fashion Crate (unreleased, no Nexon disclosure)
- `5222100` - Aurora Mystery Fashion Crate (live, Oct 6 2026 - Jan 13 2027)

The base and Halloween crates have no Nexon rate disclosure and no NiaDB
simulator pages as of Oct 11, 2026 - they're pure datamine. We'll update
this guide (or ship siblings) when Nexon publishes their rates.

**Can I use NX from Nexon's main MapleStory account for Classic World?**

Yes. The FAQ confirms NX balance is shared between MapleStory and
MapleStory Classic. Maple Points are not. (Leaf Points are Classic
World's in-game cash equivalent, earned in-game, usable in the Cash Shop.)

**Where did meso.watch's data come from if everything in the crate is
7-day duration?**

Players equip or trade pieces during the 7 days. Trades show up in player
shops. OCR picks them up. The one-time-trade restriction limits how many
hands a piece passes through, but the first-trade market is active - and
some pieces (Aurora rings, scepters) trade for enough that whole secondary
economies form around them.

**What's the single most-asked rate chase in the pool?**

By observable free-market demand on live Windia (per meso.watch), the
Ink-and-Wash Painting Name Tag Ring (Aurora, 5.75%) and Soft Chocolate
Fondue Scepter (Aurora, 1.50%) are the headline chases. On the Founder's
side, Angel Halo (1.00%) and the paired Baby Angel Wings (1.00%) are
the recurring sought-after pieces - combined with Toga + Angel Wand they
build the full "Angel" look that defines a lot of the cosmetic meta.
