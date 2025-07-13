FROM ghcr.io/puppeteer/puppeteer:22.6.0

# Install gosu
RUN apt-get update && apt-get install -y --no-install-recommends gosu && rm -rf /var/lib/apt/lists/*

# Install necessary dependencies as root using gosu
RUN gosu root apt-get update && gosu root apt-get install -y --no-install-recommends \
    libnss3 \
    fonts-liberation \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "leslie.js"]
