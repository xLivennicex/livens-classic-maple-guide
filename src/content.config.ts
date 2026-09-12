/**
 * Content collections config for Liven's Classic Maple Guide.
 *
 * TWO collections live here:
 *
 * 1. `guides` - system / reference guides (Citizenship, Crafting).
 *    Frontmatter drives metadata + optional structured components
 *    (BenefitGrid); markdown body renders as prose.
 *
 * 2. `jobs` - the four base class guides (Warrior, Magician, Bowman,
 *    Thief). Fully-structured frontmatter drives EVERY section - no
 *    markdown body. This trades verbosity in the .md files for
 *    complete consistency: the layout template is the sole authority
 *    on what a job guide looks like, and every job is guaranteed to
 *    have the same eight sections in the same order.
 *
 * 3. `items` - reference database entries for individual game items
 *    (weapons, armor, consumables, etc.). Fully-structured frontmatter
 *    like jobs. Sprites are NOT stored locally - they render from
 *    maplestory.io via a `wzId` per entry (see src/lib/maplestory-cdn.ts
 *    for the URL abstraction that lets us pivot to self-hosting if
 *    the CDN ever goes stale).
 *
 * The collections use different patterns deliberately: system guides
 * vary widely (Citizenship has grade tables, Crafting has recipe grids)
 * so markdown body is the right escape hatch. Job and item guides are
 * all identical shape / different data, so rigid schema wins.
 */

import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

// One entry in the sticky chip navigation at the top of a guide.
const tocEntry = z.object({
	href: z.string(),
	label: z.string(),
});

// ==================== guides collection (existing) ====================

// One town-specific reward within a benefit category card.
const benefitItem = z.object({
	town: z.enum(["henesys", "kerning"]),
	name: z.string(),
	description: z.string(),
});

// One benefit category (e.g. "Citizen of Honor earrings") that
// groups related town-specific rewards under a shared icon.
const benefitCategory = z.object({
	heading: z.string(),
	subtitle: z.string(),
	icon: z.enum(["earring", "chair"]),
	items: z.array(benefitItem),
});

// The verification enum MUST match `SourceType` in src/data/sources.ts
// exactly. If you add a value there, add it here (and vice versa).
// TODO: extract to a shared const to guarantee they can't drift.
const verificationStatusEnum = z.enum([
	"official-announcement",
	"closed-test-info",
	"launch-verified",
	"community-reported",
	"awaiting-confirmation",
	"historical-archive",
]);

const themeEnum = z.enum([
	"henesys",
	"perion",
	"lith",
	"kerning",
	"ellinia",
	"sleepywood",
]);

const guides = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
	schema: z.object({
		// Core metadata
		title: z.string(),
		description: z.string(),
		lastUpdated: z.string(),
		tags: z.array(z.string()).default([]),

		// Legacy display fields (kept for backwards compat with the
		// earlier wrapper .astro pattern; not used by renderer).
		status: z.string().optional(),
		sourceBuild: z.string().optional(),

		// Layout / display config
		theme: themeEnum.default("henesys"),
		decorations: z.boolean().default(false),
		eyebrow: z.string().default("Systems Guide"),
		heading: z.string(),
		tagline: z.string(),

		// Verification
		verificationStatus: verificationStatusEnum,
		verificationNote: z.string().optional(),
		sourceSlugs: z.array(z.string()).default([]),

		// Navigation
		toc: z.array(tocEntry).default([]),

		// Optional custom sections
		benefits: z.array(benefitCategory).optional(),
	}),
});

// ==================== jobs collection (new) ====================

// One row in the skill table. All string fields allow HTML for inline
// formatting (<strong>, <em>). Rendered via set:html in the layout.
//
// `skillId` (optional) is the canonical MapleStory skill ID as a
// leading-zero-preserving string (e.g. "1001001" for Power Strike).
// When present, the layout renders the skill icon next to the name
// via skillIconUrl() from src/lib/maplestory-cdn.ts. When absent,
// the row renders text-only - so retrofitting icons across guides
// can be incremental without breaking anything.
const skillEntry = z.object({
	name: z.string(),
	type: z.string(),      // Passive / Buff / Attack / Debuff
	maxLevel: z.string(),  // free-form so we can say "20 (v83)"
	summary: z.string(),
	suggested: z.string(),
	skillId: z.string().regex(/^\d+$/).optional(),
});

