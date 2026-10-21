/**
 * The /quests catalog as one ordered list of cards, shared by the
 * index page, the /quests/[id] prev/next pager, and <DatabaseStrip>.
 *
 * Merges both sources so every datamined quest is discoverable:
 *   - editorial entries (content collection), EXCEPT party quests,
 *     which live on /party-quests; their cards link to the slug page.
 *   - dossier-only quests (quests.json rows with no non-PQ editorial
 *     entry); their cards link to the numeric ID page.
 *
 * Order: levelMin ascending; within a level, editorial cards lead
 * (Array.prototype.sort is stable, and editorial is concatenated first).
 */

import { getCollection } from "astro:content";
import questDossiers from "../data/db/quests.json";

export interface QuestCard {
	href: string;
	/** Datamine quest ID - joins a card to both of its URL variants. */
	questId: string;
	name: string;
	levelMin: number;
	category: string;
	npcName: string;
	npcLocation: string;
	tagline: string | null;
	classReq: string | null;
	isEditorial: boolean;
}

async function buildQuestCards(): Promise<QuestCard[]> {
	const allEditorial = await getCollection("quests");
	const editorial = allEditorial.filter((q) => q.data.category !== "party-quest");
	const editorialQuestIds = new Set(editorial.map((e) => e.data.questId));

	const editorialCards: QuestCard[] = editorial.map((q) => ({
		href: `/quests/${q.id}`,
		questId: q.data.questId,
		name: q.data.name,
		levelMin: q.data.levelMin,
		category: q.data.category,
		npcName: q.data.npcName,
		npcLocation: q.data.npcLocation,
		tagline: q.data.tagline,
		classReq: q.data.classReq ?? null,
		isEditorial: true,
	}));

	const dossierOnlyCards: QuestCard[] = questDossiers
		.filter((d) => !editorialQuestIds.has(d.id))
		.map((d) => ({
			href: `/quests/${d.id}`,
			questId: d.id,
			name: d.name,
			levelMin: d.levelMin ?? 0,
			category: "datamined",
			npcName: d.npcName ?? "Unknown giver",
			npcLocation: d.startingMaps?.[0]?.mapName ?? d.region ?? "\u2014",
			tagline: null,
			classReq: null,
			isEditorial: false,
		}));

	return [...editorialCards, ...dossierOnlyCards].sort(
		(a, b) => a.levelMin - b.levelMin,
	);
}

// Memoized: the index, ~400 quest detail paths, and the DB strip on six
// landing pages all ask for this list during one build.
let cached: Promise<QuestCard[]> | null = null;

export function getQuestCards(): Promise<QuestCard[]> {
	return (cached ??= buildQuestCards());
}
