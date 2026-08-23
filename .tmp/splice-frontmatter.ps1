# Replace the YAML frontmatter block at the top of a markdown file
# with the contents of a new-frontmatter file. Frontmatter is the
# block between the first two `---` lines.

param(
    [Parameter(Mandatory=$true)] [string] $MarkdownFile,
    [Parameter(Mandatory=$true)] [string] $NewFrontmatterFile
)

$lines = Get-Content $MarkdownFile

if ($lines[0].Trim() -ne '---') {
    throw "Expected first line of $MarkdownFile to be '---'"
}

# Find the index of the CLOSING --- (starting search from line 1).
$closingIdx = -1
for ($i = 1; $i -lt $lines.Length; $i++) {
    if ($lines[$i].Trim() -eq '---') {
        $closingIdx = $i
        break
    }
}
if ($closingIdx -lt 0) {
    throw "Could not find closing '---' in $MarkdownFile"
}

Write-Host "Old frontmatter spans lines 1..$($closingIdx + 1)"

# Everything AFTER the closing --- is the markdown body.
$body = $lines[($closingIdx + 1)..($lines.Length - 1)]
$newFrontmatter = Get-Content $NewFrontmatterFile

# Write: new frontmatter + body (preserving newlines).
$combined = @()
$combined += $newFrontmatter
$combined += $body
Set-Content -Path $MarkdownFile -Value $combined -Encoding UTF8

Write-Host "Rewrote $MarkdownFile ($($newFrontmatter.Length) frontmatter lines + $($body.Length) body lines)"
