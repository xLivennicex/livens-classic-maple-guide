# Community & Accounts — architectural plan

**Status:** planning · **Last updated:** 2026-09-05 · **Owner:** Liven

Everything below is a proposal, not a commitment. The intent is to
line up options with tradeoffs so we can pick the smallest thing that
solves the current problem, ship it, and only add the next piece when
we actually need it. YAGNI-first, always.

---

## What we're solving

1. **Community discussion** — readers want to talk about the game with
   each other on the guide itself (per-page comments and/or a general
   forum), not just consume static content.
2. **Account creation** — a durable user identity so someone's comments,
   character showcase, favorites, etc. belong to *them* and follow them
   across visits.
3. **Character customization (deferred)** — build-a-character with
   equipment / hair / skin / job preview. Explicitly out of scope for
   the first cut; the plan just needs to not paint us into a corner.

## What we're NOT solving in v1

- Trading / marketplace / mesos economy simulation.
- Real-time chat (Discord already exists for that).
- Party / guild management sim.
- Anything that competes with the actual game.
- Any surface that would need Nexon's approval to ship.

---

## Constraints & baseline reality

- **The current site is 100% static.** Astro builds 5,695 HTML pages
  to `dist/`, Cloudflare Pages serves them. Zero backend, zero DB,
  zero server-side rendering. This is *fast* (7s builds, ~30ms TTFB)
  and *cheap* (free tier). Community features **must not** compromise
  the static-first pitch — the guide part of the site should still
  work with JavaScript disabled.
- **Windows dev environment.** Deployment tooling has to run on
  Windows (`findstr`, `powershell -Command`).
- **Solo maintainer.** Liven ships everything. Ops burden matters —
  we can't run a Postgres cluster and a moderation team.
- **Ownership matters.** Prefer options where user data is portable
  and we don't get vendor-locked into a startup that can shut down.

---

## Option matrix

Weighed on five axes (1-5, 5 = best):

| Option | Ship speed | Moderation tools | Data portability | Ops burden | Community UX |
|---|---:|---:|---:|---:|---:|
| **A. Self-host everything** | 1 | 1 | 5 | 1 | 3 |
| **B. Supabase (BaaS)** | 4 | 2 | 4 | 4 | 4 |
| **C1. Discord widget only** | 5 | 5 | 3 | 5 | 3 |
| **C2. Giscus (GitHub Discussions)** | 5 | 4 | 4 | 5 | 3 |
| **C3. Disqus** | 5 | 3 | 1 | 5 | 2 |
| **C4. Discourse (hosted or self)** | 2 | 5 | 4 | 2 | 5 |
| **D. Hybrid (recommended)** | 4 | 4 | 4 | 4 | 4 |

Explanations:

**A. Roll our own** — Own backend (Bun/Node/Deno), own DB (Postgres
or SQLite), own auth (Lucia or better-auth), own moderation UI. Max
control, minimum ship speed. Every spam bot on the internet becomes
our problem. Skip unless we hit a wall.

