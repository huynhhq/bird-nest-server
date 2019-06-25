import {
  Entity,
  model,
  property,
  hasMany,
  belongsTo,
} from '@loopback/repository';
import {Post} from './post.model';

@model({settings: {}})
export class PostCategory extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  alias: string;

  @property({
    type: 'string',
  })
  description?: string;

  @belongsTo(() => PostCategory)
  parentId?: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  displayOrder: number;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'string',
    required: true,
  })
  content: string;

  @property({
    type: 'date',
    required: true,
  })
  createdDate: string;

  @property({
    type: 'string',
    required: true,
  })
  createdBy: string;

  @property({
    type: 'date',
  })
  updatedDate?: string;

  @property({
    type: 'string',
  })
  updatedBy?: string;

  @property({
    type: 'string',
  })
  metaKeyword?: string;

  @property({
    type: 'string',
  })
  metaDescription?: string;

  @property({
    type: 'boolean',
    required: true,
    default: true,
  })
  status: boolean;

  @hasMany(() => Post, {keyTo: 'postCategoryId'})
  posts?: Post[];

  @hasMany(() => PostCategory, {keyTo: 'parentId'})
  postCategories?: PostCategory[];

  constructor(data?: Partial<PostCategory>) {
    super(data);
  }
}

export interface PostCategoryRelations {
  // describe navigational properties here
}

export type PostCategoryWithRelations = PostCategory & PostCategoryRelations;
