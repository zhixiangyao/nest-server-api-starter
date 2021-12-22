import { MongooseModule } from '@nestjs/mongoose';

import { MONGO_DB } from '../../app.config';

/**
 *  If connecting fails on your machine, try using 127.0.0.1 instead of localhost.
 *  https://mongoosejs.com/docs/connections.html
 */
export const DatabaseModule = MongooseModule.forRoot(MONGO_DB.uri);
