import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleDevSubCategoryService } from './role-dev-sub-category.service';
import { CreateRoleDevSubCategoryDto } from './dto/create-role-dev-sub-category.dto';
import { UpdateRoleDevSubCategoryDto } from './dto/update-role-dev-sub-category.dto';

@Controller('role-dev-sub-category')
export class RoleDevSubCategoryController {
  constructor(private readonly roleDevSubCategoryService: RoleDevSubCategoryService) {}

  @Post()
  create(@Body() createRoleDevSubCategoryDto: CreateRoleDevSubCategoryDto) {
    return this.roleDevSubCategoryService.create(createRoleDevSubCategoryDto);
  }

  @Get()
  findAll() {
    return this.roleDevSubCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleDevSubCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDevSubCategoryDto: UpdateRoleDevSubCategoryDto) {
    return this.roleDevSubCategoryService.update(+id, updateRoleDevSubCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleDevSubCategoryService.remove(+id);
  }
}
