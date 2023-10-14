import { type Game } from '../controllers/Game'
import { type StandardCli } from './StandardCli'
import { GAME_MODE } from '../../types/GameMode'

export class BoardView {
  write (game: Game): void {
    console.log('\n')
    for (let row: number = 0; row < game.getRows(); row++) {
      let rowString: string = ''
      for (let col: number = 0; col < game.getCols(); col++) {
        rowString += game.getToken(row, col).getColor()
      }
      console.log(rowString)
    }
    let columnNumbers: string = ''
    for (let col: number = 1; col <= game.getCols(); col++) {
      columnNumbers += `${col} `
    }
    console.log(columnNumbers)
  }

  async start (game: Game): Promise<void> {
    const cli = game.cli
    cli.print('Welcome to Connect 4!\n')
    let mode: number = 0
    do {
      if (mode !== 0 && this.isInvalidMode(mode)) {
        cli.print('\nInvalid mode! Try again.\n')
      }
      mode = await this.getMode(cli)
    } while (this.isInvalidMode(mode))
    game.setMode(mode)
  }

  async getMode (cli: StandardCli): Promise<number> {
    return await new Promise((resolve, reject) => {
      const message: string =
        'Select one of the following modes:\n' +
        '1. Human vs Human\n' +
        '2. Human vs Bot\n' +
        'Mode: '
      cli.promptUser(message).then((mode: string) => {
        const selectedMode = parseInt(mode) - 1
        resolve(selectedMode)
      }).catch((error) => {
        console.error(error)
        reject(error)
      })
    })
  }

  isInvalidMode (mode: number): boolean {
    return GAME_MODE[mode] === undefined
  }
}
