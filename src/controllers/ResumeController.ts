import { type Game } from '../models/Game'
import { ResumeView } from '../views/ResumeView'

export class ResumeController {
  private readonly resumeView: ResumeView

  constructor (private readonly game: Game) {
    this.resumeView = new ResumeView(this.game)
  }

  async resume (): Promise<boolean> {
    return await this.resumeView.resume()
  }
}
