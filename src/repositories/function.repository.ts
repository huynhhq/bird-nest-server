import {
  DefaultCrudRepository,
  HasManyThroughRepositoryFactory,
  repository,
} from '@loopback/repository';
import {Function, Role, Permission} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {RoleRepository, PermissionRepository} from '.';

export class FunctionRepository extends DefaultCrudRepository<
  Function,
  typeof Function.prototype.id
> {
  public readonly roles: HasManyThroughRepositoryFactory<
    Role,
    Permission,
    typeof Function.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('RoleRepository')
    roleRepositoryGetter: Getter<RoleRepository>,
    @repository.getter('PermissionRepository')
    permissionRepositoryGetter: Getter<PermissionRepository>,
  ) {
    super(Function, dataSource);
    this.roles = this.createHasManyThroughRepositoryFactoryFor(
      'roles',
      roleRepositoryGetter,
      permissionRepositoryGetter,
    );
  }
}
