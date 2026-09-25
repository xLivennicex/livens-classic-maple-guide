# Session Handoff — 2026-09-23

**Author:** CerberOS (code-puppy-e6aab2) · Liven's session
**Purpose:** Full context dump so we can pick up cleanly after a restart. Read this file first when we resume.

---

## TL;DR of this session

Two sprints landed and deployed to production:

1. **Mob-dossier dedup sprint** — fixed the King Slime hollow-page bug and 17 other duplicate mobs by extracting a shared dedup helper and adding CF Pages `_redirects`.
2. **Assassin guide throwing-star audit** — filled a huge gap (guide had zero star coverage), documented the big CW change (all stars are L10 required now), and wrote the honest Mushmom Ilbi grind footnote.

Both are live at `https://livens-classic-maple.pages.dev` (also visible via preview deploys — most recent is `7eea7811`). All 3 major git commits pushed to `main` on GitHub (`xLivennicex/livens-classic-maple-guide`).

Last three commits on `main`:
```
f9795ad Assassin guide: full throwing star audit + Mushmom Ilbi grind reality check
408acf5 Dedupe mob dossiers: /mobs/{loser} 301 -> canonical winner
9f27a46 Slime Shoes -> Squishy Shoes: full KPQ + King Slime datamine dive  (last session)
```

---

## Sprint 1: Mob-dossier deduplication

### The problem Liven caught

`/mobs/800019/` was a hollow King Slime page — no drop table, no spawn maps — while `/mobs/800003/` had the real dossier (Squishy Shoes, King Slime Coupon). Both pointed to the same wzId (9300003). The `/bosses/king-slime/` page picked the right one already via a `dossierRichness()` scoring function, but the mob catalog didn't.

### What the datamine showed

The CoT 2 feed exposes **17 mobs under two dossier IDs each** — one authoritative (has drops + spawn maps + quests), one hollow shadow. That's **18 dead pages** across the site. Full list:

| Mob | Loser (hollow) | Winner (canonical) |
|---|---|---|
| King Slime | 800019 | **800003** |
| Ligator | 800000 | **29** |
| Jr. Necki | 800001 | **18** |
| Curse Eye | 800002, 800012 | **31** |
| Evil Eye | 800010 | **23** |
| Zombie Mushroom | 800011 | **21** |
| Horny Mushroom | 800013 | **19** |
| Cold Eye | 800014 | **37** |
| Blue Mushroom | 800015 | **16** |
| Fire Boar | 800016 | **30** |
| Lupin | 800017 | **35** |
| Mano | 800018 | **700004** |
| Mushmom | 800020 | **700000** |
| Zombie Mushmom | 800021 | **700002** |
| Jr. Balrog | 800023 | **700001** |
| Nependeath | 39 | **1036** |
| Dark Nependeath | 42 | **1045** |

### Files touched

- **`src/lib/mob-dedup.ts`** NEW — single source of truth. Exports `mobDossierRichness()`, `winnerMobIds` Set, `loserMobIds` Set, `loserToWinnerMobId` Map, `isCanonicalMobDossier()` / `isDuplicateMobDossier()` predicates. Groups by wzId, richness = spawn maps × 3 + drops × 2 + quest refs × 1. Tiebreak on lower ID.
- **`src/lib/bosses.ts`** REFACTORED — imports `mobDossierRichness` from the new module instead of duplicating the scoring function.
- **`src/pages/mobs/[id].astro`** — `getStaticPaths` filters through `isCanonicalMobDossier`. Losers no longer generate static pages.
- **`src/pages/mobs/index.astro`** — browse table filters out losers from `indexData.mobs`.
- **`scripts/generate-mob-redirects.mjs`** NEW — reads mobs.json, writes `public/_redirects` with 301s. Managed block fenced with `# BEGIN`/`# END` sentinels. **Rerun this after `npm run db`.**
- **`public/_redirects`** NEW — 18 rules × 2 URL shapes (with and without trailing slash) = 36 redirect lines. Committed to git.

### CF Pages `_redirects` gotchas learned the hard way

Three deploys needed to land this. Future-me should know:

1. **Inline comments silently break rules.** `/from /to 301 # comment` = the WHOLE line becomes invalid. Comments MUST live on their own line. First deploy had aligned columns with trailing `# name (wz id)` comments and all 18 rules got dropped — losers 404'd instead of 301'd.
2. **Trailing-slash variants need explicit rules.** `/mobs/800019` does NOT match `/mobs/800019/`. Emit both.
3. **Destinations should include trailing slash** to match Astro's `/mobs/<id>/index.html` output. Without it, our 301 chains into Astro's own 308 canonicalization — unnecessary extra hop, worse SEO. Fixed by emitting `/mobs/<winner>/`.

