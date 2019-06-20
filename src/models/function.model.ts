import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<Function>) {
    super(data);
  }
}

export interface FunctionRelations {
  // describe navigational properties here
}

export type FunctionWithRelations = Function & FunctionRelations;
