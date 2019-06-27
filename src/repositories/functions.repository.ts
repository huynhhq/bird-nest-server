import {DefaultCrudRepository} from '@loopback/repository';
import {Functions} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FunctionsRepository extends DefaultCrudRepository<
  Functions,
  typeof Functions.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Functions, dataSource);
  }
}
