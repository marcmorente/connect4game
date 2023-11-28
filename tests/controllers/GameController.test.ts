import { describe, expect, beforeEach, it, jest } from '@jest/globals'
import { GameController } from '../../src/controllers/GameController'
import { Session } from '../../src/models/Session'
import { PlayMenu } from '../../src/views/PlayMenu'

jest.mock('../../src/views/PlayMenu')

describe('GameController', () => {
  let session: Session
  let gameController: GameController

  beforeEach(() => {
    session = new Session()
    gameController = new GameController(session)
  })

  it('should call execute on the PlayMenu until the session is finished', async () => {
    const spy = jest.spyOn(PlayMenu.prototype, 'execute')
    jest.spyOn(session, 'isFinished').mockReturnValueOnce(false).mockReturnValueOnce(true)
    await gameController.control()
    expect(spy).toHaveBeenCalledTimes(2)
  })
})
