import { RoleDevCategoryRepository } from '../role-dev-category.repository.interface';
import { Repository, UpdateResult } from 'typeorm';
import { UserUpdateDto } from '../../../users/dto/user-update.dto';
import { RoleDevCategory } from '@/role-dev-category/models/role-dev-category.model';
import { CreateRoleDevCategoryDto } from '@/role-dev-category/dto/create-role-dev-category.dto';
import { PaginationDto, PaginationMetaDto } from '@/helpers/pagination.dto';

export class RoleDevCategoryTypeOrmRepository
  implements RoleDevCategoryRepository
{
  constructor(private readonly usersRepository: Repository<RoleDevCategory>) {}

  public async findAll(paginationDto: PaginationDto): Promise<{
    data: RoleDevCategory[];
    meta: PaginationMetaDto;
  }> {
    const page = paginationDto.page || 1;
    const limit = paginationDto.limit || 10;

    const [items, total] = await this.usersRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { id: 'DESC' },
    });

    const pageCount = Math.ceil(total / limit);
    const meta: PaginationMetaDto = {
      page,
      limit,
      total,
      pageCount,
      hasPreviousPage: page > 1,
      hasNextPage: page < pageCount,
    };

    return { data: items, meta };
  }

  public async findBySub(sub: number): Promise<RoleDevCategory> {
    return await this.usersRepository.findOneByOrFail({
      id: sub,
    });
  }

  public async findById(userId: string): Promise<RoleDevCategory | null> {
    return await this.usersRepository.findOneBy({
      id: +userId,
    });
  }

  public async create(dto: CreateRoleDevCategoryDto): Promise<RoleDevCategory> {
    return await this.usersRepository.save(dto);
  }

  public async update(
    id: string,
    userUpdateDto: UserUpdateDto,
  ): Promise<UpdateResult> {
    return await this.usersRepository.update(
      {
        id: +id,
      },
      { ...userUpdateDto },
    );
  }

  public async remove(data: any): Promise<void> {
    await this.usersRepository.remove(data);
  }
}
