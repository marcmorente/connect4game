import { type Board } from './Board'
import { Player } from './Player'
import { Token } from './Token'
import { type TurnVisitor } from './TurnVisitor'

export class HumanPlayer extends Player {
  putToken (board: Board): boolean {
    return board.putToken(this.getColumn(), new Token(this.getColor()))
  }

  async accept (visitor: TurnVisitor): Promise<void> {
    await visitor.playHuman(this)
  }
}
