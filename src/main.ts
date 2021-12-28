import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger'; // https://docs.nestjs.com/openapi/introduction

import logger from './utils/logger';
import { AppModule } from './app.module';
import { SWAGGER_DOCUMENT_CONFIG, APP } from './app.config';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: false }));
  app.setGlobalPrefix('api'); // 设置全局路由前缀

  const document = SwaggerModule.createDocument(app, SWAGGER_DOCUMENT_CONFIG);
  SwaggerModule.setup('api-document', app, document);

  await app.listen(APP.PORT);
};

bootstrap().then(() => {
  logger.info(`NodePress Run! port at ${APP.PORT}`);
  logger.info(`[http://localhost:${APP.PORT}/api-document]`);
});
