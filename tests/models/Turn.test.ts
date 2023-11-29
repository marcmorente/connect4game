import { describe, expect, beforeEach, it, jest } from '@jest/globals'
import { Turn } from '../../src/models/Turn'
import { Game } from '../../src/models/Game'
import { type Player } from '../../src/models/Player'
import { HUMAN_VS_HUMAN } from '../constants/modes'

describe('Turn', () => {
  let turn: Turn
  let game: Game
  let player1: Player
  let player2: Player

  beforeEach(() => {
    game = new Game()
    game.setPlayers(HUMAN_VS_HUMAN)
    player1 = game.getPlayers()[0]
    player2 = game.getPlayers()[1]
    turn = new Turn(game)
  })

  it('should initialize a new turn', () => {
    expect(turn).toBeInstanceOf(Turn)
  })

  it('should get a snapshot of the current turn', () => {
    const turn = new Turn(game)
    turn.setCurrentPlayer(player1)
    const snapshot = turn.getSnapshot()
    expect(snapshot).toBeInstanceOf(Turn)
    expect(snapshot.getCurrentPlayer()).toEqual(player1)
  })

  it('should set a snapshot of the current turn', () => {
    const snapshot = new Turn(game)
    snapshot.setCurrentPlayer(player2)
    turn.setSnapshot(snapshot)
    expect(turn.getCurrentPlayer()).toEqual(player2)
  })

  it('should get the current player', () => {
    turn.setCurrentPlayer(player1)
    expect(turn.getCurrentPlayer()).toEqual(player1)
  })

  it('should switch player', () => {
    turn.switchPlayer()
    expect(turn.getCurrentPlayer()).toEqual(player2)
  })

  it('should not switch player if game is finished', () => {
    jest.spyOn(game, 'isFinished').mockReturnValue(true)
    turn.setCurrentPlayer(player2)
    turn.switchPlayer()
    expect(turn.getCurrentPlayer()).toEqual(player2)
  })
})
