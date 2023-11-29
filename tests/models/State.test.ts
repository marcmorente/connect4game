import { describe, expect, beforeEach, it } from '@jest/globals'
import { State } from '../../src/models/State'
import { StateValue } from '../../src/models/StateValue'

describe('State', () => {
  let state: State

  beforeEach(() => {
    state = new State()
  })

  it('should initialize a new state', () => {
    expect(state).toBeInstanceOf(State)
    expect(state).toHaveProperty('stateValue')
  })

  it('should correctly update the stateValue when next is called', () => {
    const values = Object.values(StateValue)
    const initialIndex = values.indexOf(state.stateValue)
    state.next()
    const newIndex = values.indexOf(state.stateValue)
    expect(newIndex).toEqual(initialIndex + 1)
  })

  it('should not update the stateValue when next is called and stateValue is EXIT', () => {
    state.stateValue = StateValue.EXIT
    state.next()
    expect(state.stateValue).toEqual(StateValue.EXIT)
  })
})
