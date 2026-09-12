// Transcode every .wav in public/audio/ to .mp3 at 128kbps stereo.
//
// Why: Cloudflare Pages caps individual files at 25 MiB. Our WAV
// masters range from 12 MB (Henesys) to 34 MB (Sleepywood). MP3
// at 128kbps is indistinguishable from CD-quality WAV for
// background music at typical listening volume, and shrinks
// files by ~10x, well under the cap.
//
// Idempotent: skips files that already have a matching .mp3 with
// a newer mtime than the .wav source. Delete the .mp3 to force
// re-encode.
//
// Usage: `npm run transcode:audio`
// Post-run: this script prints the audio.ts entries you should
// update (in case any src paths still reference .wav).

import { execFileSync } from "node:child_process";
import { readdirSync, statSync, existsSync, unlinkSync } from "node:fs";
import { join, resolve, basename } from "node:path";
import ffmpegPath from "ffmpeg-static";

const AUDIO_DIR = resolve("public/audio");
const BITRATE = "128k";       // stereo VBR-ish - inaudible loss for BGM
const KEEP_WAV = false;       // set true to preserve masters locally

if (!existsSync(AUDIO_DIR)) {
	console.error(`Audio directory not found: ${AUDIO_DIR}`);
	process.exit(1);
}

const wavs = readdirSync(AUDIO_DIR).filter((f) => f.toLowerCase().endsWith(".wav"));
if (wavs.length === 0) {
	console.log("No .wav files to transcode. Nothing to do.");
	process.exit(0);
}

console.log(`Found ${wavs.length} .wav file(s) in public/audio/.`);
console.log(`Bitrate: ${BITRATE} MP3, stereo. ffmpeg binary: ${ffmpegPath}\n`);

let totalBefore = 0;
let totalAfter = 0;
const results = [];

for (const wav of wavs) {
	const wavPath = join(AUDIO_DIR, wav);
	const mp3Name = wav.replace(/\.wav$/i, ".mp3");
	const mp3Path = join(AUDIO_DIR, mp3Name);
	const wavStat = statSync(wavPath);

	if (existsSync(mp3Path) && statSync(mp3Path).mtimeMs > wavStat.mtimeMs) {
		console.log(`  ${wav}  ->  ${mp3Name}  [skipped: up-to-date]`);
		totalBefore += wavStat.size;
		totalAfter += statSync(mp3Path).size;
		results.push({ wav, mp3: mp3Name, skipped: true });
		continue;
	}

	process.stdout.write(`  ${wav}  ->  ${mp3Name}  ... `);
	execFileSync(ffmpegPath, [
		"-y",              // overwrite output
		"-hide_banner",
		"-loglevel", "error",
		"-i", wavPath,
		"-vn",             // no video (defensive)
		"-ac", "2",        // stereo
		"-ar", "44100",    // standard sample rate
		"-b:a", BITRATE,
		"-codec:a", "libmp3lame",
		mp3Path,
	], { stdio: ["ignore", "inherit", "inherit"] });

	const mp3Stat = statSync(mp3Path);
	const ratio = ((1 - mp3Stat.size / wavStat.size) * 100).toFixed(1);
	console.log(
		`${(wavStat.size / 1024 / 1024).toFixed(1)} MB -> ` +
		`${(mp3Stat.size / 1024 / 1024).toFixed(1)} MB (-${ratio}%)`
	);
	totalBefore += wavStat.size;
	totalAfter += mp3Stat.size;
	results.push({ wav, mp3: mp3Name, skipped: false });

	if (!KEEP_WAV) unlinkSync(wavPath);
}

const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
const savedPct = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
console.log(
	`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)} MB -> ` +
	`${(totalAfter / 1024 / 1024).toFixed(1)} MB (-${savedMB} MB, -${savedPct}%)`
);

if (!KEEP_WAV && results.some((r) => !r.skipped)) {
	console.log(`\nDeleted original .wav masters (set KEEP_WAV=true to preserve).`);
	console.log(`Reminder: update src/data/audio.ts src paths from .wav to .mp3 if needed.`);
}
