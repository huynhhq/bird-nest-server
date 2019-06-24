import {DefaultCrudRepository} from '@loopback/repository';
import {ProductImage, ProductImageRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductImageRepository extends DefaultCrudRepository<
  ProductImage,
  typeof ProductImage.prototype.id,
  ProductImageRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ProductImage, dataSource);
  }
}
