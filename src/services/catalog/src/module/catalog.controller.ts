import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CreateProductDto, UpdateProductDto } from './dto/product-dto';

@Controller()
export class CatalogControoler {
  constructor(private readonly catalogService: CatalogService) {}

  @Get()
  getHello() {
    return this.catalogService.getHello();
  }

  @Get('/findAll')
  findAll() {
    return this.catalogService.findAll();
  }

  @Post('create-product')
  createProduct(@Body() data: CreateProductDto) {
    return this.catalogService.createProduct(data);
  }

  @Patch('update-product/:id')
  updateProduct(
    @Body() data: UpdateProductDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.catalogService.updateProduct(data, id);
  }
}
