import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Tag, TagWithRelations} from './tag.model';
import {Post, PostWithRelations} from './post.model';

@model({settings: {}})
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
