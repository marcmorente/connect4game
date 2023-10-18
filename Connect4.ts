import { GameController } from './src/controllers/GameController'
import { Game } from './src/models/Game'
import { View } from './src/views/View'

class Connect4 {
  private readonly gameController: GameController
  private readonly view: View
  private readonly game: Game

  constructor () {
    this.game = new Game()
    this.gameController = new GameController(this.game)
    this.view = new View(this.game)
  }

  async play (): Promise<void> {
    do {
      await this.view.start()
      await this.gameController.start()
    } while (await this.view.resume())
  }
}

void new Connect4().play()
