import { describe, expect, it } from '@jest/globals'
import { Color } from '../../types/Color'
import { Board } from '../../src/models/Board'
import { BoardExamples } from '../objectMother/BoardExamples'
import { Token } from '../../src/models/Token'
import { FIFTH_COLUMN, FIRST_COLUMN } from '../constants/columns'
import { FIRST_ROW } from '../constants/rows'

describe('Board', () => {
  it('should initialize a new board', () => {
    const board: Board = BoardExamples.dummy()
    expect(board).toBeInstanceOf(Board)
  })

  it('should put a token in the board if the column is not full', () => {
    const board: Board = BoardExamples.dummy()
    board.putToken(0, new Token(Color.RED))
    const token: Token = board.getToken(FIFTH_COLUMN, FIRST_ROW)
    expect(token.getColor()).toBe(Color.RED)
  })

  it('should not put a token in a full column', () => {
    const board: Board = BoardExamples.fillFullColumn()
    expect(board.putToken(FIRST_COLUMN, new Token(Color.RED))).toBeFalsy()
  })

  it('should check for a winner in horizontal line', () => {
    const board: Board = BoardExamples.fillHorizontalWin()
    expect(board.checkWinner()).toBe(Color.RED)
  })

  it('should check for a winner in vertical line', () => {
    const board: Board = BoardExamples.fillVerticalWin()
    expect(board.checkWinner()).toBe(Color.YELLOW)
  })

  it('should check for a winner in a diagonal line', () => {
    const board: Board = BoardExamples.fillDiagonalWin()
    expect(board.checkWinner()).toBe(Color.YELLOW)
  })

  it('should check for a winner in a reverse diagonal line', () => {
    const board: Board = BoardExamples.fillReverseDiagonalWin()
    expect(board.checkWinner()).toBe(Color.YELLOW)
  })

  it('should result in a tie if the board is full and there is no winner', () => {
    const board: Board = BoardExamples.fillWithoutWinning()
    expect(board.isTie()).toBe(true)
  })
})
