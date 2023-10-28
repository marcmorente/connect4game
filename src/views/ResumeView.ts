import { type Game } from '../models/Game'
import { StandardCli } from './StandardCli'

export class ResumeView {
  private readonly cli: StandardCli

  constructor (private readonly game: Game) {
    this.game = game
    this.cli = StandardCli.getInstance()
  }

  async resume (): Promise<boolean> {
    return await new Promise((resolve, reject) => {
      this.cli
        .promptUser('Do you want to play again? (Y/n): ')
        .then((resume) => {
          if (resume.toLowerCase() === 'n') {
            this.cli.print('Thanks for playing!')
            this.cli.close()
            resolve(false)
          }
          this.game.reset()
          resolve(true)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
