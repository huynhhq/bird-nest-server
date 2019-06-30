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
import {UserRepositoryInterface} from '../interface_repositories/user.interface-repository';
import {LoginModel} from '../models/request_response_model/login.model';
import {LoginResponseModel} from '../models/request_response_model';

export class UserRepository
  extends DefaultCrudRepository<User, typeof User.prototype.id>
  implements UserRepositoryInterface {
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

  async login(entity: LoginModel): Promise<LoginResponseModel> {
    return new LoginResponseModel();
  }
}
