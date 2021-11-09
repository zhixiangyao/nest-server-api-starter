import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as compression from 'compression';
import type { CompressionFilter } from 'compression';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // https://docs.nestjs.com/openapi/introduction
import * as chalk from 'chalk';

import { AppModule } from './app.module';

const shouldCompress: CompressionFilter = (req, res) => {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
};

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: false }));
  app.use(compression({ filter: shouldCompress }));

  const config = new DocumentBuilder()
    .setTitle('Cats super cute!')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats', '好多好多小猫咪')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-document', app, document);

  await app.listen(3000);
  console.log(
    chalk.green('[Api Document] ') +
      chalk.yellow('[http://localhost:3000/api-document]'),
  );
};

bootstrap();
