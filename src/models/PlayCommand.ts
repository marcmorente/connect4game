import { PlayController } from '../controllers/PlayController'
import { Command } from './Command'
import { type Session } from './Session'

export class PlayCommand extends Command {
  playController: PlayController

  constructor (session: Session) {
    super()
    this.playController = new PlayController(session)
  }

  async execute (): Promise<void> {
    await this.playController.control()
  }
}
