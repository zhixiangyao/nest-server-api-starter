import { Module } from '@nestjs/common';

import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
})
class AppModule {}

export { AppModule };
