FROM node:carbon

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8080 9209

CMD ["yarn", "run", "start"]