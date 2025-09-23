#!/bin/bash
set -e

echo "Setting up the project..."
# In this sandboxed environment, we need to use sudo to install gems globally.
# In a local development environment, you should not use sudo.
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root or with sudo."
  sudo "$0" "$@"
  exit
fi

bundle install
echo "Project setup complete."
