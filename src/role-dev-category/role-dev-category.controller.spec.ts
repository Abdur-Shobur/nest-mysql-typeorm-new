import { Test, TestingModule } from '@nestjs/testing';
import { RoleDevCategoryController } from './role-dev-category.controller';
import { RoleDevCategoryService } from './role-dev-category.service';

describe('RoleDevCategoryController', () => {
  let controller: RoleDevCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleDevCategoryController],
      providers: [RoleDevCategoryService],
    }).compile();

    controller = module.get<RoleDevCategoryController>(RoleDevCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
