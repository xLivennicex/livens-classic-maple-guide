# Client-extracted BGM drop zone

This folder is where extracted MapleStory client BGMs live. The
site auto-discovers everything you drop in here and lists it in
the jukebox (`/jukebox`, "Client-extracted BGMs" section).

## How the auto-discovery works

- `src/data/audio-catalog.ts` reads `src/data/db/maps.json` at
  build time and pulls the unique `bgm` values (there are 31 in
  the current dataset - things like `Bgm00/FloralLife`).
- For each entry, it checks the filesystem: does
  `public/audio/bgm/{Bgm00,Bgm01,...}/FloralLife.mp3` exist?
- If yes: track appears playable in the jukebox.
- If no: track shows as "awaiting upload" (greyed out, no play
  button).
- No config file to edit. Drop the file, rebuild, done.

## Expected file layout

```
public/audio/bgm/
  Bgm00/
    FloralLife.mp3         (Henesys - most-used map BGM)
    GoPicnic.mp3           (Maple Island fields)
    Nightmare.mp3          (dungeons - shared theme)
    RestNPeace.mp3         (Sleepywood town)
    SleepyWood.mp3         (Sleepywood dungeon rooms)
    Silence.mp3            (interior/quiet maps)
  Bgm01/
    AncientMove.mp3        (Perion)
    BadGuys.mp3            (Kerning City sewers)
    CavaBien.mp3           (Amherst)
    HighlandStar.mp3       (Perion dungeons)
    MoonlightShadow.mp3    (Perion night maps)
  Bgm02/
    AboveTheTreetops.mp3   (Ellinia)
    EvilEyes.mp3           (Sleepywood dungeon)
    JungleBook.mp3         (Ellinia forests)
    MissingYou.mp3         (Ellinia dock)
    WhenTheMorningComes.mp3
  Bgm03/
    NightMarket.mp3        (Kerning City)
    BlueSky.mp3
    Elfwood.mp3
    Missionary.mp3         (Lith Harbor)
  ... (etc.)
```

Actual counts vary by folder. Run `npm run build` and check the
jukebox page for the canonical "what does the site expect"
list - it displays the WZ path (e.g. `Bgm00/FloralLife`) next
to every track.

## File formats

- **MP3 preferred** - Cloudflare Pages caps individual files at
  25 MiB. 128kbps stereo MP3 is inaudible from WAV for BGM and
  stays well under the cap.
- **WAV also works** - drop `.wav` files in and run
  `npm run transcode:audio`. The transcode script now recurses
  into subfolders, so `Bgm00/FloralLife.wav` gets converted to
  `Bgm00/FloralLife.mp3` in place (WAV deleted after transcode
  unless you set `KEEP_WAV = true` in `scripts/transcode-audio.mjs`).
- **OGG/AAC also playable** by browsers but not what MP3-based
  tooling here expects. Recommend MP3.

## Legal note

BGM compositions belong to NEXON, composed primarily by
**Sound Team ASOB** during the 2003-2008 era. This drop zone
is designed to support a fan / preservation posture for the
MapleStory Classic community. Do NOT commit these files to a
public repo without permission from the rights holder. Add
this folder to `.gitignore` if hosting the site publicly and
you'd rather not push audio to GitHub. Cloudflare Pages will
still serve files you upload directly via `wrangler pages
deploy` regardless of what's in git.

## `.gitignore` recommendation

If you want to keep audio files out of git but still deploy them:

```
# In .gitignore
public/audio/bgm/**/*.mp3
public/audio/bgm/**/*.wav
!public/audio/bgm/README.md
```
