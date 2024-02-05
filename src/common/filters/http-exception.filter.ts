import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
    private readonly logger: Logger;

    constructor() {
        this.logger = new Logger();
    }

    catch(exception: Error, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();

        const statusCode = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        const message =
            exception instanceof HttpException
                ? exception.message || (exception.message && (exception.message as any).error)
                : 'Internal server error';

        const prodErrorResponse: any = {
            statusCode,
            message,
        };

        this.logger.verbose({
            path: request.url,
            method: request.method,
            statusCode,
            timestamp: new Date().toISOString(),
            errorName: exception?.name,
            message: exception?.message.split('\n'),
        });

        response.status(statusCode).json(prodErrorResponse);
    }
}
