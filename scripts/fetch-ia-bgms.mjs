// One-off fetch: pull matching v83 BGM tracks from the Internet
// Archive item `MapleStoryOST` and place them at the WZ-canonical
// paths under public/audio/bgm/. Idempotent: skips files that
// already exist. Prints a summary at the end.
//
// Legal: this script only hits archive.org (public, community-
// uploaded MapleStory OST item that has been up since 2023-08).
// Files it downloads are subject to the same NEXON copyright as
// the game client itself. The site's jukebox surfaces this in
// a `jb-legal` callout; the .gitignore keeps the files out of
// the public GitHub mirror. Standard preservation posture.
//
// Usage: `node scripts/fetch-ia-bgms.mjs`
//
// After running: rebuild + deploy. Jukebox flips matched tracks
// from "awaiting upload" to playable automatically (audio-catalog
// uses fs.existsSync at build time).

import { mkdirSync, existsSync, statSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const IA_BASE = "https://archive.org/download/MapleStoryOST";
const OUT_ROOT = resolve("public/audio/bgm");

// Mapping: our WZ-canonical path (as it appears in maps.json's
// `bgm` field) -> filename on Internet Archive. 20 confirmed
// matches after case/spacing/typo reconciliation. The 11 gaps
// aren't listed here; they'll continue showing "awaiting upload"
// in the jukebox until Liven drops them in from his own client.
const MAPPING = {
	// Bgm00 (Maple Island / Sleepywood / shared)
	"Bgm00/FloralLife":       "FloralLife.mp3",
	"Bgm00/GoPicnic":         "Go Picnic.mp3",
	"Bgm00/Nightmare":        "Nightmare.mp3",
	"Bgm00/RestNPeace":       "RestNPeace.mp3",

	// Bgm01 (Perion / Kerning / Amherst)
	"Bgm01/BadGuys":          "BadGuys.mp3",
	"Bgm01/HighlandStar":     "HighlandStar.mp3",
	"Bgm01/MoonlightShadow":  "MoonLightShadow.mp3",  // case diff

	// Bgm02 (Ellinia / Sleepywood dungeon)
	"Bgm02/AboveTheTreetops": "AboveTheTreetops.mp3",
	"Bgm02/JungleBook":       "JungleBook.mp3",
	"Bgm02/MissingYou":       "MissingYou.mp3",
	"Bgm02/WhenTheMorningComes": "WhenTheMorningComes.mp3",

	// Bgm03 (regional variants)
	"Bgm03/Beachway":         "Beachway.mp3",
	"Bgm03/BlueSky":          "BlueSky.mp3",
	"Bgm03/SnowyVillage":     "SnowyVillage.mp3",

	// Bgm04 (harbors / sky maps)
	"Bgm04/Shinin'Harbor":    "ShininHarbor.mp3",     // apostrophe stripped in IA name
	"Bgm04/UponTheSky":       "UpontheSky.mp3",       // case diff
	"Bgm04/WarmRegard":       "Warm Regard.mp3",      // space added

	// Bgm05 (caves)
	"Bgm05/AbandonedMine":    "AbandonedMIne.mp3",    // typo preserved in IA filename

	// Bgm06 (special)
	"Bgm06/ComeWithMe":       "Come With Me.mp3",

	// Event
	"BgmEvent/FunnyRabbit":   "FunnyRabbit.mp3",
};

// Track the 11 gaps for the summary output. Not fetched; documented
// so Liven knows what's still missing at a glance.
const GAPS = [
	"Bgm00/Silence",
	"Bgm00/SleepyWood",
	"Bgm01/AncientMove",
	"Bgm01/CavaBien",
	"Bgm02/EvilEyes",
	"Bgm03/BygoneGarden",
	"Bgm03/CavernOfShadows",
	"Bgm03/Subway",
	"Bgm05/HellGate",
	"Bgm05/WolfWood",
	"BgmEvent/FunnyRabbitFaster",
];

console.log(`Fetching ${Object.keys(MAPPING).length} BGMs from Internet Archive.`);
console.log(`Target: ${OUT_ROOT}\n`);

let fetched = 0;
let skipped = 0;
let failed = 0;
let totalBytes = 0;

for (const [wzPath, iaName] of Object.entries(MAPPING)) {
	const outPath = resolve(OUT_ROOT, wzPath + ".mp3");
	const url = `${IA_BASE}/${encodeURIComponent(iaName)}`;

	if (existsSync(outPath)) {
		const size = statSync(outPath).size;
		console.log(`  [skip] ${wzPath}  (${(size / 1024 / 1024).toFixed(1)} MB already on disk)`);
		skipped++;
		totalBytes += size;
		continue;
	}

	mkdirSync(dirname(outPath), { recursive: true });
	process.stdout.write(`  [fetch] ${wzPath}  <-  ${iaName}  ... `);

	try {
		const res = await fetch(url, {
			// A polite UA identifies the fan-project user agent.
			// archive.org is generous with anonymous requests but
			// good manners cost nothing.
			headers: { "User-Agent": "livens-classic-maple/1.0 (fan preservation)" },
		});
		if (!res.ok) {
			console.log(`FAILED (HTTP ${res.status})`);
			failed++;
			continue;
		}
		const buf = Buffer.from(await res.arrayBuffer());
		writeFileSync(outPath, buf);
		console.log(`${(buf.length / 1024 / 1024).toFixed(1)} MB`);
		fetched++;
		totalBytes += buf.length;
	} catch (e) {
		console.log(`FAILED (${e.message})`);
		failed++;
	}

	// Small delay so we don't hammer archive.org.
	await new Promise((r) => setTimeout(r, 300));
}

console.log(`\nSummary:`);
console.log(`  ${fetched} fetched`);
console.log(`  ${skipped} skipped (already on disk)`);
console.log(`  ${failed} failed`);
console.log(`  ${(totalBytes / 1024 / 1024).toFixed(1)} MB total on disk`);
console.log(`\nStill missing (${GAPS.length} gaps - not on IA MapleStoryOST):`);
for (const g of GAPS) {
	console.log(`  - ${g}`);
}
console.log(`\nExtract these from your own v83 client's Sound.wz and drop`);
console.log(`them in public/audio/bgm/{folder}/{name}.mp3 to close the gaps.`);
console.log(`\nNext: npm run build && npm run deploy`);
