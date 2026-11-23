# Render CV.yaml. The PDF is written straight into public/cv/ by RenderCV,
# so there is only one copy of the file.

$ErrorActionPreference = "Stop"

$rendercv = Join-Path $env:USERPROFILE ".local\bin\rendercv.exe"

if (-not (Test-Path $rendercv)) {
    Write-Error "rendercv not found at $rendercv. Run: pipx install 'rendercv[full]'"
}

Push-Location $PSScriptRoot
try {
    & $rendercv render CV.yaml
    if ($LASTEXITCODE -ne 0) { throw "rendercv failed with exit code $LASTEXITCODE" }
} finally {
    Pop-Location
}

$pdf = Join-Path (Split-Path -Parent $PSScriptRoot) "public\cv\thoriq-rahman-cv.pdf"

if (-not (Test-Path $pdf)) { throw "PDF not found at $pdf" }

$size = [math]::Round((Get-Item $pdf).Length / 1KB)
Write-Host ""
Write-Host "Published: $pdf ($size KB)"
