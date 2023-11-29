import { Token } from './Token'
import { Color } from '../../types/Color'
import { Direction } from '../../types/Direction'

export class Board {
  public readonly TOKENS_TO_WIN: number = 4
  private tokenGrid: Token[][]
  readonly rows: number = 6
  readonly cols: number = 7
  private winner: Color | null = Color.NULL

  constructor () {
    this.tokenGrid = Array.from({ length: this.rows }, () =>
      Array(this.cols).fill(new Token(Color.BLANK))
    )
  }

  reset (): void {
    this.tokenGrid = Array.from({ length: this.rows }, () =>
      Array(this.cols).fill(new Token(Color.BLANK))
    )
  }

  checkWinner (): Color | null {
    for (const direction of Direction.ALL) {
      if (this.findWinner(direction)) {
        return this.winner
      }
    }
    return null
  }

  findWinner (direction: Direction): boolean {
    for (let row: number = 0; row < this.rows; row++) {
      for (let col: number = 0; col < this.cols; col++) {
        if (this.checkLine(row, col, direction) === this.TOKENS_TO_WIN) {
          this.setWinner(this.getToken(row, col).getColor())
          return true
        }
      }
    }
    return false
  }

  checkLine (row: number, col: number, direction: Direction): number {
    const token: Color | null = this.getToken(row, col).getColor()
    let consecutiveTokens: number = 0
    if (token !== Color.BLANK) {
      for (let i: number = 0; i < this.TOKENS_TO_WIN; i++) {
        const nextRow: number = row + i * direction.x
        const nextCol: number = col + i * direction.y
        if (
          this.isInvalidRow(nextRow) ||
          this.isInvalidColumn(nextCol) ||
          this.tokenGrid[nextRow][nextCol].getColor() !== token
        ) {
          break
        }
        consecutiveTokens++
      }
    }
    return consecutiveTokens
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
        if (this.getToken(row, col).getColor() === Color.BLANK) {
          return false
        }
      }
    }
    return true
  }

  putToken (col: number, token: Token): boolean {
    let row: number = this.rows - 1
    while (
      row >= 0 &&
      this.getToken(row, col).getColor() !== Color.BLANK
    ) {
      row--
    }
    if (
      row >= 0 &&
      row < this.rows &&
      col >= 0 &&
      col < this.cols &&
      this.getToken(row, col).getColor() === Color.BLANK
    ) {
      this.tokenGrid[row][col] = token
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

  setSnapshot (snapshot: Token[][]): void {
    this.tokenGrid = this.cloneTokenGrid(snapshot)
  }

  getSnapshot (): Token[][] {
    return this.cloneTokenGrid(this.tokenGrid)
  }

  private cloneTokenGrid (tokenGrid: Token[][]): Token[][] {
    const result = []
    for (let i = 0; i < tokenGrid.length; i++) {
      const row = []
      for (let j = 0; j < tokenGrid[i].length; j++) {
        row.push(tokenGrid[i][j])
      }
      result.push(row)
    }
    return result
  }

  getWinner (): Color | null {
    return this.winner
  }

  setWinner (color: Color | null): void {
    this.winner = color
  }

  getToken (row: number, col: number): Token {
    return this.tokenGrid[row][col]
  }

  getTokenGrid (): Token[][] {
    return this.tokenGrid
  }

  getRows (): number {
    return this.rows
  }

  getCols (): number {
    return this.cols
  }
}
