/* eslint-disable @typescript-eslint/no-extraneous-class */

import { Board } from '../../src/models/Board'
import { type Token } from '../../src/models/Token'
import { FIRST_COLUMN, FOURTH_COLUMN, SECOND_COLUMN, THIRD_COLUMN } from '../constants/columns'
import { TURN_ONE, TURN_TWO } from '../constants/turns'
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
      board.putToken(FIRST_COLUMN, token)
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
      board.putToken(FIRST_COLUMN, TokenExamples.yellow())
    }
    return board
  }

  static fillTurnOne (): Board {
    const board: Board = new Board()
    for (let i = 0; i < TURN_ONE; i++) {
      board.putToken(FIRST_COLUMN, TokenExamples.parityColor(i))
    }

    return board
  }

  static fillTurnTwo (): Board {
    const board: Board = new Board()
    for (let i = 0; i < TURN_TWO; i++) {
      board.putToken(SECOND_COLUMN, TokenExamples.parityColor(i))
    }
    return board
  }

  static fillDiagonalWin (): Board {
    const board: Board = new Board()
    board.putToken(FIRST_COLUMN, TokenExamples.yellow())
    board.putToken(SECOND_COLUMN, TokenExamples.red())
    board.putToken(SECOND_COLUMN, TokenExamples.yellow())
    board.putToken(THIRD_COLUMN, TokenExamples.red())
    board.putToken(THIRD_COLUMN, TokenExamples.red())
    board.putToken(THIRD_COLUMN, TokenExamples.yellow())
    board.putToken(FOURTH_COLUMN, TokenExamples.red())
    board.putToken(FOURTH_COLUMN, TokenExamples.red())
    board.putToken(FOURTH_COLUMN, TokenExamples.red())
    board.putToken(FOURTH_COLUMN, TokenExamples.yellow())
    return board
  }

  static fillReverseDiagonalWin (): Board {
    const board: Board = new Board()
    board.putToken(FIRST_COLUMN, TokenExamples.red())
    board.putToken(FIRST_COLUMN, TokenExamples.red())
    board.putToken(FIRST_COLUMN, TokenExamples.red())
    board.putToken(FIRST_COLUMN, TokenExamples.yellow())
    board.putToken(SECOND_COLUMN, TokenExamples.red())
    board.putToken(SECOND_COLUMN, TokenExamples.red())
    board.putToken(SECOND_COLUMN, TokenExamples.yellow())
    board.putToken(THIRD_COLUMN, TokenExamples.red())
    board.putToken(THIRD_COLUMN, TokenExamples.yellow())
    board.putToken(FOURTH_COLUMN, TokenExamples.yellow())
    return board
  }
}
