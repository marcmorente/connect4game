import { type PlayController } from '../controllers/PlayController'
import { PlayCommand } from './PlayCommand'

export class UndoCommand extends PlayCommand {
  constructor (playController: PlayController) {
    super('Undo', playController)
  }

  async execute (): Promise<void> {
    this.playController.undo()
    await super.execute()
  }

  isActive (): boolean {
    return this.playController.undoable()
  }
}
