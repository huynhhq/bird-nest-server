import {
  Entity,
  model,
  property,
  hasMany,
  belongsTo,
} from '@loopback/repository';
import {Tag} from './tag.model';
import {ProductTag} from './product-tag.model';
import {
  ProductCategory,
  ProductCategoryWithRelations,
} from './product-category.model';
import {ProductImage} from './product-image.model';
import {ProductQuantity} from './product-quantity.model';
import {OrderDetail} from './order-detail.model';
import {Order} from './order.model';
import {Size} from './size.model';

@model({
  settings: {
    foreignKeys: {
      productCategory: {
        name: 'fkProductCategory',
        foreignKey: 'productCategoryId',
        entity: 'ProductCategory',
        entityKey: 'id',
      },
    },
    indexes: {
      nameAliasUnique: {
        keys: {
          name: 1,
          alias: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 36,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    length: 36,
  })
  alias: string;

  @property({
    type: 'string',
  })
  thumbnailImage?: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  originalPrice: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  promotionPrice: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
  })
  content: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  viewCount: number;

  @property({
    type: 'date',
    required: true,
  })
  createdDate: string;

  @property({
    type: 'string',
    required: true,
  })
  createdBy: string;

  @property({
    type: 'date',
  })
  updatedDate?: string;

  @property({
    type: 'string',
  })
  updatedBy?: string;

  @property({
    type: 'string',
  })
  metaKeyword?: string;

  @property({
    type: 'string',
  })
  metaDescription?: string;

  @property({
    type: 'boolean',
    required: true,
    default: true,
  })
  status: boolean;

  @belongsTo(() => ProductCategory)
  productCategoryId?: number;

  @hasMany(() => ProductImage, {keyTo: 'productId'})
  productImages?: ProductImage[];

  @hasMany(() => Tag, {through: () => ProductTag})
  tags?: Tag[];

  @hasMany(() => Size, {through: () => ProductQuantity})
  sizes?: Size[];

  @hasMany(() => Order, {through: () => OrderDetail})
  orders?: Order[];

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  productCategory?: ProductCategoryWithRelations;
}

export type ProductWithRelations = Product & ProductRelations;
