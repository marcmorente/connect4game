import { type Game } from '../controllers/Game'

export abstract class WithGameView {
  protected game: Game

  constructor (game: Game) {
    this.game = game
  }
}
