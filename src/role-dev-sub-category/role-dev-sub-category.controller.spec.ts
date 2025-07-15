import { Test, TestingModule } from '@nestjs/testing';
import { RoleDevSubCategoryController } from './role-dev-sub-category.controller';
import { RoleDevSubCategoryService } from './role-dev-sub-category.service';

describe('RoleDevSubCategoryController', () => {
  let controller: RoleDevSubCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleDevSubCategoryController],
      providers: [RoleDevSubCategoryService],
    }).compile();

    controller = module.get<RoleDevSubCategoryController>(RoleDevSubCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
