#!/bin/bash
set -e

echo "Starting the development container..."

docker run --rm -it \
  --net=host \
  -e DISPLAY=$DISPLAY \
  -v "$HOME/.ssh:/root/.ssh" \
  -v "$(pwd):/usr/src/app" \
  -w /usr/src/app \
  jekyll-site \
  bash
