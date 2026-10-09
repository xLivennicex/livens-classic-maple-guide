# Datamine Snapshots

Point-in-time copies of the Founder's Access client datamine from
[osmsdataexplorer.com](https://osmsdataexplorer.com/data/current/).
Git-tracked so the dossier build (`npm run db`) stays reproducible
even if upstream drifts, rebalances, or disappears.

## Why these exist

The **Grand Launch on 2026-10-21** is expected to clobber the current
FA data on osmsdataexplorer.com - either with a straight overwrite as
the live-server data takes over, or by removing the `/data/current/`
endpoint entirely in favor of a new path. Our build pipeline
(`scripts/build-database.mjs`) fetches that URL at build time, so we
need frozen copies to rebuild from.

## Capturing a new snapshot

```bash
npm run snapshot              # writes snapshots/fa-YYYY-MM-DD/
npm run snapshot -- --dir=pre-launch   # custom label
```

Each snapshot folder contains:

- `items.json`, `quests.json`, `crafting.json`, `lookups.json`, `maps.json` -
  the five raw datamine endpoints.
- `manifest.json` - captured timestamp, source URL, byte counts, and
  SHA256 hash for every file. Diff two manifests to detect upstream
  drift at a glance.

## Rebuilding from a snapshot

The build script currently hardcodes `BASE = "https://osmsdataexplorer.com/data/current"`
in `scripts/build-database.mjs`. If upstream ever drifts, replace that
line with a local snapshot path and add a tiny `fetchJson` shim that
falls back to `readFile` for non-HTTP paths. See the FUTURE WORK
comment at the bottom of `scripts/snapshot-datamine.mjs` for the exact
code snippet.

We don't ship the shim preemptively (YAGNI) - one-line change when
the day comes.

## Current snapshots

| Label             | Captured    | Total size | Reason                                     |
| ----------------- | ----------- | ---------- | ------------------------------------------ |
| `fa-2026-10-09`   | 2026-10-09  | 1.63 MB    | Pre-Grand-Launch freeze (launch 2026-10-21) |
