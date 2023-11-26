import { type Color } from '../../types/Color'

export class Token {
  constructor (private readonly color: Color | null) {
    this.color = color
  }

  getColor (): Color | null {
    return this.color ?? null
  }
}
