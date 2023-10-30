import { StartController } from './StartController'
import { PlayController } from './PlayController'
import { ResumeController } from './ResumeController'
import { Game } from '../models/Game'
import { State } from '../models/State'
import { StateValue } from '../models/StateValue'
import { type Controller } from './Controller'

export class Logic {
  private readonly game: Game
  private readonly state: State
  private readonly controllers: Map<StateValue, Controller | null>

  constructor () {
    this.state = new State()
    this.game = new Game()
    this.controllers = new Map<StateValue, Controller>()
    this.controllers.set(StateValue.INITIAL, new StartController(this.game, this.state))
    this.controllers.set(StateValue.IN_GAME, new PlayController(this.game, this.state))
    this.controllers.set(StateValue.RESUME, new ResumeController(this.game, this.state))
    this.controllers.set(StateValue.EXIT, null)
  }

  public getController (): Controller | null | undefined {
    return this.controllers.get(this.state.getValueState())
  }
}
