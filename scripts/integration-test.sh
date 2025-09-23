#!/bin/bash
set -e

echo "Running integration tests..."

# In this sandboxed environment, we need to use sudo to run docker.
# In a local development environment, you should not need sudo if your user is in the docker group.
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root or with sudo."
  sudo "$0" "$@"
  exit
fi

echo "Building the Docker image..."
docker build -t jekyll-site .

echo "Starting the Docker container..."
docker run -d -p 4000:4000 --name jekyll-container-test jekyll-site

echo "Waiting for the server to start..."
timeout=30
while ! curl -s http://localhost:4000 > /dev/null; do
  sleep 1
  timeout=$((timeout-1))
  if [ $timeout -eq 0 ]; then
    echo "Timed out waiting for server to start."
    exit 1
  fi
done

echo "Checking if the site is accessible..."
curl -f http://localhost:4000

echo "Stopping and removing the container..."
docker stop jekyll-container-test
docker rm jekyll-container-test

echo "Integration tests complete."
