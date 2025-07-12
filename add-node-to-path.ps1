$nodePath = "C:\Program Files\nodejs"

# Check if Node.js exists in the default location
if (Test-Path $nodePath) {
    # Get current PATH
    $currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
    
    # Add Node.js path if not already present
    if (-not ($currentPath -like "*$nodePath*")) {
        $newPath = "$currentPath;$nodePath"
        [Environment]::SetEnvironmentVariable("Path", $newPath, "User")
        Write-Host "Node.js path added to PATH"
    } else {
        Write-Host "Node.js path already exists in PATH"
    }
} else {
    Write-Host "Node.js not found at $nodePath. Please install Node.js from https://nodejs.org/"
}
