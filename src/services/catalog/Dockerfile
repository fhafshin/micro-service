FROM node:18.19.1-alpine3.19
LABEL authors="hesam"
RUN npm i -g pnpm
ARG PORT
WORKDIR /usr/src/app
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install
COPY . .
EXPOSE ${PORT}
RUN pnpm build
CMD["pnpm","start"]

ENTRYPOINT ["top", "-b"]