import { type Board } from './Board'
import { type Player } from './Player'

export class Turn {
  private currentTurn: number = 0

  constructor (private readonly board: Board, private readonly players: Player[]) {
    this.board = board
    this.players = players
  }

  getCurrentPlayer (): Player {
    return this.players[this.currentTurn]
  }

  switchPlayer (): void {
    if (!this.board.isFinished()) {
      this.currentTurn = (this.currentTurn + 1) % this.players.length
    }
  }
}
