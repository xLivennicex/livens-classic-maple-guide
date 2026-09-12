/**
 * Central abstraction over the MapleStory sprite CDNs.
 *
 * Every image URL for a MapleStory entity (item, monster, NPC, map,
 * skill) is constructed here. This is the ONLY place in the codebase
 * that references external sprite domains - if we ever need to pivot
 * (self-hosted sprites, WZ-file extraction pipeline, alternate CDN)
 * this file is the one to change.
 *
 * We currently draw from THREE complementary sources:
 *
 * 1. `meowdb.com/msclassic` (Classic World CoT-accurate ITEM icons)
 *    - Item inventory icons only, keyed on canonical WZ ID.
 *    - Anonymous, no auth, immutable cache, hotlinkable in <img>.
 *    - THIS is our preferred item icon source because GMS/83 sprites
 *      from maplestory.io don't always match what Classic World
 *      actually renders (e.g. Blue Sauna Robe 1050010 shows as a
 *      green mage overall on maplestory.io but as a striped bath
 *      towel on MeowDB and in CoT). If MeowDB 404s a specific WZ
 *      ID, that item's icon simply won't render - visible failure
 *      is better than silently-wrong visuals.
 *
 * 2. `maplestory.io` (GMS/83)
 *    - Monsters, NPCs, maps.
 *    - Long-established fan CDN of pre-extracted v83-era assets.
 *    - No longer our item source (see #1).
 *    - Does NOT publicly serve skill icons.
 *
 * 3. `osmsdataexplorer.com` (Classic World CoT 2 datamine, ohmi69)
 *    - Skill icons at canonical MapleStory IDs.
 *    - Community datamine of the actual Classic World client, freshest
 *      possible data before Founder's Access.
 *    - Repo: github.com/ohmi69/osms_datamine_dashboard - if the live
 *      site ever goes down we can rehost from the git artifacts.
 *
 * Design notes:
 * - No React state, no async, no framework coupling. Pure string
 *   builders callable from anywhere (Astro components, .md
 *   frontmatter processing, unit tests).
 * - Fail-loud: nonsense IDs throw immediately rather than producing
 *   broken CDN URLs.
 * - Skill IDs are STRINGS (not numbers) because canonical MapleStory
 *   skill IDs have leading zeros that JavaScript integers would lose
 *   (e.g. "0001000" for Three Snails).
 */

/**
 * MapleStory client version we're pinning to. Classic World is the
 * v83-era Global MapleStory client, hence "GMS/83". Bumped only if
 * Nexon releases a Classic World patch that changes item IDs, which
 * has never actually happened in v83 history but is possible.
 */
export const DEFAULT_VERSION = "GMS/83";

const CDN_ROOT = "https://maplestory.io/api";
const MEOWDB_ROOT = "https://meowdb.com/msclassic";
const MEOWDB_ICON_ROOT = `${MEOWDB_ROOT}/api/assets/icons`;

/**
 * Guard shared by every entity URL builder. Rejects nonsense IDs at
 * the call site instead of silently producing a broken CDN URL.
 */
function assertValidWzId(wzId: number, entity: string): void {
	if (!Number.isInteger(wzId) || wzId <= 0) {
		throw new Error(
			`Invalid WZ ID for ${entity}: expected a positive integer, got ${wzId}`
		);
	}
}

/**
 * Item icon (the small square you see in inventory / shops).
 *
 * Sourced from MeowDB's Classic World icon CDN. The v83 GMS assets
 * on maplestory.io are visually inaccurate for a chunk of items that
 * were reskinned or renamed for Classic World - MeowDB extracts icons
 * from the CoT client directly.
 *
 * Example: itemIconUrl(2000002) -> White Potion icon
 *
 * NOTE: MeowDB serves ONE icon size (packed inventory icon). If MeowDB
 * doesn't have a particular WZ ID it returns 404 and the browser shows
 * a broken image - visible failure is preferable to silently rendering
 * a wrong v83 sprite. The `version` parameter is accepted for API
 * compatibility with legacy call sites but ignored: MeowDB serves
 * only CoT-current assets.
 */
export function itemIconUrl(
	wzId: number,
	_version: string = DEFAULT_VERSION
): string {
	assertValidWzId(wzId, "item");
	return `${MEOWDB_ICON_ROOT}/${wzId}`;
}

/**
 * Item hero-size icon. MeowDB only serves the packed inventory icon,
 * so this returns the same URL as `itemIconUrl` - the ItemLayout is
 * responsible for CSS upscaling with `image-rendering: pixelated` to
 * preserve the pixel-art aesthetic without blurring.
 *
 * Kept as a separate export for two reasons:
 *   1. Call-site clarity - hero contexts document their intent.
 *   2. Future-proof - if we ever pipe in a higher-res source (Nexon
 *      artbooks, HaRepacker extraction) only this function changes.
 */
