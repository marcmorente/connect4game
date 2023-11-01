import { type Session } from '../models/Session'

export abstract class Controller {
  protected readonly session: Session

  constructor (session: Session) {
    this.session = session
  }

  public nextState (): void {
    this.session.nextState()
  }

  public abstract control (): Promise<void>
}
