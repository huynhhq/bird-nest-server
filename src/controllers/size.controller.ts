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
import {Size} from '../models';
import {SizeRepository} from '../repositories';

export class SizeController {
  constructor(
    @repository(SizeRepository)
    public sizeRepository : SizeRepository,
  ) {}

  @post('/sizes', {
    responses: {
      '200': {
        description: 'Size model instance',
        content: {'application/json': {schema: {'x-ts-type': Size}}},
      },
    },
  })
  async create(@requestBody() size: Size): Promise<Size> {
    return await this.sizeRepository.create(size);
  }

  @get('/sizes/count', {
    responses: {
      '200': {
        description: 'Size model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Size)) where?: Where<Size>,
  ): Promise<Count> {
    return await this.sizeRepository.count(where);
  }

  @get('/sizes', {
    responses: {
      '200': {
        description: 'Array of Size model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Size}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Size)) filter?: Filter<Size>,
  ): Promise<Size[]> {
    return await this.sizeRepository.find(filter);
  }

  @patch('/sizes', {
    responses: {
      '200': {
        description: 'Size PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() size: Size,
    @param.query.object('where', getWhereSchemaFor(Size)) where?: Where<Size>,
  ): Promise<Count> {
    return await this.sizeRepository.updateAll(size, where);
  }

  @get('/sizes/{id}', {
    responses: {
      '200': {
        description: 'Size model instance',
        content: {'application/json': {schema: {'x-ts-type': Size}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Size> {
    return await this.sizeRepository.findById(id);
  }

  @patch('/sizes/{id}', {
    responses: {
      '204': {
        description: 'Size PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() size: Size,
  ): Promise<void> {
    await this.sizeRepository.updateById(id, size);
  }

  @put('/sizes/{id}', {
    responses: {
      '204': {
        description: 'Size PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() size: Size,
  ): Promise<void> {
    await this.sizeRepository.replaceById(id, size);
  }

  @del('/sizes/{id}', {
    responses: {
      '204': {
        description: 'Size DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sizeRepository.deleteById(id);
  }
}
