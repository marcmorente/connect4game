import { GameController } from './src/controllers/GameController'

class Connect4 {
  private readonly gameController: GameController

  constructor () {
    this.gameController = new GameController()
  }

  async play (): Promise<void> {
    do {
      await this.gameController.start()
    } while (await this.gameController.resume())
  }
}

void new Connect4().play()
