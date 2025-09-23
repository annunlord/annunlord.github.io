#!/bin/bash
set -e

echo "Building the Docker image..."
# In this sandboxed environment, we need to use sudo to run docker.
# In a local development environment, you should not need sudo if your user is in the docker group.
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root or with sudo."
  sudo "$0" "$@"
  exit
fi

docker build -t jekyll-site .

echo "Starting the Docker container..."
docker run -d -p 4000:4000 --name jekyll-container jekyll-site

echo "Container started. Access the site at http://localhost:4000"
echo "To stop the container, run: docker stop jekyll-container"
echo "To view logs, run: docker logs -f jekyll-container"
