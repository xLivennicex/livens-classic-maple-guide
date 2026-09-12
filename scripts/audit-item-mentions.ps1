# Wider audit: scan all quest/job/item files for item-ID mentions
# in prose (details, editorial, callout, verificationNote fields) --
# these are documentary references that WON'T get auto-linked, so
# they're candidates for future item pages or manual linking.

$root = Split-Path $PSScriptRoot -Parent

# Load which item IDs already have pages
$shippedIds = @{}
foreach ($f in Get-ChildItem "$root/src/content/items/*.md") {
    $c = Get-Content $f.FullName -Raw
    if ($c -match 'wzId:\s*(\d+)') {
        $shippedIds[$matches[1]] = $f.BaseName
    }
}
Write-Host ("Item pages shipped: {0}" -f $shippedIds.Count)
Write-Host ""

# Scan all quest + job + item files for 7-digit IDs in prose
$sourceFiles = @()
$sourceFiles += Get-ChildItem "$root/src/content/quests/*.md"
$sourceFiles += Get-ChildItem "$root/src/content/jobs/*.md"
$sourceFiles += Get-ChildItem "$root/src/content/items/*.md"
Write-Host ("Scanning {0} source files..." -f $sourceFiles.Count)

$mentions = @{}
foreach ($f in $sourceFiles) {
    $c = Get-Content $f.FullName -Raw
    # Match 7-digit IDs (item WZ IDs) after various markers
    $matches = [regex]::Matches($c, '\b([12349]\d{6})\b')
    foreach ($m in $matches) {
        $id = $m.Groups[1].Value
        # Filter to item ID ranges only:
        # 1000000-1999999 = equipment
        # 2000000-2999999 = consumable
        # 3000000-3999999 = setup (chairs)
        # 4000000-4999999 = etc (crafting/scrolls)
        # Excluding 5xxxxxx+ (mostly NPC/mob/quest IDs)
        $prefix = $id.Substring(0, 1)
        if ($prefix -in @('1', '2', '3', '4')) {
            if (-not $mentions.ContainsKey($id)) {
                $mentions[$id] = @{ count = 0; files = @() }
            }
            $mentions[$id].count += 1
            if ($mentions[$id].files -notcontains $f.BaseName) {
                $mentions[$id].files += $f.BaseName
            }
        }
    }
}

# Identify referenced-but-not-shipped items
$candidates = @()
foreach ($id in $mentions.Keys) {
    if (-not $shippedIds.ContainsKey($id)) {
        $count = ($mentions[$id].files | Sort-Object -Unique).Count
        $candidates += @{ id = $id; count = $count; files = ($mentions[$id].files | Sort-Object -Unique) }
    }
}

$candidates = $candidates | Sort-Object { -$_.count }
Write-Host ("Unique items referenced but NOT shipped: {0}" -f $candidates.Count)
Write-Host ""
Write-Host "Ranked by unique-file reference count (top 30):"
Write-Host ""
$candidates | Select-Object -First 30 | ForEach-Object {
    $range = switch ($_.id.Substring(0, 3)) {
        '100' { "Cap/Helm" }
        '101' { "Face Accessory" }
        '102' { "Eye Accessory" }
        '103' { "Earring" }
        '104' { "Overall/Top" }
        '105' { "Overall" }
        '106' { "Bottom" }
        '107' { "Shoes" }
        '108' { "Glove" }
        '109' { "Shield" }
        '110' { "Cape" }
        '130' { "Weapon-1H-Sword" }
        '132' { "Weapon-Dagger/Claw" }
        '200' { "Potion" }
        '201' { "Food" }
        '202' { "Scroll-Chair" }
        '203' { "Return Scroll" }
        '204' { "Enh. Scroll" }
        '401' { "Ore/Refined" }
        '402' { "Gem" }
        '403' { "ETC Material" }
        default { "?" }
    }
    Write-Host ("  ID {0}  refs={1,-2}  [{2,-18}]  files: {3}" -f $_.id, $_.count, $range, (($_.files | Select-Object -First 3) -join ', '))
}
