import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Role, RoleWithRelations} from './role.model';
import {User, UserWithRelations} from './user.model';

@model({
  settings: {
    forceId: false,
    foreignKeys: {
      userRoleUser: {
        name: 'userId',
        foreignKey: 'userId',
        entity: 'User',
        entityKey: 'id',
      },
      userRoleRole: {
        name: 'roleId',
        foreignKey: 'roleId',
        entity: 'Role',
        entityKey: 'id',
      },
    },
    indexes: {
      userRoleIdUnique: {
        keys: {
          userId: 1,
          roleId: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class UserRole extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
    generated: true,
  })
  id: number;

  @belongsTo(() => User)
  userId: number;

  @belongsTo(() => Role)
  roleId: number;

  constructor(data?: Partial<UserRole>) {
    super(data);
  }
}

export interface UserRoleRelations {
  user: UserWithRelations;
  role: RoleWithRelations;
}

export type UserRoleWithRelations = UserRole & UserRoleRelations;
