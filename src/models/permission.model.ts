import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Role, RoleWithRelations} from './role.model';
import {Function, FunctionWithRelations} from './function.model';

@model({settings: {}})
export class Permission extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @belongsTo(() => Role)
  roleId: number;

  @belongsTo(() => Function)
  functionId: number;

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
  role?: RoleWithRelations;
  function?: FunctionWithRelations;
}

export type PermissionWithRelations = Permission & PermissionRelations;
