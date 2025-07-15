export interface iRoleDevCategory {
  readonly id: number;
  readonly name: string;
  readonly permissionKey: string;
  readonly description: string;
  readonly status: iRoleDevCategoryStatus;
}

// for status
export enum iRoleDevCategoryStatus {
  Active = 'active',
  Inactive = 'inactive',
  Deleted = 'deleted',
}
