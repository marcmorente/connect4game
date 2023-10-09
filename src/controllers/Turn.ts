import { type Board } from '../models/Board'
import { type Player } from '../models/Player'

export class Turn {
  players: Player[] = []
  private currentTurn: number = 0

  constructor (private readonly board: Board) {
    this.board = board
  }

  setPlayers (players: Player[]): void {
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
