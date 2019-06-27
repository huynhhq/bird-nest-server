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
import {ProductTag} from '../models';
import {ProductTagRepository} from '../repositories';

export class ProductTagController {
  constructor(
    @repository(ProductTagRepository)
    public productTagRepository : ProductTagRepository,
  ) {}

  @post('/product-tags', {
    responses: {
      '200': {
        description: 'ProductTag model instance',
        content: {'application/json': {schema: {'x-ts-type': ProductTag}}},
      },
    },
  })
  async create(@requestBody() productTag: ProductTag): Promise<ProductTag> {
    return await this.productTagRepository.create(productTag);
  }

  @get('/product-tags/count', {
    responses: {
      '200': {
        description: 'ProductTag model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ProductTag)) where?: Where<ProductTag>,
  ): Promise<Count> {
    return await this.productTagRepository.count(where);
  }

  @get('/product-tags', {
    responses: {
      '200': {
        description: 'Array of ProductTag model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ProductTag}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ProductTag)) filter?: Filter<ProductTag>,
  ): Promise<ProductTag[]> {
    return await this.productTagRepository.find(filter);
  }

  @patch('/product-tags', {
    responses: {
      '200': {
        description: 'ProductTag PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() productTag: ProductTag,
    @param.query.object('where', getWhereSchemaFor(ProductTag)) where?: Where<ProductTag>,
  ): Promise<Count> {
    return await this.productTagRepository.updateAll(productTag, where);
  }

  @get('/product-tags/{id}', {
    responses: {
      '200': {
        description: 'ProductTag model instance',
        content: {'application/json': {schema: {'x-ts-type': ProductTag}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<ProductTag> {
    return await this.productTagRepository.findById(id);
  }

  @patch('/product-tags/{id}', {
    responses: {
      '204': {
        description: 'ProductTag PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() productTag: ProductTag,
  ): Promise<void> {
    await this.productTagRepository.updateById(id, productTag);
  }

  @put('/product-tags/{id}', {
    responses: {
      '204': {
        description: 'ProductTag PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productTag: ProductTag,
  ): Promise<void> {
    await this.productTagRepository.replaceById(id, productTag);
  }

  @del('/product-tags/{id}', {
    responses: {
      '204': {
        description: 'ProductTag DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productTagRepository.deleteById(id);
  }
}
