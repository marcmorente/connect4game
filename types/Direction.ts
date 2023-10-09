export class Direction {
  public static readonly HORIZONTAL: Direction = new Direction(0, 1)
  public static readonly VERTICAL: Direction = new Direction(1, 0)
  public static readonly NORMAL_DIAGONAL: Direction = new Direction(1, 1)
  public static readonly INVERSE_DIAGONAL: Direction = new Direction(-1, 1)

  public static readonly ALL: Direction[] = [
    Direction.HORIZONTAL,
    Direction.VERTICAL,
    Direction.NORMAL_DIAGONAL,
    Direction.INVERSE_DIAGONAL
  ]

  public readonly x: number
  public readonly y: number

  private constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }
}
