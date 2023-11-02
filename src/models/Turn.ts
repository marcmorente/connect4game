import assert from 'assert'
import { type Game } from './Game'
import { type Player } from './Player'

export class Turn {
  private currentTurn: number = 0
  private currentPlayer!: Player

  constructor (private readonly game: Game) {
    this.game = game
  }

  getCurrentPlayer (): Player {
    return this.currentPlayer
  }

  setCurrentPlayer (player: Player): void {
    assert(player !== undefined)

    this.currentPlayer = player
  }

  switchPlayer (): void {
    if (!this.game.isFinished()) {
      this.currentTurn = (this.currentTurn + 1) % this.game.getPlayers().length
      this.setCurrentPlayer(this.game.getPlayers()[this.currentTurn])
    }
  }
}
