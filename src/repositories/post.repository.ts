import {
  DefaultCrudRepository,
  HasManyThroughRepositoryFactory,
  repository,
} from '@loopback/repository';
import {Post, Tag, PostTag} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {TagRepository, PostTagRepository} from '.';

export class PostRepository extends DefaultCrudRepository<
  Post,
  typeof Post.prototype.id
> {
  public readonly tags: HasManyThroughRepositoryFactory<
    Tag,
    PostTag,
    typeof Post.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('TagRepository')
    tagRepositoryGetter: Getter<TagRepository>,
    @repository.getter('PostTagRepository')
    postTagRepositoryGetter: Getter<PostTagRepository>,
  ) {
    super(Post, dataSource);
    this.tags = this.createHasManyThroughRepositoryFactoryFor(
      'tags',
      tagRepositoryGetter,
      postTagRepositoryGetter,
    );
  }
}
