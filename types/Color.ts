export class Color {
  private readonly color: string
  static readonly RED: Color = new Color('🔴')
  static readonly YELLOW: Color = new Color('🟡')
  static readonly BLANK: Color = new Color('⚪')
  static readonly NULL: null = null

  private constructor (color: string) {
    this.color = color
  }

  toString (): string {
    return this.color
  }
}
