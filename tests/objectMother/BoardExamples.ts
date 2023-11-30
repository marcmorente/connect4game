/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Board } from '../../src/models/Board'
import { type Token } from '../../src/models/Token'
import { TokenExamples } from './TokenExamples'

export class BoardExamples {
  static dummy (): Board {
    return new Board()
  }

  static fillWithoutWinning (): Board {
    const board: Board = new Board()
    for (let i = 0; i < board.cols; i++) {
      const token: Token = TokenExamples.parityColor(i)
      for (let j = 0; j < board.rows; j++) {
        board.putToken(i, token)
      }
    }
    return board
  }

  static fillFullColumn (): Board {
    const board: Board = new Board()
    for (let i = 0; i < board.rows; i++) {
      const token: Token = TokenExamples.parityColor(i)
      board.putToken(0, token)
    }
    return board
  }

  static fillHorizontalWin (): Board {
    const board: Board = new Board()
    for (let row = 0; row < board.rows; row++) {
      board.putToken(row, TokenExamples.red())
    }
    return board
  }

  static fillVerticalWin (): Board {
    const board: Board = new Board()
    for (let col = 0; col < board.cols; col++) {
      board.putToken(0, TokenExamples.yellow())
    }
    return board
  }

  static fillDiagonalWin (): Board {
    const board: Board = new Board()
    board.putToken(0, TokenExamples.yellow())
    board.putToken(1, TokenExamples.red())
    board.putToken(1, TokenExamples.yellow())
    board.putToken(2, TokenExamples.red())
    board.putToken(2, TokenExamples.red())
    board.putToken(2, TokenExamples.yellow())
    board.putToken(3, TokenExamples.red())
    board.putToken(3, TokenExamples.red())
    board.putToken(3, TokenExamples.red())
    board.putToken(3, TokenExamples.yellow())
    return board
  }

  static fillReverseDiagonalWin (): Board {
    const board: Board = new Board()
    board.putToken(0, TokenExamples.red())
    board.putToken(0, TokenExamples.red())
    board.putToken(0, TokenExamples.red())
    board.putToken(0, TokenExamples.yellow())
    board.putToken(1, TokenExamples.red())
    board.putToken(1, TokenExamples.red())
    board.putToken(1, TokenExamples.yellow())
    board.putToken(2, TokenExamples.red())
    board.putToken(2, TokenExamples.yellow())
    board.putToken(3, TokenExamples.yellow())
    return board
  }
}
