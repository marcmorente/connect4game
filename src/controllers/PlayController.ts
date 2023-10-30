import { type Game } from '../models/Game'
import { type Player } from '../models/Player'
import { type State } from '../models/State'
import { Turn } from '../models/Turn'
import { BoardView } from '../views/BoardView'
import { StandardCli } from '../views/StandardCli'
import { TurnView } from '../views/TurnView'
import { Controller } from './Controller'

export class PlayController extends Controller {
  private readonly cli: StandardCli
  private readonly turn: Turn
  private readonly boardView: BoardView
  private readonly turnView: TurnView

  constructor (game: Game, state: State) {
    super(game, state)
    this.cli = StandardCli.getInstance()
    this.turn = new Turn(this.game)
    this.turnView = new TurnView(this.turn, this.game.getBoard())
    this.boardView = new BoardView(this.game.getBoard())
  }

  async control (): Promise<void> {
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
