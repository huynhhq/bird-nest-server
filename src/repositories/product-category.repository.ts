import {
  DefaultCrudRepository,
  BelongsToAccessor,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {ProductCategory, Product} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ProductRepository} from './product.repository';

export class ProductCategoryRepository extends DefaultCrudRepository<
  ProductCategory,
  typeof ProductCategory.prototype.id
> {
  public readonly parent: BelongsToAccessor<
    ProductCategory,
    typeof ProductCategory.prototype.id
  >;

  public readonly productCategories: HasManyRepositoryFactory<
    ProductCategory,
    typeof ProductCategory.prototype.id
  >;

  public readonly products: HasManyRepositoryFactory<
    Product,
    typeof ProductCategory.prototype.id
  >;
  //HuynhHQ note: DO NOT declare @repository.getter(ProductCategoryRepository)
  //protected productCategoryRepositoryGetter: Getter<ProductCategoryRepository>
  //on constructor to avoid “Circular dependency” error

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('ProductRepository')
    productRepositoryGetter: Getter<ProductRepository>,
  ) {
    super(ProductCategory, dataSource);
    this.productCategories = this.createHasManyRepositoryFactoryFor(
      'productCategories',
      Getter.fromValue(this),
    );
    this.parent = this.createBelongsToAccessorFor(
      'parent',
      Getter.fromValue(this),
    );
    this.products = this.createHasManyRepositoryFactoryFor(
      'products',
      productRepositoryGetter,
    );
  }
}
