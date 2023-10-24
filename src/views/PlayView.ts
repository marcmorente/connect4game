import { type GameController } from '../controllers/GameController'

export class PlayView {
  constructor (private readonly gameController: GameController) {
  }

  async play (): Promise<void> {
    await this.gameController.start()
  }
}
