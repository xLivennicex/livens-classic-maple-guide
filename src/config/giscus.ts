/**
 * Giscus configuration for blog post comments.
 *
 * Giscus uses GitHub Discussions as a comment backend - free, no ads,
 * no tracking, no vendor lock-in. Users need a GitHub account to
 * comment. If that's a barrier for our audience, swap to another
 * provider by editing the Comments.astro component; nothing else on
 * the site depends on Giscus directly.
 *
 * ============================================================
 * TO ENABLE COMMENTS (one-time setup):
 * ============================================================
 *
 * 1. Make sure the GitHub repo hosting this site is PUBLIC (Giscus
 *    reads discussions via the public GitHub API).
 *
 * 2. On the repo, go to Settings -> General -> Features and enable
 *    "Discussions".
 *
 * 3. Install the Giscus GitHub App on the repo:
 *    https://github.com/apps/giscus (grant access to just this repo)
 *
 * 4. Create a Discussions category to hold blog comments. Suggested:
 *    name = "Blog Comments", format = "Announcement" (so only
 *    maintainers can start threads; users can only reply).
 *
 * 5. Go to https://giscus.app - fill in the repo + category picker;
 *    it prints the four values below (repo, repoId, category,
 *    categoryId). Paste them into GISCUS_CONFIG.
 *
 * 6. Redeploy. Comments render on every blog post automatically.
 *
 * Until step 5 is done, GISCUS_CONFIG.enabled stays false and
 * Comments.astro renders a friendly "comments coming soon"
 * placeholder instead of the widget.
 */

export interface GiscusConfig {
	enabled: boolean;
	repo: `${string}/${string}`;      // "owner/repo-name"
	repoId: string;                    // R_kgDO... from giscus.app
	category: string;                  // "Blog Comments" (human name)
	categoryId: string;                // DIC_kwDO... from giscus.app
	mapping: "pathname" | "url" | "title" | "og:title" | "specific" | "number";
	strict: "0" | "1";
	reactionsEnabled: "0" | "1";
	emitMetadata: "0" | "1";
	inputPosition: "top" | "bottom";
	theme: string;                     // e.g. "preferred_color_scheme", "light", "dark_dimmed"
	lang: string;                      // e.g. "en"
	loading: "lazy" | "eager";
}

// NOTE: repo/repoId/category/categoryId are placeholders until the
// GitHub side is configured (see the six-step guide above). When
// `enabled` is false, Comments.astro renders a placeholder instead.
export const GISCUS_CONFIG: GiscusConfig = {
	enabled: false,
	repo: "livencodes/livens-classic-maple-guide",
	repoId: "REPLACE_ME_WITH_REPO_ID",
	category: "Blog Comments",
	categoryId: "REPLACE_ME_WITH_CATEGORY_ID",
	mapping: "pathname",
	strict: "0",
	reactionsEnabled: "1",
	emitMetadata: "0",
	inputPosition: "bottom",
	theme: "preferred_color_scheme",
	lang: "en",
	loading: "lazy",
};
