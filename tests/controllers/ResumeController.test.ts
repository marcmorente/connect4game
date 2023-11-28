import { describe, expect, beforeEach, it, jest } from '@jest/globals'
import { ResumeController } from '../../src/controllers/ResumeController'
import { Session } from '../../src/models/Session'

describe('ResumeController', () => {
  let session: Session
  let resumeController: ResumeController

  beforeEach(() => {
    session = new Session()
    resumeController = new ResumeController(session)
  })

  it('should reset the session when resume returns true', async () => {
    mockResume(true)
    const spy = mockReset()
    await resumeController.control()
    expect(spy).toHaveBeenCalled()
  })

  it('should not reset the session when resume returns false', async () => {
    mockResume(false)
    const spy = mockReset()
    await resumeController.control()
    expect(spy).not.toHaveBeenCalled()
  })

  function mockResume (returnValue: boolean): void {
    jest.spyOn(resumeController, 'resume').mockResolvedValue(returnValue)
  }

  function mockReset (): any {
    return jest.spyOn(session, 'reset')
  }
})
