#!/bin/bash
set -e

echo "Linting the code..."
bundle exec rubocop
echo "Linting complete."
