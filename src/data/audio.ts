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
	// All tracks encoded as 128kbps MP3 (via scripts/transcode-audio.mjs).
	// Originals were WAV masters; MP3 shrinks 10x with no audible loss
	// for BGM and clears Cloudflare Pages' 25 MiB per-file cap. If a new
	// .wav gets dropped in public/audio/, run `npm run transcode:audio`.
	henesys: {
		src: "/audio/henesys.mp3",
		title: "Spring in Mushroom Hollow",
		credit: "Fan composition (credit TBD)",
	},
	lith: {
		src: "/audio/lith.mp3",
		title: "Harbor of Tomorrow",
		credit: "Fan composition (credit TBD)",
	},
	kerning: {
		src: "/audio/kerning.mp3",
		title: "New Age Kerning City",
		credit: "Fan composition (credit TBD)",
	},
	perion: {
		src: "/audio/perion.mp3",
		title: "Cliffs of Ancestry",
		credit: "Fan composition (credit TBD)",
	},
	ellinia: null,
	sleepywood: {
		src: "/audio/sleepywood.mp3",
		title: "Watchful Deep",
		credit: "Fan composition (credit TBD)",
	},
};
