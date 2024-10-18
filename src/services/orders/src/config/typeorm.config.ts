import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as process from 'node:process';

export function TypeormConfig(): TypeOrmModuleOptions {
  const { DB_PORT, DB_HOST, DB_NAME, DB_USERNAME, DB_TYPE, DB_PASSWORD } =
    process.env;
  return {
    type: DB_TYPE as any,
    host: DB_HOST,
    port: +DB_PORT,
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    autoLoadEntities: false,
    synchronize: true,
    entities: ['dist/**/**/*.entity.{ts,js}', 'dist/**/**/**/*.entity.{ts,js}'],
  };
}
