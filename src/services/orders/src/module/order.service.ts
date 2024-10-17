import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entity/order.entity';
import { Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { CreateOrderDto } from './dto/order-dto';
import { CreatePaymentDto } from '../common/dto/payment-dto';
import { StatusPayment } from '../common/enums/status-payment.enum';

@Injectable({ scope: Scope.REQUEST })
export class OrderService {
  customerService = process.env.CUSTOMERS_SERVICE;
  productService = process.env.CATALOG_SERVICE;
  paymentService = process.env.PAYMENT_SERVICE;
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
    @Inject(REQUEST) private request: Request,
  ) {}

  async findOne(id: number) {
    const order = await this.orderRepository.findOneBy({ id });
    if (!order) throw new NotFoundException('order not found ');
    return order;
  }

  async findAll() {
    const orders = await this.orderRepository.find();
    if (!orders) throw new NotFoundException('not found orders');
    return orders;
  }

  async createOrder(data: CreateOrderDto) {
    const { customerId, productId } = data;
    const customer = await fetch(
      `${this.customerService}/find-one/${customerId}`,
    );
    if (!customer) throw new NotFoundException('customer not found');
    const customerRes = await customer.json();
    const product = await fetch(`${this.productService}/find-one/${productId}`);
    if (!product) throw new NotFoundException('not found product');
    const productRes = await product.json();
    const paymentPayload: CreatePaymentDto = {
      customerId,
      amount: productRes.amount,
    };
    const payment = await fetch(`${this.paymentService}/create-payment`, {
      method: 'POST',
      body: await JSON.stringify(paymentPayload),
    });
    const paymentRes = await payment.json();

    const order = await this.orderRepository.create({
      productId,
      customerId,
      status: StatusPayment.PENDING,
      paymentId: paymentRes.id,
    });

    await this.orderRepository.save(order);
    return [customerRes, productRes, paymentRes];
  }
}
