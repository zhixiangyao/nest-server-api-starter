import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as compression from 'compression';
import type { CompressionFilter } from 'compression';

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

  await app.listen(3000);
};

bootstrap();
