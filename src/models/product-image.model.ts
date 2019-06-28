import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Product, ProductWithRelations} from './product.model';

@model({
  settings: {
    foreignKeys: {
      productImageProduct: {
        name: 'fkProductImage',
        foreignKey: 'productId',
        entity: 'Product',
        entityKey: 'id',
      },
    },
    indexes: {
      pathUnique: {
        keys: {
          path: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class ProductImage extends Entity {
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
  path: string;

  @belongsTo(() => Product)
  productId?: number;

  constructor(data?: Partial<ProductImage>) {
    super(data);
  }
}

export interface ProductImageRelations {
  product?: ProductWithRelations;
}

export type ProductImageWithRelations = ProductImage & ProductImageRelations;
