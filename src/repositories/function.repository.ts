import {DefaultCrudRepository} from '@loopback/repository';
import {Function, FunctionRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FunctionRepository extends DefaultCrudRepository<
  Function,
  typeof Function.prototype.id,
  FunctionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Function, dataSource);
  }
}
