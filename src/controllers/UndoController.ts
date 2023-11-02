import { type Session } from '../models/Session'

export class UndoController {
  constructor (private readonly session: Session) {}

  undo (): void {
    this.session.undo()
  }

  undoable (): boolean {
    return this.session.undoable()
  }
}
