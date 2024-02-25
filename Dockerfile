FROM node:18-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
