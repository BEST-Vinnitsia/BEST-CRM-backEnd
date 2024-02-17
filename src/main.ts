import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './modules/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const logger = new Logger('bootstrap');

    if (!process.env.SECRET_ACCESS_TOKEN || !process.env.SECRET_REFRESH_TOKEN) {
        logger.error('!!! Set token keys in env file');
        process.exit(1);
    }

    const port = Number(process.env.PORT) | 3000;

    // Create app
    const app = await NestFactory.create(AppModule);

    //   CORS
    app.enableCors();

    // Global validation (class validator)
    app.useGlobalPipes(new ValidationPipe());
    // app.useGlobalFilters(new HttpErrorFilter());

    // Swagger
    const config = new DocumentBuilder() //
        .setTitle('BEST CRM System')
        .setDescription('The BEST CRM System API')
        .setVersion('2.0')
        .addSecurity('basic', {
            type: 'http',
            scheme: 'basic',
        })
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('', app, document);

    // run app
    await app.listen(port);

    logger.log(`Server start in port: ${port}`);

    if (process.env.RUN_MODE === 'setting') {
        logger.warn(`Server started in setting mode`);
    }
}

bootstrap();
