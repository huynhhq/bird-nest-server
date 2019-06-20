import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class UserRole extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
    required: true,
  })
  roleId: string;


  constructor(data?: Partial<UserRole>) {
    super(data);
  }
}

export interface UserRoleRelations {
  // describe navigational properties here
}

export type UserRoleWithRelations = UserRole & UserRoleRelations;
