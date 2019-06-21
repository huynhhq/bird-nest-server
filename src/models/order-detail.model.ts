import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Product} from './product.model';
import {Order} from './order.model';
import {Size} from './size.model';

@model({settings: {}})
export class OrderDetail extends Entity {
  @belongsTo(() => Order)
  orderId: number;

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

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  price: number;

  constructor(data?: Partial<OrderDetail>) {
    super(data);
  }
}

export interface OrderDetailRelations {
  // describe navigational properties here
}

export type OrderDetailWithRelations = OrderDetail & OrderDetailRelations;
