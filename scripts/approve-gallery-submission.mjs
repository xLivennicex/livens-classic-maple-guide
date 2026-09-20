#!/usr/bin/env node
/**
 * approve-gallery-submission.mjs
 *
 * One-command approval workflow for community-submitted gallery
 * screenshots. Given a GitHub Issue URL from the gallery-submission
 * template, this script:
 *
 *   1. Fetches the issue via the GitHub API (no auth needed for
 *      public repos, though rate-limit is stingy without it).
 *   2. Parses the form-rendered body to extract IGN, caption,
 *      moment date, and the attached screenshot URL.
 *   3. Downloads the screenshot to public/gallery/<slug>.<ext>.
 *   4. Writes src/content/gallery/<slug>.md with the required
 *      frontmatter (approvedAt = today, submissionIssue = #N).
 *   5. Optionally commits + pushes if --commit is passed.
 *   6. Optionally comments on the issue + closes it if a
 *      GITHUB_TOKEN env var is set.
 *
 * Usage:
 *   node scripts/approve-gallery-submission.mjs <issue-url> [flags]
 *   npm run gallery:approve <issue-url> [-- --commit]
 *
 * Flags:
 *   --commit         auto-commit and push after writing files
 *   --dry-run        parse + report only, write nothing
 *   --slug=<slug>    override the auto-derived filename slug
 *
 * Design principles:
 *   - Works with zero setup. Optional GITHUB_TOKEN unlocks the
 *     auto-comment + close step; without it the script prints a
 *     manual reminder.
 *   - Never touches git unless --commit is explicitly passed. The
 *     default flow is: script writes files -> you review with
 *     `git status` / `git diff` -> commit yourself when happy.
 *   - No sharp / image-optimization dep. Raw upload is saved as-is.
 *     If you want auto-resize down the line, install sharp and add
 *     a resize step around the `writeFile(imagePath, buf)` call.
 */

import { writeFile, mkdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname } from "node:path";
import { spawnSync } from "node:child_process";

// ---------------------------------------------------------------------
// CLI arg parsing (dead simple; a full arg parser would be overkill)
// ---------------------------------------------------------------------

const args = process.argv.slice(2);
const issueUrl = args.find((a) => a.startsWith("http"));
const dryRun = args.includes("--dry-run");
const autoCommit = args.includes("--commit");
const slugOverride = args
	.find((a) => a.startsWith("--slug="))
	?.split("=")[1];

if (!issueUrl) {
	console.error(
		"Usage: node scripts/approve-gallery-submission.mjs <issue-url> [--commit] [--dry-run] [--slug=custom-slug]",
	);
	process.exit(1);
}

// ---------------------------------------------------------------------
// URL -> owner/repo/number
// ---------------------------------------------------------------------

const urlMatch = issueUrl.match(
	/github\.com\/([^\/]+)\/([^\/]+)\/issues\/(\d+)/,
);
if (!urlMatch) {
	console.error(`Not a GitHub issue URL: ${issueUrl}`);
	process.exit(1);
}
const [, owner, repo, issueNumber] = urlMatch;

// ---------------------------------------------------------------------
// GitHub API fetch (with optional token for higher rate limit +
// write-op unlock)
// ---------------------------------------------------------------------

const token = process.env.GITHUB_TOKEN;
const ghHeaders = {
	Accept: "application/vnd.github+json",
	"X-GitHub-Api-Version": "2022-11-28",
	"User-Agent": "livens-classic-maple-gallery-approver",
	...(token ? { Authorization: `Bearer ${token}` } : {}),
};

async function ghGet(path) {
	const res = await fetch(`https://api.github.com${path}`, {
		headers: ghHeaders,
	});
	if (!res.ok) {
		throw new Error(`GitHub API ${path} -> ${res.status} ${res.statusText}`);
	}
	return res.json();
}

async function ghPost(path, body) {
	if (!token) return null; // no-op without auth
	const res = await fetch(`https://api.github.com${path}`, {
		method: "POST",
		headers: { ...ghHeaders, "Content-Type": "application/json" },
		body: JSON.stringify(body),
	});
	if (!res.ok) {
		throw new Error(`GitHub API POST ${path} -> ${res.status}`);
	}
	return res.json();
}

