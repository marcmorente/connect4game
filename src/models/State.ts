import { StateValue } from './StateValue'

export class State {
  private stateValue: StateValue = StateValue.INITIAL

  constructor () {
    this.reset()
  }

  public reset (): void {
    this.stateValue = StateValue.INITIAL
  }

  public next (): void {
    if (this.stateValue !== StateValue.EXIT) {
      const values = Object.values(StateValue)
      const index = values.indexOf(this.stateValue)
      this.stateValue = values[index + 1] as StateValue
    }
  }

  setValueState (stateValue: StateValue): void {
    this.stateValue = stateValue
  }

  public getValueState (): StateValue {
    return this.stateValue
  }
}
