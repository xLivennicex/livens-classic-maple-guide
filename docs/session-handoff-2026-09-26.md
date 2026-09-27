# Session Handoff — 2026-09-26

**Author:** CerberOS (code-puppy-022dab) · Liven's session
**Purpose:** Full context dump so we can pick up cleanly after a restart. Read this file first when we resume.

---

## TL;DR of this session

**One long session (labeled Sprint 99), 8 commits, all shipped to production.** Themes were UX polish, content cross-linking, and roadmap hygiene:

1. **Calculators hub** at `/calculators/` — collapsed 4 nav links into 1
2. **Hostname bug fix** — every OG image / canonical URL was pointing at a DNS-dead hostname (`livens-classic-maple-guide.pages.dev`, note the `-guide`). Real hostname is `livens-classic-maple.pages.dev`. Broke every Discord / Twitter / iMessage link preview. **FIXED.**
3. **Illustrated 404 page** — dropped 3-mob sprite trio, added a hand-drawn hero (`/images/404-hero.jpg`, 447 KB JPEG). Set as page's own og:image so broken shared links show themed art
4. **Hero-copy halo** — site-wide CSS fix: qa-kitten flagged hero `.lede` paragraphs dissolving into autumn backdrops. Added zero-specificity dual-layer text-shadow via `:where()`, mirroring the existing `--brand-halo` treatment on the logo
5. **ROADMAP.md refresh** — Current Status section was 60+ sprints behind reality (still listed "deploy the site" as pending!). Rewrote to only track genuinely-open items, added a "Last audited" timestamp and editing convention
6. **Citizenship guide cross-links** — 0 → 18 `/quests/` deep links. Rewrote Story Quests section to surface the 88-quest 506xxx block architecture (Henesys 506000-506045 mirror Kerning 506100-506141)
7. **Crafting guide cross-links** — 0 → 2 internal deep links. Callout linking the two existing quest editorials (`crafting-apprentices-in-need-of-help`, `crafting-masters-graduation`) that were sitting unused. Also killed the roadmap's "crafting.json (93KB)" fiction — no such file exists

**All 8 commits live** at `https://livens-classic-maple.pages.dev/` via deploy hash `5544c77d`.

Last 8 commits on `main`:
```
40c868c Citizenship + crafting guides: cross-link datamine quests (MVP pass)
931f0a7 ROADMAP: refresh Current Status (was 60+ sprints behind reality)
afbf4c1 Halo hero copy over scenic backdrops (fixes autumn-lede legibility)
5c4baea 404 page: illustrated hero + themed og:image for broken-link shares
70cb827 Fix production hostname: og:image + canonical point at DNS-resolving URL
e9ec20a /calculators hub + collapse 4 nav links into single hub entry
17762d1 Surface folded quest drops on /mobs/{id} + extract mob-drops.ts
0cc30d3 Canonicalize internal mob links: 13 broken links -> 0
```

---

##  CRITICAL — READ THIS BEFORE ANYTHING ELSE

**Deploys are MANUAL. `git push` does NOT deploy.**

This project is set up per **DEPLOY.md's "Path A: Wrangler CLI"**, not the GitHub-connected auto-deploy path. Every session that ships live work MUST end with:

```powershell
npm run deploy
```

Which under the hood runs:
```
npm run build && wrangler pages deploy dist --project-name=livens-classic-maple --branch=master --commit-dirty=true
```

**Symptoms of forgetting this** (what tripped us up tonight):
- Git commits push to GitHub successfully (`git push origin main` works, GitHub shows the commits)
- BUT the live site continues serving the OLD version
- `/calculators/` returns 404 on prod even though the local build has it
- Homepage OG tags still show pre-fix URLs
- You spend 45 minutes convinced Cloudflare Pages is "stuck"

**Why the confusion is easy to fall into:** the repo has a `.git` remote pointing at GitHub (`https://github.com/xLivennicex/livens-classic-maple-guide.git`), so `git push` "just works" for source control / backup. But CF Pages was never wired up to auto-deploy from that repo — it's a Direct Upload project. There are NO GitHub Actions workflows either (`.github/workflows/` doesn't exist).

