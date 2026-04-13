FROM node:18.16.0-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
#COPY env/testing.ts src/env.ts
RUN #npm run build

EXPOSE 8080