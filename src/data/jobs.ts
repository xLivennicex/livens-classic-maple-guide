// Shared job definitions. One source of truth for the homepage preview,
// the /jobs directory, and any future cross-links.

export interface Job {
	slug: string;
	name: string;
	// Short monogram displayed in the job card. Kept as data (not JSX)
	// so the same job list can drive plain text contexts like RSS later.
	monogram: string;
	description: string;
	// null means "guide not written yet" so the UI can render a placeholder
	// button instead of a real link. Avoids scattering `if` checks everywhere.
	href: string | null;
}

export const jobs: Job[] = [
	{
		slug: "warrior",
		name: "Warrior",
		monogram: "W",
		description:
			"Durable melee combat, weapon planning, and steady progression.",
		href: "/jobs/warrior",
	},
	{
		slug: "magician",
		name: "Magician",
		monogram: "M",
		description:
			"Early advancement, MP management, and elemental skill paths.",
		href: "/jobs/magician",
	},
	{
		slug: "bowman",
		name: "Bowman",
		monogram: "B",
		description:
			"Ranged positioning, equipment choices, and precise attacks.",
		href: null,
	},
	{
		slug: "thief",
		name: "Thief",
		monogram: "T",
		description:
			"Fast movement, LUK planning, claws, daggers, and throwing stars.",
		href: null,
	},
];