**How to verify a deploy actually landed:**
```powershell
# After `npm run deploy` completes, wrangler prints something like:
#    Deployment complete! Take a peek over at https://<hash>.livens-classic-maple.pages.dev
# The <hash> version is a per-deploy preview. Production alias is:
#   https://livens-classic-maple.pages.dev  (bare, no hash)
# Probe the production alias to confirm:
Invoke-WebRequest -Uri 'https://livens-classic-maple.pages.dev/calculators/' -UseBasicParsing
```

**Consider setting up GitHub auto-deploy** (DEPLOY.md Step 3) to eliminate this whole class of bug — but that's a bigger task with its own tradeoffs. Not a blocker for continuing to ship work.

---

## Sprint 99: Detailed rundown

### 1. Broken mob-link canonicalization (`0cc30d3`)

Fixed 13 broken internal links caused by the mob-dedup sprint from the previous session. `src/lib/mob-dedup.ts` established that certain mob IDs are "losers" (hollow dossiers) and get redirected to "winner" (canonical) IDs. But 13 internal editorial links still pointed at loser IDs. Fixed by search-and-replace using the `loserToWinnerMobId` Map as the source of truth.

### 2. Quest drops surfacing on `/mobs/{id}` (`17762d1`)

Mob dossier pages weren't showing quest-based drops (only monster kill drops). Extracted a `src/lib/mob-drops.ts` helper that folds quest reward drops back into the mob's drop table. Now `/mobs/9300003` (King Slime) shows both the natural Squishy Shoes drop AND the King Slime Coupon that comes from KPQ completion.

### 3. `/calculators/` hub (`e9ec20a`)

**Files:**
- `src/pages/calculators/index.astro` NEW — data-driven hub landing. The `CALCULATORS` array is the single source of truth for the "4 planning tools" copy AND the card list, so those two facts can never drift apart.
- `src/components/PrimaryNav.astro` — collapsed 4 individual calculator links into 1 hub link. Also added an `isPathActive()` helper because the old prefix-match was lighting up parent nav for unrelated nested routes (`/` matched everything, etc.). New logic: `/` strict-equal, everything else `path === href || path.startsWith(href + "/")`.

**Kitten verified:** 5/5 pass on visual QA at both desktop (1440x900) and mobile (390x844).

### 4. Hostname fix (`70cb827`)

**Root cause:** `astro.config.mjs` had `site: 'https://livens-classic-maple-guide.pages.dev'` (extra `-guide`, DNS-dead). All og:image and canonical URLs got baked with this dead hostname → every link preview scraper (Discord, Twitter, iMessage, Slack) got NXDOMAIN → no cards ever rendered for shared URLs.

**Fixed in 4 files:**
- `astro.config.mjs` (the source)
- `public/robots.txt` (sitemap URL)
- `DEPLOY.md` (documentation)
- `docs/community-plan.md` (referenced URLs)

**Verification post-deploy:** Homepage now emits `<meta property="og:image" content="https://livens-classic-maple.pages.dev/images/henesys-background.png">` — correct hostname. Link previews should work for anything shared from this deploy forward.

### 5. Illustrated 404 hero (`5c4baea`)

**Design decision:** replaced the 3-mob sprite trio + speech bubble scaffolding with a single illustrated hero. Full-page swap, not addition.

**Files:**
- `public/images/404-hero.jpg` NEW — 447 KB JPEG @ 90% quality, 1672×941 (matches sitewide theme background dimensions). Source was `B:\Downloads\404.png` (2.4 MB PNG, deleted post-conversion). Visually indistinguishable from PNG source per inspection.
- `src/pages/404.astro` — sprite trio removed, hero added, visible `<h1>` became `<h1 class="sr-only">` since title text is baked into the art, `theme="henesys"` (was "lith"), `image="/images/404-hero.jpg"` passed as prop so 404 has its own og:image.
- Guide layout for 404: `-170/+47` lines net.

**Kitten verified:** 5/5 pass on desktop + mobile.

### 6. Hero-copy halo (`afbf4c1`)

**Problem:** qa-kitten flagged during Sprint 99 that hero `<p class="lede">` paragraphs dissolved into the autumn backdrop art on mobile. Specific case: `/calculators/` mobile lede "so you can decide whether it's worth it before sinking the evening into it" visually vanished into the trees behind it.

**Root cause** (from seasons.css comment): `--autumn-scrim` gradient is intentionally transparent at the top so the moody dusk artwork reads through. That was a deliberate design choice, but starves hero copy of contrast wherever a hero sits above the parchment portion.

