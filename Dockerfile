FROM node:20-alpine
WORKDIR /app
COPY . .

COPY package*.json ./

RUN yarn install
RUN yarn build

CMD ["yarn", "serve", "--verbose", "--prefix-paths", "-p", "8080", "--host", "0.0.0.0"]