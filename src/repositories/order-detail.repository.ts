import {DefaultCrudRepository} from '@loopback/repository';
import {OrderDetail, OrderDetailRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrderDetailRepository extends DefaultCrudRepository<
  OrderDetail,
  typeof OrderDetail.prototype.id,
  OrderDetailRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(OrderDetail, dataSource);
  }
}
