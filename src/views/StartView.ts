import { GameView } from './GameView'
import { WithGameView } from './WithGameView'

export class StartView extends WithGameView {
  async interact (): Promise<void> {
    await new GameView().start(this.game, this.cli)
  }
}
