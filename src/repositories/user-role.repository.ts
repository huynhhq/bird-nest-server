import {DefaultCrudRepository} from '@loopback/repository';
import {UserRole} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRoleRepository extends DefaultCrudRepository<
  UserRole,
  typeof UserRole.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(UserRole, dataSource);
  }
}
