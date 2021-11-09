import { IsNotEmpty, IsNumberString } from 'class-validator';
import { IsInt, Min, Max } from 'class-validator';

// Data transfer object

export class CreateCatDto {
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string;

  @Max(30)
  @Min(1)
  @IsInt()
  @IsNotEmpty({ message: 'Age cannot be empty' })
  age: number;

  @IsNotEmpty({ message: 'Breed cannot be empty' })
  breed: string;
}

export class ListAllEntities {
  @IsNumberString()
  @IsNotEmpty({ message: 'Limit cannot be empty' })
  limit: number;
}
