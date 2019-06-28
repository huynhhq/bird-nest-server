import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Product, ProductWithRelations} from './product.model';
import {Size, SizeWithRelations} from './size.model';

@model({
  settings: {
    foreignKeys: {
      productQuantityProduct: {
        name: 'productQuantityProductId',
        foreignKey: 'productId',
        entity: 'Product',
        entityKey: 'id',
      },
      productQuantitySize: {
        name: 'productQuantitySizeId',
        foreignKey: 'sizeId',
        entity: 'Size',
        entityKey: 'id',
      },
    },
    indexes: {
      productQuantityUnique: {
        keys: {
          productId: 1,
          sizeId: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class ProductQuantity extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
    generated: true,
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