**Fix** in `src/styles/global.css`:
```css
:where(
    [class*="hero" i],
    .section-heading,
    .gallery-header
) :where(h1, .eyebrow, .lede) {
    text-shadow: var(--hero-halo,
        0 1px 0 rgba(255, 253, 246, 0.75),
        0 0 4px rgba(255, 253, 246, 0.55),
        0 0 10px rgba(255, 253, 246, 0.35));
}
```

- Mirrors the existing `.brand strong / small` treatment (dual-layer warm-cream halo).
- `:where()` = zero specificity → any per-page `.lede` rule wins its color/size/weight fight. Only text-shadow lands.
- `[class*="hero" i]` catches every existing hero container in one selector (`calc-hero`, `calc-hub-hero`, `hero-plate`, `jb-hero`, `launch-hero`, `hero__*`). Explicit `.section-heading` and `.gallery-header` for the two named exceptions.
- Overrideable per-theme via `--hero-halo` (mirrors `--brand-halo` pattern).

**Kitten re-verified after fix:** 5/5 pass. One flag: `.guide-hero__tagline` (used on `/jobs/warrior` hero) isn't in the selector but doesn't currently need to be — that hero renders inside a parchment panel with plenty of contrast. Extend the selector to include `.guide-hero__tagline` IF a future guide hero moves off parchment onto the seasonal art.

### 7. ROADMAP.md refresh (`931f0a7`)

**Diff:** -123 / +113 lines despite adding new items — the old section was mostly already-shipped noise.

Removed items that roadmap claimed were pending but reality showed shipped:
- Deploy the site (live for months)
- Maple Island items backfill (all in content collection)
- Items collection beyond 5 seeds (56 entries now)
- Warrior-only jobs page (4 second-job guides + dynamic route exist)
- Phase 4b Monsters collection (`/mobs/*` live, drops wired)
- BGM tracks for Kerning + Sleepywood (mp3s present)
- Wire Leveling/Tools nav (`/calculators` hub this sprint)
- Additional system guides (15 hand-authored)

Kept + verified as genuinely open:
- Ellinia BGM (only real audio hole)
- Citizenship + Crafting guide deep-dives (partially addressed in commit 8)
- Ronnie chain editorials (10206-10209)
- Maple Island tutorial editorials (1006, 1009-1014)
- Cursed Doll tier 5 hat variants (17 stubs)
- Third-job progression pages (14 of 25 covered)
- Content QA audit round 2
- WebP conversion, Pagefind upgrade, enum extraction (tech debt)

**Added convention:** "Last audited: YYYY-MM-DD" timestamp at top of Current Status section. If a future audit catches something in the "open" list that's actually done, move it to the changelog rather than leaving it to drift again.

### 8. Citizenship + Crafting cross-links (`40c868c`)

**Citizenship guide** (`src/content/guides/citizenship.md`, 23.2 → 25.6 KB, 0 → 18 `/quests/` links):

Rewrote "Citizenship Story Quests" H2 section. Key findings from datamine investigation:
- **88 quests in 506xxx block** (roadmap estimated 30+, was way low)
- **Symmetric mirror structure**: 506000-506045 for Henesys, 506100-506141 for Kerning City
- Both towns have entry quest, resident greeting pairs, donation-tier repeatables, and story arcs
- **17 donation tiers** (506019-506035, all literally titled "Donating to Henesys" — roadmap said 14, was close)

Added deep links to:
- Both town-entry quests (506000, 506100)
- 3 headline story chains, per-quest linked:
  - A Family Reunited: 506036-506040
  - After the Festival Ends / Chief Stan arc: 506041-506045
  - Jake's Trauma: 506137-506141
- Trailing callout noting `/quests/{id}` auto-dossiers exist for anything else in the block

**Crafting guide** (`src/content/guides/crafting.md`, 34.1 → 34.9 KB, 0 → 2 internal links):

Added a callout box after the 8-step Crafting Discipline flow linking to both existing walkthrough editorials that were previously unlinked from the guide:
- `/quests/crafting-apprentices-in-need-of-help` (L15 hub, all 6 masters, Kit rewards)
- `/quests/crafting-masters-graduation` (L25 finale, Catalyst rewards)

