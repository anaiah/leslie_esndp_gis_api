FROM ghcr.io/puppeteer/puppeteer:22.6.0

USER root  # Switch to the root user

# Install necessary dependencies that might be missing in the base image
RUN apt-get update && apt-get install -y --no-install-recommends \
    libnss3 \
    fonts-liberation \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Switch back to the non-root user (important for security)
USER pptruser  # Or whatever user the base image uses

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "leslie.js"]
