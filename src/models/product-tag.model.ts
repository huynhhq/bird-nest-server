import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class ProductTag extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  productId: string;

  @property({
    type: 'string',
    required: true,
  })
  tagId: string;


  constructor(data?: Partial<ProductTag>) {
    super(data);
  }
}

export interface ProductTagRelations {
  // describe navigational properties here
}

export type ProductTagWithRelations = ProductTag & ProductTagRelations;
