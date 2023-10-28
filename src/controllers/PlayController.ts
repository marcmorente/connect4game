import { type Game } from '../models/Game'
import { type Player } from '../models/Player'
import { Turn } from '../models/Turn'
import { BoardView } from '../views/BoardView'
import { StandardCli } from '../views/StandardCli'
import { TurnView } from '../views/TurnView'

export class PlayController {
  private readonly cli: StandardCli
  private readonly turn: Turn
  private readonly boardView: BoardView
  private readonly turnView: TurnView

  constructor (private readonly game: Game) {
    this.cli = StandardCli.getInstance()
    this.turn = new Turn(this.game)
    this.turnView = new TurnView(this.turn, this.game.getBoard())
    this.boardView = new BoardView(this.game.getBoard())
  }

  async play (): Promise<void> {
    do {
      this.boardView.write()
      await this.turnView.askPlayer()
      this.turn.switchPlayer()
    } while (!this.game.isFinished())
    this.boardView.write()
    const player: Player = this.turn.getCurrentPlayer()
    this.game.getWinner() !== null
      ? this.cli.print(`${player.getName()} ${player.getColor()?.toString()} wins!`)
      : this.cli.print("It's a tie!")
  }
}
