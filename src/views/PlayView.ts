import { WithGameView } from './WithGameView'

export class PlayView extends WithGameView {
  async interact (): Promise<void> {
    await this.game.start()
  }
}
