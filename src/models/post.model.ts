import {
  Entity,
  model,
  property,
  belongsTo,
  hasMany,
} from '@loopback/repository';
import {PostCategory, PostCategoryWithRelations} from './post-category.model';
import {PostTag} from './post-tag.model';
import {Tag} from '.';

@model({
  settings: {
    foreignKeys: {
      postCategory: {
        name: 'fkPostCategory',
        foreignKey: 'postCategoryId',
        entity: 'PostCategory',
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
export class Post extends Entity {
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
  image?: string;

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
  createBy: string;

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

  @belongsTo(() => PostCategory)
  postCategoryId?: number;

  @hasMany(() => Tag, {through: () => PostTag})
  tags?: Tag[];

  constructor(data?: Partial<Post>) {
    super(data);
  }
}

export interface PostRelations {
  postCategory?: PostCategoryWithRelations;
}

export type PostWithRelations = Post & PostRelations;
