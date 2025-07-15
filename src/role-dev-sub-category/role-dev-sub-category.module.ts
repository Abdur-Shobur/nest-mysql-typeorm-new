import { Module } from '@nestjs/common';
import { RoleDevSubCategoryService } from './role-dev-sub-category.service';
import { RoleDevSubCategoryController } from './role-dev-sub-category.controller';

@Module({
  controllers: [RoleDevSubCategoryController],
  providers: [RoleDevSubCategoryService],
})
export class RoleDevSubCategoryModule {}
