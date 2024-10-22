import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentEntity } from './entity/payment.entity';
import { Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { CreatePaymentDto } from './dto/payment-dto';
import { STATUS } from 'src/common/enums/status.enum';

@Injectable({ scope: Scope.REQUEST })
export class PaymentService {
  constructor(
    @InjectRepository(PaymentEntity)
    private PaymentRepository: Repository<PaymentEntity>,
    @Inject(REQUEST) private request: Request,
  ) {}

  async createPayment(data: CreatePaymentDto) {
    const { amount, customerId } = data;

    const payment = this.PaymentRepository.create({
      amount,
      customerId,
      status: STATUS.PENDING,
    });

    await this.PaymentRepository.save(payment);

    return payment;
  }

  async findOne(id: number) {
    const payment = await this.PaymentRepository.findOneBy({ id });

    if (!payment) throw new NotFoundException('not found payment');
    return payment;
  }

  async findAll() {
    const payments = await this.PaymentRepository.find();
    if (!payments) throw new NotFoundException('not found Exception');
    return payments;
  }

  async updatePayment(status: number, id: number) {
    const payment = await this.findOne(id);

    if (status && status !== payment.status) {
      payment.status = status;
      await this.PaymentRepository.save(payment);
    }

    return 'update successfully';
  }

  async deletePayment(id: number) {
    const payment = await this.findOne(id);
    this.PaymentRepository.delete(payment);
    return 'deleted successfully';
  }
}
