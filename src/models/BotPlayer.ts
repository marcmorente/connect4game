import { type Player } from './Player'
import { type TurnVisitor } from './TurnVisitor'

export class BotPlayer implements Player {
  private readonly name: string
  private readonly color: string

  constructor (name: string, color: string) {
    this.name = name
    this.color = color
  }

  async accept (visitor: TurnVisitor): Promise<void> {
    await visitor.playBot(this)
  }

  getName (): string {
    return this.name
  }

  getColor (): string {
    return this.color
  }
}
