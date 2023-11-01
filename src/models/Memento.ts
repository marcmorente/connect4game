import { type Game } from './Game'
import { type Player } from './Player'
import { type Token } from './Token'

export class Memento {
  private readonly boardSnapshot: Token[][]
  private readonly currentPlayer: Player

  constructor (private readonly game: Game) {
    this.boardSnapshot = this.game.getBoard().getSnapshot()
    this.currentPlayer = this.game.getCurrentPlayer()
  }

  restore (): void {
    this.game.getBoard().setSnapshot(this.boardSnapshot)
    this.game.setCurrentPlayer(this.currentPlayer)
  }
}
