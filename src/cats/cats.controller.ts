import { Controller, HttpException, HttpStatus } from '@nestjs/common';
import { Header, Redirect, Get, Post, Put, Delete } from '@nestjs/common';
import { Query, Param, Body } from '@nestjs/common';

import type { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
import { CatsService } from './cats.service';
import { validateCreate } from './validate';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto) {
    validateCreate(createCatDto);

    this.catsService.create(createCatDto);

    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    if (!query.limit) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: `Error(${HttpStatus.FORBIDDEN}): query.limit is empty`,
        },
        HttpStatus.FORBIDDEN,
      );
    }

    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `<h1>This action returns a #${id} cat</h1>`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    console.log(updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

  @Get('docs/version/:version')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Param('version') version: string) {
    if (version && version === '4') {
      return {
        url: 'https://docs.nestjs.com/v4/',
        statusCode: 302,
      };
    }
    if (version && version === '5') {
      return {
        url: 'https://docs.nestjs.com/v5/',
        statusCode: 302,
      };
    }
  }
}
