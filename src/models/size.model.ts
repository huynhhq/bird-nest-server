import {Entity, model, property, hasMany} from '@loopback/repository';
import {Product} from './product.model';
import {ProductQuantity} from './product-quantity.model';

@model({settings: {}})
export class Size extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @hasMany(() => Product, {through: () => ProductQuantity})
  products: Product[];

  constructor(data?: Partial<Size>) {
    super(data);
  }
}

export interface SizeRelations {
  // describe navigational properties here
}

export type SizeWithRelations = Size & SizeRelations;
