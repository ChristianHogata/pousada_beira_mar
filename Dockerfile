FROM node:alpine as build
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Sirva a aplicação React com NGINX
FROM nginx
EXPOSE 8082
COPY --from=build /app/build /usr/share/nginx/html
