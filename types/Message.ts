export class Message {
  static readonly PLAYER_TEMPLATE = new Message('{PLAYER}')
  static readonly WELCOME = new Message('Welcome to Connect 4!\n')
  static readonly INVALID_MODE = new Message('\nInvalid mode! Try again.\n')
  static readonly CHOOSE_MODE = new Message(
    'Select one of the following modes to start the game:\n' +
    '1. Human vs Human\n' +
    '2. Human vs Bot\n' +
    'Mode: '
  )

  static readonly CONTINUE_COMMAND = new Message('Continue')
  static readonly UNDO_COMMAND = new Message('Undo previous action')
  static readonly REDO_COMMAND = new Message('Redo previous action')
  static readonly WRONG_COLUMN = new Message('\nWrong column! Try again.\n')
  static readonly CHOOSE_COLUMN = new Message(`Choose column, ${Message.PLAYER_TEMPLATE.toString()}:`)
  static readonly WINNER = new Message(`\n${Message.PLAYER_TEMPLATE.toString()} wins!!\n`)
  static readonly TIE = new Message('\nTie!!\n')
  static readonly RESUME = new Message('Do you want to play again? (Y/n): ')
  static readonly THANKS = new Message('Thanks for playing!')

  private constructor (private readonly message: string) {}

  toString (): string {
    return this.message
  }

  static replace (template: Message, message: Message, value: string): Message {
    return new Message(message.toString().replace(template.toString(), value))
  }
}
