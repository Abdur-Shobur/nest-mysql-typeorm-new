import { Module } from '@nestjs/common';
import { RoleDevCategoryService } from './role-dev-category.service';
import { RoleDevCategoryController } from './role-dev-category.controller';
import { provideRoleDevCategoryRepository } from './repositories/role-dev-category.repository.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleDevCategory } from './models/role-dev-category.model';

@Module({
  imports: [TypeOrmModule.forFeature([RoleDevCategory])],
  controllers: [RoleDevCategoryController],
  providers: [RoleDevCategoryService, ...provideRoleDevCategoryRepository()],
})
export class RoleDevCategoryModule {}
