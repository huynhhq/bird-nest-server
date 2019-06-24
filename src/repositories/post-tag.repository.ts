import {DefaultCrudRepository} from '@loopback/repository';
import {PostTag} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PostTagRepository extends DefaultCrudRepository<
  PostTag,
  typeof PostTag.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(PostTag, dataSource);
  }
}
