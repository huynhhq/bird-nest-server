import {
  Entity,
  model,
  property,
  hasMany,
  belongsTo,
} from '@loopback/repository';
import {Tag} from './tag.model';
import {ProductTag} from './product-tag.model';
import {ProductCategory} from './product-category.model';
import {ProductImage} from './product-image.model';
import {ProductQuantity} from './product-quantity.model';
import {OrderDetail} from './order-detail.model';

@model({settings: {}})
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
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
  productCategoryId?: string;

  @hasMany(() => Tag, {through: () => ProductTag})
  tags?: Tag[];

  @hasMany(() => ProductImage, {keyTo: 'productId'})
  productImages?: ProductImage[];

  @hasMany(() => ProductQuantity, {keyTo: 'productId'})
  productQuantites?: ProductQuantity[];

  @hasMany(() => OrderDetail, {keyTo: 'productId'})
  orderDetails?: OrderDetail[];

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
