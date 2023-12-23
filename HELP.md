#### Add controller

nest g controller modules/<controllerName>

#### Add module

nest g module modules/<moduleName>

#### Add service

nest g service modules/<serviceName>

#### Prisma migrate

npx prisma migrate dev --name <migrateName>

#### Exceptions

```
const errorsCode = {
  400: "BadRequestException",
  401: "UnauthorizedException",
  403: "ForbiddenException",
  404: "NotFoundException",
  405: "MethodNotAllowedException",
  406: "NotAcceptableException",
  408: "RequestTimeoutException",
  409: "ConflictException",
  410: "GoneException",
  412: "PreconditionFailedException",
  413: "PayloadTooLargeException",
  415: "UnsupportedMediaTypeException",
  418: "ImATeapotException",
  422: "UnprocessableEntityException",
  //
  500: "InternalServerErrorException",
  501: "NotImplementedException",
  502: "BadGatewayException",
  503: "ServiceUnavailableException",
  504: "GatewayTimeoutException",
  505: "HttpVersionNotSupportedException",
};
```
