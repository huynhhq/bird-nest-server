import {
  DefaultCrudRepository,
  BelongsToAccessor,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {PostCategory, Post} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {PostRepository} from './post.repository';

export class PostCategoryRepository extends DefaultCrudRepository<
  PostCategory,
  typeof PostCategory.prototype.id
> {
  public readonly parent: BelongsToAccessor<
    PostCategory,
    typeof PostCategory.prototype.id
  >;

  public readonly postCategories: HasManyRepositoryFactory<
    PostCategory,
    typeof PostCategory.prototype.id
  >;

  public readonly posts: HasManyRepositoryFactory<
    Post,
    typeof PostCategory.prototype.id
  >;

  //HuynhHQ note: DO NOT declare @repository.getter(PostCategoryRepository)
  //protected postCategoryRepositoryGetter: Getter<PostCategoryRepository>
  //on constructor to avoid “Circular dependency” error
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('PostRepository')
    postRepositoryGetter: Getter<PostRepository>,
  ) {
    super(PostCategory, dataSource);
    this.postCategories = this.createHasManyRepositoryFactoryFor(
      'postCategories',
      Getter.fromValue(this),
    );
    this.parent = this.createBelongsToAccessorFor(
      'parent',
      Getter.fromValue(this),
    );
    this.posts = this.createHasManyRepositoryFactoryFor(
      'posts',
      postRepositoryGetter,
    );
  }
}
