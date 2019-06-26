import {
  DefaultCrudRepository,
  HasManyThroughRepositoryFactory,
  repository,
} from '@loopback/repository';
import {Size, Product, ProductQuantity} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ProductRepository, ProductQuantityRepository} from '.';

export class SizeRepository extends DefaultCrudRepository<
  Size,
  typeof Size.prototype.id
> {
  public readonly products: HasManyThroughRepositoryFactory<
    Product,
    ProductQuantity,
    typeof Size.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('ProductRepository')
    sizeRepositoryGettter: Getter<ProductRepository>,
    @repository.getter('ProductQuantityRepository')
    productQuantityRepositoryGetter: Getter<ProductQuantityRepository>,
  ) {
    super(Size, dataSource);
    this.products = this.createHasManyThroughRepositoryFactoryFor(
      'products',
      sizeRepositoryGettter,
      productQuantityRepositoryGetter,
    );
  }
}
