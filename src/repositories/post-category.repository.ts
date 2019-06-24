import {DefaultCrudRepository} from '@loopback/repository';
import {PostCategory} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PostCategoryRepository extends DefaultCrudRepository<
  PostCategory,
  typeof PostCategory.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(PostCategory, dataSource);
  }
}
