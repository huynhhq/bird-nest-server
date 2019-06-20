import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class ProductQuantity extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  productId: string;

  @property({
    type: 'number',
    required: true,
  })
  sizeId: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  quantity: number;


  constructor(data?: Partial<ProductQuantity>) {
    super(data);
  }
}

export interface ProductQuantityRelations {
  // describe navigational properties here
}

export type ProductQuantityWithRelations = ProductQuantity & ProductQuantityRelations;
