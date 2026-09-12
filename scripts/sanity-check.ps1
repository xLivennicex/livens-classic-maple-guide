$c = Get-Content src/content/quests/luke-the-security-guy.md -Raw
Write-Host "=== itemSlug matches in luke quest ==="
[regex]::Matches($c, 'itemSlug:\s*"([^"]+)"') | ForEach-Object { Write-Host ("  " + $_.Groups[1].Value) }
Write-Host "=== itemId matches in luke quest ==="
[regex]::Matches($c, 'itemId:\s*(\d+)') | ForEach-Object { Write-Host ("  " + $_.Groups[1].Value) }
Write-Host ""
Write-Host "=== Sample item file wzIds ==="
Get-ChildItem src/content/items/*.md | Select-Object -First 5 | ForEach-Object {
    $c2 = Get-Content $_.FullName -Raw
    if ($c2 -match 'wzId:\s*(\d+)') {
        Write-Host ("  " + $_.BaseName + " -> wzId=" + $matches[1])
    }
}
