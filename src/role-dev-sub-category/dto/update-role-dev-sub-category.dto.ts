import { PartialType } from '@nestjs/swagger';
import { CreateRoleDevSubCategoryDto } from './create-role-dev-sub-category.dto';

export class UpdateRoleDevSubCategoryDto extends PartialType(CreateRoleDevSubCategoryDto) {}
