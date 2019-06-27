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
import {Permission} from '../models';
import {PermissionRepository} from '../repositories';

export class PermissionController {
  constructor(
    @repository(PermissionRepository)
    public permissionRepository : PermissionRepository,
  ) {}

  @post('/permissions', {
    responses: {
      '200': {
        description: 'Permission model instance',
        content: {'application/json': {schema: {'x-ts-type': Permission}}},
      },
    },
  })
  async create(@requestBody() permission: Permission): Promise<Permission> {
    return await this.permissionRepository.create(permission);
  }

  @get('/permissions/count', {
    responses: {
      '200': {
        description: 'Permission model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Permission)) where?: Where<Permission>,
  ): Promise<Count> {
    return await this.permissionRepository.count(where);
  }

  @get('/permissions', {
    responses: {
      '200': {
        description: 'Array of Permission model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Permission}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Permission)) filter?: Filter<Permission>,
  ): Promise<Permission[]> {
    return await this.permissionRepository.find(filter);
  }

  @patch('/permissions', {
    responses: {
      '200': {
        description: 'Permission PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() permission: Permission,
    @param.query.object('where', getWhereSchemaFor(Permission)) where?: Where<Permission>,
  ): Promise<Count> {
    return await this.permissionRepository.updateAll(permission, where);
  }

  @get('/permissions/{id}', {
    responses: {
      '200': {
        description: 'Permission model instance',
        content: {'application/json': {schema: {'x-ts-type': Permission}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Permission> {
    return await this.permissionRepository.findById(id);
  }

  @patch('/permissions/{id}', {
    responses: {
      '204': {
        description: 'Permission PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() permission: Permission,
  ): Promise<void> {
    await this.permissionRepository.updateById(id, permission);
  }

  @put('/permissions/{id}', {
    responses: {
      '204': {
        description: 'Permission PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() permission: Permission,
  ): Promise<void> {
    await this.permissionRepository.replaceById(id, permission);
  }

  @del('/permissions/{id}', {
    responses: {
      '204': {
        description: 'Permission DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.permissionRepository.deleteById(id);
  }
}
