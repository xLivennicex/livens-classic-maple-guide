/**
 * Client-extracted BGM catalog, derived from the datamine.
 *
 * ============================================================
 * LEGAL / COPYRIGHT NOTE
 * ============================================================
 * The BGMs referenced here originate from MapleStory's game client.
 * The compositions belong to NEXON and their contracted composers
 * (notably ASOB - Sound Team ASOB - and later WIZET internal). This
 * file only defines the CATALOG (title, region, filesystem path);
 * whether actual audio files are hosted on this deployment is a
 * separate question. Files in `public/audio/bgm/` are Liven's own
 * responsibility to source and license - a fan / preservation
 * project posture is common but not legally settled ground.
 *
 * If you're forking this repo: do NOT commit the audio files
 * unless you have permission. Extract from your own client copy.
 * ============================================================
 *
 * ARCHITECTURE:
 * - The `bgm` field on every map in maps.json contains a WZ path
 *   like "Bgm00/FloralLife". That's the source of truth for what
 *   music plays on that map in the actual game.
 * - We derive the unique BGM list at build time by uniquing
 *   maps.json's bgm values (31 tracks total across ~426 maps).
 * - The URL a file resolves to is `/audio/bgm/{path}.mp3`. If the
 *   file doesn't exist, the jukebox flags the track as
 *   "not uploaded" and skips playback.
 * - Human-friendly titles come from a small hand-curated table.
 *   BGMs not in the table fall back to a space-inserted version
 *   of the raw name ("MoonlightShadow" -> "Moonlight Shadow").
 */

import mapsRaw from "./db/maps.json";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

// Directory where extracted client BGMs live (or should live).
// Frontmatter uses fs.existsSync against this to decide whether
// each track is playable in this deployment. Never accessed from
// the browser - path is resolved once at build time.
//
// Sprint 72.3 fix: originally used `import.meta.url` + relative
// paths, but Astro's Vite bundler rewrites module URLs during
// build, so `fileURLToPath(import.meta.url)` pointed at a
// bundled/hoisted location - not `src/data/`. Every fs.existsSync
// returned false and every track rendered as "awaiting upload"
// even after files were on disk. `process.cwd()` is always the
// project root when running via `npm run build`, so this works
// regardless of how the module gets bundled.
const AUDIO_ROOT = resolve(process.cwd(), "public/audio/bgm");

interface RawMap {
	id: number;
	region: string | null;
	bgm: string | null;
	name?: string;
}

/**
 * Insert spaces before capital letters and clean up the result.
 * Used as fallback when a BGM path isn't in the manual title map.
 * "FloralLife"          -> "Floral Life"
 * "AboveTheTreetops"    -> "Above The Treetops"
 * "RestNPeace"          -> "Rest N Peace"
 */
function humanize(name: string): string {
	return name
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
		.trim();
}

/**
 * Hand-curated titles + attribution. Falls back to humanize() for
 * anything not listed. Titles match community-canonical names
 * (e.g. hiddenstreet.net's BGM index).
 *
 * Composer credit: Sound Team ASOB (2003-2008 era, all v83 BGMs).
 * Individual composer per-track not always known - most credited
 * to ASOB collectively.
 */
const TITLE_OVERRIDES: Record<string, string> = {
	"Bgm00/FloralLife":       "Floral Life (Henesys)",
	"Bgm00/GoPicnic":         "Go Picnic (Maple Island fields)",
	"Bgm00/Nightmare":        "Nightmare (dungeons)",
	"Bgm00/RestNPeace":       "Rest and Peace (Sleepywood town)",
	"Bgm00/Silence":          "Silence",
	"Bgm00/SleepyWood":       "Sleepywood (dungeon)",
	"Bgm01/AncientMove":      "Ancient Move (Perion)",
	"Bgm01/BadGuys":          "Bad Guys (Kerning City sewers)",
	"Bgm01/CavaBien":         "Cava Bien (Amherst)",
	"Bgm01/HighlandStar":     "Highland Star (Perion dungeons)",
	"Bgm01/MoonlightShadow":  "Moonlight Shadow (Perion night)",
	"Bgm02/AboveTheTreetops": "Above the Treetops (Ellinia)",
	"Bgm02/EvilEyes":         "Evil Eyes (Sleepywood dungeon)",
	"Bgm02/JungleBook":       "Jungle Book (Ellinia forests)",
	"Bgm02/MissingYou":       "Missing You (Ellinia dock)",
	"Bgm02/WhenTheMorningComes": "When the Morning Comes",
	"Bgm03/NightMarket":      "Night Market (Kerning City)",
	"Bgm03/BlueSky":          "Blue Sky",
	"Bgm03/Elfwood":          "Elfwood",
	"Bgm03/Missionary":       "Missionary (Lith Harbor)",
	"Bgm04/Beachway":         "Beachway",
	"Bgm04/HighEnough":       "High Enough",
	"Bgm04/UponTheSky":       "Upon the Sky",
	"Bgm05/AquaCave":         "Aqua Cave",
	"Bgm05/DownToTheCave":    "Down to the Cave",
};

