import {Entity, model, property, hasMany} from '@loopback/repository';
import {Role, RoleRelations} from './role.model';
import {Permission} from './permission.model';

@model({settings: {}})
export class Function extends Entity {
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

  @hasMany(() => Role, {through: () => Permission})
  roles?: Role[];

  constructor(data?: Partial<Function>) {
    super(data);
  }
}

export interface FunctionRelations {
  roles?: RoleRelations[];
}

export type FunctionWithRelations = Function & FunctionRelations;
