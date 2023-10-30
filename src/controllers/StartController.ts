import { type Game } from '../models/Game'
import { type State } from '../models/State'
import { StartView } from '../views/StartView'
import { Controller } from './Controller'

export class StartController extends Controller {
  private readonly startView: StartView

  constructor (game: Game, state: State) {
    super(game, state)
    this.startView = new StartView(this.game)
  }

  async control (): Promise<void> {
    await this.startView.start()
  }
}
