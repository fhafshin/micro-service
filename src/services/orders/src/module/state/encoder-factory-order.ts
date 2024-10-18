import { IState } from './state.interface';
import { NotFoundException } from '@nestjs/common';
import { StatusPayment } from '../../common/enums/status-payment.enum';
import { OrderCanceledState } from './order-canceled-state';

export class EncoderFactoryOrder {
  private encoder: Map<StatusPayment, IState>;
  constructor() {
    this.encoder = new Map<StatusPayment, IState>();
  }

  addEncode(name: StatusPayment, stateClass: IState) {
    this.encoder.set(name, stateClass);
  }

  createEncoder(name: StatusPayment) {
    if (!this.encoder.has(name))
      throw new NotFoundException('not found state name');

    return this.encoder.get(name);
  }

  func1(): IState {
    return new OrderCanceledState();
  }
}
