export class Color {
  static readonly RED: Color = new Color('🔴')
  static readonly YELLOW: Color = new Color('🟡')
  static readonly BLANK: Color = new Color('⚪')
  static readonly NULL: null = null

  private constructor (private readonly color: string) {}

  toString (): string {
    return this.color
  }
}
