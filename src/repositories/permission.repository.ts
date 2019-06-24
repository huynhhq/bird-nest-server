import {DefaultCrudRepository} from '@loopback/repository';
import {Permission} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PermissionRepository extends DefaultCrudRepository<
  Permission,
  typeof Permission.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Permission, dataSource);
  }
}
