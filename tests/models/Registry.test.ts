import { describe, expect, it } from '@jest/globals'
import { Registry } from '../../src/models/Registry'
import { RegistryExamples } from '../objectMother/RegistryExamples'
import { type Game } from '../../src/models/Game'
import { GameExamples } from '../objectMother/GameExamples'

describe('Registry', () => {
  it('should reset properly', () => {
    const registry: Registry = RegistryExamples.withTwoMementos()
    registry.reset()
    expect(registry.firstPrevious).toBe(0)
    expect(registry.mementos).toEqual([])
  })

  it('should register a new memento', () => {
    const game: Game = GameExamples.humanVsHuman()
    const registry: Registry = new Registry(game)
    registry.register()
    expect(registry.firstPrevious).toBe(0)
    expect(registry.mementos).toEqual([game.createMemento()])
  })

  it('should undo properly', () => {
    const registry: Registry = RegistryExamples.withTwoMementos()
    registry.firstPrevious = 0
    registry.undo()
    expect(registry.firstPrevious).toBe(1)
    expect(registry.memento).toBe(registry.mementos[1])
  })

  it('should redo memento properly', () => {
    const registry: Registry = RegistryExamples.withTwoMementos()
    registry.redo()
    expect(registry.firstPrevious).toBe(0)
    expect(registry.memento).toBe(registry.mementos[0])
  })

  it('should check undoable correctly', () => {
    const registry: Registry = RegistryExamples.withTwoMementos()
    registry.firstPrevious = 0
    expect(registry.undoable()).toBe(true)
    registry.firstPrevious = 1
    expect(registry.undoable()).toBe(false)
  })

  it('should check redoable correctly', () => {
    const registry: Registry = RegistryExamples.withTwoMementos()
    expect(registry.redoable()).toBe(true)
    registry.firstPrevious = 0
    expect(registry.redoable()).toBe(false)
  })
})
