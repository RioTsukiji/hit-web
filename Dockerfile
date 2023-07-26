FROM node:18.12.1-alpine
WORKDIR /usr/src/app
RUN chown -R node:node /usr/src/app
USER node