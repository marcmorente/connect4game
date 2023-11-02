export class Message {
  static readonly TITLE = new Message('--- TIC TAC TOE ---')
  static readonly HORIZONTAL_LINE = new Message('---------------')
  static readonly VERTICAL_LINE = new Message(' | ')
  static readonly ACTION_COMMAND = new Message('Do an action')
  static readonly UNDO_COMMAND = new Message('Undo previous action')
  static readonly REDO_COMMAND = new Message('Redo previous action')
  static readonly ENTER_COORDINATE_TO_PUT = new Message('Enter a coordinate to put the token:')
  static readonly COORDINATE_TO_PUT = new Message('Coordinate to put')
  static readonly COORDINATE_TO_REMOVE = new Message('Origin coordinate to move')
  static readonly COORDINATE_TO_MOVE = new Message('Target coordinate to move')
  static readonly PLAYER_WIN = new Message('#player player: You win!!! :-)')
  static readonly RESUME = new Message('Do you want to continue')

  private constructor (private readonly message: string) {}

  toString (): string {
    return this.message
  }
}
