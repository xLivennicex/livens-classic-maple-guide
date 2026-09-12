#!/usr/bin/env pwsh
# Coverage audit for Maple Island + Victoria Island town-anchored quests.
# Pulls fresh datamine, compares against shipped questIds, and reports
# what's missing per zone. Skips events + Community Board (documented
# elsewhere) + job advancement chains (canonical'd separately).

$ErrorActionPreference = 'Stop'
Push-Location $PSScriptRoot\..

Invoke-WebRequest 'https://osmsdataexplorer.com/data/current/quests.json' `
    -OutFile tmp-audit-quests.json -UseBasicParsing | Out-Null
$q = Get-Content tmp-audit-quests.json -Raw | ConvertFrom-Json

# Build the shipped-set from questId frontmatter values. Canonical
# multi-quest articles reference their final questId; we recognize
# additional coverage by scanning the article body for '[10XXX]' patterns
# that indicate other IDs the canonical covers.
$directShipped = @{}
$coveredByCanonical = @{}
Get-ChildItem src/content/quests -Filter *.md | ForEach-Object {
    $body = Get-Content $_.FullName -Raw
    if ($body -match 'questId:\s*"(\d+)"') {
        $directShipped[$matches[1].TrimStart('0')] = $_.BaseName
    }
    # Scan body for referenced IDs like "506041" (standalone) or
    # "506001-506136" (range notation). Range notation is preferred
    # for canonical articles that cover many mechanically-identical
    # quests (e.g. Community Board greetings, generated citizenship).
    $baseName = $_.BaseName
    $matches2 = [regex]::Matches($body, '(?<!\d)(\d{4,6})-(\d{4,6})(?!\d)')
    foreach ($m in $matches2) {
        $lo = [int]$m.Groups[1].Value
        $hi = [int]$m.Groups[2].Value
        # Sanity cap: only expand plausible ranges (< 200 IDs).
        if ($hi -gt $lo -and ($hi - $lo) -lt 200) {
            for ($i = $lo; $i -le $hi; $i++) {
                $coveredByCanonical["$i"] = $baseName
            }
        }
    }
    $matches3 = [regex]::Matches($body, '(?<![\d-])0?(\d{4,6})(?![\d/-])')
    foreach ($m in $matches3) {
        $id = $m.Groups[1].Value.TrimStart('0')
        if ($id.Length -ge 3) {
            $coveredByCanonical[$id] = $baseName
        }
    }
}

function Test-Shipped($questId) {
    $trimmed = $questId.TrimStart('0')
    return $directShipped.ContainsKey($trimmed) -or `
        $coveredByCanonical.ContainsKey($trimmed)
}

# Zone definitions - the datamine uses 'region' as a string label,
# so we group by exact region names. Include foundational Victoria +
# Maple Island zones for MVP-scope coverage tracking.
$zones = @(
    'Maple Island',
    'Lith Harbor',
    'Henesys',
    'Perion',
    'Ellinia',
    'Kerning City',
    'Sleepywood',
    'Florina Beach'
)

# Also report unknown/other regions so we don't miss anything.
$knownRegions = @{}
foreach ($z in $zones) { $knownRegions[$z] = $true }

foreach ($zoneName in $zones) {
    $zoneQuests = $q.quests | Where-Object {
        $_.region -eq $zoneName -and
        $_.name -notmatch '^\[Event\]' -and
        $_.name -notmatch 'Community Board'
    }
    $unshipped = @()
    foreach ($item in $zoneQuests) {
        if (-not (Test-Shipped $item.id)) {
            $unshipped += $item
        }
    }
    $total = $zoneQuests.Count
    $shipped = $total - $unshipped.Count
    $pct = if ($total -gt 0) { [Math]::Round(100 * $shipped / $total, 1) } else { 0 }
    Write-Host ''
    Write-Host ("===== $zoneName : $shipped / $total quests shipped ($pct%) =====")
    if ($unshipped.Count -gt 0) {
        $unshipped | Sort-Object { [int]$_.level_min }, { [int]$_.id } | ForEach-Object {
            Write-Host ("  [$($_.id)] L$($_.level_min)  $($_.npc_name.PadRight(24))  $($_.name)")
        }
    }
}

# Bonus: list any regions we're not tracking that have unshipped quests
Write-Host ''
Write-Host '===== OTHER regions not in zone list (informational) ====='
$otherRegions = $q.quests |
    Where-Object { -not $knownRegions.ContainsKey($_.region) -and $_.region } |
    Group-Object region |
    Sort-Object { -$_.Count }
foreach ($rg in $otherRegions) {
    $rgUnshipped = ($rg.Group | Where-Object { -not (Test-Shipped $_.id) }).Count
    Write-Host ('  ' + $rg.Name.PadRight(28) + ' total=' + $rg.Count + '  unshipped=' + $rgUnshipped)
}

Remove-Item tmp-audit-quests.json -ErrorAction SilentlyContinue
Pop-Location
