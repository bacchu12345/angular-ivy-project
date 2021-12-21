# Stage 1

FROM node:17-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install 

RUN npm install -g @angular/cli

COPY . /app

RUN npm run build --prod
