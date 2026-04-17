$ErrorActionPreference = 'Stop'

$repoRoot = (Resolve-Path (Split-Path -Parent $PSScriptRoot)).Path

$viteProcesses = Get-CimInstance Win32_Process | Where-Object {
  $_.Name -eq 'node.exe' -and
  $_.CommandLine -like '*vite*' -and
  $_.CommandLine -like "*$repoRoot*"
}

if (-not $viteProcesses) {
  Write-Host 'No Vite processes found for this repo.'
  exit 0
}

$viteProcesses | ForEach-Object {
  Stop-Process -Id $_.ProcessId -Force
  Write-Host ("Stopped repo Vite process {0}" -f $_.ProcessId)
}
