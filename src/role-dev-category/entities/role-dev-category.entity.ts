import { iRoleDevCategoryStatus } from '../interfaces/role-dev-category.interface';

export class RoleDevCategory {
  constructor(
    public id: number,
    public name: string,
    public permissionKey: string,
    public description: string,
    public status: iRoleDevCategoryStatus = iRoleDevCategoryStatus.Active,
  ) {}
}
