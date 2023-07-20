FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --force

COPY . .

RUN npm run build

FROM nginx:1.17.1-alpine

COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html

COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
