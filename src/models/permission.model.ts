import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Permission extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  roleId: string;

  @property({
    type: 'string',
    required: true,
  })
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
