import { Message } from '../../types/Message'
import { type Session } from '../models/Session'
import { StandardCli } from './StandardCli'

export class StartView {
  private readonly cli: StandardCli

  constructor (private readonly session: Session) {
    this.cli = StandardCli.getInstance()
  }

  async start (): Promise<void> {
    this.cli.print(Message.WELCOME.toString())
    let mode: number = 0
    do {
      if (mode !== 0 && this.session.isInvalidMode(mode)) {
        this.cli.print(Message.INVALID_MODE.toString())
      }
      mode = await this.getMode()
    } while (this.session.isInvalidMode(mode))
    this.session.setPlayers(mode)
    this.session.next()
  }

  async getMode (): Promise<number> {
    return await new Promise((resolve, reject) => {
      const message: string = Message.CHOOSE_MODE.toString()
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
