import { Module } from '@nestjs/common';

import { DatabaseModule } from './processors/database/database.module';
import { CatsModule } from './modules/cats/cats.module';

@Module({
  imports: [DatabaseModule, CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
