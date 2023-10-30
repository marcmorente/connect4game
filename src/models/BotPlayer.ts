import { type Board } from './Board'
import { Player } from './Player'
import { Token } from './Token'
import { type PlayerVisitor } from './PlayerVisitor'

export class BotPlayer extends Player {
  putToken (board: Board): boolean {
    const col: number = Math.floor(Math.random() * 7) + 1
    this.setColumn(col)
    return board.putToken(this.getColumn(), new Token(this.getColor()))
  }

  async accept (visitor: PlayerVisitor): Promise<void> {
    await visitor.playBot(this)
  }
}