export function itemIconRawUrl(
	wzId: number,
	_version: string = DEFAULT_VERSION
): string {
	assertValidWzId(wzId, "item");
	return `${MEOWDB_ICON_ROOT}/${wzId}`;
}

/**
 * Monster render in the default standing pose.
 *
 * Expects a maplestory.io WZ ID (7-digit range like 100101 for
 * Blue Snail). Kept in the toolkit for future callers that hold
 * WZ IDs directly - e.g. if we ever pull mob stats from
 * maplestory.io using a name -> WZ mapping.
 *
 * If you have OUR internal datamine ID (the small ID like `3` for
 * Blue Snail found in lookups.mob_names and mobs.json), call
 * `mobSpriteUrl(id)` INSTEAD - that path hits MeowDB which
 * serves sprites keyed on the same internal IDs.
 *
 * Example: monsterRenderUrl(2100100) -> a Jr. Balrog standing.
 */
export function monsterRenderUrl(
	wzId: number,
	version: string = DEFAULT_VERSION
): string {
	assertValidWzId(wzId, "monster");
	return `${CDN_ROOT}/${version}/mob/${wzId}/render/stand`;
}

/**
 * Mob sprite icon by our internal datamine ID.
 *
 * Sourced from MeowDB at `/msclassic/monsters/sprites/mob_{id}.png`.
 * IDs match `lookups.mob_names` in the osmsdataexplorer datamine
 * (small numeric IDs like 3 for Blue Snail), NOT the WZ ID scheme
 * that maplestory.io uses (100101 for Blue Snail). Verified
 * 186/195 mob coverage (95.4%) - the 9 misses are 6 dev-only
 * 'Test' mobs plus 3 real ones (Nependeath, Dark Nependeath,
 * Ultra Jr. Necki 1) that broken-image gracefully via onerror.
 *
 * Example: mobSpriteUrl(3) -> Blue Snail sprite.
 */
export function mobSpriteUrl(mobId: number): string {
	assertValidWzId(mobId, "mob");
	return `${MEOWDB_ROOT}/monsters/sprites/mob_${mobId}.png`;
}

/**
 * NPC render in the default standing pose.
 *
 * Expects a maplestory.io WZ ID (like 2101 for Heena), NOT our
 * internal datamine NPC ID (which is `1` for Heena). The build
 * script resolves each NPC's WZ ID via maplestory.io's name-search
 * endpoint and caches the mapping to `src/data/db/npc-wz-cache.json`;
 * dossier consumers pass `d.wzId`. When wzId is null (crafting
 * stations, post-v83 additions - 36/266 = 14% of NPCs), pass
 * `null` here and use `npcSpriteUrl` which returns a null-safe URL.
 *
 * Example: npcRenderUrl(2101) -> Heena standing.
 */
export function npcRenderUrl(
	wzId: number,
	version: string = DEFAULT_VERSION
): string {
	assertValidWzId(wzId, "npc");
	return `${CDN_ROOT}/${version}/npc/${wzId}/render/stand`;
}

/**
 * Null-safe NPC sprite URL. Returns `null` (rather than throwing)
 * when the NPC has no resolved WZ ID, so callers can conditionally
 * render an <img> only when a sprite is actually available.
 *
 * This is the recommended helper for template callers - `npcRenderUrl`
 * throws on invalid IDs which is fine for validation but not for
 * 'render sprite if available' logic.
 */
export function npcSpriteUrl(
	wzId: number | null | undefined,
	name?: string | null | undefined,
): string | null {
	// Prefer MeowDB name-slug URL when a name is provided - it covers
	// the 39 NPCs (14.7%) that maplestory.io lacks entirely (Arthur,
	// Bianca, Raymond, Oak, Flint, and the whole Forgotten Hollow crew
	// added post-v83). Verified 100% coverage on both categories:
	// legacy NPCs (Heena, Sera, Todd, Maria) and CoT2-exclusive ones.
	const meowdb = npcSpriteMeowdbUrl(name);
	if (meowdb) return meowdb;
	if (wzId == null || !Number.isInteger(wzId) || wzId <= 0) return null;
	return `${CDN_ROOT}/${DEFAULT_VERSION}/npc/${wzId}/render/stand`;
}

/**
 * MeowDB uses a slugified-name URL scheme for NPC sprites (unlike
 * mobs/items which are numeric ID-keyed). This mirrors that slug
 * shape: lowercase, apostrophes stripped, any non-alphanumeric run
 * collapsed to a single dash, ends trimmed. Verified 100% coverage
 * across 25 sampled NPCs including new Forgotten Hollow additions.
 *
 * Example: npcSpriteMeowdbUrl("Chief Stan") -> ".../chief-stan.webp"
 */
