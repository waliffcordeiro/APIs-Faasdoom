FROM node:14

WORKDIR .

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "--max-old-space-size=2048", "./index.js"]