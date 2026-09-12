# Audit script: cross-check itemSlug and itemId references from
# quests/jobs against the shipped items/*.md pages. Called ad-hoc
# after each sprint to catch broken links and item-page debt.

$root = Split-Path $PSScriptRoot -Parent
$questFiles = Get-ChildItem "$root/src/content/quests/*.md"
$jobFiles   = Get-ChildItem "$root/src/content/jobs/*.md"
$allSourceFiles = $questFiles + $jobFiles
$itemFiles  = Get-ChildItem "$root/src/content/items/*.md" | ForEach-Object { $_.BaseName }

# --- itemSlug references (linked item promises) ---
$slugsReferenced = @{}
foreach ($f in $allSourceFiles) {
    $content = Get-Content $f.FullName -Raw
    $matches = [regex]::Matches($content, 'itemSlug:\s*"([^"]+)"')
    foreach ($m in $matches) {
        $slug = $m.Groups[1].Value
        if (-not $slugsReferenced.ContainsKey($slug)) {
            $slugsReferenced[$slug] = @()
        }
        $slugsReferenced[$slug] += $f.BaseName
    }
}

Write-Host ""
Write-Host "=== BROKEN itemSlug REFERENCES (promised, no page) ==="
$broken = @()
foreach ($slug in ($slugsReferenced.Keys | Sort-Object)) {
    if ($itemFiles -notcontains $slug) {
        $broken += $slug
        $count = $slugsReferenced[$slug].Count
        Write-Host ("  BROKEN: {0,-45} refs={1}" -f $slug, $count)
        foreach ($ref in ($slugsReferenced[$slug] | Sort-Object -Unique)) {
            Write-Host ("           -> {0}" -f $ref)
        }
    }
}
Write-Host ("Total broken slugs: {0}" -f $broken.Count)

# --- itemId references without matching page (high-value candidates for shipping) ---
Write-Host ""
Write-Host "=== itemId REFERENCES (sprite-only mode, candidates for pages) ==="
$idsReferenced = @{}
foreach ($f in $allSourceFiles) {
    $content = Get-Content $f.FullName -Raw
    # Skip lines that have both itemId AND itemSlug on adjacent lines
    $matches = [regex]::Matches($content, 'itemId:\s*(\d+)')
    foreach ($m in $matches) {
        $id = $m.Groups[1].Value
        if (-not $idsReferenced.ContainsKey($id)) {
            $idsReferenced[$id] = @()
        }
        $idsReferenced[$id] += $f.BaseName
    }
}

# --- Which item pages we have and their wzId ---
$itemPagesByWzId = @{}
foreach ($f in Get-ChildItem "$root/src/content/items/*.md") {
    $content = Get-Content $f.FullName -Raw
    if ($content -match 'wzId:\s*(\d+)') {
        $itemPagesByWzId[$matches[1]] = $f.BaseName
    }
}

$candidates = @()
foreach ($id in ($idsReferenced.Keys | Sort-Object -Descending { $idsReferenced[$_].Count })) {
    if (-not $itemPagesByWzId.ContainsKey($id)) {
        $count = $idsReferenced[$id].Count
        if ($count -ge 2) {
            $candidates += @{ id = $id; count = $count; refs = $idsReferenced[$id] }
        }
    }
}

# Sort candidates by ref count descending
$candidates = $candidates | Sort-Object { -$_.count }
Write-Host ("Total unique itemIds with 2+ refs but NO page: {0}" -f $candidates.Count)
Write-Host ""
Write-Host "Top 20 by ref count (these should probably become items):"
$candidates | Select-Object -First 20 | ForEach-Object {
    Write-Host ("  ID {0,-10} refs={1,-3} sample: {2}" -f $_.id, $_.count, ($_.refs | Select-Object -First 3 | Sort-Object -Unique) -join ', ')
}
