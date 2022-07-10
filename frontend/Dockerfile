FROM node:14-slim

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./babel.config.js ./
COPY ./webpack.config.js ./

RUN yarn install

