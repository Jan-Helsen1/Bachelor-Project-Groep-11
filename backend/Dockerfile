# backend/Dockerfile

FROM node:20.12.2-alpine
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]