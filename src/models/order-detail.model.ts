import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Product, ProductWithRelations} from './product.model';
import {Order, OrderWithRelations} from './order.model';
import {Size} from './size.model';

@model({settings: {}})
export class OrderDetail extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: string;

  @belongsTo(() => Order)
  orderId: number;

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
  order?: OrderWithRelations;
  product?: ProductWithRelations;
}

export type OrderDetailWithRelations = OrderDetail & OrderDetailRelations;
