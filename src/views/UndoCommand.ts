import { Message } from '../../types/Message'
import { type PlayController } from '../controllers/PlayController'
import { PlayCommand } from './PlayCommand'

export class UndoCommand extends PlayCommand {
  constructor (playController: PlayController) {
    super(Message.UNDO_COMMAND.toString(), playController)
  }

  async execute (): Promise<void> {
    this.playController.undo()
    await super.execute()
  }

  isActive (): boolean {
    return this.playController.undoable()
  }
}
