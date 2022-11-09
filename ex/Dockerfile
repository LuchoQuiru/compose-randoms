FROM node:12.18.1-alpine
WORKDIR /

COPY /ex/package*.json ./
RUN npm install --only-production
COPY /ex /

CMD npm start

