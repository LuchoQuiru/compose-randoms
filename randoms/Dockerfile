FROM node:12.18.1-alpine
WORKDIR /

COPY /randoms/package*.json ./
COPY /randoms/public ./public
COPY /randoms/src ./src

RUN npm install --only-production

CMD npm start
