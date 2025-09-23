#!/bin/bash
set -e

echo "Building the site..."
bundle exec jekyll build
echo "Site build complete."
