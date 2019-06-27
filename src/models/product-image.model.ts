import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Product, ProductWithRelations} from './product.model';

@model({settings: {}})
export class ProductImage extends Entity {
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
  path: string;

  @belongsTo(() => Product)
  productId?: number;

  constructor(data?: Partial<ProductImage>) {
    super(data);
  }
}

export interface ProductImageRelations {
  product?: ProductWithRelations;
}

export type ProductImageWithRelations = ProductImage & ProductImageRelations;
