import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class User extends Entity {
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
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
  })
  avatar?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  emailConfirmed: boolean;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  phoneConfirmed: boolean;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  accessFailedCount: number;

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
    required: false,
  })
  updatedDate?: string;

  @property({
    type: 'string',
    required: false,
  })
  updatedBy?: string;

  @property({
    type: 'boolean',
    required: true,
    default: true,
  })
  status: boolean;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
