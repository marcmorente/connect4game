import { Token } from './Token'
import { Color } from '../../types/Color'
import { Direction } from '../../types/Direction'

export class Board {
  private readonly TOKENS_TO_WIN: number = 4
  private readonly board: Token[][]
  readonly rows: number = 6
  readonly cols: number = 7
  private winner: string | null = Color.NULL

  constructor () {
    this.board = Array.from({ length: this.rows }, () =>
      Array(this.cols).fill(new Token(Color.BLANK))
    )
  }

  draw (): void {
    console.log('\n')
    for (let row: number = 0; row < this.rows; row++) {
      let rowString: string = ''
      for (let col: number = 0; col < this.cols; col++) {
        rowString += this.getToken(row, col).getColor()
      }
      console.log(rowString)
    }
    let columnNumbers: string = ''
    for (let col: number = 1; col <= this.cols; col++) {
      columnNumbers += `${col} `
    }
    console.log(columnNumbers)
  }

  checkWinner (): string | null {
    for (const direction of Direction.ALL) {
      if (this.findWinner(direction.x, direction.y)) {
        return this.winner
      }
    }
    return null
  }

  private findWinner (x: number, y: number): boolean {
    for (let row: number = 0; row < this.rows; row++) {
      for (let col: number = 0; col < this.cols; col++) {
        const token: string | null = this.getToken(row, col).getColor()
        if (token !== Color.BLANK.toString()) {
          let consecutiveTokens: number = 0
          for (let i: number = 0; i < this.TOKENS_TO_WIN; i++) {
            const nextRow: number = row + i * x
            const nextCol: number = col + i * y
            if (
              this.isInvalidRow(nextRow) ||
              this.isInvalidColumn(nextCol) ||
              this.board[nextRow][nextCol].getColor() !== token
            ) {
              break
            }
            consecutiveTokens++
          }
          if (consecutiveTokens === this.TOKENS_TO_WIN) {
            this.winner = this.getToken(row, col).getColor()
            return true
          }
        }
      }
    }
    return false
  }

  isFinished (): boolean {
    return this.isWinner() || this.isTie()
  }

  isWinner (): boolean {
    return this.checkWinner() !== null
  }

  isTie (): boolean {
    for (let row: number = 0; row < this.rows; row++) {
      for (let col: number = 0; col < this.cols; col++) {
        if (this.getToken(row, col).getColor() === Color.BLANK.toString()) {
          return false
        }
      }
    }
    return true
  }

  putToken (col: number, token: Token): boolean {
    let row: number = this.rows - 1
    while (row >= 0 && this.getToken(row, col).getColor() !== Color.BLANK.toString()) {
      row--
    }
    if (
      row >= 0 &&
      row < this.rows &&
      col >= 0 &&
      col < this.cols &&
      this.getToken(row, col).getColor() === Color.BLANK.toString()
    ) {
      this.board[row][col] = token
      return true
    }
    return false
  }

  isInvalidColumn (col: number): boolean {
    return col < 0 || col >= this.cols || isNaN(col)
  }

  isInvalidRow (row: number): boolean {
    return row < 0 || row >= this.rows || isNaN(row)
  }

  getWinner (): string | null {
    return this.winner
  }

  getToken (row: number, col: number): Token {
    return this.board[row][col]
  }
}
