FROM node:16-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD [ "npm", "start" ]