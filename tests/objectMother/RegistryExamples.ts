/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Registry } from '../../src/models/Registry'
import { type Memento } from '../../src/models/Memento'
import { Game } from '../../src/models/Game'

export class RegistryExamples {
  static build (): Registry {
    const game = new Game()
    return new Registry(game)
  }

  static buildWithMementos (mementos: Memento[]): Registry {
    const registry = this.build()
    registry.mementos = mementos
    return registry
  }

  static buildWithMemento (memento: Memento): Registry {
    const registry = this.build()
    registry.mementos = [memento]
    return registry
  }

  static buildWithFirstPrevious (firstPrevious: number): Registry {
    const registry = this.build()
    registry.firstPrevious = firstPrevious
    return registry
  }
}
