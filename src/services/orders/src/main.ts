import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfigInit } from './config/swagger.config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerConfigInit(app);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true, // <- This line here
      },
    }),
  );
  await app.listen(process.env.APP_PORT);
}
bootstrap();
