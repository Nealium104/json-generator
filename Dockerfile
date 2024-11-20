FROM node:lts

COPY . .

RUN node index.js