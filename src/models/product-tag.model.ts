import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Tag, TagWithRelations} from './tag.model';
import {Product, ProductWithRelations} from './product.model';

@model({
  settings: {
    forceId: false,
    foreignKeys: {
      productTagTag: {
        name: 'tagProductId',
        foreignKey: 'tagId',
        entity: 'Tag',
        entityKey: 'id',
      },
      productTagProduct: {
        name: 'productId',
        foreignKey: 'productId',
        entity: 'Product',
        entityKey: 'id',
      },
    },
    indexes: {
      productTagUnique: {
        keys: {
          tagId: 1,
          productId: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class ProductTag extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
    generated: true,
  })
  id: number;

  @belongsTo(() => Product)
  productId: number;

  @belongsTo(() => Tag)
  tagId: number;

  constructor(data?: Partial<ProductTag>) {
    super(data);
  }
}

export interface ProductTagRelations {
  product?: ProductWithRelations;
  tag?: TagWithRelations;
}

export type ProductTagWithRelations = ProductTag & ProductTagRelations;
