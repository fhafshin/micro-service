import {
  Body,
  Controller,
  Delete,
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

  @Get('/find-one/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catalogService.findOne(id);
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

  @Patch('update-product-order/:id')
  order(@Param('id', ParseIntPipe) id: number) {
    return this.catalogService.order(id);
  }

  @Patch('update-product-restore/:id')
  restore(@Param('id', ParseIntPipe) id: number) {
    return this.catalogService.restore(id);
  }
  @Delete('delete-product/:id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.catalogService.deleteProduct(id);
  }
}
