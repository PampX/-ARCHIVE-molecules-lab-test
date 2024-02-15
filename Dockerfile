FROM node:current-alpine3.18

WORKDIR /molecules-lab-test

COPY . .

EXPOSE 3000

RUN npm ci

CMD ["npm", "start", "--logs-dir=."]