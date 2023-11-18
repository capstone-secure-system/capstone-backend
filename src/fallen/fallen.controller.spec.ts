import { Test, TestingModule } from '@nestjs/testing';
import { FallenController } from './fallen.controller';

describe('FallenController', () => {
  let controller: FallenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FallenController],
    }).compile();

    controller = module.get<FallenController>(FallenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
