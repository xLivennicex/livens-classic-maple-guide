/**
 * Audit: quest items whose source is NOT in our datamine.
 *
 * These are the "reactor-only" items - quest objectives whose
 * `droppedBy` is empty AND `givenByQuests` is empty, meaning
 * our build pipeline knows the item is required for a quest
 * but has no answer to "where does the player actually get it?"
 *
 * In classic MapleStory this almost always means the item comes
 * from a REACTOR (clickable bush, box, or chest on a map). Our
 * `scripts/build-database.mjs` doesn't extract reactor placements
 * yet, so these items create a dangerous content gap: guide
 * authors link the item but have nothing to explain to the reader
 * about where to actually find it.
 *
 * Run: `node scripts/audit-reactor-items.mjs`
 * Add to package.json as `audit:reactors` if adopted.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";

const items = JSON.parse(readFileSync("src/data/db/items.json", "utf8"));
const quests = JSON.parse(readFileSync("src/data/db/quests.json", "utf8"));
const questById = new Map(quests.map((q) => [q.id, q]));

// Reactor-candidate: required by at least one quest, dropped by
// zero mobs, given by zero quests. These are the mystery items.
const orphans = items.filter(
	(i) =>
		(i.requiredByQuests ?? []).length > 0 &&
		(i.droppedBy ?? []).length === 0 &&
		(i.givenByQuests ?? []).length === 0,
);

// Group by quest so authors can see the full scope per guide.
const byQuest = new Map();
for (const it of orphans) {
	for (const r of it.requiredByQuests ?? []) {
		if (!byQuest.has(r.questId)) {
			byQuest.set(r.questId, {
				quest: questById.get(r.questId) ?? null,
				items: [],
			});
		}
		byQuest.get(r.questId).items.push({ id: it.id, name: it.name, count: r.count });
	}
}

// Which quests already have an editorial guide file? That tells
// us whether the gap is "guide exists but is probably vague" vs
// "no guide exists yet". Both deserve attention; the first group
// is higher priority (readers are already landing on a page with
// a hole in it).
const guidesDir = "src/content/quests";
const guideFiles = existsSync(guidesDir) ? readdirSync(guidesDir) : [];
// A guide "covers" a quest if either
//   (a) its frontmatter questId matches, OR
//   (b) the quest ID appears anywhere in the guide body — this is
//       how multi-quest chain guides claim all their steps (e.g.
//       fossil-research-chain.md has questId: "10410" but mentions
//       10405-10409 in its editorial text, so it should count as
//       covering all six).
const guideQuestIds = new Set();
for (const f of guideFiles) {
	if (!f.endsWith(".md")) continue;
	const body = readFileSync(`${guidesDir}/${f}`, "utf8");
	const match = body.match(/^questId:\s*"(\d+)"/m);
	if (match) guideQuestIds.add(match[1]);
	// Pick up every 4-6 digit quest ID mentioned in body text.
	for (const m of body.matchAll(/\b(\d{4,6})\b/g)) {
		guideQuestIds.add(m[1]);
	}
}

/**
 * Classify each orphan item into a likely source bucket. The goal
 * is to separate TRUE reactor gaps (where our data genuinely can't
 * explain the item) from false positives (NPC dialogue handoffs,
 * crafting outputs, job advancement items) that only look like
 * gaps because our pipeline doesn't model those sources explicitly.
 *
 * Heuristics are intentionally conservative; when in doubt an item
 * stays in `reactor-or-unknown` so authors still get prompted.
 */
