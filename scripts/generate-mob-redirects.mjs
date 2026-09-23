#!/usr/bin/env node
/**
 * Generate public/_redirects with 301s from duplicate mob-dossier
 * paths to their canonical winners.
 *
 * The CoT 2 feed sometimes surfaces the same WZ mob under two
 * dossier IDs - one authoritative (has drops + spawn maps + quests)
 * and one hollow shadow. This script:
 *
 *   1. Reads src/data/db/mobs.json
 *   2. Groups by wzId
 *   3. Scores each group by richness (same rule as src/lib/mob-dedup.ts)
 *   4. Emits `/mobs/<loser>  /mobs/<winner>  301` lines to public/_redirects
 *
 * Runs standalone. Rerun any time the datamine refreshes (i.e.
 * after `npm run db`). Output is committed to git so redirect
 * intent is auditable in review; regenerating shows the diff.
 *
 * Kept as a plain .mjs script (not a build hook) because:
 *   - the datamine updates infrequently (measured in weeks)
 *   - redirect changes should be reviewed, not silent
 *   - CF Pages reads public/_redirects at deploy time either way
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const MOBS_JSON = resolve(REPO_ROOT, "src/data/db/mobs.json");
const OUT = resolve(REPO_ROOT, "public/_redirects");

// Match src/lib/mob-dedup.ts exactly. If this drifts we get a
// build-time inconsistency where the mob page redirects to a
// dossier that itself doesn't exist. Keep them in lockstep.
function richness(m) {
	return (
		(m.mapsSpawnedOn?.length ?? 0) * 3 +
		(m.drops?.length ?? 0) * 2 +
		(m.requiredByQuests?.length ?? 0)
	);
}

const mobs = JSON.parse(await readFile(MOBS_JSON, "utf8"));

const byWzId = new Map();
for (const m of mobs) {
	if (m.wzId == null) continue;
	const arr = byWzId.get(m.wzId) ?? [];
	arr.push(m);
	byWzId.set(m.wzId, arr);
}

const redirects = [];
for (const [, group] of byWzId) {
	if (group.length < 2) continue;
	const sorted = [...group].sort((a, b) => {
		const dr = richness(b) - richness(a);
		return dr !== 0 ? dr : a.id - b.id;
	});
	const winner = sorted[0];
	for (let i = 1; i < sorted.length; i++) {
		const loser = sorted[i];
		redirects.push({
			from: `/mobs/${loser.id}`,
			to: `/mobs/${winner.id}`,
			name: winner.name,
			wzId: winner.wzId,
			loserRichness: richness(loser),
			winnerRichness: richness(winner),
		});
	}
}

// Sort by loser ID for stable diffs.
redirects.sort((a, b) => {
	const la = Number(a.from.split("/").pop());
	const lb = Number(b.from.split("/").pop());
	return la - lb;
});

// Build the file. Preserve any manually-added redirects at the top
// of an existing _redirects (we currently have none, but this
// future-proofs the script). Managed block is fenced with sentinel
// comments so future edits know what's safe to hand-edit.
const BEGIN = "# BEGIN mob-dossier-dedup (managed by scripts/generate-mob-redirects.mjs)";
const END = "# END mob-dossier-dedup";

let existing = "";
try {
	existing = await readFile(OUT, "utf8");
} catch {
	/* file doesn't exist yet, that's fine */
}

// Strip any prior managed block so re-running is idempotent.
const beforeBlock = existing.split(BEGIN)[0].trimEnd();
const afterBlock = existing.includes(END)
	? existing.split(END)[1].trimStart()
	: "";

const managedBlock = [
	BEGIN,
	`# Auto-generated ${new Date().toISOString().slice(0, 10)}. ${redirects.length} redirects.`,
	"# Each line: <duplicate_dossier_path>  <canonical_dossier_path>  301",
	"# See src/lib/mob-dedup.ts + scripts/generate-mob-redirects.mjs",
	"",
	// CF Pages _redirects rules:
	//   1. Inline comments are NOT supported. Comments must live on
	//      their own line (leading #). Learned the hard way after
	//      trailing "# name (wz id)" comments broke silently.
	//   2. Trailing-slash variants must be explicit. A rule for
	//      "/mobs/800019" does not also match "/mobs/800019/". We
	//      emit both so links from either shape resolve. The winner
	//      URLs have no trailing slash - Astro's built-in 308
	//      normalization adds it if the browser expects it.
	// Destinations use trailing slash to match Astro's static-build
	// convention (each page is emitted as /mobs/<id>/index.html).
	// Without the trailing slash our 301 chains into Astro's own
	// 308 canonicalization - one extra hop that hurts SEO.
	...redirects.flatMap((r) => [
		`# ${r.name} (wz ${r.wzId})`,
		`${r.from} ${r.to}/ 301`,
		`${r.from}/ ${r.to}/ 301`,
	]),
	"",
	END,
].join("\n");

const output = [beforeBlock, managedBlock, afterBlock]
	.filter((s) => s.length > 0)
	.join("\n\n") + "\n";

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, output, "utf8");

console.log(`Wrote ${redirects.length} mob-dedup redirects to public/_redirects`);
for (const r of redirects) {
	console.log(
		`  ${r.from} -> ${r.to}  (${r.name})  richness: loser=${r.loserRichness}, winner=${r.winnerRichness}`,
	);
}