/**
 * Region-tag heuristic: use the majority region among maps that
 * use this BGM. Falls back to "Multiple" if the BGM is used across
 * regions (common for shared themes like Nightmare).
 */
function majorityRegion(mapsUsing: RawMap[]): string {
	const counts = new Map<string, number>();
	for (const m of mapsUsing) {
		if (!m.region) continue;
		counts.set(m.region, (counts.get(m.region) ?? 0) + 1);
	}
	if (counts.size === 0) return "Unknown";
	const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
	// If the top region has less than 60% share, call it "Multiple".
	const total = mapsUsing.length;
	const [topRegion, topCount] = sorted[0]!;
	if (topCount / total < 0.6) return "Multiple regions";
	return topRegion;
}

export interface ClientBgmEntry {
	// Raw WZ path from the datamine ("Bgm00/FloralLife").
	// Used as stable identifier + URL suffix.
	wzPath: string;
	// Public URL Astro will serve the file at (if present).
	src: string;
	// Human-friendly title for display.
	title: string;
	// Best-guess region tag.
	region: string;
	// Number of maps in the datamine that use this BGM.
	// Useful for sorting the catalog by "importance".
	mapCount: number;
	// True at build time = the .mp3 file exists in public/audio/bgm/.
	// The jukebox uses this to grey out un-uploaded tracks and
	// prevent broken audio requests.
	available: boolean;
}

const maps = mapsRaw as RawMap[];

// Bucket maps by BGM path.
const byBgm = new Map<string, RawMap[]>();
for (const m of maps) {
	if (!m.bgm) continue;
	const key = m.bgm;
	if (!byBgm.has(key)) byBgm.set(key, []);
	byBgm.get(key)!.push(m);
}

/**
 * Full catalog, sorted by (region, then mapCount desc, then title).
 * Consumers can filter by `available` for playable-only lists.
 */
export const CLIENT_BGM_CATALOG: readonly ClientBgmEntry[] = [...byBgm.entries()]
	.map(([wzPath, using]) => {
		const title = TITLE_OVERRIDES[wzPath] ?? humanize(wzPath.split("/").pop() ?? wzPath);
		const filePath = resolve(AUDIO_ROOT, wzPath + ".mp3");
		return {
			wzPath,
			src: "/audio/bgm/" + wzPath + ".mp3",
			title,
			region: majorityRegion(using),
			mapCount: using.length,
			available: existsSync(filePath),
		};
	})
	.sort((a, b) => {
		if (a.region !== b.region) return a.region.localeCompare(b.region);
		if (a.mapCount !== b.mapCount) return b.mapCount - a.mapCount;
		return a.title.localeCompare(b.title);
	});

/**
 * Group the catalog by region for jukebox rendering. Regions in
 * a canonical order (Maple Island first, then Victoria towns, then
 * dungeons/misc).
 */
export function groupByRegion(): Array<{ region: string; tracks: ClientBgmEntry[] }> {
	const groups = new Map<string, ClientBgmEntry[]>();
	for (const t of CLIENT_BGM_CATALOG) {
		if (!groups.has(t.region)) groups.set(t.region, []);
		groups.get(t.region)!.push(t);
	}
	// Preferred region order. Anything not listed sorts to the end
	// alphabetically. Keeps the jukebox reading as a virtual tour.
	const order = ["Maple Island", "Victoria Island", "Multiple regions", "Unknown"];
	const orderIdx = (r: string) => {
		const i = order.indexOf(r);
		return i === -1 ? 999 : i;
	};
	return [...groups.entries()]
		.sort((a, b) => {
			const da = orderIdx(a[0]);
			const db = orderIdx(b[0]);
			if (da !== db) return da - db;
			return a[0].localeCompare(b[0]);
		})
		.map(([region, tracks]) => ({ region, tracks }));
}

/**
 * Quick lookup: given a map ID, return the client BGM entry for
 * that map's BGM (or null if the map has no BGM assigned).
 * Not currently used by MusicPlayer (which is theme-based), but
 * available for future features that want per-map ambience.
 */
export function bgmForMap(mapId: number): ClientBgmEntry | null {
	const map = maps.find((m) => m.id === mapId);
	if (!map || !map.bgm) return null;
	return CLIENT_BGM_CATALOG.find((t) => t.wzPath === map.bgm) ?? null;
}
