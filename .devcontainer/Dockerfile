FROM mcr.microsoft.com/devcontainers/jekyll:2-bookworm

USER root

# 1. Update system and install prerequisites (Ruby, build tools, and curl for Node.js setup)
RUN apt-get update -y && apt-get install -y --no-install-recommends \
    ruby-full \
    build-essential \
    zlib1g-dev \
    curl

# 2. Install Node.js (which includes npm) using the official NodeSource script
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# 3. Install the bundler gem for managing Ruby dependencies
RUN gem install bundler

# 4. Install Playwright and its browser dependencies globally
RUN npm install @playwright/test && \
    npx playwright install --with-deps
