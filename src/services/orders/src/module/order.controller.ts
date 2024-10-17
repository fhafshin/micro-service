import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order-dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from '../common/enums/swagger-consumes.enum';
@ApiTags('order')
@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('find-one')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.findOne(id);
  }

  @Get('find-all')
  findAll() {
    return this.orderService.findAll();
  }
  @ApiConsumes(SwaggerConsumes.UrlEncoded)
  @Post('create-order')
  createOrder(@Body() data: CreateOrderDto) {
    return this.orderService.createOrder(data);
  }
}
