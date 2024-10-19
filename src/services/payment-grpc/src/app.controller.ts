import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

interface NewPaymentRequest {
  customerId: number;
  amount: number;
}

interface PaymentRes {
  id: number;
}
@Controller()
export class AppController {
  @GrpcMethod('PaymentGrpc', 'createPayment')
  createPayment(data: NewPaymentRequest) {
    const res: PaymentRes = {
      id: data.customerId,
    };

    return res;
  }
}
