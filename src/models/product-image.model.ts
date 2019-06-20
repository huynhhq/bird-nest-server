import {Entity, model, property} from '@loopback/repository';

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

  @property({
    type: 'string',
  })
  productId?: string;


  constructor(data?: Partial<ProductImage>) {
    super(data);
  }
}

export interface ProductImageRelations {
  // describe navigational properties here
}

export type ProductImageWithRelations = ProductImage & ProductImageRelations;
