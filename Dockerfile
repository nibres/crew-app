FROM node:14-alpine as builder

RUN apk add --no-cache git
WORKDIR /tmp
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

FROM node:14-alpine as app

RUN yarn global add serve
WORKDIR /home/node
USER node
COPY --chown=node:node --from=builder /tmp/build ./app
EXPOSE 5000
CMD serve -s app -l 5000

