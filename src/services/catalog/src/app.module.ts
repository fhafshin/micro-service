import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import * as process from 'node:process';
import { join } from 'path';
import { TypeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogModule } from './module/catalog.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(process.cwd(), '.env'),
    }),
    TypeOrmModule.forRoot(TypeOrmConfig()),
    CatalogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
