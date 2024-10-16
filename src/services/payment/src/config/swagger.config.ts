import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function SwaggerConfigInit(app: INestApplication) {
  const document = new DocumentBuilder()
    .setVersion('v1.0.0')
    .setTitle('payment')
    .setDescription('micro service of payment')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, document);
  SwaggerModule.setup('swagger', app, swaggerDocument);
}