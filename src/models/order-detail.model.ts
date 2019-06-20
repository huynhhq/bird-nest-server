import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class OrderDetail extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  orderId: number;

  @property({
    type: 'string',
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
