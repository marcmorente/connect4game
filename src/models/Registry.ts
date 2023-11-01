import assert from 'assert'
import { type Game } from './Game'
import { type Memento } from './Memento'

export class Registry {
  private mementos!: Memento[]
  private memento!: Memento
  private firstPrevious!: number

  constructor (private readonly game: Game) {
    this.reset()
  }

  reset (): void {
    this.firstPrevious = 0
    this.mementos = [this.game.createMemento()]
  }

  register (): void {
    this.mementos.splice(0, this.firstPrevious)
    this.firstPrevious = 0
    this.mementos.unshift(this.game.createMemento())
  }

  undo (): void {
    assert(this.undoable())

    this.firstPrevious++
    this.memento = this.mementos[this.firstPrevious]
    this.memento.restore()
  }

  redo (): void {
    assert(this.redoable())

    this.firstPrevious--
    this.memento = this.mementos[this.firstPrevious]
    this.memento.restore()
  }

  undoable (): boolean {
    return this.firstPrevious < this.mementos.length - 1
  }

  redoable (): boolean {
    return this.firstPrevious > 0
  }
}
