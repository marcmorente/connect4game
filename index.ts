import { Game } from './src/controllers/Game'
import { View } from './src/views/View'

class Main {
  private readonly game: Game
  private readonly view: View
  constructor () {
    this.game = new Game()
    this.view = new View(this.game)
  }

  async play (): Promise<void> {
    await this.view.start()
    do {
      await this.view.play()
    } while (await this.view.resume())
  }
}

void new Main().play()
