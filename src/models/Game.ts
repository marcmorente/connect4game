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
    [new HumanPlayer('Human', Color.RED), new BotPlayer('Bot', Color.YELLOW)],
    [new BotPlayer('Bot 1', Color.RED), new BotPlayer('Bot 2', Color.YELLOW)]
  ]

  constructor () {
    this.board = new Board()
    this.turn = new Turn(this)
  }

  getBoard (): Board {
    return this.board
  }

  getTurn (): Turn {
    return this.turn
  }

  setBoard (board: Board): void {
    this.board = board
  }

  createMemento (): Memento {
    return new Memento(this.board, this.turn)
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

  getWinner (): Color | null {
    return this.board.getWinner()
  }

  setPlayers (mode: number): void {
    this.players = this.modes[mode]
    this.turn.setCurrentPlayer(this.players[0])
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
