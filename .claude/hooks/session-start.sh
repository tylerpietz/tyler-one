#!/bin/bash
# session-start.sh — runs automatically when a Claude Code session starts
# For this project there are no packages to install, so this script
# just confirms the key project files are present.
set -euo pipefail

# Only run in remote (Claude Code on the web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo "Session start hook running..."

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"

# Check that the core project files exist
for file in index.html style.css script.js README.md; do
  if [ -f "$PROJECT_DIR/$file" ]; then
    echo "  ✓ $file found"
  else
    echo "  ✗ $file is missing!"
  fi
done

echo "Session start hook complete."
