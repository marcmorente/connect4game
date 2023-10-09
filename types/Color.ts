export class Color {
  private readonly color: string
  static readonly RED: string = new Color('🔴').toString()
  static readonly YELLOW: string = new Color('🟡').toString()
  static readonly BLANK: string = new Color('⚪').toString()
  static readonly NULL: null = null

  private constructor (color: string) {
    this.color = color
  }

  toString (): string {
    return this.color
  }
}
