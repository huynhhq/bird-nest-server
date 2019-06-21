import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Product} from './product.model';

@model({settings: {}})
export class ProductImage extends Entity {
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
  path: string;

  @belongsTo(() => Product)
  productId?: string;

  constructor(data?: Partial<ProductImage>) {
    super(data);
  }
}

export interface ProductImageRelations {
  // describe navigational properties here
}

export type ProductImageWithRelations = ProductImage & ProductImageRelations;
