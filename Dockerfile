# Get NPM packages
FROM node:18-alpine AS build
WORKDIR /app
COPY ./package*.json .

RUN npm ci

COPY ./ ./
RUN npm run build

FROM nginx:1.23.0-alpine
EXPOSE 8080
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/frontend /usr/share/nginx/html