// One preview-skill inside a second-job branch card. Kept minimal on
// purpose - the goal is "scan-read what makes this branch tick",
// not "replicate the full skill tree". Full trees will live on
// dedicated /jobs/{class}/{branch} pages later.
const branchPreviewSkill = z.object({
	name: z.string(),
	skillId: z.string().regex(/^\d+$/),
	summary: z.string(),           // one-line "what it does + why it matters"
});

// One card in the second-job branches grid. `subtitleLabel` varies
// across classes (Weapon / Element / Specialty) so it's authored
// per guide rather than hard-coded in the template.
//
// `previewSkills` is optional so branches without authored preview
// data still render the base card. When present, JobGuideLayout
// makes the whole card a native <details> element - click to expand
// the signature skills.
const secondJobBranch = z.object({
	name: z.string(),
	subtitleLabel: z.string(),  // "Weapon" | "Element" | "Specialty"
	subtitleValue: z.string(),  // "Sword or Axe" | "Fire and Poison" | ...
	summary: z.string(),
	bestFor: z.string(),
	previewSkills: z.array(branchPreviewSkill).optional(),
});

// One training-route card. `note` is the extra context paragraph.
const trainingRoute = z.object({
	levels: z.string(),   // "Levels 1 - 10 (Beginner)"
	where: z.string(),
	what: z.string(),
	note: z.string(),
});

// One FAQ entry. Optional badge appends a compact SourceBadge inline.
const faqEntry = z.object({
	question: z.string(),
	answer: z.string(),   // HTML allowed
	badge: verificationStatusEnum.optional(),
});

// Optional InfoCard inside a section. Body allows HTML.
const infoCardSpec = z.object({
	eyebrow: z.string(),
	heading: z.string(),
	body: z.string(),
});

// Named-and-described option (used for AP builds, weapon choices,
// armor progression phases). Kept as one type because all three have
// the same shape: a label and a body of prose.
const namedOption = z.object({
	name: z.string(),
	description: z.string(),
});

