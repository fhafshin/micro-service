"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerConfigInit = SwaggerConfigInit;
const swagger_1 = require("@nestjs/swagger");
function SwaggerConfigInit(app) {
    const document = new swagger_1.DocumentBuilder()
        .setVersion('v1.0.0')
        .setTitle('payment-grpc')
        .setDescription('micro service of payment-grpc')
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, document);
    swagger_1.SwaggerModule.setup('swagger', app, swaggerDocument);
}
//# sourceMappingURL=swagger.config.js.map