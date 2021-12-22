<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Tree

```
├── Dockerfile
├── README.md
├── docker-compose.yml
├── http.http
├── nest-cli.json
├── package.json
├── src
│   ├── app.config.ts
│   ├── app.environment.ts
│   ├── app.module.ts
│   ├── main.ts
│   ├── modules
│   │   └── cats
│   │       ├── cats.controller.spec.ts
│   │       ├── cats.controller.ts
│   │       ├── cats.module.ts
│   │       ├── cats.service.ts
│   │       ├── dto
│   │       │   └── index.ts
│   │       └── schemas
│   │           ├── cat.schema.ts
│   │           └── index.ts
│   ├── processors
│   │   └── database
│   │       └── database.module.ts
│   └── utils
│       └── logger.ts
├── test
│   ├── cats.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json
```

## Installation

```bash
$ pnpm install
```

## Build Docker image

- need docker image

```bash
$ pnpm run build:image
```

- build compose

```
$ docker-compose up
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
