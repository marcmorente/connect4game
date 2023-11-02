import { Message } from '../../types/Message'
import { type PlayController } from '../controllers/PlayController'
import { PlayCommand } from './PlayCommand'

export class ContinueCommand extends PlayCommand {
  constructor (playController: PlayController) {
    super(Message.CONTINUE_COMMAND.toString(), playController)
  }

  async execute (): Promise<void> {
    await super.execute()
    await this.playController.play()
  }

  isActive (): boolean {
    return true
  }
}
