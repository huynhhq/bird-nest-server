import {DefaultCrudRepository} from '@loopback/repository';
import {Size} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SizeRepository extends DefaultCrudRepository<
  Size,
  typeof Size.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Size, dataSource);
  }
}
