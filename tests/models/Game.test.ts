import { describe, expect, beforeEach, it } from '@jest/globals'
import { Game } from '../../src/models/Game'
import { Board } from '../../src/models/Board'
import { Color } from '../../types/Color'
import { Memento } from '../../src/models/Memento'
import { BoardExamples } from '../objectMother/BoardExamples'
import { HUMAN_VS_BOT, INVALID_MODE, TWO_PLAYERS } from '../constants/modes'
import { GameExamples } from '../objectMother/GameExamples'
import { Turn } from '../../src/models/Turn'
import { type Player } from '../../src/models/Player'

describe('Game', () => {
  let game: Game
  let player1: Player
  let player2: Player

  beforeEach(() => {
    game = GameExamples.humanVsHuman()
    player1 = game.getPlayers()[0]
    player2 = game.getPlayers()[1]
  })

  it('should initialize a new game', () => {
    expect(game).toBeInstanceOf(Game)
    expect(game.getBoard()).toBeInstanceOf(Board)
    expect(game.getTurn()).toBeInstanceOf(Turn)
    expect(game.getPlayers()).toHaveLength(TWO_PLAYERS)
  })

  it('should set players based on configured mode', () => {
    expect(player1.getColor()).toBe(Color.RED)
    expect(player2.getColor()).toBe(Color.YELLOW)
  })

  it('should switch players', () => {
    const currentPlayer = game.getCurrentPlayer()
    game.switchPlayer()
    expect(game.getCurrentPlayer()).not.toBe(currentPlayer)
  })

  it('should check if game is finished', () => {
    expect(game.isFinished()).toBe(false)
    const board = BoardExamples.fillHorizontalWin()
    game.setBoard(board)
    expect(game.isFinished()).toBe(true)
  })

  it('should check for invalid mode', () => {
    expect(game.isInvalidMode(INVALID_MODE)).toBe(true)
  })

  it('should check for valid mode', () => {
    expect(game.isInvalidMode(HUMAN_VS_BOT)).toBe(false)
  })

  it('should create a memento', () => {
    const memento = game.createMemento()
    expect(memento).toBeInstanceOf(Memento)
    expect(memento).toHaveProperty('board')
    expect(memento).toHaveProperty('turn')
  })

  it('should set a new board', () => {
    const newBoard = BoardExamples.dummy()
    game.setBoard(newBoard)
    expect(game.getBoard()).toBe(newBoard)
  })
})
