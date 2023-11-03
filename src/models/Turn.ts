import assert from 'assert'
import { type Game } from './Game'
import { type Player } from './Player'

export class Turn {
  private currentTurn: number = 0
  private currentPlayer!: Player

  constructor (private readonly game: Game) {
    this.game = game
  }

  getSnapshot (): Turn {
    const turn = new Turn(this.game)
    turn.currentTurn = this.currentTurn
    turn.setCurrentPlayer(this.currentPlayer)
    return turn
  }

  setSnapshot (turn: Turn): void {
    this.currentTurn = turn.currentTurn
    this.setCurrentPlayer(turn.currentPlayer)
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
