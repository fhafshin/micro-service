import { IState } from './state.interface';

export class OrderProcessingState implements IState {
  doAction(id: number) {
    console.log('processing order');
  }
}
