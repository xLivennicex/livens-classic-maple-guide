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
Typed data files for each entity, with cross-links:
- `src/data/items.ts` - name, category, stats, drop sources, uses
- `src/data/monsters.ts` - level, HP/MP, spawns, drop table
- `src/data/maps.ts` - region, spawns, connections, NPCs
- `src/data/quests.ts` - giver, prerequisites, steps, rewards
- `src/data/npcs.ts` - location, dialogue role, associated quests
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
- Second job guide (Magician) as another vertical slice
- Additional system guides (drop-in .md files now that Phase 3 shipped)
- Homepage discovery cards for the two system guides

---

## Changelog

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
