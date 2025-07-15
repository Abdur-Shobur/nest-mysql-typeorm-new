export interface iRoleSubDevCategory {
  readonly id: number;
  readonly name: string;
  readonly permissionKey: string;
  readonly description: string;
  readonly status: iRoleSubDevCategoryStatus;
  readonly category: string;
}

// for status
export enum iRoleSubDevCategoryStatus {
  ForLoginUser = 'active',
  ForAnyOne = 'anyone',
  Inactive = 'inactive',
  Deleted = 'deleted',
}
