# TIGHT audit: only catches IDs in `itemId:` structured fields.
# These are guaranteed item references (not NPC WZ IDs shared in
# the 7-digit space). Cross-references against shipped item pages
# and lists candidates for future item ships.

$root = Split-Path $PSScriptRoot -Parent

# Which item wzIds already have pages?
$shippedIds = @{}
foreach ($f in Get-ChildItem "$root/src/content/items/*.md") {
    $c = Get-Content $f.FullName -Raw
    if ($c -match 'wzId:\s*(\d+)') {
        $shippedIds[$matches[1]] = $f.BaseName
    }
}

# Which slugs already have pages?
$shippedSlugs = @{}
foreach ($f in Get-ChildItem "$root/src/content/items/*.md") {
    $shippedSlugs[$f.BaseName] = $true
}

$sourceFiles = @()
$sourceFiles += Get-ChildItem "$root/src/content/quests/*.md"
$sourceFiles += Get-ChildItem "$root/src/content/jobs/*.md"

Write-Host ""
Write-Host "===== PART 1: Broken itemSlug links (promised, not shipped) ====="
Write-Host ""
$broken = @()
foreach ($f in $sourceFiles) {
    $c = Get-Content $f.FullName -Raw
    $matches = [regex]::Matches($c, 'itemSlug:\s*"([^"]+)"')
    foreach ($m in $matches) {
        $slug = $m.Groups[1].Value
        if (-not $shippedSlugs.ContainsKey($slug)) {
            $broken += @{ slug = $slug; file = $f.BaseName }
        }
    }
}
if ($broken.Count -eq 0) {
    Write-Host "  ZERO broken slug references. All structured promises kept."
} else {
    $broken | ForEach-Object { Write-Host ("  BROKEN {0}  in {1}" -f $_.slug, $_.file) }
}

Write-Host ""
Write-Host "===== PART 2: itemId references without item pages ====="
Write-Host ""

# Track structured itemId references (reward blocks only)
$idRefs = @{}
foreach ($f in $sourceFiles) {
    $c = Get-Content $f.FullName -Raw
    $matches = [regex]::Matches($c, 'itemId:\s*(\d+)')
    foreach ($m in $matches) {
        $id = $m.Groups[1].Value
        if (-not $idRefs.ContainsKey($id)) {
            $idRefs[$id] = @{ count = 0; files = @() }
        }
        $idRefs[$id].count += 1
        if ($idRefs[$id].files -notcontains $f.BaseName) {
            $idRefs[$id].files += $f.BaseName
        }
    }
}

$candidates = @()
foreach ($id in $idRefs.Keys) {
    if (-not $shippedIds.ContainsKey($id)) {
        $candidates += @{
            id = $id
            refCount = $idRefs[$id].files.Count
            files = $idRefs[$id].files | Sort-Object -Unique
        }
    }
}

$candidates = $candidates | Sort-Object { -$_.refCount }
Write-Host ("  Total unique itemIds referenced without page: {0}" -f $candidates.Count)
Write-Host ""
if ($candidates.Count -gt 0) {
    Write-Host "  Ranked by unique-file refs (top 20):"
    Write-Host ""
    $candidates | Select-Object -First 20 | ForEach-Object {
        Write-Host ("    ID {0,-10} refs={1,-3}  files: {2}" -f $_.id, $_.refCount, (($_.files | Select-Object -First 4) -join ', '))
    }
} else {
    Write-Host "  ZERO orphan structured item references. Great DRY hygiene."
}

Write-Host ""
Write-Host "===== PART 3: Item pages inventory ====="
Write-Host ("  Shipped item pages: {0}" -f $shippedIds.Count)
Write-Host ("  Referenced by structured itemId: {0}" -f $idRefs.Count)
Write-Host ("  Coverage: {0} shipped / {1} referenced = {2}%" -f $shippedIds.Count, ($idRefs.Count + $shippedIds.Count), [Math]::Round(100.0 * $shippedIds.Count / ($idRefs.Count + $shippedIds.Count), 1))
