import { Injectable } from '@nestjs/common';
import { CreateRoleDevSubCategoryDto } from './dto/create-role-dev-sub-category.dto';
import { UpdateRoleDevSubCategoryDto } from './dto/update-role-dev-sub-category.dto';

@Injectable()
export class RoleDevSubCategoryService {
  create(createRoleDevSubCategoryDto: CreateRoleDevSubCategoryDto) {
    return 'This action adds a new roleDevSubCategory';
  }

  findAll() {
    return `This action returns all roleDevSubCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roleDevSubCategory`;
  }

  update(id: number, updateRoleDevSubCategoryDto: UpdateRoleDevSubCategoryDto) {
    return `This action updates a #${id} roleDevSubCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} roleDevSubCategory`;
  }
}
