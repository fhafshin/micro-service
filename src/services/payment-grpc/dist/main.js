"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    console.log((0, path_1.join)(__dirname, 'protos/hero.proto'));
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'payment',
            protoPath: (0, path_1.join)(__dirname, 'protos/payment.proto'),
        },
    });
}
bootstrap();
//# sourceMappingURL=main.js.map