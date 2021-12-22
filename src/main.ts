import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger'; // https://docs.nestjs.com/openapi/introduction
import * as chalk from 'chalk';

import { AppModule } from './app.module';
import { SWAGGER_DOCUMENT_CONFIG, APP } from './app.config';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: false }));

  const document = SwaggerModule.createDocument(app, SWAGGER_DOCUMENT_CONFIG);
  SwaggerModule.setup('api-document', app, document);

  await app.listen(APP.PORT);

  console.log(`${chalk.green('[Api Document]')}-${chalk.yellow(`[http://localhost:${APP.PORT}/api-document]`)}`);
};

bootstrap();
