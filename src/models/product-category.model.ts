import {
  Entity,
  model,
  property,
  hasMany,
  belongsTo,
} from '@loopback/repository';
import {Product} from './product.model';

@model({settings: {}})
export class ProductCategory extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

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
  description?: string;

  @belongsTo(() => ProductCategory)
  parentId?: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  displayOrder: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  homeOrder: number;

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

  @hasMany(() => Product, {keyTo: 'productCategoryId'})
  products?: Product[];

  @hasMany(() => ProductCategory, {keyTo: 'parentId'})
  productCategories: ProductCategory[];

  constructor(data?: Partial<ProductCategory>) {
    super(data);
  }
}

export interface ProductCategoryRelations {
  // describe navigational properties here
}

export type ProductCategoryWithRelations = ProductCategory &
  ProductCategoryRelations;
