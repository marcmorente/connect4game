import { UndoRedoController } from '../controllers/UndoRedoController'
import { Command } from './Command'
import { type Session } from './Session'

export class UndoRedoCommand extends Command {
  undoRedoController: UndoRedoController
  constructor (session: Session) {
    super()
    this.undoRedoController = new UndoRedoController(session)
  }

  async execute (): Promise<void> {
    await this.undoRedoController.control()
  }
}
