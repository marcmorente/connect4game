import { type Color } from '../../types/Color'
import { type TurnVisitor } from './TurnVisitor'

export interface Player {
  getName: () => string
  getColor: () => Color | null
  accept: (visitor: TurnVisitor) => Promise<void>
}
