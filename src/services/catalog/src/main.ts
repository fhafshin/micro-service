import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as process from 'node:process';
import { SwaggerConfigInit } from './config/swagger.config';
import { initMessages } from './messages';
import { Runner } from './module/runner';

import { run, run2 } from './module/child';
import createRedisClient from './cache';
import { AppClusterService } from './cluster';

async function bootstrap() {
  const cache = await createRedisClient();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true, // <- This line here
      },
    }),
  );
  SwaggerConfigInit(app);
  await app.listen(process.env.APP_PORT);
  // console.log(await cache.get('name'));
  //
  // await cache.set('name', "{ name: 'afshin', family: 'hesami' }", {
  //   EX: 60 * 22,
  // });
  //
  // console.log(await cache.get('name'));
  // initMessages();

  //const run = new Runner();
  //run.testSite();

  run();
  run2();
}
bootstrap();

//AppClusterService.clusterize(bootstrap);
