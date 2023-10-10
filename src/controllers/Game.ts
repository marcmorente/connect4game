import { Board } from '../models/Board'
import { Turn } from '../models/Turn'
import { StandardCli } from '../views/StandardCli'
import { TurnView } from '../views/TurnView'
import { GAME_MODE } from '../../types/GameMode'
import { type Player } from '../models/Player'

export class Game {
  private readonly cli: StandardCli
  private readonly board: Board
  private readonly turnView: TurnView

  constructor () {
    this.cli = new StandardCli()
    this.board = new Board()
    this.turnView = new TurnView(this.board, this.cli)
  }

  async start (): Promise<void> {
    const mode: number = await this.turnView.selectMode()
    const players: Player[] = GAME_MODE[mode]
    const turn: Turn = new Turn(this.board, players)
    do {
      this.board.draw()
      await this.turnView.play(turn.getCurrentPlayer())
      turn.switchPlayer()
    } while (!this.board.isFinished())
    this.board.draw()
    const player: Player = turn.getCurrentPlayer()
    this.board.getWinner() !== null
      ? this.cli.print(`${player.getName()} ${player.getColor()?.toString()} wins!`)
      : this.cli.print("It's a tie!")
    this.cli.close()
  }
}
