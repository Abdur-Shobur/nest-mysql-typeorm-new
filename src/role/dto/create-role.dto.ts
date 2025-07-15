import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { iRoleStatus } from '../interfaces/role.interface';

export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  readonly name: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly permissions: string[];

  @IsOptional()
  @IsString()
  @MaxLength(255)
  readonly description: string;

  @IsOptional()
  @IsEnum(iRoleStatus)
  readonly status: iRoleStatus;
}
