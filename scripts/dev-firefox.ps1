$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$candidatePorts = @(5173, 5174, 5175, 5176, 5177, 5178)
$hostAddress = 'localhost'
$viteConfigPath = Join-Path $repoRoot 'vite.config.ts'

function Get-BasePath {
  if (-not (Test-Path $viteConfigPath)) {
    return '/'
  }

  $viteConfig = Get-Content $viteConfigPath -Raw
  $match = [regex]::Match($viteConfig, "base:\s*['""](?<base>[^'""]+)['""]")

  if (-not $match.Success) {
    return '/'
  }

  $basePath = $match.Groups['base'].Value

  if (-not $basePath.StartsWith('/')) {
    $basePath = "/$basePath"
  }

  if (-not $basePath.EndsWith('/')) {
    $basePath = "$basePath/"
  }

  return $basePath
}

$basePath = Get-BasePath

function Test-PortfolioUrl {
  param(
    [Parameter(Mandatory = $true)]
    [int]$Port
  )

  try {
    $response = Invoke-WebRequest -Uri ("http://{0}:{1}{2}" -f $hostAddress, $Port, $basePath) -UseBasicParsing -TimeoutSec 2
    return $response.StatusCode -ge 200 -and $response.StatusCode -lt 500
  } catch {
    return $false
  }
}

function Find-HealthyServerPort {
  foreach ($port in $candidatePorts) {
    if (Test-PortfolioUrl -Port $port) {
      return $port
    }
  }

  return $null
}

$existingPort = Find-HealthyServerPort

if (-not $existingPort) {
  Start-Process powershell -ArgumentList @(
    '-NoExit',
    '-Command',
    "cd '$repoRoot'; npx vite --host $hostAddress"
  ) | Out-Null

  for ($attempt = 0; $attempt -lt 20; $attempt++) {
    Start-Sleep -Milliseconds 750
    $existingPort = Find-HealthyServerPort

    if ($existingPort) {
      break
    }
  }
}

if (-not $existingPort) {
  throw 'Could not find a healthy local Vite server on ports 5173-5178.'
}

$url = "http://$hostAddress`:$existingPort$basePath"
Start-Process 'firefox.exe' $url | Out-Null
Write-Host "Opened Firefox at $url"
