import { Color } from '../../types/Color'
import { Board } from './Board'
import { BotPlayer } from './BotPlayer'
import { HumanPlayer } from './HumanPlayer'
import { Memento } from './Memento'
import { type Player } from './Player'
import { Turn } from './Turn'

export class Game {
  private board: Board
  private readonly turn: Turn
  private players!: Player[]
  private readonly modes: Player[][] = [
    [new HumanPlayer('Human', Color.RED), new HumanPlayer('Human', Color.YELLOW)],
    [new HumanPlayer('Human', Color.RED), new BotPlayer('Bot', Color.YELLOW)]
  ]

  constructor () {
    this.board = new Board()
    this.turn = new Turn(this)
  }

  getBoard (): Board {
    return this.board
  }

  setBoard (board: Board): void {
    this.board = board
  }

  createMemento (): Memento {
    return new Memento(this)
  }

  switchPlayer (): void {
    this.turn.switchPlayer()
  }

  getCurrentPlayer (): Player {
    return this.turn.getCurrentPlayer()
  }

  getPlayers (): Player[] {
    return this.players
  }

  getWinner (): string | null {
    return this.board.getWinner()
  }

  setPlayers (mode: number): void {
    this.players = this.modes[mode]
    this.setCurrentPlayer(this.players[0])
  }

  setCurrentPlayer (player: Player): void {
    this.turn.setCurrentPlayer(player)
  }

  isInvalidMode (mode: number): boolean {
    return this.modes[mode] === undefined
  }

  isFinished (): boolean {
    return this.getBoard().isFinished()
  }

  reset (): void {
    this.getBoard().reset()
  }
}
