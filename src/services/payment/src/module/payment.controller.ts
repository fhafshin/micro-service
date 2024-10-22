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
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/payment-dto';
import { ApiConsumes } from '@nestjs/swagger';
import { SwaggerConsumes } from '../common/enums/swagger-consumes.enum';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get('find-one/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.paymentService.findOne(id);
  }

  @Get('find-all')
  findAll() {
    return this.paymentService.findAll();
  }
  @ApiConsumes(SwaggerConsumes.UrlEncoded)
  @Post('create-payment')
  createPayment(@Body() data: CreatePaymentDto) {
    return this.paymentService.createPayment(data);
  }

  @Patch('update-payment/:id')
  updatePayment(@Body() status: number, @Param('id') id: number) {
    return this.paymentService.updatePayment(status, id);
  }

  @Delete('delete-payment/:id')
  deletePayment(@Param('id', ParseIntPipe) id: number) {
    return this.paymentService.deletePayment(id);
  }
}
