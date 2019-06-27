import {
  DefaultCrudRepository,
  HasManyThroughRepositoryFactory,
  repository,
} from '@loopback/repository';
import {Role, User, UserRole, Functions, Permission} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {
  UserRepository,
  UserRoleRepository,
  FunctionsRepository,
  PermissionRepository,
} from '.';

export class RoleRepository extends DefaultCrudRepository<
  Role,
  typeof Role.prototype.id
> {
  public readonly users: HasManyThroughRepositoryFactory<
    User,
    UserRole,
    typeof Role.prototype.id
  >;

  public readonly functions: HasManyThroughRepositoryFactory<
    Functions,
    Permission,
    typeof Role.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('UserRepository')
    userRepositoryGetter: Getter<UserRepository>,
    @repository.getter('UserRoleRepository')
    userRoleRepositoryGetter: Getter<UserRoleRepository>,
    @repository.getter('FunctionRepository')
    functionsRepositoryGetter: Getter<FunctionsRepository>,
    @repository.getter('PermissionRepository')
    permissionRepositoryGetter: Getter<PermissionRepository>,
  ) {
    super(Role, dataSource);
    this.users = this.createHasManyThroughRepositoryFactoryFor(
      'users',
      userRepositoryGetter,
      userRoleRepositoryGetter,
    );
    this.functions = this.createHasManyThroughRepositoryFactoryFor(
      'functions',
      functionsRepositoryGetter,
      permissionRepositoryGetter,
    );
  }
}
