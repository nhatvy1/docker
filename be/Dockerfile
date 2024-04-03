# Base
FROM node:20

# Enable Node.js optimisation
ENV NODE_ENV=development
RUN mkdir /app
EXPOSE 8001
WORKDIR /app
USER root
COPY  package.json yarn.lock ./
RUN yarn

CMD yarn start:dev