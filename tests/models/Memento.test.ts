import { describe, expect, beforeEach, it } from '@jest/globals'
import { Memento } from '../../src/models/Memento'
import { type Board } from '../../src/models/Board'
import { type Turn } from '../../src/models/Turn'
import { Token } from '../../src/models/Token'
import { type Game } from '../../src/models/Game'
import { GameExamples } from '../objectMother/GameExamples'
import { FIRST_COLUMN } from '../constants/columns'

describe('Memento', () => {
  let memento: Memento
  let board: Board
  let turn: Turn
  let game: Game

  beforeEach(() => {
    game = GameExamples.humanVsHuman()
    board = game.getBoard()
    turn = game.getTurn()
    memento = new Memento(board, turn)
  })

  it('should initialize a new memento', () => {
    expect(memento).toBeInstanceOf(Memento)
    expect(memento).toHaveProperty('boardSnapshot')
    expect(memento).toHaveProperty('turnSnapshot')
  })

  it('should take a snapshot of the board and turn', () => {
    const boardSnapshot = board.getSnapshot()
    const turnSnapshot = turn.getSnapshot()
    expect(memento.boardSnapshot).toEqual(boardSnapshot)
    expect(memento.turnSnapshot).toEqual(turnSnapshot)
  })

  it('should restore the board and turn to their snapshots', () => {
    const boardSnapshot = board.getSnapshot()
    const turnSnapshot = turn.getSnapshot()
    board.putToken(FIRST_COLUMN, new Token(turn.getCurrentPlayer().getColor()))
    turn.switchPlayer()
    memento.restore()
    expect(board.getSnapshot()).toEqual(boardSnapshot)
    expect(turn.getSnapshot()).toEqual(turnSnapshot)
  })
})
