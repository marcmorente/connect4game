import { type Game } from '../controllers/Game'
import { type StandardCli } from './StandardCli'

export abstract class WithGameView {
  protected game: Game
  protected cli: StandardCli

  constructor (game: Game, cli: StandardCli) {
    this.game = game
    this.cli = cli
  }
}
