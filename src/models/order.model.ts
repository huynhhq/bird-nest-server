import {Entity, model, property, hasMany} from '@loopback/repository';
import {OrderDetail} from './order-detail.model';
import {Product} from './product.model';

@model({
  settings: {
    forceId: false,
  },
})
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  customerName: string;

  @property({
    type: 'string',
    required: true,
  })
  customerAddress: string;

  @property({
    type: 'string',
  })
  customerEmail?: string;

  @property({
    type: 'string',
  })
  customerMessage?: string;

  @property({
    type: 'string',
    required: true,
  })
  paymentMethod: string;

  @property({
    type: 'date',
  })
  createdDate: string;

  @property({
    type: 'boolean',
    required: true,
  })
  status: boolean;

  @hasMany(() => Product, {through: () => OrderDetail})
  products: Product[];

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
