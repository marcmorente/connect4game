import { Logic } from './src/controllers/Logic'

class Connect4 {
  private readonly logic: Logic

  constructor () {
    this.logic = new Logic()
  }

  async play (): Promise<void> {
    let controller
    do {
      controller = this.logic.getController()
      if (controller !== null) {
        await controller?.control()
        controller?.nextState()
      }
    } while (controller !== null)
  }
}

void new Connect4().play()
