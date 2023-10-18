import { Board } from './Board'

export class Game {
  private readonly board: Board
  private mode: number = 0

  constructor () {
    this.board = new Board()
  }

  getBoard (): Board {
    return this.board
  }

  getMode (): number {
    return this.mode
  }

  setMode (mode: number): void {
    this.mode = mode
  }
}
