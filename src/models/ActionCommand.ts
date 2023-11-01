import { CompositeCommand } from './CompositeCommand'
import { PlayCommand } from './PlayCommand'
import { type Session } from './Session'
import { UndoRedoCommand } from './UndoRedoCommand'

export class ActionCommand extends CompositeCommand {
  constructor (session: Session) {
    super()
    this.add(new PlayCommand(session))
    this.add(new UndoRedoCommand(session))
  }
}
