import { Message } from '../../types/Message'
import { type Session } from '../models/Session'
import { StandardCli } from './StandardCli'

export class ResumeView {
  private readonly cli: StandardCli

  constructor (private readonly session: Session) {
    this.cli = StandardCli.getInstance()
  }

  async resume (): Promise<boolean> {
    return await new Promise((resolve, reject) => {
      this.cli
        .promptUser(Message.RESUME.toString())
        .then((resume) => {
          if (resume.toLowerCase() === 'n') {
            this.cli.print(Message.THANKS.toString())
            this.cli.close()
            resolve(false)
          }
          resolve(true)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  printWinner (): void {
    const player = this.session.getCurrentPlayer()
    this.cli.print(
      Message
        .replace(
          Message.PLAYER_TEMPLATE,
          Message.WINNER,
          `${player.getName()}(${player.getColor()?.toString()})`
        )
        .toString()
    )
  }

  printTie (): void {
    this.cli.print(Message.TIE.toString())
  }
}
