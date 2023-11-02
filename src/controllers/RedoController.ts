import { type Session } from '../models/Session'

export class RedoController {
  constructor (private readonly session: Session) {}

  redo (): void {
    this.session.redo()
  }

  redoable (): boolean {
    return this.session.redoable()
  }
}
