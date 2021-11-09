import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatsModule } from './cats/cats.module';

const LOCALHOST = '127.0.0.1';
const PORT = 27017;
const DATABASE = 'aliez';

@Module({
  imports: [
    /**
     *  If connecting fails on your machine, try using 127.0.0.1 instead of localhost.
     *  https://mongoosejs.com/docs/connections.html
     */
    MongooseModule.forRoot(`mongodb://${LOCALHOST}:${PORT}/${DATABASE}`),
    CatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
