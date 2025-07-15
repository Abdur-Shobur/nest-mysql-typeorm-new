import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { iRoleDevCategoryStatus } from '../interfaces/role-dev-category.interface'; // adjust path as needed

@Entity()
export class RoleDevCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  permissionKey: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: iRoleDevCategoryStatus,
    default: iRoleDevCategoryStatus.Active,
  })
  status: iRoleDevCategoryStatus;
}
