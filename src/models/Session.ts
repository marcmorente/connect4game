import { type Color } from '../../types/Color'
import { type Board } from './Board'
import { Game } from './Game'
import { type Player } from './Player'
import { Registry } from './Registry'
import { State } from './State'
import { type StateValue } from './StateValue'

export class Session {
  private readonly state: State
  private readonly game: Game
  private readonly registry: Registry

  constructor () {
    this.state = new State()
    this.game = new Game()
    this.registry = new Registry(this.game)
  }

  reset (): void {
    this.game.reset()
    this.state.reset()
    this.registry.reset()
  }

  nextState (): void {
    this.state.next()
  }

  setValueState (stateValue: StateValue): void {
    this.state.setValueState(stateValue)
  }

  persist (): void {
    this.registry.register()
  }

  getValueState (): number {
    return this.state.getValueState()
  }

  getBoard (): Board {
    return this.game.getBoard()
  }

  getCurrentPlayer (): Player {
    return this.game.getCurrentPlayer()
  }

  getWinner (): Color | null {
    return this.game.getWinner()
  }

  switchPlayer (): void {
    this.game.switchPlayer()
  }

  isFinished (): boolean {
    return this.game.isFinished()
  }

  isInvalidMode (mode: number): boolean {
    return this.game.isInvalidMode(mode)
  }

  setPlayers (mode: number): void {
    this.game.setPlayers(mode)
  }

  undoable (): boolean {
    return this.registry.undoable()
  }

  redoable (): boolean {
    return this.registry.redoable()
  }

  undo (): void {
    this.registry.undo()
    this.game.switchPlayer()
  }

  redo (): void {
    this.registry.redo()
    this.game.switchPlayer()
  }
}
