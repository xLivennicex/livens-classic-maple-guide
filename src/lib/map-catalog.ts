/**
 * Map catalog rules shared by /maps, /maps/[id], and <DatabaseStrip>.
 *
 * One home for "what counts as a browsable map" and "how a region
 * section is addressed", so the list, the count chip, the prev/next
 * pager, and the breadcrumb region link can never disagree.
 */

/**
 * User-facing map kinds - listed on /maps, counted in the DB strip,
 * walked by the pager. Event and dev maps keep dossier pages (other
 * pages cross-link to them) but are hidden from browsing surfaces.
 */
export const SHOWN_MAP_KINDS: ReadonlySet<string> = new Set([
	"training",
	"hidden",
	"town",
]);

export function isShownMapKind(kind: string | null | undefined): boolean {
	return kind != null && SHOWN_MAP_KINDS.has(kind);
}

/**
 * Region order follows the reader's journey (Maple Island -> Victoria
 * Island -> Ossyria). The datamine collapses everything else
 * (Sleepywood, PQ dungeons, Free Market, 2nd-job zones) into "Other".
 * Regions not listed here are appended alpha.
 */
export const MAP_REGION_ORDER: readonly string[] = [
	"Maple Island",
	"Victoria Island",
	"Ossyria",
	"Other",
];

export interface CatalogMap {
	id: number;
	kind: string;
	region?: string | null;
}

export interface MapRegion<T extends CatalogMap> {
	region: string;
	maps: T[];
}

/** The region a map is FILED under on /maps (blank -> "Other"). */
export function mapRegionOf(m: { region?: string | null }): string {
	return m.region || "Other";
}

/**
 * The /maps catalog: browsable maps only, grouped by region in
 * MAP_REGION_ORDER, WZ ID ascending inside each region.
 */
export function buildMapRegions<T extends CatalogMap>(maps: readonly T[]): MapRegion<T>[] {
	const groups = new Map<string, T[]>();
	const browsable = maps
		.filter((m) => isShownMapKind(m.kind))
		.sort((a, b) => a.id - b.id); // filter() copied; safe to sort
	for (const m of browsable) {
		const r = mapRegionOf(m);
		if (!groups.has(r)) groups.set(r, []);
		groups.get(r)!.push(m);
	}
	const known = MAP_REGION_ORDER.filter((r) => groups.has(r));
	const extra = [...groups.keys()].filter((r) => !MAP_REGION_ORDER.includes(r)).sort();
	return [...known, ...extra].map((region) => ({ region, maps: groups.get(region)! }));
}

/** Flattened display order - what the /maps/[id] pager walks. */
export function mapsInDisplayOrder<T extends CatalogMap>(maps: readonly T[]): T[] {
	return buildMapRegions(maps).flatMap((r) => r.maps);
}

/**
 * Fragment id for a region section on /maps.
 * "Victoria Island" -> "region-victoria-island".
 * Prefixed so a region literally named e.g. "Search" can't collide
 * with an existing page id.
 */
export function regionAnchorId(region: string): string {
	const slug = region
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
	return `region-${slug || "other"}`;
}
