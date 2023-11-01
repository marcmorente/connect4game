import { type Session } from '../models/Session'
import { StandardCli } from '../views/StandardCli'
import { Controller } from './Controller'

export class UndoRedoController extends Controller {
  private readonly cli: StandardCli

  constructor (session: Session) {
    super(session)
    this.cli = StandardCli.getInstance()
  }

  async control (): Promise<void> {
    this.cli.print('Undo/Redo')
    this.cli.print('1. Undo')
    this.cli.print('2. Redo')
    this.cli.print('0. Continue')

    const option = await this.cli.promptUser('Select an option: ')
    switch (option) {
      case '1':
        this.session.undo()
        break
      case '2':
        this.session.redo()
        break
      case '0':
        this.session.next()
        break
      default:
        this.cli.print('Invalid option')
        break
    }
  }
}
