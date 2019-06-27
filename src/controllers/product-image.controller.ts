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
import {ProductImage} from '../models';
import {ProductImageRepository} from '../repositories';

export class ProductImageController {
  constructor(
    @repository(ProductImageRepository)
    public productImageRepository : ProductImageRepository,
  ) {}

  @post('/product-images', {
    responses: {
      '200': {
        description: 'ProductImage model instance',
        content: {'application/json': {schema: {'x-ts-type': ProductImage}}},
      },
    },
  })
  async create(@requestBody() productImage: ProductImage): Promise<ProductImage> {
    return await this.productImageRepository.create(productImage);
  }

  @get('/product-images/count', {
    responses: {
      '200': {
        description: 'ProductImage model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ProductImage)) where?: Where<ProductImage>,
  ): Promise<Count> {
    return await this.productImageRepository.count(where);
  }

  @get('/product-images', {
    responses: {
      '200': {
        description: 'Array of ProductImage model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ProductImage}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ProductImage)) filter?: Filter<ProductImage>,
  ): Promise<ProductImage[]> {
    return await this.productImageRepository.find(filter);
  }

  @patch('/product-images', {
    responses: {
      '200': {
        description: 'ProductImage PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() productImage: ProductImage,
    @param.query.object('where', getWhereSchemaFor(ProductImage)) where?: Where<ProductImage>,
  ): Promise<Count> {
    return await this.productImageRepository.updateAll(productImage, where);
  }

  @get('/product-images/{id}', {
    responses: {
      '200': {
        description: 'ProductImage model instance',
        content: {'application/json': {schema: {'x-ts-type': ProductImage}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<ProductImage> {
    return await this.productImageRepository.findById(id);
  }

  @patch('/product-images/{id}', {
    responses: {
      '204': {
        description: 'ProductImage PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() productImage: ProductImage,
  ): Promise<void> {
    await this.productImageRepository.updateById(id, productImage);
  }

  @put('/product-images/{id}', {
    responses: {
      '204': {
        description: 'ProductImage PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productImage: ProductImage,
  ): Promise<void> {
    await this.productImageRepository.replaceById(id, productImage);
  }

  @del('/product-images/{id}', {
    responses: {
      '204': {
        description: 'ProductImage DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productImageRepository.deleteById(id);
  }
}
