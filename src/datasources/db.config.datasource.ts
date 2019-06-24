import {ConfigApp} from '../../config/config';
export let config = {
  name: 'db',
  connector: 'mysql',
  url: '',
  host: ConfigApp.mysqlHost,
  port: ConfigApp.mysqlPort,
  user: ConfigApp.mysqlUser,
  password: ConfigApp.mysqlPassword,
  database: ConfigApp.mysqlDatabase,
};
