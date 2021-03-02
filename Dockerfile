FROM node

COPY . /app

RUN npm ci

WORKDIR /app

CMD ["npm", "start"]
