FROM node:10
WORKDIR usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 1337

CMD ["npm", "run", "server-dev"]