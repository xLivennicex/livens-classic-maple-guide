# Deployment - Cloudflare Pages

Everything in this repo builds to a static `dist/` directory, which
means we can deploy anywhere that serves files (Netlify, GitHub Pages,
a raw S3 bucket, your basement Raspberry Pi).

Two paths documented here:

- **Quick path (Wrangler CLI)** - no GitHub needed. Best if you
  just want the site live in ~3 minutes. See section immediately
  below.
- **GitHub-connected auto-deploy** - deploys automatically on every
  `git push`. Best long-term setup. See "Why Cloudflare Pages"
  section further down.

---

## Quick path: Wrangler CLI (no GitHub, ships in 3 minutes)

Wrangler is already installed as a devDependency and `npm run deploy`
is wired up. First-time setup:

```powershell
# 1. Log in to Cloudflare - opens a browser tab for OAuth.
#    Free account signup at https://dash.cloudflare.com/sign-up
#    if you don't have one yet.
npx wrangler login

# 2. Ship it.
npm run deploy
```

That's it. `npm run deploy` runs `npm run build` (5,706 pages +
Pagefind), then `wrangler pages deploy dist --project-name=livens-classic-maple`.
First run asks you to confirm creating the project - say yes.

Output looks like:

```
Deployment complete! Take a peek over at
https://<hash>.livens-classic-maple.pages.dev
```

Share the bare `livens-classic-maple.pages.dev` URL with friends
(that's the production alias; the `<hash>` version is a per-deploy
preview).

**Subsequent deploys:** just `npm run deploy`. Ships in ~90 seconds.

**No CLI available?** Path B: run `npm run build`, zip the `dist/`
folder, drop it at <https://dash.cloudflare.com/pages> -> Create
project -> Direct upload. Same URL format, same result.

Total setup time from scratch: **10 minutes**.

## Why Cloudflare Pages

- **Free** for personal projects (500 builds/month, unlimited bandwidth)
- **Global CDN** with sub-50ms latency to most of the world
- **Automatic HTTPS** with Let's Encrypt certs
- **Zero-config Astro detection** - Pages recognizes the framework and picks sane defaults
- **Pagefind-friendly** build environment - Node 22 + Linux + no weird sandboxing

## Prerequisites

1. A **GitHub account** (or GitLab / Bitbucket - Cloudflare supports all three)
2. A **Cloudflare account** - free tier is fine
3. Node 22.12 or newer installed locally (matches `.nvmrc` and `package.json` engines)

## Step 1: Push to GitHub

If the repo isn't on GitHub yet:

```powershell
# From the project root
git remote add origin https://github.com/YOUR_USERNAME/livens-classic-maple-guide.git
git branch -M main
git push -u origin main
```

Verify the push landed by visiting your repo URL in a browser.

## Step 2: Verify the production build works locally

Before pointing Cloudflare at the repo, make sure `npm run build` runs
clean on YOUR machine. If it fails here, it'll fail on Cloudflare too.

```powershell
npm install
npm run build
npm run preview
```

Then visit http://localhost:4321 in your browser and click around.
Especially test:

- **Header search** - type "Warrior", hit Enter, land on `/search?q=Warrior`, see results
- **`/quests/borrowing-seras-mirror`** - NPC sprite renders in the hero
- **`/jobs/warrior#second-job`** - click a branch card, expandable preview reveals skills with icons
- **`/items/ribboned-pig-headband`** - "Awarded by" section links back to Estelle's quest

If all of those work, you're good to deploy.

## Step 3: Connect Cloudflare Pages to the repo

1. Log in to https://dash.cloudflare.com
2. Left sidebar: **Workers & Pages**
3. Click **Create application** -> **Pages** tab -> **Connect to Git**
4. Authorize Cloudflare to access your GitHub account (one-time step)
5. Select the `livens-classic-maple-guide` repo
6. Fill in the build config:

