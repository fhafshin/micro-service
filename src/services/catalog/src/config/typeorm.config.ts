import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function TypeOrmConfig(): TypeOrmModuleOptions {
  const { DB_HOST, DB_TYPE, DB_PORT, DB_NAME, DB_PASSWORD, DB_USERNAME } =
    process.env;

  return {
    type: DB_TYPE as any,
    host: DB_HOST,
    port: +DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    autoLoadEntities: false,
    entities: ['dist/**/**/*.entity.{ts,js}', 'dist/**/**/**/*.entity.{ts,js}'],
    synchronize: true,
  };
}
