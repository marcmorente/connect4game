import { type Player } from '../models/Player'
import { type Session } from '../models/Session'
import { BoardView } from '../views/BoardView'
import { PlayMenu } from '../views/PlayMenu'
import { StandardCli } from '../views/StandardCli'
import { Controller } from './Controller'
import { PlayController } from './PlayController'

export class MainController extends Controller {
  private readonly cli: StandardCli
  private readonly boardView: BoardView
  private readonly playController: PlayController

  constructor (session: Session) {
    super(session)
    this.cli = StandardCli.getInstance()
    this.boardView = new BoardView(this.session.getBoard())
    this.playController = new PlayController(this.session)
  }

  async control (): Promise<void> {
    do {
      await new PlayMenu(this.playController).execute()
    } while (!this.session.isFinished())
    this.boardView.write()
    const player: Player = this.session.getCurrentPlayer()
    this.session.getWinner() !== null
      ? this.cli.print(`${player.getName()} ${player.getColor()?.toString()} wins!`)
      : this.cli.print("It's a tie!")
  }
}
