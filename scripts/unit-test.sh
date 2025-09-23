#!/bin/bash
set -e

echo "Running unit tests..."
bundle exec rake test
echo "Unit tests complete."