const jobs = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/jobs" }),
	schema: z.object({
		// ==== Core metadata ====
		title: z.string(),          // "Warrior"
		tagline: z.string(),
		lastUpdated: z.string(),

		// ==== Card / directory fields ====
		// These drive the /jobs directory and the homepage jobs grid.
		// Folding them into the guide frontmatter means one source of
		// truth per class (no more src/data/jobs.ts).
		monogram: z.string().length(1),
		cardDescription: z.string(),
		listOrder: z.number(),      // canonical order on /jobs

		// ==== Layout ====
		theme: themeEnum,
		decorations: z.boolean().default(true),

		// ==== Verification ====
		verificationStatus: verificationStatusEnum,
		verificationNote: z.string().optional(),
		sourceSlugs: z.array(z.string()).default([]),

		// ==== Table of contents ====
		toc: z.array(tocEntry).default([]),

		// ==== Content sections ====
		// Overview: optional identity-at-a-glance card + intro paragraphs
		// + a "best/not ideal for" callout. The identity card is the
		// 5-second scan-read pitch (primary stat, weapon families,
		// mobility profile); paragraphs are for readers who want the
		// prose reasoning. Callout is the "is this class for me?" nudge.
		overview: z.object({
			identity: z.object({
				primaryStat: z.string(),      // "STR", "INT", "DEX", "LUK"
				secondaryStat: z.string(),    // "DEX (for accuracy)", etc.
				damageType: z.string(),       // "Physical melee" | "Magical elemental"
				weaponFamilies: z.string(),   // "Swords, Axes, Blunt Weapons, Spears, Polearms"
				healthProfile: z.string(),    // "Highest HP in the game"
				mobilityProfile: z.string(),  // "Low early; Rush at 30 fixes it"
				playStyle: z.string(),        // one-liner
			}).optional(),
			paragraphs: z.array(z.string()).min(1),
			callout: z.string().optional(),
		}),

		// Advancement: level+stat requirements, where-to-go steps,
		// optional followup paragraph and callout.
		advancement: z.object({
			requirements: z.array(z.string()).min(1),
			steps: z.array(z.string()).min(1),
			followup: z.string().optional(),
			callout: z.string().optional(),
		}),

		// AP allocation: intro + two-build comparison + optional notes.
		apAllocation: z.object({
			summary: z.string(),
			builds: z.array(namedOption),
			notes: z.string().optional(),
			callout: z.string().optional(),
		}),

		// Skills: order-of-investment lede + rows + optional InfoCard.
		skills: z.object({
			order: z.string(),   // the section-lede paragraph
			entries: z.array(skillEntry).min(1),
			infoCard: infoCardSpec.optional(),
		}),

		// Training routes: intro + N route cards.
		training: z.object({
			intro: z.string(),
			routes: z.array(trainingRoute).min(1),
		}),

		// Equipment: intro + optional weapons section + armor phases.
		equipment: z.object({
			intro: z.string(),
			weaponsIntro: z.string().optional(),
			weapons: z.array(namedOption).optional(),
			weaponsNote: z.string().optional(),
			armorProgression: z.array(namedOption).min(1),
			callout: z.string().optional(),
		}),

		// Second-job branches: intro + N cards + optional InfoCard.
		secondJobs: z.object({
			intro: z.string(),
			branches: z.array(secondJobBranch).min(1),
			infoCard: infoCardSpec.optional(),
		}),

		// FAQ: N Q&A pairs, each with an optional inline badge.
		faq: z.array(faqEntry).min(1),
	}),
});

// ==================== items collection (new) ====================

// Broad category buckets. Kept intentionally coarse for MVP: a page
// listing "all weapons" is more useful than one listing "all one-
// handed swords" until we have hundreds of entries. Subcategory
// field below carries the fine-grained type as free-form text.
const itemCategoryEnum = z.enum([
	"weapon",
	"armor",
	"accessory",
	"consumable",
	"etc",       // MapleStory's grab-bag category (materials, quest items)
	"cash",      // NX/cash shop items - rare on our site but real
	"other",
]);

// Stat requirements to equip an item. All optional because most items
// don't need all four (Warrior gear needs STR/DEX, Magician needs INT/LUK).
const statRequirements = z.object({
	str: z.number().optional(),
	dex: z.number().optional(),
	int: z.number().optional(),
	luk: z.number().optional(),
});

// Combat / defensive stats an item provides. All optional - weapons
// have attack, armor has defense, consumables have neither.
const combatStats = z.object({
	attack: z.number().optional(),          // physical damage (weapons)
	magicAttack: z.number().optional(),     // magic damage (wand/staff)
	defense: z.number().optional(),         // weapon defense (armor)
	magicDefense: z.number().optional(),
	accuracy: z.number().optional(),
	avoidability: z.number().optional(),    // in-game shows as EVA / Evasion
	critical: z.number().optional(),        // in-game shows as CRT / Critical Rate
	speed: z.number().optional(),
	jump: z.number().optional(),
});

// Bonus stats granted while equipped (e.g. an item that gives +3 INT).
const bonusStats = z.object({
	str: z.number().optional(),
	dex: z.number().optional(),
	int: z.number().optional(),
	luk: z.number().optional(),
	hp: z.number().optional(),
	mp: z.number().optional(),
});

