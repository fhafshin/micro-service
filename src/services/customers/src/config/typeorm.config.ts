import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function TypeOrmConfig(): TypeOrmModuleOptions {
  const { DB_NAME, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME, DB_TYPE } =
    process.env;
  return {
    type: DB_TYPE as any,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    autoLoadEntities: false,
    entities: ['dist/**/**/*.entity.{ts,js}', 'dist/**/**/**/*.entity.{ts,js}'],
  };
}
