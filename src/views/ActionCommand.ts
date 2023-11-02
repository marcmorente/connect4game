import { type PlayController } from '../controllers/PlayController'
import { PlayCommand } from './PlayCommand'

export class ActionCommand extends PlayCommand {
  constructor (playController: PlayController) {
    super('Continue', playController)
  }

  async execute (): Promise<void> {
    await super.execute()
    await this.playController.action()
  }

  isActive (): boolean {
    return true
  }
}