const items = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/items" }),
	schema: z.object({
		// ==== Identity ====
		name: z.string(),
		wzId: z.number().int().positive(),  // maplestory.io lookup key
		category: itemCategoryEnum,
		subcategory: z.string().optional(), // "One-handed Sword", "Overall", etc.

		// ==== Requirements ====
		levelReq: z.number().int().min(0).optional(),
		jobReq: z.string().optional(),         // "Warrior" | "Magician" | "Any" etc.
		statReq: statRequirements.optional(),

		// ==== Stats ====
		combat: combatStats.optional(),
		bonus: bonusStats.optional(),
		slots: z.number().int().min(0).optional(),   // upgrade slots
		attackSpeed: z.string().optional(),          // "Fast (4)", "Normal (6)"

		// ==== Economy / obtaining ====
		mesos: z.number().int().min(0).optional(),  // NPC sell price
		droppedBy: z.array(z.string()).default([]), // monster slugs (future refs)
		soldBy: z.array(z.string()).default([]),    // NPC slugs (future refs)

		// ==== Editorial - THIS is where we add flavor beyond raw stats ====
		tagline: z.string(),                   // one-liner under the item name
		editorial: z.string(),                 // our voice, prose (markdown OK)
		callout: z.string().optional(),        // "pro tip" box - HTML allowed

		// ==== Cross-links ====
		relatedGuides: z.array(z.string()).default([]), // URL paths like "/jobs/warrior"

		// ==== Verification (same pattern as guides + jobs) ====
		verificationStatus: verificationStatusEnum,
		verificationNote: z.string().optional(),
		sourceSlugs: z.array(z.string()).default([]),

		// ==== Layout ====
		theme: themeEnum.default("henesys"),
		lastUpdated: z.string(),
	}),
});

// ==================== quests collection (new) ====================

// Broad category buckets for quests. Kept coarse for MVP so the
// directory page can offer meaningful filtering without exploding
// into 30 sub-types. Refine when we have >50 entries.
//
// The `party-quest` category is what feeds /party-quests (rather than
// a separate collection - PQ metadata overlaps 95% with regular
// quests, so YAGNI on a whole new schema). If PQ-specific fields
// like party size or PQ chest drop tables become important later,
// promote to a dedicated schema then.
const questCategoryEnum = z.enum([
	"tutorial",        // Maple Island / new-player onboarding quests
	"advancement",     // job advancement quests (1st, 2nd, 3rd, 4th)
	"story",           // main story chain quests
	"area",            // area-specific side quests
	"crafting",        // crafting profession quests
	"citizenship",     // town-citizenship quests
	"party-quest",     // PQs - routed to /party-quests instead of /quests
	"unique-reward",   // quests famous for a specific end reward (bathrobe etc)
	"seasonal",        // event / limited-time quests
	"other",
]);

// One reward from completing a quest. Shape mirrors the CoT 2
// datamine's reward objects but with a human-readable `label` we
// author ourselves (the datamine gives us item IDs; we resolve
// them to names).
//
// `itemSlug` (optional) is the crown-jewel field for player UX: when
// a reward references an item that exists in our items collection,
// setting itemSlug turns the reward into a clickable sprite-badge
// linking to /items/{slug}. That completes the reward-worth-it
// evaluation loop we want new players to have. If itemSlug is
// absent (item not yet in collection), the reward renders as plain
// text - no breakage, just no cross-link.
const questReward = z.object({
	type: z.enum(["exp", "mesos", "item", "skill-book", "next-quest", "other"]),
	label: z.string(),                       // "3,150 EXP" | "1x White Potion"
	details: z.string().optional(),          // "Unlocks 2nd job branch choice"
	itemSlug: z.string().optional(),         // slug in the items collection
	// Canonical MapleStory item WZ ID. When present, we render the
	// item sprite inline on the reward - EVEN IF we don't have an
	// item page for it yet. That way readers get visual scannability
	// for reward tables long before we've written editorial for
	// every single quest-reward item.
	itemId: z.number().int().positive().optional(),
});

