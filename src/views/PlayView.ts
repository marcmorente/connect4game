import { type Game } from '../controllers/Game'

export class PlayView {
  constructor (private readonly game: Game) {
  }

  async play (): Promise<void> {
    await this.game.start()
  }
}
