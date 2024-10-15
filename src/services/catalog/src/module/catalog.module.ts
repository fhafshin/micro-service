import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogControoler } from './catalog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [CatalogService],
  controllers: [CatalogControoler],
})
export class CatalogModule {}