export function npcSpriteMeowdbUrl(
	name: string | null | undefined,
): string | null {
	if (!name) return null;
	const slug = name
		.toLowerCase()
		.replace(/['\u2019]/g, "")        // Straight + curly apostrophes.
		.replace(/[^a-z0-9]+/g, "-")      // Non-alphanumeric runs -> dash.
		.replace(/^-+|-+$/g, "");         // Trim leading/trailing dashes.
	if (!slug) return null;
	return `${MEOWDB_ROOT}/npcs/${slug}.webp`;
}

/**
 * Full map background render.
 * Example: mapRenderUrl(100000000) -> Henesys town map.
 */
export function mapRenderUrl(
	wzId: number,
	version: string = DEFAULT_VERSION
): string {
	assertValidWzId(wzId, "map");
	return `${CDN_ROOT}/${version}/map/${wzId}/render`;
}

/**
 * Small square minimap overview (the pixel-art layout thumbnail,
 * distinct from the full background render). Useful for compact
 * cards where the giant background image would dominate.
 *
 * Note: this is the maplestory.io-only variant. Callers that also
 * have the internal map id (which is nearly all of them) should
 * prefer `mapMinimapMeowdbUrl(mapId)` first - MeowDB covers the 87
 * CoT2-exclusive maps (Forgotten Hollow etc) that maplestory.io
 * lacks. The `mapThumbnailSrcs` chain below wires this up correctly.
 *
 * Example: mapMinimapUrl(100000000) -> Henesys minimap on maplestory.io.
 */
export function mapMinimapUrl(
	wzId: number,
	version: string = DEFAULT_VERSION
): string {
	assertValidWzId(wzId, "map");
	return `${CDN_ROOT}/${version}/map/${wzId}/minimap`;
}

/**
 * MeowDB minimap by internal map id. Sourced from MeowDB at
 * `/msclassic/maps/minimaps/{9-digit-zero-padded-id}.png`. Sampled
 * 45 random maps (20 with wzId, 25 without): 20/20 hits on maps
 * with wzId, 23/25 hits on maps without (~98% overall). The rare
 * misses are internal test/dev maps in the 9xxxxxxxx range.
 *
 * Returns null for invalid ids (defensive; internal ids are always
 * positive integers in the datamine but the guard exists so
 * template callers can `?.` this without null-coalescing chains).
 *
 * Example: mapMinimapMeowdbUrl(10006000) ->
 *   ".../maps/minimaps/010006000.png" (Forgotten Hollow minimap).
 */
export function mapMinimapMeowdbUrl(
	mapId: number | null | undefined,
): string | null {
	if (mapId == null || !Number.isInteger(mapId) || mapId < 0) return null;
	const padded = String(mapId).padStart(9, "0");
	return `${MEOWDB_ROOT}/maps/minimaps/${padded}.png`;
}

// ==================== osmsdataexplorer.com (skill icons) ====================

const OSMS_ROOT = "https://osmsdataexplorer.com/data/current";

/**
 * Guard for skill IDs. Skill IDs are stringly-typed (leading zeros
 * matter, e.g. Three Snails is "0001000") but must be all-digits
 * and non-empty.
 */
function assertValidSkillId(skillId: string): void {
	if (typeof skillId !== "string" || !/^\d+$/.test(skillId)) {
		throw new Error(
			`Invalid skill ID: expected a non-empty digit string, got ${JSON.stringify(skillId)}`
		);
	}
}

/**
 * Skill icon (the small square shown in skill trees / hotbar).
 * Sourced from ohmi69's Classic World CoT 2 datamine dashboard.
 *
 * Example: skillIconUrl("1001001") -> Power Strike icon.
 */
export function skillIconUrl(skillId: string): string {
	assertValidSkillId(skillId);
	return `${OSMS_ROOT}/images/skills/${skillId}.png`;
}

// ==================== Fallback chains ====================
//
// URL-array builders for the <Sprite> component. Each returns an
// ordered list of URLs from most-canonical to last-resort. The
// component tries them in order via inline onerror hops, so a
// primary CDN 404 costs us one extra round-trip and one image
// swap - no build-time probing, no broken-image glyph.

/**
 * Ordered fallback chain for a mob sprite.
 *   1. MeowDB (Classic World-accurate, primary)
 *   2. maplestory.io v83 render (covers the 9 mobs MeowDB is
 *      missing: Nependeath, Dark Nependeath, Ultra Jr. Necki 1
 *      all resolved via wzId - confirmed 200 via HEAD probe)
 *
 * Pass `wzId=null` for mobs whose name lookup didn't resolve;
 * the fallback is simply skipped and the Sprite hides itself on
 * primary failure.
 */
export function mobSpriteSrcs(
	mobId: number,
	wzId: number | null | undefined,
): string[] {
	// Order matters. maplestory.io is a CDN-backed API with better
	// availability + no cross-origin friction; meowdb is a hobbyist
	// mirror that returns 200 from most origins but occasionally
	// stalls or serves referer-blocked responses in the browser.
	// So: maplestory.io first when we know the wzId, meowdb as a
	// fallback for the 9 mobs with no wzId or if the primary 404s.
	const meowdb = mobSpriteUrl(mobId);
	if (wzId == null) return [meowdb];
	return [`${CDN_ROOT}/${DEFAULT_VERSION}/mob/${wzId}/render/stand`, meowdb];
}

/**
 * Ordered fallback chain for a map thumbnail.
 *   1. MeowDB minimap by internal map id (covers 98% of maps
 *      including all 87 CoT2-exclusive that maplestory.io lacks)
 *   2. maplestory.io minimap by wzId (fallback for the ~7 dev/test
 *      maps MeowDB doesn't have but maplestory.io might)
 *   3. maplestory.io full render (last-resort for shop interiors
 *      and other maps that have no minimap file - ~14% of maps
 *      with wzIds)
 *
 * Returns `[]` only when both mapId AND wzId are missing (very rare -
 * essentially just junk records). Sprint 61's map CDN hunt jumped
 * total coverage from 79.6% to 98.4% by finding the MeowDB URL scheme.
 */
export function mapThumbnailSrcs(
	mapId: number | null | undefined,
	wzId: number | null | undefined,
): string[] {
	const chain: string[] = [];
	const meowdb = mapMinimapMeowdbUrl(mapId);
	if (meowdb) chain.push(meowdb);
	// Also reject 0 - a handful of junk map records have wzId=0
	// AND empty name; treating them like "no wzId" hides both
	// URL fallbacks and (via hasMinimap check) the whole card slot.
	if (wzId != null && wzId > 0) {
		chain.push(`${CDN_ROOT}/${DEFAULT_VERSION}/map/${wzId}/minimap`);
		chain.push(`${CDN_ROOT}/${DEFAULT_VERSION}/map/${wzId}/render`);
	}
	return chain;
}

/**
 * NPC sprite chain.
 *   1. MeowDB by name-slug (Classic World-accurate, covers the 39
 *      NPCs maplestory.io lacks including all Forgotten Hollow NPCs)
 *   2. maplestory.io v83 render by wzId (fallback for any NPC MeowDB
 *      doesn't happen to have; also covers callers that pass wzId
 *      but no name)
 *
 * Pass `name` whenever the dossier has it (which is always for the
 * npc collection). Empty array only when both are missing, letting
 * templates skip the sprite div entirely.
 */
export function npcSpriteSrcs(
	wzId: number | null | undefined,
	name?: string | null | undefined,
): string[] {
	const chain: string[] = [];
	const meowdb = npcSpriteMeowdbUrl(name);
	if (meowdb) chain.push(meowdb);
	if (wzId != null && Number.isInteger(wzId) && wzId > 0) {
		chain.push(`${CDN_ROOT}/${DEFAULT_VERSION}/npc/${wzId}/render/stand`);
	}
	return chain;
}

/**
 * Item icon chain. maplestory.io primary (CDN-backed, serves both
 * current-datamine items AND legacy GMS event items like Frozen
 * Tuna / Maple Flag / Pumpkin Hat - verified 100% for the Hall of
 * Fame roster). MeowDB kept as a fallback for the rare case where
 * maplestory.io has a wzId that its snapshot doesn't cover.
 *
 * Ordering was flipped 2026-09-06 after discovering the Hall of
 * Fame page was 100% falling back to placeholders because MeowDB
 * doesn't have legacy event-item icons and the old fallback URL
 * used `/render/icon` (which 404s) instead of the correct `/icon`.
 */
export function itemIconSrcs(wzId: number): string[] {
	return [
		`${CDN_ROOT}/${DEFAULT_VERSION}/item/${wzId}/icon`,
		itemIconUrl(wzId),
	];
}

/**
 * URL for the themed placeholder SVG that <Sprite> falls back to
 * when every CDN URL in its chain 404s. Six palette-matched
 * placeholders live in /public/images/placeholders/ - see
 * scripts/generate-placeholder-sprites.mjs for the generator.
 *
 * Accepts any string (typed loosely because SiteTheme is defined
 * in an Astro component and not easily importable here). Callers
 * pass their current page theme; unknown themes fall back to
 * henesys so we always return a valid URL.
 */
const KNOWN_PLACEHOLDERS = new Set([
	"henesys", "kerning", "perion", "ellinia", "lith", "sleepywood",
]);
export function themePlaceholderUrl(theme: string): string {
	const safe = KNOWN_PLACEHOLDERS.has(theme) ? theme : "henesys";
	return `/images/placeholders/${safe}.svg`;
}
