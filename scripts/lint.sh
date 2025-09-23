#!/bin/bash
set -e

echo "Running linter..."
echo "Running spell check..."
bundle exec rake spell_check
echo "Running link check..."
bundle exec rake test
echo "Linter check complete."
