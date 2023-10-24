import { GameController } from './src/controllers/GameController'
import { View } from './src/views/View'

class Connect4 {
  private readonly gameController: GameController
  private readonly view: View
  constructor () {
    this.gameController = new GameController()
    this.view = new View(this.gameController)
  }

  async play (): Promise<void> {
    do {
      await this.view.start()
      await this.view.play()
    } while (await this.view.resume())
  }
}

void new Connect4().play()
