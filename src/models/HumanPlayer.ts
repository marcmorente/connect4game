import { type Board } from './Board'
import { Player } from './Player'
import { Token } from './Token'
import { type PlayerVisitor } from './PlayerVisitor'

export class HumanPlayer extends Player {
  putToken (board: Board): boolean {
    return board.putToken(this.getColumn(), new Token(this.getColor()))
  }

  async accept (visitor: PlayerVisitor): Promise<void> {
    await visitor.playHuman(this)
  }
}
