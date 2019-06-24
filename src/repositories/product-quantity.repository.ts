import {DefaultCrudRepository} from '@loopback/repository';
import {ProductQuantity, ProductQuantityRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductQuantityRepository extends DefaultCrudRepository<
  ProductQuantity,
  typeof ProductQuantity.prototype.id,
  ProductQuantityRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ProductQuantity, dataSource);
  }
}
