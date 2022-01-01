import { Module } from '@nestjs/common';

import { DatabaseModule } from './processors/database/database.module';
import { CatsModule } from './modules/cats/cats.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [DatabaseModule, CatsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
