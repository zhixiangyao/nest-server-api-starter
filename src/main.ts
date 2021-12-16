import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // https://docs.nestjs.com/openapi/introduction
import * as chalk from 'chalk';

import { AppModule } from './app.module';

const DOC = 'http://localhost:3000/api-document';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: false }));

  const config = new DocumentBuilder()
    .setTitle('Cats super cute!')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats', '好多好多小猫咪')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-document', app, document);

  await app.listen(3000);
  console.log(`${chalk.green('[Api Document]')}-${chalk.yellow(`[${DOC}]`)}`);
};

bootstrap();
