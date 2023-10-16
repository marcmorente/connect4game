import { WithGameView } from './WithGameView'

export class ResumeView extends WithGameView {
  async interact (): Promise<boolean> {
    return await new Promise((resolve, reject) => {
      this.cli
        .promptUser('Do you want to play again? (Y/n): ')
        .then((resume) => {
          if (resume.toLowerCase() === 'n') {
            this.cli.print('Thanks for playing!')
            this.cli.close()
            resolve(false)
          }
          this.game.getBoard().reset()
          resolve(true)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
