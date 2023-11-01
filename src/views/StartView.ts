import { type Session } from '../models/Session'
import { StandardCli } from './StandardCli'

export class StartView {
  private readonly cli: StandardCli

  constructor (private readonly session: Session) {
    this.cli = StandardCli.getInstance()
  }

  async start (): Promise<void> {
    this.cli.print('Welcome to Connect 4!\n')
    let mode: number = 0
    do {
      if (mode !== 0 && this.session.isInvalidMode(mode)) {
        this.cli.print('\nInvalid mode! Try again.\n')
      }
      mode = await this.getMode()
    } while (this.session.isInvalidMode(mode))
    this.session.setPlayers(mode)
  }

  async getMode (): Promise<number> {
    return await new Promise((resolve, reject) => {
      const message: string =
            'Select one of the following modes to start the game:\n' +
            '1. Human vs Human\n' +
            '2. Human vs Bot\n' +
            'Mode: '
      this.cli.promptUser(message).then((mode: string) => {
        const selectedMode = parseInt(mode) - 1
        resolve(selectedMode)
      }).catch((error) => {
        console.error(error)
        reject(error)
      })
    })
  }
}
