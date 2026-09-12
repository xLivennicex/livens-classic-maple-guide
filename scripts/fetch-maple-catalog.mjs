// Fetch the FULL maplestory.io GMS/83 item catalog and produce a
// slot-classified source file for the character customizer.
//
// Why: our upstream data feed (osmsdataexplorer.com CoT dump) is
// missing cash-shop items entirely (NX outfits, cash hairs, cash
// faces, mounts, appearance effects). maplestory.io's item enum
// endpoint returns all 12,578 items with the crucial fields:
//   - isCash            (NX flag)
//   - desc              (item description shown on hover)
//   - typeInfo.category / subCategory  (for filtering + badges)
//
// This lets the customizer show a "CASH" badge, tooltip
// descriptions, and (in a follow-up sprint) a wishlist UI where
// people can save cash items they want to buy in-game.
//
// Output: src/data/character-catalog-source.json - one entry per
// slot-mappable item, ready for validate-character-items.mjs to
// probe against the render endpoint.
//
// Usage: npm run fetch:maple-catalog

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const CATALOG_URL = "https://maplestory.io/api/GMS/83/item";
const OUT = resolve("src/data/character-catalog-source.json");

// Same slot classification as scripts/validate-character-items.mjs
// and src/lib/character-slots.ts. (One future sprint could DRY
// these three copies into a shared JSON, but YAGNI for now.)
function slotForItem(id) {
	if (id >= 1000000 && id < 1010000) return "hat";
	// Face acc + Eye acc removed - GMS/83 render endpoint drops them.
	if (id >= 1030000 && id < 1040000) return "earring";
	if (id >= 1040000 && id < 1050000) return "top";
	if (id >= 1050000 && id < 1060000) return "overall";
	if (id >= 1060000 && id < 1070000) return "bottom";
	if (id >= 1070000 && id < 1080000) return "shoes";
	if (id >= 1080000 && id < 1090000) return "gloves";
	if (id >= 1100000 && id < 1110000) return "cape";
	if (id >= 1300000 && id < 1800000) return "weapon";
	if (id >= 20000 && id < 30000) return "face";
	if (id >= 30000 && id < 40000) return "hair";
	return null;
}

async function main() {
	console.log("Fetching maplestory.io catalog (~4.5 MB)...");
	const start = Date.now();
	const res = await fetch(CATALOG_URL);
	if (!res.ok) throw new Error(`fetch: HTTP ${res.status}`);
	const all = await res.json();
	console.log(`  got ${all.length} items in ${Date.now() - start}ms\n`);

	const catalog = [];
	const cashByCategory = {};
	const slotBySlot = {};
	let cashCount = 0, nonCashCount = 0;

	for (const it of all) {
		if (!it.name || it.name.trim() === "") continue;
		const slot = slotForItem(it.id);
		if (!slot) continue;

		const entry = {
			id: it.id,
			name: it.name,
			slot,
			isCash: it.isCash === true,
			desc: (it.desc || "").trim() || null,
			category: it.typeInfo?.category ?? null,
			subCategory: it.typeInfo?.subCategory ?? null,
		};
		catalog.push(entry);

		slotBySlot[slot] = (slotBySlot[slot] || 0) + 1;
		if (entry.isCash) {
			cashCount++;
			const k = entry.category + " / " + entry.subCategory;
			cashByCategory[k] = (cashByCategory[k] || 0) + 1;
		} else {
			nonCashCount++;
		}
	}

	// Stable sort - cash items last within each slot so non-cash
	// (in-game) items show up first in the picker. Users can
	// filter to cash-only via the category toggle.
	catalog.sort((a, b) => {
		if (a.slot !== b.slot) return a.slot.localeCompare(b.slot);
		if (a.isCash !== b.isCash) return a.isCash ? 1 : -1;
		return a.name.localeCompare(b.name);
	});

	console.log(`Catalog summary:`);
	console.log(`  total slot-mappable items: ${catalog.length}`);
	console.log(`  non-cash: ${nonCashCount}  |  cash: ${cashCount}\n`);
	console.log(`Per slot:`);
	for (const s of Object.keys(slotBySlot).sort()) {
		console.log(`  ${s.padEnd(10)}  ${String(slotBySlot[s]).padStart(4)}`);
	}
	console.log(`\nCash breakdown (top 15 sub-categories):`);
	const top = Object.entries(cashByCategory).sort((a, b) => b[1] - a[1]).slice(0, 15);
	for (const [k, v] of top) console.log(`  ${String(v).padStart(4)}  ${k}`);

	writeFileSync(OUT, JSON.stringify(catalog));
	console.log(`\nWrote ${OUT} (${(JSON.stringify(catalog).length / 1024).toFixed(1)} KB)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
