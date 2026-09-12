# NPC WZ ID Lookup

The `npcId` field on quest frontmatter uses the **canonical MapleStory
GMS/83 WZ ID** — as served by `maplestory.io/api/GMS/83/npc/{id}`.

**This is NOT the same** as the internal ordinal ID that the ohmi CoT 2
datamine (osmsdataexplorer.com) uses in `lookups.json` under `npc_names`.
The ohmi ordinals go 1, 2, 3, 4... The canonical WZ IDs are 7-digit
categorical numbers like 1012100.

Setting an ohmi ordinal in `npcId` will render an `<img>` tag pointing at
a 404. Always cross-reference against the canonical WZ ID before saving.

## How to look up an NPC's canonical WZ ID

Fastest path: fetch the full NPC listing from maplestory.io (all 1,733
entries) and grep by name:

```powershell
$npcs = (Invoke-WebRequest 'https://maplestory.io/api/GMS/83/npc' `
    -UseBasicParsing).Content | ConvertFrom-Json
$npcs | Where-Object { $_.name -eq 'Heena' } | Select-Object id, name
```

Multiple hits often mean:
- **7-digit ID** (e.g. `1022000`) — the full-body town sprite. **This is
  what you want** for quest hero images.
- **5-digit ID in the 10200-10203 range** — UI portrait icons (used for
  quest-log thumbnails), not the full sprite.
- **9000xxxx range** — holiday/event variants (KMS Santa Grendel, etc.),
  irrelevant for our purposes.

## Confirmed lookup table

Every entry below has been verified with a live `HEAD` request against
the `/render/stand` endpoint. Add rows as new quests are seeded.

| NPC name | Canonical WZ ID | Region / role |
| --- | ---: | --- |
| Roger | 2000 | Maple Island - Amherst (tutorial anchor) |
| Todd | 9101002 | Maple Island - Amherst (combat tutor). See note. |
| Sera | 2100 | Maple Island - Amherst (mirror step 2) |
| Heena | 2101 | Maple Island - Amherst (mirror step 1) |
| Athena Pierce | 1012100 | Henesys (Bowman 2nd-job trainer) |
| Dances with Balrog | 1022000 | Perion (Warrior 2nd-job trainer) |
| Grendel the Really Old | 1032001 | Ellinia (Magician 2nd-job trainer) |
| Dark Lord | 1052001 | Kerning City (Thief 2nd-job trainer) |
| Lakelis | 9020000 | Kerning City (KPQ / First Time Together operator) |
| Rowen the Fairy | 1032101 | Ellinia (Cursed Doll chain operator) |
| Alex | 1052000 | Kerning City (rooftop runaway - Alex chain) |
| Chief Stan | 1012003 | Henesys (chief - Alex chain step 2 + 3) |
| Nina | 2102 | Maple Island - Amherst (Nina/Sen chain step 1) |
| Sen | 2001 | Maple Island - Amherst (Nina/Sen chain step 2) |
| Mr. Wetbottom | 1061003 | Sleepywood - VIP Sauna (Sauna Robe chain start) |
| Ronnie | 1061004 | Sleepywood - moves across maps (Sauna Robe chain) |
| Rina | 1010100 | Sleepywood (Sauna Robe chain, Unagi cook) |
| Maria | 2103 | Maple Island - Amherst (letter chain step 1) |
| Lucas | 12000 | Maple Island - Amherst (letter chain step 2) |
| Sam | 9101003 | Maple Island - Amherst. **Tutorial variant** - canonical 2005 renders 404 (Todd footgun). |
| Mai | 12100 | Maple Island - A Split Road (combat trainer, chain of 2) |
| Biggs | 20002 | Maple Island - Southperry port (dagger drop quest) |
| Pio | 10000 | Maple Island - Amherst (chair-drop quest) |
| Rain | 12101 | Maple Island - Amherst (7-part quiz graduation) |
| Bruce | 1012111 | Henesys (Bruce and Ayan reunion arc L10) |
| Ayan | 1022007 | Perion (daughter of Bruce, Stump trauma quest) |
| Nella | 1052103 | Kerning City (quest broker, 3-request hub L10) |
| Wing the Fairy | 1032106 | Ellinia (homework favor L10) |
| Blackbull | 1020000 | Perion (Stumps + shield reward L11) |
| Icarus | 1052106 | Kerning City rooftop (bored guy chain L11) |
| Casey | 1012008 | Henesys Park (Match Cards + Omok Set series L12) |
| Dances with Balrog | 1022000 | Perion (Warrior job advancer, FM intro chain) |
| Shane | 1032003 | Ellinia (mushroom cuisine L14 chain, ore rewards) |
| Mrs. Ming Ming | 1012106 | Henesys (village carnival prep L15 chain) |
| Pia | 1012102 | Henesys Park watchtower (Blue Mushroom scroll quest L16) |
| Winston | 1022006 | Perion Rocky Mountains (Fossil Research chain L17) |
| Dr. Betty | 1032104 | Ellinia (biologist, Fossil Research chain L17) |
| Anne | 1012110 | Henesys (Dr. Betty's daughter, Fossil Research chain L17) |
| Luke | 1040000 | Henesys Dungeon Entrance (gem grab-bag L19) |
| Teo | 1002001 | Lith Harbor (Weird Medicine, Sparkling Rock chain L21) |
| Sophia | 1022100 | Perion Department Store (alchemist, Sparkling Rock L21) |
| Manji | 1022002 | Perion (Arcon's Blood middleman, Sparkling Rock L21) |
| Maya (Henesys instance) | 1012101 | Henesys Townstreet (sick girl, saved via Sparkling Rock; SAME character as Maple Island Maya 2103) |
| Jane Doe (ghost) | (pending) | Niora Hospital Kerning (ghost quest arc L23) |
| Camila | (pending) | Henesys (timid delivery quest L24) |

## Maple Island tutorial-variant IDs (footgun)

Some Maple Island NPCs' canonical WZ IDs return 404 on the
`/render/stand` endpoint - the actual sprites live under
`91010xx` tutorial-variant IDs instead. Confirmed cases:

| NPC | Canonical (404s) | Working tutorial variant |
| --- | ---: | ---: |
| Todd | 2004 | 9101002 |
| Sam | 2005 | 9101003 |

If you're seeding a new Maple Island quest and the canonical
2000-block ID renders as broken, try `9101` + `(canonical - 2001)`
as the fallback. This isn't documented anywhere and was discovered
empirically. Verify with HEAD request before committing.

## Classic World-exclusive NPCs (not in v83)

Some NPCs are Classic World additions that don't exist in v83's
maplestory.io asset pool. These render without sprites until a
CoT-native sprite CDN is investigated (MeowDB has an icon endpoint
for items - unclear if it also serves NPCs).

| NPC | Quest ID | Context |
| --- | ---: | --- |
| Silas Irons | 80008 | Perion Blacksmith - Crafting Apprentice system |
| Mr. Thunder | 80011 | Crafting Apprentice discipline TBD |
| Francois | 80014 | Crafting Apprentice discipline TBD |
| Vicious | 80017 | Crafting Apprentice discipline TBD |
| JM From tha Streetz | 80020 | Crafting Apprentice discipline TBD |
| Chrishrama | 80023 | Arcforging / scroll crafting (CONFIRMED via Scroll Crafting Catalyst 4130003) |
| Sabitrama | (CoT-exclusive) | Sleepywood Hotel (Chrishrama's younger brother, herb trader, Forest of Patience L25) |
| Jay | 1012109 | Henesys (keeper of Chief Stan's past, backstory quest L27) |
| Arwen the Fairy | 1032100 | Ellinia (Glass Shoe quest L29, recurring event NPC) |
| Huckle | 2030012 | Orbis Tower hidden room (physics of self-transformation researcher, L29) |
| Rowen the Fairy | 1032101 | Ellinia forest (Cursed Doll chain L36, previously Fresh Milk courier) |
| Riel | 1081100 | Florina Beach (Special Taste cooking chain L37 - 108xxxx range = Florina zone NPCs) |
| Zelya | (CoT-exclusive) | Forgotten Hollow (cave fairy, map-fragment chain L39) |
| Master Sergeant Fox | 2020003 | El Nath (Ossyria military commander, 202xxxx range = El Nath NPCs) |
| Staff Sergeant Charlie | 2010000 | Orbis (Ossyria military, 201xxxx range = Orbis town proper) |
| Sergeant Bravo | 2030001 | Icy Cold Field / Orbis (203xxxx range = sky/tower zones) |
| Corporal Easy | 2030002 | Cloud Park VI (Orbis Sky Terrace, 203xxxx range) |
| John | (pending) | Lith Harbor (fisherman, Deep Forest of Patience emotional arc L45) |
| Lewis | (unknown - Free Market Entrance) | 80026-80029 Free Market intro chain (CoT-exclusive or renamed) |
| Community Board / Arthur | (UI element, no NPC render) | Henesys 506001-506018 Citizenship series - Community Board is a Board object, Arthur is referenced but has no v83 sprite |

Policy: ship the quest page without npcId frontmatter, add
verificationNote flagging the missing sprite. Revisit when we
investigate MeowDB's NPC endpoint (if any) or add a CoT-native
sprite source.

## Known broken IDs

Some NPCs surface in maplestory.io's `/api/GMS/83/npc` listing but
have a `/render/stand` endpoint that 404s. These entries need alternate
variants or manual sprite extraction from the CoT 2 client.

| NPC name | Listed ID | Status |
| --- | ---: | --- |
| Todd | 2004 | 404 - use `9101002` (tutorial-map variant) instead |
| Estelle | 1032105 | 404 - only listed entry; sprite omitted for now |

## Naming conventions in the WZ IDs

The 7-digit WZ IDs are semantically structured:

- **10x1xxx** — Job trainer / notable NPC block for a town, where `x` is
  the town number (Athena is in the Henesys block, Grendel in Ellinia,
  Dark Lord in Kerning City).
- **10x2xxx** — Regular town resident block for the same town.
- **20xx** — Maple Island NPCs (rare four-digit block, pre-Victoria).
- **9000xxxx** — Global holiday / event variants across all towns.

None of this is documented by Nexon; it's reverse-engineered from
observed patterns. Do not treat the numbering as a stable contract.
