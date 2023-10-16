import { GAME_MODE } from '../../types/GameMode'
import { Board } from '../models/Board'
import { type Player } from '../models/Player'
import { Turn } from '../models/Turn'
import { BoardView } from '../views/BoardView'
import { type StandardCli } from '../views/StandardCli'
import { TurnView } from '../views/TurnView'

export class Game {
  private readonly board: Board
  private mode: number = 0

  constructor () {
    this.board = new Board()
  }

  async start (cli: StandardCli): Promise<void> {
    const players: Player[] = GAME_MODE[this.mode]
    const turn: Turn = new Turn(this.board, players)
    do {
      new BoardView(this.board).write()
      await new TurnView(this.board, cli).play(turn.getCurrentPlayer())
      turn.switchPlayer()
    } while (!this.board.isFinished())
    new BoardView(this.board).write()
    const player: Player = turn.getCurrentPlayer()
    this.board.getWinner() !== null
      ? cli.print(`${player.getName()} ${player.getColor()?.toString()} wins!`)
      : cli.print("It's a tie!")
  }

  getBoard (): Board {
    return this.board
  }

  getMode (): number {
    return this.mode
  }

  setMode (mode: number): void {
    this.mode = mode
  }
}
