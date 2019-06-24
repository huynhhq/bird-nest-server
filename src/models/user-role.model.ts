import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Role} from './role.model';
import {User} from './user.model';

@model({settings: {}})
export class UserRole extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @belongsTo(() => User)
  userId: string;

  @belongsTo(() => Role)
  roleId: string;

  constructor(data?: Partial<UserRole>) {
    super(data);
  }
}

export interface UserRoleRelations {
  // describe navigational properties here
}

export type UserRoleWithRelations = UserRole & UserRoleRelations;
