import assert from 'assert'

export class ClosedInterval {
  private readonly min: number
  private readonly max: number

  constructor (min: number, max: number) {
    assert(min <= max)

    this.min = min
    this.max = max
  }

  isIncluded (value: number): boolean {
    return this.min <= value && value <= this.max
  }

  toString (): string {
    return '[' + this.min + ', ' + this.max + ']'
  }

  equals (obj: ClosedInterval): boolean {
    if (this === obj) {
      return true
    }
    if (obj === null) {
      return false
    }
    if (!(obj instanceof ClosedInterval)) {
      return false
    }
    return this.min === obj.min && this.max === obj.max
  }
}
