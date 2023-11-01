import { type Player } from '../models/Player'
import { type Session } from '../models/Session'
import { BoardView } from '../views/BoardView'
import { StandardCli } from '../views/StandardCli'
import { TurnView } from '../views/TurnView'
import { Controller } from './Controller'
import { UndoRedoController } from './UndoRedoController'

export class PlayController extends Controller {
  private readonly cli: StandardCli
  private readonly boardView: BoardView
  private readonly turnView: TurnView
  private readonly undoRedoController: UndoRedoController

  constructor (session: Session) {
    super(session)
    this.cli = StandardCli.getInstance()
    this.undoRedoController = new UndoRedoController(session)
    this.turnView = new TurnView(this.session)
    this.boardView = new BoardView(this.session.getBoard())
  }

  async control (): Promise<void> {
    do {
      await this.playAction()
      await this.undoRedoAction()
    } while (!this.session.isFinished())
    this.boardView.write()
    const player: Player = this.session.getCurrentPlayer()
    this.session.getWinner() !== null
      ? this.cli.print(`${player.getName()} ${player.getColor()?.toString()} wins!`)
      : this.cli.print("It's a tie!")
  }

  async playAction (): Promise<void> {
    this.boardView.write()
    await this.turnView.askPlayer()
    this.session.switchPlayer()
    this.session.next()
  }

  async undoRedoAction (): Promise<void> {
    this.boardView.write()
    await this.undoRedoController.control()
    this.boardView.write()
  }
}
