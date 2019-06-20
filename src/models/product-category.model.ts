import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class ProductCategory extends Entity {
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
  description?: string;

  @property({
    type: 'string',
  })
  parentId?: string;

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


  constructor(data?: Partial<ProductCategory>) {
    super(data);
  }
}

export interface ProductCategoryRelations {
  // describe navigational properties here
}

export type ProductCategoryWithRelations = ProductCategory & ProductCategoryRelations;
