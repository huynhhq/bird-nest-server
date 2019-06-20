import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class PostTag extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  tagId: number;

  @property({
    type: 'string',
    required: true,
  })
  postId: string;


  constructor(data?: Partial<PostTag>) {
    super(data);
  }
}

export interface PostTagRelations {
  // describe navigational properties here
}

export type PostTagWithRelations = PostTag & PostTagRelations;
