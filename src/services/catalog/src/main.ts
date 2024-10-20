import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as process from 'node:process';
import { SwaggerConfigInit } from './config/swagger.config';
import { initMessages } from './messages';

async function bootstrap() {
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
  initMessages();
}
bootstrap();
