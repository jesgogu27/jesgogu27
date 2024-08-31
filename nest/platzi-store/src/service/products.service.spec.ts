import { Test, TestingModule } from '@nestjs/testing';
import { Service\productsService } from './service\products.service';

describe('Service\productsService', () => {
  let service: Service\productsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service\productsService],
    }).compile();

    service = module.get<Service\productsService>(Service\productsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
