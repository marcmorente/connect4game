import { type Game } from '../models/Game'
import { ResumeView } from './ResumeView'
import { StartView } from './StartView'

export class View {
  private readonly startView: StartView
  private readonly resumeView: ResumeView

  constructor (private readonly game: Game) {
    this.startView = new StartView(this.game)
    this.resumeView = new ResumeView(this.game)
  }

  async start (): Promise<void> {
    await this.startView.start()
  }

  async resume (): Promise<boolean> {
    return await this.resumeView.resume()
  }
}
