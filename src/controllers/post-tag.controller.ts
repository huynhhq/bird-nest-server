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
import {PostTag} from '../models';
import {PostTagRepository} from '../repositories';

export class PostTagController {
  constructor(
    @repository(PostTagRepository)
    public postTagRepository : PostTagRepository,
  ) {}

  @post('/post-tags', {
    responses: {
      '200': {
        description: 'PostTag model instance',
        content: {'application/json': {schema: {'x-ts-type': PostTag}}},
      },
    },
  })
  async create(@requestBody() postTag: PostTag): Promise<PostTag> {
    return await this.postTagRepository.create(postTag);
  }

  @get('/post-tags/count', {
    responses: {
      '200': {
        description: 'PostTag model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(PostTag)) where?: Where<PostTag>,
  ): Promise<Count> {
    return await this.postTagRepository.count(where);
  }

  @get('/post-tags', {
    responses: {
      '200': {
        description: 'Array of PostTag model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': PostTag}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(PostTag)) filter?: Filter<PostTag>,
  ): Promise<PostTag[]> {
    return await this.postTagRepository.find(filter);
  }

  @patch('/post-tags', {
    responses: {
      '200': {
        description: 'PostTag PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() postTag: PostTag,
    @param.query.object('where', getWhereSchemaFor(PostTag)) where?: Where<PostTag>,
  ): Promise<Count> {
    return await this.postTagRepository.updateAll(postTag, where);
  }

  @get('/post-tags/{id}', {
    responses: {
      '200': {
        description: 'PostTag model instance',
        content: {'application/json': {schema: {'x-ts-type': PostTag}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<PostTag> {
    return await this.postTagRepository.findById(id);
  }

  @patch('/post-tags/{id}', {
    responses: {
      '204': {
        description: 'PostTag PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() postTag: PostTag,
  ): Promise<void> {
    await this.postTagRepository.updateById(id, postTag);
  }

  @put('/post-tags/{id}', {
    responses: {
      '204': {
        description: 'PostTag PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() postTag: PostTag,
  ): Promise<void> {
    await this.postTagRepository.replaceById(id, postTag);
  }

  @del('/post-tags/{id}', {
    responses: {
      '204': {
        description: 'PostTag DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.postTagRepository.deleteById(id);
  }
}