**B. Supabase** — Managed Postgres + Auth + Row-Level Security +
Realtime. Excellent DX, generous free tier (500MB DB, 50k monthly
active users). Data is portable (it's just Postgres). Moderation
is roll-your-own but the primitives are there. Best "we own it"
option with reasonable ops burden.

**C1. Discord widget** — Embed a Discord invite/widget in the footer.
Zero code. Community already lives on Discord for MapleStory. Great
"community exists" signal but comments are off-site.

**C2. Giscus** — GitHub Discussions as comment backend. Free, ad-free,
spam-resistant (GitHub sign-in), embeds as an `<iframe>`. Themes to
site. Downside: readers need GitHub accounts. Great for developer /
theorycrafting audience, less great for casual players.

**C3. Disqus** — The classic. Ad-loaded, tracks users, community
consensus is "gross". Skip.

**C4. Discourse** — Full-featured forum. Best UX bar none. Hosted
plans start at $100/mo; self-host is 2GB+ RAM Docker container.
Overkill for v1, but perfect if we ever want a dedicated "Liven's
guide community" that lives here.

**D. Hybrid** — Pick the least-effort thing that solves each layer:
Discord for real-time chatter, Giscus for per-page comments,
Supabase later for user identity when we actually need persistence.

---

## Recommended path

### Phase 1 — Ship community *now* with zero backend (2-3 hrs work)

1. **Discord invite in footer + a small "Community" section.**
   Signals we're active, meets Maple players where they already are.
   Only needs a stable invite link.

2. **Giscus comments at the bottom of every dossier page.**
   Item pages, mob pages, map pages, quest pages, hall-of-fame entries.
   Enables per-page discussion ("did anyone else notice this drop rate?"
   / "the wzId here is wrong, should be X"). Uses GitHub Discussions
   as the backend — free, zero ops, spam-resistant.

   Configuration:
   - Repo: create/use `livensclassicguide/comments` public repo just
     for hosting Discussions.
   - Category: "Guide comments", one Discussion per URL slug (Giscus
     handles this automatically).
   - Mapping: `pathname` (dossier URL is stable).
   - Theme: pull from CSS variables so it matches per-region theming.
   - Position: below the primary dossier content, above "Sources".

3. **`/community` landing page.**
   Explains where the community lives (Discord + comments), links to
   both, sets moderation expectations ("be kind, no personal attacks,
   no botting/hacking talk"). One page, ~15 minutes to write.

**Total surface area:** 1 new page + 1 layout hook + 3 config values.
No backend, no auth, no DB. Ships this weekend.

### Phase 2 — Add real accounts when a feature demands them (later)

Trigger: when we build the *first feature* that needs "this data
belongs to a specific user across visits" (favorites, character
showcase, achievement tracking).

Stack:
- **Supabase** for Postgres + Auth + Row-Level Security.
- **Auth methods:** Email magic-link (primary), Google, Discord.
  Discord is a big win — most Maple players already have one.
- **User schema (starter):**
  ```
  profiles      (id uuid pk, username, avatar_url, bio, created_at)
  characters    (id, user_id fk, name, job, level, cosmetic_json)
  favorites     (user_id fk, target_kind, target_id, added_at)
  ```
- **Frontend:** Astro islands for auth-gated components. The static
  guide keeps rendering; only the "you'll need to log in" pieces
  hydrate.
- **Deployment:** Cloudflare Pages Functions for any server-side calls
  (Supabase JWT verification, secure API keys), or lean on Supabase's
  own client SDK for the browser-only paths.

Estimated effort: 1-2 weekends for a working sign-up + profile page.

### Phase 3 — Character customization (deferred)

When ready, build a client-side character builder:
- Sprite composer using maplestory.io's `/character/{items}` endpoint
  (which already renders arbitrary equipment combos).
- Save state to `characters.cosmetic_json` in Supabase.
- Public profile URL `/@username` shows every character the user
  has built.
- **No stat sim** — cosmetic only, so we don't accidentally maintain
  a class balance patch.

The Phase 2 auth work carries this — no new infrastructure needed.

### Phase 4 — Move to full forum only if warranted

If per-page comments grow past ~50 daily active commenters, upgrade
the community layer to hosted Discourse or a Supabase-backed native
forum. Bridge the existing Giscus threads or start fresh.

Trigger criteria (don't do this before we hit them):
- 500+ signed-in users
- OR 5+ moderators actively volunteering
- OR clear demand for cross-page threading (megathreads, guides, etc.)

---

## Costs (steady-state estimates)

| Component | Free tier covers | Paid at scale |
|---|---|---|
| Cloudflare Pages | Unlimited requests, 500 builds/mo | $20/mo Pro |
| Giscus | Unlimited (GitHub-hosted) | Free forever |
| Discord | Free | Nitro Boost optional |
| Supabase | 500MB DB, 50k MAU | $25/mo Pro if we outgrow it |
| Discourse (Phase 4) | Self-host free (VPS) | $100/mo hosted |

**Realistic first-year cost:** $0 through Phase 2. Only pay when
concrete usage forces it.

---

## Risks & how we handle them

1. **Spam.** Giscus + Supabase Discord OAuth both have built-in
   throttling. If it becomes a problem, add hCaptcha (free tier
   generous) to sign-up + comment forms.

2. **Moderation load.** Volunteer mods recruited from Discord.
   Publish a short community-guidelines page from day one so
   enforcement is predictable.

3. **GDPR / privacy.** Supabase is EU-hosted-optional and includes
   account deletion. Giscus stores data in GitHub Discussions
   under the user's own GitHub identity (they own it, not us).
   Privacy policy needs a paragraph on each provider; boilerplate.

4. **Data export.** Both Supabase (pg_dump) and GitHub Discussions
   (GraphQL API export) allow full data extraction. If we ever
   want to move off, it's a script, not a rewrite.

5. **Nexon takedown.** We're a fan guide, not the game — but if
   anything ever gets a legal ping, community features come down
   before the guide does. Keeping community and guide on separate
   subdomains (`community.livens-classic-maple-guide.pages.dev` vs
   `www.`) would make that clean.

6. **Character-builder rate limits.** maplestory.io throttles
   generation calls. We'd cache rendered composites on Supabase
   Storage and serve from there.

---

## Concrete next steps (Phase 1 sprint)

Only commit when Liven approves the direction:

- [ ] Create `livensclassicguide/comments` public GitHub repo, enable
      Discussions, add a "Guide comments" category.
- [ ] Install Giscus app on that repo, generate config values.
- [ ] Build `<GuideComments>` Astro component using
      `<script src="https://giscus.app/client.js" ...>` — themed via
      CSS variables from the current region theme.
- [ ] Add `<GuideComments>` to `ItemDetailLayout`, `[id].astro` for
      mobs/maps/npcs/quests, and `hall-of-fame.astro`.
- [ ] Build `/community` page: Discord invite, comment guidelines,
      moderation contact.
- [ ] Add "Community" nav entry.
- [ ] Update `ROADMAP.md` changelog with the ship.

**Estimated total effort:** one afternoon.

---

## Open decisions for Liven

Please pick / confirm before we start Phase 1:

1. **Discord server:** does one already exist? If not, do we spin one
   up under Liven's account, or affiliate with an existing Classic
   World Discord?
2. **Comments-repo name:** `livensclassicguide/comments` OK, or
   different owner/name?
3. **Auth in Phase 2:** email magic-link primary + Google + Discord?
   Or a different combo?
4. **Handles vs. real names:** users pick a handle at sign-up
   (recommended) vs. use their GitHub/Discord display name?
5. **Public profile URL scheme:** `/@handle` (Twitter-ish) or
   `/users/handle` (Reddit-ish)?
