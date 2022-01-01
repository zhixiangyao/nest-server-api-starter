import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Data transfer object

export class LoginDto {
  @IsString()
  @IsNotEmpty({ message: '用户名不能为空' })
  @ApiProperty({
    description: '用户名',
    default: 'root',
  })
  username: string;

  @IsString()
  @IsNotEmpty({ message: '密码不能为空' })
  @ApiProperty({
    description: '密码',
    default: '123456',
  })
  password: string;
}
