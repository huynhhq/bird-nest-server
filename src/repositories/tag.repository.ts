import {DefaultCrudRepository} from '@loopback/repository';
import {Tag} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TagRepository extends DefaultCrudRepository<
  Tag,
  typeof Tag.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Tag, dataSource);
  }
}
