import { Controller, ParseIntPipe } from '@nestjs/common';
import { Header, Redirect, Get, Post, Put, Delete } from '@nestjs/common';
import { Query, Param, Body } from '@nestjs/common';

import { CreateCatDto, ListAllEntities } from './dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Header('Cache-Control', 'none')
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);

    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return `<h1>This action returns a #${id} cat</h1>`;
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return `This action removes a #${id} cat`;
  }

  @Redirect('https://docs.nestjs.com', 302)
  @Get('docs/version/:version')
  getDocs(@Param('version', ParseIntPipe) version: number) {
    if (version && version === 4) {
      return {
        url: 'https://docs.nestjs.com/v4/',
        statusCode: 302,
      };
    }
    if (version && version === 5) {
      return {
        url: 'https://docs.nestjs.com/v5/',
        statusCode: 302,
      };
    }
  }
}
