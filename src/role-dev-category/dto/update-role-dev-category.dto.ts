import { PartialType } from '@nestjs/swagger';
import { CreateRoleDevCategoryDto } from './create-role-dev-category.dto';

export class UpdateRoleDevCategoryDto extends PartialType(CreateRoleDevCategoryDto) {}
