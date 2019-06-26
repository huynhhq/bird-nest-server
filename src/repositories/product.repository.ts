import {
  DefaultCrudRepository,
  HasManyThroughRepositoryFactory,
  repository,
} from '@loopback/repository';
import {
  Product,
  Order,
  OrderDetail,
  Tag,
  ProductTag,
  Size,
  ProductQuantity,
} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {
  OrderRepository,
  OrderDetailRepository,
  TagRepository,
  ProductTagRepository,
  SizeRepository,
  ProductQuantityRepository,
} from '.';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id
> {
  public readonly orders: HasManyThroughRepositoryFactory<
    Order,
    OrderDetail,
    typeof Order.prototype.id
  >;
  public readonly tags: HasManyThroughRepositoryFactory<
    Tag,
    ProductTag,
    typeof Product.prototype.id
  >;
  public readonly sizes: HasManyThroughRepositoryFactory<
    Size,
    ProductQuantity,
    typeof Product.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('OrderRepository')
    orderRepositoryGetter: Getter<OrderRepository>,
    @repository.getter('OrderDetailRepository')
    orderDetailRepositoryGetter: Getter<OrderDetailRepository>,
    @repository.getter('TagRepository')
    tagRepositoryGetter: Getter<TagRepository>,
    @repository.getter('ProductTagRepository')
    productTagRepositoryGetter: Getter<ProductTagRepository>,
    @repository.getter('SizeRepository')
    sizeRepositoryGettter: Getter<SizeRepository>,
    @repository.getter('ProductQuantityRepository')
    productQuantityRepositoryGetter: Getter<ProductQuantityRepository>,
  ) {
    super(Product, dataSource);
    this.orders = this.createHasManyThroughRepositoryFactoryFor(
      'products',
      orderRepositoryGetter,
      orderDetailRepositoryGetter,
    );
    this.tags = this.createHasManyThroughRepositoryFactoryFor(
      'tags',
      tagRepositoryGetter,
      productTagRepositoryGetter,
    );
    this.sizes = this.createHasManyThroughRepositoryFactoryFor(
      'sizes',
      sizeRepositoryGettter,
      productQuantityRepositoryGetter,
    );
  }
}
