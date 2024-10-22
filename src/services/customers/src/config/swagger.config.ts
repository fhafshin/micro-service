import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function SwaggerConfigInit(app: INestApplication) {
  const document = new DocumentBuilder()
    .setTitle('customers')
    .setDescription('micro service of customers')
    .setVersion('v1.0.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, document);

  SwaggerModule.setup('/swagger', app, swaggerDocument);
}
