$nodePath = "C:\Program Files\nodejs\node.exe"
$nextPath = ".\node_modules\next\dist\bin\next"

Write-Host "Starting development server..."
& $nodePath $nextPath dev