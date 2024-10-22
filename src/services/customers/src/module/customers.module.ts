import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersEntity } from './entity/customers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomersEntity])],
  providers: [CustomersService],
  controllers: [CustomersController],
})
export class CustomersModule {}