async function ghPatch(path, body) {
	if (!token) return null;
	const res = await fetch(`https://api.github.com${path}`, {
		method: "PATCH",
		headers: { ...ghHeaders, "Content-Type": "application/json" },
		body: JSON.stringify(body),
	});
	if (!res.ok) {
		throw new Error(`GitHub API PATCH ${path} -> ${res.status}`);
	}
	return res.json();
}

console.log(`Fetching issue #${issueNumber} from ${owner}/${repo}...`);
const issue = await ghGet(
	`/repos/${owner}/${repo}/issues/${issueNumber}`,
);

if (issue.state === "closed") {
	console.warn(`WARN: issue #${issueNumber} is already closed. Continuing.`);
}

// ---------------------------------------------------------------------
// Parse the form-rendered body. Issue Forms render each field as an
// `### Field Name` heading followed by a blank line and the value.
// Screenshot fields render as inline markdown image / attachment
// links. This parser walks section-by-section, tolerant of blank
// values ("_No response_") and of small format drift.
// ---------------------------------------------------------------------

function parseIssueBody(body) {
	// Split on `### ` at the start of a line. First element is any
	// preamble (usually empty), rest are `Field Name\n\nValue...`.
	const sections = body.split(/\r?\n### /);
	const fields = {};
	for (const raw of sections.slice(1)) {
		const [heading, ...rest] = raw.split(/\r?\n/);
		const value = rest.join("\n").trim();
		// Slug the heading for lookup: "In-game name" -> "in-game-name"
		const key = heading
			.trim()
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, "-")
			.replace(/^-+|-+$/g, "");
		fields[key] = value === "_No response_" ? "" : value;
	}
	return fields;
}

const fields = parseIssueBody(issue.body ?? "");

const ign = fields["in-game-name"]?.trim();
const caption = fields["caption"]?.trim();
const momentDateRaw = fields["when-it-happened-yyyy-mm-dd"]?.trim();
const screenshotBlob = fields["screenshot"] ?? "";

if (!ign || !caption) {
	console.error(
		"ERROR: submission is missing required fields. Parsed:",
		{ ign, caption, momentDateRaw },
	);
	process.exit(1);
}

// ---------------------------------------------------------------------
// Extract image URL from the screenshot field. Users can paste
// markdown images (`![](url)`), plain URLs, or GitHub's newer
// attachment syntax. Grab the first http(s) URL that looks like an
// image or GitHub user-attachments link.
// ---------------------------------------------------------------------

function findImageUrl(blob) {
	const urlRegex = /https?:\/\/[^\s)"']+/g;
	const urls = blob.match(urlRegex) ?? [];
	// Prefer GitHub's user-content CDN or common image extensions
	return (
		urls.find((u) =>
			/(user-images\.githubusercontent\.com|user-attachments|\.(jpe?g|png|webp|gif)(\?|$))/i.test(
				u,
			),
		) ?? urls[0]
	);
}

const imageUrl = findImageUrl(screenshotBlob);
if (!imageUrl) {
	console.error(
		"ERROR: no screenshot URL found in submission. Field body was:\n",
		screenshotBlob,
	);
	process.exit(1);
}

// ---------------------------------------------------------------------
// Slug + moment date
// ---------------------------------------------------------------------

function slugify(text) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.slice(0, 60);
}

