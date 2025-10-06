FROM oven/bun:slim

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --production

COPY . .
EXPOSE 3000
CMD [ "bun", "start:dev" ]

