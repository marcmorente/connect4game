import { BotPlayer } from '../src/models/BotPlayer'
import { HumanPlayer } from '../src/models/HumanPlayer'
import { type Player } from '../src/models/Player'
import { Color } from './Color'

export const GAME_MODE: Player[][] = [
  [new HumanPlayer('Human', Color.RED), new HumanPlayer('Human', Color.YELLOW)],
  [new HumanPlayer('Human', Color.RED), new BotPlayer('Bot', Color.YELLOW)]
]
