import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Tag} from './tag.model';
import {Product} from './product.model';

@model({settings: {}})
export class ProductTag extends Entity {
  @belongsTo(() => Product)
  productId: string;

  @belongsTo(() => Tag)
  tagId: string;

  constructor(data?: Partial<ProductTag>) {
    super(data);
  }
}

export interface ProductTagRelations {
  // describe navigational properties here
}

export type ProductTagWithRelations = ProductTag & ProductTagRelations;
