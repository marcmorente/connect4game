import { describe, expect, beforeEach, it } from '@jest/globals'
import { Color } from '../../types/Color'
import { Board } from '../../src/models/Board'
import { BoardBuilder } from '../builders/BoardBuilder'
import { Token } from '../../src/models/Token'

describe('Board', () => {
  let boardBuilder: BoardBuilder

  beforeEach(() => {
    boardBuilder = new BoardBuilder()
  })

  it('should initialize a new board', () => {
    const board: Board = boardBuilder.buildEmpty()
    expect(board).toBeInstanceOf(Board)
  })

  it('should put a token in the board if the column is not full', () => {
    const board: Board = boardBuilder.buildEmpty()
    board.putToken(0, new Token(Color.RED))
    const token: Token = board.getToken(5, 0)
    expect(token.getColor()).toBe(Color.RED)
  })

  it('should not put a token in a full column', () => {
    const board: Board = boardBuilder.buildFullColumn()
    expect(board.putToken(0, new Token(Color.RED))).toBeFalsy()
  })

  it('should check for a winner in horizontal line', () => {
    const board: Board = boardBuilder.buildHorizontalWin()
    expect(board.checkWinner()).toBe(Color.RED)
  })

  it('should check for a winner in vertical line', () => {
    const board: Board = boardBuilder.buildVerticalWin()
    expect(board.checkWinner()).toBe(Color.YELLOW)
  })

  it('should check for a winner in a diagonal line', () => {
    const board: Board = boardBuilder.buildDiagonalWin()
    expect(board.checkWinner()).toBe(Color.YELLOW)
  })

  it('should check for a winner in a reverse diagonal line', () => {
    const board: Board = boardBuilder.buildReverseDiagonalWin()
    expect(board.checkWinner()).toBe(Color.YELLOW)
  })

  it('should result in a tie if the board is full and there is no winner', () => {
    const board: Board = boardBuilder.buildWithoutWinning()
    expect(board.isTie()).toBe(true)
  })
})
