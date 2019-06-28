import {Entity, model, property, hasMany} from '@loopback/repository';
import {Role} from './role.model';
import {UserRole} from './user-role.model';

@model({settings: {}})
export class User extends Entity {
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
  })
  updatedDate?: string;

  @property({
    type: 'string',
  })
  updatedBy?: string;

  @property({
    type: 'boolean',
    required: true,
    default: true,
  })
  status: boolean;

  @hasMany(() => Role, {through: () => UserRole})
  roles: Role[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {}

export type UserWithRelations = User & UserRelations;
