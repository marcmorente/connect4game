import { describe, expect, beforeEach, it } from '@jest/globals'
import { Board } from '../../src/models/Board'
import { Token } from '../../src/models/Token'
import { Color } from '../../types/Color'

describe('Board', () => {
  let board: Board

  beforeEach(() => {
    board = new Board()
  })

  it('should check for a winner in horizontal line', () => {
    addTokensInHorizontal(board)
    expect(board.checkWinner()).toBe(Color.RED)
  })

  it('should check for a winner in vertical line', () => {
    addTokensInVertical(board)
    expect(board.checkWinner()).toBe(Color.YELLOW)
  })

  it('should check for a winner in a diagonal line', () => {
    setupDiagonalWin()
    expect(board.checkWinner()).toBe(Color.YELLOW)
  })

  it('should check for a winner in a reverse diagonal line', () => {
    setupReverseDiagonalWin()
    expect(board.checkWinner()).toBe(Color.YELLOW)
  })

  it('should result in a tie if the board is full and there is no winner', () => {
    fillBoardWithoutWinning(board)
    expect(board.isTie()).toBe(true)
  })

  function fillBoardWithoutWinning (board: Board): void {
    for (let i = 0; i < board.cols; i++) {
      const tokenColor = i % 2 === 0 ? Color.RED : Color.YELLOW
      for (let j = 0; j < board.rows; j++) {
        board.putToken(i, new Token(tokenColor))
      }
    }
  }

  function setupDiagonalWin (): void {
    board.putToken(0, new Token(Color.YELLOW))
    board.putToken(1, new Token(Color.RED))
    board.putToken(1, new Token(Color.YELLOW))
    board.putToken(2, new Token(Color.RED))
    board.putToken(2, new Token(Color.RED))
    board.putToken(2, new Token(Color.YELLOW))
    board.putToken(3, new Token(Color.RED))
    board.putToken(3, new Token(Color.RED))
    board.putToken(3, new Token(Color.RED))
    board.putToken(3, new Token(Color.YELLOW))
  }

  function setupReverseDiagonalWin (): void {
    board.putToken(0, new Token(Color.RED))
    board.putToken(0, new Token(Color.RED))
    board.putToken(0, new Token(Color.RED))
    board.putToken(0, new Token(Color.YELLOW))
    board.putToken(1, new Token(Color.RED))
    board.putToken(1, new Token(Color.RED))
    board.putToken(1, new Token(Color.YELLOW))
    board.putToken(2, new Token(Color.RED))
    board.putToken(2, new Token(Color.YELLOW))
    board.putToken(3, new Token(Color.YELLOW))
  }
})

function addTokensInVertical (board: Board): void {
  for (let col = 0; col < board.cols; col++) {
    board.putToken(0, new Token(Color.YELLOW))
  }
}

function addTokensInHorizontal (board: Board): void {
  for (let row = 0; row < board.rows; row++) {
    board.putToken(row, new Token(Color.RED))
  }
}
