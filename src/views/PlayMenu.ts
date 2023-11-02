import { type PlayController } from '../controllers/PlayController'
import { ConfirmCommand } from './ContinueCommand'
import { Menu } from './Menu'
import { RedoCommand } from './RedoCommand'
import { UndoCommand } from './UndoCommand'

export class PlayMenu extends Menu {
  constructor (playController: PlayController) {
    super()
    this.addCommand(new ConfirmCommand(playController))
    this.addCommand(new UndoCommand(playController))
    this.addCommand(new RedoCommand(playController))
  }
}
