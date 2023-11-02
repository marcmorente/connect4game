import { type Session } from '../models/Session'
import { TurnView } from '../views/TurnView'

export class TurnController {
  private readonly turnView: TurnView

  constructor (private readonly session: Session) {
    this.turnView = new TurnView(this.session)
  }

  async control (): Promise<void> {
    await this.turnView.askPlayer()
    this.session.switchPlayer()
    this.session.next()
  }
}
