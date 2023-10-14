import { Board } from '../models/Board'
import { Turn } from '../models/Turn'
import { type StandardCli } from '../views/StandardCli'
import { TurnView } from '../views/TurnView'
import { GAME_MODE } from '../../types/GameMode'
import { type Player } from '../models/Player'
import { type Token } from '../models/Token'
import { BoardView } from '../views/BoardView'

export class Game {
  public readonly cli: StandardCli
  private readonly board: Board
  private readonly turnView: TurnView
  private mode: number = 0

  constructor (cli: StandardCli) {
    this.board = new Board()
    this.cli = cli
    this.turnView = new TurnView(this.board, cli)
  }

  async start (): Promise<void> {
    const players: Player[] = GAME_MODE[this.mode]
    const turn: Turn = new Turn(this.board, players)
    do {
      new BoardView().write(this)
      await this.turnView.play(turn.getCurrentPlayer())
      turn.switchPlayer()
    } while (!this.board.isFinished())
    new BoardView().write(this)
    const player: Player = turn.getCurrentPlayer()
    this.board.getWinner() !== null
      ? this.cli.print(`${player.getName()} ${player.getColor()?.toString()} wins!`)
      : this.cli.print("It's a tie!")
  }

  reset (): void {
    this.board.reset()
  }

  setMode (mode: number): void {
    this.mode = mode
  }

  getRows (): number {
    return this.board.getRows()
  }

  getCols (): number {
    return this.board.getCols()
  }

  getToken (row: number, col: number): Token {
    return this.board.getToken(row, col)
  }
}
