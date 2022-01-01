import {
  Post,
  Put,
  Delete,
  Get,
  Header,
  Controller,
  ParseArrayPipe,
  HttpException,
  HttpStatus,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { Types } from 'mongoose';

import { CreateCatDto, FindCatDto } from './dto';
import { CatsService } from './cats.service';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiBody({ type: [CreateCatDto] })
  @Header('content-type', 'application/json')
  @Post('create')
  create(
    @Body(new ParseArrayPipe({ items: CreateCatDto }))
    cats: CreateCatDto[],
  ) {
    cats.forEach(async (cat) => {
      await this.catsService.createOne(cat);
    });

    return { message: 'This action adds a new cats' };
  }

  @Header('content-type', 'application/json')
  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    if (Types.ObjectId.isValid(id) === false) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: `Error(${HttpStatus.FORBIDDEN}): id is illegal`,
        },
        HttpStatus.FORBIDDEN,
      );
    }
    this.catsService.deleteOne(id);
    return { message: `Delete success!` };
  }

  @Header('content-type', 'application/json')
  @Put('put/:id')
  async put(@Param('id') id: string, @Body() body: any) {
    console.log(body);
    // await this.catsService.updateOne(id, {});
    return { message: `This action updates a #${id} cat` };
  }

  @ApiBody({ type: FindCatDto })
  @Header('content-type', 'application/json')
  @Post('find')
  async find(@Body() body: FindCatDto) {
    const data = await this.catsService.find(body);

    return {
      message: `Find success!`,
      data,
    };
  }

  @Get()
  getHello(): string {
    return this.catsService.getHello();
  }

  @Get('hello-text')
  getHelloText(): { text: string } {
    return this.catsService.getHelloText();
  }
}
