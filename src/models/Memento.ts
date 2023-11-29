import { type Board } from './Board'
import { type Token } from './Token'
import { type Turn } from './Turn'

export class Memento {
  boardSnapshot: Token[][]
  turnSnapshot: Turn

  constructor (private readonly board: Board, private readonly turn: Turn) {
    this.boardSnapshot = this.board.getSnapshot()
    this.turnSnapshot = this.turn.getSnapshot()
  }

  restore (): void {
    this.board.setSnapshot(this.boardSnapshot)
    this.turn.setSnapshot(this.turnSnapshot)
  }
}
