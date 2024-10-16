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

  @Post('create-payment')
  createPayment(@Body() data: CreatePaymentDto) {
    return this.paymentService.createPayment(data);
  }

  @Patch('update-payment/:id')
  updatePayment(@Body() status: number, @Param('id') id: number) {
    return this.paymentService.updatePayment(status, id);
  }
}
