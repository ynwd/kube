FROM node:alpine
COPY src/redis.js .
COPY package.json .
RUN npm install
EXPOSE 8080
CMD node redis.js