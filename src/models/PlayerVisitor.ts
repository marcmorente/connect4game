import { type Player } from './Player'

export interface PlayerVisitor {
  playHuman: (player: Player) => Promise<void>
  playBot: (player: Player) => Promise<void>
}
