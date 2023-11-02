import { type Board } from '../models/Board'
import { type Session } from '../models/Session'
import { RedoController } from './RedoController'
import { TurnController } from './TurnController'
import { UndoController } from './UndoController'

export class PlayController {
  private readonly turnController: TurnController
  private readonly undoController: UndoController
  private readonly redoController: RedoController

  constructor (private readonly session: Session) {
    this.turnController = new TurnController(this.session)
    this.undoController = new UndoController(this.session)
    this.redoController = new RedoController(this.session)
  }

  async play (): Promise<void> {
    await this.turnController.control()
  }

  undo (): void {
    this.undoController.undo()
  }

  redo (): void {
    this.redoController.redo()
  }

  undoable (): boolean {
    return this.undoController.undoable()
  }

  redoable (): boolean {
    return this.redoController.redoable()
  }

  getBoard (): Board {
    return this.session.getBoard()
  }
}
