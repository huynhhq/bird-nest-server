import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Product, ProductWithRelations} from './product.model';
import {Order, OrderWithRelations} from './order.model';
import {Size} from './size.model';

@model({
  settings: {
    foreignKeys: {
      orderDetailOrder: {
        name: 'orderDetailOrderId',
        foreignKey: 'orderId',
        entity: 'Order',
        entityKey: 'id',
      },
      orderDetailProduct: {
        name: 'orderDetailProductId',
        foreignKey: 'productId',
        entity: 'Product',
        entityKey: 'id',
      },
      orderDetailSize: {
        name: 'fkOrderDetailSize',
        foreignKey: 'sizeId',
        entity: 'Size',
        entityKey: 'id',
      },
    },
    indexes: {
      orderDetailUnique: {
        keys: {
          orderId: 1,
          productId: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class OrderDetail extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    required: true,
  })
  id: number;

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