function classify(item, quest) {
	const name = item.name;

	// NPC dialogue handoff: letters, notes, recommendations. These are
	// handed to the player via NPC chat during a chain, never dropped.
	// The guide author just has to say "talk to NPC X".
	if (/'s (Letter|Note|Recommendation|Reply|Toy|Gift|Cake|Report|Signature|Box|Hammer|Marble|Sauce|Watch|Coin|Roll of Cash|Sack of Cash|Unagi Special|Pink Flower Basket|Present|Last Present)/.test(name)) {
		return "npc-dialogue";
	}
	if (/^(Fossil Box|Fossil Report|Winston's Recommendation|Stuffed Drake Skull|Incomplete Ledger|Bound Ledger|Stamped Ledger|Amended Ledger|Encrypted Document|Deciphered Document|The Proof of a Hero|Alex's Gift Sack|A Gift for Nella|A Gift for JM|Bruce's Special Cake|Mrs\. Ming Ming's Cooking Recipe|Rina's Unagi Special|Lewis's Letter|Chief Stan's Letter|Dances with Balrog's Letter|Grendel the Really Old's Letter|Athena Pierce's Letter|The Dark Lord's Letter|Ayan's Toy Sword|Ayan's Letter|Maria's Letter|Lucas's Letter|Letter L|Letter E|Letter A|Letter F|Letter P|Letter O|Letter I|Letter N|Letter T|Letter S|Reddened Maple Leaf|Hero's Gladius|Old Gladius|Monkey Wrench|The Red Relaxer|Red Chair|Old Chief Stan's Hammer|Chief Stan's Hammer|Smooth Horn Marble|Flying Medicine|Processed Wood|Spool of Thread|Mithril Ingot|Orihalcon Ingot|Gold Ingot|Silver Ingot|Omok Table|Omok Piece: Slime|Omok Piece: Pig|Omok Piece: Octopus|Omok Piece: Mushroom|Rusty Screw|Old Wooden Board|Sparkling Glass Marble|Red Cape|Secret Book|Repaired Wooden Bow|Broken Wooden Bow|Athena Pierce's Box|Torn Note|Vitamin Gummy|Special Stirge Phobia Cure|Weird Medicine|Pure Water|Salad|Roger's Apple|Estelle's Special Sauce)$/.test(name)) {
		return "npc-dialogue";
	}

	// Crafting outputs: Blacksmithing / Woodcrafting / Leatherworking
	// recipe outputs. Player acquires via the crafting system, not drops.
	if (/Ingot$/.test(name) || /^Processed/.test(name) || /^Spool of/.test(name)) {
		return "craft-output";
	}

	// Boss / mini-boss drops that our mob.drops data may not have scraped.
	// Flaming Feather (Red Dragon lair), Moon Rock (Zombie Lupin boss?),
	// Black Feather / Black Crystal (Jr. Balrog family), Fresh Milk (??).
	if (/^(Flaming Feather|Moon Rock|Black Feather|Black Crystal)$/.test(name)) {
		return "likely-boss-drop";
	}

	// Event-only items that don't need regular documentation.
	if (quest?.region === "Event" || /^\[Event\]/.test(quest?.name ?? "")) {
		return "event-only";
	}

	// Everything else: likely a reactor (clickable bush/plant/box on a
	// specific map) or genuinely unknown source. These are the real
	// content gap.
	return "reactor-or-unknown";
}

const sorted = [...byQuest.values()].sort(
	(a, b) => (a.quest?.levelMin ?? 99) - (b.quest?.levelMin ?? 99),
);

// Attach classification + bucket for the report
const byBucket = {
	"reactor-or-unknown": [],
	"likely-boss-drop": [],
	"npc-dialogue": [],
	"craft-output": [],
	"event-only": [],
};
for (const g of sorted) {
	const q = g.quest;
	if (!q) continue;
	// A quest's bucket is the WORST (most unknown) of its items. If a
	// quest needs one reactor item + one NPC letter, we still want it
	// flagged under reactor-or-unknown so the gap is visible.
	const buckets = g.items.map((it) => classify(it, q));
	const priority = ["reactor-or-unknown", "likely-boss-drop", "event-only", "craft-output", "npc-dialogue"];
	const primary = priority.find((p) => buckets.includes(p));
	byBucket[primary].push({ q, items: g.items, buckets });
}

console.log("=== Reactor-candidate quest items ===");
console.log(`${orphans.length} items across ${sorted.length} quests, bucketed:`);
console.log(`  reactor-or-unknown: ${byBucket["reactor-or-unknown"].length} quests  <- real content gap`);
console.log(`  likely-boss-drop:   ${byBucket["likely-boss-drop"].length} quests  <- missing from our mob.drops table`);
console.log(`  event-only:         ${byBucket["event-only"].length} quests  <- skip, time-limited`);
console.log(`  craft-output:       ${byBucket["craft-output"].length} quests  <- player makes via crafting`);
console.log(`  npc-dialogue:       ${byBucket["npc-dialogue"].length} quests  <- NPC hands it to you mid-chain`);
console.log();
console.log("Legend: [G] = editorial guide exists; [-] = no guide yet; (classifications per item)");
console.log();

for (const bucket of ["reactor-or-unknown", "likely-boss-drop", "event-only", "craft-output", "npc-dialogue"]) {
	const list = byBucket[bucket];
	if (list.length === 0) continue;
	console.log(`---- ${bucket.toUpperCase()} (${list.length}) ----`);
	for (const { q, items, buckets } of list) {
		const hasGuide = guideQuestIds.has(q.id);
		const flag = hasGuide ? "[G]" : "[-]";
		const map = q.startingMaps?.[0]?.mapName ?? "?";
		console.log(
			`${flag} Lv${String(q.levelMin ?? "?").padStart(2)} | ${q.id} | ${q.name}  (${q.npcName} @ ${map})`,
		);
		items.forEach((it, i) => {
			const cls = buckets[i] === bucket ? "" : `  <${buckets[i]}>`;
			console.log(`         need ${it.count}x ${it.name}${cls}`);
		});
	}
	console.log();
}
