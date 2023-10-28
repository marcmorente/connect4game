import { type Board } from '../models/Board'
import { StandardCli } from './StandardCli'

export class BoardView {
  private readonly cli: StandardCli

  constructor (private readonly board: Board) {
    this.board = board
    this.cli = StandardCli.getInstance()
  }

  write (): void {
    this.cli.print('\n')
    for (let row: number = 0; row < this.board.getRows(); row++) {
      let rowString: string = ''
      for (let col: number = 0; col < this.board.getCols(); col++) {
        rowString += this.board.getToken(row, col).getColor()
      }
      this.cli.print(rowString)
    }
    let columnNumbers: string = ''
    for (let col: number = 1; col <= this.board.getCols(); col++) {
      columnNumbers += `${col} `
    }
    this.cli.print(columnNumbers)
  }
}
