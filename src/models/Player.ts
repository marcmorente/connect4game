import { type Color } from '../../types/Color'
import { type TurnVisitor } from './TurnVisitor'

export abstract class Player {
  constructor (
    private readonly name: string,
    private readonly color: Color | null
  ) {}

  getName (): string {
    return this.name
  }

  getColor (): Color | null {
    return this.color
  }

  abstract accept (visitor: TurnVisitor): Promise<void>
}
