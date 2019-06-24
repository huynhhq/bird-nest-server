import {DefaultCrudRepository} from '@loopback/repository';
import {PostCategory, PostCategoryRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PostCategoryRepository extends DefaultCrudRepository<
  PostCategory,
  typeof PostCategory.prototype.id,
  PostCategoryRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(PostCategory, dataSource);
  }
}
