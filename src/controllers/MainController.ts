import { type Session } from '../models/Session'
import { BoardView } from '../views/BoardView'
import { PlayMenu } from '../views/PlayMenu'
import { ResumeView } from '../views/ResumeView'
import { Controller } from './Controller'
import { PlayController } from './PlayController'

export class MainController extends Controller {
  private readonly playController: PlayController
  private readonly boardView: BoardView
  private readonly resumeView: ResumeView

  constructor (session: Session) {
    super(session)
    this.playController = new PlayController(this.session)
    this.boardView = new BoardView(this.session.getBoard())
    this.resumeView = new ResumeView(this.session)
  }

  async control (): Promise<void> {
    do {
      await new PlayMenu(this.playController).execute()
    } while (!this.session.isFinished())
    this.boardView.write()
    this.session.getWinner() !== null
      ? this.resumeView.printWinner()
      : this.resumeView.printTie()
  }
}