const quests = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/quests" }),
	schema: z.object({
		// ==== Identity ====
		questId: z.string().regex(/^\d+$/),   // canonical CoT 2 quest ID as string
		name: z.string(),
		category: questCategoryEnum,
		tagline: z.string(),

		// ==== Requirements ====
		levelMin: z.number().int().min(0),
		classReq: z.string().optional(),      // "Warrior" | "Any" etc.
		prerequisiteQuest: z.string().optional(),  // slug of prior quest

		// ==== NPC / location ====
		npcName: z.string(),
		npcLocation: z.string(),              // "Perion", "Ellinia", etc.
		// Canonical MapleStory NPC WZ ID (as used by maplestory.io).
		// When present, QuestLayout renders the NPC sprite as the hero
		// visual. Optional so historical or unknown-ID quests still
		// render without a sprite instead of failing the schema.
		//
		// IMPORTANT: the ohmi CoT 2 datamine uses INTERNAL ORDINAL IDs
		// (Heena=1, Sera=2, ...) that do NOT match the canonical WZ IDs
		// (Heena=2101, Sera=2100, ...). Always cross-reference against
		// maplestory.io's NPC listing before setting this field, or
		// the CDN will 404. See `docs/npc-id-lookup.md` for the growing
		// mapping table and a copy-pasteable lookup snippet.
		npcId: z.number().int().positive().optional(),

		// ==== Chain info (quest chains are common - most quests are
		// step N of M) ====
		chainName: z.string().optional(),     // "The Warrior's Next Journey"
		chainStep: z.number().int().min(1).optional(),
		chainLength: z.number().int().min(1).optional(),
		nextQuest: z.string().optional(),     // slug of next quest

		// ==== Narrative ====
		description: z.string(),              // HTML allowed - the in-game text

		// ==== Rewards ====
		rewards: z.array(questReward).default([]),

		// ==== Editorial - THIS is where our voice lives ====
		editorial: z.string(),                // our commentary (HTML allowed)
		callout: z.string().optional(),       // "pro tip" box

		// ==== Cross-links ====
		relatedGuides: z.array(z.string()).default([]),

		// ==== Verification ====
		verificationStatus: verificationStatusEnum,
		verificationNote: z.string().optional(),
		sourceSlugs: z.array(z.string()).default([]),

		// ==== Layout ====
		theme: themeEnum.default("henesys"),
		lastUpdated: z.string(),
	}),
});

// ==================== blog collection (editorial posts) ====================
//
// Editorial + opinion pieces. Distinct from `guides` (which are
// evergreen reference material) - blog entries are dated, personal,
// and can go stale as circumstances change. Comments are enabled on
// blog posts via the <Comments> component (Giscus-backed - see
// src/config/giscus.ts to configure).
//
// Blog posts render markdown bodies through /pages/blog/[slug].astro
// which pulls layout from BaseLayout. Metadata drives the /blog index
// (title, publishedAt, tags, excerpt for card blurbs).

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		// ==== Core metadata ====
		title: z.string(),
		description: z.string(),          // for meta tags + card blurb
		excerpt: z.string().optional(),   // longer teaser for /blog index; falls back to description
		publishedAt: z.string(),          // ISO date "2026-09-11"
		updatedAt: z.string().optional(), // if edited post-publish

		// ==== Attribution ====
		author: z.string().default("Liven"),

		// ==== Discovery ====
		tags: z.array(z.string()).default([]),
		category: z.enum([
			"news",           // News summary + commentary
			"opinion",        // Editorial / hot take
			"changelog",      // Site + guide updates
			"community",      // Community discussion / meta
		]).default("opinion"),

		// ==== Layout ====
		theme: themeEnum.default("kerning"),
		decorations: z.boolean().default(false),

		// ==== Optional flags ====
		featured: z.boolean().default(false), // pin to top of /blog index
		commentsEnabled: z.boolean().default(true),

		// ==== Source link (news commentary posts should cite) ====
		sourceUrl: z.string().url().optional(),
		sourceLabel: z.string().optional(), // e.g. "Nexon official memo"
	}),
});

// `reference` is imported so future collections can cross-reference
// (e.g. quests referencing items in their reward table). Not used
// yet but leaving the import documented so future contributors know
// it's available.
void reference;

export const collections = { guides, jobs, items, quests, blog };
