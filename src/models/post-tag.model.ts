import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Tag} from './tag.model';
import {Post} from './post.model';

@model({settings: {}})
export class PostTag extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @belongsTo(() => Tag)
  tagId: number;

  @belongsTo(() => Post)
  postId: string;

  constructor(data?: Partial<PostTag>) {
    super(data);
  }
}

export interface PostTagRelations {
  // describe navigational properties here
}

export type PostTagWithRelations = PostTag & PostTagRelations;
