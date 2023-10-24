import { type GameController } from '../controllers/GameController'
import { PlayView } from './PlayView'
import { ResumeView } from './ResumeView'
import { StartView } from './StartView'

export class View {
  private readonly startView: StartView
  private readonly playView: PlayView
  private readonly resumeView: ResumeView

  constructor (private readonly gameController: GameController) {
    this.startView = new StartView(this.gameController)
    this.playView = new PlayView(this.gameController)
    this.resumeView = new ResumeView(this.gameController)
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
