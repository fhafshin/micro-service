import { IState } from './state.interface';

export class OrderShippedState implements IState {
  doAction(id: number) {
    console.log('shipped order');
  }
}
