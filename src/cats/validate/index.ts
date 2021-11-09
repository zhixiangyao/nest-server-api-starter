import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateCatDto } from '../dto';

const validateCreate = (data: CreateCatDto) => {
  if (!data.age) {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: `Error(${HttpStatus.FORBIDDEN}): data.age is empty`,
      },
      HttpStatus.FORBIDDEN,
    );
  }

  if (!data.breed) {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: `Error(${HttpStatus.FORBIDDEN}): data.breed is empty`,
      },
      HttpStatus.FORBIDDEN,
    );
  }

  if (!data.name) {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: `Error(${HttpStatus.FORBIDDEN}): data.name is empty`,
      },
      HttpStatus.FORBIDDEN,
    );
  }
};

export { validateCreate };
