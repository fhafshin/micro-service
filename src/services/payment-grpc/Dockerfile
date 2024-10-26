FROM node:18.19.1-alpine3.19

RUN npm i -g pnpm
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install
COPY . .