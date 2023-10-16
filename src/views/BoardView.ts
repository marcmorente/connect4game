import { type Board } from '../models/Board'

export class BoardView {
  private readonly board: Board

  constructor (board: Board) {
    this.board = board
  }

  write (): void {
    console.log('\n')
    for (let row: number = 0; row < this.board.getRows(); row++) {
      let rowString: string = ''
      for (let col: number = 0; col < this.board.getCols(); col++) {
        rowString += this.board.getToken(row, col).getColor()
      }
      console.log(rowString)
    }
    let columnNumbers: string = ''
    for (let col: number = 1; col <= this.board.getCols(); col++) {
      columnNumbers += `${col} `
    }
    console.log(columnNumbers)
  }
}
