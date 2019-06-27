import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Product, ProductWithRelations} from './product.model';
import {Size, SizeWithRelations} from './size.model';

@model({settings: {}})
export class ProductQuantity extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @belongsTo(() => Product)
  productId: number;

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
  product: ProductWithRelations;
  size: SizeWithRelations;
}

export type ProductQuantityWithRelations = ProductQuantity &
  ProductQuantityRelations;
