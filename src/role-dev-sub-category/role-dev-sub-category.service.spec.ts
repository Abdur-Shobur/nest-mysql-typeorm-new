import { Test, TestingModule } from '@nestjs/testing';
import { RoleDevSubCategoryService } from './role-dev-sub-category.service';

describe('RoleDevSubCategoryService', () => {
  let service: RoleDevSubCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleDevSubCategoryService],
    }).compile();

    service = module.get<RoleDevSubCategoryService>(RoleDevSubCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
