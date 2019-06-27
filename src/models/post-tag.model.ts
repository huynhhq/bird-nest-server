import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Tag, TagWithRelations} from './tag.model';
import {Post, PostWithRelations} from './post.model';

@model({
  settings: {
    foreignKeys: {
      postTagTag: {
        name: 'tagPostId',
        foreignKey: 'tagId',
        entity: 'Tag',
        entityKey: 'id',
      },
      postTagPost: {
        name: 'postId',
        foreignKey: 'postId',
        entity: 'Post',
        entityKey: 'id',
      },
    },
    indexes: {
      postTagUnique: {
        keys: {
          tagId: 1,
          postId: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class PostTag extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @belongsTo(() => Tag)
  tagId: number;

  @belongsTo(() => Post)
  postId: number;

  constructor(data?: Partial<PostTag>) {
    super(data);
  }
}

export interface PostTagRelations {
  post?: PostWithRelations;
  tag?: TagWithRelations;
}

export type PostTagWithRelations = PostTag & PostTagRelations;
