FROM node:20-alpine
WORKDIR /app
COPY . .

COPY package*.json ./

ENV PORT=8080

RUN npm install
RUN npm run build

CMD ["npm", "start"]