import { type PlayController } from '../controllers/PlayController'
import { ActionCommand } from './ActionCommand'
import { Menu } from './Menu'
import { RedoCommand } from './RedoCommand'
import { UndoCommand } from './UndoCommand'

export class PlayMenu extends Menu {
  constructor (playController: PlayController) {
    super()
    this.addCommand(new ActionCommand(playController))
    this.addCommand(new UndoCommand(playController))
    this.addCommand(new RedoCommand(playController))
  }
}
