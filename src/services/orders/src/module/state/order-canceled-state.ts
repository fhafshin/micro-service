import { IState } from './state.interface';

export class OrderCanceledState implements IState {
  doAction(id: number) {
    console.log('Canceled order');
  }
}
