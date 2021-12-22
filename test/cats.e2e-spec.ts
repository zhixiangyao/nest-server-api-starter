import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CatsModule } from '../src/modules/cats/cats.module';
import { getModelToken } from '@nestjs/mongoose';

describe('CatsController (e2e)', () => {
  let cats: INestApplication;
  const mockRepository = { getHello: () => 'Hello World!' };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [{ module: CatsModule }],
    })
      .overrideProvider(getModelToken('Cat'))
      .useValue(mockRepository)
      .compile();

    cats = module.createNestApplication();
    await cats.init();
  });

  it('/ (GET)', () => {
    return request(cats.getHttpServer()).get('/api/cats').expect(200).expect('Hello World!');
  });
});
