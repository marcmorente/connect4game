import { Player } from './Player'
import { type TurnVisitor } from './TurnVisitor'

export class BotPlayer extends Player {
  async accept (visitor: TurnVisitor): Promise<void> {
    await visitor.playBot(this)
  }
}
