import { PlayController } from './src/controllers/PlayController'
import { ResumeController } from './src/controllers/ResumeController'
import { StartController } from './src/controllers/StartController'
import { Game } from './src/models/Game'

class Connect4 {
  private readonly game: Game
  private readonly startController: StartController
  private readonly playController: PlayController
  private readonly resumeController: ResumeController

  constructor () {
    this.game = new Game()
    this.startController = new StartController(this.game)
    this.playController = new PlayController(this.game)
    this.resumeController = new ResumeController(this.game)
  }

  async play (): Promise<void> {
    do {
      await this.startController.start()
      await this.playController.play()
    } while (await this.resumeController.resume())
  }
}

void new Connect4().play()
