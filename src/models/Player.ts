import { type Color } from '../../types/Color'
import { type PlayerVisitor } from './PlayerVisitor'

export interface Player {
  getName: () => string
  getColor: () => Color | null
  accept: (visitor: PlayerVisitor) => Promise<void>
}
