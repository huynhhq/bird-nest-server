import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {config} from './db.config.datasource';

export class DbDataSource extends juggler.DataSource {
  static dataSourceName = 'db';

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
