import { Player } from './Player'
import { type TurnVisitor } from './TurnVisitor'

export class HumanPlayer extends Player {
  async accept (visitor: TurnVisitor): Promise<void> {
    await visitor.playHuman(this)
  }
}
