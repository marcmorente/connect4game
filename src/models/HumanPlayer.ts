import { type Color } from '../../types/Color'
import { type Player } from './Player'
import { type TurnVisitor } from './TurnVisitor'

export class HumanPlayer implements Player {
  private readonly name: string
  private readonly color: Color

  constructor (name: string, color: Color) {
    this.name = name
    this.color = color
  }

  async accept (visitor: TurnVisitor): Promise<void> {
    await visitor.playHuman(this)
  }

  getName (): string {
    return this.name
  }

  getColor (): Color | null {
    return this.color ?? null
  }
}
