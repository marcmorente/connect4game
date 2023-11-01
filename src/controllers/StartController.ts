import { type Session } from '../models/Session'
import { StartView } from '../views/StartView'
import { Controller } from './Controller'

export class StartController extends Controller {
  private readonly startView: StartView

  constructor (session: Session) {
    super(session)
    this.startView = new StartView(this.session)
  }

  async control (): Promise<void> {
    await this.startView.start()
  }
}
