import { type Color } from '../../types/Color'
import { type Board } from './Board'
import { type TurnVisitor } from './TurnVisitor'

export abstract class Player {
  private col: number = 0

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

  setColumn (column: number): void {
    this.col = column - 1
  }

  getColumn (): number {
    return this.col
  }

  abstract putToken (game: Board): boolean
  abstract accept (visitor: TurnVisitor): Promise<void>
}
