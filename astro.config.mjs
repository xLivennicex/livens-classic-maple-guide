// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
//
// `site` is the canonical origin. Astro uses it for absolute URLs in
// generated sitemaps, RSS feeds, and any `Astro.site` reference. Set
// to Cloudflare Pages' default project subdomain; update if a custom
// domain is added later (e.g. `https://livenmaple.gg`) - AND update
// the `Sitemap:` line in `public/robots.txt` to match.
//
// Deployment: `npm run build` (which invokes pagefind post-build) then
// serve the `dist/` directory. Cloudflare Pages auto-detects Astro and
// picks these settings, but see DEPLOY.md for the full runbook.
//
// Integrations:
// - `sitemap` emits `/sitemap-index.xml` + `/sitemap-0.xml` at build
//   time listing every discovered page. Search engines pick it up
//   automatically because `public/robots.txt` points at it.
export default defineConfig({
	site: "https://livens-classic-maple-guide.pages.dev",
	integrations: [sitemap()],
});
