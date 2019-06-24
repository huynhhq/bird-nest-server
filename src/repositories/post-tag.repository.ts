import {DefaultCrudRepository} from '@loopback/repository';
import {PostTag, PostTagRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PostTagRepository extends DefaultCrudRepository<
  PostTag,
  typeof PostTag.prototype.id,
  PostTagRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(PostTag, dataSource);
  }
}
