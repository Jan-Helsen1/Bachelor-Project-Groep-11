# frontend/Dockerfile

# Stage 1: Build the application
FROM node:20.12.2-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview"]