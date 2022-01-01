import { Test, type TestingModule } from '@nestjs/testing';
import { CatsModule } from './cats.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { getModelToken } from '@nestjs/mongoose';

describe('CatsModule', () => {
  const mockRepository = { getHello: () => 'Hello World!' };
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [{ module: CatsModule }],
    })
      .overrideProvider(getModelToken('Cat'))
      .useValue(mockRepository)
      .compile();

    catsController = await module.resolve<CatsController>(CatsController);
    catsService = await module.resolve<CatsService>(CatsService);
  });

  describe('getHello()', () => {
    it('should return "Hello World!"', () => {
      const result = 'Hello World!';
      jest.spyOn(catsService, 'getHello').mockImplementation(() => result);

      expect(catsController.getHello()).toBe(result);
    });
  });
});
