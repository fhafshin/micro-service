import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfig } from './config/typeorm.config';
import { OrderModule } from './module/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(process.cwd(), '.env'),
    }),
    TypeOrmModule.forRoot(TypeormConfig()),
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
