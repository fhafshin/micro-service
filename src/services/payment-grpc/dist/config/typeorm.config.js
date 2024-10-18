"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormConfig = TypeormConfig;
const process = require("node:process");
function TypeormConfig() {
    const { DB_HOST, DB_NAME, DB_PORT, DB_USERNAME, DB_TYPE, DB_PASSWORD } = process.env;
    return {
        type: DB_TYPE,
        host: DB_HOST,
        port: DB_PORT,
        database: DB_NAME,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        synchronize: true,
        autoLoadEntities: false,
        entities: ['dist/**/**/*.entity.{ts,js}', 'dist/**/**/**/*.entity.{ts,js}'],
    };
}
//# sourceMappingURL=typeorm.config.js.map