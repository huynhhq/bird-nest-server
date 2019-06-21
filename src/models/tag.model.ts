import {Entity, model, property, hasMany} from '@loopback/repository';
import {Product} from './product.model';
import {ProductTag} from './product-tag.model';
import {Post} from './post.model';
import {PostTag} from './post-tag.model';

@model({settings: {}})
export class Tag extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @hasMany(() => Product, {through: () => ProductTag})
  products?: Product[];

  @hasMany(() => Post, {through: () => PostTag})
  posts?: Post[];

  constructor(data?: Partial<Tag>) {
    super(data);
  }
}

export interface TagRelations {
  // describe navigational properties here
}

export type TagWithRelations = Tag & TagRelations;
