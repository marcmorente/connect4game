import { Message } from '../../types/Message'
import { type PlayController } from '../controllers/PlayController'
import { PlayCommand } from './PlayCommand'

export class RedoCommand extends PlayCommand {
  constructor (playController: PlayController) {
    super(Message.REDO_COMMAND.toString(), playController)
  }

  async execute (): Promise<void> {
    this.playController.redo()
    await super.execute()
  }

  isActive (): boolean {
    return this.playController.redoable()
  }
}
