import { Test, TestingModule } from '@nestjs/testing';
import { RoleDevCategoryService } from './role-dev-category.service';

describe('RoleDevCategoryService', () => {
  let service: RoleDevCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleDevCategoryService],
    }).compile();

    service = module.get<RoleDevCategoryService>(RoleDevCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
