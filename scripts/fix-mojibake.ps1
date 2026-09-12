# Fix double-encoded UTF-8 mojibake across all content markdown files.
#
# Root cause: text originally saved as UTF-8, read back as CP1252/Latin-1,
# then re-saved as UTF-8. Result: every non-ASCII char becomes a 2-3 char
# garbage sequence.
#
# Common patterns fixed here (readable form -> intended):
#   â€"  -> —  (em-dash)      bytes E2 80 94 mangled to C3 A2 E2 82 AC E2 80 9D
#   â€"  -> –  (en-dash)      similar mangle
#   â€œ  -> "  (left curly double)
#   â€   -> "  (right curly double)
#   â€™  -> '  (right curly single / apostrophe)
#   â€˜  -> '  (left curly single)
#   â€¦  -> …  (horizontal ellipsis)
#   Â    -> (drop) - stray non-breaking-space marker
#
# Idempotent: rerunning does nothing when there's no mojibake left.
# Reports files touched + total replacements per pattern.

param(
	[string]$Root = "src\content",
	[switch]$DryRun
)

$patterns = @(
	@{ Bad = [char]0x00E2 + [char]0x20AC + [char]0x201D; Good = [char]0x2014 }  # em-dash
	@{ Bad = [char]0x00E2 + [char]0x20AC + [char]0x201C; Good = [char]0x2013 }  # en-dash
	@{ Bad = [char]0x00E2 + [char]0x20AC + [char]0x0153; Good = [char]0x201C }  # left curly "
	@{ Bad = [char]0x00E2 + [char]0x20AC; Good = [char]0x201D }                 # right curly " (bare, must come AFTER left)
	@{ Bad = [char]0x00E2 + [char]0x20AC + [char]0x2122; Good = [char]0x2019 }  # curly '
	@{ Bad = [char]0x00E2 + [char]0x20AC + [char]0x02DC; Good = [char]0x2018 }  # left curly '
	@{ Bad = [char]0x00E2 + [char]0x20AC + [char]0x00A6; Good = [char]0x2026 }  # ellipsis
)

$files = Get-ChildItem -LiteralPath $Root -Recurse -File -Include *.md,*.mdx -ErrorAction SilentlyContinue
$touched = 0
$totalReplacements = 0

foreach ($f in $files) {
	$original = Get-Content -LiteralPath $f.FullName -Raw -Encoding UTF8
	if ($null -eq $original) { continue }
	$content = $original
	$fileReplacements = 0

	foreach ($p in $patterns) {
		$before = $content.Length
		$content = $content.Replace($p.Bad, [string]$p.Good)
		$diff = ($before - $content.Length) / ([Math]::Max(1, $p.Bad.Length - $p.Good.ToString().Length))
		if ($diff -gt 0) { $fileReplacements += [int]$diff }
	}

	# Strip stray `Â` (Latin-1 A-circumflex, byte 0xC2) that shows up
	# preceding what should be a plain ASCII char (usually a non-breaking-space
	# artifact). Only strip when clearly stray — before ASCII punctuation or space.
	$strayA = [regex]::Matches($content, [char]0x00C2 + '(?=[\s\p{P}\d])').Count
	if ($strayA -gt 0) {
		$content = [regex]::Replace($content, [char]0x00C2 + '(?=[\s\p{P}\d])', '')
		$fileReplacements += $strayA
	}

	if ($content -ne $original) {
		$touched++
		$totalReplacements += $fileReplacements
		if ($DryRun) {
			Write-Host ("[dry-run] " + $f.FullName + " (" + $fileReplacements + " fixes)")
		} else {
			# Write UTF-8 without BOM — Astro's markdown loader is happier without.
			# Use .NET writer directly (Set-Content adds BOM in Windows PowerShell).
			$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
			[System.IO.File]::WriteAllText($f.FullName, $content, $utf8NoBom)
			Write-Host ("[fixed] " + $f.FullName + " (" + $fileReplacements + " fixes)")
		}
	}
}

Write-Host ""
Write-Host ("Summary: touched " + $touched + " files, " + $totalReplacements + " total replacements")
