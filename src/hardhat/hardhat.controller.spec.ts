import { Test, TestingModule } from '@nestjs/testing';
import { HardhatController } from './hardhat.controller';

describe('HardhatController', () => {
  let controller: HardhatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HardhatController],
    }).compile();

    controller = module.get<HardhatController>(HardhatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
