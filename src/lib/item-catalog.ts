/**
 * Display order of the /items catalog, shared by the index page and the
 * /items/[item] prev/next pager so "Next" always means "the next row on
 * the list".
 *
 * Order: GROUP_ORDER categories, each split into its subcategories in
 * GROUP_ORDER sequence (unknown subs appended alpha), then any category
 * missing from GROUP_ORDER (defensive, alpha). WZ ID ascending within
 * every section.
 */

export interface CatalogItem {
	id: number;
	category?: string | null;
	sub?: string | null;
}

export interface ItemSection<T extends CatalogItem> {
	category: string;
	sub: string;
	items: T[];
}

/** A player scans Equipment first, then Consumable, then materials. */
export const ITEM_GROUP_ORDER: ReadonlyArray<readonly [string, readonly string[]]> = [
	["Equipment", ["Weapon", "Overall", "Top", "Bottom", "Shoes", "Glove", "Hat", "Cape", "Shield", "Earring", "Face Accessory", "Eye Accessory", "Pendant", "Belt", "Ring"]],
	["Consumable", ["Consumable"]],
	["Etc", ["Etc"]],
	["Setup", ["Setup"]],
];

export function buildItemSections<T extends CatalogItem>(items: readonly T[]): ItemSection<T>[] {
	// Copy before sorting: the input is usually a module-cached JSON
	// import shared by every page in the build. Sorting it in place
	// silently reorders it for every other importer.
	const byId = [...items].sort((a, b) => a.id - b.id);

	const groups: Record<string, Record<string, T[]>> = {};
	for (const item of byId) {
		const cat = item.category ?? "Unknown";
		const sub = item.sub ?? "Uncategorized";
		(groups[cat] ??= {});
		(groups[cat][sub] ??= []).push(item);
	}

	const sections: ItemSection<T>[] = [];
	for (const [cat, subOrder] of ITEM_GROUP_ORDER) {
		const catGroups = groups[cat];
		if (!catGroups) continue;
		for (const sub of subOrder) {
			if (catGroups[sub]) sections.push({ category: cat, sub, items: catGroups[sub] });
		}
		for (const sub of Object.keys(catGroups).sort()) {
			if (!subOrder.includes(sub)) sections.push({ category: cat, sub, items: catGroups[sub] });
		}
	}
	for (const cat of Object.keys(groups).sort()) {
		if (ITEM_GROUP_ORDER.some(([c]) => c === cat)) continue;
		for (const sub of Object.keys(groups[cat]).sort()) {
			sections.push({ category: cat, sub, items: groups[cat][sub] });
		}
	}
	return sections;
}

/** Flattened display order - what the pager walks. */
export function itemsInDisplayOrder<T extends CatalogItem>(items: readonly T[]): T[] {
	return buildItemSections(items).flatMap((s) => s.items);
}