**ROADMAP correction inside same commit:** The old roadmap entry said "crafting.json (93 KB) has recipe data we're not yet surfacing." That file DOES NOT EXIST in `src/data/db/`. Rewrote the entry to reflect reality: recipe tables require a WZ-extraction pass to pull recipe metadata (ingredients, output items, success rates, catalyst effects) into a new `crafting.json` first. That's a datamine expansion project, not content authoring.

**Verified:** all 20 new links resolve to real dist pages. `audit:links` across 5,732 built pages = 0 broken.

---

## Repo architecture cheat sheet

*(inherited from 2026-09-23 handoff, still accurate)*

### Content organization

```
src/
├── content/
│   ├── guides/          <- long-form MDX guides (systems, class deep-dives)
│   ├── quests/          <- editorial quest walkthroughs (.md, slug-routed)
│   ├── items/           <- item editorials (.md)
│   ├── jobs/            <- job editorials (.md)
│   ├── blog/            <- blog posts (.md)
│   └── gallery/         <- screenshot submissions (.md)
├── data/db/             <- datamine dumps (items.json, mobs.json, quests.json, etc.)
├── pages/
│   ├── quests/[id].astro   <- dynamic route matches EITHER numeric ID OR slug from content/quests/*
│   ├── mobs/[id].astro     <- dynamic route, uses mob-dedup.ts to filter losers
│   ├── items/[id].astro    <- dynamic route, uses content collection + items.json
│   ├── calculators/        <- damage / drops / exp / mesos / index (Sprint 99)
│   └── ...
├── layouts/BaseLayout.astro  <- OG/Twitter Card metadata scaffolding
├── styles/
│   ├── global.css          <- design tokens, layout primitives, hero-halo (Sprint 99)
│   ├── seasons.css         <- autumn scrim + per-theme backdrop overrides
│   └── themes/*.css        <- per-theme (henesys, kerning, ellinia, perion, lith, sleepywood, forgotten-hollow)
└── lib/
    ├── mob-dedup.ts        <- winner/loser mob ID canonicalization
    ├── mob-drops.ts        <- fold quest drops into mob dossier tables (Sprint 99 extract)
    ├── maplestory-cdn.ts   <- sprite URL abstraction
    └── ...
```

### Key npm scripts

```
npm run dev              <- Astro dev server, hot reload
npm run build            <- Astro build + Pagefind index (~15s, produces 5732 pages)
npm run preview          <- serve dist/ locally on :4321
npm run deploy           <- BUILD + WRANGLER UPLOAD -- this is what actually ships to prod
npm run audit:links      <- crawl dist/ for broken internal links
npm run audit:sprites    <- verify sprite CDN references
npm run audit:vi         <- Victoria Island content coverage audit
npm run audit:guides     <- guide coverage completeness
```

### Deploy chain (again, for emphasis)

1. `git commit` → local history only
2. `git push origin main` → GitHub (source control, backup, code review). **DOES NOT DEPLOY.**
3. `npm run deploy` → builds locally + wrangler uploads `dist/` to CF Pages. **THIS IS THE DEPLOY.**

---

## Site content structure (mental model)

*(inherited from 2026-09-23, still accurate)*

- **Reference DBs** (auto-generated from datamine + optional per-entity editorial layer):
  - `/items/{id-or-slug}` (56 editorial entries + full items.json coverage)
  - `/mobs/{id}` (filtered through canonicalization)
  - `/npcs/{id}`
  - `/maps/{id}` (regular + `/maps/hidden`)
  - `/quests/{id-or-slug}` (90 editorial entries + full quests.json coverage — Sprint 99 confirmed this dynamic route builds pages for every datamine quest ID)
  - `/bosses/{slug}`

- **Hand-authored systems guides** at `/guides/*`:
  - Getting started, glossary, gearing-up-to-30, consumables, items-to-keep, meso-saving, party-exp, skill-changes, exp-then-vs-now, whats-new-in-cot2, plus 4 second-job guides (warrior, magician, bowman, thief)

- **Top-level system guides** NOT under `/guides/`:
  - `/citizenship/` (Sprint 99 expanded)
  - `/crafting/` (Sprint 99 expanded)

- **Interactive tools** at `/calculators/*`:
  - Hub landing + damage / drops / exp / mesos (Sprint 99 introduced hub)

