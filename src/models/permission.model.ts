import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Role, RoleWithRelations} from './role.model';
import {Functions, FunctionsWithRelations} from './functions.model';

@model({
  settings: {
    foreignKeys: {
      permissionRole: {
        name: 'roleFunctionsId',
        foreignKey: 'roleId',
        entity: 'Role',
        entityKey: 'id',
      },
      permissionFunctions: {
        name: 'functionsId',
        foreignKey: 'functionsId',
        entity: 'Functions',
        entityKey: 'id',
      },
    },
    indexes: {
      permissionUnique: {
        keys: {
          roleId: 1,
          functionsId: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class Permission extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    required: true,
  })
  id: number;

  @belongsTo(() => Role)
  roleId: number;

  @belongsTo(() => Functions)
  functionsId: number;

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
  function?: FunctionsWithRelations;
}

export type PermissionWithRelations = Permission & PermissionRelations;
