import { describe, expect, beforeEach, it } from '@jest/globals'
import { Logic } from '../../src/controllers/Logic'
import { StateValue } from '../../src/models/StateValue'
import { StartController } from '../../src/controllers/StartController'
import { GameController } from '../../src/controllers/GameController'
import { ResumeController } from '../../src/controllers/ResumeController'

describe('Logic', () => {
  let logic: Logic

  beforeEach(() => {
    logic = new Logic()
  })

  it('should return a StartController when the state is INITIAL', () => {
    expect(logic.getController()).toBeInstanceOf(StartController)
  })

  it('should return a GameController when the state is IN_GAME', () => {
    logic.setValueState(StateValue.IN_GAME)
    expect(logic.getController()).toBeInstanceOf(GameController)
  })

  it('should return a ResumeController when the state is RESUME', () => {
    logic.setValueState(StateValue.RESUME)
    expect(logic.getController()).toBeInstanceOf(ResumeController)
  })

  it('should return null when the state is EXIT', () => {
    logic.setValueState(StateValue.EXIT)
    expect(logic.getController()).toBeNull()
  })
})
