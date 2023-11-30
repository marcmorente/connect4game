import { Board } from '../../src/models/Board'
import { type Token } from '../../src/models/Token'
import { TokenBuilder } from './TokenBuilder'

export class BoardBuilder {
  tokenBuilder: TokenBuilder

  constructor () {
    this.tokenBuilder = new TokenBuilder()
  }

  buildEmpty (): Board {
    return new Board()
  }

  buildWithoutWinning (): Board {
    const board: Board = new Board()
    for (let i = 0; i < board.cols; i++) {
      const token: Token = this.tokenBuilder.buildParityColor(i)
      for (let j = 0; j < board.rows; j++) {
        board.putToken(i, token)
      }
    }
    return board
  }

  buildFullColumn (): Board {
    const board: Board = new Board()
    for (let i = 0; i < board.rows; i++) {
      const token: Token = this.tokenBuilder.buildParityColor(i)
      board.putToken(0, token)
    }
    return board
  }

  buildHorizontalWin (): Board {
    const board: Board = new Board()
    for (let row = 0; row < board.rows; row++) {
      board.putToken(row, this.tokenBuilder.buildRed())
    }
    return board
  }

  buildVerticalWin (): Board {
    const board: Board = new Board()
    for (let col = 0; col < board.cols; col++) {
      board.putToken(0, this.tokenBuilder.buildYellow())
    }
    return board
  }

  buildDiagonalWin (): Board {
    const board: Board = new Board()
    board.putToken(0, this.tokenBuilder.buildYellow())
    board.putToken(1, this.tokenBuilder.buildRed())
    board.putToken(1, this.tokenBuilder.buildYellow())
    board.putToken(2, this.tokenBuilder.buildRed())
    board.putToken(2, this.tokenBuilder.buildRed())
    board.putToken(2, this.tokenBuilder.buildYellow())
    board.putToken(3, this.tokenBuilder.buildRed())
    board.putToken(3, this.tokenBuilder.buildRed())
    board.putToken(3, this.tokenBuilder.buildRed())
    board.putToken(3, this.tokenBuilder.buildYellow())
    return board
  }

  buildReverseDiagonalWin (): Board {
    const board: Board = new Board()
    board.putToken(0, this.tokenBuilder.buildRed())
    board.putToken(0, this.tokenBuilder.buildRed())
    board.putToken(0, this.tokenBuilder.buildRed())
    board.putToken(0, this.tokenBuilder.buildYellow())
    board.putToken(1, this.tokenBuilder.buildRed())
    board.putToken(1, this.tokenBuilder.buildRed())
    board.putToken(1, this.tokenBuilder.buildYellow())
    board.putToken(2, this.tokenBuilder.buildRed())
    board.putToken(2, this.tokenBuilder.buildYellow())
    board.putToken(3, this.tokenBuilder.buildYellow())
    return board
  }
}
