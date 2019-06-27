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
import {OrderDetail} from '../models';
import {OrderDetailRepository} from '../repositories';

export class OrderDetailController {
  constructor(
    @repository(OrderDetailRepository)
    public orderDetailRepository : OrderDetailRepository,
  ) {}

  @post('/order-details', {
    responses: {
      '200': {
        description: 'OrderDetail model instance',
        content: {'application/json': {schema: {'x-ts-type': OrderDetail}}},
      },
    },
  })
  async create(@requestBody() orderDetail: OrderDetail): Promise<OrderDetail> {
    return await this.orderDetailRepository.create(orderDetail);
  }

  @get('/order-details/count', {
    responses: {
      '200': {
        description: 'OrderDetail model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(OrderDetail)) where?: Where<OrderDetail>,
  ): Promise<Count> {
    return await this.orderDetailRepository.count(where);
  }

  @get('/order-details', {
    responses: {
      '200': {
        description: 'Array of OrderDetail model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': OrderDetail}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(OrderDetail)) filter?: Filter<OrderDetail>,
  ): Promise<OrderDetail[]> {
    return await this.orderDetailRepository.find(filter);
  }

  @patch('/order-details', {
    responses: {
      '200': {
        description: 'OrderDetail PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() orderDetail: OrderDetail,
    @param.query.object('where', getWhereSchemaFor(OrderDetail)) where?: Where<OrderDetail>,
  ): Promise<Count> {
    return await this.orderDetailRepository.updateAll(orderDetail, where);
  }

  @get('/order-details/{id}', {
    responses: {
      '200': {
        description: 'OrderDetail model instance',
        content: {'application/json': {schema: {'x-ts-type': OrderDetail}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<OrderDetail> {
    return await this.orderDetailRepository.findById(id);
  }

  @patch('/order-details/{id}', {
    responses: {
      '204': {
        description: 'OrderDetail PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() orderDetail: OrderDetail,
  ): Promise<void> {
    await this.orderDetailRepository.updateById(id, orderDetail);
  }

  @put('/order-details/{id}', {
    responses: {
      '204': {
        description: 'OrderDetail PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() orderDetail: OrderDetail,
  ): Promise<void> {
    await this.orderDetailRepository.replaceById(id, orderDetail);
  }

  @del('/order-details/{id}', {
    responses: {
      '204': {
        description: 'OrderDetail DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderDetailRepository.deleteById(id);
  }
}
