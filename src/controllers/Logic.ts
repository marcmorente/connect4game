import { StartController } from './StartController'
import { ResumeController } from './ResumeController'
import { StateValue } from '../models/StateValue'
import { type Controller } from './Controller'
import { Session } from '../models/Session'
import { MainController } from './MainController'

export class Logic {
  private readonly session: Session
  private readonly controllers: Map<StateValue, Controller | null>

  constructor () {
    this.session = new Session()
    this.controllers = new Map<StateValue, Controller>()
    this.controllers.set(StateValue.INITIAL, new StartController(this.session))
    this.controllers.set(StateValue.IN_GAME, new MainController(this.session))
    this.controllers.set(StateValue.RESUME, new ResumeController(this.session))
    this.controllers.set(StateValue.EXIT, null)
  }

  public getController (): Controller | null | undefined {
    return this.controllers.get(this.session.getValueState())
  }
}
