import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Tag, TagWithRelations} from './tag.model';
import {Product, ProductWithRelations} from './product.model';

@model({settings: {}})
export class ProductTag extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @belongsTo(() => Product)
  productId: number;

  @belongsTo(() => Tag)
  tagId: number;

  constructor(data?: Partial<ProductTag>) {
    super(data);
  }
}

export interface ProductTagRelations {
  product?: ProductWithRelations;
  tag?: TagWithRelations;
}

export type ProductTagWithRelations = ProductTag & ProductTagRelations;
