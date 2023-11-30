/* eslint-disable @typescript-eslint/no-extraneous-class */

import { Registry } from '../../src/models/Registry'
import { GameExamples } from './GameExamples'
import { MementoExamples } from './MementoExamples'

export class RegistryExamples {
  static dummy (): Registry {
    return new Registry(GameExamples.dummy())
  }

  static withTwoMementos (): Registry {
    const registry: Registry = this.dummy()
    registry.mementos = MementoExamples.two()
    registry.firstPrevious = 1
    return registry
  }
}
