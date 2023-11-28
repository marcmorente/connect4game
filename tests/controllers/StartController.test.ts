import { describe, expect, beforeEach, it, jest } from '@jest/globals'
import { StartController } from '../../src/controllers/StartController'
import { Session } from '../../src/models/Session'

jest.mock('../../src/controllers/StartController')

describe('StartController', () => {
  let session: Session
  let startController: StartController

  beforeEach(() => {
    session = new Session()
    startController = new StartController(session)
  })

  it('should call start on the StartView when control is called', async () => {
    const spy = jest.spyOn(startController, 'control')
    await startController.control()
    expect(spy).toHaveBeenCalled()
  })
})
