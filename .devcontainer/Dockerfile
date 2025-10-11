FROM mcr.microsoft.com/playwright:v1.56.0

USER root

# 1. Update system and install prerequisites (Ruby, build tools, and curl for Node.js setup)
RUN apt-get update -y && apt-get install -y --no-install-recommends \
    ruby-full \
    build-essential \
    zlib1g-dev \
    curl

# 3. Install the bundler gem for managing Ruby dependencies
RUN gem install bundler
