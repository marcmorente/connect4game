import { type Game } from '../models/Game'
import { type State } from '../models/State'

export abstract class Controller {
  protected game: Game
  protected state: State

  constructor (game: Game, state: State) {
    this.game = game
    this.state = state
  }

  public resetState (): void {
    this.state.reset()
  }

  public nextState (): void {
    this.state.next()
  }

  public abstract control (): Promise<void>
}
