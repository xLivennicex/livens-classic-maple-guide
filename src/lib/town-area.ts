/**
 * Town-area helpers.
 *
 * The datamined map IDs are grouped by geographic proximity to
 * a town: Henesys town is 10001000, its sub-maps and adjacent
 * fields all share the 10001xxx prefix. That's the heuristic we
 * exploit here to answer "what maps belong to Town X?".
 *
 * Not 100% accurate for boundary maps (e.g., Swamp of Despair I
 * lives at 10003090 but flavor-wise it's a Perion warm-up), but
 * that's the client's own classification - we surface it faithfully.
 *
 * Kept generic so the same helpers work for Ossyria towns once we
 * extend the deep-dive treatment.
 */

// Loose row shapes - `maps.json` typing is complex and inconsistent
// so we type by field usage rather than importing a shared type.
interface MapRow {
	id: number;
	wzId?: number | null;
	name?: string | null;
	streetName?: string | null;
	region?: string | null;
	isTown?: boolean | null;
	mobs?: unknown[];
	npcs?: Array<{ id: number; name: string }>;
	questsHere?: unknown[];
	exits?: Array<{ toMapId: number; toMapName: string }>;
	mobLevelRange?: { min: number; max: number } | null;
}

interface NpcRow {
	id: number;
	wzId?: number | null;
	name?: string | null;
	questsGiven?: Array<{ questId: string; questName: string; level?: number | null; region?: string | null }>;
	mapsInhabited?: Array<{ mapId: number; mapName?: string }>;
}

interface QuestRow {
	id: string | number;
	name: string;
	npcName?: string | null;
	npcId?: number | null;
	levelMin?: number | null;
	region?: string | null;
	startingMaps?: number[];
	area?: string | null;
	description?: string | null;
}

/**
 * All maps whose IDs share the town's 5-digit prefix (id / 1000).
 * Includes the town map itself, its sub-shops, hunting grounds,
 * dungeon rooms - everything the client filed under that town.
 */
export function getTownAreaMaps(townMapId: number, allMaps: MapRow[]): MapRow[] {
	const prefix = Math.floor(townMapId / 1000);
	return allMaps.filter((m) => Math.floor(m.id / 1000) === prefix);
}

/**
 * Split a town's maps into three intuitive buckets for the dossier
 * page. Sorted by name so the render order is stable.
 */
export function bucketTownMaps(areaMaps: MapRow[], townMapId: number) {
	const interiors: MapRow[] = [];
	const hunts: MapRow[] = [];
	const other: MapRow[] = [];
	for (const m of areaMaps) {
		if (m.id === townMapId) continue; // town map itself rendered separately
		if (m.isTown) interiors.push(m);
		else if ((m.mobs?.length ?? 0) > 0) hunts.push(m);
		else other.push(m);
	}
	const byName = (a: MapRow, b: MapRow) => (a.name ?? "").localeCompare(b.name ?? "");
	return {
		interiors: interiors.sort(byName),
		hunts: hunts.sort(byName),
		other: other.sort(byName),
	};
}

/**
 * Full NPC dossiers for everyone stationed on the given map (in
 * dossier order - typically sorted by NPC id ascending which
 * mirrors the client's spawn order).
 */
export function getTownNpcs(map: MapRow, allNpcs: NpcRow[]): NpcRow[] {
	const stationed = map.npcs ?? [];
	const npcById = new Map(allNpcs.map((n) => [n.id, n]));
	return stationed
		.map((s) => npcById.get(s.id))
		.filter((n): n is NpcRow => Boolean(n));
}

/**
 * Every quest given by any NPC stationed in this town, deduped by
 * quest id and sorted by level ascending (null-level quests go last).
 * This is the "what can I do in this town?" list - broader than
 * `map.questsHere` (which only tracks quests targeting mobs on the
 * town map, and towns rarely have mobs).
 */
export function getTownQuests(townNpcs: NpcRow[], allQuests: QuestRow[]): QuestRow[] {
	const seen = new Set<string | number>();
	const questById = new Map(allQuests.map((q) => [String(q.id), q]));
	const out: QuestRow[] = [];
	for (const npc of townNpcs) {
		for (const g of npc.questsGiven ?? []) {
			if (seen.has(g.questId)) continue;
			seen.add(g.questId);
			const full = questById.get(String(g.questId));
			if (full) out.push(full);
			else {
				// NPC's questsGiven has strictly less data than the top-level
				// quests array, but if a quest is missing from quests.json
				// we still want to render something rather than drop it.
				out.push({
					id: g.questId,
					name: g.questName,
					npcName: npc.name ?? null,
					npcId: npc.id,
					levelMin: g.level ?? null,
					region: g.region ?? null,
				});
			}
		}
	}
	return out.sort((a, b) => {
		const la = a.levelMin ?? 999;
		const lb = b.levelMin ?? 999;
		if (la !== lb) return la - lb;
		return (a.name ?? "").localeCompare(b.name ?? "");
	});
}

/**
 * Group a quest list into level bands for readable rendering. Bands
 * are inclusive on the low end, exclusive on the high end (10-15
 * covers 10..14). Quests with no level land in "?".
 */
export function groupQuestsByBand(quests: QuestRow[]): Array<{ band: string; quests: QuestRow[] }> {
	const BANDS: Array<[string, (lv: number) => boolean]> = [
		["1-10",   (lv) => lv >= 1 && lv < 10],
		["10-20",  (lv) => lv >= 10 && lv < 20],
		["20-30",  (lv) => lv >= 20 && lv < 30],
		["30-45",  (lv) => lv >= 30 && lv < 45],
		["45+",    (lv) => lv >= 45],
	];
	const buckets = BANDS.map(([band]) => ({ band, quests: [] as QuestRow[] }));
	const noLv: QuestRow[] = [];
	for (const q of quests) {
		const lv = q.levelMin ?? null;
		if (lv == null) { noLv.push(q); continue; }
		const idx = BANDS.findIndex(([, pred]) => pred(lv));
		if (idx >= 0) buckets[idx]!.quests.push(q);
		else noLv.push(q);
	}
	if (noLv.length) buckets.push({ band: "Unknown level", quests: noLv });
	return buckets.filter((b) => b.quests.length > 0);
}

/**
 * Direct exits from a map, resolved against the maps table so we
 * can render them as cards linking to dossier pages. Dedupes and
 * skips broken (unresolved) targets.
 */
export function resolveExits(map: MapRow, allMaps: MapRow[]): MapRow[] {
	const byId = new Map(allMaps.map((m) => [m.id, m]));
	const seen = new Set<number>();
	const out: MapRow[] = [];
	for (const e of map.exits ?? []) {
		if (seen.has(e.toMapId)) continue;
		seen.add(e.toMapId);
		const dest = byId.get(e.toMapId);
		if (dest) out.push(dest);
	}
	return out;
}
