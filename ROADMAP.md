# Roadmap - Liven's Classic Maple Guide

> Living document. Edit freely as priorities shift. Every completed item
> moves to the CHANGELOG at the bottom.

---

## Mission

A community-built field manual for Global MapleStory Classic World -
every quest, map, item, and skill, sourced and player-verified.

Not just a meta site. Not just a leveling calculator. A one-stop
reference where you can look up any quest and know what it rewards,
open any map and know what spawns there, click any item and know where
it drops - with the reasoning behind every recommendation and honest
labels for the blank spots where we don't have the answer yet.

## Audiences (in priority order)

1. **Returning veterans** - remember the game, forgot the specifics.
   Need refreshers, not tutorials.
2. **First-time players** - need context without assuming twenty years
   of MapleStory knowledge.
3. **Optimizers** - want exact numbers, skill orders, training routes,
   drop tables, stat allocations.

Writing style: approachable enough for a beginner, precise enough for
a min-maxer. Every guide answers **what** AND **why**.

## Principles

1. **Sourced or labeled unknown.** No guessing. If we don't know, we
   say so and note where the answer is expected to come from.
2. **v83 is a research base, not an authority.** Historical material
   helps us start; every claim gets checked against Classic World.
3. **Comprehensive over meta-first.** DPS charts matter, but so does
   the flavor text of a level-13 quest in Ellinia.
4. **Nostalgia preserved.** Old YouTube videos, patch discussions, and
   community lore have a home here.
5. **Community-fed, editor-guided.** Contributions welcome; every
   published claim carries an accuracy label.
6. **Clarity before feature count.** One polished path beats ten
   half-finished ones.

---

## Content Pillars

The site grows across six long-term pillars:

| Pillar | Purpose | Example pages |
|---|---|---|
| **Reference** | Every entity in the game | Item DB, Monster DB, Map DB, Quest DB, NPC DB |
| **Guides** | How to play well | Leveling routes, PQ walkthroughs, equipment progression |
| **Class** | Deep dives per job | Warrior full guide, skill trees, stat requirements per advance |
| **Meta** | Optimization | AP planners, damage calculators, drop rate math |
| **History** | Nostalgia + change log | Early YouTube library, patch-note discussions |
| **Play** | Interactive corners | Omok vs bot, memory match, character customizer |

The **Community** layer (accounts, forums, contributions) cuts across
all six and gets built once the reference layer is mature enough to
have something to discuss.

---

## Phased Delivery

Each phase is a shippable unit. Nothing in a later phase is required
by an earlier one - we can pause and pivot between phases without
leaving the site in a broken state.

### Phase 1 - Foundation `SHIPPED`
Homepage, launch hub, source system, theming, brand mark, countdowns,
music, cursors.

### Phase 2 - First vertical slice `SHIPPED`
- Warrior guide (`/jobs/warrior`) as a fully-realized guide page
- Established `GuideLayout` template that every future job reuses
- Polished Perion palette (canyon rust, warrior cursor, rock silhouette)
- Added `historical-archive` source type + Ayumilove/HiddenStreet entries
- Added `Cliffs of Ancestry` BGM for Perion theme

### Phase 3 - Publishing platform
- Astro **content collections** for guides (MDX)
- Reusable `GuideLayout` with automatic TOC, verification banner,
  source list, "last checked" footer
- Category index pages: `/leveling`, `/quests`, `/party-quests`,
  `/equipment`
- Migration path so ANY new guide is a single MDX file

### Phase 4 - Reference database
Structured content-collection entries per entity type (NOT plain
data files - we want the layout + verification workflow that
collections give us). Sprites live on maplestory.io, referenced
via `wzId` and the `src/lib/maplestory-cdn.ts` abstraction so we
can pivot away from the CDN in one change if needed.

- **Phase 4a - Items**  shipped 2026-08-23 (schema + layout +
  routes + 5 seed entries). Editorial voice on top of sourced
  stats; cross-links to job guides where relevant.
- **Phase 4b - Monsters** - level, HP/MP, spawns, drop table,
  which items link to them via `droppedBy`
- **Phase 4c - NPCs** - location, quests given, shop wares
- **Phase 4d - Maps** - region, spawns (via monster refs),
  connections, NPCs (via NPC refs)
- **Phase 4e - Quests** - giver, prerequisites, steps, rewards
- Cross-index pages (e.g. "monsters in Ellinia Forest",
  "items dropped by Snails")

### Phase 5 - Job depth
- Skill trees per class with per-skill effect tables
- Stat requirements per advancement + where to go
- AP allocation planner (interactive)
- Equipment progression per class
- 1st-job advancement guides (Warrior, Magician, Bowman, Thief)

### Phase 6 - Search
- Pagefind static search across all guides and reference entries
- Site-wide "/" keyboard shortcut to focus search
- Faceted filters (by class, by region, by level range)

### Phase 7 - History library
- `/history/videos` - curated list of era-defining YouTube videos
- `/history/patches` - discussion pages for major changes
- `/history/nostalgia` - screenshots, old forum threads, era artifacts
- Each entry cites the source and includes editor commentary

### Phase 8 - Mini-games
- **Omok** (Gomoku) - HTML5 canvas, 15x15 board, three AI difficulties
- **Memory Match** - card-flip game with monster/item art
- Optional leaderboard (requires backend)

### Phase 9 - Character customizer
- Requires WZ asset extraction and normalization
- Sprite compositing (skin + face + hair + eq layers)
- Save/share builds via URL params
- Depends on: legal review of WZ asset use

### Phase 10 - Community layer
- Requires backend (Cloudflare Workers + D1, or similar)
- User accounts (email + OAuth)
- Threaded discussions per guide/item/quest
- Contribution submissions with editor approval
- Moderation tooling
- **This is where a static site graduates to a real app.** Consider
  hard before starting.

### Phase 11 - Polish, at any time
- Dark mode
- Mobile quick-reference mode
- Personal launch checklist (client-side, localStorage)
- WebP/AVIF conversion for images
- Perf audit (Lighthouse >= 95 across the board)
- i18n scaffolding (if a translator ever volunteers)

---

## Data Sources (in trust order)

1. **Official Nexon announcements** - source-of-truth for launch dates,
   features, patch notes.
2. **In-game observation during Founder's Access / launch** - primary
   for gameplay values.
3. **Closed Online Test data** - useful but labeled `closed-test-info`
   because values can change.
4. **v83 archives** (Ayumilove, old wikis) - starting point for
   research; NEVER published without cross-check.
5. **Community submissions** - labeled `community-reported` until
   editor-verified.

Every source lives in `src/data/sources.ts` with a full archive entry.

---

## Current Status

**Shipped (Phase 1):**
- Homepage with mission statement, jobs grid, launch checklist link
- Launch Hub with 8 sections, source citations, open-question list
- Sources archive (Ossyria Report + COT2 stub) with Wayback backup
- Countdown timers for Founder's Access and Official Launch
- 6-theme token system (Henesys done; 5 towns as stubs)
- Henesys scenic background, MapleStory cursors, per-theme BGM
- Reusable components: `SourceBadge`, `StatusBadge`, `VerificationNotice`,
  `LastUpdated`, `SourceCard`, `AccuracyLedger`, `JobCard`,
  `Countdown`, `MusicPlayer`, `MapleLeaf`, `LaunchTimeline`,
  `InfoCard`, `BaseLayout`

**Blocked / awaiting input:**
- BGM composer credits (need artist names for proper attribution)
- WebP conversion of background images (needs `sharp` or user-provided
  WebP)

**Next up:**
- **YOU: push to GitHub and click Deploy on Cloudflare Pages.**
  Everything on this side is ready. Follow `DEPLOY.md` step by
  step - it's ~10 minutes end-to-end.
- **Maple Island items backfill.** The 6 new quests reference
  items that don't yet have pages: Egg (2010002), Orange
  (2010004), Fruit Knife (1332001), Razor (1332000), The
  Green Relaxer (3010000). Ship at least Egg + Orange +
  Green Relaxer for full reverse-linking (dagger items lower
  priority since Thieves have better options in Victoria).
- **Content QA audit round 2.** The Diamond/Diamond Ore
  slip caught during round 5 verification suggests other
  editorial claims made from memory may have similar bugs.
  Systematic verification pass: read every quest editorial,
  cross-check ID references against the datamine.
- **More Maple Island tutorials** - remaining discovered but
  unshipped: Sam's Suggestion (1006), Mai's Training chain
  (1009-1010), Biggs's Collection (1011), Pio's Recycled
  Goods (1012), Rain's Maple Quiz 1 & 2 (1013-1014).
- **Cursed Doll tier 5 hat variants.** Steel Nordic Helm
  is the flagship; the other 17 variants (Nordic Mithril/
  Gold; 5 Guiltians; 5 Distinctions; 5 Pilfers) could get
  lighter stub pages that cross-link back to the flagship.
- **Citizenship guide deep-dive.** Datamine has 30+ Citizenship
  quests in the 506xxx block: Community Board donation quests
  (506019-506032, twelve tiers of donating to Henesys!), the
  Chief Stan backstory arc (506041-506045), plus 'To Henesys,
  the Prairie Town' (506000) entry quest. Our current
  citizenship.md guide (23KB) is likely missing most of this.
  Big rewrite opportunity.
- **Crafting guide expansion.** crafting.json (93KB) has
  recipe data we're not yet surfacing. Current crafting.md
  (34KB) is text-only - could add recipe tables cross-linked
  to the ore items already referenced in Cursed Doll chain.
- **Ronnie's House-Building chain** (10206-10209, L41) -
  direct continuation of the Ronnie storyline, follows
  Sleepywood chain thematically.
- **HPQ / LPQ / OPQ status:** absent from datamine as of
  Aug 2026. Re-scan when datamine updates. If they remain
  cut in Classic World, document that decision on the
  /party-quests page.
- **More items for reward tables:** Diamond (referenced in
  Sleepywood chain step 6 as trade to Rowen), other Cursed
  Doll tier 5 hats (Steel Nordic Helm etc.), common weapon
  drops from L20-40 mobs.
- **Content QA pass:** the Ribboned Pig Headband stat fix
  suggests every existing item file might have similar v83-
  baseline stats that Classic World rebalanced. Systematic
  audit needed: cross-check every item page's numeric stats
  against osmsdataexplorer.com.
- Ludibrium PQ / Orbis PQ / Monster Carnival PQ if/when their
  entry-quest IDs surface in the datamine. Currently absent -
  they may be gated content not yet in CoT 2 Founder's Access.
- Level 40 hat variants from Cursed Doll chain tier 5:
  Steel Nordic Helm (1002139), Dark Guiltian (1002144), Dark
  Distinction (1002151), Dark Pilfer (1002156). Old Wisconsin
  is the flagship page; the others could be lighter stubs that
  cross-link back to the chain.
- Wire the `Leveling` and `Tools` nav slots to real pages (they
  still point at `#`). Leveling could aggregate the training
  routes from each class page; Tools could host EXP calculators
  and equipment optimizers eventually.
- Upgrade the search widget from Pagefind's Default UI to
  Component UI (v1.5+) for the modal-style search overlay and
  better a11y - purely a polish pass; current Default UI works.
- Extract Estelle's sprite from the CoT 2 client via HaRepacker-
  Resurrected (or find an alternate maplestory.io variant) so
  her quest hero gets its picture.
- Dedicated `/jobs/{class}/{branch}` pages once we have enough
  authored per-branch content (full skill trees, per-branch
  training routes, per-branch equipment progression). The
  preview-skills pattern is intentionally the tease before the
  deep dive.
- Third-job progression pages. CoT 2 dashboard has all 25 class
  entries; we're currently covering 4 (first job) + 10 (second
  job branches, preview only) = 14 of them.
- Extend quest chain seeds - Sera's Mirror step 2 exists in
  the datamine but not yet on the site; the 4 advancement
  quests each need their 3 follow-up chain steps too. Following
  each chain to completion resolves the `nextQuest` links.
- Identify the CoT 2 PQ entry quests (Kerning City PQ, etc)
  and seed them into the party-quest category so `/party-quests`
  actually populates.
- Investigate v83 unique-reward quests (bathrobe / bone helmet /
  skull earrings) - initial dump search returned zero matches in
  CoT 2, meaning they were either renamed for Classic World or
  rolled into the crafting system. Requires a dedicated grep
  session against the full 712-item + 348-recipe dump.
- Grow the items collection beyond the 5 seeds (target: every item
  named in the four job guides gets an entry - lookup + editorial
  authoring per item; sprite is free via wzId)
- Add a "Mentioned items" section to each job guide that pulls
  from the items collection, tightening the cross-linking loop
- Second Whispering Willow Path variant (user has two versions;
  either pick one or wire a way to swap between them)
- Additional system guides (drop-in .md files now that Phase 3 shipped)
- BGM tracks for Ellinia (`public/audio/ellinia.wav`), Kerning
  (`public/audio/kerning.wav`), and Sleepywood
  (`public/audio/sleepywood.wav`)
- Deploy the site! No hosting configured yet - Cloudflare Pages
  is the obvious pick for a static Astro build
- Phase 4b - Monsters collection (same pattern as items; enables
  the `droppedBy` cross-links on item pages to actually resolve)
- Optional: extract the shared `SourceType` / `verificationStatus`
  enum to a const both sources.ts and content.config.ts import,
  killing the drift risk called out in the schema comment

---

## Changelog

