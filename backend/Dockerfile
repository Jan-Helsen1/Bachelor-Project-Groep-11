# Use an official Node.js runtime based on Debian
FROM node:20-bullseye-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Install necessary dependencies for Puppeteer
RUN apt-get update && apt-get install -y \
    chromium \
    libnss3 \
    libxss1 \
    libasound2 \
    fonts-liberation \
    libappindicator3-1 \
    xdg-utils \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libgbm1 \
    libnspr4 \
    libxkbcommon0 \
    libwayland-client0 \
    libwayland-server0 && \
    rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Install TypeScript globally
RUN npm install -g typescript

# Copy the rest of the application code
COPY . .

# Compile TypeScript to JavaScript
RUN tsc

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
