import { Test, TestingModule } from '@nestjs/testing';
import { HardhatServiceImpl } from './hardhat.service';

describe('HardhatServiceImpl', () => {
  let service: HardhatServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HardhatServiceImpl],
    }).compile();

    service = module.get<HardhatServiceImpl>(HardhatServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
