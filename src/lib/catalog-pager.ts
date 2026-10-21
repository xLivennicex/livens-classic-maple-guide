/**
 * Prev/next neighbours for <PrevNextPager>.
 *
 * Contract: pass the records in EXACTLY the order the section's index
 * page displays them. The pager is "the entry before/after this one on
 * the list", so the list order is the single source of truth - each
 * detail route must get that order from the same helper its index uses
 * (lib/item-catalog, lib/quest-catalog, lib/map-catalog, ...), never
 * from a re-sort of its own.
 */

export interface PagerLink {
	href: string;
	label: string;
}

export interface Pager {
	prev: PagerLink | null;
	next: PagerLink | null;
}

/**
 * Build a key -> {prev, next} map over an ordered list in one pass.
 * O(n) total, so each detail page does an O(1) lookup instead of
 * re-scanning the catalog.
 */
export function buildPagerMap<T, K>(
	ordered: readonly T[],
	keyOf: (record: T) => K,
	linkOf: (record: T) => PagerLink,
): Map<K, Pager> {
	const pagers = new Map<K, Pager>();
	ordered.forEach((record, i) => {
		pagers.set(keyOf(record), {
			prev: i > 0 ? linkOf(ordered[i - 1]) : null,
			next: i < ordered.length - 1 ? linkOf(ordered[i + 1]) : null,
		});
	});
	return pagers;
}
