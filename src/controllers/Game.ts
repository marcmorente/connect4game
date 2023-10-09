import { Board } from '../models/Board'
import { Turn } from './Turn'
import { StandardCli } from '../views/StandardCli'
import { TurnView } from '../views/TurnView'
import { GAME_MODE } from '../../types/GameMode'
import { type Player } from '../models/Player'

export class Game {
  private readonly cli: StandardCli
  private readonly board: Board
  private readonly turn: Turn
  private readonly turnView: TurnView

  constructor () {
    this.cli = new StandardCli()
    this.board = new Board()
    this.turn = new Turn(this.board)
    this.turnView = new TurnView(this.board, this.cli)
  }

  async start (): Promise<void> {
    const mode = await this.turnView.selectMode()
    const players: Player[] = GAME_MODE[mode]
    this.turn.setPlayers(players)
    do {
      this.board.draw()
      await this.turnView.play(this.turn.getCurrentPlayer())
      this.turn.switchPlayer()
    } while (!this.board.isFinished())
    this.board.draw()
    const player = this.turn.getCurrentPlayer()
    this.board.getWinner() !== null
      ? this.cli.print(`${player.getName()} ${player.getColor()} wins!`)
      : this.cli.print("It's a tie!")
    this.cli.close()
  }
}
