import { type Game } from '../models/Game'
import { StartView } from '../views/StartView'

export class StartController {
  private readonly startView: StartView

  constructor (private readonly game: Game) {
    this.startView = new StartView(this.game)
  }

  async start (): Promise<void> {
    await this.startView.start()
  }
}
