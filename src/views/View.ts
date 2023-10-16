import { type Game } from '../controllers/Game'
import { PlayView } from './PlayView'
import { ResumeView } from './ResumeView'
import { StartView } from './StartView'

export class View {
  private readonly startView: StartView
  private readonly playView: PlayView
  private readonly resumeView: ResumeView

  constructor (private readonly game: Game) {
    this.startView = new StartView(this.game)
    this.playView = new PlayView(this.game)
    this.resumeView = new ResumeView(this.game)
  }

  async start (): Promise<void> {
    await this.startView.start()
  }

  async play (): Promise<void> {
    await this.playView.play()
  }

  async resume (): Promise<boolean> {
    return await this.resumeView.resume()
  }
}
