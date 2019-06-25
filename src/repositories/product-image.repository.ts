import {
  DefaultCrudRepository,
  BelongsToAccessor,
  repository,
} from '@loopback/repository';
import {ProductImage, Product} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ProductRepository} from './product.repository';

export class ProductImageRepository extends DefaultCrudRepository<
  ProductImage,
  typeof ProductImage.prototype.id
> {
  public readonly product: BelongsToAccessor<
    Product,
    typeof ProductImage.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('ProductRepository')
    productRepositoryGetter: Getter<ProductRepository>,
  ) {
    super(ProductImage, dataSource);
    this.product = this.createBelongsToAccessorFor(
      'product',
      productRepositoryGetter,
    );
  }
}