### Verification (post-deploy)

All 10 spot-checked losers return proper 301 with correct `Location` header. Both `/mobs/{id}` and `/mobs/{id}/` URL shapes redirect. End-to-end curl on `/mobs/800019/` shows final 200 at `/mobs/800003/` with "Squishy Shoes" in content and **exactly 1 redirect** in the chain.

---

## Sprint 2: Assassin guide throwing-star audit

### The gap Liven caught

`src/content/guides/assassin-build.md` covered **claws exhaustively** (every tier L10-L70 with best-in-slot bolded per bracket) but had **zero throwing-star coverage**. Only mention of stars in the whole document was a hand-wave in the FAQ. Lucky Seven scales off the STAR's Weapon Attack, not the claw's PAD — this was a critical omission.

### Huge Classic World finding from the datamine

**Every throwing star in CoT 2 has `Level Required: 10`.** All 11 of them. Parsed from the `description` field on item IDs 2070000-2070010 (the `stats` block only has price/unitPrice/slotMax — reqLevel + WATK live in description text).

Compare to v83:
- Subi: v83 L15 → CW **L10**
- Ilbi: v83 L64 → CW **L10** ← 54 levels of gate removed
- Hwabi: v83 L70 → CW **L10** ← 60 levels of gate removed

**Acquisition is the new bottleneck, not level gating.** Top-tier stars still only drop from world bosses. Added as the 4th "What changed in CW" bullet alongside claw reqDEX, Sauna Robe, top/bottom scroll removal.

### The full 11-star roster (now documented in the guide)

| Star | ID | WATK | Stack | Shop | Key drops |
|---|:---:|:---:|:---:|:---:|---|
| Subi | 2070000 | +15 | 500 | 250 | Jr. Sentinel (L23), Mano (L20 boss) |
| Wolbi | 2070001 | +17 | 500 | 500 | Fire Boar/Leatty/Jr. Cellion (L32-33) |
| Snowball ⭐ | 2070008 | +17 | 800 | 500 | Fire Boar / Lupin (L32-37) |
| Mokbi | 2070002 | +19 | 700 | 1,000 | Jr. Wraith, Cold Eye, Stone Golem, Jr. Pepe |
| Wooden Top ⭐ | 2070009 | +19 | 800 | 500 | **Axe Stump (L17), Dark Axe Stump (L22)** ← early-Sin game-changer |
| Kumbi | 2070003 | +21 | 700 | 1,500 | Fire Boar, Lupin, Drake, Stone Golem, Jr. Grupin |
| Icicle ⭐ | 2070010 | +21 | 800 | 500 | Cold Eye (L40) ← already on training route |
| Tobi | 2070004 | +23 | 1,000 | 2,500 | Stone Golem, Dark Stone Golem, Wild Kargo, White Fang |
| Steely | 2070005 | +25 | 1,000 | 10,000 | Red Drake (L60), Tauromacis (L70) |
| **Ilbi** | 2070006 | +27 | 800 | 20,000 | Mushmom (L60 boss), Zombie Mushmom (L65 boss), Lycanthrope (L80) |
| **Hwabi** | 2070007 | +29 | 800 | 25,000 | Jr. Balrog (L55 boss), Zombie Mushmom (L65 boss) |

⭐ = novelty stars — match main-tier WATK but drop from way lower content. Wooden Top from L17 Axe Stumps is the single best early-Sin farm.

### Mushmom Ilbi grind reality check (Liven's specific ask)

