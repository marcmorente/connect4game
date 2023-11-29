import { Memento } from '../../src/models/Memento'
import { type Board } from '../../src/models/Board'
import { type Turn } from '../../src/models/Turn'

export class MementoBuilder {
  build (board: Board, turn: Turn): Memento {
    return new Memento(board, turn)
  }
}
