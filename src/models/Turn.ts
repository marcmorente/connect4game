import assert from 'assert'
import { type Game } from './Game'
import { type Player } from './Player'

export class Turn {
  private currentTurn: number = 0

  constructor (private readonly game: Game) {
    this.game = game
  }

  getCurrentPlayer (): Player {
    assert(this.game.getPlayers() !== undefined)
    return this.game.getPlayers()[this.currentTurn]
  }

  switchPlayer (): void {
    if (!this.game.isFinished()) {
      this.currentTurn = (this.currentTurn + 1) % this.game.getPlayers().length
    }
  }
}
