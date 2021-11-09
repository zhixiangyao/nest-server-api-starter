import { IsNotEmpty, IsNumberString } from 'class-validator';
import { IsInt, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Data transfer object

export class CreateCatDto {
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @ApiProperty({
    description: 'The name of a cat',
    default: 'coco',
  })
  name: string;

  @Max(30)
  @Min(1)
  @IsInt()
  @IsNotEmpty({ message: 'Age cannot be empty' })
  @ApiProperty({
    description: 'The age of a cat',
    minimum: 1,
    maximum: 30,
    default: 1,
  })
  age: number;

  @IsNotEmpty({ message: 'Breed cannot be empty' })
  @ApiProperty({
    description: 'The breed of a cat',
    default: '田园猫',
  })
  breed: string;
}

export class ListAllEntities {
  @IsNumberString()
  @IsNotEmpty({ message: 'Limit cannot be empty' })
  @ApiProperty({
    description: 'The limit of a cat',
    default: 100,
  })
  limit: number;
}
