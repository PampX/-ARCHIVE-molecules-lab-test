FROM node:latest

WORKDIR /molecules-lab-test

COPY . .

EXPOSE 3000

RUN npm ci

CMD ["npm", "start"]