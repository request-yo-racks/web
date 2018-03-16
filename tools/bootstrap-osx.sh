#!/bin/bash
set -euo pipefail

# Install Brew.
brew --version || /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Update Brew.
brew update

# Install brew formulas.
brew install \
  node \
  2>/dev/null
