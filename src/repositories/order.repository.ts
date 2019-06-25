import {
  DefaultCrudRepository,
  HasManyThroughRepositoryFactory,
  repository,
} from '@loopback/repository';
import {Order, Product, OrderDetail} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ProductRepository, OrderDetailRepository} from '.';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id
> {
  public readonly products: HasManyThroughRepositoryFactory<
    Product,
    OrderDetail,
    typeof Order.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('ProductRepository')
    productRepositoryGetter: Getter<ProductRepository>,
    @repository.getter('OrderDetailRepository')
    orderDetailRepositoryGetter: Getter<OrderDetailRepository>,
  ) {
    super(Order, dataSource);
    this.products = this.createHasManyThroughRepositoryFactoryFor(
      'products',
      productRepositoryGetter,
      orderDetailRepositoryGetter,
    );
  }
}
