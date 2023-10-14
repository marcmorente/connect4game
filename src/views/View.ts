import { type Game } from '../controllers/Game'
import { PlayView } from './PlayView'
import { ResumeView } from './ResumeView'
import { StartView } from './StartView'
import { WithGameView } from './WithGameView'

export class View extends WithGameView {
  private readonly startView: StartView
  private readonly playView: PlayView
  private readonly resumeView: ResumeView

  constructor (game: Game) {
    super(game)
    this.startView = new StartView(game)
    this.playView = new PlayView(game)
    this.resumeView = new ResumeView(game)
  }

  async start (): Promise<void> {
    await this.startView.interact()
  }

  async play (): Promise<void> {
    await this.playView.interact()
  }

  async resume (): Promise<boolean> {
    return await this.resumeView.interact()
  }
}
