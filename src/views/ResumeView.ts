import { type Game } from '../controllers/Game'
import { type StandardCli } from './StandardCli'
import { WithGameView } from './WithGameView'

export class ResumeView extends WithGameView {
  protected standardCli: StandardCli

  constructor (game: Game) {
    super(game)
    this.standardCli = game.cli
  }

  async interact (): Promise<boolean> {
    return await new Promise((resolve, reject) => {
      this.standardCli.promptUser('Do you want to play again? (Y/n): ')
        .then(resume => {
          if (resume.toLowerCase() === 'n') {
            this.standardCli.print('Thanks for playing!')
            this.standardCli.close()
            resolve(false)
          }
          this.game.reset()
          resolve(true)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
