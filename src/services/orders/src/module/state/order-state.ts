import { IState } from './state.interface';

export class OrderState implements IState {
  constructor(private state: IState) {}
  doAction(id: number) {
    this.state.doAction(id);
  }
}