- **Community features**: `/gallery`, `/hall-of-fame`, `/jukebox`, `/blog`, `/hollow` (Forgotten Hollow easter-egg region hub)

---

## Known open threads / future work

See `ROADMAP.md` "Currently open" section (refreshed this sprint, `Last audited: 2026-09-26`). High-priority items:

**Content (verified real open):**
- **Ellinia BGM** — `public/audio/ellinia.mp3` is the only audio hole
- **Ronnie House-Building chain editorials** (quests 10206-10209, L41) — datamine has them, no editorial `.md` files
- **Maple Island tutorial editorials** (quests 1006, 1009-1014) — same story
- **Cursed Doll tier 5 hat variant stubs** (17 lighter pages cross-linking to Steel Nordic Helm flagship)
- **Third-job progression pages** — covering ~14 of 25 CoT2 class entries
- **Per-chain editorial pages for Citizenship** — Sprint 99 added quest cross-links but no walkthrough content; A Family Reunited / After the Festival Ends / Jake's Trauma each deserve their own dedicated editorial page rather than more bloat in `citizenship.md`

**Tech debt:**
- **WebP conversion** of the six 2-3 MB theme background PNGs — page load + og:image weight both benefit
- **Pagefind Default UI → Component UI (v1.5+)** — modal-style search overlay + better a11y
- **`.guide-hero__tagline` selector coverage** — extend Sprint 99 hero-halo rule IF a future guide hero moves off parchment
- **`SourceType` / `verificationStatus` enum extraction** — currently duplicated in `sources.ts` and `content.config.ts`

**Deploy hygiene (Sprint 99 addition):**
- **Consider setting up GitHub-connected auto-deploy** (DEPLOY.md Step 3) to eliminate the manual `npm run deploy` step. Would eliminate the "why is prod stale" confusion class of bug. Small setup cost (~10 min), zero ongoing maintenance.

**Blocked on external input:**
- BGM composer credits
- Estelle sprite extraction (not on maplestory.io)
- PQ entry quests for HPQ/LPQ/OPQ/Ludibrium/Orbis/MCPQ — absent from datamine as of Aug 2026
- v83 unique-reward quests — bathrobe / bone helmet / skull earrings, zero CoT2 matches

---

## How to pick this back up

1. **Read this file first.** Especially the " CRITICAL" section about deploys.
2. **Read `ROADMAP.md` "Currently open" section** for the verified backlog. It was refreshed this sprint so it should be trustworthy.
3. **`git log --oneline -10`** to see recent history.
4. **Pick something from the backlog** OR ask Liven for a specific direction.
5. **When shipping:** `git add` → `git commit` → `git push` → **`npm run deploy`** (don't forget step 4!).
6. **Verify with:** `Invoke-WebRequest -Uri 'https://livens-classic-maple.pages.dev/<some-new-thing>/' -UseBasicParsing` — confirm status is 200 and content is fresh.

### Convention notes I picked up

- **Prefer replace_in_file over create_file** for edits; keep diffs 100-300 lines.
- **Cross-link internally** rather than externally where possible — every `/quests/{id}` and `/mobs/{id}` and `/items/{id}` has a page.
- **Trailing slashes matter** in the routing — probe URLs with trailing `/` to avoid 308 redirect noise in your tests.
- **qa-kitten** is available for visual QA. Use it for any hero/layout/typography change. Kitten passes at both 1440x900 desktop AND 390x844 mobile by default.
- **The `--brand-halo` / `--hero-halo` pattern** is how we solve "text over scenic backdrop" contrast. Add new halo variables to the same family if a new context needs one.
- **DRY / YAGNI / Zen of Python** — Liven cares about these. Extract shared helpers; don't add speculative selectors; simple > complex.
- **Ask before big content decisions** — Liven prefers to weigh scope before you write 30 KB of prose.

---

## Session state at time of handoff

- **Working tree:** clean
- **Local main:** `40c868c` (in sync with `origin/main`)
- **Production:** deployed via `npm run deploy` this session, hash `5544c77d`, verified live
- **Last audit run:** `npm run audit:links` returned 0 broken across 5,732 pages
- **Preview servers:** none running
- **Environment:** Windows / PowerShell / Node 22.12
- **Time of handoff:** ~2026-09-27 01:30 local

Handoff written and reviewed. Ship it. 