- **2026-09-09** - **Sprint round 60: Content cleanup pass -
  mojibake, missing routes, PQ upgrades, homepage spotlight.**

  Direct response to Liven's feedback after browsing the live
  site. Six distinct fixes/features landed:

  **1. Mojibake fix (double-encoded UTF-8):**
  `src/content/guides/citizenship.md` (43 fixes) and
  `crafting.md` (7 fixes) had every `—` em-dash mangled to
  `â€"` from a bad Latin-1/UTF-8 round-trip somewhere in the
  authoring pipeline. Wrote `scripts/fix-mojibake.ps1` - an
  idempotent script that maps the classic mojibake sequences
  (em-dash, en-dash, curly quotes, ellipsis) back to their
  intended Unicode + strips stray `Â` artifacts. Writes UTF-8
  without BOM. Zero-warning idempotent rerun. All 50
  replacements applied, all subsequent scans clean.

  **2. Citizenship + Crafting pages now render:**
  Both were in the nav bar since day one but 404'd - the MD
  content collection entries existed, the wrapper .astro
  routes had never been built. Now shipping:
  - `src/pages/citizenship.astro` -> renders `guides/citizenship.md`
  - `src/pages/crafting.astro` -> renders `guides/crafting.md`
  - `src/styles/markdown-body.css` -> shared prose styles for
    both (hoisted so both pages get identical typography via
    a single global import instead of duplicated blocks).

  Homepage's `systemGuides` collection surface now
  auto-populates with real links instead of dead ones. Nav
  items "Citizenship" and "Crafting" work.

  **3. Party Quest upgrades (three sub-fixes):**

  - **Henesys Party Quest added** to the planned lineup.
    Lv 40-50, 3-6 party, Kappa Fields + Moon Bunny. Filled
    the odd gap where LPQ + Mu Lung Dojo were on the roadmap
    but HPQ (arguably more iconic than Dojo) wasn't.
  - **KPQ card now shows the King Slime sprite** via the
    `<Sprite>` component with the standard
    `mobSpriteSrcs(id, wzId)` fallback chain. King Slime is
    in our datamine (id 800003, wzId 9300003) so the
    maplestory.io CDN serves the sprite reliably.
  - **LPQ and HPQ cards render text-only** - Alishar and Moon
    Bunny are Ludibrium/Henesys content that isn't in COT2
    yet, so no sprite. When those PQs actually ship in a
    future patch we'll add mob IDs.

  **4. Hidden Streets sub-catalog:**
  New `/maps/hidden` page. 69 hidden-street maps from the
  datamine, grouped by region (Victoria Island 43, Ossyria 3,
  Other 23). Featured spotlight cards for Forgotten Hollow,
  Pig Beach, and Mushroom Garden with editorial blurbs
  explaining how to reach each. Every entry deep-links to
  its map dossier at `/maps/{id}` where the return-portal
  location lives. Explainer prose at the top defines what a
  hidden street IS (streetName field == "Hidden Street") so
  new readers don't need external context.

  **5. Forgotten Hollow homepage spotlight:**
  Purple-accent gradient card between FoundersPackagesCard
  and the countdown section. "New in Classic World / Forgotten
  Hollow / Ellinia · Lv 45-50" with two CTAs (quest chain +
  hidden streets index). Deliberately hero-positioned because
  Forgotten Hollow is the single biggest new-content story
  between v83-era Maple and MSCW.

  **6. Quest EXP "?" bug fix:**
  Datamine reward objects have an inconsistency: `meso` and
  most types use `amount`, but `exp` rewards use `value`. Our
  `[id].astro` template only checked `amount`, so **310 quest
  pages were showing "? EXP"** instead of the actual value.
  Fix: `r.amount ?? r.value ?? "?"`. Verified: /quests/1005
  (Todd's How-to-Hunt) now renders "10 EXP" and /quests/1006
  (Sam's Suggestion) renders "30 EXP".

  **Bugs caught + fixed same-sprint via qa-kitten:**

  - Invisible spotlight primary CTA: my `.spotlight__copy a`
    selector was overriding `.primary-button`'s
    `color: var(--text-on-accent)` because `.spotlight__copy a`
    has higher CSS specificity than `.primary-button`. Fix:
    scoped to `.spotlight__copy p a` so it only styles
    inline paragraph links, not buttons.
  - MeowDB mob sprite URLs 404'd because I called
    `mobSpriteUrl(wzId)` when the function expects the small
    internal datamine ID. Switched to the `<Sprite>` component
    with `mobSpriteSrcs(id, wzId)` which does the proper
    two-source fallback chain (maplestory.io first, meowdb
    second) and auto-hides on total failure. Learned lesson:
    **the ID mismatch between internal-small-id and wzId is
    subtle and error-prone**; always use `mobSpriteSrcs()`,
    never `mobSpriteUrl()` directly.

  **Sprint 70 - Giscus comments LIVE + GitHub repo bootstrap:**
  Two-birds sprint. Set up the project's canonical GitHub home
  AND activated blog comments in one motion.

  **GitHub repo bootstrap:**
  - Local git repo had ~5 old commits but was ~15 sprints
    behind reality (60+ untracked files spanning Sprint 10-69).
  - Added tmp-icons/ to .gitignore (scratch png files from
    character catalog work).
  - Snapshot commit "Sprint 69 snapshot: full site state..."
    (350 files staged) as the modern baseline. Per-sprint
    reconstruction would have been error-prone; ROADMAP.md
    already has the changelog.
  - Created public repo xLivennicex/livens-classic-maple-guide
    via `gh repo create`. Cloudflare Pages deploys stay direct-
    upload for now (no CI wire-up yet).
  - `git remote add origin` + `git push -u origin main`.

  **Giscus comments live:**
  - Enabled repo Discussions via `gh api PATCH /repos/... -f
    has_discussions=true`.
  - Fetched repoId + auto-created category IDs via GraphQL.
    Used the auto-created "Announcements" category rather than
    hand-creating a "Blog Comments" category (GitHub's GraphQL
    API doesn't expose createDiscussionCategory; label is
    purely cosmetic since Giscus uses categoryId).
  - Liven manually installed the Giscus GitHub App on the repo
    (browser-only OAuth flow, no CLI workaround exists - REST
    endpoint requires the token to already be authed AS an app).
  - Flipped enabled: false -> true in src/config/giscus.ts.
    Comments.astro now renders the live widget on every blog
    post instead of the "coming soon" placeholder.

  Design principle honored: Comments.astro's placeholder branch
  stays intact. If the Giscus app is ever uninstalled or the
  config values become stale, flip enabled back to false and
  the site degrades gracefully instead of showing a broken
  widget.

  **Sprint 69 - Item detail beef-up + town lore & activities:**
  Two-part content + polish sprint. Item pages get concrete
  reader-value upgrades; every Victoria Island town gets
  editorial lore + curated activity cards.

  **Part A - Item detail page (ItemDetailLayout):**
  - Drop-source rows now show mob level + region (e.g.
    "Ligator - Lv 15 - Kerning City") pulled from mob dossier
    stats.level and mapsSpawnedOn[0].region. Reader can plan
    hunts without clicking into /mobs/{id}.
  - New "Similar items nearby" section for equipment: same
    category + same equipSlot + within +/-5 reqLevel + matching
    reqJobLabel, sorted by ascending reqLevel, capped at 8.
    Computed in /pages/items/[item].astro getStaticPaths so it
    ships as a pre-filtered prop (no per-render corpus scan of
    4300 items). Consumables and non-equipment skip the section
    - honest empty state is better than a forced grid.
  - WZ ID badge is now a copy-to-clipboard button. Progressive
    enhancement: renders as a plain badge without JS, gains
    async Clipboard API click behavior on hydration with a
    document.execCommand fallback for old browsers. Flashes
    "copied" for 1.5s on success.
  - findRelatedItems has to live INSIDE getStaticPaths (Astro
    isolates that scope during prerender chunk generation -
    module-level helpers throw "not defined"). Documented in
    the file.
  - Two rounds of QA turned up filter bugs: `equipSlot` is null
    on ~95% of items (only 208/4300 fill it). Real grouping
    axes are `weaponType` for weapons and `subCategory` for
    armor (Hat/Top/Bottom/Shoes/Glove/Shield/Cape/Overall/
    Earring). Also: tier-0 starter gear has `reqLevel: null`
    so fallback to 0 was needed. Final logic ships correct
    for all 3 shape combos: weapons, armor, non-equipment.

  **Part B - Victoria Island town deep-dives:**
  Extended VictoriaTown interface with two new optional fields:
  - `lore: string[]` - 2-4 paragraphs of world/character flavor
    written from an in-world perspective. Sits between the site's
    editorial voice and the game's canon.
  - `activities: TownActivity[]` where activity has
    `{ title, description, category }`. Categories are a typed
    union: quest / combat / social / exploration / trade / lore.
    Category drives left-border and eyebrow tint on the card.

  Wrote lore + 4-6 activities for all 8 towns: Amherst,
  Southperry, Lith Harbor, Henesys, Ellinia, Perion, Kerning
  City, Sleepywood. Total: ~24 paragraphs of lore + ~44
  activity cards.

  Rendered as two new sections in
  /world/victoria-island/[town].astro sitting between the
  landmarks callout and the auto-generated NPC roster:
  - `.town-lore` - book-column max-width prose panel with the
    town's theme accent as left border.
  - `.town-activities` - responsive grid of 6-color-coded
    category cards (repeat auto-fit, minmax 260px).

  Design principle: these are OPTIONAL fields. Any town without
  a `lore` or `activities` entry just skips the section cleanly
  - the auto-generated NPC/quest/hunt data still renders. Adding
  editorial to a new town is additive, never required.

  **Sprint 68 - 2nd job branch guides (4 pages) + editorial
  primitives DRY refactor:** Content sprint. Four new decision-
  guides for the Lv 30 branching moment, one per class. Also
  did the "hoist duplicated CSS to global" refactor before
  scaling to N pages.

  **New pages shipped:**
  - `/guides/warrior-2nd-job` - Fighter, Page, Spearman.
    Three-branch decision, weapon speed tradeoffs (Sword vs
    Axe, Sword vs BW, Spear vs Polearm), full skill kits with
    Max Lv columns, per-branch build orders keyed by level
    bracket, common Lv 30-70 progression tips, 3rd-job preview.
  - `/guides/magician-2nd-job` - F/P, I/L, Cleric. Element
    identity, DoT vs freeze-CC vs holy-support kits, Heal
    farming callout for Cleric.
  - `/guides/bowman-2nd-job` - Hunter, Crossbowman.
    Explicitly explains the Power Knockback shuffle: v83 had
    it in BOTH Hunter and Crossbowman 2nd-job kits; CoT 2
    moved it to 1st job. Two-branch decision, positioning tips
    for Iron Arrow line-piercing.
  - `/guides/thief-2nd-job` - Assassin, Bandit. Ranged claw +
    stars vs melee dagger. Steal ROI callout for drop farming.

  All four follow the same structure: hero + lede, verification
  callout (v83 baseline pending Founder's Access), three-card
  branch summary, per-branch skill tables, build orders,
  common progression tips, 3rd-job preview, cross-links.

  **Design system refactor - editorial guide primitives:**
  When starting the Warrior page, I duplicated 5 CSS blocks
  (~110 lines) from skill-changes.astro. Instead of 4x-
  duplicating on subsequent pages, hoisted the shared design
  primitives to global.css as a proper design-system layer:

  - `.guide-summary-grid` + `.guide-summary-card` (namespaced
    to avoid collision with page-generic `.card` classes).
  - `.status-pill` + variants (`--new`, `--rework`, `--same`)
    for categorical labels. Distinct from the global `.badge`
    (typographic emphasis only) - status pills have border +
    pill background because they encode category, not just
    styling.
  - `.callout--framing` - variant of existing `.callout` for
    "verification stance" notes.
  - `.skill-list-wrap` + `.skill-list` - simple table-based
    skill catalog. Renamed from `.skill-table` to avoid
    colliding with the existing grid-based `.skill-table` used
    by JobGuideLayout for 1st-job pages.
  - `.section-lede` - italic muted-color intro paragraph for
    section subheaders.

  Backward-cleaned skill-changes.astro too: removed its scoped
  duplicates, uses the shared primitives now. Slight visual
  refresh (bg-cloud card bg instead of surface-card, less
  space-between h3) but design language is now more cohesive.

  Also cross-linked: skill-changes now has a "What about 2nd
  job?" section pointing to the four new guides. Guides index
  gets a new "class-choice" category with its own tan-colored
  section header between "CoT 2 vs v83 Reality Check" and
  "Beginner reference".

  Additional Sprint 67 floor cleanup swept incidentally: two
  spots that survived the batch replace (`.card__badge` on
  guides index at 0.68rem, `.skill-callout__badge` on skill-
  changes at 0.65rem) both bumped to 0.78rem.

  **Sprint 67 - L1 typography floor cleanup:** Follow-up polish
  from the Sprint 66 audit backlog. qa-kitten counted 23 elements
  at ~11.2px font-size on the homepage (mostly category badges,
  eyebrows, meta labels, and status pills). All below the ~12px
  readability floor for 375px viewports.

  **What shipped:**
  - Batch replace across `src/**/*.astro` + `src/styles/*.css`:
    every `font-size: 0.7rem` (11.2px) and `font-size: 0.72rem`
    (11.52px) bumped to `font-size: 0.78rem` (12.48px).
  - Total: **62 replacements across 32 files** (30 astro pages/
    components + 2 CSS files).
  - Target size chosen to match the existing `.eyebrow` design-
    system floor (already 0.78rem in most components), so bumped
    elements slot into the same visual language as their siblings.
  - Zero visual regressions expected: 0.7 -> 0.78 is a ~1.3px
    delta at 16px root, safely below the "layout breaks from
    text-size bump" threshold for existing badge/pill/label
    contexts.
  - Sizes at 0.75rem (12px) and above left untouched - those are
    exactly at the WCAG readability floor and don't need bumping.

  Full sweep verified via grep - zero remaining `0.7rem` or
  `0.72rem` font-sizes anywhere in `src/`.

  **Sprint 66 - Mobile responsive pass:** First real mobile
  responsiveness sprint. Started with a structured qa-kitten audit
  across 6 pages x 3 viewports (375/390/768) to surface real issues
  instead of guessing. Found 2 critical, 2 high, 3 medium bugs. All
  6 fixed and verified in this sprint.

  **Fixes shipped:**

  - **C1: Hamburger drawer nav for <820px viewports.** The 7-item
    horizontal PrimaryNav needed ~587px inline; below that, dropdowns
    were clipped BOTH horizontally and vertically by the overflow
    container that fell back to horizontal scroll. Half the site's
    nav was functionally unreachable on iPhone SE/12/13.
    Replaced with a proper hamburger toggle + slide-in left drawer:
      - Hamburger button hidden on desktop (>=820px), visible below.
      - Drawer is `position: fixed; top: 0; left: 0; bottom: 0;
        width: min(84vw, 320px)` with 84vw cap so it never covers
        the full viewport.
      - 7 top-level items stack vertically inside the drawer with
        44px tap targets and generous font-size.
      - Dropdown groups (Play/World/Content) become inline
        accordion sections inside the drawer instead of absolute-
        positioned popovers. Same JS toggle logic, different CSS
        presentation.
      - Semi-transparent backdrop with blur behind the drawer;
        tap to close.
      - Body scroll locked while drawer is open.
      - Hamburger animates burger -> X when open (3 CSS lines
        rotate + fade).
      - Escape closes drawer first (if open) then any open dropdown.
      - matchMedia listener auto-closes drawer if viewport crosses
        the breakpoint while open.
    Two follow-up bugs fixed in same sprint:
      - Sub-menu accordion offscreen (-146px translateX): desktop
        rule `.primary-nav__item--open .primary-nav__menu {
        transform: translateX(-50%) }` (for desktop popover
        centering) had higher specificity than my mobile
        `.primary-nav__menu { transform: none }` reset. Fixed by
        adding matching-specificity `transform: none` override
        inside the mobile breakpoint on the exact same selector
        list.
      - Backdrop kept blocking clicks after close: transitioning
        `opacity: 1 -> 0` doesn't stop pointer events. Added
        `pointer-events: none` by default, `auto` only when
        `--drawer-open` class is present.
      - Cosmetic follow-up: bumped drawer top padding to 3.75rem
        so the hamburger X (which keeps its z-index-110 spot
        above the drawer) doesn't overlap first item.

  - **C2: Carousel arrows overlapping slide text on <480px.**
    Arrows sat directly on top of paragraph text at iPhone
    widths. Hidden them entirely below 480px (rely on dots +
    auto-advance). Added bottom padding so dots don't crowd
    the last line of slide text.

  - **H1: Music widget compact + non-overlapping on mobile.**
    Below 500px, widget shrinks to 44x44 icon-only circle with
    semi-transparent background + blur. Added 3.5rem
    padding-bottom to main.page-width on same breakpoint so
    tail content is never occluded.

  - **M1: Item table scroll-hint gradient.** Right-edge gradient
    fade on `.cat-table-wrap` signals "more columns -> swipe
    right". Uses `background-attachment: local` so the gradient
    only appears when actual overflow exists.

  - **M2: Carousel dot tap targets bumped to 44x44 WCAG minimum.**
    Uses `background-clip: content-box` + 15px padding trick to
    keep the visible dot at ~14px while giving a 44x44 hit area.

  - **M3: Search placeholder shortened.** "Search everything
    (Fish Spear, Snail, Henesys...)" -> "Search items, maps,
    NPCs..." Fits at 375px without truncation.

  **QA sign-off from qa-kitten:** all 6 fixes verified via DOM
  measurements + visual screenshots at 375x667. Bug B (backdrop
  regression) and Bug A (accordion offscreen) both re-verified
  green after the second-round fixes. Desktop nav
  regression-checked at 1280x800.

  **Backlog (from audit):**
  - L1: 23 elements at <=11.2px font-size on homepage (badges,
    eyebrows). Not blocking; could bump to 12px for polish.

  **Sprint 65 - Guide readability card + design token:** Same
  "text on busy themed backdrop is hard to read" problem Sprint 64
  fixed for blog posts, now flagged again by Liven for guide pages
  (Perion desert cityscape screenshot on items-to-keep). Fixed
  DRY-first: all 8 guide pages use `<article class="prose">`, so
  ONE rule in global.css cards them all.

  **What shipped:**

  - **Card treatment on `.prose`** in global.css: semi-opaque
    (color-mix 94% var(--surface-card) + transparent),
    backdrop-filter blur, themed border, box-shadow soft glow.
    Covers all 8 `/pages/guides/*.astro` pages in one edit -
    consumables, exp-then-vs-now, getting-started, items-to-keep,
    meso-saving, party-exp, skill-changes, whats-new-in-cot2.
  - **Design token `--shadow-content-card`** in `:root` scope
    of global.css. qa-kitten flagged that .post--card (blog) and
    .prose (guides) had NEARLY IDENTICAL shadow values (30px/12%
    vs 26px/10%) - drift-prone. Extracted to one shared token
    that BOTH now reference. Zen of Python: "there should be one
    obvious way to do it." color-mix + var(--accent-primary) means
    the token themes automatically per region without per-theme
    definitions.
  - **Responsive tightening**: .prose padding shrinks + radius
    softens on <640px viewports.

  Guides now visually match the blog post treatment as one design
  system. Verified by qa-kitten with 3 screenshots
  (items-to-keep in Perion, party-exp in Kerning, skill-changes
  in Perion) - card renders theme-aware in each region.

  **Sprint 64 - Readability, nav consolidation, home carousel:**
  Three UX fixes in one pass, all raised by Liven from the Sprint
  63 deploy: (1) blog post text hard to read against Kerning City's
  busy dark cityscape background; (2) top nav grown to 17 flat items,
  crowded; (3) home page's static two-video grid should become a
  rotating deck that also surfaces blog updates.

  **Fix 1 - Blog post readability (`post--card` treatment):**
  Wrapped the article body in a semi-opaque backdrop-blurred card
  with a soft glow. Uses `color-mix(in srgb, var(--surface-card)
  94%, transparent)` so ONE rule works across every theme's
  --surface-card value. `backdrop-filter: blur(8px) saturate(1.05)`
  is progressive-enhancement (browsers without support still get
  the 94% opacity layer, which is most of the win). Box-shadow uses
  low blur + high spread for a diffuse edge (not a hard drop-
  shadow), theme-tinted via var(--accent-primary). Responsive
  padding shrink on <640px viewports.

  **Fix 2 - Nav consolidation (17 flat items -> 7 grouped):**
  Extracted the nav into `src/components/PrimaryNav.astro` and
  restructured into 7 top-level entries, three of which are
  grouped-dropdown menus:
    - Home, Launch (standalone; urgency + freq)
    - Play (Jobs, Character, Citizenship, Crafting)
    - World (World map, Maps, NPCs, Mobs, Bosses, Hall of Fame)
    - Content (Quests, Party Quests, Items)
    - Guides, Blog (standalone; SEO + engagement value)
  Removed "Tools" placeholder entirely (was `href="#"` since day 1;
  YAGNI).
  Dropdowns are `<button>` triggers + `<ul>` submenus with proper
  ARIA (aria-expanded, aria-haspopup, aria-hidden). CSS opens on
  :hover and :focus-within for mouse + keyboard; ~30 lines of JS
  handle click-to-toggle (mobile), click-outside-close, escape-close
  with focus return. Active-branch style so users see which group
  contains the current page even when its menu is closed. Mobile
  view keeps horizontal-scroll fallback for narrow screens; menus
  reposition to left-align to avoid offscreen overflow.

  **Fix 3 - HomeCarousel component (new):**
  Replaced `<LaunchVideos />` on the home page with a full-featured
  rotating carousel. Slide types supported:
    - blog (auto-pulled: featured=true posts, newest first, cap 2)
    - video (curated YouTube IDs, still hardcoded; datamine doesn't
      cover trailers)
    - update (empty by default; ready for site news / roadmap slides)
  Behavior:
    - Auto-rotate every 7s.
    - Pauses on hover, focus-within, and prefers-reduced-motion.
    - Full keyboard nav: arrow-left/right advance slides, focus lands
      on prev/next/dot buttons naturally via tab order.
    - `aria-live="polite"` on the viewport so slide changes get
      announced.
    - YouTube iframes stay embedded across slide changes so play
      state persists (privacy-mode nocookie domain, lazy load).
    - Absolute-positioned slides inside a min-height viewport so the
      frame doesn't jump between video and text slides.
    - Responsive: video+body layout stacks vertically on <780px,
      viewport min-height grows to compensate.
  First slide currently = the Nexon private-server crackdown post
  (featured). Followed by the two launch trailers. Deck grows
  automatically as new featured blog posts ship (older featured
  posts naturally roll off past the cap of 2).

  **Small polish while there:**
  - Added subtle text-shadow to `.home-carousel__title` for extra
    contrast against the light-blue sky gradient on home page
    (qa-kitten flagged this as marginal; fix was a one-liner).

  QA (qa-kitten screenshots): all three features shipped clean, no
  regressions on sampled routes (/jobs, /maps, /npcs, /citizenship
  all 200), nav a11y verified (button + aria-expanded + aria-haspopup
  + aria-current + active-branch highlighting), carousel a11y verified
  (aria-live, aria-selected on dots, keyboard nav functional).

  **Sprint 63 - Blog infrastructure + Nexon private-server
  editorial:** Two deliverables in one sprint. First, an
  entire blog subsystem with GitHub-Discussions-backed
  comment threads. Second, the actual first editorial post -
  a "Slightly Controversial News" summary + commentary on
  Nexon's September 11 memo declaring public enforcement
  posture on unauthorized private servers.

  **Blog infrastructure shipped:**

  - **Content collection `blog`** in content.config.ts.
    Frontmatter schema covers title, description, excerpt,
    publishedAt, author (default "Liven"), tags, category
    enum ("news" / "opinion" / "changelog" / "community"),
    theme, featured flag, commentsEnabled flag, sourceUrl +
    sourceLabel (for news commentary that cites sources).

  - **`/blog` index** (src/pages/blog/index.astro) - sorted
    newest-first, splits featured posts into a hero section
    above the chronological grid. Each card shows category
    badge (color-coded), date, title, excerpt, top-3 tags.
    Empty state handled for pre-first-post case.

  - **`/blog/[slug]`** route (src/pages/blog/[slug].astro) -
    renders one blog post via BaseLayout with post header
    (back-link + category badge + date + author byline +
    updated-date + tag list), the optional "Source article"
    aside prominently linking the cited URL, the markdown
    body, a footer back-link, and comments (if enabled).

  - **`<Comments />` component** (src/components/Comments.
    astro) - Giscus-backed, reads config from `src/config/
    giscus.ts`. When Giscus is disabled (default until repo
    config is done), renders a friendly "comments coming
    soon" placeholder instead of a broken widget. Term
    override supported for future non-blog use.

  - **`src/config/giscus.ts`** - single-file config with a
    six-step setup guide as top-of-file comment. Liven
    activates comments by: enabling GitHub Discussions on
    the repo, installing the Giscus GitHub App, creating a
    "Blog Comments" category, running giscus.app to get the
    four IDs, pasting them in, and flipping enabled = true.
    Zero code changes needed elsewhere.

  - **Nav update** in BaseLayout.astro - "Blog" added
    between "Guides" and "Tools".

  **Editorial post shipped:**

  - `/blog/nexon-private-server-crackdown` (~2500 words) -
    news summary + opinion piece framed as "Slightly
    Controversial News". Preserves Liven's specific voice
    and questions:
      * Nostalgia framing (private servers preserved what
        Nexon abandoned)
      * Alternative game rules framing (rebirths, class
        combos, no-P2W - things Nexon never shipped)
      * "Support structure around them" quote analysis -
        that Nexon's memo language deliberately extends
        beyond just operators to hosting, wikis, tool devs,
        Discord communities, content creators
      * The MapleStory 2 parallel and the risk of "Nexon
        killed the product AND removed our workaround"
      * Six open questions: will this drive players to
        Classic, was the Founder Pack normal or foreshadow,
        does Nexon actually think private servers threaten
        revenue, if Classic fails which private server
        rises next, will Nexon eventually copy the non-P2W
        model
    Sourced directly to Nexon's official memo (Sep 11
    2026, https://www.nexon.com/maplestory/news/general/44825)
    with the sourceUrl rendered as a prominent aside near
    the top of the post.

  Featured flag set to true so the post pins to the top of
  /blog. Comments enabled (renders placeholder until Giscus
  config is done).

  **Follow-up items for Liven:**
  1. Configure Giscus (6-step guide in src/config/giscus.ts
     top-of-file comment). Estimated 5-10 min once GitHub
     Discussions are on.
  2. Consider follow-up posts using the same blog
     infrastructure - the schema supports "news" /
     "changelog" / "community" categories which are all
     wired up but unused so far.

  **Sprint 62 - CoT 2 vs v83 reality check trilogy:** Three
  new editorial pieces addressing the returning-player blind
  spot: the v83 wiki knowledge many players bring to MSCW is
  only partially accurate. Frame: "here's what changed, here's
  what didn't, here's what we don't yet know." Sprint 61's
  Party EXP guide leaned too hard on v83-canonical formulas
  as if they were CoT 2 gospel; this sprint corrects that.

  **New pages:**

  - `/guides/whats-new-in-cot2` - the anchor "returning
    player" piece. Enumerates CoT 2 additions with real
    datamine counts: 78 CoT2-only maps (40 Victoria Island
    incl. Forgotten Hollow, 17 Physical Fitness Test JQ,
    6 Maple Island rework, etc.), the two new systems
    (Citizenship + Crafting have no v83 analog), summary
    of skill changes, and an honest "what we don't yet
    know" section (party formula, PQ ship list, 2nd/3rd
    job kits, boss lineup, live-server EXP multipliers).

  - `/guides/exp-then-vs-now` - datamine-verified mob EXP
    comparison table for 26 iconic mobs. Real result:
    MOST v83 mob EXP values carry over unchanged. Only
    concrete outlier spotted so far is Slime (6 -> 10
    EXP, +67%). Green Mushroom drops 1 EXP but within
    wiki variance. Also covers quest EXP (Mai's Training
    at Lv 3 = 70 EXP per datamine), the party formula
    uncertainty (formulas live in server code, not
    client), and what Nexon historically retunes vs
    leaves alone.

  - `/guides/skill-changes` - class-by-class 1st-job kit
    diff. Warrior gained Precise Strikes (new passive,
    accuracy + crit rate, skill ID 1000002). Bowman lost
    Blessing of Amazon and gained Power Knockback
    (always-crit AoE crowd control). Magician + Thief
    kits identical to v83 baseline (datamine calls Thief
    "Rogue" internally). Uses summary-card grid with
    green NEW/orange REWORK/gray UNCHANGED badges for
    at-a-glance scanability, plus per-skill callout boxes
    for the two confirmed changes with mechanic + SP
    recommendation context.

  **Retrofit:** added prominent framing callout at the top
  of `/guides/party-exp` acknowledging that the formula is
  v83-canonical and CoT 2 hasn't been verified. Party
  formulas live in server code, not client files, so
  datamine can't surface them. Links to exp-then-vs-now
  for the fuller uncertainty discussion.

  **Guides index (/guides) reorganized:**
  - Added "CoT 2 vs v83 Reality Check" section as the
    FIRST guide category (highest returner intent).
  - "Start here (returners)" badge on the anchor piece.
  - Renamed old "Shipped" section to "Beginner reference &
    orientation" for clarity.
  - Wrapped "Coming next" in a conditional so the section
    hides entirely when planned is empty (currently the case).
  - Added `.card--cot2-diff` accent border styling.

  Cross-linking: each of the three CoT2-diff pieces links
  to the other two in a "Related" closer paragraph, and
  the party-exp retrofit anchor-links back into
  exp-then-vs-now. Whole cluster forms a coherent
  reading path.

  Total shipped: 3 new pages (~1200 lines combined), 1
  retrofit (party-exp), 1 index reorganization. Zero build
  warnings introduced.

  **Sprint 61 addendum 1 (map CDN hunt):** Sprint 60 addendum
  6's sprite audit found map coverage stuck at 79.6% because
  MeowDB seemingly didn't have maps at the URL patterns I
  tested. That was wrong - I probed 6 patterns, all failed,
  concluded MeowDB lacks maps entirely. Reality: I missed
  the actual pattern.

  Rescoped by scraping the MeowDB homepage regex-hunting for
  any map-adjacent URL. Found:
  - Minimaps: `/msclassic/maps/minimaps/{9-digit-zero-padded-id}.png`
  - Detail pages: `/msclassic/maps/{9-digit-id}`
  - World maps: `/msclassic/worldmap/{name}.webp`

  The 9-digit-zero-padded scheme is the trick: map id 10006000
  (Forgotten Hollow) becomes URL `010006000.png`. My earlier
  probes tried `10006000.png` and unpadded slugs, all 404.

  **Coverage check**: sampled 25 maps we were showing as missing
  (no wzId, mostly Forgotten Hollow) - 23/25 hit MeowDB. Sampled
  20 maps that already had wzId - 20/20 hit MeowDB. So MeowDB
  is comprehensive for real maps; the 5% misses are internal
  test/dev maps in the 900000000 range.

  **Implementation** (mirror of the NPC pattern from addendum 6):
  - Added `mapMinimapMeowdbUrl(mapId)` helper (9-digit-zero-pad
    + MeowDB root + .png).
  - Extended `mapThumbnailSrcs(mapId, wzId?)` to prefer MeowDB
    minimap by internal map id, then maplestory.io minimap by
    wzId, then maplestory.io render as last resort.
  - Updated 5 caller sites (maps/index, maps/[id], world/
    victoria-island, world/victoria-island/[town] x2) to pass
    the internal map id alongside wzId.
  - Also updated `scripts/audit-sprites.mjs` map probe to mirror
    the same chain for accurate future coverage numbers.

  **Rerun result**: MAPS **79.6% -> 98.8%** (+82 maps). Only 5
  misses left out of 426 - all internal dev/test maps.

  **Final sprite coverage after Sprint 60/61 combined:**
  - ITEMS: 100.0% (unchanged)
  - MOBS:   96.9% (6 test/dev mobs missing)
  - NPCS:   98.9% (up from 85.3% in Sprint 60 addendum 6)
  - MAPS:   98.8% (up from 79.6%)

  Sprite coverage is now essentially complete. Remaining
  ~1-3% gaps are all internal-test-only assets that don't
  matter to real users. No more CDN hunting available.

  **Sprint 61 - Path B beginner content:** Shipped the three
  Path B guides that had been sitting in /guides "coming
  next" for months, closing the metaroad.gg gap on beginner
  meta content.

  **New pages** (all self-contained .astro under /guides/,
  following the meso-saving.astro pattern):

  - `/guides/items-to-keep` (~300 lines) - "Items You Should
    Never Sell". Five categories of never-sell items with
    concrete IDs pulled from real quest-demand counts in
    items.json: seven-quest MVPs (Leaf/Cursed Doll/Mushroom
    Caps), four-quest secondaries (Charm of the Undead/
    Stirge Wing/Drake Skull/etc), one-time earrings, all
    scrolls, seasonal event drops, off-class gear. Four
    ItemRewardStrip blocks with real sprites. Answers the
    "how do I know before selling?" beginner-panic query.

  - `/guides/consumables` (~330 lines) - HP/MP potion
    progression with real mesos-per-HP math from spec.hp /
    spec.mp / npcSellPrice in items.json (Apple + Red Potion
    tied at 20 HP/meso, Orange 16.7, White 14.3 - progressive
    efficiency loss explained). Includes elixir tier
    (percent-based full heals), dual-recovery items (Cake is
    strictly better than Blue Potion), buff foods (Warrior
    Potion +10 WATK), pet auto-pot setup, and the classic
    overspending trap in one paragraph. Five ItemRewardStrip
    blocks.

  - `/guides/party-exp` (~360 lines) - Party EXP formula
    (0.6/partySize + 0.4*(memberLv/totalLv)) with concrete
    2-Warrior worked example showing 30% party bonus. PQ
    progression table (KPQ/LPQ/APQ/LMPQ/OPQ/HTPQ/GPQ with
    level ranges + party sizes + optimal windows), grinding
    spots by level bracket (Lv 1-70+), and five common
    leveling mistakes (soloing when you could party, KS'ing,
    ignoring the rest-and-buff rotation, overleveling for
    the PQ cap, fighting overleveled mobs).

  Updated `/guides/index.astro` to promote all three from
  "planned" to shipped cards - the coming-next section is
  now empty, freeing the "planned" slot for whatever comes
  next after Sprint 61.

  All three guides cross-link at the bottom for reader-flow.
  Real item sprites throughout (30+ items pulled from items.
  json, all resolved without ItemRewardStrip warnings).

  **Sprint 60 addendum 6 (full sprite audit):** Systematic
  pass across every sprite type on the site (items, mobs,
  NPCs, maps). Started from `audit-sprites.mjs` coverage:
  items 100%, mobs 96.9%, NPCs 85.3%, maps 79.6%.

  **Sprite-source order audit**: found `mobSpriteSrcs` puts
  maplestory.io FIRST despite comment claiming MeowDB is
  primary. Downloaded 15 mob sprites from BOTH CDNs and
  byte-compared: legacy v83 mobs are IDENTICAL (Snail 1567
  ==1567, Pig 4095==4095, Wild Boar 5978==5978, Mushmom
  4711==4711, Zombie Mushmom 3804==3804, Mano 28349==28349,
  King Slime 14659==14659). Crimson Balrog differed by
  bytes (13974 vs 24630) but visual inspection confirmed
  same sprite, different canvas padding. Verdict: leave mob
  order alone. YAGNI - maplestory.io first for CDN
  availability, MeowDB fallback catches the rare misses.

  **MASSIVE NPC WIN**: probed MeowDB for NPC sprites and
  discovered they exist at `/msclassic/npcs/{slug}.webp`
  where slug is lowercase-dashed name. Tested 25 NPCs
  spanning legacy (Heena, Sera, Todd, Maria - 10/10) and
  CoT2-exclusive (Arthur, Bianca, Raymond, Oak, Flint,
  Roxy, Scarlett, Weston, Silas Irons, Zelya, Luma, Fully
  Bloomed Bluebell, Bluebell Bud - 13/15) - near-perfect
  coverage. Downloaded arthur.webp + fully-bloomed-bluebell.
  webp and visually confirmed legit Classic World sprites.

  Added `npcSpriteMeowdbUrl(name)` helper. Modified
  `npcSpriteUrl(wzId, name?)` and `npcSpriteSrcs(wzId,
  name?)` to prefer MeowDB name-slug when name is provided,
  maplestory.io wzId as fallback. Updated 7 caller sites to
  pass the name alongside wzId: npcs/index, npcs/[id],
  quests/[id], maps/[id], world/victoria-island, world/
  victoria-island/[town], party-quests/kerning-pq, plus
  QuestLayout.

  Also updated `scripts/audit-sprites.mjs` NPC probe to
  mirror the same chain. Rerun coverage: **NPCs 85.3% ->
  98.9%** (+36 sprites). Only 3 misses now, all edge cases
  (Community Board x2, Cave Fairy's Storage - either UI
  elements or apostrophe-slug edge cases not worth chasing).

  **Maps: no fix available**. MeowDB doesn't expose map
  minimaps/renders under any URL pattern I tested. The 87
  missing maps (mostly Forgotten Hollow + CoT2-exclusive
  areas) will stay uncovered until an alternate map CDN
  surfaces. Templates already handle this gracefully by
  hiding the sprite section when no source is available.

  **Sprint 60 addendum 5 (data-join audit):** Systematic
  field-name-mismatch hunt inspired by the EXP `value` vs
  `amount` bug. Enumerated every `?? "?"` / `?? "Unknown"`
  fallback across .astro templates (60+ hits), cross-
  referenced each against the actual JSON field names in
  items.json, mobs.json, quests.json, npcs.json, maps.json,
  and the pre-flattened index.json.

  **Verdict: no field-name bugs found.** Every silent fallback
  traces to a legitimately-absent datamine field, not a
  template reading the wrong key. Runtime QA (qa-kitten,
  10 diverse pages including /quests/1005, /mobs/2, /bosses,
  /items/1002000, /npcs/203, /maps/10000021) confirmed all
  numeric fields render (EXP 100/705/2193, mob stats
  Lv/HP/PATK/PDEF/MATK/MDEF/ACC/EVA, item level reqs, price,
  quest chains) without spurious "?" or "Unknown".

  **False alarm I nearly wrote up as bugs:** items/index.astro
  accesses `item.sub`, `item.reqJob`, `item.reqLevel`,
  `item.price`, `item.hasEditorial`, `item.acquisitionCount`
  which don't exist in items.json. Turns out the page reads
  from index.json (the slimmed catalog), which the build
  script REMAPS these exact names into (subCategory->sub,
  reqJobLabel->reqJob, stats.reqLevel->reqLevel, etc). All
  fields have proper coverage in index.json. The remapping
  is an actual anti-fragility win: catalog templates don't
  know or care about upstream schema drift.

  **One polish improvement shipped**: chain-child quests
  legitimately have no `minLevel` in the datamine, so their
  cross-refs on item/mob/npc/map pages used to render `L?`.
  Changed all 5 occurrences (ItemDetailLayout x2, mobs/[id],
  npcs/[id], maps/[id]) to conditionally skip the level
  fragment when null - shows just the region now, not `L? ·
  region`. Small readability win, no functional change.

  **Sprint 60 addendum 4 (same-class bug hunt):** Grepped
  every caller of `itemIconSrcs` to find other pages
  affected by the same wrong-sprite bug fixed in addendum 3.
  Found one: `party-quests/kerning-pq.astro` line 275 was
  rendering KPQ scroll drop sprites through `itemIconSrcs`
  (maplestory.io first). Swapped to `[itemIconUrl(r.id)]`
  to match the ItemRewardStrip pattern. Also swept every
  content collection for orphan entries (like citizenship
  and crafting were pre-Sprint 60) - none found; jobs (4),
  items (55), quests (90), guides (2) all have proper
  rendered routes.

  Remaining `itemIconSrcs` caller: HallOfFameCard.astro -
  intentional, that page needs the maplestory.io->MeowDB
  fallback for legacy event items MeowDB doesn't have.

  **Sprint 60 addendum 3 (root-cause fix + restore):** Fixed
  the sprite-source bug at its root. The `<Sprite>` chain was
  hitting `itemIconSrcs()` which puts **maplestory.io FIRST**
  (v83 GMS era) and MeowDB second - backwards for our CoT2
  datamine items. Since MeowDB is the actual source-of-truth
  (icons extracted from the same CoT2 client dump our items.json
  came from), we should be pulling MeowDB first, always, for
  any item from items.json.

  **Fix**: `<ItemRewardStrip>` now calls `itemIconUrl(id)`
  directly, wrapped in a single-entry array `[itemIconUrl(id)]`.
  No maplestory.io fallback. If MeowDB 404s, `<Sprite>` hides
  gracefully - "no sprite" beats "wrong sprite".

  **Visual verification** (downloaded raw PNGs from both CDNs,
  eyeballed side-by-side):
  - Weaponcrafting Kit (2002005): MeowDB=hammer+wrench+gears
    (CORRECT). maplestory.io=pink potion (WRONG).
  - Wooden Sword (1402000): MeowDB=brown wood sword (CORRECT).
    maplestory.io=blue metal sword (WRONG).
  - Iron Knuckle (1082052): MeowDB=grey iron knuckle (CORRECT).
    maplestory.io=blue mage glove (WRONG).

  Both strips restored:
  - `/citizenship`: 4 items (2 earrings + 2 chairs)
  - `/crafting`: 6 items (2 kits + 4 guide-named craftables)

  **Architectural note**: `itemIconSrcs()` is still used by
  Hall of Fame, which needs maplestory.io FIRST for legacy
  event items MeowDB doesn't have. Two source-of-truth
  contracts for two use cases:
  - CoT2 datamine items → `itemIconUrl()` alone (MeowDB)
  - Legacy event items → `itemIconSrcs()` (maplestory.io -> MeowDB)
  Not worth abstracting further until a third caller appears.

  **Sprint 60 addendum 2 (rollback, superseded by addendum 3):**
  Item strips REMOVED from both `/citizenship` and `/crafting`.
  maplestory.io CDN returned wrong-era sprites for our
  datamine's item IDs
  (Wooden Sword id showed a metal sword, Wooden Wand showed
  a higher-tier wand, Weaponcrafting/Woodcrafting Kits
  showed unrelated warrior/accuracy potions and pills, Iron
  Knuckle showed a mage glove). Liven correctly called this
  out - shipping visually-wrong sprites next to correct
  names is worse than shipping no sprites at all. The
  `<ItemRewardStrip>` component is preserved for a future
  sprint that solves the sprite-accuracy problem at the
  source (options: local sprite bundle from the datamine
  itself; per-item visual QA; different CDN with era-locked
  snapshots).

  **Lesson**: naming-search on items.json is not enough to
  verify sprite fidelity. In-datamine names can be misleading
  ("Adamantium Knuckle" was subCategory=Glove), and even
  correct IDs can render wrong sprites when the CDN's
  snapshot doesn't match our source era. Any future feature
  that surfaces item icons at scale needs a sprite-source
  contract, not blind trust in the CDN.

  **Sprint 60 addendum (same day):** Liven clarified the
  earring/chair sprites are **citizenship + crafting system
  rewards**, not Founder pack items. Grepped items.json and
  found the 4 citizenship rewards: Henesys Earrings (1032021),
  Kerning City Earrings (1032022), Henesys Resident's Chair
  (3010009), Kerning City Resident's Chair (3010010). Plus
  the 2 crafting kits: Weaponcrafting Kit (2002005),
  Woodcrafting Kit (2002006).

  Built `src/components/ItemRewardStrip.astro` - a reusable
  compact grid of item cards with sprite + name + optional
  note, each linking to the item's auto-generated
  `/items/{id}` detail page. Uses `itemIconSrcs()` for the
  standard maplestory.io -> meowdb fallback chain via
  `<Sprite>`.

  Wired the strip into `/citizenship` (4 items with contextual
  notes) and `/crafting` (2 kits + 2 Adamantium example
  end-products). QA verified all 8 sprites load from the
  maplestory.io CDN with naturalWidth 26-34px. Strip renders
  ABOVE the markdown body so first-time visitors see the "why"
  before reading the "how".

  Component is deliberately schema-lite - takes an itemIds
  array and a notes-by-id map. If a third guide adopts it,
  we've already got the reuse pattern proven.

  **Still deferred to Sprint 61:**

  - Path B beginner content queued from Sprint 59 (Items You
    Should Never Sell, Consumables Guide, Party EXP Guide).

  **Build stats:** page count 5721 -> 5722 (+1: `/maps/hidden`;
  `/citizenship` and `/crafting` were counted in the 5721 as
  content-collection entries that had no rendered route
  before, and Astro's page-index reports the rendered route
  count only). Indexed word count 25775 -> 25882 (+107).

- **2026-09-08** - **Sprint round 59: Beginner meta content
  foundation (Path B from MetaRoad compare/contrast).**

  Post-Sprint-58, Liven ran a compare/contrast against
  metaroad.gg/maplestory-classic and picked Path B: close the
  top-of-funnel gap by shipping the beginner-oriented meta
  content MetaRoad surfaces on their homepage (glossary,
  getting-started, meso-saving, etc.). Rationale: 3rd job
  content will churn hard during MSCW launch weeks, while
  beginner content compounds regardless of patches.

  **Ships:** new `/guides/` section with 3 flagship pages +
  landing hub. Nav updated: repurposed the placeholder
  "Leveling" nav item as "Guides" pointing at `/guides`.

  **1. `/guides/` landing hub**
  Grid of guide cards, split into "Shipped" (3) and "Coming
  next" (3 planned for Sprint 60). Cards are typed by category
  (reference / orientation / economy / planned) with color-
  coded hover states. Planned cards render dashed and muted so
  readers know what's coming without clicking dead links.

  **2. `/guides/glossary` (SEO flagship)**
  89 alphabetized MapleStory Classic terms with:
  - Client-side live filter that matches term name, aliases,
    definition, and category label. Vanilla JS scoped to page,
    fully progressive (page ships server-rendered).
  - A-Z jump nav strip - active letters clickable pills that
    scroll to anchor sections; inactive letters (Q, U, V, X, Y)
    render greyed non-clickable.
  - Category chips per term (Stats / Combat / Skills / Items /
    Classes / Party Play / Economy / Bosses / Game Systems /
    Social) with color coding.
  - Cross-links to deeper site pages (Warrior/Magician/Bowman/
    Thief job pages, KPQ walkthrough, /bosses, /party-quests)
    via optional `linkTo` field per term.
  - Term data lives in `src/data/glossary.ts` - append to
    TERMS array to add a new one; alphabetical sort and letter
    bucketing happen at build time.

  Coverage includes every acronym new players actually Google:
  WATK, HB, MG, MW, SE, HS, CS (both Chaos Scroll AND Cash
  Shop - the terminology overlap is called out), KPQ, LPQ,
  LMPQ, DoT, AoE, Aggro, Kite, KS, Merch, Godly, Clean,
  Slots, NX, HP Wash, Ironman, and 60+ more.

  **3. `/guides/getting-started` (orientation catch-all)**
  Long-form walkthrough of a new player's first 30 hours:
  - What Classic World actually is (v83-era Explorer classes
    only, official Nexon re-release)
  - Maple Island tutorial (Lv 1-10) with priority actions
  - Class selection grid (4 color-coded class cards linking
    to /jobs/{class})
  - First Job Advancement at Lv 10 (Lv 8 for Magicians)
  - Lv 11-30 grinding path with recommended maps per tier
  - KPQ callout at Lv 21 (2-3x EXP-per-hour vs solo)
  - 2nd Job at Lv 30 with SP-planning warning
  - 6 common newbie mistakes with concrete counters
  - "Where to go next" link farm

  **4. `/guides/meso-saving` (economy fundamentals)**
  Rendered in Kerning theme (matches the class-town of the
  Thief's Meso Explosion). Sections:
  - Why meso matters early (why saving through Lv 20 sets
    up Lv 30 success)
  - The three sinks (potion overspending, gear rebuying,
    scroll gambling) each with concrete counter-advice
  - Priority spending order (numbered 1-4)
  - How to actually earn (quest rewards, ETC drops, PQ rewards)
  - Merching basics for Lv 30+ (Store Permit, FM channel
    watching, high-turnover items, don't-merch warnings)
  - 5-card milestone grid (50k by Lv 20 -> 50m+ by Lv 70)
  - What NOT to do (pet-for-meso-savings math, don't chase
    perfect items early, AP reset trap)

  **QA:** qa-kitten did DOM-first pass. Found and fixed one
  CSS-specificity bug on the glossary filter (`.term { display:
  flex }` was overriding `[hidden]` attribute; added
  `.term[hidden], .letter-block[hidden] { display: none }` to
  restore behavior). Regression check confirmed fix. All 4 new
  pages render clean, nav updated, no regressions on Sprint
  52-58 pages.

  **Word count impact:** +331 indexed words for Pagefind
  search (25444 -> 25775). Page count 5717 -> 5721 (+4).

  **Sprint 60 candidates** (queued on the guides landing):
  - Items You Should Never Sell (drop-loss prevention)
  - Consumables Guide (potion tiers, buff foods, scroll
    interactions)
  - Party EXP & Grinding Guide (party math, PQ meta from
    Lv 21 to 51)
  - Plus post-launch reactive content once actual MSCW
    behavior + patches are observable.

- **2026-09-08** - **Sprint round 58: 100% alt-build coverage.**

  Closes the alt-builds arc from Sprint 57 by shipping the final
  3 alt builds. Every 2nd-job advancement across all 4 v83
  classes now has both a Canonical and an Alt build - readers see
  the actual meta arguments, not just one "correct" answer.

  **Ships:** 3 new curve-variant alts (same endstate as their
  canonical counterparts, different level-progression order):

  - **Warrior Fighter - Rage Rusher (Early Party Value).**
    Advancement SP goes straight into Rage. Rage MAXED by Lv 37
    (vs Lv 50 canonical) - your party's +12 WATK buff active for
    the entire 2nd-job training window. Trade personal DPS during
    Lv 30-43 for party invitations from Lv 30 onward.
  - **Warrior Page - Threaten Tank (Aggro Grinder).** Threaten
    MAXED by Lv 37 (vs Lv 50 canonical). AoE debuff active for
    the whole 2nd-job grind - solo Pages love this because
    grouped mobs become tankable without a Cleric party.
  - **Magician F.P. Wizard - Poison Primary (AoE Grinder).**
    Poison Breath MAXED by Lv 40 (vs Lv 50 canonical). For
    mob-dense training maps (Green/Zombie Mushroom Land) where
    the DoT cloud out-earns Fire Arrow's single-target burst.

  **Total build library after Sprint 58:**

  | Class | 1st | 2nd Job (Canonical + Alt) |
  |-------|-----|---------------------------|
  | Bowman | 2 | Hunter (2) + Crossbowman (2) |
  | Warrior | 2 | Fighter (2) + Page (2) + Spearman (2) |
  | Magician | 2 | Cleric (2) + F.P. (2) + I.L. (2) |
  | Thief | 2 | Assassin (2) + Bandit (2) |

  **28 total builds. 100% class coverage, 100% alt coverage.**
  Every SP-sum validated (both row sums and endState sums match
  declared spTotalAvailable for every build). Tab widget from
  Sprint 57 handles all 14 tabbed advancements cleanly - each
  scoped independently by advancement.slug.

  **What's meta-done:** the Sprint 53-58 arc has, over 6 sprints,
  built the deepest classic-Maple skill build reference in the
  space. 28 hand-crafted builds with per-level allocation
  tables, cumulative running totals, milestone notes, historical
  reasoning per build, and interactive tabs. Better than Ayumi's
  original wordpress format (single canonical build per class);
  better than any of the current v83 private-server wikis
  (which typically only cover one build per class).

  **Sprint 59+ candidates:**
  - **3rd job builds** - Ranger/Sniper, Crusader/WK/DK,
    Priest/FP Mage/IL Mage, Hermit/Chief Bandit. 10 more
    advancements at ~150 SP each. Matches Ayumi's #2 top post
    ('Third Job Advancement Q&A', 176 comments).
  - **Training atlas / farming pages** - break out of the
    class-content loop; use existing DB joins for high-SEO
    long-tail pages.
  - **Damage / range calculator** - interactive tool, unowned
    niche since Hidden-Street shut down.

- **2026-09-08** - **Sprint round 57: Meta / alt builds deep
  dive + tab widget UI.**

  With every class at first-pass coverage (18 canonical builds
  across all 4 v83 classes), Sprint 57 layers historical
  alternatives so readers see the actual meta arguments -
  not just one canonical answer. Also ships the UI upgrade
  needed to make multi-build advancements consumable:
  interactive tabs.

  **UI upgrade - tabbed builds:** `SkillBuildTable.astro` now
  renders a tab strip when an advancement has 2+ builds.
  First build is active by default (usually the recommended
  one). Vanilla JS handles switching (no framework), scoped
  by `data-tabs-root` / `data-tab-panel` attributes so
  multiple tabbed advancements on one page don't collide.
  Full ARIA compliance (role=tablist, role=tab, aria-selected,
  aria-controls). Idempotent init survives Astro View
  Transitions rehydration. Single-build advancements
  (Warrior Fighter, Warrior Page, Magician F.P.) unchanged -
  no tab strip rendered when there's nothing to switch
  between.

  **7 new alt builds** (across all 4 classes):

  - **Bowman Hunter - Final Attack Purist (Boss Sniper).**
    Skips Arrow Bomb entirely, maxes Final Attack: Bow (30)
    for pure single-target scaling. Trade-off: slower on
    grouped mob training, faster on Crimson Balrog runs.
  - **Bowman Crossbowman - Final Attack Purist.** Mirror
    build for Xbow-committed players. Same trade-off vs Iron
    Arrow.
  - **Warrior Spearman - Pure Support.** Drops Final Attack
    entirely (30 SP) and reallocates to defensive skills:
    Iron Body MAX + Improve HP Recovery MAX (16) + Endure 5.
    The v83 late-game party-only Spearman meta - your entire
    training identity becomes 'the buff person other classes
    wait for'.
  - **Magician Cleric - Solo Undead Grinder.** Same endstate
    as canonical (all skills maxed identically), but
    Invincible rushed to MAX by Lv 57 (vs Lv 70 canonical) at
    the cost of delaying Bless to Lv 70. Trade party value
    for solo survivability through the Lv 40-60 zombie-grind
    window.
  - **Magician I.L. Wizard - Freeze Lock (Boss CC Specialist).**
    Skips Thunderbolt (30 SP), maxes Cold Beam + Slow for
    permanent boss lockdown. Fills leftover 11 SP into 1st-
    job Magic Claw finish. Great for CC-loving parties,
    terrible for solo grinding.
  - **Thief Assassin - Haste Merchant (FM Rusher).** Same
    endstate as canonical, but Haste MAXED by Lv 50 instead
    of Lv 60. Enables the classic v83 subculture where
    Assassins stood in Free Market selling 5-min Haste buffs
    for 5-10k meso a pop. Trade DPS-during-Lv-44-53 for meso
    income.
  - **Thief Bandit - Steal Farmer (Item Hunter).** Same
    endstate, Steal MAXED by Lv 50 instead of Lv 67. For
    farming rare drops that only proc via Steal (Zombie
    Lupins, Bubbling chairs). Trade training DPS for farm
    income.

  Some alts are same-endstate curve-shifts (Cleric, Assassin,
  Bandit); others reshape the skill totals themselves (Hunter/
  Xbow FA Purist, Spearman Pure Support, I.L. Freeze Lock).
  Both categories are v83-documented meta - the former is
  timing-optimization, the latter is playstyle-differentiation.

  **New skills added to shared skill arrays:**
  - Bowman Hunter: Final Attack: Bow (3100001)
  - Bowman Xbow: Final Attack: Crossbow (3200001)
  - Warrior Spearman: Improve HP Recovery + Endure (1st-job
    carryovers, now visible as columns in both Spearman
    tables)
  - Magician I.L.: Magic Claw (1st-job carryover)

  All new columns render empty for the canonical builds -
  correctly documenting 'this build skipped this skill' by
  the absence of a value. Both builds' data stays
  self-consistent.

  **Total build library after Sprint 57:**

  | Class | 1st Job | 2nd Job branches |
  |-------|---------|------------------|
  | Bowman | 2 | Hunter (2) + Crossbowman (2) |
  | Warrior | 2 | Fighter (1) + Page (1) + Spearman (2) |
  | Magician | 2 | Cleric (2) + F.P. (1) + I.L. (2) |
  | Thief | 2 | Assassin (2) + Bandit (2) |

  **25 total builds. All SP-sum validated (both row sums and
  endState sums match declared spTotalAvailable for every
  build).**

  **QA:** qa-kitten did full DOM + visual pass on tab widget
  interaction. All 8 tab-widget behavioural checks passed
  (state, ARIA, class toggling, panel show/hide, tab
  independence across multiple tablists on same page). All 3
  alt-build structural checks passed (correct columns show/
  hide values as designed). Zero regressions on single-build
  advancements or main job guide pages.

  **Sprint 58+ candidates:**
  - Warrior Fighter alt (Sword Fighter, or Rage Rusher curve
    variant) - only 2nd-job advancement without an alt yet
  - Warrior Page alt (Sword Page or Threaten Tank variant) -
    same
  - Magician F.P. alt (Poison-Primary variant) - only
    remaining Magician branch without alt
  - **3rd job builds!** Now that everyone has robust 2nd-job
    coverage, the natural next content push is Ranger/Sniper,
    Crusader/WK/DK, Priest/FP Mage/IL Mage, Hermit/Chief
    Bandit. Matches Ayumi's #2 all-time top post ('Third Job
    Advancement Q&A', 176 comments).
  - Training atlas / farming pages / damage calculator (still
    on backlog from Sprint 53 planning)

- **2026-09-07** - **Sprint round 56: Magician + Thief 2nd-job
  builds. First-pass class coverage COMPLETE.**

  Closes out the "get every class to the same coverage first"
  pass Liven requested. Every v83 Magician and Thief 2nd-job
  branch now has a canonical build. Combined with previous
  sprints, all 4 classes now have a complete Lv 10 -> 70 SP
  allocation ladder available.

  **Ships:** 5 new canonical builds across two class files:

  Magician 2nd job (magician.json):
  - **Canonical Cleric (Undead Grinder)** - the only 2nd-job
    Magician that doesn't get a new attack skill. Heal doubles
    as party heal AND undead damage, so Cleric grinds zombies
    and jr wraiths while relying on Magic Claw for non-undead.
    Heal 30 + Teleport 20 + Bless 20 + MP Eater 20 + Invincible
    30 + 1 MC leftover.
  - **Canonical F.P. (Dual-Attack Meta)** - Fire Arrow +
    Poison Breath both maxed for single-target + AoE flexibility.
    Meditation for party MATK. 1 SP Slow filler.
  - **Canonical I.L. (Freeze + AoE Meta)** - Cold Beam
    (single-target with freeze CC!) + Thunderbolt (AoE) both
    maxed. Structural mirror of F.P. with element substitution.
    1 SP Slow filler (redundant with Cold Beam's freeze).

  Thief 2nd job (thief.json):
  - **Canonical Assassin (Crit Meta)** - Claw Mastery + Booster
    + Critical Throw (max 30!) + Haste + Drain. Critical Throw
    is what makes Lucky Seven a DPS monster; maxing it fast is
    the entire point. 1 SP Dark Sight filler.
  - **Canonical Bandit (Savage Blow Grinder)** - the only
    class where leftover SP is genuinely large (11 pts).
    Dagger Mastery + Booster + Savage Blow + Haste + Steal
    (only maxes at 20, not 30) leaves 11 SP for Dark Sight
    positioning utility. Chief Bandit at 3rd job is where
    Meso Explosion transforms everything.

  All 5 new builds validate: 121 SP over 41 rows (Lv 30-70),
  SP column and endState both sum to declared budget. Combined
  with existing entries, our overall build library is now:

  | Class | 1st Job | 2nd Job branches |
  |-------|---------|------------------|
  | Bowman | 2 builds | Hunter + Crossbowman (1 each) |
  | Warrior | 2 builds | Fighter + Page + Spearman (1 each) |
  | Magician | 2 builds | Cleric + F.P. + I.L. (1 each) |
  | Thief | 2 builds | Assassin + Bandit (1 each) |

  **Total: 18 builds across all 4 v83 classes.** Every reader
  can pick a class + weapon branch at Lv 10 and follow every
  single SP through Lv 70 without a decision left ambiguous.

  **Pattern insight from all 10 canonical 2nd-job builds:** the
  universal template Mastery -> Booster -> Class Signature ->
  Utility -> Final Attack proved robust across all 4 classes'
  weapon subclasses. Even Magician (which structurally differs
  most - no weapon mastery, has spell attacks instead of physical)
  fit the pattern with mastery slot -> mana/booster equivalents,
  class signature -> Meditation/Bless/Teleport tier, etc. The
  ONLY class that broke pattern was Bandit's 11-SP leftover
  (because Steal maxes at 20 not 30). Genuine v83 quirk, not a
  data bug.

  **QA:** direct PowerShell schema validation (18/18 builds
  green - both SP column sums and endState sums match
  spTotalAvailable across all advancements). Skipped qa-kitten
  runthrough this sprint since the pattern is well-proven at
  this point and the SkillBuildTable component hasn't changed.

  **Sprint 57 (per Liven's direction):** deep dive into meta
  builds / alt builds of the past for all 18 existing entries.
  Now that first-pass coverage is uniform, we can start layering
  the historical variants (early-2005 v0.10 meta, late-2007
  Kanna-era rebalance, Big Bang-adjacent last-hurrah builds,
  private-server-specific variants, etc.). Ayumi's original site
  kept single-build recommendations - our differentiation
  becomes the deep meta archaeology.

- **2026-09-07** - **Sprint round 55: Warrior 2nd-job builds
  (Fighter + Page + Spearman).**

  Continues the class ladder push. Warrior's 2nd job splits into
  three parallel branches (unlike Bowman's two), each with its
  own signature buff that defines the entire late-game identity:
  Rage (Fighter), Threaten (Page), Hyper Body (Spearman).

  **Ships:** 3 new canonical builds on
  `/jobs/warrior/builds`:
  - **Axe Fighter (Canonical)** - Axe Mastery -> Booster ->
    Rage -> Power Guard -> Final Attack Axe. 40% damage
    reflection at PG 30, +12 WATK party buff at Rage 20.
    Sword Fighter uses identical structure with Sword-specific
    IDs (noted in the SP note as a variant).
  - **BW Page (Canonical)** - structural mirror with Threaten
    replacing Rage. Threaten inverts Rage's math (debuff mobs
    vs buff party) but occupies the same slot in the priority
    ladder. Sword Page is the same-structure variant.
  - **Polearm Spearman (Canonical)** - the party-buff king.
    Hyper Body's +60% party HP is why every party from Lv 30
    to endgame wants a Spearman. Iron Will replaces Power
    Guard, but IW maxes at 20 (not 30 like PG), so 11 leftover
    SP land in Iron Body instead of 1. That leftover is the
    only structural difference between the three warrior
    branches. Spear Spearman is the variant.

  All 3 builds sum to exactly 121 SP over 41 rows (Lv 30-70) -
  SP validator green. Each uses the same skill-priority pattern
  as Bowman 2nd job (Mastery -> Booster -> Class Buff ->
  Utility -> Final Attack) which suggests the pattern is
  genuinely universal for v83 2nd-job Warriors/Bowmen. Magician
  and Thief will likely diverge more (Cleric's Heal, Bandit's
  Meso Explosion).

  **QA:** structural + SP-math validation done directly via
  PowerShell (qa-kitten hit a base64 image dimension limit
  mid-inspection on Anthropic's API, so QA delegated to
  PS-based DOM grep). Verified 4 sections render, 4 Recommended
  badges present, 5 build tables total, Perion theme applied,
  all 5 builds' SP columns sum to declared budgets.

  **Warrior is now the second complete class** (after Bowman)
  with a full Lv 10 -> 70 ladder available for every branch a
  reader might pick at 2nd job.

  **Sprint 56 direction (per Liven):** deep dive on meta builds
  / alt builds of the past. Rather than continuing breadth
  (Magician/Thief 2nd jobs), pivot to depth: add second and
  third builds to existing advancement entries showcasing the
  meta shifts across the v83 timeline (early-game canonical,
  late-game speedrunner, endgame bossing variants). Ayumi's
  original site kept single-build recommendations; adding
  \"here's how the meta evolved\" content differentiates our
  guide.

  **Follow-ups queued:**
  - Magician + Thief 2nd job (deferred to after meta-builds
    deep dive)
  - Class-specific skill icons per column header
  - Cross-links from build milestone notes to boss dossiers

- **2026-09-07** - **Sprint round 54: Bowman 2nd-job builds
  (Hunter + Crossbowman).**

  Extends the skill build planner beyond 1st job. Bowman becomes
  the first class with a complete SP allocation ladder from Lv
  10 (advancement) all the way through Lv 70 (3rd-job
  eligibility). Two new advancement blocks on
  `/jobs/bowman/builds`:

  - **Hunter (2nd Job - Bow branch)** - "Arrow Bomb Grinder"
    canonical build, 121 SP over Lv 30-70. Priority order:
    Bow Mastery MAX (consistency) -> Bow Booster MAX (attack
    speed) -> Arrow Bomb MAX (training workhorse) -> Critical
    Shot MAX (finish from 1st job) -> Soul Arrow MAX (arrow-
    tax elimination) + 1 leftover Focus. Every SP defensible.
  - **Crossbowman (2nd Job - Crossbow branch)** - "Iron Arrow
    Grinder" mirror build, 121 SP identically distributed
    across Crossbow-* skill variants. Iron Arrow's piercing
    line vs Arrow Bomb's AoE explosion is the only real
    difference; per-level allocation is symmetric.

  Both builds validated by the SP-sum guard - they total exactly
  121 SP (the 2nd-job budget = 3 SP/level * 40 levels + 1 SP at
  advancement). Component handles multi-skill rows cleanly
  (e.g. Lv 37 puts 2 SP into Bow Mastery to MAX + 1 SP into
  Bow Booster). Note column doesn't overflow with the longer
  milestone annotations.

  **Component tweak:** highlight color for "changed this level"
  cells bumped from 22% to 32% color-mix alpha of the theme
  accent. QA-kitten's Sprint 53 v2 nit was that Henesys' warm
  gold accent read as "subtle" on light backgrounds; 32% gives
  it more pop without over-saturating darker themes.

  **Bowman is now the reference class** with:
  - 1st job: 2 builds (Double Shot Rush + Grinder Splash)
  - Hunter 2nd: 1 canonical build
  - Crossbowman 2nd: 1 canonical build

  Ready for readers to pick a build at Lv 10 and follow it all
  the way to Lv 70 without a single decision left ambiguous.

  **Sprint 55 candidates:**
  - **Warrior 2nd job** - 3 branches (Fighter / Page /
    Spearman), each ~120 SP over Lv 30-70. Bigger scope than
    Bowman because 3 branches, not 2, and each branch has more
    skills to weigh.
  - **Magician 2nd job** - 3 branches (Cleric / F.P. Wizard /
    I.L. Wizard). Cleric's Heal + Bless breaks the "just max
    attack" pattern - interesting SP puzzles.
  - **Thief 2nd job** - 2 branches (Assassin / Bandit). Cleaner
    fork, but Chief Bandit's Meso Explosion introduces a new
    resource (meso as ammunition) worth explaining.
  - **Alt builds for existing 2nd-job entries** - Hunter has a
    debated "Final Attack" alternative that trades Soul Arrow
    for burst-damage; Crossbowman has a "no-Iron-Arrow
    bossing" build. Currently 1 build each - readers might
    want the "here are the trade-offs" view.
  - **Bowman 3rd job** (Ranger / Sniper) - jumping straight to
    endgame content matches Ayumi's #2 top-post
    ("Third Job Advancement Q&A", 176 comments).

  **Follow-ups queued:**
  - Skill icons per column header (currently text only)
  - Interactive tab widget once any class ships 4+ builds per
    advancement (currently stacked - fine at 1-2)
  - Cross-link from build milestone notes to boss dossiers
    (e.g. "Crimson Balrog viable with a party" -> /bosses/
    crimson-balrog)

- **2026-09-07** - **Sprint round 53: Skill build planner (all
  four 1st jobs).**

  New `/jobs/{class}/builds/` section - level-by-level SP
  allocation tables in the classic Ayumilove format, but with a
  cumulative-total column per skill so readers don't have to do
  addition in their head. Chosen after Sprint 52's Ayumi analysis
  showed skill-build guides dominated her top-10 posts by comment
  volume; this is the highest-demand content type in the classic
  MapleStory niche.

  **Ships:** 4 build pages, 8 named builds total.
  - `/jobs/bowman/builds` - Double Shot Rush (rec), Grinder Splash
  - `/jobs/warrior/builds` - HP + Slash Blast (rec), HP + Power Strike
  - `/jobs/magician/builds` - Magic Guard Priority (rec), Magic Claw Hybrid
  - `/jobs/thief/builds` - Lucky Seven / Assassin (rec), Double Stab / Bandit

  Each build has: tagline, reasoning paragraph, per-level SP
  allocation table with cumulative columns and "changed" +
  "maxed" cell highlighting, end-state summary, and level-of-key-
  milestone notes (KPQ-eligible, advancement, etc.). Rows sum-
  validated at build time - if a build's row deltas don't equal
  the declared spTotalAvailable, the build script logs a warning.
  All 8 builds pass validation.

  Magician build correctly captures the v83 quirk that Magicians
  advance at level 8 (not 10), giving them 23 SP in 1st job vs.
  21 SP for every other class - the SkillBuildTable component
  handles arbitrary level ranges from the data.

  **Architecture:** `src/data/skill-builds/{class}.json` is the
  single source of truth per class. `src/components/SkillBuildTable
  .astro` renders one advancement (multiple builds stacked). The
  new dynamic route `/jobs/[job]/builds.astro` uses
  `import.meta.glob` to auto-enumerate available class data files -
  adding a new class = drop a new JSON file, no wiring changes.
  The main `/jobs/[job]/index.astro` (migrated from
  `[job].astro` this sprint to allow the nested route) auto-
  renders a "View skill builds" CTA in the Skills section when a
  matching data file exists; classes without builds get no CTA
  and their `/builds` URL 404s cleanly.

  **URL migration:** `src/pages/jobs/[job].astro` moved to
  `src/pages/jobs/[job]/index.astro`. Zero URL changes for
  readers (existing `/jobs/bowman` etc. all still route
  identically) but the [job] segment is now a folder so
  `/jobs/[job]/builds` can live as a sibling.

  **QA cycle:** Two passes. v1 QA (Bowman only) hit 26/26 green.
  v2 QA (Warrior/Magician/Thief added) hit all structural + math
  checks green, caught one theme-parity nit: the orange "changed
  cell" highlight from Sprint 52's hardcoded palette was very
  subtle on Kerning's dark purple theme. Fixed proactively with
  `color-mix(in srgb, var(--accent-primary) 22%, transparent)` -
  the highlight now inherits each theme's accent color so it
  stays visible on light AND dark themes. Green "maxed" bg alpha
  also bumped from 0.18 to 0.28 for better dark-theme legibility.

  **Nav integration:** kept implicit for now. The main jobs page
  and each class's own page both prominently link to builds - no
  top-nav slot spent (the top nav is already 17 items and the
  builds pages are a sub-topic of jobs).

  **Sprint 54 candidates:**
  - **2nd-job builds** for all 4 classes (10 advancement pages:
    Bowman/Xbow, Warrior x3, Magician x3, Thief x2). Biggest
    content-value bet - 2nd job is where SP economies get
    interesting (60-120 SP each, real trade-offs).
  - **Training spot atlas** - cross-filter over data we already
    own (level range + region + mob type). Ships fast.
  - **Damage/range calculator** - interactive tool, whole niche
    is unowned since Hidden-Street shut down.
  - **Farming pages** `/farming/[item]/` - pure DB join, trivial
    ship, high SEO value.

  **Follow-ups queued** (out of scope this sprint):
  - 2nd/3rd job builds for each class (queued as Sprint 54)
  - Skill icon column on the tables (currently just skill name
    text; could grab from skillIconUrl but adds 21+ requests
    per page - defer until we cache-optimize)
  - Interactive tab widget for build selection (currently
    stacked - fine at 2 builds per page, revisit if any class
    ships 4+ builds)

- **2026-09-07** - **Sprint round 52: Boss Compendium debut.**

  New `/bosses/` section - editorial dossiers for every v83 boss
  our datamine flags. Sourced from a deep-dive on Ayumilove's
  archived wordpress (top MapleStory guide site of the 2008-2011
  era) which showed skill-build guides + boss compendia were her
  highest-engagement content and where classic-Maple search
  traffic actually lives. Bosses first because Ayumi's boss
  coverage was thin (only ~3 posts) - genuine content gap.

  **Ships:** 6 boss detail pages + index at `/bosses/`.
  - Mano (Lv 20, Perion hidden street, low threat)
  - King Slime (Lv 40, KPQ end boss, low threat)
  - Crimson Balrog (Lv 44, ferry event, high threat)
  - Jr. Balrog (Lv 55, Sleepywood dungeon, moderate)
  - Mushmom (Lv 60, Henesys hidden street, moderate)
  - Zombie Mushmom (Lv 65, Sleepywood hidden street, moderate)

  Each page has: TL;DR intro, how-to-find-them section, full
  combat stat grid (level/HP/MP/EXP/atk/def/acc/ev + undead/
  body-attack tags), strategy notes, spawn map chips linking to
  `/maps/{id}`, drop table linking to `/items/{id}`, and a
  bottom link to the full `/mobs/{id}` raw dossier. Editorial
  content is hand-written (~200-300 words per boss) with the
  informal-but-informative voice.

  **Architecture:** `src/data/boss-manifest.json` is the single
  editorial source of truth, keyed by WZ ID for stable dedup
  across the CoT feed's twin-dossier quirk (some mobs appear
  under 700xxx AND 800xxx IDs). `src/lib/bosses.ts` joins the
  manifest against `mobs.json` at build time, picks the richer
  dossier when multiple candidates share a wzId, and exports a
  typed `BossDossier[]`. Adding a new boss = one entry in the
  manifest, no pipeline changes needed.

  **Manifest override for missing data:** the manifest supports
  three overrides that let us patch data errors without touching
  the pipeline:
  - Include mobs missing the `isBoss` flag (King Slime is
    absent from the CoT feed's boss-flag list even though he's
    the KPQ end boss)
  - Explicit `theme` override for bosses whose spawn map names
    don't include a recognizable town substring (Crimson Balrog
    has no static spawns, Jr. Balrog spawns in "Cursed
    Sanctuary" which the auto-detect misses)
  - Any future editorial correction

  **QA cycle:** Two passes. First pass shipped structurally
  correct but caught 4 UX bugs from hardcoded colors:
  1. Crimson Balrog card contrast collapsed to unreadable on
     sleepywood theme (dark bg + hardcoded #1f3a5f text)
  2. Theme mis-mapped for 3/6 bosses (auto-detect fallback
     landed on "Ossyria" -> sleepywood for a ferry boss)
  3. Breadcrumb had poor contrast over hero background image
  4. Index intro paragraph washed out on dark theme backdrop

  All four fixed in v2 by replacing every hardcoded hex text
  color with theme-aware CSS custom properties
  (`var(--text-heading)`, `var(--text-body)`, `var(--text-muted)`,
  `var(--accent-primary)`, `var(--bg-cloud)`, `var(--surface-card)`)
  and wrapping the intro + breadcrumb in the same
  `.section-heading` / pill treatments other pages use. Lesson:
  never hardcode a text color on a themed page.

  **Nav integration:** added "Bosses" to `BaseLayout.astro`
  primary nav between Mobs and Maps. Site now has 17 nav items.

  **Sprint 53 candidates** (from the same Ayumilove analysis):
  - Skill-build planner per class per advancement (proven top
    content on Ayumi's site: 5 of her top 10 posts by comments)
  - Training spot atlas (cross-filter over data we already own)
  - Interactive damage/range calculator (whole niche is
    unowned since Hidden-Street died)
  - Farming pages (`/farming/[item]/` - pure DB join)

  **Follow-ups queued** (out of scope this sprint):
  - Missing endgame bosses (Zakum, Papulatus, Pianus, Ergoth,
    Anego, Manon, Griffey, Bigfoot). Blocked on our CoT feed
    only pulling mobs referenced by tracked quests/items -
    needs a supplementary maplestory.io mob fetch, or the
    Founder's Access datamine we're waiting on.
  - King Slime's `isBoss` flag should be fixed in
    `build-database.mjs` (the manifest override works but the
    root cause is a source-data quirk we could patch)
  - Crimson Balrog's spawn-locations section is omitted
    entirely because ferry event has no static spawn map -
    consider a "spawns during the ferry event" placeholder

- **2026-09-07** - **Sprint round 51: World-map pin hijacker
  bug fix.**

  Liven noticed clicking any Victoria Island / Henesys pin on the
  world map landed on a page titled "Victoria Road" with subtitle
  "Yellow Mushroom House" (map ID 88000000), a tiny NPC building
  interior with just 1 portal. Not Henesys.

  **Root cause:** `resolveMapWzIds` in `scripts/build-database.mjs`
  had a bad fallback chain:

  ```js
  mapping[m.id] = exact[0]?.id ?? nameOnly[0]?.id ?? j[0]?.id ?? null;
  //                                                 ^^^^^^^^^ evil
  ```

  Dossier map 88000000 has `name: "Victoria Road"` and
  `streetName: "Yellow Mushroom House"` (fields inverted at the
  source datamine, but that's a separate cosmetic issue). No WZ
  map has `name === "Victoria Road"` because "Victoria Road" is
  always a *streetName* in the WZ, never a map name. So the
  exact and nameOnly filters both returned empty, and the
  resolver fell through to `j[0]?.id` = whatever the search
  engine returned first for "Victoria Road" = WZ 100000000
  (Henesys). That poisoned the reverse map:
  `wzToDossierId[100000000] = 88000000` (whichever was set
  last wins). So every world-map pin whose `mapNumbers[0]` was
  WZ 100000000 (Henesys) started clicking through to dossier
  88000000 (Yellow Mushroom House).

  Same bug had produced 5 other WZ->dossier collisions in the
  cache (WZ 0, 10000, 40001, 104030001, 109080000).

  **Fix:** removed the `j[0]?.id` fallback. Null is now the
  correct answer when neither name nor exact match, which
  prevents any dossier from polluting the reverse map with a
  bogus WZ mapping. Result: 339/426 dossiers resolved (down
  from a bogus 426/426), 180/586 world-map pins linked to
  real dossiers (down from an inflated 220-ish), zero
  collisions in the reverse map.

  Deleted `map-wz-cache.json` + `worldmaps.json` to force
  clean regeneration. Verified: `/world/WorldMap010` Henesys
  pin now points to `/maps/10001000` (real Henesys, 10 NPCs,
  92 quests, 9 portals, Victoria Island region). Zero
  occurrences of `88000000` in the anchors on `/world` or
  `/world/WorldMap010`.

  **Follow-ups queued** (out of scope this sprint):
  - Map 88000000 still shows "Victoria Road" as h1 due to
    inverted source fields. Reachable only via direct URL now.
  - Community Board on Henesys shows ~20 quests all titled
    "Donating to Henesys" - likely progressive donation tiers
    collapsing to one title. De-dupe or append tier badges.
  - The Henesys pin on WorldMap010 is a 2-map cluster - the
    second slot is probably still 88000000. Not user-visible
    but worth suppressing at cluster level.

- **2026-09-07** - **Sprint round 50: Character hero contrast
  rescue.**

  Liven flagged that the /character page header was unreadable:
  the eyebrow "INTERACTIVE SANDBOX" vanished into the Henesys
  theme's cloud photograph, the h1 fought the tree silhouette,
  and the breadcrumb blended into sky. Screenshot in issue shows
  all four elements at effectively zero contrast in patches.

  **Fix:** wrapped breadcrumb + hero header in a new `.hero-plate`
  container with a frosted-glass panel (backdrop-blur + 78%-white
  bg + soft shadow). Overrode child text colors to force
  legibility regardless of what pixel sits behind: h1 deep navy
  #1f3a5f, lede slate #2c3e50, crumbs #4a5b70, eyebrow burnt
  orange #9b5005.

  **Two nasty bugs QA-kitten caught:**

  1. **Astro's lightningcss stripped unprefixed `backdrop-filter`**
     when it was declared as a sibling of `-webkit-backdrop-filter`.
     Only the -webkit- version survived, which Chrome/Firefox
     ignore, so the frosted look never activated. Fixed by
     wrapping the property in an explicit `@supports
     ((backdrop-filter) or (-webkit-backdrop-filter))` block -
     lightningcss now emits the unprefixed version untouched.

  2. **Eyebrow #b45f06 was WCAG AA borderline** (4.58:1 vs white
     best-case, 3.46:1 over darker background patches). Darkened
     to #9b5005 = 5.93:1 solid AA pass. The now-working
     backdrop-blur further smooths the composite so real-world
     contrast stays comfortably above threshold everywhere.

  QA verified computed contrast ratios per-region against sampled
  backdrop pixels: h1 11.48 / 8.65 (best/worst), lede 10.98 / 8.28,
  breadcrumb 9.13 / 6.88, eyebrow 5.93 / 4.19 (blur mitigates
  the raw worst-case).

- **2026-09-07** - **Sprint round 49: Cash / NX catalog + CSS
  scoping bug fix.**

  Liven wanted the customizer to double as a wishlist so players
  can try on NX cosmetics before buying them in-game. Our upstream
  data source (osmsdataexplorer.com CoT feed) has zero cash items,
  so this needed a new pipeline. Investigated the maplestory.io
  item enum endpoint and discovered it exposes the FULL GMS/83
  catalog (12,578 items) with an `isCash` flag + descriptions +
  category metadata.

  **New pipeline:**
  - `scripts/fetch-maple-catalog.mjs` (new) - hits
    `https://maplestory.io/api/GMS/83/item`, filters to slot-mappable
    items, enriches with `isCash` / `desc` / `category` /
    `subCategory`. Writes to `src/data/character-catalog-source.json`
    (819 KB, 6,406 candidates).
  - `scripts/validate-character-items.mjs` updated to prefer the
    new source when present, fall back to `items.json` otherwise.
    Preserves the enriched fields into the whitelist output.
  - `npm run fetch:maple-catalog` (new npm script).

  **Catalog explosion (kept items):**

  | Slot | Sprint 47 | Sprint 49 | Delta |
  |---|---|---|---|
  | hair | 1220 | 1504 | +284 |
  | hat | 216 | 908 | +692 |
  | weapon | 228 | 1173 | +945 |
  | overall | 95 | 484 | +389 |
  | top | 184 | 462 | +278 |
  | bottom | 174 | 404 | +230 |
  | shoes | 155 | 416 | +261 |
  | gloves | 100 | 235 | +135 |
  | cape | 21 | 178 | +157 |
  | face | 453 | 536 | +83 |
  | earring | 23 | 67 | +44 |
  | **Total** | **2869** | **6367** | **+3498** |

  Only 39 items were pruned (0.6% garbage rate vs the CoT feed's
  16.5%). maplestory.io's catalog is dramatically cleaner because
  it IS the render engine's own source of truth.

  **Picker UX:**
  - **NX badge** - small orange gradient pill in the top-right of
    every cash card. CSS class `.item-card__cash`, HTML in the card
    innerHTML alongside icon + name + id.
  - **Description tooltip** - `title` attribute populated from
    `desc` (with #-color-codes stripped). 400 of 6367 items have
    populated descriptions - mostly weapons (325) plus scattered
    cape/overall/hat lore. Regular v83 equipment has empty desc,
    which is a maplestory.io API limitation, not our bug.
  - **Source filter** - segmented control (All / In-game / Cash)
    that appears on every tab except Skin. Persisted separately in
    `localStorage['livens-character-build-v1:cash']` so it doesn't
    pollute the build-state URL. Pagination resets on toggle.

  **CSS scoping gotcha (caught + fixed by QA-kitten):**

  Astro's default `<style>` scoping compiles rules to
  `.item-card[data-astro-cid-XXX]`. Elements minted by our inline
  `<script>` (item cards, chips, empty state) don't carry that
  attribute, so **none of the card CSS rules applied** - the
  entire picker was rendering with browser defaults.

  QA-kitten's forensic pass found that the compiled CSS was
  correct but never matched any of the JS-created buttons. Fix:
  wrap 12 dynamic-element selectors in `:global(...)` so Astro
  emits them without the scope attribute. Rules affected:
  `.item-card`, `.item-card:hover`, `.item-card--equipped`,
  `.item-card img`, `.item-card__swatch`, `.item-card__cash`,
  `.item-card__name`, `.item-card__id`, `.chip`, `.chip:hover`,
  `.chip strong`, `.empty`.

  This was a pre-existing bug that had been latent - the layout
  happened to look correct because the parent `.item-grid` (Astro-
  rendered, properly scoped) provided the grid structure. But
  hover states, equipped highlights, and now the NX badge all
  depended on scoped rules that never fired. Now that they do,
  the whole picker feels more polished (border-color transitions
  on hover, equipped ring, etc. all actually visible).

- **2026-09-07** - **Sprint round 48: Customizer pagination +
  gender toggle.**

  Liven flagged that the Hair tab showed a count of 1220 but only
  60 cards were visible - MAX_GRID hard cap with a "refine the
  search" hint that gave no way to browse the full catalog.
  Second request: a gender toggle since MapleStory splits face +
  hair by ID range (males 30000-30999, females 31000-31999; and
  20000-20999 vs 21000-21999).

  **Pagination:**
  - Renamed MAX_GRID -> PAGE_SIZE (still 60). Added a `#load-more`
    button below the grid that increments the cursor by 60 per
    click. Button label auto-updates: "Show 60 more (1100
    remaining)" -> "Show remaining 20" -> hidden when exhausted.
  - Hint text now reads honest counts: "Showing 60 of 1220." vs
    the old passive "refine to narrow down."
  - Pagination cursor resets to 60 on tab switch, search input,
    gender change, and chip jumps.

  **Gender toggle:**
  - Segmented control (Both / Male / Female) rendered above the
    grid via `#gender-row`, only visible on Face + Hair tabs
    (`GENDER_SLOTS = Set("face", "hair")`). Other slots hide it
    via HTML `hidden` attribute + explicit `.gender-row[hidden]
    { display: none; }` CSS rule (needed because the base rule
    is `display: flex` which would otherwise override the
    attribute's implicit `display: none`).
  - Detection: `((id % 10000) / 1000) | 0` -> 0 = male, 1 = female.
  - Persisted separately in localStorage under
    `livens-character-build-v1:gender` so the preference survives
    reloads without polluting the build-state URL params.
  - Sync helper `syncGenderButtons()` toggles `aria-pressed` +
    `.gender-btn--active` class based on current filter.

  **QA-kitten regression:**
  - Pagination: all 1220 hair items reachable via 17 button clicks;
    search and tab switch correctly reset cursor.
  - Gender counts verified: Hair Male=612 / Female=608 / Both=1220,
    Face Male=230 / Female=223 / Both=453.
  - Gender detection: sample IDs from each filter fell in correct
    ranges (30310/30311/30312 male, 31150/31151/31152 female).
  - **First-pass caught a bug:** without the `[hidden]` CSS rule,
    `#gender-row` visible on Hat and Skin tabs and clicking it
    silently corrupted the persisted gender preference. Fixed in
    one line.
  - No regressions: equip from paginated grid, skin swatches,
    randomize, reset all still work. Zero console errors.

- **2026-09-06** - **Sprint round 47: Character customizer catalog
  validated against GMS/83's actual asset library.**

  After Sprint 46's icon-fallback fix made icons LOAD, Liven flagged
  that hairs + equips "still seem way off". QA-kitten's forensic
  pass revealed the true root cause: the item catalog contained IDs
  from a mixed-region datamine (KMS+GMS+other), and **items GMS/83
  doesn't know are silently dropped by the render endpoint** - the
  URL contains the ID but the character sprite shows nothing.
  Example: hair 30381 (Dragon Layered Red) → equipped it → char
  went bald.

  Second symptom: **KMS cross-region icon fallback returned wrong
  items at the same numeric ID**. Hair `30074` in KMS/389 is a
  plush mob; in GMS/83 it's a hairstyle. Different ID spaces. The
  fallback masqueraded wrong items as the requested one - actively
  misleading, worse than a broken glyph.

  **Fix strategy: audit the entire catalog against GMS/83 upstream
  at build time, ship only IDs that actually render.**

  Built `scripts/validate-character-items.mjs`:
  1. **Pass 1 (fast):** HEAD `/api/GMS/83/item/{id}/icon` for all
     3436 slot-mapped items. HTTP 200 → definitively exists.
  2. **Pass 2 (slower):** for items that failed pass 1, byte-diff
     `/character/2000/2000,{id}/stand1/0` against a bare-body
     baseline. If size delta > 150 bytes, item was rendered.
     Empirically: silently-dropped items return baseline+71 bytes
     (metadata jitter); real renders differ by 300+ bytes.
  3. Concurrency=24, incremental disk cache
     (`scripts/.item-validation-cache.json`) so interrupts don't
     lose progress. Full run: ~7 minutes wall time.
  4. Emits `src/data/character-item-whitelist.json` (kept items
     with `{id, name, slot}` triples).

  **Discovery:** Face acc (101xxxx) and Eye acc (102xxxx) are
  entirely unrenderable in GMS/83 - every single ID in both ranges
  returns +73 bytes (silent drop) regardless of face base. Both
  tabs removed from `CHARACTER_SLOTS` in `src/lib/character-slots.ts`
  (was 14 tabs, now 12) and from `DEFAULT_BUILD`.

  **Catalog cleanup (kept / dropped, % garbage):**

  | Slot | Kept | Dropped | % Garbage |
  |---|---|---|---|
  | weapon | 228 | 1 | 0% |
  | face | 453 | 15 | 3% |
  | hair | 1220 | 52 | 4% |
  | earring | 23 | 1 | 4% |
  | gloves | 100 | 12 | 11% |
  | shoes | 155 | 43 | 22% |
  | cape | 21 | 9 | 30% |
  | bottom | 174 | 79 | 31% |
  | top | 184 | 90 | 33% |
  | hat | 216 | 125 | 37% |
  | overall | 95 | 83 | 47% |
  | **Total** | **2869** | **567** | **16.5%** |

  Also: KMS/389 cross-region icon fallback removed from the fallback
  chain in `character.astro`. Now: primary GMS/83 icon → GMS/83
  character-render preview.

  **Regression pass (QA-kitten):**
  - 12 tabs (Face acc + Eye acc gone)
  - Search "Dragon Layered" → 0 hits (was 8 broken variants)
  - Search "All Back" → 1 hit (30070 only; broken 30071-30074 gone)
  - Equipped 6 random items → all 6 visually rendered on sprite
  - 5x Randomize → all equipped items appear on composited char
  - No wrong-item images (KMS fallback gone)
  - Zero console errors / warnings
  - URL persistence unaffected

  New npm scripts:
  - `npm run validate:character-items` - re-run catalog audit

- **2026-09-06** - **Sprint round 46: Character customizer icon
  fallback chain + skin swatches.**

  Liven asked for the character sprites in the customizer to be
  fixed. Forensic QA-kitten pass revealed the actual character
  compositing was working fine end-to-end - the real bug was
  **massive icon-availability holes in the maplestory.io picker
  icon endpoint** (invisible to users because failed icons just
  faded to 30% opacity via `onerror`). Breakdown:
  - Face acc `1017xxx`: **20/20 icons missing (100%)**
  - Eye acc `1027xxx`: **37/37 icons missing (100%)**
  - Skin `2001/2002/2003/2005`: returned 8x14 px stub PNGs
    (essentially empty)
  - Hat / Top / Overall / Bottom / Shoes / Cape: 10-40% scattered
    404 rate per tab

  **Investigation** tested 6 alternate endpoints against 7 known-
  broken IDs. Universal winner: the **character render endpoint**
  (`/api/GMS/83/character/2000/{id}/stand1/0`) returned 200 image/
  png for EVERY tested ID, because if an item is renderable on a
  character it's renderable period. KMS/389 also filled a few
  scattered gaps that GMS/83 lacked.

  **Fix:** replaced inline `onerror="opacity=0.3"` with a proper
  3-URL fallback chain wired via `data-fallbacks` attribute + a
  delegated capture-phase error handler on the grid:
  ```
  1. maplestory.io/api/GMS/83/item/{id}/icon           (primary)
  2. maplestory.io/api/KMS/389/item/{id}/icon          (fallback 1)
  3. maplestory.io/api/GMS/83/character/2000/{id}/stand1/0  (universal)
  ```

  **Skin tab special-case:** replaced API icons entirely with pure
  CSS colored circles (`.item-card__swatch`) - zero network calls,
  perfect fidelity, and it's what a "skin picker" actually wants
  visually. Palette sampled from real character renders:
  Light `#ffe0bd`, Tan `#d7a86e`, Dark `#a06740`, Pale Pink
  `#ffcfcf`, Ashen `#b0b0a0`, Ghost `#cfe8e6`.

  **Regression pass results:**
  - Face acc: 0/20 -> **20/20 loaded** (100%)
  - Eye acc: 0/37 -> **37/37 loaded** (100%)
  - Hat 1007077 / 1007090 previously-broken IDs: now render via
    char-render fallback
  - Skin swatches: 6/6 correct colors, zero network requests
  - All other flows (equipping, randomize, URL persistence,
    reload state restore) unchanged
  - Zero console errors, zero uncaught promise rejections

- **2026-09-06** - **Sprint round 45: World-map hover/click accuracy
  fix.**

  Liven reported the map hover/click felt "not accurate or rough"
  when navigating into Victoria Island regions. Root cause diagnosis:
  - Pin hitboxes were only **14x14 px** - the size of the visible
    dot. Cursors had to hit that surgical target.
  - No explicit `cursor: pointer` on either pins or subregion link
    overlays. Some browsers wouldn't infer it from anchors with
    `position: absolute` + `<img>` child.
  - The pulse animation on linked pins made the target visually
    jump every ~2s, giving the "chasing a moving target" feeling.
  - Subregion label overlays (HENESYS, PERION, etc.) had zero
    hover-state indication of their bounding-box hitbox, so users
    couldn't SEE where the clickable area was before clicking.

  **Fixes shipped in `WorldMapView.astro`:**

  1. **Expanded hitboxes to WCAG-friendly 44x44 px** - added
     `padding: 15px; box-sizing: content-box;` to `.wmv__pin`. The
     visible dot stays 14px but the invisible clickable area is
     now 3x wider. QA-kitten verified `elementFromPoint(cx+18,
     cy)` correctly hit-tests the pin (previously would've hit
     the background at 8+px offset).
  2. **Explicit `cursor: pointer`** on `.wmv__pin--linked` and
     `.wmv__link` so browsers don't miss it.
  3. **Kill pulse animation on hover** (previously paused; but a
     paused CSS animation still applies its current frame's
     transform, silently clobbering the hover-state scale).
     Switching to `animation: none` on `:hover` lets the declared
     `transform: scale(1.5)` actually take effect - pin visibly
     grows AND holds steady while cursor is nearby.
  4. **Subregion overlays get a visible outline ring on hover**
     via `box-shadow: 0 0 0 2px rgba(255,210,100,0.9)` plus a
     subtle background tint. Users now SEE the clickable
     rectangle before clicking. This is the biggest UX win per
     QA-kitten: "I can now see the hitbox I'm aiming at."
  5. **Keyboard access via `:focus-visible`** - same label +
     glow feedback as hover, native focus outline suppressed
     since the golden glow replaces it.
  6. **`prefers-reduced-motion: reduce` media query** kills the
     pulse animation and hover transforms for users who've set
     the OS-level reduce-motion preference.
  7. **Label popover repositioning** - offset calc adjusts for
     the new 15px padding so labels sit 6px below the DOT (not
     30px below the padded anchor edge).

  QA-kitten regression pass on 78 linked pins + 15 unlinked
  pins + 3 subregion overlays on Victoria Island's WorldMap010:
  all acceptance criteria pass, cursor tracking now stable, both
  screenshots delivered (pin hover with label + glow ring,
  subregion overlay with box-shadow ring).

- **2026-09-06** - **Sprint round 44: Audio transcoded to MP3 for
  Cloudflare Pages deployability.**

  First real deploy attempt (`npm run deploy`) surfaced Cloudflare
  Pages' 25 MiB per-file cap - our WAV audio masters ranged from
  12 MB (Henesys) to 34 MB (Sleepywood), and perion.wav (30.8 MB)
  was the first to trip the check.

  **Fix:** transcode every track to 128kbps stereo MP3, which
  cuts file size by ~92% with no audible difference for background
  music at typical listening volume:

  | Track | Before | After |
  |---|---|---|
  | henesys | 12.0 MB | 1.0 MB |
  | kerning | 13.5 MB | 1.1 MB |
  | lith | 11.5 MB | 1.0 MB |
  | perion | 30.8 MB | 2.6 MB |
  | sleepywood | 34.7 MB | 2.9 MB |
  | **total** | **102.5 MB** | **8.5 MB** |

  Wired via a reusable `scripts/transcode-audio.mjs` script (idempotent:
  skips files whose .mp3 is newer than the .wav source; deletes .wav
  masters after successful encode; leave `KEEP_WAV=true` to preserve
  local copies). New npm script: `npm run transcode:audio`.

  `ffmpeg-static@5.3.0` added as devDependency (bundles the ffmpeg
  binary; no system-wide install needed). `src/data/audio.ts` all
  5 entries updated from `.wav` to `.mp3`; comment documents the
  workflow for future audio drops.

- **2026-09-06** - **Sprint round 43: Sleepywood BGM "Watchful Deep"
  wired + music-toggle a11y polish.**

  Added fan-made Sleepywood-inspired track "Watchful Deep"
  (34.73 MB WAV, sourced from B:\Downloads\watchful deep.wav) to
  `public/audio/sleepywood.wav`. Registered in `src/data/audio.ts`
  under the `sleepywood` theme key (previously null). QA-kitten
  confirmed:
  - `/audio/sleepywood.wav` serves HTTP 200 with valid `RIFF...
    WAVE` header + `Content-Type: audio/wav`.
  - `/world/victoria-island/sleepywood` (and any other Sleepywood-
    themed page) renders the floating music toggle wired to the
    new track.
  - Click activates playback; per-theme wiring uncontaminated
    (Henesys still points at henesys.wav).
  - Zero console errors on either page.

  **A11y polish caught in QA:** the button tooltip previously read
  `Music: off` when muted, giving screen-reader users no signal
  about what would play if activated. Updated `setUiState` in
  MusicPlayer.astro so the tooltip now reads:
  - Muted: `Play "Watchful Deep"` (or whatever track is queued
    for the current theme).
  - Playing: `Now playing: Watchful Deep (click to pause)`.
  Visible label stays concise (`Music off` / track title) so
  the toggle chip doesn't visually bloat.

- **2026-09-06** - **Sprint round 42: Character customizer +
  Hall of Fame sprite fix + Wrangler deploy wired.**

  **Hall of Fame sprite fix (regression from earlier).** All 12
  legacy items on `/hall-of-fame` were silently falling back to
  the themed placeholder SVG. Two-part bug:
  - `itemIconSrcs` used only MeowDB, which doesn't have legacy
    GMS event items (Frozen Tuna, Maple Flag, Pumpkin Hat, etc.).
  - `HallOfFameCard`'s hardcoded fallback URL used `/render/icon`
    (404) instead of `/icon` (200).
  Fixed by flipping `itemIconSrcs` to `[maplestory.io/icon,
  meowdb-fallback]` (verified 12/12 legacy items serve 200 from
  maplestory.io) and simplifying `HallOfFameCard` to use the
  shared helper (DRY). This fix helps site-wide: every item icon,
  quest reward card, and KPQ scroll drop now has the same
  reliable maplestory.io-primary chain.

  **Character customizer shipped (`/character`).** Live sandbox:
  users equip any item on an idle character sprite, see it
  composite in real time via maplestory.io's character render
  endpoint. Highlights:

  - **14 slot tabs:** Skin, Face, Hair, Hat, Face acc, Eye acc,
    Earring, Overall, Top, Bottom, Shoes, Gloves, Cape, Weapon.
    Each tab shows a filtered grid from items.json with live
    counts (Hat: 341, Face: 468, Hair: 1272, Weapon: 202, etc.).
  - **~3,300 equippable items** categorized by WZ ID prefix in
    `src/lib/character-slots.ts` (`slotForItem` predicate per
    slot, single-source-of-truth for both the categorizer and
    the URL builder).
  - **Live composite preview** at `https://maplestory.io/api/GMS/
    83/character/{skin}/{items}/{stance}/0` with Cloudflare
    warm-up retry via `onerror` cache-buster.
  - **7 poses:** stand1, stand2, walk1, alert, jump, prone, sit.
  - **Search per slot** with 60-item cap + total-match hint.
  - **Randomize button** rerolls the whole build (required slots
    always populated; optional slots equipped 60% of the time).
  - **Reset + Unequip slot** actions (Skin protected as
    structurally required).
  - **Shareable URL**: state syncs to `?skin=X&hair=Y&hat=Z&...`;
    Share button copies to clipboard.
  - **Build persistence**: full state saved to `livens-character-
    build-v1` in localStorage so returning visitors resume.
  - **Build summary chips** jump straight to any equipped slot's
    tab on click.
  - **Responsive**: side-by-side desktop (preview sticky on left,
    picker on right); stacks under 820px.

  Frontmatter injects three JSON blobs (`items-data`, `defaults-
  data`, `slots-data`) via `<script type="application/json">` for
  the inline client script to consume - single source of truth
  for slot definitions, avoiding duplicated hardcoded arrays
  between server and client.

  **Bug caught + fixed in QA:** initial slot categorization had
  Top (104xxxx) and Overall (105xxxx) ranges swapped (confused
  Coat with Longcoat). Fixed with an inline comment documenting
  the correct WZ ranges.

  Nav gains a "Character" entry between Hall of Fame and
  Leveling.

  **Deployment tooling wired.** `wrangler@4.129.0` installed as
  devDependency; `npm run deploy` script runs `npm run build` +
  `wrangler pages deploy dist --project-name=livens-classic-
  maple`. `.gitignore` gains `.wrangler/`. `DEPLOY.md` gains a
  "Quick path: Wrangler CLI (no GitHub, ships in 3 minutes)"
  section at the top - the existing GitHub-connected auto-deploy
  flow is preserved below for when a repo remote gets set up.

  Build: 5,706 pages / 8s / Pagefind indexed / character page
  148KB with inlined item data / 0 broken internal links.

- **2026-09-06** - **Sprint round 41: Header wordmark contrast fix +
  Kerning Party Quest interactive walkthrough.**

  **Header wordmark contrast fix (site-wide).** QA-kitten flagged
  in Sprint 40 that "Liven's Classic Maple Guide" washed out on
  light-theme pages (Henesys / Ellinia) where a scenic backdrop
  image sits behind the header - dark green wordmark blends into
  the foliage. Fixed with a two-layer text-shadow halo:
  - Tight opaque white halo (1px offset, 4px blur) for crisp
    letter edges.
  - Soft white outer glow (0px offset, 10px blur, 35% opacity)
    for background-agnostic contrast without dimming the base
    color.
  - Overridable via `--brand-halo` custom prop so a future
    night-mode theme can invert.
  QA verified: legible on Henesys, Ellinia, AND doesn't wreck the
  Kerning purple/dark theme.

  **Kerning Party Quest walkthrough shipped
  (`/party-quests/kerning-pq`).** Interactive editorial guide -
  the first in a new walkthrough section:

  - **Hero card** with 5 facts pulled from the datamine: level
    range (21-30), party size (4-6), entry NPC (Lakelis, linked
    to `/npcs/800000` with sprite), location (Kerning City,
    linked to `/maps/10003000`), expected run time.
  - **Progress tracker.** Every stage has a checkbox; state
    persists to `localStorage` (`livens-kpq-progress` key) so
    a returning player picks up mid-run. "N / 7 stages cleared"
    summary + a "Reset run" button. Checked stages visually
    dim to 60% opacity.
  - **6 iconic mob cards** cross-linked to full dossiers:
    Curse Eye, Ligator, Wraith, Jr. Wraith, Bubbling, King Slime.
  - **4 LFG shout templates** as one-click clipboard buttons -
    "S> KPQ Any @@@@ (Lv 21-30)", cleric-priority, leader-ready,
    ranged-rush. Buttons briefly flash "Copied!" on success.
  - **7 stage cards** covering the full run (Waiting Room ->
    Stage 1 Platform Jump -> Stage 2 Match Cards -> Stage 3
    Barrels -> Stage 4 Coins -> Bonus Room -> Boss King Slime).
    Each stage: time-limit chip, objective, mob chips where
    relevant, Strategy list + Gotchas list side-by-side.
  - **Rewards section** grounded in quest 10311 payout: 2,193
    base EXP, 614 mesos, four Intermediate Earring stat scrolls
    (STR/DEX/INT/LUK, 1% each) with cross-linked item icons,
    plus a Classic-era King Slime drop pool.
  - **3 party composition suggestions** with strengths/weaknesses:
    The Classic Mix, Ranged Rush, Cleric Carry.
  - **Continue-exploring footer** linking Kerning City dossier,
    Lakelis NPC, quest 10311, and VI overview.

  Data lives in `src/data/party-quests/kerning-pq.ts` -
  editorial content + grounded IDs. The single inline
  `<script is:inline>` block (~40 LOC) handles both localStorage
  persistence and clipboard actions.

  **Walkthrough directory (`/party-quests`).** Replaced the
  previous empty-state placeholder with a real catalog. KPQ ships
  as "Available" (green pill, clickable); Ludibrium PQ and Mu Lung
  Dojo listed as "Planned" (muted, no href) so readers see the
  queue without misleading dead links.

  **Kerning City subpage** gains a prominent featured-content CTA
  card ("Party quest walkthrough - Kerning Party Quest (KPQ) ...")
  above the Landmarks list, linking to the walkthrough. Added an
  optional `featuredContent` field to `VictoriaTown` so other
  towns can eventually surface their own signature content the
  same way (data-driven, zero template changes needed).

  Build: 5,705 pages / 8s / Pagefind indexed all KPQ content
  (searching "KPQ" now surfaces the walkthrough as top hit) /
  0 broken internal links.

- **2026-09-06** - **Sprint round 40: Per-town regional dossier
  subpages + sprite-source reordering.**

  Every VI town now has its own themed dossier at
  `/world/victoria-island/{slug}` - eight new deep-content pages
  each themed to the town's region palette (Bowman green for
  Henesys, Thief purple for Kerning City, etc.). Not just the
  curated highlights - **all** the data, cross-linked.

  **Per-town page structure:**
  - Breadcrumb: `World Map > Victoria Island > [Town]` with proper
    `aria-label="Breadcrumb"` + `aria-current="page"` for a11y.
  - Hero card with class-town badge, level chip, tagline, blurb,
    and the town's actual minimap (right column, links to
    `/maps/{id}` for the full dossier).
  - Stats bar: NPCs / quests / hunting maps / interiors / exits.
  - Landmark pills (curated).
  - **Full NPC roster** grid - every NPC stationed on the town
    map, each card with sprite + name + "N quests, N maps" meta.
    Amherst 3, Southperry 4, Lith 12, Henesys 10, Ellinia 12,
    Perion 9, Kerning 14, Sleepywood 7. Total: 71 NPCs surfaced.
  - **Every quest that starts here** - grouped into 5 level bands
    (1-10 / 10-20 / 20-30 / 30-45 / 45+), each quest cross-linked
    to `/quests/{id}`. Henesys and Kerning both surface 90+ quests
    each (Community Board multiplies the count). Total across all
    towns: 260 quest listings, 0 broken links.
  - **Hunting grounds nearby** - every map in the town's ID-prefix
    area with at least one mob spawn, rendered as cards with a
    minimap thumbnail, street name, mob level range, and 3 mob
    preview sprites (plus "+N more" when appropriate). Perion 32
    (Warning Street boars), Sleepywood 36 (all Sleepy Dungeon
    variants), Kerning 33 (subway + Line 3). Total: 172 hunt
    cards.
  - **Town interiors** - shops, hair salons, party stations, all
    the isTown=true sub-maps in the region.
  - **Direct exits** - portal destinations from the main town map.
  - **Continue exploring footer** - prev/back/next chain that
    links siblings without needing to return to the VI index.

  **Reusable helpers (`src/lib/town-area.ts`).** Pure functions
  that work for any town (not just VI) - `getTownAreaMaps`,
  `bucketTownMaps`, `getTownNpcs`, `getTownQuests`,
  `groupQuestsByBand`, `resolveExits`. When we extend the
  deep-dive treatment to Ossyria towns, we reuse these directly.
  Zero duplication between the deep-dive page and the subpage
  template.

  **VI index page** gains a "Full {town} dossier ->" pill button
  in each town section that jumps directly to the subpage.

  **Sprite-source reordering.** QA-kitten flagged ~57 wasted
  requests per town page from mob preview icons: primary source
  was meowdb.com which occasionally 404s in-browser (referrer
  restrictions), then fell back to maplestory.io. Swapped the
  order so maplestory.io is primary (CDN-backed, no CORS/referrer
  friction) and meowdb.com is the fallback. Same 100% eventual
  coverage; happy path is now one request per icon instead of
  two. Applies site-wide - every mob sprite anywhere gets faster.

  Build: 5,704 pages / 8s / Pagefind indexed all 8 new subpages /
  0 broken internal links / editorial resolver still 100%.

  Known non-blockers surfaced by QA (deferred):
  - Site header wordmark washes out over the light Henesys/Ellinia
    hero backdrops. Cosmetic; needs a scrim/gradient overlay on
    lighter themes.
  - Maple Administrator NPC (id 2007) resolves to a 1x1 sprite
    from maplestory.io - datamine quirk, needs a manual wzId fix.
  - A handful of Line 3 Construction Site rooms report
    `mobLevelRange: {min: 200, max: 200}`, which is the source
    data - could clamp on display if it looks silly.

- **2026-09-06** - **Sprint round 39: Victoria Island deep dive.**

  The standing "we're deep-diving VI" focus finally has its own
  landing page: `/world/victoria-island` - an editorial gazetteer
  that joins curated content against the live datamine so counts
  and cross-links stay honest as the catalog grows.

  **What's on the page:**
  - Hero with live region-wide stats (8 towns, 277 maps, 183 NPCs,
    24 quests region-tagged VI/MI).
  - A themed jump-nav with per-town accent color pills.
  - Full leveling arc narrative (1 -> 70+) as a 7-band ordered list.
  - Town-by-town sections for **Amherst, Southperry, Lith Harbor,
    Henesys, Ellinia, Perion, Kerning City, Sleepywood** - each
    with its own accent color, minimap, live NPC/quest counts,
    5 curated content columns (Signature NPCs, Notable mobs,
    Signature quests, Recommended hunts, Landmarks), plus a
    class-town badge (Bowman/Magician/Warrior/Thief).
  - Cross-region highlights (Florina Beach, Cave Fairies,
    Kerning PQ, Free Market entrance).
  - Continue-exploring grid linking to raw worldmap, mob catalog,
    NPC directory, quest tracker, VI Hall of Fame.

  **Grounded truth discipline.** First pass had curated NPC / quest /
  hunting-map names that only 68% resolved against the datamine -
  35 italicized "unknown" entries polluting the page. Fixed with
  a proper data-truth pass that pulled real names from `maps.json`,
  `npcs.json`, `quests.json`, `mobs.json` before I wrote the
  editorial. Second pass: **100% resolve (153 cross-linked entries,
  0 unknowns)**.

  Promoted the resolver script to `scripts/audit-vi-references.mjs`
  + `npm run audit:vi`. Run it after any datamine rebuild - if
  editorial content drifts, this fails loud and points at exactly
  which names to fix.

  **`/world` index featured card.** A prominent Victoria Island
  card sits between the interactive worldmap and the "Continents"
  grid so anyone landing on `/world` gets one clear next-step CTA.

  **QA polish** (via qa-kitten):
  - Fixed grid layout so long minimaps (like Kerning's 179x321
    portrait) can't push text out of adjacent cells - added
    `align-items: start`, `min-width: 0` on blurb column, and
    `max-height: 14rem; overflow: hidden` on the minimap frame.
  - All cross-link families (NPC / mob / quest / hunt) now
    inherit the town's accent color so quests visually pop as
    clickable (previously dark forest green regardless of town
    theme). Underline-on-hover for a11y.
  - Data files: `src/data/victoria-island.ts` (curated town/mob/
    quest/npc/hunt data with `VictoriaTown[]` + highlights +
    leveling arc), 100% cross-referenced against live dossiers.

  Build: 5,696 pages / 7.9s / Pagefind indexed all VI content /
  0 broken links. Search "Kerning City" now surfaces the deep dive
  as the top hit.

- **2026-09-05** - **Sprint round 38: Launch videos + search fix +
  community architecture plan.**

  **The stealth bug you spotted:** searching "Fish Spear" from the
  header returned nothing. Root cause: I'd been running `npx astro
  build` all through Sprints 36-37 instead of `npm run build`,
  which SKIPS the `pagefind --site dist` post-step chained into
  the npm script. The Pagefind static index at `dist/pagefind/`
  didn't exist, so the widget silently returned zero hits for
  everything.

  Fix was one command (`npm run build`) - Pagefind indexed all
  5,695 pages and search now returns 4 results for "Fish Spear"
  (item dossier, Bubbling mob drop-table, quest cross-reference,
  and the items index page). Verified by qa-kitten with real
  browser DOM inspection.

  Also updated the header search UX so it's clearer this is
  full-site search, not a nav shortcut:
  - Placeholder: "Search everything (Fish Spear, Snail, Henesys...)"
  - Screen-reader label: "Search every page: items, mobs, quests,
    maps, guides"
  - `title` tooltip: "Full-text search across every page on the
    site. Type an item / mob / quest / map / NPC name and hit Enter."

  Discipline going forward: `npm run build` is the ONLY correct
  way to build, always. `npx astro build` is a footgun. Anyone
  bypassing the npm script breaks search silently.

  **Launch trailer embeds (new).** Fetched the two current
  Nexon-official launch-window videos from the @MapleStory YouTube
  channel (verified Sep 5, 2026):
  - **The Adventure Begins Soon** (bkIcl0OwXpw) - Sep 4, 2026
    launch-date + Founder's Packages trailer.
  - **Kerning City's Dark Lord Awakens** (aUJpMVFtzEY) - Sep 2, 2026
    5-minute in-world story trailer.

  New `<LaunchVideos>` component embeds both as a responsive 2-column
  grid on the homepage between the launch timeline and the Founder's
  Packages card. Uses youtube-nocookie.com + `loading="lazy"` +
  `aspect-ratio: 16/9` wrapper so iframes stay cheap and reflow on
  mobile. Add/swap videos by editing the `VIDEOS` array at the top
  of the component.

  **Community & accounts architecture plan (new doc).** Wrote
  `docs/community-plan.md` - a full pros/cons analysis of the four
  main paths for adding accounts + comments/forum to a static Astro
  site:
  1. Self-host everything (max control, max ops burden)
  2. Supabase BaaS (best balance for our shape)
  3. Third-party embeds (Giscus, Discord, Discourse, etc.)
  4. Hybrid (recommended)

  The recommended phased roadmap:
  - **Phase 1 (this weekend if approved):** Discord invite in
    footer + Giscus per-page comments (GitHub Discussions backend,
    zero backend cost, spam-resistant) + `/community` landing page.
    One afternoon of work, no auth, no DB.
  - **Phase 2 (when a feature demands accounts):** Supabase for
    Postgres + Auth (email magic-link + Google + Discord OAuth),
    RLS, user profiles.
  - **Phase 3 (deferred per Liven):** Character customization builder
    using maplestory.io's character render endpoint, cosmetic-only,
    stored in Supabase.
  - **Phase 4 (only if we hit specific triggers):** Full Discourse or
    native forum. Explicit go/no-go criteria documented so we don't
    overbuild.

  Doc ends with 5 open decisions for Liven (Discord server, comments
  repo name, auth methods, handles-vs-real-names, profile URL scheme).

  Build: 5,695 pages in 7.7s. Pagefind indexed. Dead-link auditor
  still 0 broken.

- **2026-09-05** - **Sprint round 37: Founder's Packages CTA +
  Hall of Fame + placeholder silhouettes + sneaky `/maps` fix.**

  **The user-visible catch:** you noticed the `/maps` catalog was
  showing almost no minimap thumbnails. Turns out Sprint 36 had a
  latent second bug: 6 junk WZ records (`80003xxx` range, empty
  name, `wzId=0`) were leaking into the catalog AND generating
  `map/0/minimap` URLs that 404'd. Filtered them out of the compact
  index entirely and hardened `mapThumbnailSrcs()` to reject
  `wzId <= 0`. `/maps` now shows 319 minimap thumbnails cleanly
  (up from ~1 - previous "success" was rendering broken images
  that got hidden by `onerror`).

  **Themed silhouette placeholders (new).** When every URL in a
  `<Sprite srcs={[...]} />` chain 404s, the component now falls
  back to `/images/placeholders/{theme}.svg` - a 488B soft-rounded
  card with a translucent maple-leaf silhouette + question-mark
  glyph in the current page's accent color. Six placeholders were
  generated (one per region theme) by
  `scripts/generate-placeholder-sprites.mjs`. Every sprite consumer
  now passes `placeholder={themePlaceholderUrl(pageTheme)}` so
  broken images gracefully become themed cards instead of hidden
  glyphs. Coverage numbers unchanged; user-facing perceived
  coverage goes from "some cards are just blank" to "every card
  has SOMETHING".

  **Founder's Packages CTA (new).** Pulled current pricing/tier/
  deadline data from Nexon's official
  `nexon.com/mscw/pre-launch-sales` page and the two Sep-2-2026
  news posts (44134 sale-opening + 44883 purchase guide, both
  archived in `sources.ts`). New components:
  - `<FoundersPackagesCard>` - 3-tier comparison grid (Snail $29.99
    / Orange Mushroom $59.99 / Zakum $79.99) with "Buy on Nexon"
    buttons per tier. Renders on `/launch` (full detail) and the
    homepage hero (below the launch timeline).
  - `<FoundersCountdown>` - ticking countdown widget to the sale
    deadline (11:59 PM PDT October 14, 2026 = 39d 14h at build
    time). SSR-safe initial paint, client-side JS updates once per
    second, auto-swaps to "sale ended" message after deadline.

  Retired two now-answered items from `openQuestions.ts` (tier
  pricing + carryover both confirmed by Nexon on Sep 2).
  Updated the top announcement bar headline to
  `Founder's Packages on sale - ends October 14`.

  **Hall of Fame page (new).** New nav tab + `/hall-of-fame` route
  showcasing 12 curated legacy MapleStory event items with a
  wishlist framing (`confirmed` / `expected` / `hoped` / `dreamed`).
  Data lives in `src/data/hallOfFame.ts` - a plain TypeScript
  array anyone can extend. Roster launches with Frozen Tuna
  (confirmed - shipped in Snail tier), Maple Flag, The Stars
  and Stripes, Pumpkin Basket, Halloween Pumpkin Hat, Zombie
  Mushroom Hat, Christmas Tree Hat/dagger, Party Firecracker,
  Piece of Birthday Cake, and two more Halloween hats. Real
  v83 WZ IDs verified against maplestory.io - sprites render
  from the CDN with the new themed placeholder as fallback.

  A dedicated "Victoria Island connections" section auto-surfaces
  any Hall of Fame entry with a `victoriaIslandTie` field - three
  entries land there today (Maple Flag, Zombie Mushroom Hat,
  Piece of Birthday Cake) reflecting the site's VI focus.

  **Fuzzy NPC name search (tried, negative result).** Ran variant
  probing (strip Mr./Mrs., strip parenthesized suffixes, strip
  "the Xxx" epithets, first word only, last word only) against
  the 39 unresolved NPC names. Zero additional hits - confirmed
  these are genuinely post-v83 CoT2-only additions (Arthur,
  Bianca, Raymond, Silas Irons, Whitney, etc.) and not just
  search-formatting failures. Documented so we don't try again.

  Build: 5,695 pages in 6.7s. Dead-link auditor still 0 broken.

- **2026-08-31** - **Sprint round 36: Sprite coverage +
  fallback chains.** Fixed a stealth bug + a whole class of them:

  **The stealth bug:** `/maps` catalog was calling `mapMinimapUrl(m.id)`
  with the internal dossier ID (`1`, `30`, etc.) instead of the WZ ID
  (`10000`, `1000005`, etc.). Every card silently 404'd its minimap
  and the `onerror` handler quietly hid the broken image — so the
  bug was invisible in QA but the map catalog was rendering with
  almost NO minimaps. Same "wrong id" bug we fixed on `/maps/[id]`
  in Sprint 32, this one was one route away. Fixed by adding
  `wzId` to the compact map index and switching to `mapThumbnailSrcs(m.wzId)`.

  **The whole class:** built a `<Sprite srcs={[...]} />` component
  with an ordered fallback chain. Pass a list of URLs most-canonical
  first; on primary 404, an inline `onerror` handler hops to the
  next URL, and so on. Last-resort failure hides the image (no more
  broken-icon glyphs). Zero build-time overhead, zero framework
  runtime, one round-trip only on the happy path.

  New CDN helpers return fallback chains for each entity type:
  - `mobSpriteSrcs(id, wzId)` — MeowDB → maplestory.io v83 render.
    Recovers Nependeath, Dark Nependeath, Ultra Jr. Necki 1 (the
    3 real mobs MeowDB doesn't ship).
  - `mapThumbnailSrcs(wzId)` — maplestory.io minimap →
    maplestory.io full render. Recovers 40 shop-interior maps
    that have no separate minimap file (Amherst Department Store,
    Lith Harbor Armor Shop, etc.).
  - `npcSpriteSrcs(wzId)` / `itemIconSrcs(wzId)` — API-parity
    single-entry chains for uniform template usage.

  Wired into 5 sprite-consuming surfaces: mob dossier hero, map
  dossier hero minimap + mob card grid, mob catalog table, item
  dossier "Dropped by" list, map catalog card grid.

  **Coverage before → after (measured by `npm run audit:sprites`):**
  - Mobs: 95.4% → **96.9%** (3 real recovered; 6 remaining are
    dev-only Test mobs 9990000-9990005)
  - Maps: 72.8% → **82.2%** (40 shop-interior maps recovered;
    76 remaining have no wzId at all — CoT2-only post-v83 content
    we already know isn't on v83 CDNs)
  - NPCs: 85.3% (39 remaining have no resolved wzId — needs
    name-resolution pass which is a separate sprint)
  - Items: 100.0% (unchanged, already full coverage via MeowDB)

  **Also promoted to a real dev tool:** `npm run audit:sprites`
  probes every entity across primary + fallback URLs and reports
  coverage split (primary/fallback/missing) per entity type.
  Environment overrides for deeper scans:
  `SAMPLE=500 npm run audit:sprites` /
  `CONCURRENCY=20 npm run audit:sprites`.

  Build: 5,694 pages in 7.0s. Dead-link auditor still 0 broken.

- **2026-08-31** - **Sprint round 35: Per-region theming + rich
  social share previews.** Two wins that reinforce each other:

  **1. `og:image` + full Twitter Cards meta**, previously missing.
  Every page was shipping only `<meta twitter:card="summary">` with
  no image — link previews on Discord/Twitter/Slack fell back to
  just the favicon. Added `image` prop to BaseLayout with a
  theme-aware default that auto-selects the matching 1672x941
  regional background from `/public/images/*-background.png`. Also
  upgraded `twitter:card` to `summary_large_image` (matches the new
  image dimensions) and added `twitter:image`, `twitter:title`,
  `twitter:description` for a proper Twitter Card render.

  **2. Per-region theming across every dossier route.** Before:
  every mob/map/npc/quest page hardcoded `theme="henesys"` or
  `"sleepywood"`, ignoring which region the entity actually
  belonged to. Now each dossier auto-picks its theme by scanning
  its associated location strings.

  New `src/lib/region-theme.ts` provides `themeForLocation()`:
  - Frequency-vote across a list of location strings (map names,
    return-map names, street names). A mob spawning on 4 Ellinia
    maps + 1 Kerning map correctly lands on ellinia (plurality wins),
    not whichever rule happened to be listed first.
  - Falls back to coarse region-name matching (Maple Island → lith,
    Ossyria → sleepywood, Victoria Island → henesys hub).
  - Final fallback to henesys default — never returns a broken theme.

  Wired into 5 routes (mob, map, npc, quest-dossier, world sub-region).
  Theme distribution went from all-one-theme to properly spread:
  - /maps: 172 sleepywood, 87 henesys, 47 kerning, 43 lith, 41
    ellinia, 36 perion (all 6 themes represented)
  - /quests: 217 henesys, 46 lith, 44 ellinia, 41 kerning, 36
    sleepywood, 28 perion
  - /npcs: 102 henesys, 67 sleepywood, 41 lith, 25 kerning, 19
    ellinia, 12 perion

  Kitten spot-checked: `/mobs/11` (Dark Stump) now renders with
  Perion's dark-brown H1 (`rgb(107,47,10)`) and clay-tan hero
  border, og:image = perion-background.png. `/npcs/1004` (Rini)
  gets Ellinia's forest-green H1 (`rgb(30,64,40)`) and ellinia-
  background.png. `/maps/10004000` (Perion town) visually
  confirmed — sunset-desert canyon background + warm-brown nav,
  no green Henesys bleed-through anywhere.

  Net effect: sharing `/mobs/11` on Discord now shows a Perion-
  branded preview card. Sharing `/npcs/1004` shows an Ellinia
  forest scene. Every share is context-aware and site-branded.

  Build: 5,694 pages in 7.6s. Dead-link auditor confirms 0 broken
  internal links still.

- **2026-08-31** - **Sprint round 34: Discoverability + dead-link
  hunt.** Second cleanup pass, targeting things that WERE broken but
  we'd never noticed because there was no tooling to notice with:

  **1. `/quests` index was hiding 72% of the quest catalog.** Only
  90 editorial MDX quests were shown; the other 232 datamined
  quests rendered fine at `/quests/{id}` (dual-path route from
  round 19) but were unreachable from the index — the only way to
  find them was via an NPC or mob cross-link. Refactored the
  frontmatter to merge both sources into a unified `Card` shape
  with an `isEditorial` flag, so every quest lives in exactly one
  level-tier bucket. Editorial cards keep their rich category-
  colored badge + tagline; dossier-only stubs get a dashed border,
  muted grey "Datamined" pill, and a fallback tagline hinting
  that the click still gets you giver + rewards + chain info. Tier
  count now shows "36 quests · 22 editorial" when the mix is
  partial. 322-total lede replaces the misleading "90 quests"
  number.

  **2. Built a dead-link auditor** (`scripts/audit-links.mjs` /
  `npm run audit:links`) - crawls every generated HTML page in
  `dist/`, extracts every `href="/..."`, and verifies each URL
  resolves to a real page in the build output. Skips static-asset
  prefixes (`/pagefind`, `/_astro`, `/images`, etc.) so it only
  reports true 404-would-fire dead links. Sub-3-second runtime on
  5,694 pages. This is now a permanent dev tool, not throwaway
  cleanup scaffolding.

  **3. First audit run: 4 broken-link categories, 23 total
  referrers, all fixed.**
  - `/guides/crafting` (15 refs) and `/guides/citizenship` (6 refs)
    across 15 content files — guides render at root-level `/{slug}`,
    not `/guides/{slug}` (Astro's static-beats-dynamic routing +
    the `[slug].astro` fallback route). Bulk-replaced with a
    throwaway Node script.
  - `/quests/finding-sophia` (1 ref) — Maya of Henesys chain
    pointed at an unwritten editorial slug. Now points at dossier
    ID `10107`; QuestLayout auto-resolves the friendly name.
  - `/quests/lucas-final-training` (1 ref) — Phil's Call had a
    hardcoded `<a href>` to a conceptual "Maple Island final
    training" that never existed as a discrete quest. Stripped
    the anchor, kept the descriptive text.

  **4. QuestLayout chain-nav upgrade** (fell out of #3 while
  fixing broken slugs). The chain-nav "Next step" / "Previous step"
  buttons were rendering the RAW SLUG as the visible label
  (`bringing-mirror-to-heena` displayed literally, not "Bringing
  a Mirror to Heena"). Ugly on every editorial chain page. Added
  `resolveChainTarget()` helper that:
  - Looks up editorial slugs in the `quests` collection → uses
    the quest's real `name` field.
  - Looks up numeric IDs against the dossier → uses `dossier.name`.
  - Returns `null` for unknown targets → the button is hidden
    instead of shipping a 404 link.
  Net effect: every chain page now reads correctly ("Bringing a
  Mirror to Heena → Sera's Blessing") and it's impossible to ship
  a broken chain-nav button ever again.

  **Final audit: 0 broken internal links across 5,694 pages.** 🎉

  Build: 5,694 pages in 8.6s.

- **2026-08-31** - **Sprint round 33: Loose-ends cleanup pass.**
  Buttoned-up sprint before starting the next feature. Systematic
  audit + fixes:

  **1. Data audit revealed nothing new to fix.** The 20 unresolved
  mobs (Glowshroom, Raffle, Rotten Mushroom, Test(Fire)…) are
  legitimately post-v83 CoT2 additions - probed maplestory.io's
  search endpoint, they simply don't exist in v83 vanilla, no name
  variant would resolve them. Same for the 67 unresolved dossier
  maps: probed dossier-ID-as-WZ-ID for all 67, only 2 numeric
  collisions and both were unrelated maps. Wide-level-range maps
  ("The Pig Beach Lv 2-42") are also real - Iron Hog (Lv 42) and
  Blue Snail (Lv 2) genuinely coexist on that map. So 89.7% mob
  stats coverage and 84% map WZ resolution are effectively at the
  ceiling of what v83 vanilla + osmsdataexplorer can give us.

  **2. Sortable column headers on `/mobs`** (long-promised in the
  lede, finally wired). Every numeric header is clickable; first
  click on a numeric column defaults to descending (biggest HP
  first is more useful than smallest); Name defaults to A-Z.
  Missing-value rows always sink to the bottom regardless of
  direction - a user sorting by HP shouldn't have to scroll past
  20 blank rows. Active sort column gets a highlighted background
  + ▼/▲ arrow indicator. Composes cleanly with the existing search
  + filter chips (verified by qa-kitten via row-content extraction:
  Lv sort + "mushroom" search + "quest-required" filter all
  intersect correctly).

  **3. WZ-ID-vs-internal-ID audit.** Grepped every
  `SpriteUrl`/`RenderUrl`/`IconUrl` call site to check for the
  same class of bug we hit on `/maps/[id]` last sprint. Verdict:
  clean. Items use WZ IDs as their primary ID (verified: item
  2000000 = Red Potion on both our data + maplestory.io). NPCs
  use `wzId` consistently. Mob sprites deliberately use INTERNAL
  IDs because that's the MeowDB pattern. Only maps had the bug and
  it's already fixed.

  **4. Empty-minimap hero layout.** Maps without WZ IDs (67 of them)
  were rendering with a 1.2rem phantom gap on the left of the hero
  card - the `grid-template-columns: auto 1fr` still applied the
  gap even with no first-column child. Added `.hero--no-minimap`
  modifier that collapses to `grid-template-columns: 1fr`. Verified
  on `/maps/1` (Mushroom Town - West Entrance): H1 now sits flush
  at x=151, identical to the hero card's own x=151.

  **5. Homepage reference-database section** - CRITICAL UX gap
  discovered during audit. All of Phase 4 (mobs/maps/npcs/quests/
  items/world - 5,509 pages of database content) was hidden
  behind the top nav bar only. Homepage never linked to any of
  it, so a visitor arriving from a search result or shared link
  had zero on-page discovery. Fixed with a new "Reference database"
  section between Systems Guides and Prep/Ledger, and a "Look up
  anything" secondary button in the hero (scroll-anchors to the
  section). Six auto-fill tiles: emoji icon + name + count pill
  + one-line description. Counts pull from `generated-at.json`
  (already loaded, zero import cost) - extended that file with
  `mapCount`, `npcCount`, `questCount` in one build-script edit.
  Tuned grid to 19rem min + `grid-auto-rows: 1fr` per qa-kitten
  feedback so 6 tiles form a clean 2x3 grid with uniform card
  heights.

  Build: 5,694 pages in 17.5s.

- **2026-08-31** - **Sprint round 32: Level-range awareness + map image bugfix.**
  Compounding on sprint 29 (mob stats) + sprint 31 (world map): every
  surface that shows a map now shows what level bracket you'd train
  there. New `mobLevelRange: {min, max} | null` field on every map
  dossier, computed at build time by looking up `mob.stats.level` for
  each mob that spawns there. **274/426 maps got level brackets (64%)**
  - unfilled maps are either towns (no mobs), or map with mobs whose
  WZ IDs didn't resolve. Denormalized `levelMin/levelMax` fields on
  index.json map rows so the directory page can render Lv chips
  without pulling full dossiers. UI surfaced in four places:
  1. `WorldMapView` pin tooltips: hover a pin, see "Lv 8-15" in
     warm orange next to the map name. Also composed into the
     native `title=` attribute so touch devices + screen readers
     get the level info too.
  2. `/world/[name]` pin cards: right-aligned Lv chip; the pin
     list re-sorted from alphabetical to ascending-by-min-level so
     the region reads as a natural training progression.
  3. `/maps/[id]` hero badge row: new "Mob Lv X-Y" pill between
     the mapMark and the (optional) other tags.
  4. `/maps` directory: level pill on every training/hidden card,
     positioned right after the kind pill so the level scanning
     column feels consistent as you scroll.

  Fixed a bug found by qa-kitten during the visual sweep: the
  `/maps/[id]` hero minimap + full-map render were 404-ing because
  `mapMinimapUrl(d.id)` was being fed our internal osmsdataexplorer
  ID (e.g. 42 for Snail Hunting Ground III) instead of the WZ ID
  maplestory.io expects (40002). Now that `d.wzId` is populated per
  sprint 31, the fix is a one-liner per call site. Also guarded both
  the minimap container AND the whole "Map render" section with
  `d.wzId && (...)` so unresolved maps don't render empty boxes.
  All verified visually by qa-kitten: chips readable + consistent
  color across all 3 pages, thumbnails no longer broken, single-
  value pills (Lv 8) coexist cleanly with range pills (Lv 2-42).
  Build: 5,694 pages in 9.3s.
- **2026-08-30** - **Sprint round 31: Interactive world map shipped (`/world`).**
  Authentic MapleStory `WorldMap.img` navigation on the site. Three
  new build-database stages: (a) `resolveMapWzIds()` scrapes
  maplestory.io by (name + streetName) to bridge our internal map
  IDs (1-25 for Maple Island, biggers elsewhere) to real WZ IDs
  (10000, 100000000 ...) - same disambiguation pattern as the NPC
  and mob resolvers, cached at `map-wz-cache.json`. **359/426 dossier
  maps resolved (84%).** (b) `fetchWorldMaps()` pulls all 21
  `WorldMap.img` entries from maplestory.io, decodes each base64
  PNG (background + subregion label overlays), writes them to
  `public/images/worldmaps/*.png` (6.4 MB, 38 files), and stores
  clean metadata at `src/data/db/worldmaps.json` (name, image path,
  dimensions, origin, links[], maps[]). (c) Pin resolution walks
  each pin's `mapNumbers` array and picks the first WZ ID we can
  reverse-lookup to a dossier - **185/586 world map pins now click
  through to a documented map (32%)**, the rest render as gray
  non-interactive dots for maps we haven't authored yet.
  New shared `WorldMapView.astro` component renders one worldmap
  as a responsive pixel-art panel with absolute-positioned hotspots
  scaled via percentages (so the pin grid stays aligned as the
  image resizes). Linked pins pulse in warm orange; unlinked pins
  are muted gray; hover shows a tooltip pill with the map name.
  Subregion label overlays (the fancy "MAPLE ISLAND" / "VICTORIA
  ISLAND" banners) render at their native size and coordinate,
  wrapped in `<a href="/world/{linksTo}">` for the region drill-in.
  Two new routes wire the component up: `/world` (top-level continent
  selector) and `/world/[name]` (all 21 sub-worldmaps generated
  statically). Both share the same rendering body via WorldMapView.
  Map dossier gains `wzId` (nullable) + `worldMapRefs` fields; the
  `/maps/[id]` breadcrumb sprouts a "View on world map →" backlink
  when the map appears on any WorldMap.img. "World" added to the
  primary nav between "Maps" and "NPCs".
  Sprint 30's `toMapName` shape defense stays in force - shipped
  alongside because both are map-graph improvements. Verified by
  qa-kitten: main /world page renders 10 linked + 13 unlinked pins
  in sensible positions across all landmasses, 11 region labels all
  clickable; sub-region /world/WorldMap000/ (Maple Island) shows
  Amherst + Southperry labels correctly with 4 documented location
  cards below. One accessibility fix from that pass: breadcrumbs on
  themed backgrounds got a text-shadow halo for legibility against
  sky-blue scenic imagery. Build: 5,694 pages (+22 from world maps)
  in 17.8s.
- **2026-08-30** - **Sprint round 30: Portal navigation + toMapName data fix.**
  Silent bug in `buildMapDossier` fixed: the upstream `exit_names`
  array is `[{id, name}]` objects, not strings as the `??` fallback
  assumed. `toMapName` was stringifying to `[object Object]` on all
  385 maps that have portals - would have exploded the moment
  anything tried to render it. Fix accepts both shapes defensively
  (string OR `{name}`) so future upstream schema flips don't
  reintroduce the same footgun. Since we now have clean portal data,
  added a "Portals" section to `/maps/[id]` rendering deduped
  destination chips (arrow glyph + map name + map ID) styled to
  match the mob-card / npc-card visual language. Chip grid dedups
  on `toMapId` so a map with two portals to the same destination
  doesn't render twice. Updated the map-page disclaimer to remove
  "portal connections" from the not-documented list and add mob
  combat stats to the available list (rolls forward from round 29).
  Sanity: all 385 maps with exits now pass `typeof toMapName ===
  "string"`. Verified richest-portal map "The Forest North of
  Ellinia" (10002070) renders all 12 unique portals correctly.
- **2026-08-30** - **Sprint round 29: Mob combat stats shipped (HP / MP / EXP / level / ATK / DEF).**
  Filled in the last gaping hole on the mob dossier. `build-database.mjs`
  gains two new stages that mirror the NPC WZ-resolution pattern:
  `resolveMobWzIds()` searches maplestory.io by mob name (10-concurrent
  workers, disk-cached at `src/data/db/mob-wz-cache.json`) and
  `fetchMobStats()` pulls each resolved WZ ID's `meta` block
  (disk-cached at `src/data/db/mob-stats-cache.json` keyed by WZ ID,
  so the cache survives internal-ID remapping). Coverage: **175 of
  195 mobs** resolved a WZ match (89.7% - beats the 81% NPC baseline);
  20 unresolved are dev-only mobs and post-v83 CoT additions. Per-mob
  stats include level, maxHP, maxMP, exp, physicalDamage,
  physicalDefense, magicDamage, magicDefense, accuracy, evasion,
  speed, isBodyAttack, isUndead, isBoss. `buildMobDossier` gets two
  new optional fields (`wzId`, `stats`) so old dossier consumers keep
  working. `/mobs/[id]` gained a `Combat stats` section rendering
  the 10-field grid with a source link back to maplestory.io + a
  `--exp` accent on the payoff stat; hero picks up level, boss, and
  undead badges when applicable. Disclaimer flipped from
  "not documented yet" to a per-mob "name lookup didn't resolve"
  fallback that only fires on the 20 unresolved mobs. `/mobs` index
  gained Lv / HP / EXP / Drops columns + a Stat-verified filter chip;
  `index.json` denormalizes level/HP/EXP so the directory doesn't
  need to hydrate the 3.6MB dossier bundle just to render a table.
  Blue Snail's page now reads: **Lv 2 - HP 15 - MP 15 - EXP 4 -
  ATK 17 - ACC 20 - spawns on 41 maps - drops 21 items.** All 5,672
  pages still build clean in 15s.
- **2026-08-22** - Phase 1 complete. Mission statement moved to
  homepage. Roadmap document created.
- **2026-08-22** - Phase 2 complete. Warrior guide live at
  `/jobs/warrior`. GuideLayout component reusable. Perion theme
  polished (colors, rock decorations, red cursor, BGM).
  Added `historical-archive` source type.
- **2026-08-22** - Perion scenic background added; CSS `@layer`
  used to guarantee theme backgrounds beat the base gradient.
- **2026-08-22** - Citizenship guide live at `/citizenship`
  (mini-preview of Phase 3: markdown-in-content-folder + wrapper
  `.astro` that injects into GuideLayout). Filled in the real
  Nexon COT2 release-notes URL. Added NiaMeowDB as a
  closed-test-info source. Added Citizenship to primary nav.
- **2026-08-22** - Crafting guide live at `/crafting`
  (Perion-themed, 6 disciplines / 348 recipes / catalysts /
  mastery gates). Added Nexon COT1 release notes and NiaMeowDB
  Crafting as sources. Extracted duplicated markdown-content
  CSS from per-page style blocks into global.css so every
  markdown-driven guide inherits the same visual identity.
- **2026-08-22** - Homepage now discovers system guides. Added
  a `SystemCard` component (sibling to JobCard) and a new
  "Classic World systems" section on the homepage that reads
  straight from the `guides` content collection at build time.
  New system .md files auto-appear on the homepage - zero
  discovery plumbing needed. Also fixed a latent Phase 3 bug:
  the `verificationStatus` enum in `content.config.ts` had wrong
  values (imported the AccuracyStatus enum by mistake instead of
  SourceType). Corrected to match SourceType exactly with an
  inline comment warning to keep the two in sync going forward.
- **2026-08-22** - Magician class guide live at `/jobs/magician`.
  Ellinia-themed (palette stub, no scenic bg or BGM yet).
  Mirrors the Warrior guide's structure and depth so the two
  class pages stay easy to compare. Added `ayumilove-v83-magician`
  as a companion source. Activated Magician's link in the jobs
  directory (was placeholder). Six first-job skills + three
  second-job branches (F/P, I/L, Cleric) documented at v83
  baseline with Classic World verification pending.
- **2026-08-22** - Magician guide fully styled. Hoisted the shared
  guide-section primitives (`.guide-section`, `.prose`, `.callout`,
  `.skill-table`, `.route-grid`, `.branches-grid`, `.faq`,
  `.inline-badge`, mobile skill-table collapse) out of
  `warrior.astro`'s scoped `<style>` block and into `global.css`.
  Astro's per-component scoping meant those classes existed in
  the DOM on `/jobs/magician` but had zero styling applied - the
  Magician page looked like raw HTML until this move. Now every
  future job guide inherits them for free (~120 lines of CSS
  de-duplicated). Also un-stubbed the Ellinia theme: cleaner
  palette comments and wired `leaf.cur` as Ellinia's default
  cursor plus `point_horizontal_green.cur` for interactives -
  immediate thematic hit the moment the Magician guide loads.
- **2026-08-22** - Bowman class guide live at `/jobs/bowman`
  (third vertical slice). Henesys-themed (reuses the flagship
  polished Henesys palette + scenic background - no theme work
  needed). Mirrors Warrior + Magician's section shape exactly
  (Overview / Advancement / AP / Skills / Training / Equipment /
  Second Job / FAQ). Six first-job skills documented at v83
  baseline; only TWO second-job branches (Hunter and Crossbowman)
  which the guide calls out explicitly as the class's design
  quirk versus Warrior/Magician's three-way splits. Added
  `ayumilove-v83-bowman` as a companion source. Activated
  Bowman's link in the jobs directory (was placeholder). Bonus
  InfoCards for "Why Double Shot before Critical Shot?" (v83
  damage math) and "Two branches, not three" (design context).
- **2026-08-22** - Thief class guide live at `/jobs/thief` -
  **the four-class base set is COMPLETE** (Warrior, Magician,
  Bowman, Thief all shipped). Kerning-themed - first guide to
  use the Kerning palette, so un-stubbed the theme in the same
  commit (added themed cursors: `hand_open.cur` default + `point_
  move_blue.cur` pointer, matching the neon-night-thief vibe).
  Also fixed a real contrast bug in kerning.css where
  `--accent-secondary-text` was `#ffffff` on a light-pink `--accent-
  secondary` background - callouts and blockquotes would have
  been unreadable. Now dark plum text on hot magenta. Guide
  covers the DEX-for-advancement/LUK-for-damage stat quirk, the
  first-job-skill-priority-differs-by-branch quirk (Assassins
  max Lucky Seven, Bandits max Double Stab), and the Assassin
  vs Bandit playstyle chasm via a dedicated InfoCard. Bonus
  InfoCard for "Why Lucky Seven is special" (only weapon-
  independent attack in the game). Added `ayumilove-v83-thief`
  as a companion source. Activated Thief's link in the jobs
  directory (was placeholder). All four class cards are now
  clickable, all four theme palettes are polished with themed
  cursors, and the pattern for a class guide is now painfully
  obvious - which is exactly the signal that it's time to
  migrate to a content collection.
- **2026-08-23** - Kerning scenic background landed. PNG (~2.35 MB)
  matches the existing henesys/perion/lith set. Kerning is the
  "New Age Kerning City" reimagining - neon-noir dusk with a
  purple sunset sky, wet reflective streets, graffiti-covered
  brick buildings, warm street-lamp glow, industrial pipes, and
  a misting bridge in the distance. Dark scrim (fades to
  surface-card plum) so cards blend into the street-level
  portion of the image. CSS decoration overlays disabled since
  the image has plenty of baked-in detail. Added an
  ART DIRECTION NOTE in kerning.css so future contributors
  know a classic-Kerning alternate would be a separate theme,
  not a replacement.
- **2026-08-30** - **Sprint round 28: NPC sprites shipped + 232 datamine quests shipped.**
  Double-track round.

  **User ask (verbatim):**
  > 'we also need to go back for the npc sprites, winston is missing
  > his. I am sure we have more quests to ship as well'

  Winston, indeed, was missing his. Same class of silent bug as
  round 27 - `npcRenderUrl(512)` was hitting maplestory.io with our
  INTERNAL NPC ID (512) rather than Winston's WZ ID (1022006).

  On the quest audit: datamine has **322 quests**, editorial
  collection had only **90 .md files** shipped. That's 232 quests
  in the game that had zero page presence - not even a stub.
  Sera's Mirror (quest 1000, the literal FIRST quest in the game)
  was among the missing.

  **Track 1: NPC sprite name -> WZ mapping (with disk cache)**

  Added `resolveNpcWzIds(npcs)` to `scripts/build-database.mjs`.
  Scrapes maplestory.io NPC search endpoint (`/api/GMS/83/npc?searchFor=Name`)
  once per NPC, prefers exact-name match over fuzzy. Uses a
  disk cache at `src/data/db/npc-wz-cache.json` so subsequent
  `npm run db` runs skip the 2-3 minute scrape.

  Coverage: **230/266 NPCs resolved (86.5%).** Misses are mostly
  crafting stations (Anvil, Sewing Machine, Weaponcrafting Station)
  which aren't real v83 NPCs, plus a handful of post-v83 CoT
  additions (Whitney, Lyn, Zelya, Mr. Thalj). Missing NPCs
  gracefully render no sprite (blank space).

  New null-safe helper `npcSpriteUrl(wzId | null)` in
  `src/lib/maplestory-cdn.ts`. Kept `npcRenderUrl(wzId)` for
  future callers that hold WZ IDs directly.

  Updated 4 caller sites: /npcs/[id] hero, /npcs/ catalog grid,
  /maps/[id] NPC-card grid, QuestLayout quest giver sprite.
  All now do `npcWzById.get(internalId)` lookup then
  `npcSpriteUrl(wzId)`.

  **Track 2: 322 auto-generated quest pages**

  New quest dossier pipeline in ingestion:
  - `questDossiers` array (322 entries) written to
    `src/data/db/quests.json`. Each dossier carries id, name,
    region, description, npcName + npcId + npcWzId (via NPC
    dossier cross-lookup), levelMin, rewards, chain info,
    starting maps.

  Route unification:
  - Deleted `/quests/[quest].astro` (editorial-only route).
  - Rewrote `/quests/[id].astro` as a DUAL-PATH route:
    - `/quests/{numeric-id}` for 322 datamine dossiers (slim,
      auto-generated).
    - `/quests/{editorial-slug}` for 90 rich hand-authored
      editorials (via QuestLayout).
    - Numeric IDs and kebab-case slugs never collide, so one
      dynamic route captures both. Mirrors the `/items/[item]`
      dual-path pattern from round 19.
  - When a datamine page has a matching editorial, shows a
    prominent 'Editorial guide available: Read Liven's write-up'
    banner at top. Otherwise renders in-game text, rewards,
    giver NPC with sprite, starting map, chain navigation - all
    from the datamine, no editorial commitment required.

  Reward rendering includes:
  - Item rewards with icon + link to /items/{id}
  - Meso / EXP rewards with distinct icons
  - `next_quest` rewards render as 'Unlocks next quest: [link]'
  - Guaranteed vs chance badges

  **Verified end-to-end:**
  - `/npcs/512` (Winston) shows sprite at
    `maplestory.io/npc/1022006/render/stand` (his WZ ID). LIVE
    and rendering.
  - `/npcs/1` (Heena) shows sprite at
    `maplestory.io/npc/2101/render/stand`.
  - `/quests/1000` (Sera's Mirror) renders as datamine dossier
    with Heena's sprite in the hero.
  - `/quests/borrowing-seras-mirror` still renders the rich
    editorial version (QuestLayout unchanged).
  - Datamine quest pages that DO have an editorial show the
    'Editorial guide available' banner. Confirmed on quest 10300
    (Alex's Request), 10305 (Andre's Request), 10200 (Arwen).

  **Coverage:**
  - Quest pages: 90 -> **412** (+322 datamine dossiers)
  - Site total: 5,350 -> **5,672 pages** (+322)

  **Still deferred:**
  - The 36 NPCs without WZ mapping (crafting stations + post-v83
    additions). Not blocked on anything - just no v83 sprite exists.
  - Auto-classifying quest categories (Tutorial / Story /
    Advancement / etc). Datamine has some structural hints in
    `parent` and `area` but nothing definitive; would need heuristics
    or editorial tags.

  Build stats: **5,672 pages, 17.10s, zero errors.** Ingestion
  runtime: cache-hit path = ~7s (down from cold-start 100s+).

- **2026-08-30** - **Sprint round 27: Mob sprites, finally rendering.**
  Cleanup round for a silent bug that had been shipping since round 24.

  **User ask (verbatim):**
  > 'We also need to go back and add the sprites for the mobs'

  **The silent bug:** every `monsterRenderUrl(mob.id)` call in the
  codebase (4 total across ItemDetailLayout, /mobs/[id], /mobs/,
  /maps/[id]) was hitting `maplestory.io/api/GMS/83/mob/{id}/render/stand`
  with our INTERNAL datamine IDs (like `3` for Blue Snail), NOT the
  maplestory.io WZ IDs (`100101` for Blue Snail). Result: every mob
  sprite 404'd and quietly hid via `onerror`. User could tell
  something was off - no sprites anywhere - because the fallback was
  invisible rather than a broken-image icon.

  **Detective work (30-min investigation):**
  1. Confirmed our IDs (3) don't map to maplestory.io mob endpoints.
  2. Probed MeowDB - `api/assets/icons/{id}` returned 200 for every
     ID but was a 174-byte 32x32 PNG placeholder (not the real sprite).
  3. Scraped MeowDB frontend, found actual pattern in HTML:
     `/msclassic/monsters/sprites/mob_{id}.png`.
  4. Verified IDs map DIRECTLY to our internal IDs - `mob_3.png`
     is Blue Snail, `mob_5.png` is Red Snail. Zero mapping code needed.
  5. Full-coverage sweep: **186/195 mobs (95.4%) have sprites.**
     Missing 9 = 6 dev-only Test mobs (Test-Lightning, Test-Basic, etc)
     + 3 real (Nependeath, Dark Nependeath, Ultra Jr. Necki 1).
     Missing sprites still degrade gracefully via existing `onerror`.

  **Code changes (surgical):**
  - `src/lib/maplestory-cdn.ts` - added `MEOWDB_ROOT` constant,
    added `mobSpriteUrl(mobId)` helper that hits MeowDB. Left
    `monsterRenderUrl(wzId)` in place with a big docstring warning
    'This expects a WZ ID, not our internal ID - use mobSpriteUrl
    if you have the datamine ID.'
  - Swapped 4 caller sites: /mobs/[id] hero sprite, /mobs/ catalog
    grid, /maps/[id] mob-card grid, ItemDetailLayout drop-source rows.
  - Zero data changes, zero ingestion changes, zero page additions.

  **Verified end-to-end:**
  - `/mobs/3` (Blue Snail): sprite URL = mob_3.png, live HEAD = 200.
  - `/mobs/` catalog: mob_3.png, mob_5.png, etc all embedded.
  - `/maps/10001010` (Henesys Hunting Ground I): 7 unique mob
    sprites embedded (3, 4, 5, 7, 9, 13, plus one more).
  - `/items/4000002` (Blue Snail Shell) 'Dropped by' section:
    Blue Snail sprite loads from MeowDB.
  - Zero stale `maplestory.io/mob/{id}/render` refs in built HTML.

  **Followup filed:**
  - NPC sprites are affected by the same class of bug -
    `npcRenderUrl(1)` for Heena hits `maplestory.io/npc/1/render`
    which is a different NPC. MeowDB serves NPC images by SLUG
    (like `/msclassic/npcs/heena.webp`), not by ID. Fixing needs
    either (a) a name -> WZ mapping via maplestory.io NPC search
    (Heena maps to WZ 2101 there), or (b) a name -> slug
    kebab-case converter to hit MeowDB's slug-based path. Deferred
    to a dedicated 'NPC sprite round' since it needs data-pipeline
    changes not just a URL swap.

  Build stats: **5,350 pages, 18.40s, zero errors.** No page-count
  or word-count delta - this was pure URL surgery.

- **2026-08-30** - **Sprint round 26: Mob drops shipped. Item <-> Mob edge closed.**
  The last major missing edge in the entity graph now populated,
  courtesy of MeowDB's crowdsourced drop database.

  **User ask (verbatim):**
  > 'We also need to get the mob drops so we can have a search for
  > item drops and it leads to the mob that drops it and tells you
  > everything you need to know about the mob'

  **The 'blocked on drops' story - solved via detective work:**
  Rounds 24 and 25 had documented mob drops as 'deferred, blocked
  on osmsdataexplorer exposing drop tables'. Turns out we were
  looking in the wrong place.

  Sleuth trail:
  1. Probed osmsdataexplorer for drop endpoints - all 404.
  2. Probed maplestory.io GMS/83 - has full mob stats (HP,
     EXP, level, physicalDamage, isBoss!) but no drops endpoint.
  3. Probed meowdb.com/msclassic/api - endpoint `/drops` returned
     HTTP 400 (not 404!) with body
     `{"error":"itemId or monsterId required"}`.
  4. Retried with `?monsterId=1` and got 305 bytes of real data.
  5. Sampled 195 mobs from our dossier: 171 had drops, 1,034 total
     rows, 504 unique items dropped. That's ~88% coverage of
     everything in the datamine.

  ID compatibility bonus: MeowDB uses the SAME mob ID scheme as
  osmsdataexplorer (small IDs like 3 for Blue Snail), NOT the
  WZ ID scheme that maplestory.io uses (100101 for Blue Snail).
  `itemIconKey` on each drop is a stringified WZ ID that matches
  our items.json IDs directly. Zero mapping needed for either.

  **Ingestion additions (`scripts/build-database.mjs`):**
  - `fetchMeowdbDrops(mobId)` - single-mob drop fetch, fail-quiet.
  - `fetchAllDrops(mobIds)` - parallel scrape with 10 concurrent
    workers. 195 mobs scraped in ~5-6 seconds vs ~37s serial.
    Prints a progress dot every 25 mobs.
  - Drops attached to mob dossiers as `mob.drops[]`, sorted by
    community score (upvotes - downvotes) desc.
  - Reverse index: `item.droppedBy[]` on every item dossier,
    sorted by score desc so the most-confirmed source leads.
  - `dropCount` surfaced in the light index for future catalog
    filtering.
  - `acquisitionCount` on items now includes drops so the
    'has X sources' summary is accurate.

  **UI upgrades:**
  - `/mobs/[id]` gained a full 'Drops' section: item icon,
    name, type/subtype, community-score pill (green >= 5,
    amber >= 2, gray otherwise). MeowDB credit link inline.
    Orphan drops (item not in our datamine yet) render name-
    only with muted styling instead of a broken link.
  - `/mobs/[id]` hero gained a 'Drops N items' badge.
  - `ItemDetailLayout` gained a third 'Dropped by' column in
    the acquisition grid (was: Given by quests + Craftable,
    now: + Dropped by). Each source is a mob-sprite row linking
    back to the mob's dossier - completes the round trip.
  - `/items/[id]` disclaimer updated: was 'mob drops not yet
    documented', now 'quest rewards + crafting + crowdsourced
    mob drops available; NPC vendor lists still deferred'.

  **Round-trip verified end-to-end:**
  - `/mobs/3` (Blue Snail) shows Drops 21 items, includes
    Blue Snail Shell (score +11 high-conf), links to /items/4000002.
  - `/items/2000000` (Red Potion) shows 'Dropped by' with mob
    sprite links.
  - `/items/4000002` (Blue Snail Shell) shows Blue Snail as a
    source, links to /mobs/3.
  - **171 of 195 mobs (88%) have rendered drop tables.**

  **The entity graph is now CLOSED** except for one remaining
  edge (NPC vendor lists) which is deferred pending vendor data
  in the datamine:

  ```
  Items <-> Quests   [round 18 - pre-existing]
  Items <-> Mobs     [round 26 - THIS ROUND]
  Items <-> Crafting [round 18 - pre-existing]
  Mobs  <-> Quests   [round 18 - pre-existing]
  Mobs  <-> Maps     [round 25]
  Maps  <-> NPCs     [round 24]
  Maps  <-> Quests   [round 24 + 25]
  NPCs  <-> Quests   [round 25]
  ```

  **Still deferred:**
  - NPC vendor tables (items sold by NPC).
  - Mob base stats (HP/MP/EXP/level) - could pull from
    maplestory.io GMS/83 as v83 fallback in a future round;
    IDs would need name-based mapping since maplestory.io uses
    WZ IDs (100101) while ours are internal IDs (3).
  - Boss classification (maplestory.io has `isBoss` on every
    mob - trivial to pull in the same round as stats).
  - Item -> Map (transitive: item -> mob -> mob's spawn maps).

  Build stats: **5,350 pages, 20.02s, zero errors, 21,543
  Pagefind words (+1,486 from round 25).** MeowDB scrape
  adds ~6s to `npm run db` runtime, well within tolerance.

- **2026-08-30** - **Sprint round 25: Full cross-reference graph. Maps <-> Mobs <-> Quests <-> NPCs.**
  Ships the NPC entity + closes the loop on entity linking.

  **User ask (verbatim):**
  > 'we need to connect the maps to the mobs to the quests to
  > the items'

  **The graph before this round:**
  - Items -> Quests (via quest rewards/requirements)
  - Mobs  -> Quests (via 'defeat X mobs' requirements)
  - Maps  -> Mobs / NPCs / Quests (built in round 24)

  **Missing edges (all filled this round):**
  - Mobs -> Maps ("where does Blue Snail spawn?")
  - Quests -> Map ("where does this quest start?")
  - NPCs as a first-class entity with dossier pages, cross-
    referenced INTO maps AND quests.
  - Item -> Map: still deferred (needs mob drop tables).

  **New reverse indexes in ingestion:**
  - `mobToMaps` - 123 mobs mapped to their spawn locations
    (with per-map spawn count).
  - `npcToMaps` - 247 NPCs mapped to residency (with kind).
  - `questToMaps` - 318 quests mapped to starting NPC's location.
  - Complexity note: pre-grouped quests by `npc_name` (once) so
    the NPC dossier builder is O(N) instead of O(NPCs * quests)
    = 195K ops -> 266.

  **New dossier + refs files:**
  - `src/data/db/npcs.json` (266 dossiers)
  - `src/data/db/quest-refs.json` (318 keyed cross-refs -
    lets QuestLayout look up maps by questId without pulling
    the full map bundle)

  **Pages shipped:**
  - `/npcs/` - full catalog, filterable by 'gives quests' /
    'has map placement' / 'unmapped', searchable.
  - `/npcs/[id]` - 266 detail pages showing 'Found on' (map
    grid, kind-tinted rails matching /mobs/[id]) and 'Gives
    quests' (grouped by region, level-sorted).

  **Pages upgraded:**
  - `/mobs/[id]` - new 'Spawns on' section with kind-tinted
    map-chip grid + hero badge showing spawn count.
  - `/maps/[id]` - NPC cards now link to `/npcs/{id}`.
  - QuestLayout - 'At a glance' block now includes 'Starts at'
    row when the quest's giver NPC resolves to a map.

  **Nav updated:** 'NPCs' inserted between Maps and Leveling.

  **Verified end-to-end:**
  - `/mobs/3` (Blue Snail): Spawns on section YES, links to
    Henesys Hunting Ground I with spawn count.
  - `/quests/borrowing-seras-mirror`: 'Starts at' shows
    Mushroom Town - West Entrance (Heena's location).
  - `/npcs/1` (Heena): 12KB page, lives on Mushroom Town -
    West Entrance, gives Borrowing Sera's Mirror. Bidirectional
    round-trip confirmed.
  - `/maps/60` (Southperry): all 4 NPC cards link to /npcs/{id}.
  - 100 NPCs have BOTH map AND quest cross-refs populated
    (i.e. named/mapped quest-giving NPCs).

  **Still deferred:**
  - Item -> Map linkage (blocked on drop tables).
  - Boss classification on mobs / maps (blocked on
    mob-is-boss flag).
  - Item -> Mob linkage (blocked on drop tables).

  Build stats: **5,350 pages (+267 from round 24), 20.21s,
  zero errors, 20,057 Pagefind words (+868).**

- **2026-08-27** - **Sprint round 24: Maps section MVP - training / hidden / town / boss cross-referenced catalog.**
  Adds `/maps/` tab and per-map detail pages.

  **User ask (verbatim):**
  > 'I want a section that helps show maps on how to get around
  > for training maps, a list of hidden maps, boss maps, and
  > quest spots that are key.'

  **Data source:** `maps.json` from the CoT 2 datamine was
  already being fetched by the ingestion script but never
  processed. It exposes:
  - `regions[]` grouped by region name (Victoria, Ossyria,
    Sleepywood, Hidden, Dev, Event, etc)
  - Per map: `id`, `name`, `street_name`, `region`, `minimap`
    (relative image path), `bgm`, `map_mark`
  - Per map: `npcs[]` (NPC IDs on this map), `npc_positions[]`
    (with x,y screen coords), `mob_positions[]` (mob ID +
    x,y coords).

  **Map classification (MVP heuristics):**
  - `dev` - `region === 'Dev'` (excluded from main list).
  - `event` - `map_mark === 'Event'` (excluded from main list).
  - `hidden` - `street_name === 'Hidden Street'`.
  - `town` - no `mob_positions` (NPC-only social hub).
  - `training` - has `mob_positions` and not classified above.
  - Boss maps: NOT auto-classified in MVP. Requires knowing
    which mob IDs are bosses (data not yet exposed). Deferred.

  **Cross-references built:**
  - `map.questsHere` - quests whose giver NPC is on this map,
    inverted from the existing quests.json indexes.
  - `map.mobs` - de-duplicated mob ID list from mob_positions,
    each looked up in the mob dossier for its name.
  - `map.npcs` - de-duplicated NPC ID list, names pulled from
    `lookups.npc_names`.

  **Pages shipped:**
  - `/maps/` - region-grouped landing, filterable by kind
    (training / hidden / town), search by name.
  - `/maps/[id]` - detail page with minimap image (from
    maplestory.io CDN as v83 fallback), mob list, NPC list,
    quests originating here. Boss-mark badge honored when
    the datamine flags it.

  **Still deferred (future rounds):**
  - Boss map classification (needs mob-is-boss flag).
  - Training-route recommendations per class per level band
    (needs mob EXP + player-preferred routes - editorial).
  - Interactive minimap overlay with NPC / mob dots at their
    x,y positions (SVG overlay on top of minimap image).

  **Verified end-to-end:**
  - 426 map dossiers built:
      3 dev, 23 event (both excluded from main list)
      88 town, 69 hidden, 243 training (all shown)
  - `/maps/` renders 4 region sections (Maple Island 25,
    Victoria Island 252, Ossyria 92, Other 31 - the datamine
    top-level regions).
  - `/maps/10001010` (Henesys Hunting Ground I) shows 6
    mob types (Blue Snail, Red Snail, Slime, Orange/Green
    Mushroom, Stump), training badge, minimap image, full
    map render.
  - 57 maps have quest-giver cross-refs populated.
  - Nav gained 'Maps' between Mobs and Leveling.

  Build stats: **5,083 pages (+427 from round 23), 18.68s,
  zero errors, 19,189 Pagefind words (+2,451).**

- **2026-08-27** - **Sprint round 23: Collapsible sections + subcategory grouping + weapon-type sub-filter.**
  4,656 pages. Layout + ingestion sprint.

  **User ask (batched):**
  > 'Can we create a collapsable option on the quest level
  > separator and Subcategory grouping on class-filtered items
  > views (/items/?class=Warrior auto-split Weapons / Armor /
  > Accessories sections) Weapon-type sub-filter (1H Sword /
  > 2H Sword / Axe / Blunt / Spear / Polearm under Warrior)
  > Party quest content ... Home page decorations cleanup ...
  > Something entirely different - you steer!'

  **Shipped:**

  **1. Collapsible quest level tiers (`/quests/index.astro`).**
  Native `<details>/<summary>` disclosure widget - zero JS
  for the toggle. Custom chevron rotates on `[open]` state
  via CSS transform. Level tier is now clickable to
  collapse a whole cohort of quests you're not browsing.
  Added 'Expand all' / 'Collapse all' buttons for one-tap
  global control. All tiers default to `open` so the
  page still reads top-to-bottom the first time.

  **2. Subcategory grouping on `/items/index.astro`.**
  Complete DOM restructure: was one flat 4,302-row table,
  now 15 collapsible `<details class="cat-section">` blocks -
  one per (category, subCategory) pair. Explicit ordering
  via `GROUP_ORDER` constant so a reader scans Equipment ->
  Weapon first, then Overall, Top, Bottom, Shoes, Glove,
  Hat, Cape, Shield, Earring, etc, then Consumables, then
  Etc, then Setup. Each section shows its item count in the
  header and updates its 'visible' count live as filters
  narrow the view. Empty sections auto-hide when all rows
  are filtered out. Each section is also independently
  collapsible via native <details>.

  **3. Weapon-type sub-filter.**
  New chip row: `Any / 1H Sword / 2H Sword / 1H Axe /
  2H Axe / 1H Blunt / 2H Blunt / Spear / Polearm / Wand /
  Staff / Bow / Crossbow / Claw / Dagger` (14 types +
  Any). Applies to Weapon subcategory rows only - non-
  weapon rows are unaffected. When combined with a class
  filter (e.g. `?class=Warrior`), a Warrior can quickly
  find just 1H Blunts or just Polearms. URL query param
  `?weapon=1H Sword` shares filtered views.

  **Data change:**
  Extended `scripts/build-database.mjs` to surface `weaponType`
  on the compact index items (was: only on the full dossier).
  Ingestion re-ran successfully: 4,302 dossiers, 195 mobs.

  **4. Decorations audit outcome:** no code changes needed.
  The `decorations={true}` flag on BaseLayout drives
  `data-theme-decorations` on `<body>`, which theme CSS
  files (henesys.css, ellinia.css, etc.) hook into. The
  ONLY hardcoded color there is transparent gradient stops
  in an SVG grass strip that has to be pure shape (no theme
  vars = intentional). Cloud puffs use `var(--bg-cloud)` -
  already themed. Verified rounds 21-22's color audit
  covered this indirectly. Documented in ROADMAP so
  future maintainers don't waste a sprint on it.

  **NOT shipped (needs content research):**
  - Party quest walk-throughs (Kerning City PQ, Ludibrium
    PQ, Ellin Forest PQ). These need source data - either
    from the CoT 2 datamine (once PQ entry quests are
    exposed) or from community write-ups. Filed as a
    content sprint for later.

  **Verified end-to-end:**
  - /quests/ - 6 <details class="tier-section"> elements,
    3 expand-btn buttons (Expand all + Collapse all + one
    from the button-listen delegation).
  - /items/ - 15 <details class="cat-section"> sections
    (Equipment: Weapon, Overall, Top, Bottom, Shoes, Glove,
    Hat, Cape, Shield, Earring, Pendant, Belt, Ring, Face,
    Eye + Consumable + Etc + Setup = 15 that actually have
    items), weapon-chips row present with 14+1 buttons,
    data-weapon-type attribute on all rows.

  Build time: 19.18s. Zero errors.
- **2026-08-27** - **Sprint round 22: Hardcoded-color cleanup. Themeable everywhere.**
  4,656 pages, CSS-only sprint.

  **Problem:** After round 21 shipped the shared heading
  wrap classes (auto-themed via `var(--accent-primary)` etc),
  a handful of pages and components were still using
  hardcoded hex values (`#4f6653`, `#304f34`, `#d8c99c`,
  `#8caf73`, etc.). Those were baked-in Henesys greens
  that would look wrong the moment any of those pages
  switched themes (e.g. a future Ossyria-themed launch).

  **Files converted from hex -> theme vars:**
  - `src/pages/launch.astro` - hero, jump-nav, sub-lede,
    prose links, callout, confirmed-list, open-question,
    page-footer.
  - `src/pages/index.astro` (homepage) - hero, countdown-note,
    see-all links.
  - `src/pages/jobs/index.astro` - lede text.
  - `src/components/VerificationNotice.astro` - all 4 rules.
  - `src/components/JobCard.astro` - monogram bg/border/color,
    body text.
  - `src/components/SystemCard.astro` - body text.
  - `src/components/LastUpdated.astro` - meta text.
  - `src/components/InfoCard.astro` - h2 color.
  - `src/components/Countdown.astro` - base card treatment
    (label, value, unit-label, sublabel, live).

  **Deliberately NOT converted (semantic colors):**
  - `Countdown --green / --amber` tone variants - their
    purpose is to distinguish 'early access' from 'official
    launch' regardless of theme. Header comment added
    explaining the intentional divergence.
  - `StatusBadge`, `SourceBadge`, `AccuracyLedger` -
    verification state colors (verified, needs-work,
    unverified, etc.). Semantic, must stay theme-agnostic.
  - `SourceCard`, `MusicPlayer` - similar semantic uses.
  - `items/index.astro` class-tile colors (Perion pink,
    Ellinia blue, etc.) - each represents a class BRAND
    identity that should stay consistent regardless of
    which theme the page currently uses.
  - `quests/index.astro` category badge colors - similar,
    they represent quest CATEGORY (Tutorial, Story,
    Advancement, Citizenship) as identity marks, not
    theme accents.

  **Rule of thumb documented via code comments:**
  Theme vars for anything a reader perceives as 'part of
  the page's mood'. Hardcoded hex for anything a reader
  perceives as 'a stable identity marker' (Warrior brand
  pink, verified-source green, class-guide monogram).

  **Also removed:**
  - Stale `.launch-section > h2 { color: #304f34 }`
    scoped rule (superseded by `.section-panel-title`).
  - Stale `.open-questions__group h3 { ... }` typography
    (superseded by `.section-panel-subtitle`).

  Build time: 17.78s. Zero errors. All 4,656 pages
  now theme-consistent.
- **2026-08-27** - **Sprint round 21: Sitewide heading contrast pass.**
  4,656 pages, layout/CSS-only sprint.

  **User ask (two rounds compressed):**
  > 'The h1 Quests as well as the other sub headers are just
  > plain text, can we wrap these so they have better contrast
  > against the background?'
  > ...and then: 'Can we also wrap the CountDown / How long
  > until launch / class guides / system guides / launch tab /
  > jobs tab etc.'
  > ...and then: 'Can we fix the other subtext like the mark
  > of beta text and timing?'

  **Problem:** Every h1/h2/h3 heading was floating plain-text
  on top of themed background art. Legibility was fine on
  Henesys (light green bg) but degraded on Perion (dark rock),
  Kerning (dark neon), and Sleepywood (autumn browns). No
  visual anchor kept the reader oriented.

  **Solution: two new shared classes in `global.css`.**

  ```css
  .section-heading {
    /* Full page-hero panel - big top-of-page banner. */
    padding: 1.3rem 1.6rem;
    background: var(--surface-card);
    border: 2px solid var(--accent-primary);
    border-radius: 0.9rem;
    box-shadow: var(--shadow-panel);
  }
  .section-panel-title {
    /* Mid-page h2 - solid left rail accent. */
    padding: 0.55rem 1rem;
    background: var(--surface-card);
    border-left: 5px solid var(--accent-primary);
    border-radius: 0.55rem;
  }
  .section-panel-subtitle {
    /* h3 sub-groupings - dashed rail, uppercase, accent color. */
    padding: 0.35rem 0.75rem;
    background: var(--surface-card);
    border-left: 3px dashed var(--accent-primary);
    text-transform: uppercase;
    color: var(--accent-primary);
  }
  ```

  **Coverage:**
  - `.section-heading` (via global rule): homepage, /jobs,
    /quests, /items, /mobs, /party-quests, /search - every
    top-of-page hero + every mid-page section band (Countdown,
    'Choose your path', 'Classic World systems') auto-wraps.
  - `.section-panel-title` applied to h2s in:
    - **JobGuideLayout** (8 h2s: Overview, How to become,
      AP allocation, First job skills, Training routes,
      Equipment progression, Second job branches, FAQ).
      Cascades to all 4 class guides.
    - **QuestLayout** (7 h2s: At a glance, In-game text,
      Rewards, Liven's take, Chain navigation, Related
      guides, Sources). Cascades to ~155 quest pages.
    - **ItemDetailLayout** (5 h2s: Liven's take, Stats,
      Where it comes from, What it's used for, Related
      guides, Sources). Cascades to 4,302 item pages.
    - **GuideLayout** (1 h2: Sources for this guide).
    - **launch.astro** (7 h2s directly: Launch timeline,
      Founder's Package, Grand Launch, Mark of Beta,
      Confirmed features, Not yet announced, Official sources).
  - `.section-panel-subtitle` applied to launch page's
    'Not yet announced' category h3s (4 uses).

  **Tier headers on /quests** (`.tier-header`): kept its
  scoped panel styling with left-rail treatment - matches
  the design language of the new global classes but has an
  extra 'quest count' badge inline that the global class
  doesn't accommodate.

  **DRY cleanup:**
  - Removed the duplicated scoped `.section-heading` blocks
    I'd added to /quests, /items, /mobs the previous sprint
    (before the global rule shipped). Now: one source of
    truth in `global.css`.
  - Removed the duplicated `.open-questions__group h3`
    typography rule on launch.astro; that h3 now uses
    the shared `.section-panel-subtitle` class instead.

  **Auto-theming:** Every class uses `var(--accent-primary)`
  + `var(--surface-card)` + `var(--shadow-panel)`. All six
  themes (Perion / Ellinia / Henesys / Kerning / Lith /
  Sleepywood) already define those vars, so each page picks
  up its own accent color for the border and its own shadow
  tone automatically. Zero per-theme overrides written.

  **Verified end-to-end:**
  - Warrior class guide - 9 uses of `section-panel-title`
  - Sample quest (Alex's Request) - 7 uses
  - Editorial item (Red Potion) - 5 uses
  - Launch page - 7 title + 4 subtitle uses
  - Zero broken links, zero style regressions.

  Build time: 20.12s. Pagefind: 16,738 words.
- **2026-08-27** - **Sprint round 20: Organization pass. Quests grouped by level, items by class.**
  4,656 pages, same count. Layout-only sprint.

  **User ask: 'For quests can we group them by level? For items
  can we keep them grouped to categories, and for weapons or
  armors can they have a niche spot that complements their
  corresponding class?'**

  **Quests page (`/quests/index.astro`) - rewrote from scratch:**
  - Primary grouping: LEVEL TIER (was: category).
  - 7 tier buckets: 1-10 / 11-20 / 21-30 / 31-40 / 41-50 /
    51-60 / 61+ (empty tiers hidden).
  - Each tier has a short lede sentence establishing what
    happens at that level range (job change gates, zone
    unlocks, item milestones).
  - Sticky jump-to-tier nav at top for one-tap navigation
    to your current level.
  - Category preserved as a color-coded badge on each quest
    card so the Tutorial / Story / Advancement / Citizenship
    distinction stays scannable.
  - Class requirement badge (Warrior / Mage / etc) shown when
    a quest is class-restricted.

  **Items page (`/items/index.astro`) - two-axis filtering:**
  - Kept category chips as primary filter (Equipment /
    Consumable / Etc / Setup / With editorial).
  - ADDED prominent 'Browse by class' strip at top with 4 big
    themed tiles (Warrior=Perion pink, Mage=Ellinia blue,
    Bowman=Henesys green, Thief=Kerning purple). Each tile
    links to `/items/?class=<Name>` for a shareable filtered
    view.
  - ADDED class filter chips below the category chips (Any /
    Warrior / Mage / Bowman / Thief), fully orthogonal to the
    category filter.
  - Class filter matches an item if ANY of:
      1. Selected class = 'Any' (no filter)
      2. Item reqJob is blank/null (universal - consumables etc)
      3. Item reqJob is 'All'
      4. Item reqJob matches selected class exactly
      5. Item reqJob is combo containing selected class
         (e.g. 'Warrior/Thief' matches Warrior)
  - URL query sync: activating a class chip updates ?class=
    in the URL via replaceState. Page load reads ?class=
    and category= to restore filter state.

  **Class item counts (from datamine):**
  - Warrior: 3,795 items usable (286 restricted + 3,509 shared)
  - Mage: 3,716 items usable
  - Bowman: 3,733 items usable
  - Thief: 3,793 items usable
  - The huge 'usable' counts are dominated by shared/universal
    items (consumables, materials). The class-restricted item
    counts are more meaningful for gear browsing: 286 / 207 /
    224 / 284 respectively.

  **What did NOT change:**
  - Content collections (55 editorial items, 155 quests).
  - Item detail pages (`ItemDetailLayout.astro`).
  - Mob pages (`/mobs/`).
  - Ingestion script (`scripts/build-database.mjs`).
  - Zero broken links.

  Build time: 13.90s. Pagefind: 16,738 words.
- **2026-08-27** - **Sprint round 19: /database deconflict. Items catalog + Mobs tab reorganization.**
  4,658 -> 4,656 pages (net -2 - dropped /database landing +
  /database/items index + /database/mobs index in favor of
  their new top-level equivalents).

  **Deconfliction: /database was a duplicate concept.**
  User feedback: 'we have an items tab, we have items in the
  database. Can we translate the database into the items tab
  with the information the items tab has?'

  **What changed:**
  - Deleted `src/pages/database/` entirely (5 pages).
  - `/items/` is now THE comprehensive catalog. Merges the
    4,302 dossiers from the datamine with the 55 editorial
    content collection entries via a unified layout.
  - `/mobs/` is now a top-level tab (was /database/mobs/).
  - Nav: 'Database' removed, 'Mobs' added between Items and
    Leveling.

  **URL strategy: legacy + canonical coexist.**
  - `/items/red-potion` (editorial slug) still works.
  - `/items/2000000` (WZ ID) is the new canonical URL.
  - Both route to the same ItemDetailLayout via getStaticPaths
    returning two paths per editorial entry (slug AND WZ ID).
  - Non-editorial items only get the WZ ID URL.
  - Zero broken links from prior sprints.

  **New unified layout: `src/layouts/ItemDetailLayout.astro`**
  Takes dossier (always) + editorial overlay (optional).
  Renders in this order:
  1. Hero: icon + name + tagline (editorial) + badges
     (category/subcategory/weapon type/job restriction/tier)
  2. In-game description (from items.json when present)
  3. Liven's take (editorial prose, when present)
  4. Callout (editorial actionable advice, when present)
  5. Stats grid - REQUIREMENTS card (reqLevel/reqSTR/etc)
     + STATS GRANTED card (incPAD/incSTR/etc, with stat
     ranges for PAD/MAD) + EFFECT card (consumable
     hp/mp restore)
  6. NPC sell price strip
  7. Where it comes from - Given by quests + Craftable
  8. What it's used for - Required by quests + Used as material
  9. Related guides + Sources (editorial-only)

  **Ingestion script upgrades:**
  - `npcSellPrice`: normalized from item.price (equipment)
    or item.stats.price (consumables) into one field.
  - `spec`: consumable effects (hp/mp restore values).
  - `description`: in-game item description text.
  - Scroll fields: equipSlot, statType, tier.
  - `statRanges`: v83-era variance formula (base +/- floor(
    base/10)) applied to weapon PAD/MAD. Renders as
    '24 ~ 30' style with '(base 27)' subtitle.
  - Index schema now includes reqLevel, reqJob, price for
    the catalog filter columns.

  **Fashion filtering:**
  Face / hair / skin items already excluded upstream by
  osmsdataexplorer (items.json doesn't include them).
  Documented on the catalog landing.

  **Data honesty preserved:**
  Every non-editorial dossier page still shows the disclaimer:
  'mob drops and NPC vendor lists not yet documented.'
  When drops.json / shops.json become available, the ingestion
  script adds fields and every page grows for free.

  **End-to-end verified:**
  - /items/red-potion (legacy) - editorial + dossier merged,
    20,170 bytes.
  - /items/2000000 (canonical WZ ID) - identical content,
    20,164 bytes.
  - /items/1302001 Long Sword (non-editorial) - shows stat
    range '24 ~ 30' for incPAD:27, 'Fast' speed, '1H Sword'
    badge, 1,500 mesos NPC price.
  - /mobs/6 Stump - shows Olaf's First Training quest.

  Page count: 4,658 -> 4,656. Build time: 8.57s. Pagefind:
  16,678 words.
- **2026-08-26** - **Sprint round 18: Reference database launch. Cross-referenced item/mob catalog from CoT 2 datamine.**
  158 -> 4,658 pages. First 4,500-page single-sprint jump.
  Astro built the whole thing in 8.68s.

  **What shipped:**
  - `scripts/build-database.mjs` - Node ESM ingestion script.
    Fetches items.json + quests.json + crafting.json +
    lookups.json + maps.json from osmsdataexplorer.com,
    cross-references, writes `src/data/db/{items,mobs,index,
    generated-at}.json`.
  - `src/pages/database/index.astro` - landing page with
    stats + category tiles.
  - `src/pages/database/items/index.astro` - 4,302-item
    filterable table with client-side search + category
    chips (progressive-enhancement, works with JS off).
  - `src/pages/database/items/[id].astro` - dynamic route,
    one page per WZ ID. Shows stats + given-by-quests +
    craftable-from + required-by-quests + used-as-material
    + editorial-page link if one exists.
  - `src/pages/database/mobs/index.astro` - 195-mob
    filterable table.
  - `src/pages/database/mobs/[id].astro` - dynamic route,
    one page per mob ID. Shows quest-requirement cross-refs.
  - `package.json` scripts: `npm run db` (regenerate JSON),
    `npm run db:build` (regenerate JSON + rebuild site).
  - Main nav: 'Database' added between Items and Leveling.

  **Cross-reference indexes built (all verified in-browser):**
  - itemGivenBy: 202 items given as quest rewards
  - itemRequiredBy: 217 items required for quest completion
  - itemAsMaterial: 107 items used in crafting recipes
  - itemAsOutput: 332 items produced by crafting recipes
  - mobRequiredBy: 43 mobs required by quest requirements

  **Data model - one dossier per WZ ID:**
  ```
  {
    id, name, category, subCategory, stats,
    reqJobLabel, weaponType, attackSpeedLabel,
    givenByQuests: [{questId, questName, level, region, count, guaranteed}],
    requiredByQuests: [{questId, questName, level, region, count}],
    usedAsMaterial: [{discipline, outputId, outputName, reqLevel, count}],
    craftableFrom: [{discipline, outputType, reqLevel, mesoCost, craftExp, ingredients}],
    editorialSlug: 'red-potion' | null
  }
  ```

  **Honest data gaps (documented on every dossier page):**
  - Mob drop tables (drops.json not exposed at osmsdataexplorer)
  - NPC vendor lists (sold.json / shops.json not exposed)
  - Mob HP / MP / EXP (not in current lookups.json)

  When those endpoints appear, the ingestion script adds
  fields; the pages grow without any layout changes. This
  is why we didn't try to hand-author 4,300 stub pages.

  **Verified end-to-end examples:**
  - Red Potion (2000000) at /database/items/2000000
    shows 6 quest-reward references including Olaf's
    First Training.
  - Stump mob (6) at /database/mobs/6 shows Olaf's First
    Training as the quest that requires killing it.
  - Metal Koif (1002017) at /database/items/1002017 shows
    Smithing L1 recipe with Bronze Koif + Iron Ingot
    ingredients.

  Page count: 158 -> 4,658. Pagefind: 16,292 words.
  Build time: 1.72s -> 8.68s (still fast).
- **2026-08-26** - **Sprint round 17: MVP-scope completion sprint (Citizenship + Forgotten Hollow + Job Advancement).**
  152 -> 158 pages. 6 new quest files + 4 in-place updates +
  1 audit script improvement. All user-priority MVP buckets
  now at 100%.

  **MVP-SCOPE COMPLETION ACHIEVED:**
  - Citizenship: 77 unshipped -> 0 unshipped (via Community
    Board range coverage + 2 new NPC chain canonicals)
  - Forgotten Hollow: 8 unshipped -> 0 unshipped (4 new
    canonicals covering Zelya continuation, Nyroth+Jaime,
    Myra, Daniel the Scholar)
  - Job Advancement (all 4 classes): 11 unshipped -> 0
    unshipped (in-place expansion of 4 next-journey files
    to canonicalize the full 4-step chain per class)

  **6 new quest canonicals shipped:**
  1. **Zelya's Road Back Home (10602, L43)** - Zelya reaches
     her dwelling. Random Earring Stat Scroll: Greater from
     4-way pool.
  2. **Nyroth + Jaime's Rot-Steeped Arcforging (10612-10614,
     L45)** - Nyroth's protection scroll fails against
     LIVING MALICE. Jaime the alchemist investigates. THE
     Arcforging failure lore + Alchemy discipline reveal.
  3. **Myra's Old Friends (10603-10604, L49)** - grief arc.
     Myra reveals as Grendel's 'old friend.' Character web
     completed.
  4. **Daniel the Scholar's Sage's Burden (10615-10616,
     L50)** - Stasis Seal finale. Bottomwear HP Scroll:
     Greater reward. THE Forgotten Hollow arc complete.
  5. **Bruce's Cake For His Daughter (506036-506039, L17)** -
     cross-town emotional arc. Bruce -> Mrs. Ming Ming
     advice -> cake -> Ayan in Perion. Retroactively
     upgrades Ayan L11 arc.
  6. **Mong from Kong's Stirge Phobia Cure (506138-506141,
     L17)** - NEW REWARD CATEGORY: Pet Equipment Scrolls
     (Speed/Jump variants).

  **4 quest files updated in-place:**
  - warriors-next-journey.md: expanded to canonicalize
    quests 20000-20003 (full 4-step Warrior advancement)
  - magicians-next-journey.md: same for 20100-20103
  - bowmans-next-journey.md: same for 20200-20203
  - thiefs-next-journey.md: same for 20300-20303

  **Audit script improvement:**
  scripts/audit-zone-coverage.ps1 now recognizes range
  notation (e.g. '506001-506136') and marks all IDs in
  range as covered. Enables DRY coverage-manifest pattern:
  a canonical article can declare 'this file covers IDs
  N-M' and get proper audit credit. Used by Community
  Board canonical to cover 71 mechanically-identical
  resident-greeting quests without shipping 71 files.

  **Community Board canonical updated:**
  - Declares full 506001-506136 range coverage
  - Cross-links to Bruce chain / Chief Stan chain / Mong
    from Kong chain (which occupy IDs in that range but
    aren't Board-driven)
  - chainLength updated from 18 to 71

  **What remains (deferred per user's MVP scope call):**
  - El Nath: 34 unshipped (Ossyria continent expansion,
    NOT at launch)
  - Event: 7 unshipped (event-only, deferrable)
  - Item coverage: 55/74 shipped (~44%) - next sprint
    pivots to items.wz per user directive

  Page count: 152 -> 158. Pagefind: 6,315 words.
- **2026-08-25** - **Sprint round 15: L40-50 Ossyria continent debut + Hero's Gladius arc + character-continuation payoffs.**
  134 -> 143 pages. 9 pages (6 quest canonicals covering
  21 quest IDs + 3 stat potions completing the pantheon).
  Cross-link web: Blue Potion now at 23 quest cross-links.

  **OSSYRIA CONTINENT DEBUT:** the Master Sergeant Fox
  military chain (12100-12108, 9 quests) is the first
  extended Ossyria arc. Documented across El Nath (Master
  Sgt Fox HQ), Orbis (Staff Sgt Charlie), Icy Cold Field
  (Sgt Bravo), and Cloud Park VI (Corporal Easy). NATO
  phonetic naming pattern (Fox-Charlie-Bravo-Easy). Rewards
  3x Sniper Potion + 3x Dexterity Potion + 3x Speed Potion +
  random Earring Crit Damage OR Evasion Scroll (new scroll
  types beyond STR/DEX/INT/LUK).

  **HERO'S GLADIUS ARC (L50):** Manji-Chrishrama chain
  (10402-10404) reveals Chrishrama as the Old Gladius's
  ORIGINAL CREATOR. Guaranteed rewards: Hero's Gladius
  (named 1H sword 1302014) + Skull Earrings (1032013).
  Retroactively upgrades Chrishrama's significance -
  Arcforging master is also an ancient smith.

  **STAT POTION PANTHEON COMPLETE:** with this sprint, all
  5 stat potions are documented:
  - Warrior Potion (2002000) +10 PAD - Warriors/Bowmen
  - Magic Potion (2002001) +10 MAD - Magicians
  - Sniper Potion (2002002) +5 ACC - Bowmen/Thieves NEW
  - Dexterity Potion (2002003) +5 EVA - Thieves/Bowmen NEW
  - Speed Potion (2002004) +8 SPD - All classes NEW

  **CHARACTER-CONTINUATION PAYOFFS:**
  - Icarus's flight dream RESOLVES via Wing the Fairy's
    Flying Medicine at L46 - 3 Icarus Capes random pool
  - Blackbull upgrades from patched house (L11) to new
    house (L48) - awards Greater Attack Scroll
  - Ayan grows from Andre's peripheral NPC (L11) to Perion
    town-defense leader (L48) - awards Greater Attack
    Scroll + Cape Stat Scroll
  - John the Lith Harbor fisherman (L45) - 3-quest
    emotional arc from anniversary flowers to mother's
    memorial. Guaranteed Pansy Earrings.

  **6 quest canonicals shipped (21 quest IDs):**
  1. **Master Sergeant Fox Military Chain (12100-12108)** -
     9 quests, Ossyria continent debut, NATO phonetic
     naming, 3x3 sub-chain structure.
  2. **Manji-Chrishrama Hero's Gladius Chain (10402-10404)** -
     3 quests L50, guaranteed Hero's Gladius + Skull
     Earrings, Chrishrama origin reveal.
  3. **Icarus + Wing Flying Medicine (10319-10321)** - 3
     quests L46, character convergence, 3-Cape random
     pool.
  4. **John's Deep Forest of Patience (10006-10008)** - 3
     quests L45, emotional fisherman arc, guaranteed
     Pansy Earrings.
  5. **Blackbull's New House (10401)** - 1 quest L48,
     14-weapon Greater Attack Scroll pool.
  6. **Ayan's Alligator Hunt (10412-10413)** - 2 quests
     L48, dual random-scroll rewards.

  **3 items shipped (stat potion pantheon completion):**
  Sniper Potion, Dexterity Potion, Speed Potion.

  **New orphan pattern insight:** ID 2043002 (One-Handed
  Sword Attack Scroll: Greater) is now referenced by 3
  files (Welcome to the Hollow + Blackbull + Ayan). Most-
  referenced orphan. Prime candidate for next ship.

  **Cross-link web update:**
  - Blue Potion: 21 -> 23 (Fox military + Icarus-Wing +
    Manji-Chrishrama + more)
  - Warrior Potion / Magic Potion: 2-3 refs each - stat
    potion pantheon cross-links established
  - Sniper Potion: 4 on ship day (Fox military + pantheon)
  - Work Gloves: 7 (John's Deep Forest added ref)

  **New NPC WZ IDs added:** Master Sergeant Fox 2020003
  (El Nath 202xxxx range), Staff Sergeant Charlie 2010000
  (Orbis 201xxxx), Sergeant Bravo 2030001, Corporal Easy
  2030002 (sky/tower 203xxxx range confirmed).

  Page count: 134 -> 143. Pagefind: 5,827 words.
- **2026-08-25** - **Sprint round 14: L31-42 Victoria + Cursed Doll chain + Forgotten Hollow debut + Florina Beach debut.**
  125 -> 134 pages. 9 pages (6 quest canonicals covering 21
  quest IDs + 3 items). Cross-link web: Blue Potion now at
  21 quest cross-links (up from 17). Mithril Ore lands at 7
  on ship day.

  **THREE MAJOR ZONE / CONTENT DEBUTS THIS SPRINT:**

  **1. FORGOTTEN HOLLOW DEBUT (L39):** The 7-quest 'Welcome
  to the Hollow' canonical covers Zelya's cave-fairy intro
  (10600-10601) + the Grendel/Arwen deep-lore arc
  (10607-10611). Grendel reveals his fairy kin were sealed
  in the dark. Climax reward: RANDOM Greater Weapon Attack
  Scroll from a 14-weapon pool covering EVERY weapon type
  in the game. Highest-value single scroll reward in
  Victoria Island.

  **2. FLORINA BEACH DEBUT (L37):** Riel's Special Taste of
  Florina Beach (4-quest cooking canonical). Introduces the
  beach zone accessed via Lith Harbor ferry. Cooking
  ingredients + Loran Claws + Coconuts. Unusual meso curve
  (1K -> 3K -> 6.5K -> 3K) suggests step 3 was designed as
  the 'commit test' peak.

  **3. CURSED DOLL CHAIN (L36):** The iconic Rowen 5-quest
  escalating collection grind (50 -> 70 -> 100 -> 150 ->
  200 dolls). Rewards escalate through: 42 base ores, 70
  gem ores, Gold+Diamond ore, Gloves Attack Scroll, then a
  random hat from 5-slot pool. Single-handedly funds
  Blacksmithing and Arcforging beginner economies.

  **6 quest canonicals shipped (21 quest IDs):**
  1. **Icarus's Flight Experiments (10317-10318)** - L31
     continuation of I'm Bored arc. Same rooftop dreamer,
     now with engineering ambitions. Both experiments fail
     canonically.
  2. **Shumi's Construction Site Losses (10312-10314)** -
     L35 heist-adjacent 3-quest chain. Escalating basement
     depths (B1/B2/B3). Step 3 pays 10,000 mesos + 30 Mana
     Elixirs (jackpot). Cross-references JM From tha
     Streetz Leatherworking.
  3. **Cursed Doll Collection Chain (10201-10205)** - L36
     iconic ore/gem/scroll grind. Full reward table
     documented.
  4. **Riel's Special Taste of Florina Beach (10700-10703)**
     - L37 4-quest cooking chain. Florina Beach zone
     debut.
  5. **Welcome to the Forgotten Hollow (10600-10611)** - L39
     7-quest canonical. Forgotten Hollow zone debut +
     Grendel/Arwen deep lore + Zelya cave fairy intro.
     Climax = 14-weapon Greater Attack Scroll random pool.
  6. **Pia's Present For a Friend (10119)** - L42 wholesome
     continuation of Pia character arc.

  **3 items shipped:**
  - **Mithril Ore (4010002)** - tier 3 raw ore, 40 mesos.
    Cursed Doll step 1 reward + Blacksmithing recipe input.
  - **Adamantium Ore (4010003)** - tier 4 raw ore, 60 mesos.
    Warrior-friendly heavy armor recipe input.
  - **Return Scroll to Forgotten Hollow (2030007)** - NEW
    zone-specific Return Scroll tier. 400 mesos (4x town
    scroll price). Guaranteed from Zelya's Natural Adhesive.

  **Cross-link web update:**
  - Blue Potion: 17 -> 21 (Cursed Doll, Hollow, Icarus,
    Riel, Shumi, Pia all reference it)
  - Arcforging Kit: 11 -> 11 (steady)
  - Bronze Ore: 6 -> 7 (Cursed Doll adds ref)
  - Iron Ore: 5 -> 6 (Cursed Doll adds ref)
  - Mithril Ore: 7 on ship day (dense ore-tier ecosystem
    already, cross-linked to Bronze/Iron/Adamantium +
    Cursed Doll)

  **New orphan items (candidates for next sprint):**
  - 4 Greater Weapon Attack Scrolls from Hollow pool (14
    total but only ~4 are truly new orphans)
  - Silver Ore (4010004), Orihalcon Ore (4010005), Gold Ore
    (4010006) - complete the ore tier ladder
  - 7 Gem Ores (4020000-4020006) - Cursed Doll step 2 gives
    these
  - Diamond Ore (4020007) - Cursed Doll step 3 + Diamond gem
    recipe input
  - Gloves Attack Scroll Intermediate (2040801) + Magic
    Attack variant (2040805)
  - Mana Elixir (2000006) - Shumi step 3 reward

  **New NPC WZ IDs added:** Rowen the Fairy 1032101,
  Riel 1081100 (Florina 108xxxx range), Zelya (CoT-exclusive
  cave fairy).

  Page count: 125 -> 134. Pagefind: 5,514 words.
- **2026-08-25** - **Sprint round 13: L27-30 Victoria + Chief Stan backstory + Orbis debut + audit-driven items.**
  116 -> 125 pages. 9 pages (4 quest canonicals + 5 items).
  Coverage improved 44% -> 45.4%. Cross-link web still
  compounding: Blue Potion now at 17 quest cross-links,
  Arcforging Kit at 11.

  **THE CHIEF STAN REVEAL:** the 5-quest Chief Stan's Past
  chain (506041-506045) unmasks Henesys's town leader as a
  FORMER ADVENTURER. Mrs. Ming Ming secretly cares for him.
  Jay knows his past. Old Chief Stan's Hammer is lost in
  the Ant Tunnel. The chain has poetry-level narrative
  weight - the datamine writers earned this one. Final
  reward: random Earring Stat Scroll (Intermediate).

  **THE ORBIS DEBUT:** Huckle's Magic Ingredients (12000)
  is the FIRST cross-continent quest documented. Huckle
  lives in Orbis Tower's hidden room, studying self-
  transformation physics for 30 years. Ellinia -> Orbis
  ferry (bird-boat) is the gateway to Ossyria. Rewards
  Orbis Rock Scrolls.

  **4 quest canonicals shipped:**
  1. **Chief Stan's Past (506041-506045, 5 quests)** - the
     Henesys backstory arc. Multi-NPC Mrs. Ming Ming -> Jay ->
     Mrs. Ming Ming -> Chief Stan across 5 steps.
  2. **Arwen and the Glass Shoe (10200)** - L29 Ellinia
     fairy tale reference (Cinderella + Elvish naming).
     Random Piece of Ice OR Fairy Wing reward.
  3. **Huckle's Magic Ingredients (12000)** - L29 Orbis
     Tower. First cross-continent quest. Orbis Rock Scrolls
     reward.
  4. **Maya's Collections (10115, 10116)** - L30 Henesys.
     Post-Sparkling-Rock recovery arc: Maya is HEALTHY and
     has hobbies. Emotional payoff.

  **5 items shipped (audit-driven backfill):**
  - **Orange Potion (2000001)** - 250 HP mid-tier consumable
    (between Red and White). Closes the potion pantheon gap.
  - **Old Raggedy Cape (1102000)** - L25 cape, +12 PDD +5
    MDD +1 ACC, 5 slots. Jane Doe ghost chain reward, her
    actual hospital garment as memento mori.
  - **Star Rock (4020109)** - new gem tier separate from
    Luke's 8-gem pool. Sabitrama Anti-Aging Medicine reward.
    Likely Arcforging recipe input.
  - **Bronze Ingot (4010100)** - refined Bronze Ore,
    Blacksmithing tier 2. Nella Chris's Request reward.
  - **Iron Ingot (4010101)** - refined Iron Ore,
    Blacksmithing tier 3. Paired with Bronze Ingot.

  **Cross-link web update:**
  - Blue Potion: 13 -> 17 (Chief Stan chain adds refs)
  - Arcforging Kit: 6 -> 11 (Sabitrama family arc + Star
    Rock cross-link explosion)
  - White Potion: 1 -> 1 (still under-documented; likely
    Nella's Dr. Faymus reward triggers grow)
  - Bronze Ingot: 6 cross-links on ship day (Blacksmithing
    web already dense)

  **New NPC WZ IDs added:**
  Jay 1012109, Arwen the Fairy 1032100, Huckle 2030012
  (Ossyria continent - 203xxxx range).

  **New orphan items (candidates for next batch):**
  - Piece of Ice (4003004), Fairy Wing (4003005) - Arwen
    reward pool
  - Orbis Rock Scroll (4001010) - Huckle reward
  - Still standing from prior sprints: 4 Catalysts,
    5 boots from Manny pool, Return Scroll town variants,
    Casey game sets

  Page count: 116 -> 125. Pagefind: 5,166 words.
- **2026-08-25** - **Sprint round 12: L22-25 Victoria + audit-driven items backfill + Arcforging reveal + schema fix.**
  105 -> 116 pages. 11 pages (5 quest canonicals covering 14
  quest IDs + 6 items). Cross-100 milestone at 116. THE BIG
  DISCOVERY: Arcforging = scroll crafting, CONFIRMED via
  Chrishrama's L25 graduation Catalyst reveal.

  **Automated item-audit script added** (scripts/audit-items.ps1):
  Part 1 checks broken itemSlug links (0 found). Part 2
  lists orphan itemId references (candidates for future item
  pages). Part 3 reports coverage stats. Run on demand.

  **THE ARCFORGING REVEAL:** the L25 crafting graduation
  series awards profession-specific Catalysts. Chrishrama's
  Catalyst is the Scroll Crafting Catalyst (4130003) - a
  Catalyst type unique to Arcforging. Previous speculation
  (enchantment? gems? weapons?) is settled: Arcforging =
  scroll crafting. Arcforging Kit item page updated to
  remove speculation, add cross-links to graduation series.
  Highest-value profession in Classic World, confirmed.

  **The 3-tier crafting arc is now fully documented:**
  - L10 apprentice (silas-irons-apprentice)
  - L15 Kit reward (crafting-apprentices-in-need-of-help)
  - L25 Catalyst reward (crafting-masters-graduation)

  **5 quests shipped (14 quest IDs covered):**
  1. **Nella's Veteran Requests (10306-10308)** - L22
     sequel to L10 Nella hub. Dr. Faymus + Chris + Cutthroat
     Manny. Real gear rewards (30 White Potions, Bronze/Iron
     Ingots, random boot from 5-slot pool).
  2. **Jane Doe Ghost Chain (10309-10310)** - L23 Niora
     Hospital Kerning. Ghost NPC narrative arc. Rewards Old
     Raggedy Cape (first cape most players own).
  3. **Camila's Gem (10105)** - L24 Henesys. Cross-
     referenced with Community Board (Camila resident).
     Random 30 Cake OR Pig Illustrated reward.
  4. **Sabitrama's Forest of Patience (10509-10510)** - L25
     Sleepywood. Sabitrama is Chrishrama's younger brother -
     confirmed family/lore connection. Star Rock (4020109,
     new gem tier) reward.
  5. **Crafting Masters Graduation (80009+80012+80015+
     80018+80021+80024)** - L25 canonical closing the 3-tier
     crafting arc. 4 unique Catalyst types across 6
     professions. ARCFORGING = SCROLL CRAFTING REVEAL.

  **6 items shipped (audit-priority backfill):**
  - **Brown Bamboo Hat (1002081)** - L25 hat, +24 PDD +10 HP
    +1 ACC, 7 slots, DEX 10 req. Sparkling Rock chain
    finale.
  - **Wooden Buckler (1092001)** - L10 Warrior shield, +70
    PDD, 7 slots. Blackbull's House random pool item 1/2.
  - **Steel Shield (1092003)** - L15 Warrior shield, +80 PDD,
    7 slots. Blackbull's random pool item 2/2.
  - **Warrior Potion (2002000)** - +10 PAD for 10 min stat
    buff. Ronnie chain reward.
  - **Magic Potion (2002001)** - +10 MAD for 10 min stat
    buff. Magician mirror of Warrior Potion.
  - **Fruit Knife (1332001)** - L8 all-class dagger, +23 PAD
    Faster, 7 slots. Maple Island Biggs quest reward.

  **Schema fix:** added `combat.critical` field (Work Gloves
  had +1 CRT that was being silently dropped). Corrected
  Brown Bamboo Hat (+1 ACC) and Leaf Earrings (+2 EVA) to
  use correct schema paths (combat.accuracy / combat.
  avoidability). Layout updated to render Critical Rate row.

  **Cross-link web update:**
  - Diamond: 10 (unchanged)
  - Blue Potion: 13 (unchanged)
  - White Potion: (new refs from Nella veteran)
  - Wooden Buckler / Steel Shield: 6+ each (Blackbull ref)
  - Arcforging Kit: 6 (up from 4 - graduation cross-links)

  **New orphan items introduced (candidates for next batch):**
  - 4 Crafting Catalysts (4130000-4130003)
  - Old Raggedy Cape (1102000)
  - Bronze/Iron Ingot (4010100-4010101)
  - 5 boots from Manny's random pool (1072044-1072058)
  - Star Rock (4020109)
  - Overall Armor DEF Scrolls (2040501-2040502)

  **NPC WZ IDs added:** Chrishrama profession CONFIRMED,
  Sabitrama flagged as CoT-exclusive brother-of-Chrishrama.

  Page count: 105 -> 116. Pagefind: 4,966 words.
- **2026-08-24** - **Sprint round 11: Complete crafting items backfill + Sparkling Rock arc + gem/scroll grab-bags.**
  93 -> 105 pages. 12 pages this sprint (8 items + 4 quests).
  Cross-link web now showing DRAMATIC compounding.

  **6 Crafting Kits shipped as compact item pages:**
  Smithing (Silas/Perion), Weaponcrafting (Thunder/Perion),
  Tailoring (Francois/Ellinia), Woodcrafting (Vicious/Henesys),
  Leatherworking (JM/Kerning), Arcforging (Chrishrama/Sleepywood).
  All are 15-minute +10% crafting-XP-boost consumables per the
  datamine descriptions. Corrects previous sprint's speculative
  "Kit unlocks profession" language: apprenticeship is
  established at L10 quest; L15 Kit is a buff consumable.
  Arcforging page flagged with speculation notes since it's the
  most novel (no v83 analog).

  **2 crafting ores shipped:** Bronze Ore (4010000, tier 1) and
  Iron Ore (4010001, tier 2). Tight compact stubs. Bronze Ore
  landed with 6 quest cross-links immediately on ship
  (auto-populated from Shane chain, Silas quest, plus general
  crafting references).

  **4 quests shipped (L19-21 Victoria narrative):**
  1. **Maya of Henesys (10106)** - Amherst Maya grown up, sick
     in Henesys. Direct narrative callback to Maple Island
     tutorial NPC. Chains into Sparkling Rock arc.
  2. **Sparkling Rock chain canonical (10107-10112, 6 quests)** -
     Teo (Lith Harbor) -> Sophia (Perion Dept Store alchemist)
     -> Manji (Perion) -> Ant Tunnel Zombie Mushroom hunt ->
     Sparkling Rock crafted -> Weird Medicine delivered to Maya.
     Final reward: Brown Bamboo Hat + Maya's recovery.
  3. **Luke the Security Guy (10113 L19)** - random 1-of-8 gem
     grab-bag reward: Diamond, Garnet, Amethyst, Aquamarine,
     Emerald, Opal, Sapphire, Topaz. First gem exposure in
     Victoria Island quest progression. Diamond page cross-
     link jumped from 3 to 10 refs immediately.
  4. **Proof of Companionship (10311 L21)** - Lakelis post-KPQ
     followup. Random 1-of-4 earring stat scroll drop:
     Intermediate STR / DEX / INT / LUK. First non-item
     ships the four existing earring scroll pages with quest
     provenance.

  **Cross-link web state after 3 sprints:**
  - Blue Potion: 13 quest cross-links (was 8 at round 9)
  - Diamond: 10 (was 3)
  - Orange: 7
  - Bronze Ore: 6 (new)
  - Smithing Kit: 5 (new)
  - Leaf Earrings: 6
  - Earring STR Scroll: 5

  Reverse-linking DRY pattern continues paying dividends.
  Every new quest with itemSlug references adds to item
  pages automatically. Zero manual maintenance.

  **New NPC WZ IDs added:**
  Luke 1040000, Teo 1002001 (Lith Harbor), Sophia 1022100
  (Perion Dept Store), Manji 1022002, Maya-Henesys instance
  1012101 (distinct WZ ID from Maple Island Maya 2103,
  same character narratively).

  Page count: 93 -> 105. Pagefind index: 4,698 words.
- **2026-08-24** - **Sprint round 10: L14-17 Victoria + Fossil Research canonical + Crafting Professions canonical.**
  83 -> 93 pages. 10 pages this sprint (7 quests + 3 items),
  BIG discovery: the complete Classic World crafting
  profession map now documented.

  **THE BIG UNLOCK: All 6 crafting professions identified
  and mapped.** Previous sprint stubbed Silas Irons as one
  of 6 unknown crafting masters. This sprint's L15 'in Need
  of Help' quest series reveals each master's discipline via
  the Kit item awarded:

  - **Blacksmithing:** Silas Irons (Perion) - Smithing Kit 2002007
  - **Weaponcrafting:** Mr. Thunder (Perion) - Weaponcrafting Kit 2002005
  - **Tailoring:** Francois (Ellinia) - Tailoring Kit 2002009
  - **Woodcrafting:** Vicious (Henesys) - Woodcrafting Kit 2002006
  - **Leatherworking:** JM From tha Streetz (Kerning) - Leatherworking Kit 2002008
  - **Arcforging:** Chrishrama (Sleepywood) - Arcforging Kit 2002010

  Arcforging is genuinely new content - no v83 analog. The
  Sleepywood placement of Chrishrama signals it's meant for
  slightly later-game characters. Full crafting guide deep-
  dive now unblocked (was gated on knowing what each master
  did).

  **7 quests shipped:**
  1-2. **Shane Mushroom chain (10211, 10212)** - Ellinia L14.
     First quest series that rewards crafting materials
     (Bronze Ore + Iron Ore). Bridges combat and crafting.
  3-4. **Mrs. Ming Ming's Worries (10100, 10101)** - Henesys
     L15. Village carnival prep. Second Worry hands off
     narratively to the Estelle chain.
  5. **Pia and the Blue Mushroom (10104)** - Henesys Park L16.
     Rare single-quest scroll drop: random Hat Accuracy Scroll
     (Lesser / Intermediate / Greater).
  6. **Fossil Research chain (10405-10410)** - CANONICAL 6-quest
     article. Winston (Perion Rocky Mountains) + Dr. Betty
     (Ellinia biologist) + Anne (Betty's daughter, Henesys).
     Ends with GUARANTEED Leaf Earrings L25 reward. Longest
     narrative arc in the L17 tier.
  7. **Crafting Apprentices in Need of Help (80010, 80013,
     80016, 80019, 80022, 80025)** - CANONICAL 6-quest article.
     Definitive Classic World crafting profession map. All 6
     masters, all 6 disciplines, all 6 Kit rewards in one
     reference.

  **3 items shipped:**
  - **Egg (2010002)** - 60 HP food, 3 mesos (cheapest HP consumable
    in the game). From Fossil Research step 2.
  - **Orange (2010004)** - 50 MP food, 5 mesos. From Fossil
    Research step 4 + multiple Community Board rewards.
  - **Leaf Earrings (1032015)** - L25 all-class earrings, +24
    MDD +5 MMP +2 EVA, 5 slots. Fossil chain flagship reward.

  **Cross-link web check (auto-populated Awarded-by):**
  Blue Potion now at 12 quest cross-links. Orange at 7.
  Leaf Earrings at 6. Lemon at 5. Egg at 4. Reverse-linking
  DRY pattern is paying massive dividends - every new quest
  that references an item grows the item page organically.

  **NPC WZ IDs added to docs:**
  Shane 1032003, Mrs. Ming Ming 1012106, Pia 1012102, Winston
  1022006, Dr. Betty 1032104, Anne 1012110.

  **Silas Irons page updated** to link forward to the L15
  canonical (closes the loop from round 9's stub).

  Page count: 83 -> 93. Pagefind index: 4,491 words.
- **2026-08-24** - **Sprint round 9: L11-15 Victoria + Free Market + Community Board + 4 items backfill.**
  72 -> 83 pages. 11 pages shipped in one sprint (7 quests + 4
  items + 1 prereq linkage fix), maintaining ~50/week pace
  toward MVP publication.

  **7 quests shipped:**

  1-2. **Icarus 'I'm Bored' chain (10315, 10316)** - Kerning
     rooftop L11. 2-quest character-first chain; step 2
     awards 10 Red + 10 Blue Potions (substantial consumable
     kit).
  3. **Estelle's Request (10102)** - L15 prereq to already-
     shipped Estelle's Special Sauce. Backfilled the missing
     chain step 1 + wired prerequisiteQuest on Special Sauce
     to complete the 2-quest chain nav.
  4. **Casey's Game Set Series (80001-80007)** - Henesys Park
     L12. Canonical 7-quest article covering Match Cards +
     6 Omok Set variants. Entry point to MapleStory Monster
     Card + Mini-Game systems.
  5. **To Henesys, the Prairie Town (506000)** - L12
     Citizenship system entry point. Unlocks Community Board.
  6. **Henesys Community Board Series (506001-506018+)** -
     Canonical article covering the ~18-quest citizenship
     contribution loop. Rina + Mrs. Ming Ming + Camila +
     Bruce + Maya + more residents. CRITICAL narrative catch:
     Bruce here IS the same Bruce from the Reunion arc, Rina
     is the same Rina from the Sleepywood chain. Cross-
     narrative web tightening.
  7. **Welcome to the Free Market chain (80026-80029)** -
     Canonical 4-quest FM system introduction. Lewis at FM
     Entrance -> Chief Stan reply -> Dances with Balrog
     reply. 20 Blue Potions total across chain + cross-town
     travel practice.

  **4 items shipped (backfill for existing quest references):**
  1. **Red Potion (2000000)** - universal L1 HP consumable.
     100 HP restore, 5 mesos. Now cross-referenced by 5 quest
     pages via Awarded-by auto-population.
  2. **Lemon (2010005)** - 150 MP food restore. From Nella
     series step 1 and Community Board rewards.
  3. **Cake (2020002)** - dual 100 HP + 100 MP restore. From
     Shumi's Request.
  4. **Work Gloves (1082000)** - L10 all-class gloves, +6
     PDD +1 CRT +5 slots. First equipment upgrade from a
     quest reward. Sets up the L36 Cursed Doll gloves-
     scroll pipeline. Cross-referenced by 6 quest pages.

  **Prereq chain fix:** Estelle's Special Sauce now properly
  points prerequisiteQuest at estelles-request. Chain nav
  Previous-step link renders correctly in built HTML.

  **NPC WZ IDs added to docs:**
  Icarus 1052106, Casey 1012008, Dances with Balrog 1022000.
  Plus 2 more CoT-exclusive-or-renamed NPCs enumerated
  (Lewis, Community Board / Arthur).

  Page count: 72 -> 83. Pagefind index: 4,247 words.
- **2026-08-24** - **Sprint round 8: Editorial card fix + L10-11 Victoria Island quest sprint.**
  62 -> 72 pages. Editorial UI fix + 10 quests shipped
  on-pace toward MVP publication targets.

  **UI fix - editorial cards.** User feedback: "Liven's take"
  sections had no card/tile background, so prose sat directly
  on themed background images and read poorly. Systemic fix:
  added card styling (surface-card bg + border-card border +
  border-radius) to .quest-editorial, .item-editorial, and
  .guide-body classes. JobGuideLayout already used .card
  correctly. All future pages inherit the fix.

  **10 quests shipped, L10-11, Victoria Island:**

  1-3. **Bruce and Ayan Reunion arc (10123, 10124, 10125):**
     Three-quest cross-town narrative. Bruce studies Henesys
     mobs while grieving his missing daughter. Finds her in
     Perion with amnesia. You deliver her old toy sword.
     Memory returns. Emotional payoff most L10 quests don't
     attempt.
  4-6. **Nella's Kerning Requests (10303, 10304, 10305):**
     Nella brokers Kerning City requests for a 1,000 meso
     commission - broker pattern is unusual for the tier.
     Don Hwang (Lemons + Kerning Return Scrolls), Shumi
     (Cakes), Andre (guaranteed Work Gloves - first
     equipment upgrade in the chain).
  7. **The Stump Horror Story (10411):** thematic follow-up
     to the Bruce+Ayan reunion - Ayan's amnesia is gone but
     her Stump-trauma isn't. Help her overcome fear by
     clearing Stumps outside Perion. Rewards Perion Return
     Scrolls.
  8. **Wing the Fairy's Homework (10210):** Ellinia
     character-first quest. Wing looks down on humans but
     needs help anyway. 10 Blue Potions + 2 Return Scrolls
     to Ellinia - major Magician training kit.
  9. **Fixing Blackbull's House (10400):** Perion L11.
     Random shield reward (Wooden Buckler OR Steel Shield) -
     first guaranteed shield for most players.
  10. **Silas Irons in Need of an Apprentice (80008):**
      Entry point to Classic World Crafting Apprenticeship
      system (CoT-exclusive - v83 did not have this). Page
      stubs the full 6-master crafting tree for future
      expansion. NPC sprite unavailable (v83 asset pool
      predates the system).

  **New NPC WZ IDs added to docs/npc-id-lookup.md:**
  Bruce 1012111, Ayan 1022007, Nella 1052103, Wing the Fairy
  1032106, Blackbull 1020000. Plus a new 'Classic World-
  exclusive NPCs' section enumerating 6 Crafting Apprentice
  masters with no v83 sprites.

  **Cross-town narrative web strengthening:**
  Henesys (Bruce) - Perion (Ayan) links the two towns via
  storyline. Perion (Blackbull) - Ellinia (Wing) parallel
  as sibling L10-11 QOL-reward quests. Full Victoria Island
  L10-11 quest density is filling in.

  Page count: 62 -> 72. Pagefind index: 4,031 words.
- **2026-08-24** - **Sprint round 7: MeowDB sprite pipeline + Rain quiz answers + Red Sauna Robe.**
  Systemic sprite-accuracy fix + two content improvements.
  62 pages (up from 61: Red Sauna Robe).

  **The big one: MeowDB item icon CDN.** Discovered
  meowdb.com/msclassic serves CoT-accurate item icons keyed
  directly on canonical WZ IDs. maplestory.io's GMS/83 sprites
  are inaccurate for a significant chunk of items that were
  reskinned in Classic World (Blue Sauna Robe rendered as a
  green mage overall on maplestory.io - it's actually a
  striped bath towel with a bow per MeowDB and the CoT client).

  Fix: swapped itemIconUrl() and itemIconRawUrl() in
  src/lib/maplestory-cdn.ts to point at
  meowdb.com/msclassic/api/assets/icons/{wzId}. Single-file
  change; DRY payoff was immediate - every item page AND
  every quest reward table (QuestLayout.astro also uses
  itemIconUrl()) inherited the fix. Verified 7 item pages
  and 4 quest chains now serve exclusively from MeowDB with
  zero maplestory.io/item references remaining. NPC + monster
  + map sprites unchanged - they were already correct.

  Design notes:
  - MeowDB has no CORS headers - fine for <img> hotlinking
    which is what we do, would need proxying for browser
    fetch() calls (we don't do those).
  - Anonymous, immutable-cache-forever, no rate limits
    observed by web-retriever recon.
  - MeowDB serves only the packed inventory icon (~1KB PNG);
    ItemLayout's existing image-rendering: pixelated CSS
    handles hero-size upscaling without blur.
  - If MeowDB 404s a specific WZ ID, we get a visible broken
    image rather than a silently-wrong sprite. Broken-visible
    beats silently-wrong.

  **Blue + Red Sauna Robe editorial cleanup:** removed all
  sprite-variance disclosures now that the source is
  authoritative. Same for Blue Umbrella's sprite-verification
  callout. Content is tighter now that the workarounds are
  obsolete.

  **Rain's Maple Quiz Series now actually answers quizzes.**
  Previously the page said 'quiz 4-6 cover topics like...' -
  useless. Each quest description's third paragraph in the
  datamine actually reveals the correct answer post-
  completion. Extracted all 7 into structured answer boxes:
  - Q1: Up arrow key (ladders)
  - Q2: Double-click (equip)
  - Q3: Equipment Inventory + double-click (unequip)
  - Q4: Multiple HP recovery methods including chairs (links
    Pio's quest for The Green Relaxer)
  - Q5: Level 10 for all 4 base classes (links each job page)
  - Q6: AP (Ability Points) for stats (links job AP guides)
  - Q7: Head to Southperry for the Victoria Island ferry
  Added 'Note for CoT 2 players' callout noting these are
  pulled from CoT datamine and may differ from v83.

  **Red Sauna Robe (1051004) shipped as its own page.**
  Female-character variant of the Sleepywood chain payoff.
  Statistically identical to Blue (1050010) - +1 all stats,
  +75 PDD, +10 MHP/MMP, 10 slots, 1.5x sauna recovery.
  Bidirectional cross-links with Blue Sauna Robe.

  **Sleepywood chain reward structure updated:** was
  'Blue OR Red' as one merged reward entry, now separate
  entries for each gender-locked variant. Red Sauna Robe's
  Awarded-by section auto-populated as a result.

  Page count: 61 -> 62. Pagefind index: 3,820 words.
- **2026-08-24** - **Sprint round 6: Maple Island completion (Sam / Mai / Biggs / Pio / Rain).**
  55 -> 61 pages. Six new quest pages closing out Maple
  Island's tutorial coverage. Every discovered Maple Island
  quest (IDs 1000-1019) is now documented on the site.

  **Newly shipped:**
  1. Sam's Suggestion (1006) - L1 bridge quest pointing new
     players from static NPCs to the training trio.
  2. Mai's Training (1009) - L3 chain step 1/2, first-lesson
     combat tutorial.
  3. Mai's Final Training (1010) - L3 chain step 2/2,
     graduation from Amherst's most-developed training arc.
  4. Biggs's Collection of Items (1011) - L3 Southperry
     quest awarding random dagger (Fruit Knife 1332001 OR
     Razor 1332000) - your FIRST REAL WEAPON on Maple Island.
  5. Pio's Collecting Recycled Goods (1012) - L5 quest
     awarding The Green Relaxer (chair 3010000) - the first
     chair most players ever get. Editorial explains chair
     mechanics + AFK recovery.
  6. Rain's Maple Quiz Series (1013-1019) - 7-part quiz
     canonical article. Each quiz drills a core UI mechanic
     (ladder controls, equipping, inventory). Quiz 7 is the
     official Amherst -> Victoria Island graduation.

  **NPC footgun documentation update:** discovered Sam's
  canonical WZ ID (2005) 404s on the render endpoint - same
  behavior as Todd (2004 -> 9101002). Fallback pattern:
  `9101` + `(canonical - 2001)`. So Sam = 9101003. Added
  a dedicated 'Maple Island tutorial-variant IDs' section
  to docs/npc-id-lookup.md documenting the pattern.

  **Maple Island quest inventory - COMPLETE for CoT 2:**
  - 1000 Borrowing Sera's Mirror 
  - 1001 Bringing Mirror to Heena 
  - 1002 Roger's Apple 
  - 1003 What Sen wants to eat 
  - 1004 Returning to Nina 
  - 1005 Todd's How-to-Hunt 
  - 1006 Sam's Suggestion  NEW
  - 1007 Letter for Lucas 
  - 1008 Lucas's Reply 
  - 1009 Mai's Training  NEW
  - 1010 Mai's Final Training  NEW
  - 1011 Biggs's Collection of Items  NEW
  - 1012 Pio's Collecting Recycled Goods  NEW
  - 1013-1019 Rain's Maple Quiz Series  NEW (canonical)

  Total Maple Island coverage: 19/19 discovered quests
  documented across 14 quest articles. Any Maple Island
  quest that later appears in the datamine will be additive.

  Page count: 55 -> 61. Pagefind index: 3,781 words.
- **2026-08-24** - **Sprint round 5: Ronnie House chain + Maria/Lucas + drop-table gap-fill.**
  46 -> 55 pages. Nine new pages: 3 quests + 6 items. Focused
  on filling drop tables and completing chain siblings.

  **Ronnie's House-Building chain (4 quests, L41):** direct
  thematic follow-up to Sleepywood - Ronnie moves to Ellinia
  fairy forest, calls on the hero one more time to help build
  homes for baby fairies. Shipped as ONE canonical article
  (chainStep 4) with all 4 tiers in editorial. Iconic payoff:
  guaranteed <strong>Shoes Speed Scroll (Intermediate) + Shoes
  Speed Scroll (Greater)</strong> at the final tier. Also
  awards 120 Blue Potions across the chain - meaningful haul
  for Magicians.

  **Maria/Lucas chain (2 quests, L2 Maple Island):** the
  third and final Maple Island messenger chain. Sibling to
  Sera's Mirror (item delivery + return) and Nina/Sen
  (information delivery + return); this one is item delivery
  + REPLY return. Step 2 awards a random pick from SEVEN
  Level 5 cosmetic hats (Brown/Green Skullcap, Red/Black/
  Green/Yellow/Blue Headband). Maple Island now has all
  three tutorial delivery patterns fully documented.

  **New items (6):**
  1. Diamond (4020107) - fixes the previously-broken
     reference from Sleepywood chain step 6. Includes an
     important QA note: Diamond and Diamond Ore are
     DIFFERENT items (finished gem vs crafting ore). Caught
     this during cross-link verification.
  2. Elixir (2000004) - 35% HP+MP restore with cooldown,
     the mid-tier emergency reset.
  3. Return Scroll - Nearest Town (2030000) - fundamental
     QOL consumable, enumerates all 6 town-specific variants.
  4. Shoes Speed Scroll: Intermediate (2040705) - +2 Speed
     at 60% success, from Ronnie chain finale.
  5. Shoes Speed Scroll: Greater (2040706) - +3 Speed at
     10% success (brutal). Editorial covers when to use
     Greater vs stick with Intermediate.
  6. Steel Nordic Helm (1002139) - L40 hat, one of 18 tier-5
     variants from Cursed Doll chain. This page carries the
     canonical enumeration of all 18 hat variants (Nordic
     Helm 3, Guiltian 5, Distinction 5, Pilfer 5).

  **QA fix:** during verification I caught a data error I'd
  written into Diamond's initial editorial - claimed the
  Cursed Doll chain awards Diamond. It actually awards
  Diamond ORE, which is a distinct item. Fixed inline plus
  added a 'Diamond vs Diamond Ore' clarification block to
  prevent future confusion. Cross-referenced Sleepywood
  chain step 6 to explicitly call out the correct WZ ID
  (4020107, not 4020007).

  **Cross-link web additions:**
  - Sleepywood chain -> Diamond (inline in step 6 + relatedGuides)
  - Cursed Doll chain -> Steel Nordic Helm (as structured tier-5 reward)
  - Cursed Doll chain -> Diamond (inline in tier-3 discussion)
  - Old Wisconsin -> Steel Nordic Helm (sibling L40 hats)
  - All 6 new items got auto-populated Awarded-by sections
    where applicable

  Page count: 46 -> 55. Pagefind index: 3,603 words.
- **2026-08-24** - **Sprint round 4: Sleepywood chain + Sauna Robe + job-page revamp + HPQ verdict.**
  Two new pages (44 -> 46), but the real story is that all 4
  job pages got a comprehensive upgrade wiring them into the
  item + quest database. This session finally connects the
  editorial job guides to the reference database as a coherent
  reading experience.

  **HPQ verdict:** Not in the CoT 2 datamine. Searched every
  quest by name (Henesys, Growlie, Moon Bunny, Bunny, Hen) and
  by description keyword. The only match was Maya's solo quest
  (10106). Classic World appears to have cut HPQ - or renamed
  it to something that doesn't match any HPQ-adjacent tokens.
  Same result for LPQ (Ludibrium PQ) and Orbis PQ. KPQ remains
  the only party quest surfaced in the datamine. Queued to
  re-scan when the datamine updates.

  **Sleepywood Sauna Robe chain (9 quests, L32):** the
  legendary cross-continental fetch chain. Ships as ONE
  canonical article (chainStep 9) with the full 9-step
  editorial walkthrough. Chain: Wetbottom (Sleepywood VIP
  Sauna) -> Ronnie (Ellinia tree tunnel) -> Rina (Henesys)
  -> Rowen (Ellinia) -> back to Ronnie -> Wetbottom. Payoff:
  Blue/Red Sauna Robe (gender-locked), L30 Overall with +1
  STR/DEX/INT/LUK, +75 PDD, +10 MHP, +10 MMP, 10 slots, and
  a cute 1.5x recovery bonus when worn inside the Sleepywood
  VIP Sauna map itself.

  **Blue Sauna Robe item page:** flagship Overall for the L30
  bracket. Reverse-links auto-populated from the chain's
  itemSlug. Female-variant Red Sauna Robe stats documented
  inline (same stats, different sprite).

  **Job page revamp - AP allocation:** all 4 job pages now
  have a full 'Common AP mistakes' HTML callout covering:
  don't waste AP on HP/MP, don't invest in wrong stats,
  watch equipment stat gates, and reset scrolls exist but
  cost mesos. Also added a 'Milestone check at L30' build
  entry showing target primary/secondary stats at
  second-job time for both build variants.

  **Job page revamp - Equipment progression:** all 4 job
  pages had their armor progression rewritten with inline
  <a> links to actual item pages we've built. Each class
  now has 6-8 progression bullets instead of 3-4, keyed to:
  L17+ (Old Wisconsin), L18 (Alex chain -> Weighted
  Earrings), L20-27 (KPQ scroll investment path), L30
  milestone Overall (Blue Sauna Robe), and L36+ (Cursed
  Doll gloves scrolls). Every quest chain we've documented
  is now discoverable from the job pages, not just the
  quest directory.

  **Cross-link web now nearly complete for the L1-40 range.**
  A reader landing on any job page can now trace the
  optimal quest/item pipeline for their class end-to-end
  through embedded links, with no external context needed.

  Docs: added 3 new NPC WZ IDs to the lookup table
  (Wetbottom 1061003, Ronnie 1061004, Rina 1010100).

  Page count: 44 -> 46. Pagefind index: 3,381 words.
- **2026-08-23** - **Content sprint round 2: Alex chain + Nina/Sen chain + 4 items.**
  35 -> 44 pages in one pass. Two new complete quest chains,
  four new item pages, all wired bidirectionally.

  **Alex and Chief Stan reconciliation chain** (level 18,
  Kerning City -> Henesys -> Kerning). Three quests wired
  with proper nextQuest + prerequisiteQuest chain metadata:
  Alex's Request (10300) -> Talking to Stan (10301) ->
  Mother's Gold Watch (10302). Iconic v83 story content -
  no combat, all narrative, ends with an emotional NPC beat
  and a Level 20 earring as tangible payoff. The Weighted
  Earrings drop is deliberately timed to arrive before KPQ
  eligibility (level 21), giving players their first
  slot-bearing earring right before they start farming
  Intermediate scroll upgrades. That's Classic World's
  intended reward flow, and now it's readable end-to-end
  on the guide.

  **Nina and Sen's Dinner chain** (Maple Island, level 1).
  Two-quest tutorial chain teaching the "visit NPC B, return
  to NPC A" pattern. Sibling to Sera's Mirror (which teaches
  the same pattern with a physical item, not just
  information). Between the two chains, Maple Island's
  quest tutorial coverage is now much more complete -
  readers see both variants of the delivery pattern before
  leaving the island.

  **New items:** Blue Potion (2000003, +200 MP restore, the
  mid-tier mana staple), Weighted Earrings (1032002, L20
  earring with 5 slots that pairs perfectly with the KPQ
  scroll ecosystem), Gloves Attack Scroll: Intermediate
  (2040801, +2 WATT at 60% success), Gloves Magic Attack
  Scroll: Intermediate (2040805, +4 MATT at 60% success -
  notice the +4 vs the WATT scroll's +2, a genuine MapleStory
  systemic quirk). All 4 items get their 'Awarded by'
  sections auto-populated by the reverse-lookup pipeline.

  **Cross-link web audit:** every new item and quest has its
  bidirectional linkage verified in the built HTML. Also
  backfilled the Cursed Doll chain's structured rewards to
  include both gloves scrolls (they were only in prose
  before, meaning the scrolls' Awarded-by section wouldn't
  have auto-populated - fixed by adding structured reward
  entries with itemSlug). And the KPQ quest now cross-links
  to the Alex chain + Weighted Earrings as suggested
  chain-companion content.

  NPC WZ IDs added to the docs footgun table: Alex 1052000
  (Kerning), Chief Stan 1012003 (Henesys), Nina 2102 (Maple
  Island 21xx block), Sen 2001 (Maple Island 200x block).
  All 4 confirmed HTTP 200 on maplestory.io sprite endpoint.

  Page count: 35 -> 44. Pagefind reindex pending.
- **2026-08-23** - **Content sprint: Cursed Doll chain + 5 item pages + KPQ QA fixes.**
  Grew the reference database from 29 to 35 pages. Also caught
  two datamine-vs-editorial discrepancies during the pass.

  New quest: **Rowen's Cursed Doll Chain** (Ellinia, level 36+,
  Rowen the Fairy). Not a PQ - it's a five-tier solo collection
  chain grinding Zombie Lupins for 50/70/100/150/200 Cursed
  Dolls, tier-by-tier trading up from crafting ore -> gem ore ->
  precious ore -> Intermediate gloves scroll -> random level 40
  hat. Ships as ONE canonical quest article (chainStep 5) with
  editorial covering all five tiers, because breaking it into
  five near-identical files would be a DRY nightmare with zero
  reader benefit. NPC sprite (Rowen WZ 1032101) confirmed live.

  New items: **Old Wisconsin** (1002053, level 17 hat with a
  Fame gate at 10 POP, reward from the Cursed Doll chain tier
  5) - documented the Fame requirement explicitly in editorial
  since our current statReq schema doesn't carry Fame. And all
  **four Earring Stat Scrolls: Intermediate** (STR 2040301,
  DEX 2040305, INT 2040309, LUK 2040313) with per-class
  editorial pitched at the audience for each stat.

  Cross-link web now bidirectional across the board: FTT's
  reward table links to the 4 scroll pages via itemSlug; the
  scroll pages auto-generate 'Awarded by' pointing at FTT via
  the reverse-lookup we built earlier. Cursed Doll chain links
  to Old Wisconsin; Old Wisconsin links back. Every new item
  card themed to match the class most likely to use it (Perion
  orange for STR, Henesys pink for DEX, Ellinia green for INT,
  Kerning lavender for LUK).

  **QA fixes caught in the datamine cross-check:**
  1. Kerning PQ file said 40% scroll success rate. Datamine says
     60% (Intermediate tier). Corrected in editorial + rewards.
  2. Ribboned Pig Headband file said level 15, no stats.
     Datamine says level 27, +26 PDD, +7 MMP, +2 ACC, 7 slots,
     1600 mesos. All backfilled - v83 sources had the level
     wrong; this is a Classic World rebalance, not our error.

  Page count: 29 -> 35. Pagefind reindexed at 3,585 words.
- **2026-08-23** - **Sitemap integration + first Party Quest seeded.**
  Two "broken -> unbroken" wins in one pass. First: added
  `@astrojs/sitemap` integration - the aspirational `Sitemap:`
  line in `public/robots.txt` is now real, `dist/sitemap-index.xml`
  emits automatically on every build, and canonical URLs land in
  the sitemap using the `site` from astro.config.mjs. Search
  engines now have a complete map of all 29 pages the moment we
  deploy. Second: seeded the first real Party Quest at
  `/quests/first-time-together` (Kerning City PQ / KPQ, renamed
  in CoT 2 to "First Time Together") - `/party-quests` no longer
  shows the empty state. Datamine surfacing revealed Classic
  World changed the earring stat scroll reward mechanic:
  Intermediate scrolls (STR/DEX/INT/LUK) are now PQ rewards
  instead of the rare boss drops they were in v83. Editorial
  callout on the quest page explains all three names (KPQ /
  Proof of Companionship / First Time Together) point at the
  same 4-player, level 21+, King Slime encounter. Lakelis WZ ID
  9020000 confirmed working on maplestory.io CDN; all 4 earring
  scroll sprites (item IDs 2040301, 2040305, 2040309, 2040313)
  render inline on the reward table. Page count: 28 -> 29.
- **2026-08-23** - **Cloudflare Pages deploy prep + canonical URLs + OG cards.**
  Site is ready to ship. `astro.config.mjs` gained the canonical
  `site` URL. `BaseLayout` now emits per-page `<link rel="canonical">`
  built from `Astro.site + Astro.url.pathname` (verified across
  homepage, quest pages, and class pages). Also gained Open Graph
  metadata (`og:type`, `og:title`, `og:description`, `og:url`,
  `og:site_name`) and a `twitter:card summary` for polished
  link-preview cards in Discord and Twitter shares.
  Deploy runbook shipped at `DEPLOY.md` - covers pushing to
  GitHub, connecting Cloudflare Pages, the exact build settings
  and env vars, custom domain setup, rolling deploys, one-click
  rollback, and a troubleshooting section covering the three
  failure modes we're most likely to hit. `.nvmrc` pins Node 22
  (matches `package.json` engines) so Cloudflare's build env
  picks the right runtime automatically. `public/_headers` ships
  Cloudflare-native cache policy (immutable for /_astro/ and
  /pagefind/ hashed assets, short + revalidate for HTML,
  X-Content-Type-Options + Referrer-Policy + Permissions-Policy
  as free security defaults). `public/robots.txt` allow-all
  crawl policy with sitemap pointer (aspirational until we add
  @astrojs/sitemap - line is harmless today).
- **2026-08-23** - **Static full-text search shipped.**
  The header search input finally does something. Pagefind
  (https://pagefind.app) runs as a post-build step in
  `npm run build`, scans every `data-pagefind-body`-marked page
  in `dist/`, and emits a static search index + UI runtime at
  `dist/pagefind/`. Result: 28 pages indexed, 2,861 words, no
  server required, no telemetry, nothing the reader types goes
  anywhere. Client-side WASM + web worker query the pre-built
  index in the browser. Header form submits `?q=<query>` to a
  new `/search` page that pre-populates the Pagefind widget with
  the initial query so results appear immediately on arrival.
  `<main>` in BaseLayout got the `data-pagefind-body` marker so
  navigation/footer/announcement noise is excluded from the index
  (only actual page content is searchable). Includes a friendly
  dev-mode warning explaining why /pagefind/* 404s during
  `astro dev` (Pagefind only runs after production builds) with
  the exact commands to preview locally. Page count: 27 -> 28.
- **2026-08-23** - **Phase 2b shipped: identity-at-a-glance cards on every class overview.**
  Each class page now leads with a structured 7-field summary
  card ABOVE the prose paragraphs: Primary stat, Secondary stat,
  Damage type, Weapon families, Health profile, Mobility profile,
  Play style. Two-column grid on desktop, single column on mobile,
  play-style row spans full width. A curious player learns what a
  class IS in 5 seconds instead of 30 seconds of prose-scanning.
  Schema: optional `identity` object on `overview` (seven required
  string fields when present). Layout: aside block with dl/dt/dd
  markup (semantic AND scan-readable). CSS: bordered card in the
  class theme's accent color - Perion orange for Warrior, Ellinia
  green for Magician, Henesys pink for Bowman, Kerning lavender
  for Thief - so each page's identity card feels theme-native
  without any per-theme CSS override. Zero JS. All 4 class pages
  now have honest, punchy identity content (STR/DEX Warrior with
  low early mobility, LUK Thief with highest mobility in the game,
  INT Magician whose MP effectively IS their HP pool via Magic
  Guard, DEX Bowman whose mobility IS range).
- **2026-08-23** - **Phase 2 shipped: expandable second-job branch cards with per-branch skill previews.**
  Every second-job branch card across all 4 class pages is now a
  native HTML `<details>` element - click the card to expand a
  "Signature skills" preview showing 4 hand-picked skills with
  CoT 2 icons, name, and one-line editorial summary per skill.
  10 branches x 4 skills = 40 new skill previews shipped this pass,
  each with a canonical CoT 2 skill ID pulled from
  osmsdataexplorer.com's skills.json (Warrior's Rage/Rush/Threaten/
  Iron Will, Magician's Heal/Fire Arrow/Cold Beam/Teleport,
  Bowman's Arrow Bomb/Iron Arrow/Soul Arrow, Thief's Steal/Savage
  Blow/Critical Throw/Haste, etc.). Zero JS added - the disclosure
  UI is 100% native HTML, keyboard-accessible, screen-reader-
  friendly, and works without hydration. Schema addition:
  `previewSkills` array on `secondJobBranch` (optional so branches
  without authored preview data still render as static cards).
  Global CSS gained one new block for `.branch-card--expandable`,
  the disclosure hint pill, and the `.branch-preview-skills` list.
- **2026-08-23** - **NPC sprites in quest heros + item sprites on every reward + chain step 2 seeded.**
  Quest schema gains `npcId` (canonical GMS/83 WZ ID, NOT the ohmi
  ordinal - important footgun documented in `docs/npc-id-lookup.md`
  with the confirmed lookup table). `QuestLayout` now renders the
  NPC as a 96px sprite panel on the left of the hero with the NPC
  name captioned below (matches the ItemLayout image-forward
  pattern). Reward schema gains `itemId` so item rewards render
  sprites even without a full item-collection page (e.g. Estelle's
  Special Sauce's 15x Lemon reward now shows the Lemon sprite
  inline even though we haven't authored a Lemon item entry).
  Reward icon resolution is centralized in one helper with clear
  precedence: itemSlug -> itemId -> no icon. All 8 existing quests
  backfilled with correct WZ IDs; new bringing-mirror-to-heena
  quest seeded to complete Sera's Mirror chain (nextQuest link on
  step 1 finally resolves). Two known-broken CDN entries handled
  gracefully: Todd 2004 -> 9101002 tutorial variant; Estelle 1032105
  omitted entirely (only listed ID and it 404s, likely needs
  manual extraction from CoT 2 client). Page count: 26 -> 27.
- **2026-08-23** - **Phase 1 of player-journey rewire: nav, PQ split, item<->quest cross-links.**
  Top-nav gets three real links where there was one `#` placeholder:
  `Quests` (was `Quests & PQs`), `Party Quests` (its own section),
  and `Items` (was invisible). Party Quests is a separate directory
  route at `/party-quests` that filters the same quests collection
  by `party-quest` category - one collection, two doorways (DRY).
  The `/quests` directory now GROUPS by category in reader-first
  order: Tutorial -> Story -> Advancement -> Area -> Crafting ->
  Citizenship -> Unique-Reward -> Seasonal. Each section gets a
  human label + short lede so a new player sees the natural
  progression instead of an alpha-sorted wall.
  Quest schema gained two categories (`tutorial`, `unique-reward`)
  and one crown-jewel field: `itemSlug` on quest rewards. When a
  reward references an item that's already in our items collection,
  the reward renders as a sprite + name + tagline hyperlink to
  `/items/{slug}`. When it doesn't, it falls back to plain text -
  no broken links, ever. The REVERSE cross-link is computed at
  build time in `src/pages/items/[item].astro`: scan every quest
  once, find which ones list this item's slug, render an
  "Awarded by" section on the item page. Reader sees a reward
  they're curious about -> clicks -> lands on the item page ->
  sees every quest that awards it. Full loop closed.
  Seeded 4 new quests demonstrating each new pattern:
  Borrowing Sera's Mirror (tutorial), Roger's Apple (tutorial),
  Todd's How-to-Hunt (tutorial), and Estelle's Special Sauce
  (unique-reward) - the last one wires the itemSlug demo with
  a new Ribboned Pig Headband item entry. That's the canonical
  "reward-worth-it" example.  Page count: 20 -> 26.
- **2026-08-23** - **CoT 2 rewire: sources, guides, quests bootstrap.**
  New `osmsdataexplorer` source entry in sources.ts (classified
  `closed-test-info` since it's data extracted from the CoT 2
  client - published Aug 11 2026, patch 321d2f36). Crafting guide
  now has a "Your first craft in each discipline" table showing
  actual CoT 2 first-recipe data per profession (Metal Koif at
  1,000 mesos for Smithing, Steel Pipe at 1,500 for Weaponcrafting,
  Red Bandana for Tailoring, etc.) with ingredient breakdowns and
  craft-EXP values pulled verbatim from the datamine - plus
  editorial observations about why the arrow recipe is the Mastery
  outlier and why Arcforge is an expensive first pick.
  Citizenship guide picks up osmsdataexplorer as a cross-verifier.
  All FOUR class guides upgraded from `historical-archive` to
  `closed-test-info` verification (skill lists + IDs + icons are
  now CoT 2-verified; stat NUMBERS still v83 baseline pending
  Founder's Access). Warrior guide gained a 6th skill entry:
  `Precise Strikes` (1000002), a passive Accuracy + Critical
  Rate boost that CoT 2 added and old v83 guides don't mention.
  Bowman guide had `Blessing of Amazon` REMOVED (cut from CoT 2)
  and `Power Knockback` (3001003) added in its slot - a crit-
  guaranteed AoE knockback that's a legitimate mob-training tool.
  New `quests` content collection: schema + `QuestLayout.astro`
  (chain-aware hero: "Step 1 of 4 - The Warrior's Next Journey")
  + `[quest].astro` route + `/quests` directory. Seeded with the
  four second-job advancement trigger quests (20000, 20100, 20200,
  20300), one per class, each themed to its class's home town
  (Perion, Ellinia, Henesys, Kerning). Every field on every seed
  quest is CoT 2 datamine-verified except the editorial commentary
  we author. Page count: 15 -> 20.
- **2026-08-23** - **Skill icons on all four class guides.**
  Every first-job skill row on `/jobs/warrior`, `/jobs/magician`,
  `/jobs/bowman`, and `/jobs/thief` now shows the canonical
  MapleStory skill icon inline with the name (22 icons total).
  Icons are sourced from ohmi69's Classic World CoT 2 datamine
  (`osmsdataexplorer.com/data/current/images/skills/{id}.png`),
  identified via web-retriever agent when maplestory.io turned
  out to not publicly serve skill icons at all. `skillId` added
  as an optional string field on `skillEntry` in the schema so
  retrofit is incremental (rows without an ID render text-only,
  no breakage). `skillIconUrl(id: string)` added to
  `src/lib/maplestory-cdn.ts` under a new osmsdataexplorer.com
  section - CDN abstraction now spans two sources (maplestory.io
  for items/mobs/NPCs/maps, osmsdataexplorer.com for skills).
  Bowman intentionally has 5 of 6 skill icons because CoT 2
  dropped Blessing of Amazon - the row stays with its v83 name
  for historical accuracy, just no icon. Also spotted several
  other CoT 2 vs v83 skill changes worth a future content pass
  (Warriors gain "Precise Strikes" as a 6th 1st-job skill,
  Archers gained "Power Knockback", some skills renamed).
  Global.css picks up `.skill-name-cell` and `.skill-icon` rules
  with `image-rendering: pixelated` to preserve sprite crispness.
- **2026-08-23** - **Phase 4a shipped: items reference database.**
  New `items` content collection with rich zod schema (identity,
  requirements, combat + bonus stats, economy, editorial, cross-
  links, verification, theme). Sprites served by
  [maplestory.io](https://maplestory.io) via a `wzId` per entry -
  no self-hosted assets. All CDN URL construction goes through
  `src/lib/maplestory-cdn.ts` (five typed exports: itemIconUrl,
  itemIconRawUrl, monsterRenderUrl, npcRenderUrl, mapRenderUrl,
  plus a shared `assertValidWzId` guard). If the CDN ever goes
  stale or we need self-hosted assets, that one file is the pivot
  point. New `ItemLayout.astro` renders image-forward hero, hides
  empty stat sections cleanly (so a consumable's item page isn't
  polluted with "attack: 0" placeholders), and an "Liven's take"
  editorial block is the mandatory beating heart of every entry.
  New `[item].astro` dynamic route + `/items` directory page.
  Seeded with five items covering all three shape variants:
  White Potion (consumable), Sword (weapon, Warrior), Blue
  Umbrella (weapon, joke-tier gag), Wooden Wand (weapon,
  Magician), Pilgrim's Hat (armor). Every entry cites v83
  historical archives with `historical-archive` verification
  badges and honest "exact values await Classic World" notes
  where numbers weren't safely lookupable. Page count: 9 -> 15.
- **2026-08-23** - Real Ellinia scenic background landed (2.52
  MB PNG). Canonical treetop-city vibe: multi-level tree houses
  connected by rope bridges with warm-lit windows, waterfalls
  cascading in the misty distance, hanging lantern vines, a
  purple magic warp portal set into the largest tree, cyan-teal
  atmospheric palette with a cream-yellow sky glow at the top.
  Cream scrim (fades to --surface-card cream-leaf) so light
  cards blend into the misty ground area without harsh edges.
  CSS decoration overlays disabled since the image has plenty
  of baked-in detail. **ALL SIX TOWN THEMES ARE NOW FULLY
  POLISHED** - Henesys, Perion, Lith, Ellinia, Kerning,
  Sleepywood each have palette + themed cursors + scenic
  background. Only BGM remains outstanding (Ellinia, Kerning,
  Sleepywood need `.wav` tracks; Henesys, Perion, Lith already
  have them).
- **2026-08-23** - Sleepywood theme polished from scratch (was
  the last stub). Wired the Whispering Willow Path scenic
  background (2.28 MB PNG) - dark blue-teal misty forest,
  massive old-growth trees, wooden rope-bridge path, moss-
  covered treehouse with warm window lights, glowing lanterns,
  small blue waterfall pond, purple mushrooms. Palette retuned
  from the earlier warm-brown-earthy stub to actually match the
  image: cool blue-teal backgrounds, dark mossy surfaces, soft
  mint text, mossy green primary accent, warm lantern-gold
  secondary (for callouts), mushroom-pink blossom. Themed
  cursors: `point.cur` default plus `point_diagonal_green.cur`
  for interactives (subtle green pointer, distinct from
  Ellinia's leaf + horizontal-green combo). No page uses the
  Sleepywood theme yet - purely infrastructure for future
  content. Correction: the image I had previously wired as
  ellinia-background was actually a Sleepywood scene; reverted
  ellinia.css back to palette-plus-cursor state and awaiting
  the real Ellinia image.
- **2026-08-22** - **BIG REFACTOR: all four class guides
  migrated into a proper `jobs` content collection.** Every
  section of every job page now comes from fully-structured
  frontmatter validated by zod - the layout template
  (`src/layouts/JobGuideLayout.astro`) is the sole authority on
  what a job guide looks like. Deleted 4 hand-authored .astro
  files (warrior/magician/bowman/thief) plus `src/data/jobs.ts`;
  added 4 .md content-collection entries, one shared layout,
  one dynamic route (`src/pages/jobs/[job].astro`), simplified
  `JobCard` to take direct props. Net line-count: ~1635 lines
  before → ~1165 lines after (about 470 lines eliminated), but
  the bigger win is that adding a fifth class is now a single
  .md drop-in and changing the section shape (say, adding a
  "third job preview" section) updates all four guides at once.
  Homepage and /jobs directory both source from the collection,
  sorted by frontmatter `listOrder` so the canonical Warrior->
  Magician->Bowman->Thief order is preserved. Extracted the
  `verificationStatus` and `theme` enums to consts inside
  content.config.ts for reuse across both collections (guides
  and jobs). Every URL preserved; every guide re-verified
  against its old .astro source before deletion.
- **2026-08-22** - Phase 3 COMPLETE. Formal Astro content
  collections (`src/content.config.ts`) with a rich schema:
  layout/theme/verification/sources/toc/benefits all live in
  frontmatter. New guides become a single .md drop-in, rendered
  by `src/pages/[slug].astro`. Extracted the confirmed-benefits
  section to a reusable `BenefitGrid.astro` component driven by
  the frontmatter `benefits:` field. Retired the citizenship.astro
  and crafting.astro wrapper files (~230 lines of plumbing gone).
  Both existing guide URLs preserved via root-level dynamic route
  (`/citizenship`, `/crafting` unchanged - Astro's routing rule
  "static beats dynamic" leaves the other root pages alone).
