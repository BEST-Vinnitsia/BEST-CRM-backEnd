import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './modules/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const port = Number(process.env.PORT) | 3000;

  // Create app
  const app = await NestFactory.create(AppModule);

  // Global validation (class validator)
  app.useGlobalPipes(new ValidationPipe());

  // Swagger
  const config = new DocumentBuilder() //
    .setTitle('BEST CRM System')
    .setDescription('The BEST CRM System API')
    .setVersion('1.0')
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