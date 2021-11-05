import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common';

@Controller('cats')
class CatsController {
  // constructor(private);

  @Get(':id')
  getCatInfo(@Param('id') id: string): string {
    return `ID: ${id}`;
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}

export { CatsController };
