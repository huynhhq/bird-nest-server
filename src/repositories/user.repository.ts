import {
  DefaultCrudRepository,
  HasManyThroughRepositoryFactory,
  repository,
} from '@loopback/repository';
import {User, Role, UserRole} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {RoleRepository} from './role.repository';
import {UserRoleRepository} from './user-role.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  public readonly roles: HasManyThroughRepositoryFactory<
    Role,
    UserRole,
    typeof User.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('RoleRepository')
    roleRepositoryGetter: Getter<RoleRepository>,
    @repository.getter('UserRoleRepository')
    userRoleRepositoryGetter: Getter<UserRoleRepository>,
  ) {
    super(User, dataSource);
    this.roles = this.createHasManyThroughRepositoryFactoryFor(
      'roles',
      roleRepositoryGetter,
      userRoleRepositoryGetter,
    );
  }
}
