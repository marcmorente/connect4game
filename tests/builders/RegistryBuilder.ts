import { Registry } from '../../src/models/Registry'
import { type Memento } from '../../src/models/Memento'
import { Game } from '../../src/models/Game'

export class RegistryBuilder {
  build (): Registry {
    const game = new Game()
    return new Registry(game)
  }

  buildWithMementos (mementos: Memento[]): Registry {
    const registry = this.build()
    registry.mementos = mementos
    return registry
  }

  buildWithMemento (memento: Memento): Registry {
    const registry = this.build()
    registry.mementos = [memento]
    return registry
  }

  buildWithFirstPrevious (firstPrevious: number): Registry {
    const registry = this.build()
    registry.firstPrevious = firstPrevious
    return registry
  }
}