const slug = slugOverride ?? slugify(caption) ?? `postcard-${issueNumber}`;
if (!slug) {
	console.error("ERROR: could not derive a slug from the caption.");
	process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
// If the submitter left the date blank OR wrote something unparseable,
// fall back to today's date. Users often type "yesterday" or leave the
// placeholder text, so we don't want to hard-fail on a fuzzy value.
const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;
const momentDate = isoDatePattern.test(momentDateRaw) ? momentDateRaw : today;

// ---------------------------------------------------------------------
// Download the screenshot (following redirects; GitHub attachments
// redirect through a signed CDN URL)
// ---------------------------------------------------------------------

async function downloadImage(url) {
	const res = await fetch(url, { redirect: "follow" });
	if (!res.ok) {
		throw new Error(`Image fetch ${url} -> ${res.status}`);
	}
	const contentType = res.headers.get("content-type") ?? "";
	const buf = new Uint8Array(await res.arrayBuffer());
	// Prefer the URL extension; fall back to content-type sniffing.
	let ext = extname(new URL(url).pathname).toLowerCase().replace(".", "");
	if (!["jpg", "jpeg", "png", "webp"].includes(ext)) {
		if (contentType.includes("png")) ext = "png";
		else if (contentType.includes("webp")) ext = "webp";
		else ext = "jpg";
	}
	return { buf, ext };
}

console.log(`Downloading screenshot from ${imageUrl}...`);
const { buf, ext } = await downloadImage(imageUrl);

const imageFilename = `${slug}.${ext}`;
const imagePath = join("public", "gallery", imageFilename);
const contentPath = join("src", "content", "gallery", `${slug}.md`);

if (existsSync(contentPath)) {
	console.error(
		`ERROR: ${contentPath} already exists. Use --slug=... to pick a different slug.`,
	);
	process.exit(1);
}

// ---------------------------------------------------------------------
// Compose the content collection markdown
// ---------------------------------------------------------------------

function escapeYaml(v) {
	// Double-quote and escape any inner double-quotes or backslashes.
	return `"${String(v).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

const frontmatter = [
	"---",
	`ign: ${escapeYaml(ign)}`,
	`caption: ${escapeYaml(caption)}`,
	`image: ${escapeYaml(imageFilename)}`,
	`momentDate: ${escapeYaml(momentDate)}`,
	`approvedAt: ${escapeYaml(today)}`,
	`submissionIssue: ${issueNumber}`,
	"---",
	"",
].join("\n");

// ---------------------------------------------------------------------
// Dry-run: report and exit before writing anything
// ---------------------------------------------------------------------

if (dryRun) {
	console.log("\n=== DRY RUN - no files written ===");
	console.log(`ign:        ${ign}`);
	console.log(`caption:    ${caption}`);
	console.log(`momentDate: ${momentDate}`);
	console.log(`slug:       ${slug}`);
	console.log(`image ->    ${imagePath} (${buf.length} bytes, ${ext})`);
	console.log(`content ->  ${contentPath}`);
	console.log("\nFrontmatter preview:");
	console.log(frontmatter);
	process.exit(0);
}

// ---------------------------------------------------------------------
// Write files
// ---------------------------------------------------------------------

await mkdir("public/gallery", { recursive: true });
await mkdir("src/content/gallery", { recursive: true });
await writeFile(imagePath, buf);
await writeFile(contentPath, frontmatter);

console.log(`Wrote ${imagePath} (${buf.length} bytes)`);
console.log(`Wrote ${contentPath}`);

// ---------------------------------------------------------------------
// Optional: commit + push
// ---------------------------------------------------------------------

function git(...cmd) {
	const r = spawnSync("git", cmd, { stdio: "inherit" });
	if (r.status !== 0) {
		throw new Error(`git ${cmd.join(" ")} exited ${r.status}`);
	}
}

if (autoCommit) {
	console.log("\nCommitting and pushing...");
	git("add", imagePath, contentPath);
	git(
		"commit",
		"-m",
		`gallery: approve #${issueNumber} - "${caption}" by ${ign}`,
	);
	git("push");
} else {
	console.log(
		"\nFiles written. Review with `git status` / `git diff`, then commit and push when ready.",
	);
	console.log(
		"(Or re-run with --commit next time to auto-commit and push.)",
	);
}

// ---------------------------------------------------------------------
// Optional: comment on the issue + close it (only if GITHUB_TOKEN set)
// ---------------------------------------------------------------------

if (token) {
	const liveUrl = `https://livensmapleguide.com/gallery#${slug}`;
	await ghPost(`/repos/${owner}/${repo}/issues/${issueNumber}/comments`, {
		body: `Shipped! Your postcard is live at ${liveUrl}. Thanks for sharing.`,
	});
	await ghPatch(`/repos/${owner}/${repo}/issues/${issueNumber}`, {
		state: "closed",
		state_reason: "completed",
	});
	console.log(`Commented on and closed issue #${issueNumber}.`);
} else {
	console.log(
		`\nHeads up: no GITHUB_TOKEN env var - skipping the auto-comment + close.`,
	);
	console.log(
		`Manually close ${issueUrl} once the deploy goes live.`,
	);
}

console.log("\nDone.");
