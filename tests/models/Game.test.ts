import { describe, expect, beforeEach, it } from '@jest/globals'
import { Game } from '../../src/models/Game'
import { Board } from '../../src/models/Board'
import { Color } from '../../types/Color'
import { Memento } from '../../src/models/Memento'
import { BoardBuilder } from '../builders/BoardBuilder'
import { HUMAN_VS_HUMAN } from '../constants/modes'

describe('Game', () => {
  let game: Game
  let boardBuilder: BoardBuilder

  beforeEach(() => {
    game = new Game()
    game.setPlayers(HUMAN_VS_HUMAN)
    boardBuilder = new BoardBuilder()
  })

  it('should initialize a new game', () => {
    expect(game).toBeInstanceOf(Game)
    expect(game.getBoard()).toBeInstanceOf(Board)
    expect(game.getPlayers()).toHaveLength(2)
  })

  it('should set players based on mode', () => {
    game.setPlayers(HUMAN_VS_HUMAN)
    expect(game.getPlayers()[0].getColor()).toBe(Color.RED)
    expect(game.getPlayers()[1].getColor()).toBe(Color.YELLOW)
  })

  it('should switch players', () => {
    const currentPlayer = game.getCurrentPlayer()
    game.switchPlayer()
    expect(game.getCurrentPlayer()).not.toBe(currentPlayer)
  })

  it('should check if game is finished', () => {
    expect(game.isFinished()).toBe(false)
    const board = boardBuilder.buildHorizontalWin()
    game.setBoard(board)
    expect(game.isFinished()).toBe(true)
  })

  it('should check for invalid mode', () => {
    expect(game.isInvalidMode(3)).toBe(true)
    expect(game.isInvalidMode(1)).toBe(false)
  })

  it('should create a memento', () => {
    const memento = game.createMemento()
    expect(memento).toBeInstanceOf(Memento)
    expect(memento).toHaveProperty('board')
    expect(memento).toHaveProperty('turn')
  })

  it('should set a new board', () => {
    const newBoard = new Board()
    game.setBoard(newBoard)
    expect(game.getBoard()).toBe(newBoard)
  })
})
