import {BirdNestServerApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import * as path from 'path';
export {BirdNestServerApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new BirdNestServerApplication(options);
  await app.boot();
  await app.start();
  app.static('/assets', path.join(__dirname, 'assets'));
  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
