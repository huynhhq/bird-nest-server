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
import {PostCategory} from '../models';
import {PostCategoryRepository} from '../repositories';

export class PostCategoryController {
  constructor(
    @repository(PostCategoryRepository)
    public postCategoryRepository : PostCategoryRepository,
  ) {}

  @post('/post-categories', {
    responses: {
      '200': {
        description: 'PostCategory model instance',
        content: {'application/json': {schema: {'x-ts-type': PostCategory}}},
      },
    },
  })
  async create(@requestBody() postCategory: PostCategory): Promise<PostCategory> {
    return await this.postCategoryRepository.create(postCategory);
  }

  @get('/post-categories/count', {
    responses: {
      '200': {
        description: 'PostCategory model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(PostCategory)) where?: Where<PostCategory>,
  ): Promise<Count> {
    return await this.postCategoryRepository.count(where);
  }

  @get('/post-categories', {
    responses: {
      '200': {
        description: 'Array of PostCategory model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': PostCategory}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(PostCategory)) filter?: Filter<PostCategory>,
  ): Promise<PostCategory[]> {
    return await this.postCategoryRepository.find(filter);
  }

  @patch('/post-categories', {
    responses: {
      '200': {
        description: 'PostCategory PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() postCategory: PostCategory,
    @param.query.object('where', getWhereSchemaFor(PostCategory)) where?: Where<PostCategory>,
  ): Promise<Count> {
    return await this.postCategoryRepository.updateAll(postCategory, where);
  }

  @get('/post-categories/{id}', {
    responses: {
      '200': {
        description: 'PostCategory model instance',
        content: {'application/json': {schema: {'x-ts-type': PostCategory}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<PostCategory> {
    return await this.postCategoryRepository.findById(id);
  }

  @patch('/post-categories/{id}', {
    responses: {
      '204': {
        description: 'PostCategory PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() postCategory: PostCategory,
  ): Promise<void> {
    await this.postCategoryRepository.updateById(id, postCategory);
  }

  @put('/post-categories/{id}', {
    responses: {
      '204': {
        description: 'PostCategory PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() postCategory: PostCategory,
  ): Promise<void> {
    await this.postCategoryRepository.replaceById(id, postCategory);
  }

  @del('/post-categories/{id}', {
    responses: {
      '204': {
        description: 'PostCategory DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.postCategoryRepository.deleteById(id);
  }
}
