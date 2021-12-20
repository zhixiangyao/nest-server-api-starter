import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatsModule } from './cats/cats.module';
import { DB_URL, DB_PORT, DB_DATABASE } from './env';

/**
 *  If connecting fails on your machine, try using 127.0.0.1 instead of localhost.
 *  https://mongoosejs.com/docs/connections.html
 */
export const DBModule = MongooseModule.forRoot(
  `mongodb://${DB_URL}:${DB_PORT}/${DB_DATABASE}`,
);

@Module({
  imports: [DBModule, CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
