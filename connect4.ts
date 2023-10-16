import { Game } from './src/controllers/Game'
import { View } from './src/views/View'

class Connect4 {
  private readonly game: Game
  private readonly view: View
  constructor () {
    this.game = new Game()
    this.view = new View(this.game)
  }

  async play (): Promise<void> {
    do {
      await this.view.start()
      await this.view.play()
    } while (await this.view.resume())
  }
}

void new Connect4().play()
