# base
FROM node:20

RUN mkdir -p /app

WORKDIR /app

COPY  package*.json /app

COPY . /app

RUN yarn

EXPOSE 3000

CMD ["yarn", "dev"]
