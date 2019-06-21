import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Product} from './product.model';
import {Size} from './size.model';

@model({settings: {}})
export class ProductQuantity extends Entity {
  @belongsTo(() => Product)
  productId: string;

  @belongsTo(() => Size)
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

export type ProductQuantityWithRelations = ProductQuantity &
  ProductQuantityRelations;
