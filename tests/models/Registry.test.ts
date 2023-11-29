import { describe, expect, beforeEach, it, jest, afterEach } from '@jest/globals'
import { Registry } from '../../src/models/Registry'
import { Game } from '../../src/models/Game'

jest.mock('../../src/models/Memento')
jest.mock('../../src/models/Game')

describe('Registry', () => {
  let game: Game
  let registry: Registry

  beforeEach(() => {
    game = new Game()
    registry = new Registry(game)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should reset properly', () => {
    registry.mementos = [game.createMemento(), game.createMemento()]
    registry.firstPrevious = 1
    registry.reset()
    expect(registry.firstPrevious).toBe(0)
    expect(registry.mementos).toEqual([])
  })

  it('should register a new memento', () => {
    registry.register()
    expect((game.createMemento as jest.Mock).mock.calls.length).toBe(1)
    expect(registry.mementos[0]).toBe((game.createMemento as jest.Mock).mock.results[0].value)
  })

  it('should undo properly', () => {
    registry.mementos = [game.createMemento(), game.createMemento()]
    registry.firstPrevious = 0
    registry.undo()
    expect(registry.firstPrevious).toBe(1)
    expect(registry.memento).toBe(registry.mementos[1])
    expect(registry.memento.restore).toHaveBeenCalledTimes(1)
  })

  it('should redo memento properly', () => {
    registry.mementos = [game.createMemento(), game.createMemento()]
    registry.firstPrevious = 1
    registry.redo()
    expect(registry.firstPrevious).toBe(0)
    expect(registry.memento).toBe(registry.mementos[0])
    expect(registry.memento.restore).toHaveBeenCalledTimes(1)
  })

  it('should check undoable correctly', () => {
    registry.mementos = [game.createMemento(), game.createMemento()]
    registry.firstPrevious = 0
    expect(registry.undoable()).toBe(true)
    registry.firstPrevious = 1
    expect(registry.undoable()).toBe(false)
  })

  it('should check redoable correctly', () => {
    registry.mementos = [game.createMemento(), game.createMemento()]
    registry.firstPrevious = 1
    expect(registry.redoable()).toBe(true)
    registry.firstPrevious = 0
    expect(registry.redoable()).toBe(false)
  })
})
