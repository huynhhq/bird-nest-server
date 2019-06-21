import {Entity, model, property, hasMany} from '@loopback/repository';
import {User} from './user.model';
import {UserRole} from './user-role.model';
import {Permission} from './permission.model';
import {Function} from './function.model';

@model({settings: {}})
export class Role extends Entity {
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
  })
  description?: string;

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

  @hasMany(() => User, {through: () => UserRole})
  users?: User[];

  @hasMany(() => Function, {through: () => Permission})
  functions?: Function[];

  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;
