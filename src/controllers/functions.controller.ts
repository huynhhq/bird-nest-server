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
import {Functions} from '../models';
import {FunctionsRepository} from '../repositories';

export class FunctionsController {
  constructor(
    @repository(FunctionsRepository)
    public functionsRepository : FunctionsRepository,
  ) {}

  @post('/functions', {
    responses: {
      '200': {
        description: 'Functions model instance',
        content: {'application/json': {schema: {'x-ts-type': Functions}}},
      },
    },
  })
  async create(@requestBody() functions: Functions): Promise<Functions> {
    return await this.functionsRepository.create(functions);
  }

  @get('/functions/count', {
    responses: {
      '200': {
        description: 'Functions model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Functions)) where?: Where<Functions>,
  ): Promise<Count> {
    return await this.functionsRepository.count(where);
  }

  @get('/functions', {
    responses: {
      '200': {
        description: 'Array of Functions model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Functions}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Functions)) filter?: Filter<Functions>,
  ): Promise<Functions[]> {
    return await this.functionsRepository.find(filter);
  }

  @patch('/functions', {
    responses: {
      '200': {
        description: 'Functions PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() functions: Functions,
    @param.query.object('where', getWhereSchemaFor(Functions)) where?: Where<Functions>,
  ): Promise<Count> {
    return await this.functionsRepository.updateAll(functions, where);
  }

  @get('/functions/{id}', {
    responses: {
      '200': {
        description: 'Functions model instance',
        content: {'application/json': {schema: {'x-ts-type': Functions}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Functions> {
    return await this.functionsRepository.findById(id);
  }

  @patch('/functions/{id}', {
    responses: {
      '204': {
        description: 'Functions PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() functions: Functions,
  ): Promise<void> {
    await this.functionsRepository.updateById(id, functions);
  }

  @put('/functions/{id}', {
    responses: {
      '204': {
        description: 'Functions PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() functions: Functions,
  ): Promise<void> {
    await this.functionsRepository.replaceById(id, functions);
  }

  @del('/functions/{id}', {
    responses: {
      '204': {
        description: 'Functions DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.functionsRepository.deleteById(id);
  }
}
