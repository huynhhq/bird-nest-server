import {
  DefaultCrudRepository,
  HasManyThroughRepositoryFactory,
  repository,
} from '@loopback/repository';
import {Tag, Post, PostTag, Product, ProductTag} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {
  PostRepository,
  PostTagRepository,
  ProductTagRepository,
  ProductRepository,
} from '.';

export class TagRepository extends DefaultCrudRepository<
  Tag,
  typeof Tag.prototype.id
> {
  public readonly posts: HasManyThroughRepositoryFactory<
    Post,
    PostTag,
    typeof Tag.prototype.id
  >;
  public readonly products: HasManyThroughRepositoryFactory<
    Product,
    ProductTag,
    typeof Tag.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('PostRepository')
    postRepositoryGetter: Getter<PostRepository>,
    @repository.getter('PostTagRepository')
    postTagRepositoryGetter: Getter<PostTagRepository>,
    @repository.getter('ProductRepository')
    productRepositoryGetter: Getter<ProductRepository>,
    @repository.getter('ProductTagRepository')
    productTagRepositoryGetter: Getter<ProductTagRepository>,
  ) {
    super(Tag, dataSource);
    this.posts = this.createHasManyThroughRepositoryFactoryFor(
      'posts',
      postRepositoryGetter,
      postTagRepositoryGetter,
    );
    this.products = this.createHasManyThroughRepositoryFactoryFor(
      'products',
      productRepositoryGetter,
      productTagRepositoryGetter,
    );
  }
}
