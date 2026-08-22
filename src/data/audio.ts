// Theme -> background music mapping.
//
// Tracks are fan-made compositions inspired by MapleStory zones. Real
// game music belongs to NEXON and should not be used without a license.
//
// Silence (null) is a valid entry - it means "no track yet for this
// theme, player stays hidden on those pages."

export interface AudioTrack {
	src: string;
	title: string;
	// Attribution string shown in the player tooltip. Fill in when you
	// know the composer / source.
	credit?: string;
}

export type ThemeName =
	| "henesys"
	| "kerning"
	| "perion"
	| "lith"
	| "ellinia"
	| "sleepywood";

export const themeAudio: Record<ThemeName, AudioTrack | null> = {
	henesys: {
		src: "/audio/henesys.wav",
		title: "Spring in Mushroom Hollow",
		credit: "Fan composition (credit TBD)",
	},
	lith: {
		src: "/audio/lith.wav",
		title: "Harbor of Tomorrow",
		credit: "Fan composition (credit TBD)",
	},
	kerning: {
		src: "/audio/kerning.wav",
		title: "New Age Kerning City",
		credit: "Fan composition (credit TBD)",
	},
	perion: {
		src: "/audio/perion.wav",
		title: "Cliffs of Ancestry",
		credit: "Fan composition (credit TBD)",
	},
	ellinia: null,
	sleepywood: null,
};
