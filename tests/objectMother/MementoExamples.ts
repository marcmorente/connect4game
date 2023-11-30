/* eslint-disable @typescript-eslint/no-extraneous-class */

import { type Memento } from '../../src/models/Memento'
import { GameExamples } from './GameExamples'

export class MementoExamples {
  static dummy (): Memento {
    return GameExamples.dummy().createMemento()
  }

  static first (): Memento {
    return GameExamples.turnOne().createMemento()
  }

  static second (): Memento {
    return GameExamples.turnTwo().createMemento()
  }

  static two (): Memento[] {
    return [this.first(), this.second()]
  }
}
