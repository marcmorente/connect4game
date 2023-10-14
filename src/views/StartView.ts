import { BoardView } from './BoardView'
import { WithGameView } from './WithGameView'

export class StartView extends WithGameView {
  async interact (): Promise<void> {
    await new BoardView().start(this.game)
  }
}
