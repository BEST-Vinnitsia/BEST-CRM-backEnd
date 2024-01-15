import { Catch, ArgumentsHost, ExceptionFilter, HttpException, Logger } from '@nestjs/common';

@Catch()
export class ErrorLoggingFilter implements ExceptionFilter {
  private readonly logger = new Logger(ErrorLoggingFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      this.logger.error(`Error in ${request.method} ${request.url}: ${status} - ${exception.message}`);
    } else {
      this.logger.error(`Unhandled error in ${request.method} ${request.url}: ${exception}`);
    }

    response.status(500).json({
      statusCode: 500,
      message: 'Internal Server Error',
    });
  }
}
