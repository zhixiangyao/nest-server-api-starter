import { Controller, HttpException, HttpStatus } from '@nestjs/common';
import { Header, Redirect, Get, Post, Put, Delete } from '@nestjs/common';
import { Query, Param, Body } from '@nestjs/common';

import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
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

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: string) {
    if (version && version === '5') {
      return {
        url: 'https://docs.nestjs.com/v5/',
        statusCode: 302,
      };
    }
  }
}

export { CatsController };
