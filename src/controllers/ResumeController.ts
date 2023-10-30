import { type Game } from '../models/Game'
import { type State } from '../models/State'
import { ResumeView } from '../views/ResumeView'
import { Controller } from './Controller'

export class ResumeController extends Controller {
  private readonly resumeView: ResumeView

  constructor (game: Game, state: State) {
    super(game, state)
    this.resumeView = new ResumeView(this.game)
  }

  async control (): Promise<void> {
    const resume = await this.resumeView.resume()
    if (resume) {
      this.resetState()
    }
  }
}
