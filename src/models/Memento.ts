import { type Game } from './Game'
import { type Token } from './Token'

export class Memento {
  private readonly boardSnapshot: Token[][]

  constructor (private readonly game: Game) {
    this.boardSnapshot = this.game.getBoard().getSnapshot()
  }

  restore (): void {
    this.game.getBoard().setSnapshot(this.boardSnapshot)
  }
}
