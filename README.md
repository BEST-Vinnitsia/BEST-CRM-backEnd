<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
</p>

## Description

## Installation

```bash
$ yarn install
```

## Setting env file

#### create .env file in root dir

##### Set token key

```bash
SECRET_ACCESS_TOKEN='access token secret key'
SECRET_REFRESH_TOKEN='refresh token secret key'
```

##### Start mode

###### this key to set setting guard if this field is not exist, user get a 403 error on controllers thet are protected by setting guard

```bash
RUN_MODE='' # 'setting' or empty
```

##### Set port

```bash
PORT=3000
```

##### Guards setting

```bash
ACCESS_TOKEN_GUARD_DISABLE='' # 'true' or empty
REFRESH_TOKEN_GUARD_DISABLE='' # 'true' or empty
MEMBERSHIP_GUARD_DISABLE='' # 'true' or empty
BOARD_GUARD_DISABLE='' # 'true' or empty
COORDINATOR_GUARD_DISABLE='' # 'true' or empty
CHECK_TOKEN_GUARD_DISABLE='' # 'true' or empty
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
