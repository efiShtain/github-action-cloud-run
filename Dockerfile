FROM node:alpine
WORKDIR /usr/app/src
COPY package*.json ./

RUN npm install --production

COPY src .

CMD ["node", "index.js"]

