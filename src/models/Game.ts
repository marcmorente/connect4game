import { Color } from '../../types/Color'
import { Board } from './Board'
import { BotPlayer } from './BotPlayer'
import { HumanPlayer } from './HumanPlayer'
import { type Player } from './Player'

export class Game {
  private readonly board: Board
  private players!: Player[]
  private readonly modes: Player[][] = [
    [new HumanPlayer('Human', Color.RED), new HumanPlayer('Human', Color.YELLOW)],
    [new HumanPlayer('Human', Color.RED), new BotPlayer('Bot', Color.YELLOW)]
  ]

  constructor () {
    this.board = new Board()
  }

  getBoard (): Board {
    return this.board
  }

  getPlayers (): Player[] {
    return this.players
  }

  setPlayers (mode: number): void {
    this.players = this.modes[mode]
  }

  isInvalidMode (): boolean {
    return this.getPlayers() === undefined
  }
}
