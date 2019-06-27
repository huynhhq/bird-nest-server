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
import {ProductQuantity} from '../models';
import {ProductQuantityRepository} from '../repositories';

export class ProductQuantityController {
  constructor(
    @repository(ProductQuantityRepository)
    public productQuantityRepository : ProductQuantityRepository,
  ) {}

  @post('/product-quantities', {
    responses: {
      '200': {
        description: 'ProductQuantity model instance',
        content: {'application/json': {schema: {'x-ts-type': ProductQuantity}}},
      },
    },
  })
  async create(@requestBody() productQuantity: ProductQuantity): Promise<ProductQuantity> {
    return await this.productQuantityRepository.create(productQuantity);
  }

  @get('/product-quantities/count', {
    responses: {
      '200': {
        description: 'ProductQuantity model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ProductQuantity)) where?: Where<ProductQuantity>,
  ): Promise<Count> {
    return await this.productQuantityRepository.count(where);
  }

  @get('/product-quantities', {
    responses: {
      '200': {
        description: 'Array of ProductQuantity model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ProductQuantity}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ProductQuantity)) filter?: Filter<ProductQuantity>,
  ): Promise<ProductQuantity[]> {
    return await this.productQuantityRepository.find(filter);
  }

  @patch('/product-quantities', {
    responses: {
      '200': {
        description: 'ProductQuantity PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() productQuantity: ProductQuantity,
    @param.query.object('where', getWhereSchemaFor(ProductQuantity)) where?: Where<ProductQuantity>,
  ): Promise<Count> {
    return await this.productQuantityRepository.updateAll(productQuantity, where);
  }

  @get('/product-quantities/{id}', {
    responses: {
      '200': {
        description: 'ProductQuantity model instance',
        content: {'application/json': {schema: {'x-ts-type': ProductQuantity}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<ProductQuantity> {
    return await this.productQuantityRepository.findById(id);
  }

  @patch('/product-quantities/{id}', {
    responses: {
      '204': {
        description: 'ProductQuantity PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() productQuantity: ProductQuantity,
  ): Promise<void> {
    await this.productQuantityRepository.updateById(id, productQuantity);
  }

  @put('/product-quantities/{id}', {
    responses: {
      '204': {
        description: 'ProductQuantity PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productQuantity: ProductQuantity,
  ): Promise<void> {
    await this.productQuantityRepository.replaceById(id, productQuantity);
  }

  @del('/product-quantities/{id}', {
    responses: {
      '204': {
        description: 'ProductQuantity DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productQuantityRepository.deleteById(id);
  }
}
