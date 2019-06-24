import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Role} from './role.model';
import {Function} from './function.model';

@model({settings: {}})
export class Permission extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @belongsTo(() => Role)
  roleId: string;

  @belongsTo(() => Function)
  functionId: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  canRead: boolean;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  canCreate: boolean;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  canUpdate: boolean;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  canDelete: boolean;

  constructor(data?: Partial<Permission>) {
    super(data);
  }
}

export interface PermissionRelations {
  // describe navigational properties here
}

export type PermissionWithRelations = Permission & PermissionRelations;
