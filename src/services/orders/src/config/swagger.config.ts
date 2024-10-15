import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function SwaggerConfigInit(app: INestApplication) {
  const document = new DocumentBuilder()
    .setTitle('orders')
    .setDescription('micro service of orders')
    .setVersion('v1.0.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, document);
  SwaggerModule.setup('swagger', app, swaggerDocument);
}