| Setting | Value |
| --- | --- |
| Project name | `livens-classic-maple-guide` (or whatever - this becomes your subdomain) |
| Production branch | `main` |
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | (leave blank) |

7. **Environment variables** (click "Add variable"):

| Name | Value | Why |
| --- | --- | --- |
| `NODE_VERSION` | `22` | Locks the build to Node 22, matching `.nvmrc` and `package.json` engines. |

8. Click **Save and Deploy**.

The first build takes about 90 seconds. Watch the log stream in the
Cloudflare dashboard. You're looking for:

```
Running Pagefind v1.5.2 (Extended)
Indexed 1 language
Indexed 28 pages
Indexed 2861 words
```

That's Pagefind confirming the search index built during the deploy.

## Step 4: Visit your live site

When the build finishes Cloudflare gives you a URL like:

```
https://livens-classic-maple-guide.pages.dev
```

Open it. If everything renders correctly, you're live.

## Step 5 (optional): Custom domain

If you own a domain and want to use it instead of `.pages.dev`:

1. In the Pages project dashboard, click **Custom domains** -> **Set up a custom domain**
2. Enter your domain (e.g. `guide.livenmaple.com`)
3. Follow the DNS instructions - if your domain's DNS is already on Cloudflare, it's one click; otherwise add a CNAME record pointing at your `.pages.dev` URL
4. **Update `astro.config.mjs`** - change the `site` value to your custom domain
5. **Update `public/robots.txt`** - change the `Sitemap:` URL to match
6. Commit + push. Cloudflare auto-deploys the update.

## Rolling deploys

Every push to `main` triggers a production build.
Every push to any other branch triggers a **preview deploy** at a
unique URL like `https://a3f0c-livens-classic-maple-guide.pages.dev` -
useful for reviewing content changes before merging.

## Rollback

Something broke in production? Cloudflare Pages keeps the last 20
deployments live. In the dashboard:

1. **Deployments** tab
2. Find a previous good deploy
3. Click the three-dot menu -> **Rollback to this deployment**

Instant rollback. Then fix the issue at your leisure.

## Files that make this work

| File | Purpose |
| --- | --- |
| `astro.config.mjs` | Sets `site` for canonical URLs. Update after custom domain. |
| `.nvmrc` | Node 22 version pin. Cloudflare reads this to pick the runtime. |
| `package.json` scripts.build | `astro build && pagefind --site dist` - builds pages, then indexes them. |
| `public/_headers` | Cloudflare-native header config. Aggressive caching for hashed assets, short cache + revalidate for HTML, sensible security defaults. |
| `public/robots.txt` | Allow-all crawl policy + sitemap pointer (sitemap is aspirational until we add `@astrojs/sitemap`). |

## Troubleshooting

**Build fails with `node: command not found` or similar** - the
`NODE_VERSION` env var isn't set correctly. Verify it's `22` (not
`22.x` or `latest`).

**Build fails on `pagefind` step** - Pagefind pre-built binaries didn't
download during `npm install`. Try adding `PAGEFIND_BINARY_PATH=/opt/buildhome/repo/node_modules/pagefind/lib/pagefind`
as an env var, OR remove `node_modules/` from cache in Cloudflare's
build settings.

**Site loads but `/search` shows a blank widget** - `/pagefind/*` isn't
being served. Check that `public/_headers` didn't accidentally 404 the
directory (it shouldn't - the file only adds headers, not redirects).
Open browser devtools -> Network tab -> reload `/search` and look for
red rows.

**Search returns zero results for known terms** - the `data-pagefind-body`
marker got removed from `<main>` in `src/layouts/BaseLayout.astro`.
Restore it, rebuild, redeploy.

**Custom domain shows Cloudflare's error page** - DNS hasn't propagated
yet (up to 24 hours) OR the CNAME points at the wrong `.pages.dev` URL.
Check Cloudflare's Custom Domains dashboard for the exact target.
