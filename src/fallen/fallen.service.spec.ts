import { Test, TestingModule } from '@nestjs/testing';
import { FallenServiceImpl } from './fallen.service';

describe('FallenServiceImpl', () => {
  let service: FallenServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FallenServiceImpl],
    }).compile();

    service = module.get<FallenServiceImpl>(FallenServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
