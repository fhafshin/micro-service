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
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from '../common/enums/swagger-consumes.enum';
@ApiTags('catalog')
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
  @ApiConsumes(SwaggerConsumes.UrlEncoded)
  @Post('create-product')
  createProduct(@Body() data: CreateProductDto) {
    return this.catalogService.createProduct(data);
  }
  @ApiConsumes(SwaggerConsumes.UrlEncoded)
  @Patch('update-product/:id')
  updateProduct(
    @Body() data: UpdateProductDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.catalogService.updateProduct(data, id);
  }
  @Patch('delete-product/:id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.catalogService.deleteProduct(id);
  }
}
