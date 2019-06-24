const {env} = process;

export let ConfigApp = {
  env: env.NODE_ENV,
  jwtKey: env.JWT_KEY,
  mysqlHost: env.MYSQL_HOST || 'localhost',
  mysqlPort: env.MYSQL_PORT || 3306,
  mysqlDatabase: env.MYSQL_DATABASE || 'birdnestdb',
  mysqlUser: env.MYSQL_USER,
  mysqlPassword: env.MYSQL_PASSWORD,
  redisHost: env.REDIS_HOST || 'localhost',
  redisPort: env.REDIS_PORT || 6379,
  defaultLanguageCode: env.DEFAULT_LANGUAGE_CODE || 'vi',
  nanoIdLength: parseInt(env.NANOID_LENGTH || '16', 10),
  networkTimeout: parseInt(env.NETWORK_TIMEOUT || '15000', 10),
  minAccountPasswordLength: parseInt(
    env.MIN_ACCOUNT_PASSWORD_LENGTH || '6',
    10,
  ),
  emailService: process.env.EMAIL_SERVICE,
  emailAccount: process.env.EMAIL_ACCOUNT,
  emailPassword: process.env.EMAIL_PASSWORD,
  frontendHost: process.env.FRONTEND_HOST,
  frontendPort: process.env.FRONTEND_PORT,
  expirationTimeResetPassword: parseInt(
    process.env.EXPIRATION_TIME_RESET_PASSWORD || '5',
    10,
  ),
};