Full grind math documented in the footnote:
- Drop rate: ~3% at v83 baseline (Nexon doesn't publish CW rates)
- Mushmom spawns: 1× per hour per channel, ~7 possible hidden streets, first-hit-wins
- Realistic solo effort: 1-3 kills per hour of active hunting
- Math: **~33 kills expected per bundle → 11-33 hours per 800 stars**
- Heavy grinders burn 800 stars per day → filling 4-6 bundle inventory is a **multi-week commitment**

Three alternative approaches documented: (1) party splits via merchant, (2) meso-for-Ilbi trades (~400-800k/bundle speculated), (3) just live with Steely (only +2 WATK gap = ~7% Lucky Seven damage delta).

Hwabi is arguably WORSE than Ilbi — both are world bosses AND Jr. Balrog is a party fight. Community wisdom: skip Hwabi. Only efficient farm is Zombie Mushmom (drops both Ilbi and Hwabi from same table).

### Files touched

- **`src/content/guides/assassin-build.md`** — 5 edits (TOC entry, 4th CW change bullet, new H2 section with 8 subsections, 2 FAQ updates, related-reading links). File is **592 lines** — one under the 600-line soft cap.

If the star section grows further (star scroll math, dedicated Ilbi hunter's guide), split into `/guides/throwing-stars.md` rather than bloating this file further.

---

## Repo architecture cheat sheet

### Tech stack
- **Astro 7.2.4** (static site generator)
- **Node ≥22.12.0** (see `.nvmrc`)
- **Pagefind** for on-site search
- **Cloudflare Pages** for hosting via **Wrangler 4.129.0**
- Content collections: markdown files in `src/content/{guides,items,mobs,quests,jobs,...}/`

### Key directories
```
src/
  content/          Markdown content (guides, items, quests, jobs, etc.)
  data/db/          Datamine JSON (mobs.json, items.json, quests.json, index.json)
  data/             Hand-curated JSON (boss-manifest.json, etc.)
  lib/              TS helpers (bosses.ts, mob-dedup.ts, maplestory-cdn.ts, region-theme.ts)
  pages/            Astro routes (index.astro, [slug].astro, mobs/, items/, quests/, bosses/, ...)
  components/       Reusable Astro components (Sprite, StatusBadge, MobHitEffect, ...)
  layouts/          BaseLayout.astro + theme system
  styles/themes/    Per-region CSS themes (kerning, perion, sleepywood, henesys, ...)
scripts/            Build + audit scripts (build-database.mjs, audit-*.mjs, generate-*.mjs)
public/             Static assets copied verbatim to dist/ (_redirects, _headers, favicon, etc.)
docs/               Meta documentation (this file, community-plan.md, npc-id-lookup.md)
```

### Data pipeline

1. **`npm run db`** → runs `scripts/build-database.mjs` which pulls from CoT 2 client datamine (osmsdataexplorer.com), maplestory.io (Mob.wz stats), and MeowDB (drop tables + sprites). Emits into `src/data/db/`.
2. **`npm run build`** → `astro build && pagefind --site dist`. Produces `dist/` for deployment.
3. **`npm run deploy`** → build + wrangler push to Cloudflare Pages.

### Package scripts
```
npm run dev                    Astro dev server
npm run build                  Static build + pagefind index
npm run preview                Preview built site on 0.0.0.0
npm run db                     Rebuild datamine JSONs
npm run db:build               db + build in one shot
npm run audit:links            Check for broken internal links
npm run audit:sprites          Check for missing mob/item sprite CDN URLs
npm run audit:vi               Check Victoria Island page cross-refs
npm run audit:guides           Check guide coverage gaps
npm run deploy                 Full build + Cloudflare Pages deploy
```

### Deployment
- **Production URL:** https://livens-classic-maple.pages.dev
- **CF project name:** `livens-classic-maple`
- **Branch:** `master` (yes, master not main on CF side — GitHub is `main`)
- **Manual deploy:** `npx wrangler pages deploy dist --project-name=livens-classic-maple --branch=master --commit-dirty=true`

### GitHub
- **Repo:** `xLivennicex/livens-classic-maple-guide`
- **Default branch:** `main`
- **Both sprints pushed** as of session end.

---

## Site content structure (mental model)

The site is a **classic MapleStory (v83-era) reference & guide** built on Nexon's Classic World datamine (CoT 2 = Closed Online Test 2 = pre-launch beta). Core content buckets:

- **Guides** (`/guides/{slug}` or top-level `/{slug}`) — long-form editorial (assassin-build, training-routes, gearing-up-to-30, crafting, citizenship, ...)
- **Jobs** (`/jobs/{slug}`) — one page per class (thief, warrior, magician, bowman)
- **Mobs** (`/mobs/{id}`) — one page per mob dossier ID from the datamine, with drops + spawn maps + quest refs. Deduped via `mob-dedup.ts` as of this session.
- **Bosses** (`/bosses/{slug}`) — editorial-slugged pages for world bosses (king-slime, mushmom, jr-balrog, ...). Uses same dedup helper.
- **Items** (`/items/{id}` or `/items/{slug}`) — one page per item, cross-referenced to mobs and quests.
- **Quests** (`/quests/{slug}`) — editorial quest walkthroughs.
- **Maps** (`/maps/{id}`) — spawn locations from the datamine.
- **World hubs** (`/world/victoria-island`, `/world/ossyria`, ...) — region-level overviews.
- **NPCs** (`/npcs/{id}`) — datamine-driven NPC pages.
- **PQs** (`/party-quests/{slug}`) — party quest walkthroughs (kerning-pq, ...).
- **Special pages** — `/hollow` easter egg, `/hall-of-fame`, `/jukebox`, `/citizenship`, `/gallery`, `/launch`, `/character` (character builder), `/calculators/*`.

### Theme system
Per-region CSS themes in `src/styles/themes/`. Each page picks a `theme` prop (kerning, perion, sleepywood, henesys, ellinia, orbis, ludibrium, victoria-generic, forgotten-hollow, ...). See `BaseLayout.astro` for the full enum.

---

## Known open threads / future work

### 1. Datamine re-run cadence
`npm run db` pulls fresh data from osmsdataexplorer + maplestory.io + MeowDB. **After every re-run, also run `node scripts/generate-mob-redirects.mjs`** to refresh `public/_redirects` in case new duplicate dossiers appear. This is deliberately NOT wired into a build hook — Liven wants redirect changes to be reviewed via git diff, not silent.

### 2. Astro sprite/CDN warnings during build
Build log shows `The collection "gallery" does not exist or is empty` — this is expected (gallery submissions are moderated via GH issues per sprint 98). Not a real error.

### 3. Assassin overall gap L40-L70
The guide notes there's no thief-locked overall between Dark Avenger (L35) and L80+ in the current datamine. Likely a datamine incompleteness (Kerning City tier gear may not have shipped in CoT 2). If new thief overalls surface in a future datamine refresh, the armor progression section needs updating.

### 4. Throwing star scroll math (potential future work)
The guide covers armor scroll math (Lesser/Intermediate/Greater/Chaos Overall LUK Scrolls) but does NOT cover throwing-star scrolls. If Liven wants that added, the item ID range is `2044xxx` (Claw Attack Scrolls / Weapon-tier scrolls). Would probably deserve its own guide (`/guides/scroll-strategy.md` or similar) rather than bloating assassin-build.md further.

### 5. Bandit / dagger branch
Guide is Assassin-specific by design. A Bandit deep-dive is called out in the FAQ as a future guide. Bandit uses STR (not LUK), daggers, Savage Blow — completely different damage curve. Would live at `src/content/guides/bandit-build.md`.

### 6. 25-DEX advancement gate uncertainty
The guide's biggest open question: whether Classic World kept the v83 25-DEX gate on Rogue advancement. Datamine can't encode NPC stat checks. Guide plans for both cases (Case A: gate exists → invest 21 AP in DEX by L10; Case B: no gate → all-LUK). **Verify at launch and update the guide accordingly.**

### 7. Drop rate percentages are v83 estimates
All grind projections (Mushmom Ilbi ~3%, hourly kills, etc.) use v83 community baseline data. Nexon doesn't publish CW rates. **Post-launch: cross-reference with community observations and update the grind footnotes if reality diverges.**

### 8. Larger sprint log
`ROADMAP.md` (~346 KB) is the running sprint log going back to sprint 1. Very long — skim recent entries only when picking up work. Sprint 98 (community screenshot gallery) was the last one before the current session's two sprints.

---

## How to pick this back up

**Fastest path to context after restart:**

1. Open the repo: `cd C:\Users\bmxhe\livens-classic-maple-guide`
2. Read this file: `docs/session-handoff-2026-09-23.md`
3. Skim recent commits: `git log --oneline -10`
4. If continuing on a specific sprint, read the relevant `src/lib/` or `src/content/` file first before making changes.

**Tell CerberOS (me) something like:**
> "Read `docs/session-handoff-2026-09-23.md` and let's pick up where we left off."

I'll re-orient in ~1 tool call and we're back to work.

---

## Session state at time of handoff

- **Working directory:** clean (all changes committed and pushed)
- **Local dev server:** not running
- **Last deploy:** `https://7eea7811.livens-classic-maple.pages.dev` (assassin star audit) — same content as production
- **Production:** `https://livens-classic-maple.pages.dev` (both sprints live)
- **Uncommitted probe scripts:** none (deleted during cleanup)
- **Node version pinned:** 22.12.0 (see `.nvmrc`)

Safe to restart the computer.  Good session!
