import { Controller, Header, Post, Body } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { LoginDto } from './dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBody({ type: LoginDto })
  @Header('content-type', 'application/json')
  @Post('login')
  async login(@Body() body: LoginDto) {
    const user = await this.usersService.validateUser(body.username, body.password);
    if (user) return user;
    else return '请输入正确用户名或密码';
  }
}
