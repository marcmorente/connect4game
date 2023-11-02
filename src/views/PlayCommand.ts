import { type PlayController } from '../controllers/PlayController'
import { BoardView } from './BoardView'
import { Command } from './Command'

export abstract class PlayCommand extends Command {
  playController: PlayController

  constructor (title: string, playController: PlayController) {
    super(title)
    this.playController = playController
  }

  async execute (): Promise<void> {
    new BoardView(this.playController.getBoard()).write()
  }
}
