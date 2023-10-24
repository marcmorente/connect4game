import assert from 'assert'
import { type Board } from './Board'
import { type Game } from './Game'
import { type Player } from './Player'

export class Turn {
  private currentTurn: number = 0
  private readonly board: Board

  constructor (private readonly game: Game) {
    this.game = game
    this.board = this.game.getBoard()
  }

  getCurrentPlayer (): Player {
    assert(this.game.getPlayers() !== undefined)
    return this.game.getPlayers()[this.currentTurn]
  }

  switchPlayer (): void {
    if (!this.board.isFinished()) {
      this.currentTurn = (this.currentTurn + 1) % this.game.getPlayers().length
    }
  }
}
