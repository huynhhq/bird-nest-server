import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ProductCategory} from '../models';
import {ProductCategoryRepository} from '../repositories';

export class ProductCategoryController {
  constructor(
    @repository(ProductCategoryRepository)
    public productCategoryRepository : ProductCategoryRepository,
  ) {}

  @post('/product-categories', {
    responses: {
      '200': {
        description: 'ProductCategory model instance',
        content: {'application/json': {schema: {'x-ts-type': ProductCategory}}},
      },
    },
  })
  async create(@requestBody() productCategory: ProductCategory): Promise<ProductCategory> {
    return await this.productCategoryRepository.create(productCategory);
  }

  @get('/product-categories/count', {
    responses: {
      '200': {
        description: 'ProductCategory model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ProductCategory)) where?: Where<ProductCategory>,
  ): Promise<Count> {
    return await this.productCategoryRepository.count(where);
  }

  @get('/product-categories', {
    responses: {
      '200': {
        description: 'Array of ProductCategory model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ProductCategory}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ProductCategory)) filter?: Filter<ProductCategory>,
  ): Promise<ProductCategory[]> {
    return await this.productCategoryRepository.find(filter);
  }

  @patch('/product-categories', {
    responses: {
      '200': {
        description: 'ProductCategory PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() productCategory: ProductCategory,
    @param.query.object('where', getWhereSchemaFor(ProductCategory)) where?: Where<ProductCategory>,
  ): Promise<Count> {
    return await this.productCategoryRepository.updateAll(productCategory, where);
  }

  @get('/product-categories/{id}', {
    responses: {
      '200': {
        description: 'ProductCategory model instance',
        content: {'application/json': {schema: {'x-ts-type': ProductCategory}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<ProductCategory> {
    return await this.productCategoryRepository.findById(id);
  }

  @patch('/product-categories/{id}', {
    responses: {
      '204': {
        description: 'ProductCategory PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() productCategory: ProductCategory,
  ): Promise<void> {
    await this.productCategoryRepository.updateById(id, productCategory);
  }

  @put('/product-categories/{id}', {
    responses: {
      '204': {
        description: 'ProductCategory PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productCategory: ProductCategory,
  ): Promise<void> {
    await this.productCategoryRepository.replaceById(id, productCategory);
  }

  @del('/product-categories/{id}', {
    responses: {
      '204': {
        description: 'ProductCategory DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productCategoryRepository.deleteById(id);
  }
}
